// Tamil festival dates computed from the tithi/nakshatra/solar-month engine (Chennai).
// Rules follow common Tamil Nadu panchangam practice; the local temple panchangam is final for disputed years.
import { buildDayTable, matchRows, type DayRow, type MatchSpec } from '@/lib/astro-core/observances';
import { WEEKDAYS_TAMIL } from '@/lib/astro-core/constants';
import { TAMIL_MONTH_NAMES } from '@/lib/astro-core/panchang-day';

type Rule =
  | { type: 'solar'; month: number; day: number }
  | { type: 'match'; month?: number; lunarSunSign?: number; spec: MatchSpec; nearTithi?: number[] }
  | { type: 'afterMahalaya'; days: number; spec?: MatchSpec; fromDay?: number; toDay?: number };

export interface FestivalMeta {
  slug: string;
  nameTa: string;
  nameEn: string;
  icon: string;
  blurbTa: string;
  rule: Rule;
}

const TITHI = (n: number[], window: MatchSpec['window'] = 'day'): MatchSpec => ({ kind: 'tithi', targets: n, window });
const NAK = (n: number[], window: MatchSpec['window'] = 'day'): MatchSpec => ({ kind: 'nakshatra', targets: n, window });

export const FESTIVALS: FestivalMeta[] = [
  { slug: 'tamil-new-year', nameTa: 'தமிழ் புத்தாண்டு', nameEn: 'Tamil New Year (Puthandu)', icon: '🌼', blurbTa: 'சித்திரை 1 – தமிழ் ஆண்டின் தொடக்கம். மாங்காய் பச்சடி, கனி காணுதல் மரபு.', rule: { type: 'solar', month: 0, day: 1 } },
  { slug: 'ram-navami', nameTa: 'ஸ்ரீ ராம நவமி', nameEn: 'Rama Navami', icon: '🏹', blurbTa: 'சைத்ர மாத வளர்பிறை நவமி (பங்குனி/சித்திரை); ஸ்ரீராமரின் அவதார நாள்.', rule: { type: 'match', lunarSunSign: 11, spec: TITHI([9], 'madhyahna') } },
  { slug: 'chitra-pournami', nameTa: 'சித்ரா பௌர்ணமி', nameEn: 'Chitra Pournami', icon: '🌕', blurbTa: 'சித்திரை மாத பௌர்ணமி; சித்ரகுப்தர் வழிபாடு, மதுரை கள்ளழகர் விழா.', rule: { type: 'match', month: 0, spec: TITHI([15]) } },
  { slug: 'vaikasi-visakam', nameTa: 'வைகாசி விசாகம்', nameEn: 'Vaikasi Visakam', icon: '🔱', blurbTa: 'வைகாசி மாத விசாக நட்சத்திரம்; முருகப்பெருமான் அவதார நாள்.', rule: { type: 'match', month: 1, spec: NAK([15]), nearTithi: [13, 14, 15, 16, 17] } },
  { slug: 'aadi-pirappu', nameTa: 'ஆடிப் பிறப்பு', nameEn: 'Aadi Pirappu', icon: '🌾', blurbTa: 'ஆடி மாதம் தொடங்கும் நாள்; அம்மன் கோயில்களில் ஆடி விழாக்கள் தொடங்கும்.', rule: { type: 'solar', month: 3, day: 1 } },
  { slug: 'aadi-amavasai', nameTa: 'ஆடி அமாவாசை', nameEn: 'Aadi Amavasai', icon: '🌑', blurbTa: 'ஆடி மாத அமாவாசை; முன்னோர் வழிபாடு, ராமேஸ்வரம் போன்ற தலங்களில் நீராடல்.', rule: { type: 'match', month: 3, spec: TITHI([30], 'aparahna') } },
  { slug: 'aadi-krithigai', nameTa: 'ஆடிக் கிருத்திகை', nameEn: 'Aadi Krithigai', icon: '🔥', blurbTa: 'ஆடி மாத கிருத்திகை; முருகன் கோயில்களில் காவடி, சிறப்பு வழிபாடு.', rule: { type: 'match', month: 3, spec: NAK([2]) } },
  { slug: 'aadi-pooram', nameTa: 'ஆடிப் பூரம்', nameEn: 'Aadi Pooram', icon: '🌺', blurbTa: 'ஆடி மாத பூர நட்சத்திரம்; ஆண்டாள் அவதார நாள், அம்மனுக்கு வளைகாப்பு.', rule: { type: 'match', month: 3, spec: NAK([10]) } },
  { slug: 'aadi-perukku', nameTa: 'ஆடிப் பெருக்கு', nameEn: 'Aadi Perukku', icon: '🌊', blurbTa: 'ஆடி 18 – காவிரி போன்ற ஆறுகளை வழிபடும் விழா; புதுமணத் தம்பதியர் சிறப்பு.', rule: { type: 'solar', month: 3, day: 18 } },
  { slug: 'krishna-jayanthi', nameTa: 'கிருஷ்ண ஜெயந்தி', nameEn: 'Krishna Jayanthi', icon: '🪈', blurbTa: 'ஆவணி மாத தேய்பிறை அஷ்டமி; கண்ணன் பிறந்த நாள்.', rule: { type: 'match', month: 4, spec: TITHI([23], 'midnight') } },
  { slug: 'vinayagar-chaturthi', nameTa: 'விநாயகர் சதுர்த்தி', nameEn: 'Vinayagar Chaturthi', icon: '🐘', blurbTa: 'ஆவணி மாத வளர்பிறை சதுர்த்தி; விநாயகர் சிலை வழிபாடு, கொழுக்கட்டை நைவேத்யம்.', rule: { type: 'match', month: 4, spec: TITHI([4], 'madhyahna') } },
  { slug: 'mahalaya-amavasai', nameTa: 'மகாளய அமாவாசை', nameEn: 'Mahalaya Amavasai', icon: '🕯️', blurbTa: 'புரட்டாசி அமாவாசை; முன்னோர்களுக்கு தர்ப்பணம் செய்ய மிகச் சிறந்த நாள்.', rule: { type: 'match', month: 5, spec: TITHI([30], 'aparahna') } },
  { slug: 'navaratri', nameTa: 'நவராத்திரி தொடக்கம்', nameEn: 'Navaratri Begins', icon: '🎎', blurbTa: 'மகாளய அமாவாசைக்கு மறுநாள் தொடங்கும் 9 நாள் கொலு, அம்மன் வழிபாடு.', rule: { type: 'afterMahalaya', days: 1 } },
  { slug: 'saraswati-pooja', nameTa: 'சரஸ்வதி / ஆயுத பூஜை', nameEn: 'Saraswati & Ayudha Pooja', icon: '📚', blurbTa: 'நவராத்திரி நவமி; புத்தகங்கள், தொழில் கருவிகளுக்கு பூஜை.', rule: { type: 'afterMahalaya', days: 8, spec: TITHI([9], 'madhyahna'), fromDay: 7, toDay: 12 } },
  { slug: 'vijayadasami', nameTa: 'விஜயதசமி', nameEn: 'Vijayadasami', icon: '🏆', blurbTa: 'நவராத்திரி முடிந்த தசமி; குழந்தைகளுக்கு வித்யாரம்பம், புதிய தொடக்கங்களுக்கு உகந்த நாள்.', rule: { type: 'afterMahalaya', days: 9, spec: TITHI([10], 'aparahna'), fromDay: 8, toDay: 13 } },
  { slug: 'deepavali', nameTa: 'தீபாவளி', nameEn: 'Deepavali', icon: '🪔', blurbTa: 'ஐப்பசி மாத தேய்பிறை சதுர்த்தசி; அதிகாலை கங்கா ஸ்நானம், புத்தாடை, பட்டாசு, இனிப்பு.', rule: { type: 'match', month: 6, spec: TITHI([29], 'sunrise') } },
  { slug: 'skanda-sashti', nameTa: 'கந்த சஷ்டி / சூரசம்ஹாரம்', nameEn: 'Skanda Sashti (Soorasamharam)', icon: '🦚', blurbTa: 'ஐப்பசி வளர்பிறை சஷ்டி; திருச்செந்தூர் சூரசம்ஹாரம், 6 நாள் விரதம்.', rule: { type: 'match', month: 6, spec: TITHI([6], 'madhyahna') } },
  { slug: 'karthigai-deepam', nameTa: 'கார்த்திகை தீபம்', nameEn: 'Karthigai Deepam', icon: '🪔', blurbTa: 'கார்த்திகை மாத கிருத்திகை நட்சத்திரம்; திருவண்ணாமலை மகா தீபம், வீடுகளில் விளக்கேற்றுதல்.', rule: { type: 'match', month: 7, spec: NAK([2], 'evening'), nearTithi: [13, 14, 15, 16, 17] } },
  { slug: 'arudra-darshan', nameTa: 'திருவாதிரை / ஆருத்ரா தரிசனம்', nameEn: 'Arudra Darshan', icon: '💃', blurbTa: 'மார்கழி திருவாதிரை நட்சத்திரம்; சிதம்பரம் நடராஜர் ஆருத்ரா தரிசனம், களி நைவேத்யம்.', rule: { type: 'match', month: 8, spec: NAK([5]) } },
  { slug: 'vaikunta-ekadashi', nameTa: 'வைகுண்ட ஏகாதசி', nameEn: 'Vaikunta Ekadashi', icon: '🚪', blurbTa: 'மார்கழி வளர்பிறை ஏகாதசி; பெருமாள் கோயில்களில் சொர்க்கவாசல் திறப்பு.', rule: { type: 'match', month: 8, spec: TITHI([11], 'sunrise') } },
  { slug: 'bhogi', nameTa: 'போகிப் பண்டிகை', nameEn: 'Bhogi', icon: '🔥', blurbTa: 'பொங்கலுக்கு முந்தைய நாள்; பழையன கழித்து புதியன புகுதல்.', rule: { type: 'solar', month: 8, day: -1 } },
  { slug: 'pongal', nameTa: 'தைப் பொங்கல்', nameEn: 'Thai Pongal', icon: '🍚', blurbTa: 'தை 1 – சூரியனுக்கு நன்றி கூறும் அறுவடைத் திருநாள்.', rule: { type: 'solar', month: 9, day: 1 } },
  { slug: 'mattu-pongal', nameTa: 'மாட்டுப் பொங்கல்', nameEn: 'Mattu Pongal', icon: '🐄', blurbTa: 'தை 2 – கால்நடைகளுக்கு நன்றி கூறும் நாள்.', rule: { type: 'solar', month: 9, day: 2 } },
  { slug: 'kaanum-pongal', nameTa: 'காணும் பொங்கல்', nameEn: 'Kaanum Pongal', icon: '👨‍👩‍👧', blurbTa: 'தை 3 – உறவினர், நண்பர்களைச் சந்திக்கும் நாள்.', rule: { type: 'solar', month: 9, day: 3 } },
  { slug: 'thai-poosam', nameTa: 'தைப்பூசம்', nameEn: 'Thaipusam', icon: '🏔️', blurbTa: 'தை மாத பூச நட்சத்திரம்; பழனி உள்ளிட்ட முருகன் தலங்களில் காவடி, பால்குட விழா.', rule: { type: 'match', month: 9, spec: NAK([7]), nearTithi: [13, 14, 15, 16, 17] } },
  { slug: 'maha-shivaratri', nameTa: 'மகா சிவராத்திரி', nameEn: 'Maha Shivaratri', icon: '🕉️', blurbTa: 'மாசி மாத தேய்பிறை சதுர்த்தசி இரவு; இரவு முழுதும் விழித்திருந்து நான்கு கால பூஜை.', rule: { type: 'match', month: 10, spec: TITHI([29], 'midnight') } },
  { slug: 'masi-magam', nameTa: 'மாசி மகம்', nameEn: 'Masi Magam', icon: '🌊', blurbTa: 'மாசி மாத மக நட்சத்திரம்; கும்பகோணம் மகாமகம் போன்ற தீர்த்தவாரி விழாக்கள்.', rule: { type: 'match', month: 10, spec: NAK([9]), nearTithi: [13, 14, 15, 16, 17] } },
  { slug: 'panguni-uthiram', nameTa: 'பங்குனி உத்திரம்', nameEn: 'Panguni Uthiram', icon: '💍', blurbTa: 'பங்குனி மாத உத்திர நட்சத்திரம்; தெய்வத் திருமணங்கள் நடைபெறும் நாள்.', rule: { type: 'match', month: 11, spec: NAK([11]), nearTithi: [13, 14, 15, 16, 17] } },
];

