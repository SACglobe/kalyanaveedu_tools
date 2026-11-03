// Vimshottari Dasha and Antardasha calculation engine
import { DASHA_YEARS, DASHA_ORDER } from './constants';

export interface AntardashaPeriod {
  lord: string;
  lordTa: string;
  startDate: Date;
  endDate: Date;
  durationMonths: number;
  durationDays: number;
}

export interface MahadashaPeriod {
  lord: string;
  lordTa: string;
  totalYears: number;
  balanceYearsAtBirth?: number;
  startDate: Date;
  endDate: Date;
  antardashas: AntardashaPeriod[];
  isCurrent: boolean;
}

export interface VimshottariDashaResult {
  birthDate: Date;
  firstLord: string;
  firstLordTa: string;
  balanceYears: number;
  balanceMonths: number;
  balanceDays: number;
  timeline: MahadashaPeriod[];
  currentMahadasha?: MahadashaPeriod;
  currentAntardasha?: AntardashaPeriod;
}

export const DASHA_LORDS_TA: Record<string, string> = {
  Ketu: 'கேது',
  Venus: 'சுக்கிரன்',
  Sun: 'சூரியன்',
  Moon: 'சந்திரன்',
  Mars: 'செவ்வாய்',
  Rahu: 'ராகு',
  Jupiter: 'குரு',
  Saturn: 'சனி',
  Mercury: 'புதன்',
};

// Add decimal years to a date
function addYears(date: Date, years: number): Date {
  const result = new Date(date.getTime());
  const totalDays = Math.round(years * 365.25);
  result.setDate(result.getDate() + totalDays);
  return result;
}

// Calculate full 120-year Vimshottari Dasha & Antardashas
export function calculateVimshottariDasha(
  birthDate: Date,
  birthDashaLord: string,
  percentageCompletedInNakshatra: number // 0 to 100
): VimshottariDashaResult {
  const lordIndex = DASHA_ORDER.indexOf(birthDashaLord as any);
  const safeLordIndex = lordIndex >= 0 ? lordIndex : 0;
  const initialLord = DASHA_ORDER[safeLordIndex];

  const fullFirstDashaYears = DASHA_YEARS[initialLord];
  // Balance remaining at birth
  const fractionRemaining = Math.max(0.01, (100 - percentageCompletedInNakshatra) / 100);
  const balanceYearsTotal = fractionRemaining * fullFirstDashaYears;

  const balanceYears = Math.floor(balanceYearsTotal);
  const balanceMonths = Math.floor((balanceYearsTotal - balanceYears) * 12);
  const balanceDays = Math.floor(((balanceYearsTotal - balanceYears) * 12 - balanceMonths) * 30.4375);

  const now = new Date();
  const timeline: MahadashaPeriod[] = [];

  let currentDate = new Date(birthDate.getTime());
  let currentMahadasha: MahadashaPeriod | undefined;
  let currentAntardasha: AntardashaPeriod | undefined;

  // Build sequential Mahadashas (9 cycles = 120 years)
  for (let i = 0; i < 9; i++) {
    const currentLordIndex = (safeLordIndex + i) % 9;
    const lord = DASHA_ORDER[currentLordIndex];
    const fullYears = DASHA_YEARS[lord];

    // For the very first Mahadasha, only the balance of years is experienced after birth
    const durationYears = i === 0 ? balanceYearsTotal : fullYears;
    const periodStartDate = new Date(currentDate.getTime());
    const periodEndDate = addYears(periodStartDate, durationYears);

    const isCurrentMaha = now.getTime() >= periodStartDate.getTime() && now.getTime() < periodEndDate.getTime();

    // Calculate the 9 Antardashas for this Mahadasha
    const antardashas: AntardashaPeriod[] = [];
    let antarStartDate = new Date(periodStartDate.getTime());

    for (let j = 0; j < 9; j++) {
      const antarLordIndex = (currentLordIndex + j) % 9;
      const antarLord = DASHA_ORDER[antarLordIndex];
      const antarLordYears = DASHA_YEARS[antarLord];

      // Proportional duration: (Mahadasha Years * Antardasha Lord Years) / 120
      // Scale if it's the first dasha with only balance remaining
      const normalAntarDuration = (fullYears * antarLordYears) / 120;
      const effectiveAntarDuration = i === 0 ? normalAntarDuration * fractionRemaining : normalAntarDuration;

      const antarEndDate = addYears(antarStartDate, effectiveAntarDuration);

      const isCurrentAntar = now.getTime() >= antarStartDate.getTime() && now.getTime() < antarEndDate.getTime();

      const antarObj: AntardashaPeriod = {
        lord: antarLord,
        lordTa: DASHA_LORDS_TA[antarLord] || antarLord,
        startDate: new Date(antarStartDate.getTime()),
        endDate: new Date(antarEndDate.getTime()),
        durationMonths: Math.round(effectiveAntarDuration * 12),
        durationDays: Math.round(effectiveAntarDuration * 365.25),
      };

      if (isCurrentAntar) {
        currentAntardasha = antarObj;
      }

      antardashas.push(antarObj);
      antarStartDate = antarEndDate;
    }

    const mahaObj: MahadashaPeriod = {
      lord,
      lordTa: DASHA_LORDS_TA[lord] || lord,
      totalYears: fullYears,
      balanceYearsAtBirth: i === 0 ? balanceYearsTotal : undefined,
      startDate: periodStartDate,
      endDate: periodEndDate,
      antardashas,
      isCurrent: isCurrentMaha,
    };

    if (isCurrentMaha) {
      currentMahadasha = mahaObj;
    }

    timeline.push(mahaObj);
    currentDate = periodEndDate;
  }

  return {
    birthDate,
    firstLord: initialLord,
    firstLordTa: DASHA_LORDS_TA[initialLord] || initialLord,
    balanceYears,
    balanceMonths,
    balanceDays,
    timeline,
    currentMahadasha,
    currentAntardasha,
  };
}
