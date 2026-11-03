// Geocentric planetary longitudes (Mercury..Saturn, Rahu/Ketu) and the Lagna, for Vedic (sidereal) charts.
// Orbital elements follow P. Schlyter's "How to compute planetary positions" (with Jupiter/Saturn perturbations):
// accurate to a few arc-minutes, which is ample for rasi, nakshatra and pada.
import { calculateLahiriAyanamsa, normalize360 } from './moon-position';
import { siderealAt } from './panchang-day';

const RAD = Math.PI / 180;
const DEG = 180 / Math.PI;
const sin = (d: number) => Math.sin(d * RAD);
const cos = (d: number) => Math.cos(d * RAD);

interface Elements {
  N: number; i: number; w: number; a: number; e: number; M: number;
}

function elementsFor(name: 'mercury' | 'venus' | 'mars' | 'jupiter' | 'saturn' | 'sun', d: number): Elements {
  switch (name) {
    case 'sun':
      return { N: 0, i: 0, w: 282.9404 + 4.70935e-5 * d, a: 1, e: 0.016709 - 1.151e-9 * d, M: 356.047 + 0.9856002585 * d };
    case 'mercury':
      return { N: 48.3313 + 3.24587e-5 * d, i: 7.0047 + 5.0e-8 * d, w: 29.1241 + 1.01444e-5 * d, a: 0.387098, e: 0.205635 + 5.59e-10 * d, M: 168.6562 + 4.0923344368 * d };
    case 'venus':
      return { N: 76.6799 + 2.4659e-5 * d, i: 3.3946 + 2.75e-8 * d, w: 54.891 + 1.38374e-5 * d, a: 0.72333, e: 0.006773 - 1.302e-9 * d, M: 48.0052 + 1.6021302244 * d };
    case 'mars':
      return { N: 49.5574 + 2.11081e-5 * d, i: 1.8497 - 1.78e-8 * d, w: 286.5016 + 2.92961e-5 * d, a: 1.523688, e: 0.093405 + 2.516e-9 * d, M: 18.6021 + 0.5240207766 * d };
    case 'jupiter':
      return { N: 100.4542 + 2.76854e-5 * d, i: 1.303 - 1.557e-7 * d, w: 273.8777 + 1.64505e-5 * d, a: 5.20256, e: 0.048498 + 4.469e-9 * d, M: 19.895 + 0.0830853001 * d };
    case 'saturn':
      return { N: 113.6634 + 2.3898e-5 * d, i: 2.4886 - 1.081e-7 * d, w: 339.3939 + 2.97661e-5 * d, a: 9.55475, e: 0.055546 - 9.499e-9 * d, M: 316.967 + 0.0334442282 * d };
  }
}

// Solve Kepler's equation; returns true anomaly (deg) and distance
function orbit(el: Elements) {
  const M = normalize360(el.M);
  let E = M + DEG * el.e * sin(M) * (1 + el.e * cos(M));
  for (let k = 0; k < 8; k++) {
    const dE = (E - DEG * el.e * sin(E) - M) / (1 - el.e * cos(E));
    E -= dE;
    if (Math.abs(dE) < 1e-9) break;
  }
  const xv = el.a * (cos(E) - el.e);
  const yv = el.a * Math.sqrt(1 - el.e * el.e) * sin(E);
  return { v: Math.atan2(yv, xv) * DEG, r: Math.sqrt(xv * xv + yv * yv) };
}

export type PlanetKey = 'sun' | 'moon' | 'mars' | 'mercury' | 'jupiter' | 'venus' | 'saturn' | 'rahu' | 'ketu';

