// Numerology calculation engine (Chaldean & Pythagorean systems)

export interface NumerologyProfile {
  name: string;
  dob?: Date;
  chaldeanNameNumber: number;
  pythagoreanNameNumber: number;
  birthDayNumber?: number; // Janma En (1 to 9)
  lifePathNumber?: number; // Vidhi En (1 to 9)
  rulingPlanetTa: string;
  rulingPlanetEn: string;
  luckyColorsTa: string[];
  luckyDaysTa: string[];
  luckyGemsTa: string[];
  friendlyNumbers: number[];
  enemyNumbers: number[];
  traitsTa: string;
}

// Chaldean Numerology letter values (1 to 8; 9 is sacred in Chaldean)
const CHALDEAN_MAP: Record<string, number> = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8,
};

// Pythagorean system (1 to 9)
const PYTHAGOREAN_MAP: Record<string, number> = {
  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9,
};

export const NUMBER_PROFILES: Record<number, {
  planetTa: string;
  planetEn: string;
  luckyColorsTa: string[];
  luckyDaysTa: string[];
  luckyGemsTa: string[];
  friendly: number[];
  enemy: number[];
  traitsTa: string;
}> = {
  1: {
    planetTa: 'சூரியன்',
    planetEn: 'Sun',
    luckyColorsTa: ['மஞ்சள்', 'தங்க நிறம்', 'செம்மஞ்சள்'],
    luckyDaysTa: ['ஞாயிறு', 'திங்கள்'],
    luckyGemsTa: ['மாணிக்கம் (Ruby)'],
    friendly: [1, 2, 3, 9],
    enemy: [6, 8],
    traitsTa: 'தலைமைப் பண்பு, தன்னம்பிக்கை, கம்பீரமான ஆளுமை மற்றும் சுயமுயற்சியால் முன்னேறும் குணம்.',
  },
  2: {
    planetTa: 'சந்திரன்',
    planetEn: 'Moon',
    luckyColorsTa: ['வெள்ளை', 'கிரீம்', 'வெள்ளி நிறம்'],
    luckyDaysTa: ['திங்கள்', 'வெள்ளி'],
    luckyGemsTa: ['முத்து (Pearl)', 'சந்திரகாந்தக்கல்'],
    friendly: [1, 2, 5],
    enemy: [4, 8, 9],
    traitsTa: 'கற்பனை வளம், மென்மையான சுபாவம், அமைதி, கலை ஆர்வம் மற்றும் குடும்ப பாசம்.',
  },
  3: {
    planetTa: 'குரு (வியாழன்)',
    planetEn: 'Jupiter',
    luckyColorsTa: ['மஞ்சள்', 'தங்க நிறம்', 'இளம் ஊதா'],
    luckyDaysTa: ['வியாழன்', 'செவ்வாய்'],
    luckyGemsTa: ['மரகதம் அல்லது கனகபுஷ்பராகம் (Yellow Sapphire)'],
    friendly: [1, 2, 3, 9],
    enemy: [6],
    traitsTa: 'ஞானம், நீதி நேர்மை, சிறந்த ஆலோசனை வழங்கும் திறன், ஆன்மீக பற்று மற்றும் நற்பெயர்.',
  },
  4: {
    planetTa: 'ராகு',
    planetEn: 'Rahu',
    luckyColorsTa: ['நீலம்', 'சாம்பல் நிறம்', 'பழுப்பு'],
    luckyDaysTa: ['சனி', 'ஞாயிறு'],
    luckyGemsTa: ['கோமேதகம் (Hessonite)'],
    friendly: [1, 5, 6, 7],
    enemy: [2, 4, 8, 9],
    traitsTa: 'புரட்சிகர சிந்தனை, தொழில்நுட்ப ஆர்வம், மறைமுகத் திட்டங்கள் மற்றும் சவால்களை சமாளிக்கும் ஆற்றல்.',
  },
  5: {
    planetTa: 'புதன்',
    planetEn: 'Mercury',
    luckyColorsTa: ['பச்சை', 'வெள்ளை', 'சாம்பல்'],
    luckyDaysTa: ['புதன்', 'வெள்ளி'],
    luckyGemsTa: ['மரகதம் (Emerald)'],
    friendly: [1, 5, 6],
    enemy: [2],
    traitsTa: 'சாதுரியமான பேச்சு, வியாபார நுணுக்கம், விரைவான சிந்தனை மற்றும் மாற்றங்களை ஏற்கும் நெகிழ்வுத்தன்மை.',
  },
  6: {
    planetTa: 'சுக்கிரன்',
    planetEn: 'Venus',
    luckyColorsTa: ['வெள்ளை', 'வெளிர் நீலம்', 'ரோஜா நிறம்'],
    luckyDaysTa: ['வெள்ளி', 'புதன்'],
    luckyGemsTa: ['வைரம் (Diamond)', 'வெள்ளை சபையர்'],
    friendly: [4, 5, 6, 7, 8],
    enemy: [1, 3],
    traitsTa: 'அழகுணர்ச்சி, கவர்ச்சியான தோற்றம், ஆடம்பர வாழ்க்கை விருப்பம், அன்பு மற்றும் வசீகர பேச்சு.',
  },
  7: {
    planetTa: 'கேது',
    planetEn: 'Ketu',
    luckyColorsTa: ['வெள்ளை', 'இளம் பச்சை', 'மஞ்சள்'],
    luckyDaysTa: ['திங்கள்', 'வியாழன்'],
    luckyGemsTa: ['வைடூரியம் (Cat\'s Eye)'],
    friendly: [1, 4, 5, 6],
    enemy: [9],
    traitsTa: 'ஆழ்ந்த சிந்தனை, ஆராய்ச்சி குணம், தத்துவ நோக்கு, உள்ளுணர்வு மற்றும் அமைதியை விரும்புதல்.',
  },
  8: {
    planetTa: 'சனி',
    planetEn: 'Saturn',
    luckyColorsTa: ['கருநீலம்', 'கருப்பு', 'சாம்பல்'],
    luckyDaysTa: ['சனி'],
    luckyGemsTa: ['நீலக்கல்லு (Blue Sapphire)'],
    friendly: [3, 5, 6, 7],
    enemy: [1, 2, 4, 9],
    traitsTa: 'கடின உழைப்பு, பொறுமை, விடாமுயற்சி, நிதி மேலாண்மை மற்றும் சமூகப் பொறுப்புணர்வு.',
  },
  9: {
    planetTa: 'செவ்வாய்',
    planetEn: 'Mars',
    luckyColorsTa: ['சிவப்பு', 'மெரூன்', 'செம்மஞ்சள்'],
    luckyDaysTa: ['செவ்வாய்', 'வியாழன்'],
    luckyGemsTa: ['பவளம் (Coral)'],
    friendly: [1, 2, 3],
    enemy: [2, 4, 5, 7, 8],
    traitsTa: 'வீரம், வேகம், துணிச்சல், பாதுகாப்பு உணர்வு, லட்சிய வேட்கை மற்றும் நேர்மை.',
  },
};

