/**
 * ─────────────────────────────────────────────────────────────────────
 * Tamil Jathagam Thirumana Porutham (Marriage Compatibility Calculator)
 * Based on 27 Nakshatras × 10 Poruthams as per traditional Panchang
 * ─────────────────────────────────────────────────────────────────────
 */

// ── 27 Nakshatras with Tamil & English names ──────────────────────────
export const NAKSHATRAS = [
  { id: 0,  tamil: 'அஸ்வினி',         english: 'Ashwini',          rasi: 0 },  // Mesha
  { id: 1,  tamil: 'பரணி',             english: 'Bharani',          rasi: 0 },  // Mesha
  { id: 2,  tamil: 'கார்த்திகை',      english: 'Krittika',         rasi: 0 },  // Mesha (4th pada Rishaba)
  { id: 3,  tamil: 'ரோகிணி',          english: 'Rohini',           rasi: 1 },  // Rishaba
  { id: 4,  tamil: 'மிருகசீர்ஷம்',   english: 'Mrigashira',       rasi: 1 },  // Rishaba (3&4 Mithuna)
  { id: 5,  tamil: 'திருவாதிரை',      english: 'Ardra',            rasi: 2 },  // Mithuna
  { id: 6,  tamil: 'புனர்பூசம்',      english: 'Punarvasu',        rasi: 2 },  // Mithuna (4th Kataka)
  { id: 7,  tamil: 'பூசம்',           english: 'Pushya',           rasi: 3 },  // Kataka
  { id: 8,  tamil: 'ஆயில்யம்',        english: 'Ashlesha',         rasi: 3 },  // Kataka
  { id: 9,  tamil: 'மகம்',            english: 'Magha',            rasi: 4 },  // Simha
  { id: 10, tamil: 'பூரம்',           english: 'Purva Phalguni',   rasi: 4 },  // Simha
  { id: 11, tamil: 'உத்திரம்',        english: 'Uttara Phalguni',  rasi: 4 },  // Simha (1st) / Kanya (2-4)
  { id: 12, tamil: 'அஸ்தம்',          english: 'Hasta',            rasi: 5 },  // Kanya
  { id: 13, tamil: 'சித்திரை',        english: 'Chitra',           rasi: 5 },  // Kanya (1&2) / Tula (3&4)
  { id: 14, tamil: 'சுவாதி',          english: 'Swati',            rasi: 6 },  // Tula
  { id: 15, tamil: 'விசாகம்',         english: 'Vishakha',         rasi: 6 },  // Tula (1-3) / Vrischika (4)
  { id: 16, tamil: 'அனுஷம்',          english: 'Anuradha',         rasi: 7 },  // Vrischika
  { id: 17, tamil: 'கேட்டை',          english: 'Jyeshtha',         rasi: 7 },  // Vrischika
  { id: 18, tamil: 'மூலம்',           english: 'Mula',             rasi: 8 },  // Dhanus
  { id: 19, tamil: 'பூராடம்',         english: 'Purva Ashadha',    rasi: 8 },  // Dhanus
  { id: 20, tamil: 'உத்திராடம்',      english: 'Uttara Ashadha',   rasi: 8 },  // Dhanus (1st) / Makara (2-4)
  { id: 21, tamil: 'திருவோணம்',       english: 'Shravana',         rasi: 9 },  // Makara
  { id: 22, tamil: 'அவிட்டம்',        english: 'Dhanishtha',       rasi: 9 },  // Makara (1&2) / Kumbha (3&4)
  { id: 23, tamil: 'சதயம்',           english: 'Shatabhisha',      rasi: 10 }, // Kumbha
  { id: 24, tamil: 'பூரட்டாதி',       english: 'Purva Bhadrapada', rasi: 10 }, // Kumbha (1-3) / Meena (4)
  { id: 25, tamil: 'உத்திரட்டாதி',   english: 'Uttara Bhadrapada',rasi: 11 }, // Meena
  { id: 26, tamil: 'ரேவதி',           english: 'Revati',           rasi: 11 }, // Meena
] as const;

export type NakshatraId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
  | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26;

