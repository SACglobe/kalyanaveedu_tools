// Daily Panchang (tithi, nakshatra, yoga, karana, Tamil date) computed from the Sun/Moon engine.
// All instants are UTC milliseconds; wall-clock output is formatted with the city's fixed UTC offset,
// so results are identical on a UTC server and in any visitor time zone.
import { TAMIL_CITIES, NAKSHATRAS_LIST, RASIS_LIST, type TamilCity } from './constants';
import { calculateSolarTimes } from './sunrise';
import { cityOffsetOnDate, utcOffsetAt } from './tz';
import {
  calculateLahiriAyanamsa,
  calculateMoonTropicalLongitude,
  calculateSunTropicalLongitude,
  normalize360,
} from './moon-position';

const HOUR_MS = 3600000;
const DAY_MS = 86400000;

export const TITHI_NAMES = [
  { ta: 'பிரதமை', en: 'Prathamai' }, { ta: 'துவிதியை', en: 'Dwitiyai' }, { ta: 'திருதியை', en: 'Tritiyai' },
  { ta: 'சதுர்த்தி', en: 'Chaturthi' }, { ta: 'பஞ்சமி', en: 'Panchami' }, { ta: 'சஷ்டி', en: 'Shashti' },
  { ta: 'சப்தமி', en: 'Saptami' }, { ta: 'அஷ்டமி', en: 'Ashtami' }, { ta: 'நவமி', en: 'Navami' },
  { ta: 'தசமி', en: 'Dashami' }, { ta: 'ஏகாதசி', en: 'Ekadashi' }, { ta: 'துவாதசி', en: 'Dwadashi' },
  { ta: 'திரயோதசி', en: 'Trayodashi' }, { ta: 'சதுர்த்தசி', en: 'Chaturdashi' },
];

export const YOGA_NAMES = [
  'விஷ்கம்பம்', 'பிரீதி', 'ஆயுஷ்மான்', 'சௌபாக்கியம்', 'சோபனம்', 'அதிகண்டம்', 'சுகர்மம்', 'திருதி', 'சூலம்',
  'கண்டம்', 'விருத்தி', 'துருவம்', 'வியாகாதம்', 'ஹர்ஷணம்', 'வஜ்ரம்', 'சித்தி', 'வியதீபாதம்', 'வரீயான்',
  'பரிகம்', 'சிவம்', 'சித்தம்', 'சாத்தியம்', 'சுபம்', 'சுப்பிரம்', 'பிராமியம்', 'ஐந்திரம்', 'வைதிருதி',
];

export const YOGA_NAMES_EN = [
  'Vishkambha', 'Priti', 'Ayushman', 'Saubhagya', 'Shobhana', 'Atiganda', 'Sukarma', 'Dhriti', 'Shula',
  'Ganda', 'Vriddhi', 'Dhruva', 'Vyaghata', 'Harshana', 'Vajra', 'Siddhi', 'Vyatipata', 'Variyan',
  'Parigha', 'Shiva', 'Siddha', 'Sadhya', 'Shubha', 'Shukla', 'Brahma', 'Indra', 'Vaidhriti',
];

const MOVABLE_KARANAS_EN = ['Bava', 'Balava', 'Kaulava', 'Taitila', 'Gara', 'Vanija', 'Vishti (Bhadra)'];

export const TAMIL_MONTH_NAMES_EN = [
  'Chithirai', 'Vaikasi', 'Aani', 'Aadi', 'Aavani', 'Purattasi', 'Aippasi', 'Karthigai', 'Margazhi', 'Thai', 'Maasi', 'Panguni',
];

export function karanaNameEn(index: number): string {
  if (index === 0) return 'Kimstughna';
  if (index >= 57) return ['Shakuni', 'Chatushpada', 'Naga'][index - 57];
  return MOVABLE_KARANAS_EN[(index - 1) % 7];
}

