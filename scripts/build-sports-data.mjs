/**
 * Sports data authoring source of truth.
 *
 * Edit the data in this file, then run:  node scripts/build-sports-data.mjs
 * It validates everything and emits:
 *   - src/data/sports-catalog.json          (bundled offline snapshot)
 *   - website/data/sports/v2/catalog.json   (live feed served by Netlify)
 *
 * Schema v2 (feed path is versioned — bump /v2/ only on breaking changes):
 *   series:  { id, name, sport, category, season, description, tags, events }
 *   event:   { id, name, round?, lat, lng, tz, city, country, tags?, sessions }
 *   session: { id, name, type, date, time }                            — fixed start
 *          | { id, name, type:'window', startDate, endDate, firstCallTime } — waiting period
 *
 * Accuracy rules:
 *   - Dates and venues verified against official sources at authoring time.
 *   - Session start times follow each competition's standard slots and are
 *     refreshed over the air via the feed as organisers confirm them.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** F1/MotoGP-style race weekend generator. baseDate = race day YYYY-MM-DD. */
function raceWeekend(baseDate, raceTime, { sprint = false, qualiTime = '16:00' } = {}) {
  const d = new Date(baseDate + 'T12:00:00Z');
  const day = (offset) => {
    const x = new Date(d);
    x.setUTCDate(x.getUTCDate() + offset);
    return x.toISOString().slice(0, 10);
  };
  const fri = day(-2);
  const sat = day(-1);
  if (sprint) {
    return [
      { id: 'fp1', name: 'Practice 1', type: 'practice', date: fri, time: '13:30' },
      { id: 'sq', name: 'Sprint Qualifying', type: 'qualifying', date: fri, time: '17:30' },
      { id: 'sprint', name: 'Sprint', type: 'sprint', date: sat, time: '12:00' },
      { id: 'quali', name: 'Qualifying', type: 'qualifying', date: sat, time: qualiTime },
      { id: 'race', name: 'Race', type: 'race', date: baseDate, time: raceTime },
    ];
  }
  return [
    { id: 'fp1', name: 'Practice 1', type: 'practice', date: fri, time: '13:30' },
    { id: 'fp2', name: 'Practice 2', type: 'practice', date: fri, time: '17:00' },
    { id: 'fp3', name: 'Practice 3', type: 'practice', date: sat, time: '12:30' },
    { id: 'quali', name: 'Qualifying', type: 'qualifying', date: sat, time: qualiTime },
    { id: 'race', name: 'Race', type: 'race', date: baseDate, time: raceTime },
  ];
}

/** MotoGP Sunday: sprint Saturday + race Sunday. */
function motogpWeekend(raceDate, raceTime = '14:00') {
  const d = new Date(raceDate + 'T12:00:00Z');
  const sat = new Date(d);
  sat.setUTCDate(sat.getUTCDate() - 1);
  const satStr = sat.toISOString().slice(0, 10);
  return [
    { id: 'quali', name: 'Qualifying', type: 'qualifying', date: satStr, time: '10:50' },
    { id: 'sprint', name: 'Sprint', type: 'sprint', date: satStr, time: '15:00' },
    { id: 'race', name: 'Grand Prix Race', type: 'race', date: raceDate, time: raceTime },
  ];
}

function ufcCard(date, { early = null, prelims, main }) {
  const sessions = [];
  if (early) sessions.push({ id: 'early', name: 'Early prelims', type: 'prelims', date, time: early });
  sessions.push({ id: 'prelims', name: 'Prelims', type: 'prelims', date, time: prelims });
  sessions.push({ id: 'main', name: 'Main card', type: 'main-card', date, time: main });
  return sessions;
}

function surfWindow(startDate, endDate, firstCallTime = '07:00') {
  return [
    {
      id: 'window',
      name: 'Competition window',
      type: 'window',
      startDate,
      endDate,
      firstCallTime,
    },
  ];
}

// ————————————————————————————————————————————————————————————————————————
// DATA — verified 2026-07-17. See docs/ROADMAP.md Part 2 / v1.4 for sourcing.
// ————————————————————————————————————————————————————————————————————————

