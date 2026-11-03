// Day table + observance rules for viratham and festivals.
// A day is chosen by how much of the relevant time window (daytime, aparahna, midnight...) the tithi or nakshatra covers.
import { TAMIL_CITIES, type TamilCity } from './constants';
import { calculateSolarTimes } from './sunrise';
import { cityOffsetOnDate } from './tz';
import { siderealAt } from './panchang-day';
import { normalize360 } from './moon-position';

const MIN = 60000;
const HOUR_MS = 3600000;
const STEP = 30 * MIN;
const SAMPLES = 53; // 26.5 hours from sunrise

export interface DayRow {
  dateStr: string;
  weekdayIndex: number;
  sunrise: number;
  sunset: number;
  month: number; // Tamil solar month 0..11 (Chithirai = 0)
  monthSeq: number; // increments each time the month changes (groups one month occurrence)
  tamilDay: number;
  tithi: Uint8Array; // 1..30 at each sample
  nak: Uint8Array; // 0..26 at each sample
}

export type WindowName = 'day' | 'sunrise' | 'evening' | 'pradosha' | 'midnight' | 'moonrise' | 'aparahna' | 'madhyahna';

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export function buildDayTable(startY: number, startM: number, startD: number, days: number, city: TamilCity = TAMIL_CITIES[0]): DayRow[] {
  const rows: DayRow[] = [];
  let prevMonth = -1;
  let seq = 0;
  let tamilDay = 0;
  for (let i = 0; i < days; i++) {
    const dt = new Date(Date.UTC(startY, startM - 1, startD + i));
    const y = dt.getUTCFullYear();
    const m = dt.getUTCMonth();
    const d = dt.getUTCDate();
    const solar = calculateSolarTimes(new Date(y, m, d), city);
    const off = cityOffsetOnDate(city, y, m, d) * HOUR_MS;
    const wall = (x: Date) => Date.UTC(x.getFullYear(), x.getMonth(), x.getDate(), x.getHours(), x.getMinutes()) - off;
    const sunrise = wall(solar.sunrise);
    const sunset = wall(solar.sunset);
    const month = Math.floor(siderealAt(sunset).sun / 30);
    if (month !== prevMonth) {
      seq++;
      tamilDay = 1;
      prevMonth = month;
    } else {
      tamilDay++;
    }
    const tithi = new Uint8Array(SAMPLES);
    const nak = new Uint8Array(SAMPLES);
    for (let k = 0; k < SAMPLES; k++) {
      const s = siderealAt(sunrise + k * STEP);
      tithi[k] = Math.floor(normalize360(s.moon - s.sun) / 12) + 1;
      nak[k] = Math.floor(s.moon / (360 / 27));
    }
    rows.push({
      dateStr: `${y}-${pad(m + 1)}-${pad(d)}`,
      weekdayIndex: dt.getUTCDay(),
      sunrise, sunset, month, monthSeq: seq, tamilDay, tithi, nak,
    });
  }
  return rows;
}

function windowOf(row: DayRow, w: WindowName): [number, number] {
  const L = row.sunset - row.sunrise;
  switch (w) {
    case 'day': return [row.sunrise, row.sunset];
    case 'sunrise': return [row.sunrise, row.sunrise + 90 * MIN];
    case 'evening': return [row.sunset, row.sunset + 120 * MIN];
    case 'pradosha': return [row.sunset - 90 * MIN, row.sunset + 90 * MIN];
    case 'midnight': return [row.sunset + 300 * MIN, row.sunset + 420 * MIN];
    case 'moonrise': return [row.sunset + 60 * MIN, row.sunset + 240 * MIN];
    case 'aparahna': return [row.sunrise + 0.6 * L, row.sunrise + 0.8 * L];
    case 'madhyahna': return [row.sunrise + 0.4 * L, row.sunrise + 0.6 * L];
  }
}

export interface MatchSpec {
  kind: 'tithi' | 'nakshatra';
  targets: number[]; // tithi 1..30 or nakshatra index 0..26
  window: WindowName;
}

export function overlapMinutes(row: DayRow, spec: MatchSpec): number {
  const [a, b] = windowOf(row, spec.window);
  const arr = spec.kind === 'tithi' ? row.tithi : row.nak;
  let n = 0;
  for (let k = 0; k < SAMPLES; k++) {
    const t = row.sunrise + k * STEP;
    if (t >= a && t <= b && spec.targets.includes(arr[k])) n++;
  }
  return n * 30;
}

// Indices of rows that are the best day of each occurrence of the spec (local maxima of overlap)
export function matchRows(rows: DayRow[], spec: MatchSpec, filter?: (row: DayRow) => boolean): number[] {
  const ov = rows.map((r) => overlapMinutes(r, spec));
  const out: number[] = [];
  for (let i = 1; i < rows.length - 1; i++) {
    if (ov[i] > 0 && ov[i] > ov[i - 1] && ov[i] >= ov[i + 1] && (!filter || filter(rows[i]))) out.push(i);
  }
  return out;
}
