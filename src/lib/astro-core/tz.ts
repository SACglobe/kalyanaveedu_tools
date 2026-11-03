// UTC offset lookup for cities, including daylight saving (via the runtime's IANA time zone data)
const HOUR_MS = 3600000;

interface OffsetCity {
  utcOffset: number; // standard / fixed offset in hours
  tz?: string; // IANA zone; set for cities that observe DST
}

const formatters = new Map<string, Intl.DateTimeFormat>();

function formatterFor(tz: string): Intl.DateTimeFormat {
  let f = formatters.get(tz);
  if (!f) {
    f = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      hourCycle: 'h23',
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
    });
    formatters.set(tz, f);
  }
  return f;
}

// Offset (hours east of UTC) in effect at the instant `ms`
export function utcOffsetAt(city: OffsetCity, ms: number): number {
  if (!city.tz) return city.utcOffset;
  try {
    const parts = formatterFor(city.tz).formatToParts(new Date(ms));
    const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
    const asUtc = Date.UTC(get('year'), get('month') - 1, get('day'), get('hour'), get('minute'), get('second'));
    return Math.round(((asUtc - Math.floor(ms / 1000) * 1000) / HOUR_MS) * 4) / 4;
  } catch {
    return city.utcOffset;
  }
}

// Offset on a civil date (month is 0-based), sampled at local midday so DST changeovers (usually at night) resolve cleanly
export function cityOffsetOnDate(city: OffsetCity, year: number, monthIdx: number, day: number): number {
  if (!city.tz) return city.utcOffset;
  return utcOffsetAt(city, Date.UTC(year, monthIdx, day, 12) - city.utcOffset * HOUR_MS);
}