export function getFestival(slug: string) {
  return FESTIVALS.find((f) => f.slug === slug);
}

export interface FestivalDate {
  slug: string;
  nameTa: string;
  nameEn: string;
  icon: string;
  dateStr: string;
  weekdayTa: string;
  tamilDateTa: string;
}

const cache = new Map<number, FestivalDate[]>();

export function festivalsForYear(year: number): FestivalDate[] {
  const hit = cache.get(year);
  if (hit) return hit;

  const rows = buildDayTable(year - 1, 11, 1, 61 + 365 + 40);
  const toDate = (row: DayRow, f: FestivalMeta): FestivalDate => ({
    slug: f.slug, nameTa: f.nameTa, nameEn: f.nameEn, icon: f.icon,
    dateStr: row.dateStr,
    weekdayTa: WEEKDAYS_TAMIL[row.weekdayIndex].nameTa,
    tamilDateTa: `${TAMIL_MONTH_NAMES[row.month]} ${row.tamilDay}`,
  });

  // Mahalaya Amavasai anchors the Navaratri sequence
  const mahalaya = FESTIVALS.find((f) => f.slug === 'mahalaya-amavasai')!;
  const mahalayaIdx = (mahalaya.rule.type === 'match'
    ? matchRows(rows, mahalaya.rule.spec).filter((i) => rows[i].month === 5)
    : []);

  const out: FestivalDate[] = [];
  for (const f of FESTIVALS) {
    const picked: DayRow[] = [];
    const r = f.rule;
    if (r.type === 'solar') {
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        if (r.day === -1) {
          // Day before Thai 1 (last day of Margazhi)
          if (rows[i + 1] && rows[i + 1].month === 9 && row.month !== 9) picked.push(row);
        } else if (row.month === r.month && row.tamilDay === r.day && row.monthSeq > 1) {
          // tamilDay is only reliable from the second month of the table on (the first month starts mid-way)
          picked.push(row);
        }
      }
    } else if (r.type === 'match') {
      // Lunar month = Tamil solar month at the preceding new moon (Sun's sign then): Chaitra <=> Sun in Meena
      const lunarSunSignAt = (idx: number) => {
        for (let j = idx; j >= Math.max(0, idx - 20); j--) if (rows[j].tithi.includes(30)) return rows[j].month;
        return -1;
      };
      const cands = matchRows(
        rows,
        r.spec,
        (row) =>
          (r.month === undefined || row.month === r.month) &&
          (r.lunarSunSign === undefined || lunarSunSignAt(rows.indexOf(row)) === r.lunarSunSign) &&
          (!r.nearTithi || r.nearTithi.includes(row.tithi[0]) || r.nearTithi.includes(row.tithi[24]))
      );
      // One per month occurrence: keep the first candidate for each monthSeq
      const seen = new Set<number>();
      for (const i of cands) {
        if (!seen.has(rows[i].monthSeq)) {
          seen.add(rows[i].monthSeq);
          picked.push(rows[i]);
        }
      }
    } else {
      for (const mi of mahalayaIdx) {
        if (!r.spec) {
          if (rows[mi + r.days]) picked.push(rows[mi + r.days]);
        } else {
          const lo = mi + (r.fromDay ?? r.days);
          const hi = mi + (r.toDay ?? r.days);
          const seg = rows.slice(lo, hi + 1);
          const hits = matchRows(seg, r.spec);
          if (hits.length) picked.push(seg[hits[0]]);
        }
      }
    }
    for (const row of picked) {
      if (row.dateStr.startsWith(String(year))) out.push(toDate(row, f));
    }
  }
  out.sort((a, b) => a.dateStr.localeCompare(b.dateStr));
  cache.set(year, out);
  return out;
}
