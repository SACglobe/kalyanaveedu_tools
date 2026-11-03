// Panchangam Timing Calculations: Rahu Kalam, Yamakandam, Kuligai, Gowri Nalla Neram, Choghadiya, Horai
import { TAMIL_CITIES, type TamilCity } from './constants';
import {
  calculateSolarTimes,
  getDaytimeSegment,
  getNighttimeSegment,
  type SolarTimes,
  type TimeWindow,
} from './sunrise';

export interface RahuKalamResult {
  city: TamilCity;
  date: Date;
  weekdayTa: string;
  weekdayEn: string;
  segmentIndex: number; // 1 to 8
  window: TimeWindow;
  sunriseFormatted: string;
  sunsetFormatted: string;
  descriptionTa: string;
}

export interface YamakandamResult {
  city: TamilCity;
  date: Date;
  weekdayTa: string;
  weekdayEn: string;
  segmentIndex: number; // 1 to 8
  window: TimeWindow;
  sunriseFormatted: string;
  sunsetFormatted: string;
  descriptionTa: string;
}

export interface KuligaiResult {
  city: TamilCity;
  date: Date;
  weekdayTa: string;
  weekdayEn: string;
  segmentIndex: number; // 1 to 8
  window: TimeWindow;
  sunriseFormatted: string;
  sunsetFormatted: string;
  descriptionTa: string;
}

export interface GowriSegment {
  segmentIndex: number; // 1 to 8
  nameTa: string;
  nameEn: string;
  isAuspicious: boolean;
  meaningTa: string;
  window: TimeWindow;
}

export interface GowriPanchangamResult {
  city: TamilCity;
  date: Date;
  weekdayTa: string;
  weekdayEn: string;
  daySegments: GowriSegment[];
  nightSegments: GowriSegment[];
  currentSegment?: GowriSegment;
}

export interface ChoghadiyaSegment {
  segmentIndex: number;
  nameTa: string;
  nameEn: string;
  nature: 'good' | 'neutral' | 'bad';
  natureTa: string;
  ruler: string;
  window: TimeWindow;
}

export interface ChoghadiyaResult {
  city: TamilCity;
  date: Date;
  weekdayTa: string;
  weekdayEn: string;
  daySegments: ChoghadiyaSegment[];
  nightSegments: ChoghadiyaSegment[];
}

export interface HoraiSegment {
  hourIndex: number; // 1 to 24 (12 day + 12 night)
  planetTa: string;
  planetEn: string;
  isSubha: boolean;
  natureTa: string;
  window: TimeWindow;
}

// Fixed Segment Sequences (Daytime segments 1 to 8):
// Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6
// Traditional Mnemonic for Rahu Kalam: "Mother Saw Father Wearing Turban Suddenly"
// Mon(2), Tue(7), Wed(5), Thu(6), Fri(4), Sat(3), Sun(8)
const RAHU_KALAM_SEGMENTS: Record<number, number> = {
  0: 8, // Sunday (ஞாயிறு) - 8th part
  1: 2, // Monday (திங்கள்) - 2nd part
  2: 7, // Tuesday (செவ்வாய்) - 7th part
  3: 5, // Wednesday (புதன்) - 5th part
  4: 6, // Thursday (வியாழன்) - 6th part
  5: 4, // Friday (வெள்ளி) - 4th part
  6: 3, // Saturday (சனி) - 3rd part
};

// Yamakandam segments:
// Sun(5), Mon(4), Tue(3), Wed(2), Thu(1), Fri(6), Sat(7)
const YAMAKANDAM_SEGMENTS: Record<number, number> = {
  0: 5, // Sunday
  1: 4, // Monday
  2: 3, // Tuesday
  3: 2, // Wednesday
  4: 1, // Thursday
  5: 6, // Friday
  6: 7, // Saturday
};

