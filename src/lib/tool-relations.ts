// Cross-linking relationships between tools for enhanced SEO and internal link equity
export interface RelatedTool {
  path: string;
  titleTa: string;
  titleEn: string;
  icon: string;
  descriptionTa: string;
}

export const ALL_TOOLS_INDEX: Record<string, RelatedTool> = {
  'rahu-kalam': {
    path: '/tools/rahu-kalam',
    titleTa: 'இன்றைய ராகு காலம்',
    titleEn: 'Rahu Kalam Today',
    icon: '⏰',
    descriptionTa: 'இன்றைய ராகு கால நேரத்தை துல்லியமாக கணக்கிடுங்கள்.',
  },
  'gowri-nalla-neram': {
    path: '/tools/gowri-nalla-neram',
    titleTa: 'கவுரி நல்ல நேரம்',
    titleEn: 'Gowri Nalla Neram',
    icon: '✨',
    descriptionTa: 'சுப காரியங்கள் தொடங்க இன்றைய கவுரி நல்ல நேர அட்டவணை.',
  },
  'yamakandam': {
    path: '/tools/yamakandam',
    titleTa: 'யமகண்டம் & குளிகை',
    titleEn: 'Yamakandam & Kuligai',
    icon: '⏳',
    descriptionTa: 'இன்றைய யமகண்டம் மற்றும் குளிகை நேரங்களை சரிபார்க்கவும்.',
  },
  'choghadiya': {
    path: '/tools/choghadiya',
    titleTa: 'சோகாதியம் அட்டவணை',
    titleEn: 'Choghadiya Timings',
    icon: '🧭',
    descriptionTa: 'பகல் மற்றும் இரவு சுப நேர சோகாதியம் கணிப்பான்.',
  },
  'nakshatra-finder': {
    path: '/tools/nakshatra-finder',
    titleTa: 'நட்சத்திரம் கண்டுபிடி',
    titleEn: 'Nakshatra Finder',
    icon: '🌟',
    descriptionTa: 'பிறந்த தேதி மற்றும் நேரத்தை கொண்டு நட்சத்திரம், பாதம், ராசி அறிய.',
  },
  'sevvai-dosham': {
    path: '/tools/sevvai-dosham',
    titleTa: 'செவ்வாய் தோஷம் கணிப்பான்',
    titleEn: 'Sevvai / Mangal Dosha',
    icon: '🛡️',
    descriptionTa: 'ஜாதகத்தில் செவ்வாய் தோஷம் மற்றும் நிவர்த்தி விதிகளை சரிபார்க்கவும்.',
  },
  'thirumana-muhurtham': {
    path: '/tools/thirumana-muhurtham',
    titleTa: 'திருமண முகூர்த்த தேதிகள் 2025-2026',
    titleEn: 'Marriage Muhurtham 2025-2026',
    icon: '💍',
    descriptionTa: 'வளர்பிறை சுப முகூர்த்த தேதிகள் மற்றும் நல்ல நேரங்களின் பட்டியல்.',
  },
  'jathagam-porutham': {
    path: '/tools/jathagam-porutham',
    titleTa: 'ஜாதக பொருத்தம்',
    titleEn: 'Jathagam Thirumana Porutham',
    icon: '⭐',
    descriptionTa: '27 நட்சத்திர அடிப்படையில் 10 பொருத்தங்களை உடனே கணக்கிடுங்கள்.',
  },
  'thirumana-vayathu': {
    path: '/tools/thirumana-vayathu',
    titleTa: 'திருமண வயது தகுதி',
    titleEn: 'Marriage Age Eligibility',
    icon: '⚖️',
    descriptionTa: 'சட்டப்படி திருமண வயது உள்ளதா என சரிபார்க்கவும்.',
  },
  'thirumana-selavu': {
    path: '/tools/thirumana-selavu',
    titleTa: 'திருமண செலவு கணிப்பான்',
    titleEn: 'Wedding Budget Calculator',
    icon: '💰',
    descriptionTa: 'திருமண பட்ஜெட்டை துல்லியமாக திட்டமிட்டு நிர்வகிக்க.',
  },
};

// Map each tool key to 3 contextually relevant tools
export const TOOL_RELATIONS: Record<string, string[]> = {
  'rahu-kalam': ['gowri-nalla-neram', 'yamakandam', 'choghadiya'],
  'gowri-nalla-neram': ['rahu-kalam', 'yamakandam', 'thirumana-muhurtham'],
  'yamakandam': ['rahu-kalam', 'gowri-nalla-neram', 'choghadiya'],
  'choghadiya': ['rahu-kalam', 'gowri-nalla-neram', 'nakshatra-finder'],
  'nakshatra-finder': ['jathagam-porutham', 'sevvai-dosham', 'thirumana-muhurtham'],
  'sevvai-dosham': ['jathagam-porutham', 'nakshatra-finder', 'thirumana-muhurtham'],
  'thirumana-muhurtham': ['jathagam-porutham', 'gowri-nalla-neram', 'thirumana-selavu'],
  'jathagam-porutham': ['nakshatra-finder', 'sevvai-dosham', 'thirumana-muhurtham'],
};

export function getRelatedTools(currentToolSlug: string): RelatedTool[] {
  const keys = TOOL_RELATIONS[currentToolSlug] || ['rahu-kalam', 'gowri-nalla-neram', 'jathagam-porutham'];
  return keys.map((k) => ALL_TOOLS_INDEX[k]).filter(Boolean);
}