// ── 12 Rasis ─────────────────────────────────────────────────────────
export const RASIS = [
  { id: 0,  tamil: 'மேஷம்',    english: 'Mesha (Aries)',        lord: 'செவ்வாய்'  },
  { id: 1,  tamil: 'ரிஷபம்',   english: 'Rishaba (Taurus)',     lord: 'சுக்கிரன்' },
  { id: 2,  tamil: 'மிதுனம்',   english: 'Mithuna (Gemini)',     lord: 'புதன்'     },
  { id: 3,  tamil: 'கடகம்',     english: 'Kataka (Cancer)',      lord: 'சந்திரன்'  },
  { id: 4,  tamil: 'சிம்மம்',   english: 'Simha (Leo)',          lord: 'சூரியன்'   },
  { id: 5,  tamil: 'கன்னி',     english: 'Kanya (Virgo)',        lord: 'புதன்'     },
  { id: 6,  tamil: 'துலாம்',    english: 'Tula (Libra)',         lord: 'சுக்கிரன்' },
  { id: 7,  tamil: 'விருச்சிகம்', english: 'Vrischika (Scorpio)', lord: 'செவ்வாய்'  },
  { id: 8,  tamil: 'தனுசு',     english: 'Dhanus (Sagittarius)', lord: 'குரு'      },
  { id: 9,  tamil: 'மகரம்',     english: 'Makara (Capricorn)',   lord: 'சனி'       },
  { id: 10, tamil: 'கும்பம்',   english: 'Kumbha (Aquarius)',    lord: 'சனி'       },
  { id: 11, tamil: 'மீனம்',     english: 'Meena (Pisces)',       lord: 'குரு'      },
];

// ── GANA: Each Nakshatra belongs to Deva / Manushya / Rakshasa ────────
// 0 = Deva (தேவ), 1 = Manushya (மனுஷ்ய), 2 = Rakshasa (ராக்ஷஸ)
const GANA: number[] = [
  0, 2, 0, 0, 1, 2, 0, 0, 2,   // 0-8
  2, 2, 0, 0, 2, 0, 2, 0, 2,   // 9-17
  2, 1, 0, 0, 1, 2, 1, 0, 0    // 18-26
];

// ── RAJJU groups (lifeline) — Most critical check ─────────────────────
// Group 0=Siro (head), 1=Kanda (neck), 2=Uthara (belly), 3=Kati (waist), 4=Pada (feet)
const RAJJU: number[] = [
  4, 4, 3, 3, 2, 2, 1, 1, 0,   // Ashwini..Ashlesha
  0, 0, 1, 1, 2, 2, 3, 3, 4,   // Magha..Jyeshtha
  4, 3, 3, 2, 2, 1, 1, 0, 0    // Mula..Revati
];

// ── YONI (physical/animal symbol) ─────────────────────────────────────
// Pairs that are compatible: same yoni = best, compatible pairs, enemies = worst
// 0=Horse, 1=Elephant, 2=Sheep, 3=Serpent, 4=Dog, 5=Cat, 6=Rat, 7=Cow,
// 8=Buffalo, 9=Tiger, 10=Hare, 11=Monkey, 12=Mongoose, 13=Lion
const YONI: number[] = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,  // 0-13
  4, 3, 10, 5, 8, 0, 11, 7, 2, 1, 9, 6, 12        // 14-26
];

// Yoni enemy pairs (if one person's yoni is enemy to other → bad)
const YONI_ENEMIES: [number, number][] = [
  [0, 9],   // Horse & Tiger
  [1, 12],  // Elephant & Mongoose
  [2, 13],  // Sheep & Lion
  [3, 10],  // Serpent & Hare
  [4, 6],   // Dog & Rat
  [5, 8],   // Cat & Buffalo
];

