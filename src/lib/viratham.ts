import { TAMIL_CITIES } from '@/lib/astro-core/constants';
import { TAMIL_MONTH_NAMES } from '@/lib/astro-core/panchang-day';
import { buildDayTable, matchRows, type MatchSpec } from '@/lib/astro-core/observances';
import { parseDateStr, formatDateTa, formatDateEn, addDays } from '@/lib/date-format';
import { WEEKDAYS_TAMIL } from '@/lib/astro-core/constants';

export type VirathamType =
  | 'amavasai'
  | 'pournami'
  | 'ekadashi'
  | 'sashti'
  | 'pradosham'
  | 'sankatahara-chaturthi'
  | 'karthigai';

// The observance day is the one where the tithi/nakshatra covers most of the relevant window (Amavasai: afternoon / aparahna)
export const VIRATHAM_SPECS: Record<VirathamType, MatchSpec> = {
  amavasai: { kind: 'tithi', targets: [30], window: 'aparahna' },
  pournami: { kind: 'tithi', targets: [15], window: 'day' },
  ekadashi: { kind: 'tithi', targets: [11, 26], window: 'day' },
  sashti: { kind: 'tithi', targets: [6, 21], window: 'madhyahna' },
  pradosham: { kind: 'tithi', targets: [13, 28], window: 'pradosha' },
  'sankatahara-chaturthi': { kind: 'tithi', targets: [19], window: 'moonrise' },
  karthigai: { kind: 'nakshatra', targets: [2], window: 'day' },
};

export interface VirathamMeta {
  type: VirathamType;
  titleTa: string;
  titleEn: string;
  icon: string;
  blurbTa: string;
  faqQ: string;
  faqA: string;
}

export const VIRATHAM_LIST: VirathamMeta[] = [
  {
    type: 'amavasai', titleTa: 'அமாவாசை', titleEn: 'Amavasai', icon: '🌑',
    blurbTa: 'அமாவாசை நாளில் முன்னோர்களுக்கு தர்ப்பணம், அன்னதானம் செய்வது மரபு.',
    faqQ: 'அமாவாசை அன்று என்ன செய்ய வேண்டும்?',
    faqA: 'முன்னோர்களுக்கு தர்ப்பணம் செய்தல், எள்ளும் நீரும் இறைத்தல், அன்னதானம் செய்தல், கோயில் வழிபாடு ஆகியவை மரபு. சுப காரியங்கள் பொதுவாகத் தவிர்க்கப்படும்.',
  },
  {
    type: 'pournami', titleTa: 'பௌர்ணமி', titleEn: 'Pournami (Full Moon)', icon: '🌕',
    blurbTa: 'பௌர்ணமி அன்று சத்யநாராயண பூஜை, கிரிவலம், அம்மன் வழிபாடு சிறப்பு.',
    faqQ: 'பௌர்ணமி அன்று கிரிவலம் செல்வது ஏன்?',
    faqA: 'பௌர்ணமி இரவில் திருவண்ணாமலை போன்ற தலங்களில் கிரிவலம் செல்வது புண்ணியம் தரும் என்பது நம்பிக்கை. சத்யநாராயண பூஜையும் இந்நாளில் செய்யப்படுகிறது.',
  },
  {
    type: 'ekadashi', titleTa: 'ஏகாதசி', titleEn: 'Ekadashi', icon: '🪷',
    blurbTa: 'ஏகாதசி அன்று விரதம் இருந்து பெருமாளை வழிபடுவது மரபு.',
    faqQ: 'ஏகாதசி விரதம் எப்படி இருப்பது?',
    faqA: 'ஏகாதசி அன்று உணவைத் தவிர்த்து (அல்லது பழம், பால் மட்டும்) பெருமாளை வழிபட்டு, மறுநாள் துவாதசி அன்று காலை பாரணை செய்வது வழக்கம்.',
  },
  {
    type: 'sashti', titleTa: 'சஷ்டி', titleEn: 'Sashti', icon: '🔱',
    blurbTa: 'சஷ்டி அன்று முருகப்பெருமானுக்கு விரதம் இருப்பது சிறப்பு.',
    faqQ: 'சஷ்டி விரதம் ஏன் இருக்கிறார்கள்?',
    faqA: 'முருகப்பெருமானின் அருளைப் பெற சஷ்டி திதியில் விரதம் இருப்பர். குழந்தைப் பேறு, தடைகள் நீங்க இது சிறப்பாகக் கருதப்படுகிறது.',
  },
  {
    type: 'pradosham', titleTa: 'பிரதோஷம்', titleEn: 'Pradosham', icon: '🔔',
    blurbTa: 'பிரதோஷ வேளையில் (மாலை) சிவன் கோயிலில் நந்தி வழிபாடு சிறப்பு.',
    faqQ: 'பிரதோஷ நேரம் எது?',
    faqA: 'திரயோதசி திதியில் சூரிய அஸ்தமனத்திற்கு சுமார் ஒன்றரை மணி நேரம் முன்பு முதல் ஒன்றரை மணி நேரம் பின்பு வரை பிரதோஷ காலம். இந்நேரத்தில் சிவன் கோயிலில் அபிஷேகம், நந்தி வழிபாடு செய்யப்படும்.',
  },
  {
    type: 'sankatahara-chaturthi', titleTa: 'சங்கடஹர சதுர்த்தி', titleEn: 'Sankatahara Chaturthi', icon: '🐘',
    blurbTa: 'தேய்பிறை சதுர்த்தியில் விநாயகருக்கு விரதம் இருந்து சந்திர தரிசனத்திற்குப் பின் உணவு உண்பர்.',
    faqQ: 'சங்கடஹர சதுர்த்தி என்றால் என்ன?',
    faqA: 'தேய்பிறை சதுர்த்தி திதியில் விநாயகப் பெருமானை நினைத்து விரதம் இருந்து, மாலையில் வழிபட்டு சந்திர உதயத்திற்குப் பின் விரதம் முடிப்பது சங்கடஹர சதுர்த்தி. துன்பங்கள் நீங்கும் என்பது நம்பிக்கை.',
  },
  {
    type: 'karthigai', titleTa: 'கார்த்திகை விரதம்', titleEn: 'Karthigai Nakshatra', icon: '🔥',
    blurbTa: 'கிருத்திகை நட்சத்திர நாளில் முருகன் கோயில்களில் சிறப்பு வழிபாடு.',
    faqQ: 'கார்த்திகை விரதம் என்றால் என்ன?',
    faqA: 'கிருத்திகை நட்சத்திரம் முருகப்பெருமானுக்கு உகந்தது. மாதந்தோறும் வரும் இந்நாளில் விரதம் இருந்து முருகன் கோயிலுக்குச் செல்வது வழக்கம்.',
  },
];