// Kuligai segments:
// Sun(7), Mon(6), Tue(5), Wed(4), Thu(3), Fri(2), Sat(1)
// Note: Classic Tamil panchangam mapping
const KULIGAI_SEGMENTS: Record<number, number> = {
  0: 7, // Sunday
  1: 6, // Monday
  2: 5, // Tuesday
  3: 4, // Wednesday
  4: 3, // Thursday
  5: 2, // Friday
  6: 1, // Saturday
};

// 8 Gowri types with auspicious nature
export const GOWRI_TYPES: Record<string, { nameTa: string; nameEn: string; isAuspicious: boolean; meaningTa: string }> = {
  Amirdha: { nameTa: 'அமிர்தம்', nameEn: 'Amirdha', isAuspicious: true, meaningTa: 'மிகவும் சுபமானது, அனைத்து காரியங்களுக்கும் நன்று' },
  Dhanam:   { nameTa: 'தனம்', nameEn: 'Dhanam', isAuspicious: true, meaningTa: 'பொருளாதார வளர்ச்சி மற்றும் வர்த்தகத்திற்கு உகந்தது' },
  Uthi:    { nameTa: 'உத்தி', nameEn: 'Uthi', isAuspicious: true, meaningTa: 'தொழில் தொடங்குதல் மற்றும் முயற்சிக்கு நன்று' },
  Laabam:  { nameTa: 'லாபம்', nameEn: 'Laabam', isAuspicious: true, meaningTa: 'பயணம் மற்றும் வாணிப லாபங்களுக்கு உகந்தது' },
  Sugam:   { nameTa: 'சுகம்', nameEn: 'Sugam', isAuspicious: true, meaningTa: 'ஆரோக்கியம் மற்றும் மங்கல காரியங்களுக்கு நன்று' },
  Rogam:   { nameTa: 'ரோகம்', nameEn: 'Rogam', isAuspicious: false, meaningTa: 'நோய் மற்றும் நஷ்டம் தரும் காலம், தவிர்க்கவும்' },
  Soram:   { nameTa: 'சோரம்', nameEn: 'Soram', isAuspicious: false, meaningTa: 'தடை மற்றும் நஷ்டம் ஏற்படும், சுப காரியங்களை தவிர்க்கவும்' },
  Visham:  { nameTa: 'விஷம்', nameEn: 'Visham', isAuspicious: false, meaningTa: 'மிகவும் கெடுதலான நேரம், புதிய முயற்சிகள் கூடாது' },
};

// Gowri Day starting sequences per weekday (8 parts)
// Sunday: Rogam, Uthi, Sugam, Dhanam, Laabam, Visham, Amirdha, Soram
// Monday: Amirdha, Rogam, Uthi, Sugam, Dhanam, Laabam, Visham, Soram (cycle)
const GOWRI_DAY_CYCLES: Record<number, string[]> = {
  0: ['Rogam', 'Uthi', 'Sugam', 'Dhanam', 'Laabam', 'Visham', 'Amirdha', 'Soram'], // Sunday
  1: ['Amirdha', 'Soram', 'Rogam', 'Uthi', 'Sugam', 'Dhanam', 'Laabam', 'Visham'], // Monday
  2: ['Dhanam', 'Laabam', 'Visham', 'Amirdha', 'Soram', 'Rogam', 'Uthi', 'Sugam'], // Tuesday
  3: ['Uthi', 'Sugam', 'Dhanam', 'Laabam', 'Visham', 'Amirdha', 'Soram', 'Rogam'], // Wednesday
  4: ['Laabam', 'Visham', 'Amirdha', 'Soram', 'Rogam', 'Uthi', 'Sugam', 'Dhanam'], // Thursday
  5: ['Sugam', 'Dhanam', 'Laabam', 'Visham', 'Amirdha', 'Soram', 'Rogam', 'Uthi'], // Friday
  6: ['Soram', 'Rogam', 'Uthi', 'Sugam', 'Dhanam', 'Laabam', 'Visham', 'Amirdha'], // Saturday
};