// Reduce any number to single digit (1 to 9)
export function reduceToSingleDigit(num: number): number {
  let current = Math.abs(num);
  while (current > 9) {
    current = current
      .toString()
      .split('')
      .reduce((sum, d) => sum + parseInt(d, 10), 0);
  }
  return current;
}

// Calculate Chaldean Name Number
export function calculateChaldeanNameNumber(name: string): number {
  const clean = name.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (const ch of clean) {
    sum += CHALDEAN_MAP[ch] || 0;
  }
  return reduceToSingleDigit(sum);
}

// Calculate Pythagorean Name Number
export function calculatePythagoreanNameNumber(name: string): number {
  const clean = name.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (const ch of clean) {
    sum += PYTHAGOREAN_MAP[ch] || 0;
  }
  return reduceToSingleDigit(sum);
}

// Calculate Life Path Number (Vidhi En) from DOB
export function calculateLifePathNumber(dob: Date): number {
  const day = dob.getDate();
  const month = dob.getMonth() + 1;
  const year = dob.getFullYear();

  const daySum = reduceToSingleDigit(day);
  const monthSum = reduceToSingleDigit(month);
  const yearSum = reduceToSingleDigit(year);

  return reduceToSingleDigit(daySum + monthSum + yearSum);
}

// Calculate Birth Day Number (Janma En) from DOB
export function calculateBirthDayNumber(dob: Date): number {
  return reduceToSingleDigit(dob.getDate());
}

// Generate complete profile
export function generateNumerologyProfile(name: string, dob?: Date): NumerologyProfile {
  const chaldean = calculateChaldeanNameNumber(name);
  const pythagorean = calculatePythagoreanNameNumber(name);

  const primaryNumber = dob ? calculateBirthDayNumber(dob) : chaldean;
  const profile = NUMBER_PROFILES[primaryNumber] || NUMBER_PROFILES[1];

  let birthDayNumber: number | undefined;
  let lifePathNumber: number | undefined;

  if (dob) {
    birthDayNumber = calculateBirthDayNumber(dob);
    lifePathNumber = calculateLifePathNumber(dob);
  }

  return {
    name,
    dob,
    chaldeanNameNumber: chaldean,
    pythagoreanNameNumber: pythagorean,
    birthDayNumber,
    lifePathNumber,
    rulingPlanetTa: profile.planetTa,
    rulingPlanetEn: profile.planetEn,
    luckyColorsTa: profile.luckyColorsTa,
    luckyDaysTa: profile.luckyDaysTa,
    luckyGemsTa: profile.luckyGemsTa,
    friendlyNumbers: profile.friendly,
    enemyNumbers: profile.enemy,
    traitsTa: profile.traitsTa,
  };
}
