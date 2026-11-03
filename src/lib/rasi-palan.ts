// Daily Rasi Palan from the Moon's transit (Chandra gochara) over each janma rasi.
// Traditional rule: the Moon is favourable from the janma rasi in houses 1, 3, 6, 7, 10, 11.
import { RASIS_LIST, NAKSHATRAS_LIST, TAMIL_CITIES, type TamilCity } from '@/lib/astro-core/constants';
import { computeDayPanchang } from '@/lib/astro-core/panchang-day';
import { addDays, parseDateStr } from '@/lib/date-format';

export const RASI_SLUGS = [
  'mesham', 'rishabam', 'mithunam', 'kadagam', 'simmam', 'kanni',
  'thulaam', 'viruchigam', 'dhanusu', 'magaram', 'kumbam', 'meenam',
] as const;

export function rasiIndexFromSlug(slug: string): number {
  return RASI_SLUGS.indexOf(slug as (typeof RASI_SLUGS)[number]);
}

const LORD_TRAITS: Record<string, { colorTa: string; number: number }> = {
  Mars: { colorTa: 'சிவப்பு', number: 9 },
  Venus: { colorTa: 'வெள்ளை / இளஞ்சிவப்பு', number: 6 },
  Mercury: { colorTa: 'பச்சை', number: 5 },
  Moon: { colorTa: 'வெண்மை / கிரீம்', number: 2 },
  Sun: { colorTa: 'ஆரஞ்சு / தங்க நிறம்', number: 1 },
  Jupiter: { colorTa: 'மஞ்சள்', number: 3 },
  Saturn: { colorTa: 'நீலம் / கருப்பு', number: 8 },
};

export function rasiInfo(idx: number) {
  const r = RASIS_LIST[idx];
  return {
    ...r,
    slug: RASI_SLUGS[idx],
    nakshatras: NAKSHATRAS_LIST.filter((n) => n.rasiTa.split('/').includes(r.nameTa)).map((n) => n.nameTa),
    ...LORD_TRAITS[r.lordEn],
  };
}

interface HouseText {
  rating: 1 | 2 | 3 | 4 | 5;
  summary: string;
  work: string;
  money: string;
  family: string;
  health: string;
}