// Gowri Night starting sequences per weekday
const GOWRI_NIGHT_CYCLES: Record<number, string[]> = {
  0: ['Amirdha', 'Soram', 'Rogam', 'Uthi', 'Sugam', 'Dhanam', 'Laabam', 'Visham'], // Sunday night
  1: ['Dhanam', 'Laabam', 'Visham', 'Amirdha', 'Soram', 'Rogam', 'Uthi', 'Sugam'], // Monday night
  2: ['Uthi', 'Sugam', 'Dhanam', 'Laabam', 'Visham', 'Amirdha', 'Soram', 'Rogam'], // Tuesday night
  3: ['Laabam', 'Visham', 'Amirdha', 'Soram', 'Rogam', 'Uthi', 'Sugam', 'Dhanam'], // Wednesday night
  4: ['Sugam', 'Dhanam', 'Laabam', 'Visham', 'Amirdha', 'Soram', 'Rogam', 'Uthi'], // Thursday night
  5: ['Soram', 'Rogam', 'Uthi', 'Sugam', 'Dhanam', 'Laabam', 'Visham', 'Amirdha'], // Friday night
  6: ['Rogam', 'Uthi', 'Sugam', 'Dhanam', 'Laabam', 'Visham', 'Amirdha', 'Soram'], // Saturday night
};

// Choghadiya types
export const CHOGHADIYA_TYPES: Record<string, { nameTa: string; nameEn: string; nature: 'good' | 'neutral' | 'bad'; natureTa: string; ruler: string }> = {
  Amrit: { nameTa: 'அமிர்தம்', nameEn: 'Amrit', nature: 'good', natureTa: 'அதி உத்தமம் (Best)', ruler: 'Moon' },
  Shubh: { nameTa: 'சுபம்', nameEn: 'Shubh', nature: 'good', natureTa: 'சுப காரியங்கள் (Good)', ruler: 'Jupiter' },
  Labh:  { nameTa: 'லாபம்', nameEn: 'Labh', nature: 'good', natureTa: 'லாபகரமானது (Gain)', ruler: 'Mercury' },
  Char:  { nameTa: 'சரம்', nameEn: 'Char', nature: 'neutral', natureTa: 'பயணத்திற்கு உகந்தது (Neutral)', ruler: 'Venus' },
  Udveg: { nameTa: 'உத்வேகம்', nameEn: 'Udveg', nature: 'bad', natureTa: 'கவலை மற்றும் பதட்டம் (Avoid)', ruler: 'Sun' },
  Kaal:  { nameTa: 'காலம்', nameEn: 'Kaal', nature: 'bad', natureTa: 'நஷ்டம் தரும் காலம் (Avoid)', ruler: 'Saturn' },
  Rog:   { nameTa: 'ரோகம்', nameEn: 'Rog', nature: 'bad', natureTa: 'நோய் மற்றும் தொல்லை (Avoid)', ruler: 'Mars' },
};

