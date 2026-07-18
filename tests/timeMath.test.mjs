/**
 * Unit tests against shipped pure time helpers (src/js/timeMath.js).
 * Run: node --test tests/timeMath.test.mjs
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  convertEventTime,
  convertEventToZones,
  relativeDelta,
  formatTime,
  wallTimeToUtcDate,
  getOffsetMinutes,
  formatConversionCopy,
  quickEventPresets,
  isDaytimeSolar,
  approxSunDirection,
  latLngToVector3,
} from '../src/js/timeMath.js';
import { CITIES } from '../src/js/cities.js';
import { searchCities } from '../src/js/timezones.js';

describe('wallTimeToUtcDate / convertEventTime', () => {
  it('converts 15:00 Europe/London to a real instant and formats local', () => {
    // Use a fixed mid-winter date (no UK DST): 2024-01-15 15:00 London = 15:00 UTC
    const result = convertEventTime(
      '2024-01-15',
      '15:00',
      'Europe/London',
      'America/New_York'
    );
    assert.ok(result, 'conversion should succeed');
    assert.ok(result.instant instanceof Date);
    // London winter = UTC; NY = UTC-5 → 10:00
    const ny = formatTime(result.instant, 'America/New_York', {
      withSeconds: false,
      hour12: false,
    });
    assert.match(ny, /10:00/);
    const lon = formatTime(result.instant, 'Europe/London', {
      withSeconds: false,
      hour12: false,
    });
    assert.match(lon, /15:00/);
  });

  it('handles US spring-forward DST (2024-03-10): 1:30→3:30 wall is ~1h UTC', () => {
    // Clocks jump 2:00→3:00; 1:30 EST and 3:30 EDT are one real hour apart
    const before = wallTimeToUtcDate(2024, 3, 10, 1, 30, 'America/New_York');
    const after = wallTimeToUtcDate(2024, 3, 10, 3, 30, 'America/New_York');
    assert.ok(before instanceof Date);
    assert.ok(after instanceof Date);
    const deltaH = (after.getTime() - before.getTime()) / 3600000;
    assert.ok(deltaH >= 0.9 && deltaH <= 1.2, `expected ~1h UTC gap across spring-forward, got ${deltaH}`);
    // Offsets differ: winter-side vs summer-side
    const offBefore = getOffsetMinutes(before, 'America/New_York');
    const offAfter = getOffsetMinutes(after, 'America/New_York');
    assert.equal(offBefore, -300);
    assert.equal(offAfter, -240);
  });

  it('handles US fall-back style offsets around 2024-11-03', () => {
    const oneAm = wallTimeToUtcDate(2024, 11, 3, 1, 0, 'America/New_York');
    const threeAm = wallTimeToUtcDate(2024, 11, 3, 3, 0, 'America/New_York');
    assert.ok(oneAm && threeAm);
    const deltaH = (threeAm.getTime() - oneAm.getTime()) / 3600000;
    // Across fall-back, 1am→3am wall can span ~3 hours of UTC
    assert.ok(deltaH >= 2 && deltaH <= 4, `got ${deltaH}`);
  });

  it('London summer BST: 15:00 London = 14:00 UTC (2024-07-01)', () => {
    const result = convertEventTime('2024-07-01', '15:00', 'Europe/London', 'UTC');
    assert.ok(result);
    const utc = formatTime(result.instant, 'UTC', { withSeconds: false, hour12: false });
    assert.match(utc, /14:00/);
  });
});

describe('relativeDelta', () => {
  it('reports Tokyo ahead of New York', () => {
    const now = new Date('2024-06-15T12:00:00Z');
    const d = relativeDelta(now, 'Asia/Tokyo', 'America/New_York');
    assert.ok(d.minutes > 0, 'Tokyo should be ahead of NY');
    assert.match(d.label, /ahead/);
  });

  it('same zone is zero', () => {
    const now = new Date();
    const d = relativeDelta(now, 'Europe/London', 'Europe/London');
    assert.equal(d.minutes, 0);
    assert.match(d.label, /same/);
  });
});

describe('convertEventToZones multi-city', () => {
  it('returns rows for multiple pinned zones', () => {
    const zones = [
      { id: 'nyc', name: 'New York', tz: 'America/New_York' },
      { id: 'tyo', name: 'Tokyo', tz: 'Asia/Tokyo' },
      { id: 'syd', name: 'Sydney', tz: 'Australia/Sydney' },
    ];
    const multi = convertEventToZones(
      '2024-01-15',
      '15:00',
      'Europe/London',
      zones,
      'America/Chicago',
      false
    );
    assert.ok(multi);
    assert.equal(multi.rows.length, 3);
    assert.ok(multi.rows.every((r) => r.time && r.deltaLabel));
    const copy = formatConversionCopy('Test event', 'London', multi.rows, multi.local);
    assert.match(copy, /New York/);
    assert.match(copy, /Tokyo/);
  });
});

describe('formatTime 12/24', () => {
  it('honors hour12 flag', () => {
    const d = new Date('2024-01-15T20:00:00Z');
    const h24 = formatTime(d, 'UTC', { withSeconds: false, hour12: false });
    const h12 = formatTime(d, 'UTC', { withSeconds: false, hour12: true });
    assert.match(h24, /20:00/);
    assert.ok(/8:00|20:00/.test(h12) || /PM/i.test(h12));
  });
});

describe('search + cities', () => {
  it('ranks exact city name highly', () => {
    const r = searchCities('Tokyo');
    assert.ok(r.length);
    assert.equal(r[0].name, 'Tokyo');
  });

  it('finds EST via tags', () => {
    const r = searchCities('est');
    assert.ok(r.some((c) => c.tz === 'America/New_York'));
  });

  it('Vietnam uses Asia/Ho_Chi_Minh', () => {
    const hanoi = CITIES.find((c) => c.id === 'han');
    assert.equal(hanoi.tz, 'Asia/Ho_Chi_Minh');
  });
});

describe('solar day/night', () => {
  it('approxSunDirection is unit-ish and isDaytimeSolar uses it', () => {
    const dir = approxSunDirection(new Date('2024-06-21T12:00:00Z'));
    const len = Math.hypot(dir.x, dir.y, dir.z);
    assert.ok(Math.abs(len - 1) < 0.01);
    // Greenwich noon-ish in June should be day
    const day = isDaytimeSolar(51.5, 0, dir);
    assert.equal(typeof day, 'boolean');
  });

  it('latLngToVector3 radius scales', () => {
    const a = latLngToVector3(0, 0, 1);
    const b = latLngToVector3(0, 0, 2);
    assert.ok(Math.abs(Math.hypot(b.x, b.y, b.z) - 2 * Math.hypot(a.x, a.y, a.z)) < 1e-9);
  });
});

describe('quickEventPresets', () => {
  it('returns everyday and sports-friendly chips (no market jargon)', () => {
    const p = quickEventPresets(new Date('2024-06-01T12:00:00Z'), 'America/New_York');
    assert.ok(p.some((x) => x.id === 'in2h'));
    assert.ok(p.some((x) => x.id === 'tonight'));
    assert.ok(p.some((x) => x.id === 'lonko' && x.timeStr === '15:00'));
    assert.ok(p.some((x) => x.id === 'nyprime' && x.fromTz === 'America/New_York'));
    const labels = p.map((x) => x.label.toLowerCase()).join(' ');
    assert.ok(!labels.includes('market'));
    assert.ok(!labels.includes('crypto'));
  });
});

describe('getOffsetMinutes DST', () => {
  it('NY winter offset is -300 minutes', () => {
    const m = getOffsetMinutes(new Date('2024-01-15T12:00:00Z'), 'America/New_York');
    assert.equal(m, -300);
  });
  it('NY summer offset is -240 minutes', () => {
    const m = getOffsetMinutes(new Date('2024-07-15T12:00:00Z'), 'America/New_York');
    assert.equal(m, -240);
  });
});