const MOVABLE_KARANAS = ['பவம்', 'பாலவம்', 'கௌலவம்', 'தைதுலம்', 'கரசை', 'வணிசை', 'விஷ்டி (பத்திரை)'];

export const TAMIL_MONTH_NAMES = [
  'சித்திரை', 'வைகாசி', 'ஆனி', 'ஆடி', 'ஆவணி', 'புரட்டாசி', 'ஐப்பசி', 'கார்த்திகை', 'மார்கழி', 'தை', 'மாசி', 'பங்குனி',
];

export function karanaName(index: number): string {
  // index 0..59 (half-tithis from new moon)
  if (index === 0) return 'கிம்ஸ்துக்னம்';
  if (index >= 57) return ['சகுனி', 'சதுஷ்பாதம்', 'நாகவம்'][index - 57];
  return MOVABLE_KARANAS[(index - 1) % 7];
}

export function tithiName(num: number): { ta: string; en: string; paksha: 'shukla' | 'krishna'; pakshaTa: string } {
  // num 1..30
  if (num === 15) return { ta: 'பௌர்ணமி', en: 'Pournami', paksha: 'shukla', pakshaTa: 'வளர்பிறை' };
  if (num === 30) return { ta: 'அமாவாசை', en: 'Amavasai', paksha: 'krishna', pakshaTa: 'தேய்பிறை' };
  const paksha = num < 15 ? 'shukla' : 'krishna';
  const base = TITHI_NAMES[(num - 1) % 15];
  return { ta: base.ta, en: base.en, paksha, pakshaTa: paksha === 'shukla' ? 'வளர்பிறை' : 'தேய்பிறை' };
}

export interface SiderealAt {
  sun: number;
  moon: number;
}

export function siderealAt(ms: number): SiderealAt {
  const jd = ms / DAY_MS + 2440587.5;
  const t = (jd - 2451545.0) / 36525.0;
  const ayanamsa = calculateLahiriAyanamsa(jd);
  return {
    sun: normalize360(calculateSunTropicalLongitude(t) - ayanamsa),
    moon: normalize360(calculateMoonTropicalLongitude(t) - ayanamsa),
  };
}

const elongation = (ms: number) => {
  const { sun, moon } = siderealAt(ms);
  return normalize360(moon - sun);
};

export const tithiIndexAt = (ms: number) => Math.floor(elongation(ms) / 12); // 0..29
export const karanaIndexAt = (ms: number) => Math.floor(elongation(ms) / 6); // 0..59
export const nakshatraIndexAt = (ms: number) => Math.floor(siderealAt(ms).moon / (360 / 27)); // 0..26
export const yogaIndexAt = (ms: number) => {
  const { sun, moon } = siderealAt(ms);
  return Math.floor(normalize360(sun + moon) / (360 / 27)); // 0..26
};
export const moonRasiIndexAt = (ms: number) => Math.floor(siderealAt(ms).moon / 30); // 0..11

// Next instant (after fromMs) at which fn(ms) changes value; refined to one second.
function nextChange(fn: (ms: number) => number, fromMs: number, limitHours = 72): number {
  const start = fn(fromMs);
  const step = 10 * 60 * 1000;
  let lo = fromMs;
  for (let t = fromMs + step; t <= fromMs + limitHours * HOUR_MS; t += step) {
    if (fn(t) !== start) {
      let hi = t;
      while (hi - lo > 1000) {
        const mid = Math.floor((lo + hi) / 2);
        if (fn(mid) === start) lo = mid;
        else hi = mid;
      }
      return hi;
    }
    lo = t;
  }
  return fromMs + limitHours * HOUR_MS;
}

export function formatCityTime(ms: number, city: TamilCity): string {
  const d = new Date(ms + utcOffsetAt(city, ms) * HOUR_MS);
  let h = d.getUTCHours();
  const m = d.getUTCMinutes();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')} ${ampm}`;
}

