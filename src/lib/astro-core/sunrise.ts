// Solar calculation engine for Tamil Panchangam (Sunrise, Sunset, and 8-segment subdivisions)
import { TAMIL_CITIES, type TamilCity } from './constants';
import { cityOffsetOnDate, utcOffsetAt } from './tz';

export interface SolarTimes {
  date: Date;
  city: TamilCity;
  sunrise: Date;
  sunset: Date;
  nextSunrise: Date;
  dayDurationMinutes: number;
  nightDurationMinutes: number;
  daySegmentMinutes: number;
  nightSegmentMinutes: number;
}

export interface TimeWindow {
  start: Date;
  end: Date;
  startFormatted: string;
  endFormatted: string;
}

// Convert Date to day of year (1-366)
export function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime() + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

// Format Date to "06:15 AM" format in IST or local timezone
export function formatTime12(date: Date): string {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12
  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
  return `${hoursStr}:${minutesStr} ${ampm}`;
}

// Astronomical calculation of Sunrise and Sunset
export function calculateSolarTimes(dateInput: Date, city: TamilCity = TAMIL_CITIES[0]): SolarTimes {
  const year = dateInput.getFullYear();
  const month = dateInput.getMonth();
  const day = dateInput.getDate();

  // Reference date at local noon
  const targetDate = new Date(year, month, day, 12, 0, 0);
  const dayOfYear = getDayOfYear(targetDate);

  // Solar declination approximation (Spencer 1971 formula, degrees)
  // B = 360 / 365 * (N - 81) in radians
  const b = ((360 / 365) * (dayOfYear - 81) * Math.PI) / 180;
  // Approximate Equation of Time in minutes
  const eot = 9.87 * Math.sin(2 * b) - 7.53 * Math.cos(b) - 1.5 * Math.sin(b);

  // Solar declination (degrees)
  const declination = 23.45 * Math.sin(((360 / 365) * (dayOfYear - 81) * Math.PI) / 180);
  const declRad = (declination * Math.PI) / 180;
  const latRad = (city.lat * Math.PI) / 180;

  // Zenith for sunrise/sunset (90.833° accounting for atmospheric refraction and solar radius)
  const zenithRad = (90.833 * Math.PI) / 180;

  // Hour angle calculation: cos(H) = (cos(zenith) - sin(lat)*sin(dec)) / (cos(lat)*cos(dec))
  let cosH = (Math.cos(zenithRad) - Math.sin(latRad) * Math.sin(declRad)) / (Math.cos(latRad) * Math.cos(declRad));
  if (cosH > 1) cosH = 1;
  if (cosH < -1) cosH = -1;

  const hourAngleDeg = (Math.acos(cosH) * 180) / Math.PI;

  // Solar Noon in local standard time (hours)
  // Standard meridian for India is 82.5° E (offset 5.5 hours)
  const standardMeridian = cityOffsetOnDate(city, year, month, day) * 15;
  const longitudeCorrectionMinutes = 4 * (standardMeridian - city.lon);
  const solarNoonMinutes = 12 * 60 + longitudeCorrectionMinutes - eot;

  const halfDayMinutes = (hourAngleDeg / 15) * 60;
  const sunriseMinutes = solarNoonMinutes - halfDayMinutes;
  const sunsetMinutes = solarNoonMinutes + halfDayMinutes;

  const sunriseDate = new Date(year, month, day, Math.floor(sunriseMinutes / 60), Math.round(sunriseMinutes % 60), 0);
  const sunsetDate = new Date(year, month, day, Math.floor(sunsetMinutes / 60), Math.round(sunsetMinutes % 60), 0);

  // Next day sunrise for nighttime segment calculation
  const nextDay = new Date(year, month, day + 1, 12, 0, 0);
  const nextDayOfYear = getDayOfYear(nextDay);
  const bNext = ((360 / 365) * (nextDayOfYear - 81) * Math.PI) / 180;
  const eotNext = 9.87 * Math.sin(2 * bNext) - 7.53 * Math.cos(bNext) - 1.5 * Math.sin(bNext);
  const declNext = 23.45 * Math.sin(((360 / 365) * (nextDayOfYear - 81) * Math.PI) / 180);
  const declRadNext = (declNext * Math.PI) / 180;
  let cosHNext = (Math.cos(zenithRad) - Math.sin(latRad) * Math.sin(declRadNext)) / (Math.cos(latRad) * Math.cos(declRadNext));
  if (cosHNext > 1) cosHNext = 1;
  if (cosHNext < -1) cosHNext = -1;
  const hourAngleDegNext = (Math.acos(cosHNext) * 180) / Math.PI;
  const solarNoonNext = 12 * 60 + longitudeCorrectionMinutes - eotNext;
  const sunriseNextMinutes = solarNoonNext - (hourAngleDegNext / 15) * 60;
  const nextSunriseDate = new Date(year, month, day + 1, Math.floor(sunriseNextMinutes / 60), Math.round(sunriseNextMinutes % 60), 0);

  const dayDurationMinutes = (sunsetDate.getTime() - sunriseDate.getTime()) / (1000 * 60);
  const nightDurationMinutes = (nextSunriseDate.getTime() - sunsetDate.getTime()) / (1000 * 60);

  return {
    date: dateInput,
    city,
    sunrise: sunriseDate,
    sunset: sunsetDate,
    nextSunrise: nextSunriseDate,
    dayDurationMinutes,
    nightDurationMinutes,
    daySegmentMinutes: dayDurationMinutes / 8,
    nightSegmentMinutes: nightDurationMinutes / 8,
  };
}

