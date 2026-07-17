/**
 * Sports & esports catalog — searchable series with seasonal events.
 * Session times are local venue wall times (date + HH:MM + tz).
 * Schedules are curated/representative; update with each season.
 */

/** @typedef {{ id: string, name: string, type?: string, date: string, time: string }} Session */
/** @typedef {{ id: string, name: string, round?: number, lat: number, lng: number, tz: string, city: string, country: string, sessions: Session[], tags?: string[] }} SportEvent */
/** @typedef {{ id: string, name: string, category: string, season: string, description: string, tags: string[], events: SportEvent[] }} SportSeries */

/** Build ISO-ish wall time helper sessions for F1 weekend */
function f1Weekend(baseDate, raceTime = '15:00', qualiTime = '15:00', sprint = false) {
  // baseDate = race Sunday YYYY-MM-DD
  const d = new Date(baseDate + 'T12:00:00Z');
  const day = (offset) => {
    const x = new Date(d);
    x.setUTCDate(x.getUTCDate() + offset);
    return x.toISOString().slice(0, 10);
  };
  // assume baseDate is Sunday race
  const fri = day(-2);
  const sat = day(-1);
  const sun = baseDate;
  if (sprint) {
    return [
      { id: 'fp1', name: 'Practice 1', type: 'practice', date: fri, time: '13:30' },
      { id: 'sq', name: 'Sprint Qualifying', type: 'qualifying', date: fri, time: '17:30' },
      { id: 'sprint', name: 'Sprint', type: 'sprint', date: sat, time: '12:00' },
      { id: 'quali', name: 'Qualifying', type: 'qualifying', date: sat, time: qualiTime },
      { id: 'race', name: 'Race', type: 'race', date: sun, time: raceTime },
    ];
  }
  return [
    { id: 'fp1', name: 'Practice 1', type: 'practice', date: fri, time: '13:30' },
    { id: 'fp2', name: 'Practice 2', type: 'practice', date: fri, time: '17:00' },
    { id: 'fp3', name: 'Practice 3', type: 'practice', date: sat, time: '12:30' },
    { id: 'quali', name: 'Qualifying', type: 'qualifying', date: sat, time: qualiTime },
    { id: 'race', name: 'Race', type: 'race', date: sun, time: raceTime },
  ];
}