export const VIRATHAM_SLUGS = VIRATHAM_LIST.map((v) => v.type);

export function getVirathamMeta(slug: string) {
  return VIRATHAM_LIST.find((v) => v.type === slug);
}

export interface VirathamEntry {
  dateStr: string;
  weekdayTa: string;
  tamilDateTa: string;
}

export function upcomingViratham(type: VirathamType, fromDateStr: string, days: number): VirathamEntry[] {
  const city = TAMIL_CITIES[0];
  // Start a few weeks early so the Tamil day-of-month is reliable, and pad both ends for the local-maximum test
  const lead = 40;
  const start = parseDateStr(addDays(fromDateStr, -lead))!;
  const rows = buildDayTable(start.y, start.m, start.d, lead + days + 2, city);
  return matchRows(rows, VIRATHAM_SPECS[type])
    .map((i) => rows[i])
    .filter((r) => r.dateStr >= fromDateStr && r.dateStr < addDays(fromDateStr, days))
    .map((r) => ({
      dateStr: r.dateStr,
      weekdayTa: WEEKDAYS_TAMIL[r.weekdayIndex].nameTa,
      tamilDateTa: `${TAMIL_MONTH_NAMES[r.month]} ${r.tamilDay}`,
    }));
}

// Is `dateStr` the observance day for `type`? Used by the calendar pages so they agree with the viratham pages.
export function isViratham(type: VirathamType, dateStr: string): boolean {
  const start = parseDateStr(addDays(dateStr, -2))!;
  const rows = buildDayTable(start.y, start.m, start.d, 5, TAMIL_CITIES[0]);
  return matchRows(rows, VIRATHAM_SPECS[type]).some((i) => rows[i].dateStr === dateStr);
}

export { formatDateTa, formatDateEn };