// Calculate the start and end of a specific daytime segment (1 to 8)
export function getDaytimeSegment(solar: SolarTimes, segmentIndex1to8: number): TimeWindow {
  const startMs = solar.sunrise.getTime() + (segmentIndex1to8 - 1) * solar.daySegmentMinutes * 60 * 1000;
  const endMs = solar.sunrise.getTime() + segmentIndex1to8 * solar.daySegmentMinutes * 60 * 1000;
  const start = new Date(startMs);
  const end = new Date(endMs);
  return {
    start,
    end,
    startFormatted: formatTime12(start),
    endFormatted: formatTime12(end),
  };
}

// Calculate the start and end of a specific nighttime segment (1 to 8)
export function getNighttimeSegment(solar: SolarTimes, segmentIndex1to8: number): TimeWindow {
  const startMs = solar.sunset.getTime() + (segmentIndex1to8 - 1) * solar.nightSegmentMinutes * 60 * 1000;
  const endMs = solar.sunset.getTime() + segmentIndex1to8 * solar.nightSegmentMinutes * 60 * 1000;
  const start = new Date(startMs);
  const end = new Date(endMs);
  return {
    start,
    end,
    startFormatted: formatTime12(start),
    endFormatted: formatTime12(end),
  };
}

// Wall-clock "now" in the city's own time zone, as a Date whose local fields read as city time.
// Keeps current-time checks right for visitors outside the city's time zone (NRIs, servers in UTC).
export function cityNow(city: TamilCity = TAMIL_CITIES[0], nowMs: number = Date.now()): Date {
  const u = new Date(nowMs + utcOffsetAt(city, nowMs) * 3600000);
  return new Date(u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate(), u.getUTCHours(), u.getUTCMinutes(), u.getUTCSeconds());
}

// YYYY-MM-DD of today in the city's time zone (works on UTC servers and in any visitor time zone)
export function cityTodayStr(city: TamilCity = TAMIL_CITIES[0], nowMs: number = Date.now()): string {
  const u = new Date(nowMs + utcOffsetAt(city, nowMs) * 3600000);
  const y = u.getUTCFullYear();
  const m = String(u.getUTCMonth() + 1).padStart(2, '0');
  const d = String(u.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
