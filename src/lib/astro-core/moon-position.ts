// Astronomical Engine for Sidereal Planetary Longitudes (Moon & Sun)
// Based on Jean Meeus Astronomical Algorithms with Lahiri Ayanamsa correction

export interface PlanetPositionResult {
  moonSiderealLongitude: number; // 0° to 360°
  sunSiderealLongitude: number;  // 0° to 360°
  ayanamsaDegrees: number;
  julianDate: number;
}

// Convert degrees to radians
function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

// Normalize angle to [0, 360)
export function normalize360(deg: number): number {
  let val = deg % 360;
  if (val < 0) val += 360;
  return val;
}

// Calculate Julian Day Number from Gregorian Date in Universal Time (UT)
export function calculateJulianDay(year: number, month: number, day: number, utHour: number): number {
  let y = year;
  let m = month; // 1-12
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const a = Math.floor(y / 100);
  const b = 2 - a + Math.floor(a / 4);
  const dayFraction = day + utHour / 24.0;
  const jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + dayFraction + b - 1524.5;
  return jd;
}

// Calculate Lahiri Ayanamsa (Chitrapaksha) for a given Julian Day
// Accurate to within 1-2 arc-minutes across the 1900-2100 era
export function calculateLahiriAyanamsa(jd: number): number {
  // Epoch J2000.0 (JD 2451545.0) Lahiri value was ~ 23.858°
  // Precession rate = 50.29 arcseconds per year = 0.013969° per year
  const t = (jd - 2451545.0) / 36525.0; // Julian centuries
  const ayanamsa = 23.858072 + 1.396042 * t + 0.000308 * t * t;
  return ayanamsa;
}

// Calculate Tropical Longitude of the Sun (Meeus algorithm)
export function calculateSunTropicalLongitude(t: number): number {
  // Mean longitude of the Sun
  const l0 = 280.46646 + 36000.76983 * t + 0.0003032 * t * t;
  // Mean anomaly of the Sun
  const m = 357.52911 + 35999.05029 * t - 0.0001537 * t * t;
  const mRad = toRad(m);

  // Sun's equation of center
  const c =
    (1.914602 - 0.004817 * t - 0.000014 * t * t) * Math.sin(mRad) +
    (0.019993 - 0.000101 * t) * Math.sin(2 * mRad) +
    0.000289 * Math.sin(3 * mRad);

  // True longitude
  const sunLong = l0 + c;
  return normalize360(sunLong);
}

// Calculate Tropical Longitude of the Moon (Meeus simplified, accurate to ~0.05°-0.1°)
export function calculateMoonTropicalLongitude(t: number): number {
  // Moon's mean longitude
  const lp = 218.3164477 + 481267.88123421 * t - 0.0015786 * t * t;

  // Moon's mean elongation
  const d = 297.8501921 + 445267.1114034 * t - 0.0018819 * t * t;

  // Sun's mean anomaly
  const m = 357.5291092 + 35999.0502909 * t - 0.0001536 * t * t;

  // Moon's mean anomaly
  const mp = 134.9633964 + 477198.8675055 * t + 0.0087414 * t * t;

  // Moon's argument of latitude
  const f = 93.272095 + 483202.0175233 * t - 0.0036539 * t * t;

  const dRad = toRad(d);
  const mRad = toRad(m);
  const mpRad = toRad(mp);
  const fRad = toRad(f);

  // Major periodic perturbations in lunar longitude (arcdegrees)
  let deltaL =
    6.288774 * Math.sin(mpRad) +
    1.274027 * Math.sin(2 * dRad - mpRad) +
    0.658314 * Math.sin(2 * dRad) +
    0.213618 * Math.sin(2 * mpRad) -
    0.185116 * Math.sin(mRad) -
    0.114332 * Math.sin(2 * fRad) +
    0.058793 * Math.sin(2 * dRad - 2 * mpRad) +
    0.057066 * Math.sin(2 * dRad - mRad - mpRad) +
    0.053322 * Math.sin(2 * dRad + mpRad) +
    0.045758 * Math.sin(2 * dRad - mRad) -
    0.040923 * Math.sin(mRad - mpRad) -
    0.03472 * Math.sin(dRad) -
    0.030383 * Math.sin(mRad + mpRad);

  const moonLong = lp + deltaL;
  return normalize360(moonLong);
}

// Main calculation: get Sidereal positions of Moon & Sun
export function calculateSiderealPlanets(
  year: number,
  month: number, // 1 to 12
  day: number,
  hour: number,  // 0 to 23
  minute: number,
  utcOffset: number = 5.5 // Default IST
): PlanetPositionResult {
  const localDecimalHour = hour + minute / 60.0;
  const utHour = localDecimalHour - utcOffset;

  const jd = calculateJulianDay(year, month, day, utHour);
  const t = (jd - 2451545.0) / 36525.0; // Julian centuries from J2000.0

  const ayanamsa = calculateLahiriAyanamsa(jd);
  const sunTrop = calculateSunTropicalLongitude(t);
  const moonTrop = calculateMoonTropicalLongitude(t);

  const moonSidereal = normalize360(moonTrop - ayanamsa);
  const sunSidereal = normalize360(sunTrop - ayanamsa);

  return {
    moonSiderealLongitude: moonSidereal,
    sunSiderealLongitude: sunSidereal,
    ayanamsaDegrees: ayanamsa,
    julianDate: jd,
  };
}