export const HOUSE_PALAN: Record<number, HouseText> = {
  1: { rating: 4, summary: 'சந்திரன் உங்கள் ராசியிலேயே சஞ்சரிக்கிறார்; மனதில் தெளிவும் உற்சாகமும் இருக்கும்.', work: 'புதிய முயற்சிகளைத் தொடங்க ஏற்ற நாள்; உங்கள் கருத்துகளுக்கு மதிப்பு கிடைக்கும்.', money: 'வரவு சீராக இருக்கும்; சிறிய செலவுகளையும் சமாளிப்பீர்கள்.', family: 'குடும்பத்தினருடன் மகிழ்ச்சியான நேரம். உணர்ச்சிவசப்பட்டுப் பேசுவதைத் தவிர்க்கவும்.', health: 'உடல்நலம் நன்றாக இருக்கும்; போதிய தூக்கம் அவசியம்.' },
  2: { rating: 2, summary: 'சந்திரன் 2-ஆம் வீட்டில் இருப்பதால் பேச்சிலும் செலவிலும் கவனம் தேவை.', work: 'சக ஊழியர்களுடன் பேசும்போது வார்த்தைகளில் நிதானம் வேண்டும்.', money: 'தேவையற்ற செலவுகள் கூடலாம்; பெரிய முதலீடுகளை ஒத்திவைக்கவும்.', family: 'குடும்பத்தில் சிறு கருத்து வேறுபாடு வரலாம்; பொறுமை காக்கவும்.', health: 'கண், தொண்டை தொடர்பான சிறு தொந்தரவுகள் வரலாம்.' },
  3: { rating: 4, summary: 'சந்திரன் 3-ஆம் வீட்டில் இருப்பதால் தைரியமும் முயற்சிக்கு வெற்றியும் உண்டு.', work: 'எடுத்த காரியங்களை முடிப்பீர்கள்; நண்பர்கள், சகோதரர்கள் உதவுவார்கள்.', money: 'சிறிய வருமான வாய்ப்புகள் கிடைக்கும்.', family: 'உடன்பிறந்தோருடன் இணக்கம் ஏற்படும்.', health: 'உற்சாகமாகச் செயல்படுவீர்கள்.' },
  4: { rating: 2, summary: 'சந்திரன் 4-ஆம் வீட்டில் இருப்பதால் மன அமைதி சற்றுக் குறையலாம்.', work: 'வேலையில் தாமதங்கள் இருக்கலாம்; அவசர முடிவுகளைத் தவிர்க்கவும்.', money: 'வீடு, வாகனம் தொடர்பான செலவுகள் வரக்கூடும்.', family: 'தாயாரின் உடல்நலம், வீட்டுச் சூழலில் கவனம் தேவை.', health: 'மன அழுத்தம் குறைய ஓய்வு எடுங்கள்.' },
  5: { rating: 2, summary: 'சந்திரன் 5-ஆம் வீட்டில் இருப்பதால் குழப்பமான சிந்தனைகள் எழலாம்.', work: 'முக்கிய முடிவுகளை நன்கு யோசித்து எடுக்கவும்.', money: 'அவசர முதலீடுகளையும் ஊகத் தொழிலையும் தவிர்க்கவும்.', family: 'பிள்ளைகள் தொடர்பான கவலைகள் தோன்றலாம்; அன்புடன் பேசுங்கள்.', health: 'வயிறு தொடர்பான சிறு தொந்தரவுகள் இருக்கலாம்; உணவில் கவனம்.' },
  6: { rating: 4, summary: 'சந்திரன் 6-ஆம் வீட்டில் இருப்பதால் எதிர்ப்புகளை வெல்லும் நாள்.', work: 'போட்டியாளர்களை மிஞ்சுவீர்கள்; நிலுவைப் பணிகளை முடிக்க நல்ல நாள்.', money: 'கடன் அடைக்க, பழைய பாக்கி வசூலிக்க சாதகம்.', family: 'வீட்டில் அமைதி நிலவும்.', health: 'உடல்நலம் சீராகும்; நீண்டநாள் தொந்தரவு குறையும்.' },
  7: { rating: 4, summary: 'சந்திரன் 7-ஆம் வீட்டில் இருப்பதால் உறவுகளில் இனிமை கூடும்.', work: 'கூட்டுத் தொழில், பேச்சுவார்த்தைகளுக்கு சாதகமான நாள்.', money: 'பங்குதாரர் மூலம் ஆதாயம் கிடைக்கலாம்.', family: 'வாழ்க்கைத் துணையுடன் மகிழ்ச்சியான நேரம்; திருமணப் பேச்சுகளுக்கு ஏற்றது.', health: 'மனநிறைவுடன் இருப்பீர்கள்.' },
  8: { rating: 1, summary: 'சந்திரன் 8-ஆம் வீட்டில் (சந்திராஷ்டமம்) இருப்பதால் இன்று கூடுதல் எச்சரிக்கை தேவை.', work: 'புதிய ஒப்பந்தங்கள், முக்கிய முடிவுகளை ஒத்திவைப்பது நல்லது.', money: 'பணப் பரிவர்த்தனையில் கவனம்; பிறருக்கு ஜாமீன் கொடுக்க வேண்டாம்.', family: 'வாக்குவாதங்களைத் தவிருங்கள்.', health: 'பயணத்தில் கவனம்; மனதை அமைதியாக வைத்திருங்கள்.' },
  9: { rating: 2, summary: 'சந்திரன் 9-ஆம் வீட்டில் இருப்பதால் முயற்சிகளில் சிறிய தடைகள் தோன்றலாம்.', work: 'எதிர்பார்த்த உதவி தாமதமாகலாம்; நிதானமாகச் செயல்படுங்கள்.', money: 'எதிர்பாராத செலவுகள் வரலாம்.', family: 'பெரியோரின் ஆலோசனையைக் கேளுங்கள்.', health: 'தொலைதூரப் பயணத்தைத் தவிர்க்கவும்; இறைவழிபாடு மன அமைதி தரும்.' },
  10: { rating: 5, summary: 'சந்திரன் 10-ஆம் வீட்டில் இருப்பதால் தொழிலில் வெற்றியும் பாராட்டும் உண்டு.', work: 'அலுவலகத்தில் பாராட்டு; முக்கிய பணிகளில் வெற்றி.', money: 'வருமானம் உயரும்; புதிய வாய்ப்புகள் வரும்.', family: 'குடும்பத்தின் ஆதரவு கிடைக்கும்.', health: 'சுறுசுறுப்பாக இருப்பீர்கள்.' },
  11: { rating: 5, summary: 'சந்திரன் 11-ஆம் வீட்டில் இருப்பதால் லாபமும் நிறைவேறும் ஆசைகளும் உண்டு.', work: 'நண்பர்கள், மூத்தோர் உதவியால் காரியம் கைகூடும்.', money: 'எதிர்பார்த்த பணவரவு; முதலீட்டிற்கு சாதகம்.', family: 'மகிழ்ச்சியான செய்தி வரலாம்.', health: 'நலம் சிறப்பாக இருக்கும்.' },
  12: { rating: 2, summary: 'சந்திரன் 12-ஆம் வீட்டில் இருப்பதால் செலவு கூடும்; மன அமைதி தேவை.', work: 'வேலைப்பளு கூடலாம்; திட்டமிட்டுச் செயல்படுங்கள்.', money: 'சுப, மருத்துவச் செலவுகள் இருக்கலாம்; சேமிப்பைக் கவனியுங்கள்.', family: 'தூக்கமின்மை, மனச்சோர்வு வரலாம்; தியானம் உதவும்.', health: 'ஓய்வு அவசியம்; தூக்கத்தைப் புறக்கணிக்க வேண்டாம்.' },
};

