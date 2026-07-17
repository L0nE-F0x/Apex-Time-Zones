from pathlib import Path

EXTRA = r'''
  { id: 'dps', name: 'Denpasar', region: 'Indonesia', lat: -8.6705, lng: 115.2126, tz: 'Asia/Makassar', tags: ['bali', 'denpasar', 'wita', 'indonesia'], groups: ['Sports'] },
  { id: 'sub', name: 'Surabaya', region: 'Indonesia', lat: -7.2575, lng: 112.7521, tz: 'Asia/Jakarta', tags: [] },
  { id: 'yia', name: 'Yogyakarta', region: 'Indonesia', lat: -7.7956, lng: 110.3695, tz: 'Asia/Jakarta', tags: [] },
  { id: 'upg', name: 'Makassar', region: 'Indonesia', lat: -5.1477, lng: 119.4327, tz: 'Asia/Makassar', tags: ['wita'] },
  { id: 'djj', name: 'Jayapura', region: 'Indonesia', lat: -2.5916, lng: 140.669, tz: 'Asia/Jayapura', tags: ['wit'] },
  { id: 'bah', name: 'Sakhir', region: 'Bahrain', lat: 26.0325, lng: 50.5106, tz: 'Asia/Bahrain', tags: ['bahrain', 'f1', 'sakhir'], groups: ['Sports'] },
  { id: 'jed', name: 'Jeddah', region: 'Saudi Arabia', lat: 21.6319, lng: 39.1044, tz: 'Asia/Riyadh', tags: ['f1', 'saudi'], groups: ['Sports'] },
  { id: 'mio', name: 'Miami Gardens', region: 'USA', lat: 25.9581, lng: -80.2389, tz: 'America/New_York', tags: ['f1', 'miami gp'], groups: ['Sports'] },
  { id: 'imo', name: 'Imola', region: 'Italy', lat: 44.3439, lng: 11.7167, tz: 'Europe/Rome', tags: ['f1', 'emilia romagna'], groups: ['Sports'] },
  { id: 'mon', name: 'Monaco', region: 'Monaco', lat: 43.7347, lng: 7.4206, tz: 'Europe/Monaco', tags: ['f1', 'monte carlo'], groups: ['Sports'] },
  { id: 'yul', name: 'Montreal', region: 'Canada', lat: 45.5017, lng: -73.5673, tz: 'America/Toronto', tags: ['f1', 'canadian gp'], groups: ['Sports'] },
  { id: 'red', name: 'Spielberg', region: 'Austria', lat: 47.2197, lng: 14.7647, tz: 'Europe/Vienna', tags: ['f1', 'red bull ring'], groups: ['Sports'] },
  { id: 'sil', name: 'Silverstone', region: 'UK', lat: 52.0786, lng: -1.0169, tz: 'Europe/London', tags: ['f1', 'british gp'], groups: ['Sports'] },
  { id: 'hun', name: 'Mogyoród', region: 'Hungary', lat: 47.5789, lng: 19.2486, tz: 'Europe/Budapest', tags: ['f1', 'hungaroring'], groups: ['Sports'] },
  { id: 'spa', name: 'Stavelot', region: 'Belgium', lat: 50.4372, lng: 5.9714, tz: 'Europe/Brussels', tags: ['f1', 'spa'], groups: ['Sports'] },
  { id: 'zan', name: 'Zandvoort', region: 'Netherlands', lat: 52.3888, lng: 4.5409, tz: 'Europe/Amsterdam', tags: ['f1', 'dutch gp'], groups: ['Sports'] },
  { id: 'mnz', name: 'Monza', region: 'Italy', lat: 45.6156, lng: 9.2811, tz: 'Europe/Rome', tags: ['f1', 'italian gp'], groups: ['Sports'] },
  { id: 'bak', name: 'Baku', region: 'Azerbaijan', lat: 40.3725, lng: 49.8533, tz: 'Asia/Baku', tags: ['f1'], groups: ['Sports'] },
  { id: 'suz', name: 'Suzuka', region: 'Japan', lat: 34.8431, lng: 136.5407, tz: 'Asia/Tokyo', tags: ['f1', 'japanese gp'], groups: ['Sports'] },
  { id: 'lus', name: 'Lusail', region: 'Qatar', lat: 25.49, lng: 51.4542, tz: 'Asia/Qatar', tags: ['f1', 'qatar'], groups: ['Sports'] },
  { id: 'aus_f1', name: 'Austin', region: 'USA', lat: 30.1328, lng: -97.6411, tz: 'America/Chicago', tags: ['f1', 'cota'], groups: ['Sports'] },
  { id: 'lvg', name: 'Las Vegas', region: 'USA', lat: 36.1147, lng: -115.1728, tz: 'America/Los_Angeles', tags: ['f1', 'las vegas'], groups: ['Sports'] },
  { id: 'yas', name: 'Yas Island', region: 'UAE', lat: 24.4672, lng: 54.6031, tz: 'Asia/Dubai', tags: ['f1', 'abu dhabi'], groups: ['Sports'] },
  { id: 'wim', name: 'Wimbledon', region: 'UK', lat: 51.434, lng: -0.214, tz: 'Europe/London', tags: ['tennis', 'wimbledon'], groups: ['Sports'] },
  { id: 'flush', name: 'Flushing', region: 'USA', lat: 40.75, lng: -73.847, tz: 'America/New_York', tags: ['tennis', 'us open'], groups: ['Sports'] },
  { id: 'doh', name: 'Doha', region: 'Qatar', lat: 25.2854, lng: 51.531, tz: 'Asia/Qatar', tags: ['esports', 'sports'] },
  { id: 'kat', name: 'Katowice', region: 'Poland', lat: 50.2649, lng: 19.0238, tz: 'Europe/Warsaw', tags: ['esports'], groups: ['Sports'] },
  { id: 'nyc_wc', name: 'East Rutherford', region: 'USA', lat: 40.8135, lng: -74.0745, tz: 'America/New_York', tags: ['world cup', 'metlife'], groups: ['Sports'] },
  { id: 'atl', name: 'Atlanta', region: 'USA', lat: 33.755, lng: -84.401, tz: 'America/New_York', tags: ['world cup', 'nfl'], groups: ['Sports'] },
  { id: 'hou', name: 'Houston', region: 'USA', lat: 29.6847, lng: -95.4107, tz: 'America/Chicago', tags: ['world cup'], groups: ['Sports'] },
  { id: 'bos', name: 'Boston', region: 'USA', lat: 42.3467, lng: -71.0972, tz: 'America/New_York', tags: ['sports'], groups: ['Sports'] },
  { id: 'kc', name: 'Kansas City', region: 'USA', lat: 39.0489, lng: -94.4839, tz: 'America/Chicago', tags: ['world cup'], groups: ['Sports'] },
  { id: 'gua', name: 'Guadalajara', region: 'Mexico', lat: 20.6818, lng: -103.462, tz: 'America/Mexico_City', tags: ['world cup'], groups: ['Sports'] },
  { id: 'mty', name: 'Monterrey', region: 'Mexico', lat: 25.6693, lng: -100.2445, tz: 'America/Monterrey', tags: ['world cup'], groups: ['Sports'] },
  { id: 'cpt', name: 'Cape Town', region: 'South Africa', lat: -33.9249, lng: 18.4241, tz: 'Africa/Johannesburg', tags: [] },
  { id: 'hel', name: 'Helsinki', region: 'Finland', lat: 60.1699, lng: 24.9384, tz: 'Europe/Helsinki', tags: [] },
  { id: 'osl', name: 'Oslo', region: 'Norway', lat: 59.9139, lng: 10.7522, tz: 'Europe/Oslo', tags: [] },
  { id: 'cph', name: 'Copenhagen', region: 'Denmark', lat: 55.6761, lng: 12.5683, tz: 'Europe/Copenhagen', tags: [] },
  { id: 'bru', name: 'Brussels', region: 'Belgium', lat: 50.8503, lng: 4.3517, tz: 'Europe/Brussels', tags: [] },
  { id: 'bud', name: 'Budapest', region: 'Hungary', lat: 47.4979, lng: 19.0402, tz: 'Europe/Budapest', tags: [] },
  { id: 'buc', name: 'Bucharest', region: 'Romania', lat: 44.4268, lng: 26.1025, tz: 'Europe/Bucharest', tags: [] },
  { id: 'zag', name: 'Zagreb', region: 'Croatia', lat: 45.815, lng: 15.9819, tz: 'Europe/Zagreb', tags: [] },
  { id: 'bej', name: 'Belgrade', region: 'Serbia', lat: 44.7866, lng: 20.4489, tz: 'Europe/Belgrade', tags: [] },
  { id: 'kiv', name: 'Kyiv', region: 'Ukraine', lat: 50.4501, lng: 30.5234, tz: 'Europe/Kyiv', tags: [] },
  { id: 'phx', name: 'Phoenix', region: 'USA', lat: 33.4484, lng: -112.074, tz: 'America/Phoenix', tags: ['mst'] },
  { id: 'anc', name: 'Anchorage', region: 'USA', lat: 61.2181, lng: -149.9003, tz: 'America/Anchorage', tags: [] },
  { id: 'det', name: 'Detroit', region: 'USA', lat: 42.3314, lng: -83.0458, tz: 'America/Detroit', tags: [] },
  { id: 'msp', name: 'Minneapolis', region: 'USA', lat: 44.9778, lng: -93.265, tz: 'America/Chicago', tags: [] },
  { id: 'nola', name: 'New Orleans', region: 'USA', lat: 29.9511, lng: -90.0715, tz: 'America/Chicago', tags: [] },
  { id: 'pdx', name: 'Portland', region: 'USA', lat: 45.5152, lng: -122.6784, tz: 'America/Los_Angeles', tags: [] },
  { id: 'bne', name: 'Brisbane', region: 'Australia', lat: -27.4698, lng: 153.0251, tz: 'Australia/Brisbane', tags: [] },
  { id: 'adl', name: 'Adelaide', region: 'Australia', lat: -34.9285, lng: 138.6007, tz: 'Australia/Adelaide', tags: [] },
  { id: 'chc', name: 'Christchurch', region: 'New Zealand', lat: -43.5321, lng: 172.6362, tz: 'Pacific/Auckland', tags: [] },
  { id: 'isb', name: 'Islamabad', region: 'Pakistan', lat: 33.6844, lng: 73.0479, tz: 'Asia/Karachi', tags: [] },
  { id: 'dac', name: 'Dhaka', region: 'Bangladesh', lat: 23.8103, lng: 90.4125, tz: 'Asia/Dhaka', tags: [] },
  { id: 'cmb', name: 'Colombo', region: 'Sri Lanka', lat: 6.9271, lng: 79.8612, tz: 'Asia/Colombo', tags: [] },
'''

p = Path('src/js/cities.js')
t = p.read_text(encoding='utf-8')
if "id: 'dps'" in t:
    print('Denpasar already present')
else:
    marker = 'export const DEFAULT_PINS'
    i = t.find(marker)
    if i < 0:
        raise SystemExit('marker not found')
    head = t[:i].rstrip()
    if head.endswith('];'):
        head = head[:-2].rstrip()
    if not head.endswith(','):
        head += ','
    tail = t[i:]
    p.write_text(head + '\n' + EXTRA + '\n];\n\n' + tail, encoding='utf-8')
    print('cities expanded, denpasar added')