// Tropical geocentric ecliptic longitudes (degrees) at Julian Day (UT) `jd`
export function tropicalLongitudes(jd: number): Record<'sun' | 'mercury' | 'venus' | 'mars' | 'jupiter' | 'saturn', number> {
  const d = jd - 2451543.5;

  const sunEl = elementsFor('sun', d);
  const so = orbit(sunEl);
  const sunLon = so.v + sunEl.w;
  const xs = so.r * cos(sunLon);
  const ys = so.r * sin(sunLon);

  const Mj = elementsFor('jupiter', d).M;
  const Ms = elementsFor('saturn', d).M;

  const out = { sun: normalize360(sunLon) } as Record<'sun' | 'mercury' | 'venus' | 'mars' | 'jupiter' | 'saturn', number>;
  for (const name of ['mercury', 'venus', 'mars', 'jupiter', 'saturn'] as const) {
    const el = elementsFor(name, d);
    const { v, r } = orbit(el);
    const vw = v + el.w;
    let xh = r * (cos(el.N) * cos(vw) - sin(el.N) * sin(vw) * cos(el.i));
    let yh = r * (sin(el.N) * cos(vw) + cos(el.N) * sin(vw) * cos(el.i));
    const zh = r * sin(vw) * sin(el.i);

    let pert = 0;
    if (name === 'jupiter') {
      pert =
        -0.332 * sin(2 * Mj - 5 * Ms - 67.6) - 0.056 * sin(2 * Mj - 2 * Ms + 21) + 0.042 * sin(3 * Mj - 5 * Ms + 21) -
        0.036 * sin(Mj - 2 * Ms) + 0.022 * cos(Mj - Ms) + 0.023 * sin(2 * Mj - 3 * Ms + 52) - 0.016 * sin(Mj - 5 * Ms - 69);
    } else if (name === 'saturn') {
      pert =
        0.812 * sin(2 * Mj - 5 * Ms - 67.6) - 0.229 * cos(2 * Mj - 4 * Ms - 2) + 0.119 * sin(Mj - 2 * Ms - 3) +
        0.046 * sin(2 * Mj - 6 * Ms - 69) + 0.014 * sin(Mj - 3 * Ms + 32);
    }
    if (pert !== 0) {
      const rho = Math.sqrt(xh * xh + yh * yh);
      const lonh = Math.atan2(yh, xh) * DEG + pert;
      xh = rho * cos(lonh);
      yh = rho * sin(lonh);
    }
    out[name] = normalize360(Math.atan2(yh + ys, xh + xs) * DEG);
  }
  return out;
}

export function julianDayFromUtcMs(ms: number): number {
  return ms / 86400000 + 2440587.5;
}

export interface PlanetPlacement {
  key: PlanetKey;
  longitude: number; // sidereal, 0..360
  rasiIndex: number; // 0..11
  degInRasi: number;
  retrograde: boolean;
}

export interface ChartPositions {
  ayanamsa: number;
  lagna: { longitude: number; rasiIndex: number; degInRasi: number };
  planets: PlanetPlacement[];
}

function lagnaTropical(jd: number, latDeg: number, lonEastDeg: number): number {
  const T = (jd - 2451545.0) / 36525;
  const gmst = normalize360(280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * T * T);
  const ramc = normalize360(gmst + lonEastDeg);
  const eps = 23.439291 - 0.0130042 * T;
  const y = cos(ramc);
  const x = -(sin(ramc) * cos(eps) + Math.tan(latDeg * RAD) * sin(eps));
  return normalize360(Math.atan2(y, x) * DEG);
}

function meanNode(jd: number): number {
  const T = (jd - 2451545.0) / 36525;
  return normalize360(125.04452 - 1934.136261 * T + 0.0020708 * T * T);
}

function placement(key: PlanetKey, lon: number, retro: boolean): PlanetPlacement {
  const longitude = normalize360(lon);
  return { key, longitude, rasiIndex: Math.floor(longitude / 30), degInRasi: longitude % 30, retrograde: retro };
}

// Full sidereal chart for an instant (UTC ms) and place
export function computeChart(utcMs: number, latDeg: number, lonEastDeg: number): ChartPositions {
  const jd = julianDayFromUtcMs(utcMs);
  const ayanamsa = calculateLahiriAyanamsa(jd);
  const trop = tropicalLongitudes(jd);
  const next = tropicalLongitudes(jd + 1);
  const sid = siderealAt(utcMs);

  // Rahu/Ketu: mean node (retrograde by definition); Ketu opposite
  const rahu = normalize360(meanNode(jd) - ayanamsa);
  const retro = (k: 'mercury' | 'venus' | 'mars' | 'jupiter' | 'saturn') => {
    let diff = next[k] - trop[k];
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    return diff < 0;
  };

  const planets: PlanetPlacement[] = [
    placement('sun', sid.sun, false),
    placement('moon', sid.moon, false),
    placement('mars', trop.mars - ayanamsa, retro('mars')),
    placement('mercury', trop.mercury - ayanamsa, retro('mercury')),
    placement('jupiter', trop.jupiter - ayanamsa, retro('jupiter')),
    placement('venus', trop.venus - ayanamsa, retro('venus')),
    placement('saturn', trop.saturn - ayanamsa, retro('saturn')),
    placement('rahu', rahu, true),
    placement('ketu', rahu + 180, true),
  ];

  const lagnaLon = normalize360(lagnaTropical(jd, latDeg, lonEastDeg) - ayanamsa);
  return {
    ayanamsa,
    lagna: { longitude: lagnaLon, rasiIndex: Math.floor(lagnaLon / 30), degInRasi: lagnaLon % 30 },
    planets,
  };
}