function cityDayStartMs(y: number, mIdx: number, d: number, city: TamilCity): number {
  return Date.UTC(y, mIdx, d) - cityOffsetOnDate(city, y, mIdx, d) * HOUR_MS;
}

export interface PanchangSegment {
  index: number; // raw index from the engine
  startMs: number;
  endMs: number;
  endFormatted: string;
  endsNextDay: boolean; // ends after midnight (calendar date changes)
}

function segments(
  fn: (ms: number) => number,
  fromMs: number,
  toMs: number,
  city: TamilCity,
  dayEndMs: number
): PanchangSegment[] {
  const out: PanchangSegment[] = [];
  let cursor = fromMs;
  for (let i = 0; i < 6; i++) {
    const idx = fn(cursor);
    const end = nextChange(fn, cursor);
    out.push({
      index: idx,
      startMs: cursor,
      endMs: end,
      endFormatted: formatCityTime(end, city),
      endsNextDay: end >= dayEndMs,
    });
    if (end >= toMs) break;
    cursor = end + 1000;
  }
  return out;
}

export interface TamilDateInfo {
  monthIndex: number;
  monthTa: string;
  day: number;
}

// Tamil solar date: month = Sun's sidereal rasi at sunset (sankranti before sunset starts the month that day)
export function tamilDateFor(y: number, mIdx: number, d: number, city: TamilCity): TamilDateInfo {
  const signAtSunset = (dayOffset: number) => {
    const solar = calculateSolarTimes(new Date(y, mIdx, d + dayOffset), city);
    const sunsetMs =
      Date.UTC(
        solar.sunset.getFullYear(), solar.sunset.getMonth(), solar.sunset.getDate(),
        solar.sunset.getHours(), solar.sunset.getMinutes()
      ) - cityOffsetOnDate(city, solar.sunset.getFullYear(), solar.sunset.getMonth(), solar.sunset.getDate()) * HOUR_MS;
    return Math.floor(siderealAt(sunsetMs).sun / 30);
  };
  const monthIndex = signAtSunset(0);
  let day = 1;
  while (day < 33 && signAtSunset(-day) === monthIndex) day++;
  return { monthIndex, monthTa: TAMIL_MONTH_NAMES[monthIndex], day };
}

export interface DayPanchang {
  dateStr: string; // YYYY-MM-DD
  year: number;
  month: number; // 1..12
  day: number;
  weekdayIndex: number; // 0 = Sunday
  city: TamilCity;
  sunriseMs: number;
  sunsetMs: number;
  sunrise: string;
  sunset: string;
  tithiSegments: (PanchangSegment & { name: ReturnType<typeof tithiName>; num: number })[];
  nakshatraSegments: (PanchangSegment & { nameTa: string; nameEn: string })[];
  yogaSegments: (PanchangSegment & { nameTa: string })[];
  karanaSegments: (PanchangSegment & { nameTa: string })[];
  moonRasiSegments: (PanchangSegment & { rasiTa: string; rasiEn: string })[];
  tamilDate: TamilDateInfo;
  tithiAtSunrise: number; // 1..30
  paksha: 'shukla' | 'krishna';
}