// ── VASYA: Who is under the control of whom? ─────────────────────────
// Based on Rasi groups
const VASYA_MAP: Record<number, number[]> = {
  0: [3, 11],   // Mesha → Kataka, Meena
  1: [3, 6],    // Rishaba → Kataka, Tula
  2: [9, 6],    // Mithuna → Makara, Tula
  3: [8, 11],   // Kataka → Dhanus, Meena
  4: [11, 6],   // Simha → Meena, Tula
  5: [8, 3],    // Kanya → Dhanus, Kataka
  6: [9, 3],    // Tula → Makara, Kataka
  7: [3, 6],    // Vrischika → Kataka, Tula
  8: [10, 1],   // Dhanus → Kumbha, Rishaba
  9: [1, 4],    // Makara → Rishaba, Simha
  10: [1, 7],   // Kumbha → Rishaba, Vrischika
  11: [3, 8],   // Meena → Kataka, Dhanus
};

// ── NADI (energy channel): 0=Adi, 1=Madhya, 2=Antya ─────────────────
const NADI: number[] = [
  0, 1, 2, 2, 1, 0, 0, 1, 2,   // 0-8
  2, 1, 0, 0, 1, 2, 2, 1, 0,   // 9-17
  0, 1, 2, 2, 1, 0, 0, 1, 2    // 18-26
];

// ── VEDHA (obstacle) pairs — If matched, Vedha exists (bad) ──────────
const VEDHA_PAIRS: [number, number][] = [
  [0, 23], [1, 22], [2, 21], [3, 20], [4, 19], [5, 18],
  [6, 17], [7, 16], [8, 15], [9, 14], [10, 13], [11, 12]
];

// ── RASI LORDS ────────────────────────────────────────────────────────
const RASI_LORDS: number[] = [3, 5, 5, 4, 2, 3, 5, 3, 1, 6, 6, 1];
// 1=Guru, 2=Surya, 3=Chandra, 4=Chandra, 5=Budha, 6=Shani... simplified:
// Actually: 0=Mesha→Chevvai(Mars), 1=Rishaba→Sukran, 2=Mithuna→Budhan
//           3=Kataka→Chandra, 4=Simha→Surya, 5=Kanya→Budhan
//           6=Tula→Sukran, 7=Vrichika→Chevvai, 8=Dhanus→Guru
//           9=Makara→Shani, 10=Kumbha→Shani, 11=Meena→Guru
const PLANET_LORDS: string[] = ['செவ்வாய்', 'சுக்கிரன்', 'புதன்', 'சந்திரன்', 'சூரியன்', 'புதன்', 'சுக்கிரன்', 'செவ்வாய்', 'குரு', 'சனி', 'சனி', 'குரு'];

// Friend/Neutral/Enemy planet relationships
const PLANET_FRIENDS: Record<string, string[]> = {
  'செவ்வாய்':   ['சூரியன்', 'சந்திரன்', 'குரு'],
  'சுக்கிரன்':  ['புதன்', 'சனி'],
  'புதன்':      ['சூரியன்', 'சுக்கிரன்'],
  'சந்திரன்':  ['சூரியன்', 'புதன்'],
  'சூரியன்':   ['சந்திரன்', 'செவ்வாய்', 'குரு'],
  'குரு':       ['சூரியன்', 'சந்திரன்', 'செவ்வாய்'],
  'சனி':        ['சுக்கிரன்', 'புதன்'],
};
const PLANET_ENEMIES: Record<string, string[]> = {
  'செவ்வாய்':   ['புதன்'],
  'சுக்கிரன்':  ['சூரியன்', 'சந்திரன்'],
  'புதன்':      ['சந்திரன்'],
  'சந்திரன்':  ['இல்லை'],
  'சூரியன்':   ['சனி', 'சுக்கிரன்'],
  'குரு':       ['புதன்', 'சுக்கிரன்'],
  'சனி':        ['சூரியன்', 'சந்திரன்', 'செவ்வாய்'],
};

// ────────────────────────────────────────────────────────────────────
// PORUTHAM CALCULATION FUNCTIONS
// ────────────────────────────────────────────────────────────────────

function getRasiId(nakshatraId: number): number {
  return NAKSHATRAS[nakshatraId].rasi;
}

