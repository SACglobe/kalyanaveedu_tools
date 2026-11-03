// Birth chart (Jathagam / Kundli) assembled from the planet, nakshatra, dasha and dosha engines
import { NAKSHATRAS_LIST, RASIS_LIST, type TamilCity } from './constants';
import { computeChart, type PlanetKey, type PlanetPlacement } from './planets';
import { cityOffsetOnDate } from './tz';
import { calculateVimshottariDasha, type VimshottariDashaResult } from './dasha';
import { calculateSevvaiDosham, calculateKaalSarpDosha, type SevvaiDoshamResult, type KaalSarpDoshaResult } from './dosha';
import { tithiIndexAt, tithiName } from './panchang-day';

export const PLANET_NAMES_TA: Record<PlanetKey, { name: string; short: string }> = {
  sun: { name: 'சூரியன்', short: 'சூ' },
  moon: { name: 'சந்திரன்', short: 'சந்' },
  mars: { name: 'செவ்வாய்', short: 'செ' },
  mercury: { name: 'புதன்', short: 'பு' },
  jupiter: { name: 'குரு', short: 'கு' },
  venus: { name: 'சுக்கிரன்', short: 'சு' },
  saturn: { name: 'சனி', short: 'சனி' },
  rahu: { name: 'ராகு', short: 'ரா' },
  ketu: { name: 'கேது', short: 'கே' },
};

const NAK_ARC = 360 / 27;

export interface KundliPlanet extends PlanetPlacement {
  nameTa: string;
  shortTa: string;
  nakshatraTa: string;
  pada: number;
  house: number; // from lagna (whole-sign)
  navamsaRasi: number;
}

export interface KundliResult {
  birthUtcMs: number;
  lagnaRasi: number;
  lagnaDeg: number;
  lagnaNakshatraTa: string;
  planets: KundliPlanet[];
  moonRasi: number;
  moonNakshatraTa: string;
  moonNakshatraId: number;
  moonPada: number;
  tithiTa: string;
  dasha: VimshottariDashaResult;
  sevvai: SevvaiDoshamResult;
  kaalSarp: KaalSarpDoshaResult;
  ayanamsa: number;
}

const navamsaRasiOf = (lon: number) => Math.floor((lon * 9) / 30) % 12;

export function computeKundli(
  year: number, month: number, day: number, hour: number, minute: number, city: TamilCity
): KundliResult {
  const offset = cityOffsetOnDate(city, year, month - 1, day);
  const birthUtcMs = Date.UTC(year, month - 1, day, hour, minute) - offset * 3600000;
  const chart = computeChart(birthUtcMs, city.lat, city.lon);
  const lagnaRasi = chart.lagna.rasiIndex;

  const planets: KundliPlanet[] = chart.planets.map((p) => {
    const nakIdx = Math.min(26, Math.floor(p.longitude / NAK_ARC));
    const pada = Math.min(4, Math.floor((p.longitude % NAK_ARC) / (NAK_ARC / 4)) + 1);
    return {
      ...p,
      nameTa: PLANET_NAMES_TA[p.key].name,
      shortTa: PLANET_NAMES_TA[p.key].short,
      nakshatraTa: NAKSHATRAS_LIST[nakIdx].nameTa,
      pada,
      house: ((p.rasiIndex - lagnaRasi + 12) % 12) + 1,
      navamsaRasi: navamsaRasiOf(p.longitude),
    };
  });
  const get = (k: PlanetKey) => planets.find((p) => p.key === k)!;
  const moon = get('moon');
  const mars = get('mars');
  const venus = get('venus');
  const jupiter = get('jupiter');
  const rahu = get('rahu');
  const ketu = get('ketu');

  const moonNak = NAKSHATRAS_LIST[Math.min(26, Math.floor(moon.longitude / NAK_ARC))];
  const pctDone = ((moon.longitude % NAK_ARC) / NAK_ARC) * 100;
  const dasha = calculateVimshottariDasha(new Date(birthUtcMs), moonNak.dashaLord, pctDone);

  const houseFrom = (from: number, to: number) => ((to - from + 12) % 12) + 1;
  // Jupiter aspects the 5th, 7th and 9th from itself (plus its own house)
  const jupToMars = houseFrom(jupiter.rasiIndex, mars.rasiIndex);
  const sevvai = calculateSevvaiDosham(
    mars.house,
    houseFrom(moon.rasiIndex, mars.rasiIndex),
    houseFrom(venus.rasiIndex, mars.rasiIndex),
    mars.rasiIndex,
    [1, 5, 7, 9].includes(jupToMars)
  );

  // Kaal Sarp: the seven planets (Sun..Saturn) all on one side of the Rahu-Ketu axis
  const seven = planets.filter((p) => !['rahu', 'ketu'].includes(p.key));
  const inArc = (lon: number, from: number) => (((lon - from) % 360) + 360) % 360 < 180;
  const outsideA = seven.filter((p) => !inArc(p.longitude, rahu.longitude)).length; // Rahu -> Ketu side
  const outsideB = seven.filter((p) => !inArc(p.longitude, ketu.longitude)).length; // Ketu -> Rahu side
  const outside = Math.min(outsideA, outsideB);
  const kaalSarp = calculateKaalSarpDosha(rahu.house, outside === 0, outside);

  const lagnaNak = NAKSHATRAS_LIST[Math.min(26, Math.floor(chart.lagna.longitude / NAK_ARC))];
  return {
    birthUtcMs,
    lagnaRasi,
    lagnaDeg: chart.lagna.degInRasi,
    lagnaNakshatraTa: lagnaNak.nameTa,
    planets,
    moonRasi: moon.rasiIndex,
    moonNakshatraTa: moonNak.nameTa,
    moonNakshatraId: moonNak.id,
    moonPada: moon.pada,
    tithiTa: (() => {
      const t = tithiName(tithiIndexAt(birthUtcMs) + 1);
      return `${t.pakshaTa} ${t.ta}`;
    })(),
    dasha,
    sevvai,
    kaalSarp,
    ayanamsa: chart.ayanamsa,
  };
}

export const RASI_NAMES_TA = RASIS_LIST.map((r) => r.nameTa);