export interface RasiDayPalan {
  rasiIdx: number;
  house: number; // house of the Moon from this rasi, for the longest part of the day
  text: HouseText;
  laterHouse?: { house: number; fromFormatted: string; text: HouseText };
}

export interface DayRasiPalan {
  dateStr: string;
  moonRasiTa: string;
  segments: { rasiTa: string; endFormatted: string; last: boolean }[];
  rasis: RasiDayPalan[];
}

export function dailyRasiPalan(dateStr: string, city: TamilCity = TAMIL_CITIES[0]): DayRasiPalan {
  const p = parseDateStr(dateStr)!;
  const day = computeDayPanchang(p.y, p.m, p.d, city);
  const segs = day.moonRasiSegments;
  // Longest segment drives the day's rating; a later change is reported separately
  // Clip to this day (sunrise to next sunrise); a sign that runs into tomorrow must not look longer than it is
  const dayEnd = day.sunriseMs + 24 * 3600000;
  const durations = segs.map((s) => Math.min(s.endMs, dayEnd) - Math.max(s.startMs, day.sunriseMs));
  const mainIdx = durations.indexOf(Math.max(...durations));
  const main = segs[mainIdx];
  const other = segs.length > 1 ? segs.find((_, i) => i !== mainIdx) : undefined;

  const rasis: RasiDayPalan[] = RASIS_LIST.map((_, i) => {
    const house = ((main.index - i + 12) % 12) + 1;
    const entry: RasiDayPalan = { rasiIdx: i, house, text: HOUSE_PALAN[house] };
    if (other) {
      const h2 = ((other.index - i + 12) % 12) + 1;
      if (HOUSE_PALAN[h2].rating !== HOUSE_PALAN[house].rating) {
        const fromFormatted = other === segs[0] ? 'காலை' : segs[0].endFormatted;
        entry.laterHouse = { house: h2, fromFormatted, text: HOUSE_PALAN[h2] };
      }
    }
    return entry;
  });

  return {
    dateStr,
    moonRasiTa: main.rasiTa,
    segments: segs.map((s, i) => ({ rasiTa: s.rasiTa, endFormatted: s.endFormatted, last: i === segs.length - 1 })),
    rasis,
  };
}

export function weekOutlook(startDateStr: string, rasiIdx: number, city: TamilCity = TAMIL_CITIES[0]) {
  return [0, 1, 2, 3, 4, 5, 6].map((o) => {
    const d = addDays(startDateStr, o);
    const pal = dailyRasiPalan(d, city).rasis[rasiIdx];
    return { dateStr: d, rating: pal.text.rating, summary: pal.text.summary, house: pal.house };
  });
}

export const stars = (n: number) => '★'.repeat(n) + '☆'.repeat(5 - n);