/** 1. DINA PORUTHAM (Dina = Day star count) — max 3 points */
function calcDinaPorutham(boy: number, girl: number): { pass: boolean; points: number; info: string } {
  // Count Nakshatras from boy's star to girl's star (mod 27)
  const count = ((girl - boy + 27) % 27) + 1;
  const remainder = count % 9;

  const pass = remainder === 2 || remainder === 4 || remainder === 6 || remainder === 8 || remainder === 0;
  return {
    pass,
    points: pass ? 3 : 0,
    info: `மணமகன் நட்சத்திரத்திலிருந்து மணமகள் நட்சத்திரம் வரை ${count} ஆகும் (${count % 9 === 0 ? 9 : count % 9} மீதி). ${pass ? 'சரி-எண் — பொருத்தமானது.' : 'ஒற்றை-எண் — பொருத்தமற்றது.'}`
  };
}

/** 2. GANA PORUTHAM — max 6 points */
function calcGanaPorutham(boy: number, girl: number): { pass: boolean; points: number; info: string } {
  const bGana = GANA[boy];
  const gGana = GANA[girl];
  const GANA_NAMES = ['தேவ கணம்', 'மனுஷ்ய கணம்', 'ராக்ஷஸ கணம்'];

  if (bGana === gGana) {
    return { pass: true, points: 6, info: `இருவரும் ${GANA_NAMES[bGana]} — சிறந்த பொருத்தம்.` };
  }
  // Deva + Manushya = acceptable
  if ((bGana === 0 && gGana === 1) || (bGana === 1 && gGana === 0)) {
    return { pass: true, points: 3, info: `${GANA_NAMES[bGana]} + ${GANA_NAMES[gGana]} — ஓரளவு பொருத்தம்.` };
  }
  // Rakshasa with anything = bad
  return { pass: false, points: 0, info: `${GANA_NAMES[bGana]} + ${GANA_NAMES[gGana]} — பொருத்தமற்றது.` };
}

/** 3. MAHENDRA PORUTHAM — max 3 points */
function calcMahendraPorutham(boy: number, girl: number): { pass: boolean; points: number; info: string } {
  const count = ((girl - boy + 27) % 27) + 1;
  const pass = count === 4 || count === 7 || count === 10 || count === 13 || count === 16 || count === 19 || count === 22 || count === 25;
  return {
    pass,
    points: pass ? 3 : 0,
    info: `மணமகன் நட்சத்திரத்திலிருந்து மணமகள் நட்சத்திரம் ${count}ஆவது. ${pass ? '4,7,10,13,16,19,22,25 — மகேந்திர பொருத்தம் உள்ளது.' : 'மகேந்திர பொருத்தம் இல்லை.'}`
  };
}

/** 4. STREE DHEERGA PORUTHAM (Longevity) — max 3 points */
function calcStreeDheergaPorutham(boy: number, girl: number): { pass: boolean; points: number; info: string } {
  // Girl's star counted from boy's star must be more than 7 (ideally >13)
  const count = ((girl - boy + 27) % 27) + 1;
  const pass = count > 7;
  return {
    pass,
    points: pass ? 3 : 0,
    info: `மணமகன் நட்சத்திரத்திலிருந்து மணமகள் நட்சத்திரம் ${count}ஆவது. ${pass ? '7க்கு மேல் — ஸ்த்ரீதீர்க்க பொருத்தம் உள்ளது (நீண்ட ஆயுள்).' : '7 அல்லது கீழே — ஸ்த்ரீதீர்க்க பொருத்தம் இல்லை.'}`
  };
}

/** 5. YONI PORUTHAM (Physical compatibility) — max 4 points */
function calcYoniPorutham(boy: number, girl: number): { pass: boolean; points: number; info: string } {
  const bYoni = YONI[boy];
  const gYoni = YONI[girl];
  const YONI_NAMES = ['குதிரை', 'யானை', 'ஆடு', 'பாம்பு', 'நாய்', 'பூனை', 'எலி', 'பசு', 'எருமை', 'புலி', 'முயல்', 'குரங்கு', 'கீரி', 'சிங்கம்'];

  if (bYoni === gYoni) {
    return { pass: true, points: 4, info: `இருவரும் ${YONI_NAMES[bYoni]} யோனி — சிறந்த பொருத்தம்.` };
  }
  const isEnemy = YONI_ENEMIES.some(([a, b]) =>
    (bYoni === a && gYoni === b) || (bYoni === b && gYoni === a)
  );
  if (isEnemy) {
    return { pass: false, points: 0, info: `${YONI_NAMES[bYoni]} & ${YONI_NAMES[gYoni]} — யோனி விரோதம் உள்ளது.` };
  }
  return { pass: true, points: 2, info: `${YONI_NAMES[bYoni]} & ${YONI_NAMES[gYoni]} — ஓரளவு யோனி பொருத்தம்.` };
}

