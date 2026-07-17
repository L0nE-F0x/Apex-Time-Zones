import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { SPORT_SERIES, searchSports } from '../src/js/sports/catalog.js';
import { annotateSession, sessionToInstant, primarySession } from '../src/js/sports/schedule.js';
import { getCityById } from '../src/js/cities.js';

describe('sports catalog', () => {
  it('includes Formula 1 with multiple GPs', () => {
    const f1 = searchSports('formula 1')[0];
    assert.ok(f1);
    assert.match(f1.name, /Formula 1/i);
    assert.ok(f1.events.length >= 10);
  });

  it('finds MTG / Magic', () => {
    const mtg = searchSports('magic the gathering')[0];
    assert.ok(mtg);
    assert.match(mtg.name, /Magic/i);
  });

  it('finds World Cup', () => {
    const wc = searchSports('world cup')[0];
    assert.ok(wc);
    assert.ok(wc.events.some((e) => /final/i.test(e.name)));
  });
});

describe('sports schedule dual times', () => {
  it('converts Silverstone race wall time to UTC instant', () => {
    const f1 = SPORT_SERIES.find((s) => s.id === 'f1-2026');
    const gb = f1.events.find((e) => e.id === 'f1-26-gb');
    const race = primarySession(gb);
    const instant = sessionToInstant(race, gb.tz);
    assert.ok(instant instanceof Date);
    const ann = annotateSession(race, gb.tz, 'Asia/Makassar', false, new Date('2026-01-01T00:00:00Z'));
    assert.ok(ann.venueTime);
    assert.ok(ann.localTime);
    assert.ok(ann.countdown);
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