const CHOGHADIYA_DAY_CYCLES: Record<number, string[]> = {
  0: ['Udveg', 'Char', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg'], // Sun
  1: ['Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Char', 'Labh', 'Amrit'], // Mon
  2: ['Rog', 'Udveg', 'Char', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog'], // Tue
  3: ['Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Char', 'Labh'], // Wed
  4: ['Shubh', 'Rog', 'Udveg', 'Char', 'Labh', 'Amrit', 'Kaal', 'Shubh'], // Thu
  5: ['Char', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog', 'Udveg', 'Char'], // Fri
  6: ['Kaal', 'Shubh', 'Rog', 'Udveg', 'Char', 'Labh', 'Amrit', 'Kaal'], // Sat
};

const CHOGHADIYA_NIGHT_CYCLES: Record<number, string[]> = {
  0: ['Shubh', 'Amrit', 'Char', 'Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh'],
  1: ['Char', 'Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit', 'Char'],
  2: ['Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit', 'Char', 'Rog', 'Kaal'],
  3: ['Udveg', 'Shubh', 'Amrit', 'Char', 'Rog', 'Kaal', 'Labh', 'Udveg'],
  4: ['Amrit', 'Char', 'Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit'],
  5: ['Rog', 'Kaal', 'Labh', 'Udveg', 'Shubh', 'Amrit', 'Char', 'Rog'],
  6: ['Labh', 'Udveg', 'Shubh', 'Amrit', 'Char', 'Rog', 'Kaal', 'Labh'],
};

const WEEKDAY_NAMES_TA = ['ஞாயிறு', 'திங்கள்', 'செவ்வாய்', 'புதன்', 'வியாழன்', 'வெள்ளி', 'சனி'];
const WEEKDAY_NAMES_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// 1. Calculate Rahu Kalam
export function calculateRahuKalam(date: Date, city: TamilCity = TAMIL_CITIES[0]): RahuKalamResult {
  const solar = calculateSolarTimes(date, city);
  const weekday = date.getDay();
  const segmentIndex = RAHU_KALAM_SEGMENTS[weekday];
  const window = getDaytimeSegment(solar, segmentIndex);

  return {
    city,
    date,
    weekdayTa: WEEKDAY_NAMES_TA[weekday],
    weekdayEn: WEEKDAY_NAMES_EN[weekday],
    segmentIndex,
    window,
    sunriseFormatted: solar.sunrise.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    sunsetFormatted: solar.sunset.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    descriptionTa: `${WEEKDAY_NAMES_TA[weekday]} கிழமை ராகு காலம் பகல் ${segmentIndex}-வது பகுதியாகும். இந்த நேரத்தில் சுப காரியங்கள், புதிய ஒப்பந்தங்கள் மற்றும் பயணங்கள் தொடங்குவதை தவிர்க்கவும்.`,
  };
}

// 2. Calculate Yamakandam
export function calculateYamakandam(date: Date, city: TamilCity = TAMIL_CITIES[0]): YamakandamResult {
  const solar = calculateSolarTimes(date, city);
  const weekday = date.getDay();
  const segmentIndex = YAMAKANDAM_SEGMENTS[weekday];
  const window = getDaytimeSegment(solar, segmentIndex);

  return {
    city,
    date,
    weekdayTa: WEEKDAY_NAMES_TA[weekday],
    weekdayEn: WEEKDAY_NAMES_EN[weekday],
    segmentIndex,
    window,
    sunriseFormatted: solar.sunrise.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    sunsetFormatted: solar.sunset.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    descriptionTa: `${WEEKDAY_NAMES_TA[weekday]} கிழமை யமகண்டம் கேதுவின் ஆதிக்க நேரமாகும். இந்த நேரத்தில் புதிய சுப முயற்சிகளை தவிர்ப்பது நல்லது.`,
  };
}

// 3. Calculate Kuligai
export function calculateKuligai(date: Date, city: TamilCity = TAMIL_CITIES[0]): KuligaiResult {
  const solar = calculateSolarTimes(date, city);
  const weekday = date.getDay();
  const segmentIndex = KULIGAI_SEGMENTS[weekday];
  const window = getDaytimeSegment(solar, segmentIndex);

  return {
    city,
    date,
    weekdayTa: WEEKDAY_NAMES_TA[weekday],
    weekdayEn: WEEKDAY_NAMES_EN[weekday],
    segmentIndex,
    window,
    sunriseFormatted: solar.sunrise.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    sunsetFormatted: solar.sunset.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    descriptionTa: `குளிகை காலத்தில் செய்யும் காரியங்கள் மீண்டும் மீண்டும் தொடரும் என்பது ஐதீகம். எனவே சுப காரியங்களை செய்யலாம், அசுப காரியங்களை தவிர்க்க வேண்டும்.`,
  };
}

// 4. Calculate Gowri Panchangam
// nowWall: wall-clock "now" in the city's time zone (see cityNow); highlights the running segment when it falls on `date`
export function calculateGowriPanchangam(date: Date, city: TamilCity = TAMIL_CITIES[0], nowWall?: Date): GowriPanchangamResult {
  const solar = calculateSolarTimes(date, city);
  const weekday = date.getDay();

  const dayCycle = GOWRI_DAY_CYCLES[weekday];
  const nightCycle = GOWRI_NIGHT_CYCLES[weekday];

  const sameDay =
    nowWall &&
    nowWall.getFullYear() === date.getFullYear() &&
    nowWall.getMonth() === date.getMonth() &&
    nowWall.getDate() === date.getDate();
  const nowMs = sameDay && nowWall ? nowWall.getTime() : date.getTime();
  let currentSegment: GowriSegment | undefined;

  const daySegments: GowriSegment[] = dayCycle.map((typeKey, idx) => {
    const segIdx = idx + 1;
    const window = getDaytimeSegment(solar, segIdx);
    const info = GOWRI_TYPES[typeKey];
    const segmentObj: GowriSegment = {
      segmentIndex: segIdx,
      nameTa: info.nameTa,
      nameEn: info.nameEn,
      isAuspicious: info.isAuspicious,
      meaningTa: info.meaningTa,
      window,
    };
    if (nowMs >= window.start.getTime() && nowMs < window.end.getTime()) {
      currentSegment = segmentObj;
    }
    return segmentObj;
  });

  const nightSegments: GowriSegment[] = nightCycle.map((typeKey, idx) => {
    const segIdx = idx + 1;
    const window = getNighttimeSegment(solar, segIdx);
    const info = GOWRI_TYPES[typeKey];
    const segmentObj: GowriSegment = {
      segmentIndex: segIdx,
      nameTa: info.nameTa,
      nameEn: info.nameEn,
      isAuspicious: info.isAuspicious,
      meaningTa: info.meaningTa,
      window,
    };
    if (nowMs >= window.start.getTime() && nowMs < window.end.getTime()) {
      currentSegment = segmentObj;
    }
    return segmentObj;
  });

  return {
    city,
    date,
    weekdayTa: WEEKDAY_NAMES_TA[weekday],
    weekdayEn: WEEKDAY_NAMES_EN[weekday],
    daySegments,
    nightSegments,
    currentSegment,
  };
}

// 5. Calculate Choghadiya
export function calculateChoghadiya(date: Date, city: TamilCity = TAMIL_CITIES[0]): ChoghadiyaResult {
  const solar = calculateSolarTimes(date, city);
  const weekday = date.getDay();

  const dayCycle = CHOGHADIYA_DAY_CYCLES[weekday];
  const nightCycle = CHOGHADIYA_NIGHT_CYCLES[weekday];

  const daySegments: ChoghadiyaSegment[] = dayCycle.map((key, idx) => {
    const info = CHOGHADIYA_TYPES[key];
    const window = getDaytimeSegment(solar, idx + 1);
    return {
      segmentIndex: idx + 1,
      nameTa: info.nameTa,
      nameEn: info.nameEn,
      nature: info.nature,
      natureTa: info.natureTa,
      ruler: info.ruler,
      window,
    };
  });

  const nightSegments: ChoghadiyaSegment[] = nightCycle.map((key, idx) => {
    const info = CHOGHADIYA_TYPES[key];
    const window = getNighttimeSegment(solar, idx + 1);
    return {
      segmentIndex: idx + 1,
      nameTa: info.nameTa,
      nameEn: info.nameEn,
      nature: info.nature,
      natureTa: info.natureTa,
      ruler: info.ruler,
      window,
    };
  });

  return {
    city,
    date,
    weekdayTa: WEEKDAY_NAMES_TA[weekday],
    weekdayEn: WEEKDAY_NAMES_EN[weekday],
    daySegments,
    nightSegments,
  };
}
