// Nakshatra and Rasi computation engine
import { NAKSHATRAS_LIST, RASIS_LIST, type NakshatraDetail, type RasiDetail } from './constants';
import { calculateSiderealPlanets, type PlanetPositionResult } from './moon-position';

export interface NakshatraFinderResult {
  nakshatra: NakshatraDetail;
  pada: number; // 1 to 4
  rasi: RasiDetail;
  moonLongitude: number;
  sunLongitude: number;
  ayanamsa: number;
  suggestedNameSyllable: string;
  allSyllables: string[];
  padaDegreeRemaining: number; // For dasha balance
  percentageCompletedInNakshatra: number;
}

const NAKSHATRA_ARC = 360.0 / 27.0; // 13°20' = 13.333333333333334 degrees
const PADA_ARC = NAKSHATRA_ARC / 4.0; // 3°20' = 3.3333333333333335 degrees
const RASI_ARC = 30.0; // 30 degrees per zodiac sign

// Calculate Nakshatra and Pada from Moon sidereal longitude
export function getNakshatraFromMoonLongitude(moonLongitude: number): {
  nakshatra: NakshatraDetail;
  pada: number;
  rasi: RasiDetail;
  percentageCompleted: number;
  remainderDegrees: number;
} {
  const nakshatraIndex = Math.floor(moonLongitude / NAKSHATRA_ARC);
  const remainder = moonLongitude % NAKSHATRA_ARC;
  const pada = Math.min(4, Math.floor(remainder / PADA_ARC) + 1);

  const rasiIndex = Math.floor(moonLongitude / RASI_ARC);

  const safeNakshatraIndex = Math.max(0, Math.min(26, nakshatraIndex));
  const safeRasiIndex = Math.max(0, Math.min(11, rasiIndex));

  const nakshatra = NAKSHATRAS_LIST[safeNakshatraIndex];
  const rasi = RASIS_LIST[safeRasiIndex];

  const percentageCompleted = Math.round((remainder / NAKSHATRA_ARC) * 100);

  return {
    nakshatra,
    pada,
    rasi,
    percentageCompleted,
    remainderDegrees: remainder,
  };
}

// Find Nakshatra by Birth Details (DOB + Time)
export function findNakshatraByBirthDetails(
  year: number,
  month: number, // 1 to 12
  day: number,
  hour: number,  // 0 to 23
  minute: number,
  utcOffset: number = 5.5
): NakshatraFinderResult {
  const planets: PlanetPositionResult = calculateSiderealPlanets(year, month, day, hour, minute, utcOffset);
  const calculated = getNakshatraFromMoonLongitude(planets.moonSiderealLongitude);

  const syllableIndex = Math.max(0, Math.min(3, calculated.pada - 1));
  const suggestedNameSyllable = calculated.nakshatra.syllables[syllableIndex] || calculated.nakshatra.syllables[0];

  const degreeRemaining = NAKSHATRA_ARC - calculated.remainderDegrees;

  return {
    nakshatra: calculated.nakshatra,
    pada: calculated.pada,
    rasi: calculated.rasi,
    moonLongitude: planets.moonSiderealLongitude,
    sunLongitude: planets.sunSiderealLongitude,
    ayanamsa: planets.ayanamsaDegrees,
    suggestedNameSyllable,
    allSyllables: calculated.nakshatra.syllables,
    padaDegreeRemaining: degreeRemaining,
    percentageCompletedInNakshatra: calculated.percentageCompleted,
  };
}
