// Dosha calculations: Sevvai Dosham (Mangal/Kuja Dosha) & Kaal Sarp Dosha

export interface SevvaiDoshamResult {
  hasDosha: boolean;
  severity: 'none' | 'mild' | 'moderate' | 'heavy' | 'cancelled';
  severityTa: string;
  isCancelled: boolean;
  cancellationReasons: string[];
  pointsFromLagna: boolean;
  pointsFromMoon: boolean;
  pointsFromVenus: boolean;
  marsHouseFromLagna: number;
  marsHouseFromMoon: number;
  marsHouseFromVenus: number;
  marsRasiIndex: number;
  explanationTa: string;
  remedyTa: string;
}

export interface KaalSarpDoshaResult {
  hasDosha: boolean;
  isPartial: boolean;
  typeNameTa: string;
  typeNameEn: string;
  rahuHouse: number;
  ketuHouse: number;
  impactAreaTa: string;
  remedyTa: string;
}

// Sevvai Dosha houses in South Indian Vedic astrology: 1, 2, 4, 7, 8, 12
const SEVVAI_DOSHA_HOUSES = [1, 2, 4, 7, 8, 12];

export const KAAL_SARP_TYPES: Record<number, { nameTa: string; nameEn: string; impactTa: string; remedyTa: string }> = {
  1: {
    nameTa: 'அனந்த கால சர்ப தோஷம் (Anant)',
    nameEn: 'Anant Kaal Sarp Dosha',
    impactTa: 'உடல் நலம், மன அமைதி மற்றும் திருமணத்தில் தாமதம் ஏற்படலாம்.',
    remedyTa: 'மகா மிருத்யுஞ்சய மந்திரம் ஜெபிப்பது மற்றும் நாகநாதர் வழிபாடு நன்று.',
  },
  2: {
    nameTa: 'குளிக கால சர்ப தோஷம் (Kulik)',
    nameEn: 'Kulik Kaal Sarp Dosha',
    impactTa: 'பொருளாதார ஏற்ற இறக்கம் மற்றும் குடும்ப உறவுகளில் சவால்கள்.',
    remedyTa: 'சுப்பிரமணியர் வழிபாடு மற்றும் நாகர் சிலைக்கு அபிஷேகம்.',
  },
  3: {
    nameTa: 'வாசுகி கால சர்ப தோஷம் (Vasuki)',
    nameEn: 'Vasuki Kaal Sarp Dosha',
    impactTa: 'உடன்பிறந்தவர்களுடன் கருத்து வேறுபாடு மற்றும் முயற்சிகளில் தடைகள்.',
    remedyTa: 'திருநாகேஸ்வரம் அல்லது காளஹஸ்தி சென்று பரிகார பூஜை செய்வது சிறந்தது.',
  },
  4: {
    nameTa: 'சங்கபால கால சர்ப தோஷம் (Shankhpal)',
    nameEn: 'Shankhpal Kaal Sarp Dosha',
    impactTa: 'சொத்து, வாகன விவகாரங்கள் மற்றும் தாயாரின் உடல்நல பாதிப்பு.',
    remedyTa: 'துர்க்கை அம்மனுக்கு செவ்வாய்க்கிழமை ராகு காலத்தில் நெய் தீபம் ஏற்றவும்.',
  },
  5: {
    nameTa: 'பத்ம கால சர்ப தோஷம் (Padma)',
    nameEn: 'Padma Kaal Sarp Dosha',
    impactTa: 'கல்வியில் கவனம் குறைதல் மற்றும் புத்திர பாக்கியத்தில் தாமதம்.',
    remedyTa: 'சரஸ்வதி தேவி வழிபாடு மற்றும் ஏழை மாணவர்களுக்கு கல்வி உதவி செய்தல்.',
  },
  6: {
    nameTa: 'மகாபத்ம கால சர்ப தோஷம் (Mahapadma)',
    nameEn: 'Mahapadma Kaal Sarp Dosha',
    impactTa: 'கடன் தொல்லைகள், மறைமுக எதிரிகள் மற்றும் ஆரோக்கிய குறைபாடுகள்.',
    remedyTa: 'பைரவர் வழிபாடு மற்றும் அனுமன் சாலீசா பாராயணம் செய்வது சிறப்பு.',
  },
  7: {
    nameTa: 'தக்ஷக கால சர்ப தோஷம் (Takshak)',
    nameEn: 'Takshak Kaal Sarp Dosha',
    impactTa: 'திருமண வாழ்க்கையில் கருத்து வேறுபாடு மற்றும் தொழில் கூட்டாளிகளுடன் முரண்பாடு.',
    remedyTa: 'ராகு-கேது சாந்தி ஹோமம் செய்தல் மற்றும் நரசிம்மர் வழிபாடு.',
  },
  8: {
    nameTa: 'கார்கோடக கால சர்ப தோஷம் (Karkotak)',
    nameEn: 'Karkotak Kaal Sarp Dosha',
    impactTa: 'திடீர் நஷ்டங்கள், விபத்து பயம் மற்றும் பூர்வீக சொத்து விவகாரங்கள்.',
    remedyTa: 'சிவபெருமானுக்கு ருத்ராபிஷேகம் மற்றும் வெள்ளிக்கிழமை ராகு காலத்தில் பூஜை.',
  },
  9: {
    nameTa: 'சங்கசூட கால சர்ப தோஷம் (Shankhachud)',
    nameEn: 'Shankhachud Kaal Sarp Dosha',
    impactTa: 'தந்தையுடன் கருத்து வேறுபாடு மற்றும் அதிர்ஷ்டக் குறைவு.',
    remedyTa: 'குலதெய்வ வழிபாடு மற்றும் பித்ரு தர்ப்பணம் தவறாமல் செய்தல்.',
  },
  10: {
    nameTa: 'காதக கால சர்ப தோஷம் (Ghatak)',
    nameEn: 'Ghatak Kaal Sarp Dosha',
    impactTa: 'தொழில், வேலை வாய்ப்பில் ஸ்திரமின்மை மற்றும் உயர் அதிகாரிகளுடன் மோதல்.',
    remedyTa: 'சனிக்கிழமை ஆஞ்சநேயருக்கு வடை மாலை சாற்றி வழிபடுதல்.',
  },
  11: {
    nameTa: 'விஷதார கால சர்ப தோஷம் (Vishdhar)',
    nameEn: 'Vishdhar Kaal Sarp Dosha',
    impactTa: 'நண்பர்கள் மற்றும் சுற்றத்தாரால் ஏமாற்றம், மூத்த சகோதரருடன் பிணக்கு.',
    remedyTa: 'நாக பஞ்சமி அன்று நாகர் சிலைக்கு பால் அபிஷேகம் செய்தல்.',
  },
  12: {
    nameTa: 'சேஷநாக கால சர்ப தோஷம் (Sheshnag)',
    nameEn: 'Sheshnag Kaal Sarp Dosha',
    impactTa: 'அதிகப்படியான மருத்துவ மற்றும் தேவையற்ற விரய செலவுகள்.',
    remedyTa: 'திருவண்ணாமலை கிரிவலம் வருதல் மற்றும் அன்னதானம் வழங்குதல்.',
  },
};