const SERIES = [
  {
    id: 'f1-2026',
    name: 'Formula 1 World Championship',
    sport: 'motorsport',
    category: 'Motorsport',
    season: '2026',
    description:
      '2026 F1 season — 22 rounds (Bahrain and Saudi Arabia cancelled). Sprint weekends: China, Miami, Canada, Britain, Netherlands, Singapore. Saturday races: Baku, Las Vegas.',
    tags: ['formula 1', 'f1', 'grand prix', 'motorsport', 'racing', 'fia'],
    events: [
      { id: 'f1-26-au', name: 'Australian Grand Prix', round: 1, lat: -37.8497, lng: 144.968, tz: 'Australia/Melbourne', city: 'Melbourne', country: 'Australia', sessions: raceWeekend('2026-03-08', '15:00'), tags: ['albert park'] },
      { id: 'f1-26-cn', name: 'Chinese Grand Prix', round: 2, lat: 31.3389, lng: 121.2197, tz: 'Asia/Shanghai', city: 'Shanghai', country: 'China', sessions: raceWeekend('2026-03-15', '15:00', { sprint: true }), tags: ['shanghai'] },
      { id: 'f1-26-jp', name: 'Japanese Grand Prix', round: 3, lat: 34.8431, lng: 136.5407, tz: 'Asia/Tokyo', city: 'Suzuka', country: 'Japan', sessions: raceWeekend('2026-03-29', '14:00'), tags: ['suzuka'] },
      { id: 'f1-26-mi', name: 'Miami Grand Prix', round: 4, lat: 25.9581, lng: -80.2389, tz: 'America/New_York', city: 'Miami', country: 'USA', sessions: raceWeekend('2026-05-03', '16:00', { sprint: true }), tags: ['miami'] },
      { id: 'f1-26-ca', name: 'Canadian Grand Prix', round: 5, lat: 45.5006, lng: -73.5228, tz: 'America/Toronto', city: 'Montreal', country: 'Canada', sessions: raceWeekend('2026-05-24', '14:00', { sprint: true }), tags: ['gilles villeneuve'] },
      { id: 'f1-26-mc', name: 'Monaco Grand Prix', round: 6, lat: 43.7347, lng: 7.4206, tz: 'Europe/Monaco', city: 'Monte Carlo', country: 'Monaco', sessions: raceWeekend('2026-06-07', '15:00'), tags: ['monaco'] },
      { id: 'f1-26-es', name: 'Barcelona-Catalunya Grand Prix', round: 7, lat: 41.57, lng: 2.2611, tz: 'Europe/Madrid', city: 'Barcelona', country: 'Spain', sessions: raceWeekend('2026-06-14', '15:00'), tags: ['catalunya'] },
      { id: 'f1-26-at', name: 'Austrian Grand Prix', round: 8, lat: 47.2197, lng: 14.7647, tz: 'Europe/Vienna', city: 'Spielberg', country: 'Austria', sessions: raceWeekend('2026-06-28', '15:00'), tags: ['red bull ring'] },
      { id: 'f1-26-gb', name: 'British Grand Prix', round: 9, lat: 52.0786, lng: -1.0169, tz: 'Europe/London', city: 'Silverstone', country: 'UK', sessions: raceWeekend('2026-07-05', '15:00', { sprint: true }), tags: ['silverstone'] },
      { id: 'f1-26-be', name: 'Belgian Grand Prix', round: 10, lat: 50.4372, lng: 5.9714, tz: 'Europe/Brussels', city: 'Spa-Francorchamps', country: 'Belgium', sessions: raceWeekend('2026-07-19', '15:00'), tags: ['spa'] },
      { id: 'f1-26-hu', name: 'Hungarian Grand Prix', round: 11, lat: 47.5789, lng: 19.2486, tz: 'Europe/Budapest', city: 'Budapest', country: 'Hungary', sessions: raceWeekend('2026-07-26', '15:00'), tags: ['hungaroring'] },
      { id: 'f1-26-nl', name: 'Dutch Grand Prix', round: 12, lat: 52.3888, lng: 4.5409, tz: 'Europe/Amsterdam', city: 'Zandvoort', country: 'Netherlands', sessions: raceWeekend('2026-08-23', '15:00', { sprint: true }), tags: ['zandvoort'] },
      { id: 'f1-26-it', name: 'Italian Grand Prix', round: 13, lat: 45.6156, lng: 9.2811, tz: 'Europe/Rome', city: 'Monza', country: 'Italy', sessions: raceWeekend('2026-09-06', '15:00'), tags: ['monza'] },
      { id: 'f1-26-md', name: 'Spanish Grand Prix (Madring)', round: 14, lat: 40.468, lng: -3.616, tz: 'Europe/Madrid', city: 'Madrid', country: 'Spain', sessions: raceWeekend('2026-09-13', '15:00'), tags: ['madrid', 'madring', 'new circuit'] },
      { id: 'f1-26-az', name: 'Azerbaijan Grand Prix', round: 15, lat: 40.3725, lng: 49.8533, tz: 'Asia/Baku', city: 'Baku', country: 'Azerbaijan', sessions: raceWeekend('2026-09-26', '15:00'), tags: ['baku', 'saturday race'] },
      { id: 'f1-26-sg', name: 'Singapore Grand Prix', round: 16, lat: 1.2914, lng: 103.864, tz: 'Asia/Singapore', city: 'Singapore', country: 'Singapore', sessions: raceWeekend('2026-10-11', '20:00', { sprint: true }), tags: ['marina bay', 'night'] },
      { id: 'f1-26-us', name: 'United States Grand Prix', round: 17, lat: 30.1328, lng: -97.6411, tz: 'America/Chicago', city: 'Austin', country: 'USA', sessions: raceWeekend('2026-10-25', '14:00'), tags: ['cota'] },
      { id: 'f1-26-mx', name: 'Mexico City Grand Prix', round: 18, lat: 19.4042, lng: -99.0907, tz: 'America/Mexico_City', city: 'Mexico City', country: 'Mexico', sessions: raceWeekend('2026-11-01', '14:00'), tags: [] },
      { id: 'f1-26-br', name: 'São Paulo Grand Prix', round: 19, lat: -23.7036, lng: -46.6997, tz: 'America/Sao_Paulo', city: 'São Paulo', country: 'Brazil', sessions: raceWeekend('2026-11-08', '14:00'), tags: ['interlagos'] },
      { id: 'f1-26-lv', name: 'Las Vegas Grand Prix', round: 20, lat: 36.1147, lng: -115.1728, tz: 'America/Los_Angeles', city: 'Las Vegas', country: 'USA', sessions: raceWeekend('2026-11-21', '20:00'), tags: ['night', 'strip', 'saturday race'] },
      { id: 'f1-26-qa', name: 'Qatar Grand Prix', round: 21, lat: 25.49, lng: 51.4542, tz: 'Asia/Qatar', city: 'Lusail', country: 'Qatar', sessions: raceWeekend('2026-11-29', '19:00'), tags: ['night'] },
      { id: 'f1-26-ae', name: 'Abu Dhabi Grand Prix', round: 22, lat: 24.4672, lng: 54.6031, tz: 'Asia/Dubai', city: 'Yas Island', country: 'UAE', sessions: raceWeekend('2026-12-06', '17:00'), tags: ['yas marina', 'finale'] },
    ],
  },
  {
    id: 'wc-2026',
    name: 'FIFA World Cup 2026',
    sport: 'football',
    category: 'Football',
    season: '2026',
    description:
      'World Cup finale across USA, Canada & Mexico. Semi-finals: Spain 2–0 France, Argentina 2–1 England. Final: Spain vs Argentina.',
    tags: ['world cup', 'fifa', 'football', 'soccer', 'wc2026', 'spain', 'argentina'],
    events: [
      { id: 'wc-sf1', name: 'Semi-final — Spain 2–0 France', lat: 32.7473, lng: -97.0945, tz: 'America/Chicago', city: 'Dallas', country: 'USA', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-07-14', time: '15:00' }], tags: ['semi', 'att stadium'] },
      { id: 'wc-sf2', name: 'Semi-final — Argentina 2–1 England', lat: 33.755, lng: -84.401, tz: 'America/New_York', city: 'Atlanta', country: 'USA', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-07-15', time: '15:00' }], tags: ['semi', 'mercedes-benz stadium'] },
      { id: 'wc-3rd', name: 'Third place — France vs England', lat: 25.958, lng: -80.2389, tz: 'America/New_York', city: 'Miami', country: 'USA', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-07-18', time: '17:00' }], tags: ['third place', 'hard rock stadium'] },
      { id: 'wc-final', name: 'Final — Spain vs Argentina', lat: 40.8135, lng: -74.0745, tz: 'America/New_York', city: 'New York / NJ', country: 'USA', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-07-19', time: '15:00' }], tags: ['final', 'metlife stadium'] },
    ],
  },
  {
    id: 'tennis-2026',
    name: 'Tennis Grand Slams 2026',
    sport: 'tennis',
    category: 'Tennis',
    season: '2026',
    description: 'US Open — the last slam of 2026. Main draw Aug 30 – Sep 13 at Flushing Meadows.',
    tags: ['tennis', 'grand slam', 'us open', 'atp', 'wta', 'flushing meadows'],
    events: [
      { id: 'uso-26', name: 'US Open', lat: 40.75, lng: -73.847, tz: 'America/New_York', city: 'New York', country: 'USA', sessions: [
        { id: 'open-day', name: 'Opening day session', type: 'session', date: '2026-08-30', time: '11:00' },
        { id: 'open-night', name: 'Opening night session', type: 'session', date: '2026-08-30', time: '19:00' },
        { id: 'final-w', name: "Women's Final", type: 'final', date: '2026-09-12', time: '16:00' },
        { id: 'final-m', name: "Men's Final", type: 'final', date: '2026-09-13', time: '14:00' },
      ], tags: ['flushing', 'hard court'] },
    ],
  },
  {
    id: 'ufc-2026',
    name: 'UFC',
    sport: 'mma',
    category: 'Combat',
    season: '2026',
    description:
      'Announced UFC cards — numbered events and Fight Nights with prelim and main-card blocks in venue time.',
    tags: ['ufc', 'mma', 'fight night', 'octagon', 'combat'],
    events: [
      { id: 'ufc-fn-0718', name: 'UFC Fight Night: du Plessis vs Usman', lat: 35.4634, lng: -97.5151, tz: 'America/Chicago', city: 'Oklahoma City', country: 'USA', sessions: ufcCard('2026-07-18', { prelims: '16:00', main: '19:00' }), tags: ['paycom center'] },
      { id: 'ufc-fn-0725', name: 'UFC Fight Night: Ankalaev vs Guskov', lat: 24.4539, lng: 54.6021, tz: 'Asia/Dubai', city: 'Abu Dhabi', country: 'UAE', sessions: ufcCard('2026-07-25', { prelims: '18:00', main: '21:00' }), tags: ['etihad arena'] },
      { id: 'ufc-fn-0801', name: 'UFC Fight Night: Medić vs Rodriguez', lat: 44.8145, lng: 20.4213, tz: 'Europe/Belgrade', city: 'Belgrade', country: 'Serbia', sessions: ufcCard('2026-08-01', { prelims: '16:00', main: '19:00' }), tags: ['belgrade arena'] },
      { id: 'ufc-fn-0808', name: 'UFC Fight Night: Gamrot vs Salkilld', lat: 36.0691, lng: -115.1809, tz: 'America/Los_Angeles', city: 'Las Vegas', country: 'USA', sessions: ufcCard('2026-08-08', { prelims: '16:00', main: '19:00' }), tags: ['ufc apex'] },
      { id: 'ufc-330', name: 'UFC 330: Makhachev vs Machado Garry', lat: 39.9012, lng: -75.172, tz: 'America/New_York', city: 'Philadelphia', country: 'USA', sessions: ufcCard('2026-08-15', { early: '18:00', prelims: '20:00', main: '22:00' }), tags: ['ppv', 'xfinity mobile arena'] },
      { id: 'ufc-fn-0822', name: 'UFC Fight Night: Hernandez vs Rodrigues', lat: 38.5802, lng: -121.4997, tz: 'America/Los_Angeles', city: 'Sacramento', country: 'USA', sessions: ufcCard('2026-08-22', { prelims: '16:00', main: '19:00' }), tags: ['golden 1 center'] },
      { id: 'ufc-fn-0829', name: 'UFC Fight Night: Nurmagomedov vs Song', lat: 31.157, lng: 121.478, tz: 'Asia/Shanghai', city: 'Shanghai', country: 'China', sessions: ufcCard('2026-08-29', { prelims: '15:00', main: '18:00' }), tags: ['oriental sports center'] },
      { id: 'ufc-fn-0905', name: 'UFC Fight Night — Paris', lat: 48.8387, lng: 2.3786, tz: 'Europe/Paris', city: 'Paris', country: 'France', sessions: ufcCard('2026-09-05', { prelims: '18:00', main: '21:00' }), tags: ['accor arena'] },
      { id: 'ufc-fn-0912', name: 'UFC Fight Night — Glendale', lat: 33.532, lng: -112.2612, tz: 'America/Phoenix', city: 'Glendale, AZ', country: 'USA', sessions: ufcCard('2026-09-12', { prelims: '16:00', main: '19:00' }), tags: ['desert diamond arena'] },
      { id: 'ufc-331', name: 'UFC 331', lat: 34.043, lng: -118.2673, tz: 'America/Los_Angeles', city: 'Los Angeles', country: 'USA', sessions: ufcCard('2026-09-19', { early: '15:00', prelims: '17:00', main: '19:00' }), tags: ['ppv', 'crypto.com arena'] },
    ],
  },
  {
    id: 'wsl-2026',
    name: 'WSL Championship Tour',
    sport: 'surfing',
    category: 'Surfing',
    season: '2026',
    description:
      'World Surf League Championship Tour — remaining stops run as waiting periods; heats run when the swell is on, starting from first call each morning.',
    tags: ['wsl', 'surfing', 'surf', 'championship tour', 'waves', 'pipeline', 'teahupoo'],
    events: [
      { id: 'wsl-teahupoo', name: 'Tahiti Pro — Teahupoʻo', lat: -17.8471, lng: -149.2672, tz: 'Pacific/Tahiti', city: 'Teahupoʻo', country: 'French Polynesia', sessions: surfWindow('2026-08-08', '2026-08-18', '07:00'), tags: ['reef', 'barrels'] },
      { id: 'wsl-trestles', name: 'Lower Trestles', lat: 33.3853, lng: -117.5939, tz: 'America/Los_Angeles', city: 'San Clemente', country: 'USA', sessions: surfWindow('2026-09-11', '2026-09-20', '07:30'), tags: ['california'] },
      { id: 'wsl-portugal', name: 'MEO Rip Curl Pro Portugal', lat: 39.3436, lng: -9.3618, tz: 'Europe/Lisbon', city: 'Peniche', country: 'Portugal', sessions: surfWindow('2026-10-16', '2026-10-25', '08:00'), tags: ['supertubos', 'postseason'] },
      { id: 'wsl-cloud9', name: 'Cloud 9 — Siargao', lat: 9.8103, lng: 126.1659, tz: 'Asia/Manila', city: 'Siargao', country: 'Philippines', sessions: surfWindow('2026-10-31', '2026-11-10', '07:00'), tags: ['new stop'] },
      { id: 'wsl-abudhabi', name: 'Surf Abu Dhabi Pro', lat: 24.462, lng: 54.611, tz: 'Asia/Dubai', city: 'Abu Dhabi', country: 'UAE', sessions: surfWindow('2026-11-25', '2026-11-29', '08:00'), tags: ['wave pool', 'postseason'] },
      { id: 'wsl-pipeline', name: 'Pipeline Masters — title decider', lat: 21.665, lng: -158.053, tz: 'Pacific/Honolulu', city: 'Oahu', country: 'USA', sessions: surfWindow('2026-12-08', '2026-12-20', '07:30'), tags: ['pipeline', 'world title'] },
    ],
  },
  {
    id: 'motogp-2026',
    name: 'MotoGP World Championship',
    sport: 'motorsport',
    category: 'Motorsport',
    season: '2026',
    description: 'MotoGP 2026 — remaining rounds with sprint Saturdays and Sunday Grands Prix.',
    tags: ['motogp', 'moto gp', 'motorcycle', 'motorsport', 'racing'],
    events: [
      { id: 'mgp-26-gb', name: 'British Grand Prix', round: 12, lat: 52.0786, lng: -1.0169, tz: 'Europe/London', city: 'Silverstone', country: 'UK', sessions: motogpWeekend('2026-08-09'), tags: ['silverstone'] },
      { id: 'mgp-26-ar', name: 'Aragón Grand Prix', round: 13, lat: 41.077, lng: -0.856, tz: 'Europe/Madrid', city: 'Alcañiz', country: 'Spain', sessions: motogpWeekend('2026-08-30'), tags: ['motorland'] },
      { id: 'mgp-26-sm', name: 'San Marino Grand Prix', round: 14, lat: 43.9614, lng: 12.6833, tz: 'Europe/Rome', city: 'Misano', country: 'San Marino', sessions: motogpWeekend('2026-09-13'), tags: ['misano'] },
      { id: 'mgp-26-at', name: 'Austrian Grand Prix', round: 15, lat: 47.2197, lng: 14.7647, tz: 'Europe/Vienna', city: 'Spielberg', country: 'Austria', sessions: motogpWeekend('2026-09-20'), tags: ['red bull ring'] },
      { id: 'mgp-26-jp', name: 'Japanese Grand Prix', round: 16, lat: 36.533, lng: 140.227, tz: 'Asia/Tokyo', city: 'Motegi', country: 'Japan', sessions: motogpWeekend('2026-10-04'), tags: ['motegi'] },
      { id: 'mgp-26-id', name: 'Indonesian Grand Prix', round: 17, lat: -8.898, lng: 116.305, tz: 'Asia/Makassar', city: 'Mandalika', country: 'Indonesia', sessions: motogpWeekend('2026-10-11'), tags: ['lombok'] },
      { id: 'mgp-26-au', name: 'Australian Grand Prix', round: 18, lat: -38.5028, lng: 145.2308, tz: 'Australia/Melbourne', city: 'Phillip Island', country: 'Australia', sessions: motogpWeekend('2026-10-25'), tags: ['phillip island'] },
      { id: 'mgp-26-my', name: 'Malaysian Grand Prix', round: 19, lat: 2.7608, lng: 101.7382, tz: 'Asia/Kuala_Lumpur', city: 'Sepang', country: 'Malaysia', sessions: motogpWeekend('2026-11-01'), tags: ['sepang'] },
      { id: 'mgp-26-qa', name: 'Qatar Grand Prix', round: 20, lat: 25.49, lng: 51.4542, tz: 'Asia/Qatar', city: 'Lusail', country: 'Qatar', sessions: motogpWeekend('2026-11-08', '19:00'), tags: ['night'] },
      { id: 'mgp-26-pt', name: 'Portuguese Grand Prix', round: 21, lat: 37.227, lng: -8.6267, tz: 'Europe/Lisbon', city: 'Portimão', country: 'Portugal', sessions: motogpWeekend('2026-11-22'), tags: ['algarve'] },
      { id: 'mgp-26-va', name: 'Valencia Grand Prix', round: 22, lat: 39.4854, lng: -0.6316, tz: 'Europe/Madrid', city: 'Valencia', country: 'Spain', sessions: motogpWeekend('2026-11-29'), tags: ['finale', 'ricardo tormo'] },
    ],
  },
  {
    id: 'nfl-2026',
    name: 'NFL 2026 — Marquee',
    sport: 'nfl',
    category: 'American Football',
    season: '2026–27',
    description:
      'NFL season landmarks — Kickoff Game and the Thanksgiving classics. Full weekly slates arrive via the live data feed.',
    tags: ['nfl', 'american football', 'kickoff', 'thanksgiving', 'super bowl'],
    events: [
      { id: 'nfl-kickoff', name: 'NFL Kickoff — Patriots at Seahawks', lat: 47.5952, lng: -122.3316, tz: 'America/Los_Angeles', city: 'Seattle', country: 'USA', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-09-09', time: '17:20' }], tags: ['lumen field', 'season opener'] },
      { id: 'nfl-tg-det', name: 'Thanksgiving — Lions host', lat: 42.34, lng: -83.0456, tz: 'America/Detroit', city: 'Detroit', country: 'USA', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-11-26', time: '12:30' }], tags: ['ford field', 'thanksgiving'] },
      { id: 'nfl-tg-dal', name: 'Thanksgiving — Cowboys host', lat: 32.7473, lng: -97.0945, tz: 'America/Chicago', city: 'Arlington', country: 'USA', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-11-26', time: '15:30' }], tags: ['att stadium', 'thanksgiving'] },
    ],
  },
  {
    id: 'golf-2026',
    name: 'Golf Majors 2026',
    sport: 'golf',
    category: 'Golf',
    season: '2026',
    description: 'The 154th Open Championship at Royal Birkdale — the final men\'s major of 2026.',
    tags: ['golf', 'the open', 'open championship', 'royal birkdale', 'major'],
    events: [
      { id: 'open-2026', name: 'The Open — Royal Birkdale', lat: 53.6206, lng: -3.0325, tz: 'Europe/London', city: 'Southport', country: 'UK', sessions: [
        { id: 'r3', name: 'Round 3 (first tee)', type: 'round', date: '2026-07-18', time: '09:00' },
        { id: 'r4', name: 'Final round (first tee)', type: 'final', date: '2026-07-19', time: '09:00' },
      ], tags: ['links', '154th open'] },
    ],
  },
  {
    id: 'cycling-2026',
    name: 'Cycling Grand Tours 2026',
    sport: 'cycling',
    category: 'Cycling',
    season: '2026',
    description: 'Tour de France 2026 — Barcelona start July 4, Champs-Élysées finale July 26.',
    tags: ['cycling', 'tour de france', 'tdf', 'grand tour', 'peloton'],
    events: [
      { id: 'tdf-2026', name: 'Tour de France', lat: 48.8698, lng: 2.3078, tz: 'Europe/Paris', city: 'Paris (finale)', country: 'France', sessions: [
        { id: 'window', name: 'Race window (21 stages)', type: 'window', startDate: '2026-07-04', endDate: '2026-07-26', firstCallTime: '12:00' },
        { id: 'final', name: 'Final stage — Champs-Élysées', type: 'final', date: '2026-07-26', time: '16:10' },
      ], tags: ['champs-elysees', 'yellow jersey'] },
    ],
  },
  {
    id: 'cricket-2026',
    name: 'International Cricket',
    sport: 'cricket',
    category: 'Cricket',
    season: '2026',
    description: 'England vs India ODI series decider at Lord\'s. Further series land via the live data feed.',
    tags: ['cricket', 'odi', 'england', 'india', 'lords'],
    events: [
      { id: 'eng-ind-odi3', name: 'England vs India — 3rd ODI', lat: 51.5294, lng: -0.1727, tz: 'Europe/London', city: 'London', country: 'UK', sessions: [{ id: 'start', name: 'First ball', type: 'match', date: '2026-07-19', time: '11:00' }], tags: ['lords', 'series decider'] },
    ],
  },
  {
    id: 'rugby-2026',
    name: 'Rugby Nations Championship — Autumn',
    sport: 'rugby',
    category: 'Rugby',
    season: '2026',
    description: 'Autumn window of the first Nations Championship, Nov 1–29. Kickoff slots confirm nearer the window.',
    tags: ['rugby', 'nations championship', 'autumn internationals', 'test rugby'],
    events: [
      { id: 'rug-eng-aus', name: 'England vs Australia', lat: 51.4559, lng: -0.3415, tz: 'Europe/London', city: 'London', country: 'UK', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-11-01', time: '15:10' }], tags: ['twickenham'] },
      { id: 'rug-irl-nz', name: 'Ireland vs New Zealand — Chicago', lat: 41.8623, lng: -87.6167, tz: 'America/Chicago', city: 'Chicago', country: 'USA', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-11-01', time: '14:00' }], tags: ['soldier field'] },
      { id: 'rug-fra-rsa', name: 'France vs South Africa', lat: 48.9245, lng: 2.3601, tz: 'Europe/Paris', city: 'Paris', country: 'France', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-11-08', time: '21:10' }], tags: ['stade de france'] },
      { id: 'rug-eng-nz', name: 'England vs New Zealand', lat: 51.4559, lng: -0.3415, tz: 'Europe/London', city: 'London', country: 'UK', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-11-15', time: '15:10' }], tags: ['twickenham'] },
      { id: 'rug-wal-rsa', name: 'Wales vs South Africa', lat: 51.4782, lng: -3.1826, tz: 'Europe/London', city: 'Cardiff', country: 'UK', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-11-29', time: '15:10' }], tags: ['principality stadium'] },
    ],
  },
  {
    id: 'marathons-2026',
    name: 'Marathon Majors 2026',
    sport: 'athletics',
    category: 'Athletics',
    season: '2026',
    description: 'The remaining World Marathon Majors of 2026 — Berlin, Chicago, New York.',
    tags: ['marathon', 'running', 'athletics', 'berlin', 'chicago', 'new york'],
    events: [
      { id: 'mar-berlin', name: 'Berlin Marathon', lat: 52.5163, lng: 13.3777, tz: 'Europe/Berlin', city: 'Berlin', country: 'Germany', sessions: [{ id: 'start', name: 'Elite start', type: 'race', date: '2026-09-27', time: '09:15' }], tags: ['brandenburg gate', 'world record course'] },
      { id: 'mar-chicago', name: 'Chicago Marathon', lat: 41.8763, lng: -87.6205, tz: 'America/Chicago', city: 'Chicago', country: 'USA', sessions: [{ id: 'start', name: 'Elite start', type: 'race', date: '2026-10-11', time: '07:30' }], tags: ['grant park'] },
      { id: 'mar-nyc', name: 'New York City Marathon', lat: 40.6021, lng: -74.0601, tz: 'America/New_York', city: 'New York', country: 'USA', sessions: [{ id: 'start', name: 'Elite start', type: 'race', date: '2026-11-01', time: '09:05' }], tags: ['five boroughs', 'staten island'] },
    ],
  },
];

// ————————————————————————————————————————————————————————————————————————
// Validation + emit
// ————————————————————————————————————————————————————————————————————————

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const TIME_RE = /^\d{2}:\d{2}$/;

function isValidTz(tz) {
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: tz });
    return true;
  } catch {
    return false;
  }
}

export function validateCatalog(catalog) {
  const errors = [];
  if (catalog.schemaVersion !== 2) errors.push('schemaVersion must be 2');
  if (!Array.isArray(catalog.series) || !catalog.series.length) errors.push('series missing');
  const seriesIds = new Set();
  for (const s of catalog.series || []) {
    const at = `series ${s.id}`;
    if (!s.id || seriesIds.has(s.id)) errors.push(`${at}: missing/duplicate id`);
    seriesIds.add(s.id);
    for (const key of ['name', 'sport', 'category', 'season', 'description']) {
      if (!s[key]) errors.push(`${at}: missing ${key}`);
    }
    if (!Array.isArray(s.events) || !s.events.length) errors.push(`${at}: no events`);
    const evIds = new Set();
    for (const e of s.events || []) {
      const eat = `${at} / event ${e.id}`;
      if (!e.id || evIds.has(e.id)) errors.push(`${eat}: missing/duplicate id`);
      evIds.add(e.id);
      if (typeof e.lat !== 'number' || e.lat < -90 || e.lat > 90) errors.push(`${eat}: bad lat`);
      if (typeof e.lng !== 'number' || e.lng < -180 || e.lng > 180) errors.push(`${eat}: bad lng`);
      if (!isValidTz(e.tz)) errors.push(`${eat}: invalid tz "${e.tz}"`);
      if (!e.city || !e.country || !e.name) errors.push(`${eat}: missing name/city/country`);
      if (!Array.isArray(e.sessions) || !e.sessions.length) errors.push(`${eat}: no sessions`);
      for (const sess of e.sessions || []) {
        const sat = `${eat} / session ${sess.id}`;
        if (!sess.id || !sess.name) errors.push(`${sat}: missing id/name`);
        if (sess.type === 'window') {
          if (!DATE_RE.test(sess.startDate || '')) errors.push(`${sat}: bad startDate`);
          if (!DATE_RE.test(sess.endDate || '')) errors.push(`${sat}: bad endDate`);
          if (sess.firstCallTime && !TIME_RE.test(sess.firstCallTime)) errors.push(`${sat}: bad firstCallTime`);
          if ((sess.startDate || '') > (sess.endDate || '')) errors.push(`${sat}: window start after end`);
        } else {
          if (!DATE_RE.test(sess.date || '')) errors.push(`${sat}: bad date`);
          if (!TIME_RE.test(sess.time || '')) errors.push(`${sat}: bad time`);
        }
      }
    }
  }
  return errors;
}

export function buildCatalog() {
  return {
    schemaVersion: 2,
    generatedAt: new Date().toISOString(),
    source: 'scripts/build-sports-data.mjs',
    series: SERIES,
  };
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const catalog = buildCatalog();
  const errors = validateCatalog(catalog);
  if (errors.length) {
    console.error('Sports catalog validation FAILED:');
    for (const e of errors) console.error('  -', e);
    process.exit(1);
  }
  const json = JSON.stringify(catalog, null, 2) + '\n';
  const targets = [
    path.join(ROOT, 'src', 'data', 'sports-catalog.json'),
    path.join(ROOT, 'website', 'data', 'sports', 'v2', 'catalog.json'),
  ];
  for (const t of targets) {
    fs.mkdirSync(path.dirname(t), { recursive: true });
    fs.writeFileSync(t, json, 'utf8');
    console.log('wrote', path.relative(ROOT, t));
  }
  const nSeries = catalog.series.length;
  const nEvents = catalog.series.reduce((a, s) => a + s.events.length, 0);
  console.log(`OK — ${nSeries} series, ${nEvents} events, schema v2.`);
}
