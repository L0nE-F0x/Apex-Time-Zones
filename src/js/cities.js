/**
 * Expanded world cities with IANA timezones for ApexTimeZones.
 */

export const CITIES = [
  // Americas — finance & hubs
  { id: 'nyc', name: 'New York', region: 'USA', lat: 40.7128, lng: -74.006, tz: 'America/New_York', tags: ['est', 'edt', 'ny', 'wall street', 'finance', 'nba', 'nfl', 'mlb'], groups: ['Finance', 'Sports'] },
  { id: 'la', name: 'Los Angeles', region: 'USA', lat: 34.0522, lng: -118.2437, tz: 'America/Los_Angeles', tags: ['pst', 'pdt', 'la', 'hollywood', 'nba'], groups: ['Sports'] },
  { id: 'chi', name: 'Chicago', region: 'USA', lat: 41.8781, lng: -87.6298, tz: 'America/Chicago', tags: ['cst', 'cdt', 'cme', 'futures', 'finance'], groups: ['Finance'] },
  { id: 'den', name: 'Denver', region: 'USA', lat: 39.7392, lng: -104.9903, tz: 'America/Denver', tags: ['mst', 'mdt'] },
  { id: 'mia', name: 'Miami', region: 'USA', lat: 25.7617, lng: -80.1918, tz: 'America/New_York', tags: ['finance', 'crypto'] },
  { id: 'sea', name: 'Seattle', region: 'USA', lat: 47.6062, lng: -122.3321, tz: 'America/Los_Angeles', tags: ['tech'] },
  { id: 'dal', name: 'Dallas', region: 'USA', lat: 32.7767, lng: -96.797, tz: 'America/Chicago', tags: [] },
  { id: 'tor', name: 'Toronto', region: 'Canada', lat: 43.6532, lng: -79.3832, tz: 'America/Toronto', tags: ['canada', 'tsx', 'finance', 'nba'], groups: ['Finance', 'Sports'] },
  { id: 'van', name: 'Vancouver', region: 'Canada', lat: 49.2827, lng: -123.1207, tz: 'America/Vancouver', tags: [] },
  { id: 'mex', name: 'Mexico City', region: 'Mexico', lat: 19.4326, lng: -99.1332, tz: 'America/Mexico_City', tags: [] },
  { id: 'sao', name: 'São Paulo', region: 'Brazil', lat: -23.5505, lng: -46.6333, tz: 'America/Sao_Paulo', tags: ['brazil', 'brt', 'bovespa', 'finance'], groups: ['Finance'] },
  { id: 'rio', name: 'Rio de Janeiro', region: 'Brazil', lat: -22.9068, lng: -43.1729, tz: 'America/Sao_Paulo', tags: ['sports', 'football'], groups: ['Sports'] },
  { id: 'bue', name: 'Buenos Aires', region: 'Argentina', lat: -34.6037, lng: -58.3816, tz: 'America/Argentina/Buenos_Aires', tags: ['art'] },
  { id: 'lim', name: 'Lima', region: 'Peru', lat: -12.0464, lng: -77.0428, tz: 'America/Lima', tags: [] },
  { id: 'bog', name: 'Bogotá', region: 'Colombia', lat: 4.711, lng: -74.0721, tz: 'America/Bogota', tags: [] },
  { id: 'scl', name: 'Santiago', region: 'Chile', lat: -33.4489, lng: -70.6693, tz: 'America/Santiago', tags: [] },

  // Europe
  { id: 'lon', name: 'London', region: 'UK', lat: 51.5074, lng: -0.1278, tz: 'Europe/London', tags: ['gmt', 'bst', 'uk', 'premier league', 'lse', 'finance', 'f1'], groups: ['Finance', 'Sports'] },
  { id: 'par', name: 'Paris', region: 'France', lat: 48.8566, lng: 2.3522, tz: 'Europe/Paris', tags: ['cet', 'cest', 'ligue1'], groups: ['Sports'] },
  { id: 'ber', name: 'Berlin', region: 'Germany', lat: 52.52, lng: 13.405, tz: 'Europe/Berlin', tags: ['cet', 'bundesliga'], groups: ['Sports'] },
  { id: 'fra', name: 'Frankfurt', region: 'Germany', lat: 50.1109, lng: 8.6821, tz: 'Europe/Berlin', tags: ['finance', 'dax', 'ecb'], groups: ['Finance'] },
  { id: 'ams', name: 'Amsterdam', region: 'Netherlands', lat: 52.3676, lng: 4.9041, tz: 'Europe/Amsterdam', tags: ['finance'] },
  { id: 'mad', name: 'Madrid', region: 'Spain', lat: 40.4168, lng: -3.7038, tz: 'Europe/Madrid', tags: ['laliga', 'sports'], groups: ['Sports'] },
  { id: 'bcn', name: 'Barcelona', region: 'Spain', lat: 41.3874, lng: 2.1686, tz: 'Europe/Madrid', tags: ['laliga', 'sports'], groups: ['Sports'] },
  { id: 'rom', name: 'Rome', region: 'Italy', lat: 41.9028, lng: 12.4964, tz: 'Europe/Rome', tags: ['seriea'], groups: ['Sports'] },
  { id: 'mil', name: 'Milan', region: 'Italy', lat: 45.4642, lng: 9.19, tz: 'Europe/Rome', tags: ['finance', 'seriea'], groups: ['Finance', 'Sports'] },
  { id: 'zur', name: 'Zurich', region: 'Switzerland', lat: 47.3769, lng: 8.5417, tz: 'Europe/Zurich', tags: ['finance', 'swiss'], groups: ['Finance'] },
  { id: 'gen', name: 'Geneva', region: 'Switzerland', lat: 46.2044, lng: 6.1432, tz: 'Europe/Zurich', tags: ['finance'] },
  { id: 'sto', name: 'Stockholm', region: 'Sweden', lat: 59.3293, lng: 18.0686, tz: 'Europe/Stockholm', tags: [] },
  { id: 'mos', name: 'Moscow', region: 'Russia', lat: 55.7558, lng: 37.6173, tz: 'Europe/Moscow', tags: ['msk'] },
  { id: 'ist', name: 'Istanbul', region: 'Turkey', lat: 41.0082, lng: 28.9784, tz: 'Europe/Istanbul', tags: [] },
  { id: 'ath', name: 'Athens', region: 'Greece', lat: 37.9838, lng: 23.7275, tz: 'Europe/Athens', tags: [] },
  { id: 'lis', name: 'Lisbon', region: 'Portugal', lat: 38.7223, lng: -9.1393, tz: 'Europe/Lisbon', tags: ['wet'] },
  { id: 'dub', name: 'Dublin', region: 'Ireland', lat: 53.3498, lng: -6.2603, tz: 'Europe/Dublin', tags: ['finance'] },
  { id: 'waw', name: 'Warsaw', region: 'Poland', lat: 52.2297, lng: 21.0122, tz: 'Europe/Warsaw', tags: [] },
  { id: 'vie', name: 'Vienna', region: 'Austria', lat: 48.2082, lng: 16.3738, tz: 'Europe/Vienna', tags: [] },
  { id: 'prg', name: 'Prague', region: 'Czechia', lat: 50.0755, lng: 14.4378, tz: 'Europe/Prague', tags: [] },

  // Middle East & Africa
  { id: 'dxb', name: 'Dubai', region: 'UAE', lat: 25.2048, lng: 55.2708, tz: 'Asia/Dubai', tags: ['gst', 'finance', 'f1'], groups: ['Finance', 'Sports'] },
  { id: 'auh', name: 'Abu Dhabi', region: 'UAE', lat: 24.4539, lng: 54.3773, tz: 'Asia/Dubai', tags: ['f1', 'finance'], groups: ['Sports'] },
  { id: 'riy', name: 'Riyadh', region: 'Saudi Arabia', lat: 24.7136, lng: 46.6753, tz: 'Asia/Riyadh', tags: ['finance'] },
  { id: 'tlv', name: 'Tel Aviv', region: 'Israel', lat: 32.0853, lng: 34.7818, tz: 'Asia/Jerusalem', tags: ['tech', 'finance'] },
  { id: 'cai', name: 'Cairo', region: 'Egypt', lat: 30.0444, lng: 31.2357, tz: 'Africa/Cairo', tags: [] },
  { id: 'jnb', name: 'Johannesburg', region: 'South Africa', lat: -26.2041, lng: 28.0473, tz: 'Africa/Johannesburg', tags: ['sast', 'jse', 'finance'], groups: ['Finance'] },
  { id: 'lag', name: 'Lagos', region: 'Nigeria', lat: 6.5244, lng: 3.3792, tz: 'Africa/Lagos', tags: [] },
  { id: 'nbo', name: 'Nairobi', region: 'Kenya', lat: -1.2921, lng: 36.8219, tz: 'Africa/Nairobi', tags: [] },
  { id: 'cas', name: 'Casablanca', region: 'Morocco', lat: 33.5731, lng: -7.5898, tz: 'Africa/Casablanca', tags: [] },

  // Asia-Pacific
  { id: 'tyo', name: 'Tokyo', region: 'Japan', lat: 35.6762, lng: 139.6503, tz: 'Asia/Tokyo', tags: ['jst', 'nikkei', 'sports', 'mlb', 'f1'], groups: ['Finance', 'Sports'] },
  { id: 'osa', name: 'Osaka', region: 'Japan', lat: 34.6937, lng: 135.5023, tz: 'Asia/Tokyo', tags: [] },
  { id: 'seo', name: 'Seoul', region: 'South Korea', lat: 37.5665, lng: 126.978, tz: 'Asia/Seoul', tags: ['kst', 'kospi', 'finance'], groups: ['Finance'] },
  { id: 'sha', name: 'Shanghai', region: 'China', lat: 31.2304, lng: 121.4737, tz: 'Asia/Shanghai', tags: ['cst', 'china', 'sse', 'finance'], groups: ['Finance'] },
  { id: 'bj', name: 'Beijing', region: 'China', lat: 39.9042, lng: 116.4074, tz: 'Asia/Shanghai', tags: [] },
  { id: 'hkg', name: 'Hong Kong', region: 'China', lat: 22.3193, lng: 114.1694, tz: 'Asia/Hong_Kong', tags: ['hkt', 'finance', 'hkex'], groups: ['Finance'] },
  { id: 'sgp', name: 'Singapore', region: 'Singapore', lat: 1.3521, lng: 103.8198, tz: 'Asia/Singapore', tags: ['sgt', 'finance', 'f1'], groups: ['Finance', 'Sports'] },
  { id: 'bkk', name: 'Bangkok', region: 'Thailand', lat: 13.7563, lng: 100.5018, tz: 'Asia/Bangkok', tags: [] },
  { id: 'jak', name: 'Jakarta', region: 'Indonesia', lat: -6.2088, lng: 106.8456, tz: 'Asia/Jakarta', tags: [] },
  { id: 'mnl', name: 'Manila', region: 'Philippines', lat: 14.5995, lng: 120.9842, tz: 'Asia/Manila', tags: [] },
  { id: 'del', name: 'New Delhi', region: 'India', lat: 28.6139, lng: 77.209, tz: 'Asia/Kolkata', tags: ['ist', 'india'], groups: ['Finance'] },
  { id: 'mum', name: 'Mumbai', region: 'India', lat: 19.076, lng: 72.8777, tz: 'Asia/Kolkata', tags: ['finance', 'nse', 'bse', 'ipl'], groups: ['Finance', 'Sports'] },
  { id: 'kar', name: 'Karachi', region: 'Pakistan', lat: 24.8607, lng: 67.0011, tz: 'Asia/Karachi', tags: [] },
  { id: 'tpe', name: 'Taipei', region: 'Taiwan', lat: 25.033, lng: 121.5654, tz: 'Asia/Taipei', tags: ['finance'] },
  { id: 'han', name: 'Hanoi', region: 'Vietnam', lat: 21.0278, lng: 105.8342, tz: 'Asia/Ho_Chi_Minh', tags: [] },
  { id: 'sgn', name: 'Ho Chi Minh City', region: 'Vietnam', lat: 10.8231, lng: 106.6297, tz: 'Asia/Ho_Chi_Minh', tags: [] },
  { id: 'kul', name: 'Kuala Lumpur', region: 'Malaysia', lat: 3.139, lng: 101.6869, tz: 'Asia/Kuala_Lumpur', tags: [] },

  // Oceania
  { id: 'syd', name: 'Sydney', region: 'Australia', lat: -33.8688, lng: 151.2093, tz: 'Australia/Sydney', tags: ['aest', 'aedt', 'asx', 'finance', 'cricket'], groups: ['Finance', 'Sports'] },
  { id: 'mel', name: 'Melbourne', region: 'Australia', lat: -37.8136, lng: 144.9631, tz: 'Australia/Melbourne', tags: ['sports', 'afl', 'f1'], groups: ['Sports'] },
  { id: 'per', name: 'Perth', region: 'Australia', lat: -31.9505, lng: 115.8605, tz: 'Australia/Perth', tags: [] },
  { id: 'akl', name: 'Auckland', region: 'New Zealand', lat: -36.8509, lng: 174.7645, tz: 'Pacific/Auckland', tags: ['nzst', 'nzdt'] },
  { id: 'hon', name: 'Honolulu', region: 'USA', lat: 21.3069, lng: -157.8583, tz: 'Pacific/Honolulu', tags: ['hst'] },
  { id: 'wlg', name: 'Wellington', region: 'New Zealand', lat: -41.2865, lng: 174.7762, tz: 'Pacific/Auckland', tags: [] },
];

export const DEFAULT_PINS = ['nyc', 'lon', 'tyo', 'syd', 'dxb', 'sgp', 'del', 'sao', 'ber', 'la'];

export function getCityById(id) {
  return CITIES.find((c) => c.id === id);
}

export function getValidPinnedIds(ids) {
  if (!Array.isArray(ids)) return [...DEFAULT_PINS];
  const valid = ids.filter((id) => getCityById(id));
  return valid.length ? valid : [...DEFAULT_PINS];
}