/** 6. RASI PORUTHAM (Moon sign compatibility) — max 5 points */
function calcRasiPorutham(boy: number, girl: number): { pass: boolean; points: number; info: string } {
  const bRasi = getRasiId(boy);
  const gRasi = getRasiId(girl);
  const diff = (gRasi - bRasi + 12) % 12;

  // 2nd, 6th, 8th, 12th are bad
  if ([1, 5, 7, 11].includes(diff)) {
    return { pass: false, points: 0, info: `மணமகன் ராசியிலிருந்து மணமகள் ராசி ${diff + 1}ஆவது — ராசி பொருத்தம் இல்லை.` };
  }
  // Same rasi or 5th/9th (trine) = excellent
  if (diff === 0 || diff === 4 || diff === 8) {
    return { pass: true, points: 5, info: `ராசி திரிகோண பொருத்தம் — சிறந்த ராசி பொருத்தம்.` };
  }
  return { pass: true, points: 3, info: `ராசி பொருத்தம் உள்ளது (${diff + 1}ஆவது ராசி).` };
}

/** 7. RASIYATHIPATI PORUTHAM (Lord of Rasi compatibility) — max 5 points */
function calcRasiyathipatiPorutham(boy: number, girl: number): { pass: boolean; points: number; info: string } {
  const bRasi = getRasiId(boy);
  const gRasi = getRasiId(girl);
  const bLord = PLANET_LORDS[bRasi];
  const gLord = PLANET_LORDS[gRasi];

  if (bLord === gLord) {
    return { pass: true, points: 5, info: `இருவர் ராசியதிபதியும் ${bLord} — சிறந்த பொருத்தம்.` };
  }
  const bFriends = PLANET_FRIENDS[bLord] || [];
  const bEnemies = PLANET_ENEMIES[bLord] || [];

  if (bFriends.includes(gLord)) {
    return { pass: true, points: 4, info: `${bLord} (மணமகன்) & ${gLord} (மணமகள்) நட்பு — ராசியதிபதி பொருத்தம் உள்ளது.` };
  }
  if (bEnemies.includes(gLord)) {
    return { pass: false, points: 0, info: `${bLord} (மணமகன்) & ${gLord} (மணமகள்) விரோதம் — ராசியதிபதி பொருத்தம் இல்லை.` };
  }
  return { pass: true, points: 2, info: `${bLord} & ${gLord} சமநிலை — ஓரளவு ராசியதிபதி பொருத்தம்.` };
}

/** 8. VASYA PORUTHAM (Attraction/control compatibility) — max 2 points */
function calcVasyaPorutham(boy: number, girl: number): { pass: boolean; points: number; info: string } {
  const bRasi = getRasiId(boy);
  const gRasi = getRasiId(girl);
  const bVasya = VASYA_MAP[bRasi] || [];
  const gVasya = VASYA_MAP[gRasi] || [];

  if (bVasya.includes(gRasi) && gVasya.includes(bRasi)) {
    return { pass: true, points: 2, info: 'இரு தரப்பும் ஒருவரை ஒருவர் வசியம் செய்யும் — சிறந்த வசிய பொருத்தம்.' };
  }
  if (bVasya.includes(gRasi) || gVasya.includes(bRasi)) {
    return { pass: true, points: 1, info: 'ஒரு தரப்பு வசியம் — ஓரளவு வசிய பொருத்தம்.' };
  }
  return { pass: false, points: 0, info: 'வசிய பொருத்தம் இல்லை.' };
}