// Calculate Sevvai Dosham
export function calculateSevvaiDosham(
  marsHouseFromLagna: number,
  marsHouseFromMoon: number,
  marsHouseFromVenus: number,
  marsRasiIndex: number, // 0 = Mesha, 1 = Vrishabha, ... 9 = Makara
  jupiterAspectsMars: boolean = false
): SevvaiDoshamResult {
  const fromLagna = SEVVAI_DOSHA_HOUSES.includes(marsHouseFromLagna);
  const fromMoon = SEVVAI_DOSHA_HOUSES.includes(marsHouseFromMoon);
  const fromVenus = SEVVAI_DOSHA_HOUSES.includes(marsHouseFromVenus);

  const cancellationReasons: string[] = [];

  // Exaltation (Makara - Capricorn / index 9) or Own Signs (Mesha / index 0, Vrischika / index 7)
  if (marsRasiIndex === 9) {
    cancellationReasons.push('செவ்வாய் உச்சம் (மகரம்) பெற்றுள்ளதால் தோஷம் நிவர்த்தியாகிறது (Exalted in Capricorn).');
  } else if (marsRasiIndex === 0 || marsRasiIndex === 7) {
    cancellationReasons.push('செவ்வாய் ஆட்சி பலம் (மேஷம்/விருச்சிகம்) பெற்றுள்ளதால் தோஷம் இல்லை (Own house).');
  }

  // Jupiter aspect or conjunction cancels
  if (jupiterAspectsMars) {
    cancellationReasons.push('குரு பார்வை அல்லது சேர்க்கை உள்ளதால் செவ்வாய் தோஷம் பங்கம் ஆகிறது (Guru aspect).');
  }

  // 2nd house in Gemini or Virgo is exempt
  if ((marsHouseFromLagna === 2 || marsHouseFromMoon === 2) && (marsRasiIndex === 2 || marsRasiIndex === 5)) {
    cancellationReasons.push('இரண்டாம் இடத்து செவ்வாய் மிதுனம்/கன்னியில் இருந்தால் தோஷம் விலகுகிறது.');
  }

  // 4th house in Aries or Scorpio is exempt
  if ((marsHouseFromLagna === 4 || marsHouseFromMoon === 4) && (marsRasiIndex === 0 || marsRasiIndex === 7)) {
    cancellationReasons.push('நான்காம் இடத்து செவ்வாய் மேஷம் அல்லது விருச்சிகத்தில் தோஷமில்லை.');
  }

  // 7th house in Capricorn or Cancer is exempt
  if ((marsHouseFromLagna === 7 || marsHouseFromMoon === 7) && (marsRasiIndex === 9 || marsRasiIndex === 3)) {
    cancellationReasons.push('ஏழாம் இடத்து செவ்வாய் கடகம் அல்லது மகரத்தில் தோஷமில்லை.');
  }

  // 8th house in Sagittarius or Pisces is exempt
  if ((marsHouseFromLagna === 8 || marsHouseFromMoon === 8) && (marsRasiIndex === 8 || marsRasiIndex === 11)) {
    cancellationReasons.push('எட்டாம் இடத்து செவ்வாய் தனுசு அல்லது மீனத்தில் தோஷமில்லை.');
  }

  const isCancelled = cancellationReasons.length > 0;
  const count = [fromLagna, fromMoon, fromVenus].filter(Boolean).length;

  let severity: 'none' | 'mild' | 'moderate' | 'heavy' | 'cancelled' = 'none';
  let severityTa = 'செவ்வாய் தோஷம் இல்லை (No Dosha)';

  if (isCancelled && count > 0) {
    severity = 'cancelled';
    severityTa = 'செவ்வாய் தோஷ நிவர்த்தி (Dosha Cancelled)';
  } else if (count === 3) {
    severity = 'heavy';
    severityTa = 'முழு செவ்வாய் தோஷம் (Heavy / Sampurna Dosha)';
  } else if (count === 2) {
    severity = 'moderate';
    severityTa = 'மிதமான செவ்வாய் தோஷம் (Moderate Dosha)';
  } else if (count === 1) {
    severity = 'mild';
    severityTa = 'லேசான செவ்வாய் தோஷம் (Mild Dosha)';
  }

  const hasDosha = count > 0 && !isCancelled;

  const explanationTa = hasDosha
    ? `உங்கள் ஜாதகத்தில் செவ்வாய் ${fromLagna ? `லக்னத்திலிருந்து ${marsHouseFromLagna}-ம் ` : ''}${fromMoon ? `சந்திரனிலிருந்து ${marsHouseFromMoon}-ம் ` : ''}${fromVenus ? `சுக்கிரனிலிருந்து ${marsHouseFromVenus}-ம் ` : ''}இடத்தில் அமைந்திருப்பதால் செவ்வாய் தோஷம் ஏற்படுகிறது.`
    : isCancelled
    ? 'செவ்வாய் தோஷ அமைப்பில் இருந்தாலும், விதிவிலக்கு மற்றும் நிவர்த்தி விதிகளின்படி தோஷம் பங்கமாகிறது.'
    : 'உங்கள் ஜாதகத்தில் செவ்வாய் சுப இடங்களில் இருப்பதால் எவ்வித செவ்வாய் தோஷமும் இல்லை.';

  const remedyTa = hasDosha
    ? 'பரிகாரம்: செவ்வாய் தோஷம் உள்ள வரனையே திருமணம் செய்வது சிறந்தது (தோஷ சாம்யம்). வைத்தீஸ்வரன் கோவில் வழிபாடு அல்லது செவ்வாய்க்கிழமை முருகப்பெருமானுக்கு நெய் தீபம் ஏற்றி வழிபடலாம்.'
    : 'பரிகாரங்கள் எதுவும் தேவையில்லை.';

  return {
    hasDosha,
    severity,
    severityTa,
    isCancelled,
    cancellationReasons,
    pointsFromLagna: fromLagna,
    pointsFromMoon: fromMoon,
    pointsFromVenus: fromVenus,
    marsHouseFromLagna,
    marsHouseFromMoon,
    marsHouseFromVenus,
    marsRasiIndex,
    explanationTa,
    remedyTa,
  };
}

