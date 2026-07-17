import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { SPORT_SERIES, searchSports, searchEvents, applyCatalog, SPORT_META } from '../src/js/sports/catalog.js';
import { annotateSession, nextSession, sessionToInstant, upcomingAcrossSeries } from '../src/js/sports/schedule.js';
import { buildCatalog, validateCatalog } from '../scripts/build-sports-data.mjs';
import { getCityById } from '../src/js/cities.js';

describe('catalog schema', () => {
  it('authoring data validates clean', () => {
    const errors = validateCatalog(buildCatalog());
    assert.deepEqual(errors, []);
  });

  it('bundled JSON matches authoring data series count', () => {
    const built = buildCatalog();
    assert.equal(SPORT_SERIES.length, built.series.length);
  });

  it('every series has a known sport key', () => {
    for (const s of SPORT_SERIES) {
      assert.ok(SPORT_META[s.sport], `unknown sport "${s.sport}" on ${s.id}`);
    }
  });

  it('esports are gone', () => {
    const hay = SPORT_SERIES.map((s) => `${s.id} ${s.name} ${s.category}`.toLowerCase()).join(' ');
    for (const term of ['mtg', 'magic', 'league of legends', 'counter-strike', 'esports']) {
      assert.ok(!hay.includes(term), `esports term "${term}" still present`);
    }
  });

  it('every session resolves to a real instant', () => {
    for (const s of SPORT_SERIES) {
      for (const e of s.events) {
        for (const sess of e.sessions) {
          const instant = sessionToInstant(sess, e.tz);
          assert.ok(
            instant instanceof Date && !Number.isNaN(instant.getTime()),
            `${s.id}/${e.id}/${sess.id} did not resolve`
          );
        }
      }
    }
  });
});

describe('sports coverage', () => {
  it('includes Formula 1 with 22 rounds', () => {
    const f1 = SPORT_SERIES.find((s) => s.id === 'f1-2026');
    assert.ok(f1);
    assert.equal(f1.events.length, 22);
  });

  it('finds UFC', () => {
    const hits = searchSports('ufc');
    assert.ok(hits.length && hits[0].sport === 'mma');
  });

  it('finds WSL surfing', () => {
    const hits = searchSports('surfing');
    assert.ok(hits.length && hits[0].id === 'wsl-2026');
  });

  it('finds World Cup', () => {
    const wc = searchSports('world cup')[0];
    assert.ok(wc);
    assert.ok(wc.events.some((e) => /final/i.test(e.name)));
  });

  it('event search hits venues directly', () => {
    assert.ok(searchEvents('teahupo').some((h) => h.event.id === 'wsl-teahupoo'));
    assert.ok(searchEvents('metlife').some((h) => h.event.id === 'wc-final'));
  });
});

describe('schedule dual times', () => {
  it('WC final kickoff converts to a real instant', () => {
    const wc = SPORT_SERIES.find((s) => s.id === 'wc-2026');
    const final = wc.events.find((e) => e.id === 'wc-final');
    const a = annotateSession(final.sessions[0], final.tz, 'Europe/London', false, new Date('2026-07-17T00:00:00Z'));
    // 15:00 EDT = 19:00 UTC = 20:00 London (BST)
    assert.equal(a.instant.toISOString(), '2026-07-19T19:00:00.000Z');
    assert.equal(a.status, 'upcoming');
  });

  it('window session annotates as waiting period', () => {
    const wsl = SPORT_SERIES.find((s) => s.id === 'wsl-2026');
    const tahiti = wsl.events.find((e) => e.id === 'wsl-teahupoo');

    const before = annotateSession(tahiti.sessions[0], tahiti.tz, 'UTC', false, new Date('2026-08-01T00:00:00Z'));
    assert.equal(before.isWindow, true);
    assert.equal(before.status, 'upcoming');
    assert.match(before.venueTime, /first call/);

    const during = annotateSession(tahiti.sessions[0], tahiti.tz, 'UTC', false, new Date('2026-08-12T00:00:00Z'));
    assert.equal(during.status, 'live-or-recent');
    assert.equal(during.countdown, 'window open');

    const after = annotateSession(tahiti.sessions[0], tahiti.tz, 'UTC', false, new Date('2026-09-01T00:00:00Z'));
    assert.equal(after.status, 'finished');
  });

  it('nextSession skips finished sessions', () => {
    const f1 = SPORT_SERIES.find((s) => s.id === 'f1-2026');
    const spa = f1.events.find((e) => e.id === 'f1-26-be');
    // 13:00 UTC on Saturday: FP3 (10:30 UTC) is >1h done, qualifying (14:00 UTC) is next
    const next = nextSession(spa, new Date('2026-07-18T13:00:00Z'));
    assert.equal(next.id, 'quali');
  });

  it('upcomingAcrossSeries sorts soonest first', () => {
    const now = new Date('2026-07-17T12:00:00Z');
    const rows = upcomingAcrossSeries(SPORT_SERIES, 'UTC', false, now, 5);
    assert.equal(rows.length, 5);
    for (let i = 1; i < rows.length; i++) {
      assert.ok(rows[i].session.msUntil >= rows[i - 1].session.msUntil);
    }
  });
});

describe('catalog feed swap', () => {
  it('rejects broken payloads, accepts valid ones', () => {
    assert.equal(applyCatalog(null), false);
    assert.equal(applyCatalog({ schemaVersion: 1, series: [] }), false);
    assert.equal(applyCatalog({ schemaVersion: 2, series: [{ id: 'x' }] }), false);
    assert.equal(applyCatalog(buildCatalog(), 'test'), true);
  });
});

describe('cities expansion', () => {
  it('includes Denpasar Bali on Asia/Makassar', () => {
    const dps = getCityById('dps');
    assert.ok(dps);
    assert.equal(dps.name, 'Denpasar');
    assert.equal(dps.tz, 'Asia/Makassar');
  });
});