/** 9. RAJJU PORUTHAM (Lifeline — MOST CRITICAL) — max 8 points (or fail) */
function calcRajjuPorutham(boy: number, girl: number): { pass: boolean; points: number; info: string; critical: boolean } {
  const bRajju = RAJJU[boy];
  const gRajju = RAJJU[girl];
  const RAJJU_NAMES = ['சிரம் (தலை)', 'கண்டம் (கழுத்து)', 'உதரம் (நாபி)', 'காதி (இடுப்பு)', 'பாதம் (காலடி)'];

  if (bRajju === gRajju) {
    // Same Rajju = critical fault (கண்டம்=husband, சிரம்=children, காதி=wife, உதரம்=wealth, பாதம்=travel issues)
    const consequences = [
      'குழந்தைகளுக்கு தீங்கு (harm to children)',
      'மணமகனுக்கு தீங்கு (harm to husband)',
      'செல்வத்திற்கு தீங்கு (harm to wealth)',
      'மணமகளுக்கு தீங்கு (harm to wife)',
      'பயணத்தில் தீங்கு (harm during travel)',
    ];
    return {
      pass: false, points: 0, critical: true,
      info: `இருவரும் ${RAJJU_NAMES[bRajju]} ராஜு — ராஜு தோஷம் உள்ளது. ${consequences[bRajju]}.`
    };
  }
  return {
    pass: true, points: 8, critical: false,
    info: `மணமகன் ${RAJJU_NAMES[bRajju]}, மணமகள் ${RAJJU_NAMES[gRajju]} — ராஜு பொருத்தம் சரி.`
  };
}

/** 10. VEDHA PORUTHAM (Obstacle/Dosha check) — max 2 points (or fail) */
function calcVedhaPorutham(boy: number, girl: number): { pass: boolean; points: number; info: string } {
  const isVedha = VEDHA_PAIRS.some(([a, b]) =>
    (boy === a && girl === b) || (boy === b && girl === a)
  );
  return {
    pass: !isVedha,
    points: isVedha ? 0 : 2,
    info: isVedha
      ? `${NAKSHATRAS[boy].tamil} & ${NAKSHATRAS[girl].tamil} — வேத தோஷம் உள்ளது.`
      : 'வேத தோஷம் இல்லை — நல்லது.'
  };
}

// ── Additional: NADI PORUTHAM ─────────────────────────────────────────
function calcNadiPorutham(boy: number, girl: number): { pass: boolean; points: number; info: string } {
  const bNadi = NADI[boy];
  const gNadi = NADI[girl];
  const NADI_NAMES = ['ஆதி நாடி', 'மத்திய நாடி', 'அந்திய நாடி'];

  if (bNadi === gNadi) {
    return { pass: false, points: 0, info: `இருவரும் ${NADI_NAMES[bNadi]} — நாடி தோஷம் உள்ளது (குழந்தை பாதிப்பு).` };
  }
  return { pass: true, points: 4, info: `மணமகன் ${NADI_NAMES[bNadi]}, மணமகள் ${NADI_NAMES[gNadi]} — நாடி பொருத்தம் சரி.` };
}

// ────────────────────────────────────────────────────────────────────
// MAIN EXPORT: Calculate all 10 Poruthams
// ────────────────────────────────────────────────────────────────────

export interface PoruthamResult {
  name: string;
  nameTa: string;
  pass: boolean;
  points: number;
  maxPoints: number;
  info: string;
  critical?: boolean;
}

export interface JathagamResult {
  boyNakshatra: typeof NAKSHATRAS[number];
  girlNakshatra: typeof NAKSHATRAS[number];
  poruthams: PoruthamResult[];
  totalPoints: number;
  maxPoints: number;
  percentage: number;
  matchedCount: number;
  verdict: 'excellent' | 'good' | 'average' | 'poor';
  verdictTamil: string;
  hasCriticalFault: boolean;
  criticalFaults: string[];
}