/** @type {SportSeries[]} */
export const SPORT_SERIES = [
  {
    id: 'f1-2026',
    name: 'Formula 1 World Championship',
    category: 'Motorsport',
    season: '2026',
    description: 'Full 2026 F1 season — map every Grand Prix, countdown race weekends, dual local/venue times.',
    tags: ['formula 1', 'f1', 'grand prix', 'motorsport', 'racing', 'fia'],
    events: [
      { id: 'f1-26-au', name: 'Australian Grand Prix', round: 1, lat: -37.8497, lng: 144.968, tz: 'Australia/Melbourne', city: 'Melbourne', country: 'Australia', sessions: f1Weekend('2026-03-15', '15:00'), tags: ['albert park'] },
      { id: 'f1-26-cn', name: 'Chinese Grand Prix', round: 2, lat: 31.3389, lng: 121.2197, tz: 'Asia/Shanghai', city: 'Shanghai', country: 'China', sessions: f1Weekend('2026-03-22', '15:00', '15:00', true), tags: ['shanghai'] },
      { id: 'f1-26-jp', name: 'Japanese Grand Prix', round: 3, lat: 34.8431, lng: 136.5407, tz: 'Asia/Tokyo', city: 'Suzuka', country: 'Japan', sessions: f1Weekend('2026-04-05', '14:00'), tags: ['suzuka'] },
      { id: 'f1-26-bh', name: 'Bahrain Grand Prix', round: 4, lat: 26.0325, lng: 50.5106, tz: 'Asia/Bahrain', city: 'Sakhir', country: 'Bahrain', sessions: f1Weekend('2026-04-12', '18:00'), tags: ['night'] },
      { id: 'f1-26-sa', name: 'Saudi Arabian Grand Prix', round: 5, lat: 21.6319, lng: 39.1044, tz: 'Asia/Riyadh', city: 'Jeddah', country: 'Saudi Arabia', sessions: f1Weekend('2026-04-19', '20:00'), tags: ['night', 'jeddah'] },
      { id: 'f1-26-us-mi', name: 'Miami Grand Prix', round: 6, lat: 25.9581, lng: -80.2389, tz: 'America/New_York', city: 'Miami', country: 'USA', sessions: f1Weekend('2026-05-03', '16:00'), tags: ['miami'] },
      { id: 'f1-26-em', name: 'Emilia Romagna Grand Prix', round: 7, lat: 44.3439, lng: 11.7167, tz: 'Europe/Rome', city: 'Imola', country: 'Italy', sessions: f1Weekend('2026-05-17', '15:00'), tags: ['imola'] },
      { id: 'f1-26-mc', name: 'Monaco Grand Prix', round: 8, lat: 43.7347, lng: 7.4206, tz: 'Europe/Monaco', city: 'Monte Carlo', country: 'Monaco', sessions: f1Weekend('2026-05-24', '15:00'), tags: ['monaco'] },
      { id: 'f1-26-es', name: 'Spanish Grand Prix', round: 9, lat: 41.57, lng: 2.2611, tz: 'Europe/Madrid', city: 'Barcelona', country: 'Spain', sessions: f1Weekend('2026-05-31', '15:00'), tags: ['catalunya'] },
      { id: 'f1-26-ca', name: 'Canadian Grand Prix', round: 10, lat: 45.5017, lng: -73.5673, tz: 'America/Toronto', city: 'Montreal', country: 'Canada', sessions: f1Weekend('2026-06-14', '14:00'), tags: ['montreal'] },
      { id: 'f1-26-at', name: 'Austrian Grand Prix', round: 11, lat: 47.2197, lng: 14.7647, tz: 'Europe/Vienna', city: 'Spielberg', country: 'Austria', sessions: f1Weekend('2026-06-28', '15:00', '15:00', true), tags: ['red bull ring'] },
      { id: 'f1-26-gb', name: 'British Grand Prix', round: 12, lat: 52.0786, lng: -1.0169, tz: 'Europe/London', city: 'Silverstone', country: 'UK', sessions: f1Weekend('2026-07-05', '15:00'), tags: ['silverstone'] },
      { id: 'f1-26-be', name: 'Belgian Grand Prix', round: 13, lat: 50.4372, lng: 5.9714, tz: 'Europe/Brussels', city: 'Spa', country: 'Belgium', sessions: f1Weekend('2026-07-26', '15:00', '15:00', true), tags: ['spa'] },
      { id: 'f1-26-hu', name: 'Hungarian Grand Prix', round: 14, lat: 47.5789, lng: 19.2486, tz: 'Europe/Budapest', city: 'Budapest', country: 'Hungary', sessions: f1Weekend('2026-08-02', '15:00'), tags: ['hungaroring'] },
      { id: 'f1-26-nl', name: 'Dutch Grand Prix', round: 15, lat: 52.3888, lng: 4.5409, tz: 'Europe/Amsterdam', city: 'Zandvoort', country: 'Netherlands', sessions: f1Weekend('2026-08-30', '15:00'), tags: ['zandvoort'] },
      { id: 'f1-26-it', name: 'Italian Grand Prix', round: 16, lat: 45.6156, lng: 9.2811, tz: 'Europe/Rome', city: 'Monza', country: 'Italy', sessions: f1Weekend('2026-09-06', '15:00'), tags: ['monza'] },
      { id: 'f1-26-az', name: 'Azerbaijan Grand Prix', round: 17, lat: 40.3725, lng: 49.8533, tz: 'Asia/Baku', city: 'Baku', country: 'Azerbaijan', sessions: f1Weekend('2026-09-20', '15:00'), tags: ['baku'] },
      { id: 'f1-26-sg', name: 'Singapore Grand Prix', round: 18, lat: 1.2914, lng: 103.864, tz: 'Asia/Singapore', city: 'Singapore', country: 'Singapore', sessions: f1Weekend('2026-10-04', '20:00'), tags: ['marina bay', 'night', 'bali nearby'] },
      { id: 'f1-26-us', name: 'United States Grand Prix', round: 19, lat: 30.1328, lng: -97.6411, tz: 'America/Chicago', city: 'Austin', country: 'USA', sessions: f1Weekend('2026-10-25', '14:00', '14:00', true), tags: ['cota'] },
      { id: 'f1-26-mx', name: 'Mexico City Grand Prix', round: 20, lat: 19.4042, lng: -99.0907, tz: 'America/Mexico_City', city: 'Mexico City', country: 'Mexico', sessions: f1Weekend('2026-11-01', '14:00'), tags: [] },
      { id: 'f1-26-br', name: 'São Paulo Grand Prix', round: 21, lat: -23.7036, lng: -46.6997, tz: 'America/Sao_Paulo', city: 'São Paulo', country: 'Brazil', sessions: f1Weekend('2026-11-08', '14:00', '14:00', true), tags: ['interlagos'] },
      { id: 'f1-26-lv', name: 'Las Vegas Grand Prix', round: 22, lat: 36.1147, lng: -115.1728, tz: 'America/Los_Angeles', city: 'Las Vegas', country: 'USA', sessions: f1Weekend('2026-11-21', '22:00'), tags: ['night', 'strip'] },
      { id: 'f1-26-qa', name: 'Qatar Grand Prix', round: 23, lat: 25.49, lng: 51.4542, tz: 'Asia/Qatar', city: 'Lusail', country: 'Qatar', sessions: f1Weekend('2026-11-29', '19:00', '19:00', true), tags: ['night'] },
      { id: 'f1-26-ae', name: 'Abu Dhabi Grand Prix', round: 24, lat: 24.4672, lng: 54.6031, tz: 'Asia/Dubai', city: 'Yas Island', country: 'UAE', sessions: f1Weekend('2026-12-06', '17:00'), tags: ['yas marina', 'finale'] },
    ],
  },
  {
    id: 'wc-2026',
    name: 'FIFA World Cup 2026',
    category: 'Football',
    season: '2026',
    description: 'World Cup across USA, Canada & Mexico — venue kickoff times and your tune-in time.',
    tags: ['world cup', 'fifa', 'football', 'soccer', 'wc2026'],
    events: [
      { id: 'wc-opener', name: 'Opening Match — Mexico vs TBD', lat: 19.3029, lng: -99.1505, tz: 'America/Mexico_City', city: 'Mexico City', country: 'Mexico', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-06-11', time: '15:00' }], tags: ['azteca', 'group'] },
      { id: 'wc-nyc-g', name: 'Group Stage — MetLife Stadium', lat: 40.8135, lng: -74.0745, tz: 'America/New_York', city: 'New York / NJ', country: 'USA', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-06-14', time: '20:00' }], tags: ['group'] },
      { id: 'wc-la-g', name: 'Group Stage — SoFi Stadium', lat: 33.9535, lng: -118.339, tz: 'America/Los_Angeles', city: 'Los Angeles', country: 'USA', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-06-15', time: '16:00' }], tags: ['group'] },
      { id: 'wc-dal-g', name: 'Group Stage — AT&T Stadium', lat: 32.7473, lng: -97.0945, tz: 'America/Chicago', city: 'Dallas', country: 'USA', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-06-16', time: '18:00' }], tags: ['group'] },
      { id: 'wc-mia-g', name: 'Group Stage — Miami', lat: 25.958, lng: -80.2389, tz: 'America/New_York', city: 'Miami', country: 'USA', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-06-18', time: '21:00' }], tags: ['group'] },
      { id: 'wc-tor-g', name: 'Group Stage — Toronto', lat: 43.6332, lng: -79.4186, tz: 'America/Toronto', city: 'Toronto', country: 'Canada', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-06-20', time: '19:00' }], tags: ['group'] },
      { id: 'wc-r16', name: 'Round of 16 — MetLife', lat: 40.8135, lng: -74.0745, tz: 'America/New_York', city: 'New York / NJ', country: 'USA', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-07-01', time: '17:00' }], tags: ['knockout'] },
      { id: 'wc-qf', name: 'Quarter-final — Dallas', lat: 32.7473, lng: -97.0945, tz: 'America/Chicago', city: 'Dallas', country: 'USA', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-07-09', time: '15:00' }], tags: ['knockout'] },
      { id: 'wc-sf', name: 'Semi-final — Atlanta', lat: 33.755, lng: -84.401, tz: 'America/New_York', city: 'Atlanta', country: 'USA', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-07-14', time: '15:00' }], tags: ['knockout'] },
      { id: 'wc-final', name: 'Final — MetLife Stadium', lat: 40.8135, lng: -74.0745, tz: 'America/New_York', city: 'New York / NJ', country: 'USA', sessions: [{ id: 'ko', name: 'Kickoff', type: 'match', date: '2026-07-19', time: '15:00' }], tags: ['final'] },
    ],
  },
  {
    id: 'tennis-2026',
    name: 'Tennis Grand Slams 2026',
    category: 'Tennis',
    season: '2026',
    description: 'Major tennis slam windows — key session start blocks with dual-zone times.',
    tags: ['tennis', 'grand slam', 'wimbledon', 'us open', 'french open', 'australian open', 'atp', 'wta'],
    events: [
      { id: 'ao-26', name: 'Australian Open', lat: -37.821, lng: 144.979, tz: 'Australia/Melbourne', city: 'Melbourne', country: 'Australia', sessions: [
        { id: 'day', name: 'Day session', type: 'session', date: '2026-01-19', time: '11:00' },
        { id: 'night', name: 'Night session', type: 'session', date: '2026-01-19', time: '19:30' },
        { id: 'final-m', name: 'Men\'s Final', type: 'final', date: '2026-02-01', time: '19:30' },
      ], tags: ['melbourne park'] },
      { id: 'rg-26', name: 'Roland-Garros', lat: 48.847, lng: 2.253, tz: 'Europe/Paris', city: 'Paris', country: 'France', sessions: [
        { id: 'day', name: 'Day session', type: 'session', date: '2026-05-24', time: '11:00' },
        { id: 'final-m', name: 'Men\'s Final', type: 'final', date: '2026-06-07', time: '15:00' },
      ], tags: ['french open', 'clay'] },
      { id: 'wim-26', name: 'Wimbledon', lat: 51.434, lng: -0.214, tz: 'Europe/London', city: 'London', country: 'UK', sessions: [
        { id: 'day', name: 'Centre Court', type: 'session', date: '2026-06-29', time: '13:30' },
        { id: 'final-m', name: 'Men\'s Final', type: 'final', date: '2026-07-12', time: '14:00' },
      ], tags: ['grass'] },
      { id: 'uso-26', name: 'US Open', lat: 40.75, lng: -73.847, tz: 'America/New_York', city: 'New York', country: 'USA', sessions: [
        { id: 'day', name: 'Day session', type: 'session', date: '2026-08-31', time: '11:00' },
        { id: 'night', name: 'Night session', type: 'session', date: '2026-08-31', time: '19:00' },
        { id: 'final-m', name: 'Men\'s Final', type: 'final', date: '2026-09-13', time: '16:00' },
      ], tags: ['flushing'] },
    ],
  },
  {
    id: 'mtg-2026',
    name: 'Magic: The Gathering — Pro Tour & Majors',
    category: 'Esports / TCG',
    season: '2026',
    description: 'Flagship MTG competitive weekends — day 1/2 start times and finals blocks.',
    tags: ['magic', 'mtg', 'magic the gathering', 'wizards', 'pro tour', 'tcg', 'esports'],
    events: [
      { id: 'mtg-pt-chi', name: 'Pro Tour Chicago', lat: 41.8781, lng: -87.6298, tz: 'America/Chicago', city: 'Chicago', country: 'USA', sessions: [
        { id: 'd1', name: 'Day 1 — Swiss', type: 'swiss', date: '2026-02-21', time: '09:00' },
        { id: 'd2', name: 'Day 2 — Swiss', type: 'swiss', date: '2026-02-22', time: '09:00' },
        { id: 'top8', name: 'Top 8 / Finals', type: 'finals', date: '2026-02-22', time: '16:00' },
      ], tags: ['pro tour'] },
      { id: 'mtg-pt-ams', name: 'Pro Tour Amsterdam', lat: 52.3676, lng: 4.9041, tz: 'Europe/Amsterdam', city: 'Amsterdam', country: 'Netherlands', sessions: [
        { id: 'd1', name: 'Day 1 — Swiss', type: 'swiss', date: '2026-05-09', time: '09:00' },
        { id: 'd2', name: 'Day 2 — Swiss', type: 'swiss', date: '2026-05-10', time: '09:00' },
        { id: 'top8', name: 'Top 8 / Finals', type: 'finals', date: '2026-05-10', time: '15:30' },
      ], tags: ['pro tour', 'europe'] },
      { id: 'mtg-worlds', name: 'Magic World Championship', lat: 36.1699, lng: -115.1398, tz: 'America/Los_Angeles', city: 'Las Vegas', country: 'USA', sessions: [
        { id: 'd1', name: 'Day 1', type: 'swiss', date: '2026-10-24', time: '09:00' },
        { id: 'd2', name: 'Day 2', type: 'swiss', date: '2026-10-25', time: '09:00' },
        { id: 'finals', name: 'Worlds Finals', type: 'finals', date: '2026-10-26', time: '12:00' },
      ], tags: ['worlds', 'championship'] },
      { id: 'mtg-arena-champ', name: 'MTG Arena Championship', lat: 47.6062, lng: -122.3321, tz: 'America/Los_Angeles', city: 'Seattle (Online broadcast)', country: 'USA', sessions: [
        { id: 'stream', name: 'Main broadcast start', type: 'broadcast', date: '2026-06-13', time: '09:00' },
        { id: 'finals', name: 'Finals block', type: 'finals', date: '2026-06-14', time: '11:00' },
      ], tags: ['arena', 'online'] },
    ],
  },
  {
    id: 'lol-2026',
    name: 'League of Legends — Worlds & Majors',
    category: 'Esports',
    season: '2026',
    description: 'Flagship LoL international windows with broadcast-friendly start times.',
    tags: ['league of legends', 'lol', 'worlds', 'esports', 'riot'],
    events: [
      { id: 'lol-msi', name: 'Mid-Season Invitational', lat: 1.2914, lng: 103.864, tz: 'Asia/Singapore', city: 'Singapore', country: 'Singapore', sessions: [
        { id: 'open', name: 'Play-ins / Groups', type: 'stage', date: '2026-05-01', time: '16:00' },
        { id: 'finals', name: 'MSI Finals', type: 'finals', date: '2026-05-18', time: '16:00' },
      ], tags: ['msi'] },
      { id: 'lol-worlds', name: 'Worlds 2026', lat: 37.5665, lng: 126.978, tz: 'Asia/Seoul', city: 'Seoul', country: 'South Korea', sessions: [
        { id: 'swiss', name: 'Swiss stage', type: 'stage', date: '2026-10-02', time: '17:00' },
        { id: 'quarters', name: 'Quarter-finals', type: 'knockout', date: '2026-10-16', time: '17:00' },
        { id: 'finals', name: 'Worlds Final', type: 'finals', date: '2026-11-01', time: '16:00' },
      ], tags: ['worlds'] },
    ],
  },
  {
    id: 'cs-2026',
    name: 'Counter-Strike Majors 2026',
    category: 'Esports',
    season: '2026',
    description: 'CS major championship windows — stage and grand final blocks.',
    tags: ['cs2', 'counter-strike', 'csgo', 'major', 'esports', 'valve'],
    events: [
      { id: 'cs-kat', name: 'IEM Katowice', lat: 50.2649, lng: 19.0238, tz: 'Europe/Warsaw', city: 'Katowice', country: 'Poland', sessions: [
        { id: 'playoffs', name: 'Playoffs', type: 'knockout', date: '2026-02-06', time: '13:00' },
        { id: 'final', name: 'Grand Final', type: 'finals', date: '2026-02-08', time: '16:30' },
      ], tags: ['iem'] },
      { id: 'cs-major', name: 'CS Major Championship', lat: 59.3293, lng: 18.0686, tz: 'Europe/Stockholm', city: 'Stockholm', country: 'Sweden', sessions: [
        { id: 'challengers', name: 'Challengers Stage', type: 'stage', date: '2026-05-08', time: '12:00' },
        { id: 'final', name: 'Grand Final', type: 'finals', date: '2026-05-24', time: '15:00' },
      ], tags: ['major'] },
    ],
  },
];

export function getSeriesById(id) {
  return SPORT_SERIES.find((s) => s.id === id);
}

export function searchSports(query) {
  const q = query.trim().toLowerCase();
  if (!q) return SPORT_SERIES.slice();
  const scored = [];
  for (const s of SPORT_SERIES) {
    let score = 0;
    const hay = [s.name, s.category, s.season, s.description, ...(s.tags || [])].join(' ').toLowerCase();
    if (hay.includes(q)) score += 50;
    if (s.name.toLowerCase().includes(q)) score += 40;
    if ((s.tags || []).some((t) => t === q || t.includes(q))) score += 30;
    for (const e of s.events) {
      const eh = [e.name, e.city, e.country, ...(e.tags || [])].join(' ').toLowerCase();
      if (eh.includes(q)) score += 15;
    }
    if (score > 0) scored.push({ series: s, score });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.map((x) => x.series);
}