// Calculate Kaal Sarp Dosha
export function calculateKaalSarpDosha(
  rahuHouse: number, // 1 to 12
  allPlanetsInsideArc: boolean,
  planetCountOutside: number = 0
): KaalSarpDoshaResult {
  const ketuHouse = ((rahuHouse + 5) % 12) + 1; // Opposite house (7th from Rahu)
  const safeRahuHouse = Math.max(1, Math.min(12, rahuHouse));
  const typeInfo = KAAL_SARP_TYPES[safeRahuHouse];

  if (!allPlanetsInsideArc && planetCountOutside > 1) {
    return {
      hasDosha: false,
      isPartial: false,
      typeNameTa: 'கால சர்ப தோஷம் இல்லை',
      typeNameEn: 'No Kaal Sarp Dosha',
      rahuHouse: safeRahuHouse,
      ketuHouse,
      impactAreaTa: 'உங்கள் ஜாதகத்தில் கிரகங்கள் ராகு-கேது பிடிக்குள் முழுமையாக இல்லை. எவ்வித கால சர்ப தோஷமும் இல்லை.',
      remedyTa: 'பரிகாரம் எதுவும் தேவையில்லை.',
    };
  }

  const isPartial = planetCountOutside === 1;

  return {
    hasDosha: true,
    isPartial,
    typeNameTa: isPartial ? `பகுதி (அன்ஷிக்) ${typeInfo.nameTa}` : typeInfo.nameTa,
    typeNameEn: isPartial ? `Partial ${typeInfo.nameEn}` : typeInfo.nameEn,
    rahuHouse: safeRahuHouse,
    ketuHouse,
    impactAreaTa: typeInfo.impactTa,
    remedyTa: typeInfo.remedyTa,
  };
}