export function calculateJathagamPorutham(boyNakshatraId: NakshatraId, girlNakshatraId: NakshatraId): JathagamResult {
  const b = boyNakshatraId;
  const g = girlNakshatraId;

  const dina    = calcDinaPorutham(b, g);
  const gana    = calcGanaPorutham(b, g);
  const mahend  = calcMahendraPorutham(b, g);
  const stree   = calcStreeDheergaPorutham(b, g);
  const yoni    = calcYoniPorutham(b, g);
  const rasi    = calcRasiPorutham(b, g);
  const rasylrd = calcRasiyathipatiPorutham(b, g);
  const vasya   = calcVasyaPorutham(b, g);
  const rajju   = calcRajjuPorutham(b, g);
  const vedha   = calcVedhaPorutham(b, g);
  const nadi    = calcNadiPorutham(b, g);

  const poruthams: PoruthamResult[] = [
    { name: 'Rajju Porutham',        nameTa: 'ராஜு பொருத்தம்',        ...rajju,  maxPoints: 8 },
    { name: 'Dina Porutham',         nameTa: 'தின பொருத்தம்',          ...dina,   maxPoints: 3 },
    { name: 'Gana Porutham',         nameTa: 'கண பொருத்தம்',           ...gana,   maxPoints: 6 },
    { name: 'Rasi Porutham',         nameTa: 'ராசி பொருத்தம்',         ...rasi,   maxPoints: 5 },
    { name: 'Vasya Porutham',        nameTa: 'வசிய பொருத்தம்',         ...vasya,  maxPoints: 2 },
    { name: 'Mahendra Porutham',     nameTa: 'மகேந்திர பொருத்தம்',    ...mahend, maxPoints: 3 },
    { name: 'Stree Dheerga',         nameTa: 'ஸ்த்ரீதீர்க்க பொருத்தம்', ...stree, maxPoints: 3 },
    { name: 'Yoni Porutham',         nameTa: 'யோனி பொருத்தம்',         ...yoni,   maxPoints: 4 },
    { name: 'Rasiyathipati',         nameTa: 'ராசியதிபதி பொருத்தம்',   ...rasylrd, maxPoints: 5 },
    { name: 'Nadi Porutham',         nameTa: 'நாடி பொருத்தம்',          ...nadi,   maxPoints: 4 },
    { name: 'Vedha Porutham',        nameTa: 'வேத பொருத்தம்',          ...vedha,  maxPoints: 2 },
  ];

  const totalPoints = poruthams.reduce((sum, p) => sum + p.points, 0);
  const maxPoints   = poruthams.reduce((sum, p) => sum + p.maxPoints, 0);
  const matchedCount = poruthams.filter(p => p.pass).length;
  const percentage  = Math.round((totalPoints / maxPoints) * 100);

  const criticalFaults: string[] = [];
  if (!rajju.pass)  criticalFaults.push('ராஜு தோஷம்');
  if (!nadi.pass)   criticalFaults.push('நாடி தோஷம்');
  if (!vedha.pass)  criticalFaults.push('வேத தோஷம்');
  const hasCriticalFault = criticalFaults.length > 0;

  let verdict: 'excellent' | 'good' | 'average' | 'poor';
  let verdictTamil: string;

  if (hasCriticalFault && rajju.critical) {
    verdict = 'poor';
    verdictTamil = '❌ ராஜு தோஷம் காரணமாக பொருத்தம் இல்லை';
  } else if (percentage >= 75 && !hasCriticalFault) {
    verdict = 'excellent';
    verdictTamil = '✅ மிகவும் சிறந்த பொருத்தம் — திருமணம் நடக்கலாம்';
  } else if (percentage >= 55) {
    verdict = 'good';
    verdictTamil = '👍 நல்ல பொருத்தம் — திருமணம் நடக்கலாம்';
  } else if (percentage >= 40) {
    verdict = 'average';
    verdictTamil = '⚠️ சாதாரண பொருத்தம் — குழந்தி கட்டளைகளுடன் நடக்கலாம்';
  } else {
    verdict = 'poor';
    verdictTamil = '❌ பொருத்தம் இல்லை — திருமணம் நிறுத்தப்படலாம்';
  }

  return {
    boyNakshatra:  NAKSHATRAS[b],
    girlNakshatra: NAKSHATRAS[g],
    poruthams,
    totalPoints,
    maxPoints,
    percentage,
    matchedCount,
    verdict,
    verdictTamil,
    hasCriticalFault,
    criticalFaults,
  };
}