export function computeDayPanchang(year: number, month: number, day: number, city: TamilCity = TAMIL_CITIES[0]): DayPanchang {
  const mIdx = month - 1;
  const solar = calculateSolarTimes(new Date(year, mIdx, day), city);
  const wallToMs = (dt: Date) =>
    Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes()) -
    cityOffsetOnDate(city, dt.getFullYear(), dt.getMonth(), dt.getDate()) * HOUR_MS;

  const sunriseMs = wallToMs(solar.sunrise);
  const sunsetMs = wallToMs(solar.sunset);
  const nextSunriseMs = wallToMs(solar.nextSunrise);
  const dayEndMs = cityDayStartMs(year, mIdx, day + 1, city);

  const tithiSegs = segments(tithiIndexAt, sunriseMs, nextSunriseMs, city, dayEndMs).map((s) => ({
    ...s,
    num: s.index + 1,
    name: tithiName(s.index + 1),
  }));
  const nakSegs = segments(nakshatraIndexAt, sunriseMs, nextSunriseMs, city, dayEndMs).map((s) => ({
    ...s,
    nameTa: NAKSHATRAS_LIST[s.index].nameTa,
    nameEn: NAKSHATRAS_LIST[s.index].nameEn,
  }));
  const yogaSegs = segments(yogaIndexAt, sunriseMs, nextSunriseMs, city, dayEndMs).map((s) => ({
    ...s,
    nameTa: YOGA_NAMES[s.index],
  }));
  const karanaSegs = segments(karanaIndexAt, sunriseMs, nextSunriseMs, city, dayEndMs).map((s) => ({
    ...s,
    nameTa: karanaName(s.index),
  }));
  const rasiSegs = segments(moonRasiIndexAt, sunriseMs, nextSunriseMs, city, dayEndMs).map((s) => ({
    ...s,
    rasiTa: RASIS_LIST[s.index].nameTa,
    rasiEn: RASIS_LIST[s.index].nameEn,
  }));

  const num = tithiSegs[0].num;
  return {
    dateStr: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
    year,
    month,
    day,
    weekdayIndex: new Date(Date.UTC(year, mIdx, day)).getUTCDay(),
    city,
    sunriseMs,
    sunsetMs,
    sunrise: formatCityTime(sunriseMs, city),
    sunset: formatCityTime(sunsetMs, city),
    tithiSegments: tithiSegs,
    nakshatraSegments: nakSegs,
    yogaSegments: yogaSegs,
    karanaSegments: karanaSegs,
    moonRasiSegments: rasiSegs,
    tamilDate: tamilDateFor(year, mIdx, day, city),
    tithiAtSunrise: num,
    paksha: num <= 15 ? 'shukla' : 'krishna',
  };
}

// Lighter variant for calendar grids that render dozens of days at once (no Tamil date, karana or rasi segments)
export interface DayPanchangLite {
  dateStr: string;
  tithiSegments: DayPanchang['tithiSegments'];
  nakshatraSegments: DayPanchang['nakshatraSegments'];
  yogaSegments: DayPanchang['yogaSegments'];
  moonRasiIndexAtSunrise: number;
}

export function computePanchangLite(year: number, month: number, day: number, city: TamilCity = TAMIL_CITIES[0]): DayPanchangLite {
  const mIdx = month - 1;
  const solar = calculateSolarTimes(new Date(year, mIdx, day), city);
  const wallToMs = (dt: Date) =>
    Date.UTC(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes()) -
    cityOffsetOnDate(city, dt.getFullYear(), dt.getMonth(), dt.getDate()) * HOUR_MS;
  const sunriseMs = wallToMs(solar.sunrise);
  const nextSunriseMs = wallToMs(solar.nextSunrise);
  const dayEndMs = cityDayStartMs(year, mIdx, day + 1, city);
  return {
    dateStr: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
    tithiSegments: segments(tithiIndexAt, sunriseMs, nextSunriseMs, city, dayEndMs).map((s) => ({ ...s, num: s.index + 1, name: tithiName(s.index + 1) })),
    nakshatraSegments: segments(nakshatraIndexAt, sunriseMs, nextSunriseMs, city, dayEndMs).map((s) => ({ ...s, nameTa: NAKSHATRAS_LIST[s.index].nameTa, nameEn: NAKSHATRAS_LIST[s.index].nameEn })),
    yogaSegments: segments(yogaIndexAt, sunriseMs, nextSunriseMs, city, dayEndMs).map((s) => ({ ...s, nameTa: YOGA_NAMES[s.index] })),
    moonRasiIndexAtSunrise: moonRasiIndexAt(sunriseMs),
  };
}
