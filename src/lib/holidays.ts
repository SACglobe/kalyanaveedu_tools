// Holiday / festival names for the calendar pages, keyed by MM-DD for a given year.
// Tamil festivals come from the astronomical engine (festivals.ts) instead of a fixed list, so they are right in every year.
import { festivalsForYear } from '@/lib/festivals';

const cache = new Map<number, Map<string, string>>();

// Gregorian Easter (anonymous algorithm) -> Good Friday
function goodFriday(year: number): Date {
  const a = year % 19, b = Math.floor(year / 100), c = year % 100;
  const d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(year, month - 1, day - 2));
}

const key = (m: number, d: number) => `${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

// Islamic observances from the Umm al-Qura calendar; Indian moon sighting can differ by a day
function islamicHolidays(year: number, add: (k: string, name: string) => void) {
  try {
    const fmt = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', { timeZone: 'UTC', day: 'numeric', month: 'numeric' });
    for (let i = 0; i < 366; i++) {
      const dt = new Date(Date.UTC(year, 0, 1 + i));
      if (dt.getUTCFullYear() !== year) break;
      const parts = fmt.formatToParts(dt);
      const hm = Number(parts.find((p) => p.type === 'month')?.value);
      const hd = Number(parts.find((p) => p.type === 'day')?.value);
      const k = key(dt.getUTCMonth() + 1, dt.getUTCDate());
      if (hm === 10 && hd === 1) add(k, 'ரம்ஜான் (Idul Fitr – பிறை தரிசனப்படி ±1 நாள்)');
      else if (hm === 12 && hd === 10) add(k, 'பக்ரீத் (Bakrid – ±1 நாள்)');
      else if (hm === 1 && hd === 10) add(k, 'முஹர்ரம் (Muharram – ±1 நாள்)');
      else if (hm === 3 && hd === 12) add(k, 'மிலாது நபி (Milad-un-Nabi – ±1 நாள்)');
    }
  } catch {
    // Intl without this calendar: skip Islamic observances rather than show wrong ones
  }
}

function build(year: number): Map<string, string> {
  const map = new Map<string, string>();
  const add = (k: string, name: string) => {
    const cur = map.get(k);
    map.set(k, cur && !cur.includes(name) ? `${cur} / ${name}` : cur ?? name);
  };

  add('01-01', "புத்தாண்டு (New Year's Day)");
  add('01-26', 'குடியரசு தினம் (Republic Day)');
  add('05-01', 'உழைப்பாளர் தினம் (May Day)');
  add('08-15', 'சுதந்திர தினம் (Independence Day)');
  add('10-02', 'காந்தி ஜெயந்தி (Gandhi Jayanthi)');
  add('12-25', 'கிறிஸ்துமஸ் (Christmas)');
  const gf = goodFriday(year);
  add(key(gf.getUTCMonth() + 1, gf.getUTCDate()), 'புனித வெள்ளி (Good Friday)');

  for (const f of festivalsForYear(year)) {
    const [, m, d] = f.dateStr.split('-').map(Number);
    let name = `${f.nameTa} (${f.nameEn})`;
    if (f.slug === 'mattu-pongal') name += ' / திருவள்ளுவர் தினம்';
    if (f.slug === 'kaanum-pongal') name += ' / உழவர் திருநாள்';
    add(key(m, d), name);
  }
  add('04-14', 'அம்பேத்கர் பிறந்த நாள் (Ambedkar Jayanthi)');
  islamicHolidays(year, add);
  return map;
}

export function getHolidayName(year: number, mmdd: string): string | undefined {
  let m = cache.get(year);
  if (!m) {
    m = build(year);
    cache.set(year, m);
  }
  return m.get(mmdd);
}
