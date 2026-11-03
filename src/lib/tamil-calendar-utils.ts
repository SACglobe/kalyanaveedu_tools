import { TAMIL_MONTHS, TAMIL_YEARS, SANKRANTI_DATA } from './tamil-calendar-data';
import { TAMIL_CITIES, NAKSHATRAS_LIST, RASIS_LIST } from './astro-core/constants';
import { computePanchangLite, tithiName } from './astro-core/panchang-day';
import { isViratham } from './viratham';

export interface TamilDateResult {
    tamilDay: number;
    tamilMonth: string;
    tamilMonthEnglish: string;
    tamilYear: string;
    yearIndex: number;
}

export interface PanchangamResult {
    tithi: string;
    tithiEndTime: string;
    nextTithi: string;
    nakshatra: string;
    nakshatraEndTime: string;
    nextNakshatra: string;
    yoga: string;
    chandrashtamam: string;
    isPournami: boolean;
    isAmavasai: boolean;
}

export interface MuhurthamResult {
    rahuKaalam: string;
    yamagandam: string;
    kulikai: string;
    nallaNeram: string[];
    gowriNallaNeram: string[];
}

const TITHIS = [
    "பிரதமை (Prathamai)", "துவிதியை (Dwitiyai)", "திருதியை (Tritiyai)", "சதுர்த்தி (Chaturthi)", "பஞ்சமி (Panchami)",
    "சஷ்டி (Shashti)", "சப்தமி (Saptami)", "அஷ்டமி (Ashtami)", "நவமி (Navami)", "தசமி (Dashami)",
    "ஏகாதசி (Ekadashi)", "துவாதசி (Dwadashi)", "திரயோதசி (Trayodashi)", "சதுர்த்தசி (Chaturdashi)", "பௌர்ணமி/அமாவாசை (Pournami/Amavasai)"
];

const NAKSHATRAS = [
    "அஸ்வினி (Ashwini)", "பரணி (Bharani)", "கார்த்திகை (Krithika)", "ரோகிணி (Rohini)", "மிருகசீரிடம் (Mrigashirsha)",
    "திருவாதிரை (Arudra)", "புனர்பூசம் (Punarvasu)", "பூசம் (Pushya)", "ஆயில்யம் (Ashlesha)", "மகம் (Magha)",
    "பூரம் (Purva Phalguni)", "உத்திரம் (Uttara Phalguni)", "அஸ்தம் (Hasta)", "சித்திரை (Chitra)", "சுவாதி (Swati)",
    "விசாகம் (Vishakha)", "அனுஷம் (Anuradha)", "கேட்டை (Jyeshtha)", "மூலம் (Moola)", "பூராடம் (Purva Ashadha)",
    "உத்திராடம் (Uttara Ashadha)", "திருவோணம் (Shravana)", "அவிட்டம் (Dhanishta)", "சதயம் (Shatabhisha)",
    "பூரட்டாதி (Purva Bhadrapada)", "உத்திரட்டாதி (Uttara Bhadrapada)", "ரேவதி (Revati)"
];

const TAMIL_DAYS = ["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"];
const TAMIL_DAYS_ENG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/**
 * Calculates Tamil Date from Gregorian Date
 */
export function getTamilDate(date: Date): TamilDateResult {
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-indexed
    const day = date.getDate();

    const sankrantiDates = SANKRANTI_DATA[year] || SANKRANTI_DATA[2024]; // Fallback to 2024 for testing

    // Find which Tamil month we are in
    // Tamil months start in one Gregorian month and end in the next.
    // Index 0: Thai (Starts Jan 14/15)
    // Index 1: Maasi (Starts Feb 12/13)
    // ...
    // Index 11: Margazhi (Starts Dec 15/16)

    let tamilMonthIdx = -1;
    let tamilDay = -1;

    // Shift Gregorian month index to align with Tamil months starting in Jan
    // Jan is usually either Margazhi or Thai
    const janStart = sankrantiDates[0];
    const febStart = sankrantiDates[1];
    const marStart = sankrantiDates[2];
    const aprStart = sankrantiDates[3];
    const mayStart = sankrantiDates[4];
    const junStart = sankrantiDates[5];
    const julStart = sankrantiDates[6];
    const augStart = sankrantiDates[7];
    const sepStart = sankrantiDates[8];
    const octStart = sankrantiDates[9];
    const novStart = sankrantiDates[10];
    const decStart = sankrantiDates[11];

    const starts = [janStart, febStart, marStart, aprStart, mayStart, junStart, julStart, augStart, sepStart, octStart, novStart, decStart];

    // Current month start
    const currentMonthStart = starts[month];

    if (day >= currentMonthStart) {
        // We are in the Tamil month that starts in this Gregorian month
        // Gregorian Jan (0) -> Thai (Idx 9 in TAMIL_MONTHS if sorted Chithirai-Panguni)
        // Let's re-map TAMIL_MONTHS to start from Thai for calculation?
        // Actually TAMIL_MONTHS is Chithirai (0) to Panguni (11)
        // Chithirai starts in April.
        // Jan: Starts Thai (Idx 9)
        tamilMonthIdx = (month + 9) % 12;
        tamilDay = day - currentMonthStart + 1;
    } else {
        // We are in the Tamil month that started in the previous Gregorian month
        tamilMonthIdx = (month + 8) % 12;
        const prevMonth = month === 0 ? 11 : month - 1;
        const prevYear = month === 0 ? year - 1 : year;
        const prevStarts = SANKRANTI_DATA[prevYear] || SANKRANTI_DATA[2024];
        const prevMonthStart = prevStarts[prevMonth];

        // Days in previous Gregorian month
        const daysInPrevMonth = new Date(year, month, 0).getDate();
        tamilDay = (daysInPrevMonth - prevMonthStart + 1) + day;
    }

    // Tamil Year Name
    // New Year (Chithirai 1) happens in April.
    // If month is before April or before Chithirai 1 in April, it's the previous Tamil Year.
    let tamilYearBase = year - 2016;
    if (month < 3 || (month === 3 && day < aprStart)) {
        tamilYearBase--;
    }
    const tamilYearName = TAMIL_YEARS[tamilYearBase] || "வைகார"; // Fallback

    return {
        tamilDay,
        tamilMonth: TAMIL_MONTHS[tamilMonthIdx].name,
        tamilMonthEnglish: TAMIL_MONTHS[tamilMonthIdx].english,
        tamilYear: tamilYearName,
        yearIndex: tamilYearBase
    };
}

/**
 * Astronomical formulas for Tithi and Nakshatra
 * Based on simplified planetary positions with Lahiri Ayanamsa adjustment
 */
const YOGAS = [
    "விஷ்கம்பம்", "பிரீதி", "ஆயுஷ்மான்", "சௌபாக்கியம்", "சோபனம்", "அதிகண்டம்", "சுகர்மம்", "திருதி", "சூலம்",
    "கண்டம்", "விருத்தி", "துருவம்", "வியாகாதம்", "ஹர்ஷணம்", "வஜ்ரம்", "சித்தி", "வியதீபாதம்", "வாரியான்",
    "பரிகம்", "சிவம்", "சித்தம்", "சாத்தியம்", "சுபம்", "சுப்பிரம்", "பிராமியம்", "ஐந்தரம்", "வைதிருதி"
];

const panchangamCache = new Map<string, PanchangamResult>();

// Panchangam for a calendar day (Chennai, values at sunrise with end times), computed by the same engine as the
// /panchangam pages so every page agrees. Cached because the month grids call this for every visible day.
export function getPanchangam(date: Date): PanchangamResult {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const key = `${y}-${m}-${d}`;
    const hit = panchangamCache.get(key);
    if (hit) return hit;

    const p = computePanchangLite(y, m, d, TAMIL_CITIES[0]);
    const dateStr = p.dateStr;
    const endText = (end: string, nextDay: boolean) => `${end}${nextDay ? ' (அடுத்த நாள்)' : ''}`;

    const isAmavasai = isViratham('amavasai', dateStr);
    const isPournami = isViratham('pournami', dateStr);

    const t0 = p.tithiSegments[0];
    const pakshaLabel = t0.name.paksha === 'krishna' ? 'தேய்பிறை (Krishna Paksham)' : 'வளர்பிறை (Sukla Paksham)';
    let tithi = `${t0.name.ta} - ${pakshaLabel}`;
    if (isAmavasai) tithi = 'அமாவாசை (Amavasai) - தேய்பிறை (Krishna Paksham)';
    else if (isPournami) tithi = 'பௌர்ணமி (Pournami) - வளர்பிறை (Sukla Paksham)';

    const nextTithiNum = p.tithiSegments[1] ? p.tithiSegments[1].num : (t0.num % 30) + 1;
    const n0 = p.nakshatraSegments[0];
    const nextNak = p.nakshatraSegments[1] ? p.nakshatraSegments[1] : null;

    // Chandrashtamam: janma rasi for which today's Moon is the 8th house
    const janmaRasiIdx = (p.moonRasiIndexAtSunrise - 7 + 12) % 12;
    const janmaRasiTa = RASIS_LIST[janmaRasiIdx].nameTa;
    const chandrashtamam = NAKSHATRAS_LIST.filter((n) => n.rasiTa.split('/').includes(janmaRasiTa)).map((n) => n.nameTa).join(', ');

    const result: PanchangamResult = {
        tithi,
        tithiEndTime: endText(t0.endFormatted, t0.endsNextDay),
        nextTithi: tithiName(nextTithiNum).ta,
        nakshatra: `${n0.nameTa} (${n0.nameEn})`,
        nakshatraEndTime: endText(n0.endFormatted, n0.endsNextDay),
        nextNakshatra: nextNak ? nextNak.nameTa : NAKSHATRAS_LIST[(n0.index + 1) % 27].nameTa,
        yoga: p.yogaSegments[0].nameTa,
        chandrashtamam,
        isPournami,
        isAmavasai,
    };
    panchangamCache.set(key, result);
    return result;
}

export function getMuhurthamTimes(date: Date): MuhurthamResult {
    const day = date.getDay(); // 0 is Sunday

    // Standard segments (approx based on 6am-6pm)
    const rahuKaalamTable = [
        "04:30 PM - 06:00 PM", // Sun
        "07:30 AM - 09:00 AM", // Mon
        "03:00 PM - 04:30 PM", // Tue
        "12:00 PM - 01:30 PM", // Wed
        "01:30 PM - 03:00 PM", // Thu
        "10:30 AM - 12:00 PM", // Fri
        "09:00 AM - 10:30 AM"  // Sat
    ];

    const yamagandamTable = [
        "12:00 PM - 01:30 PM", // Sun
        "10:30 AM - 12:00 PM", // Mon
        "09:00 AM - 10:30 AM", // Tue
        "07:30 AM - 09:00 AM", // Wed
        "06:00 AM - 07:30 AM", // Thu
        "03:00 PM - 04:30 PM", // Fri
        "01:30 PM - 03:00 PM"  // Sat
    ];

    const kulikaiTable = [
        "03:00 PM - 04:30 PM", // Sun
        "01:30 PM - 03:00 PM", // Mon
        "12:00 PM - 01:30 PM", // Tue
        "10:30 AM - 12:00 PM", // Wed
        "09:00 AM - 10:30 AM", // Thu
        "07:30 AM - 09:00 AM", // Wed (Fri?)
        "06:00 AM - 07:30 AM"  // Sat
    ];
    // Correcting Fri Kulikai
    kulikaiTable[5] = "07:30 AM - 09:00 AM";

    // Standard Nalla Neram (can be more complex, but using common slots)
    const nallaNeramSlots = [
        ["07:30 AM - 08:30 AM", "04:30 PM - 05:30 PM"], // Sun
        ["06:00 AM - 07:30 AM", "04:30 PM - 05:30 PM"], // Mon
        ["07:30 AM - 08:30 AM", "04:30 PM - 05:30 PM"], // Tue
        ["09:00 AM - 10:30 AM", "04:30 PM - 05:30 PM"], // Wed
        ["09:00 AM - 10:30 AM", "04:30 PM - 05:30 PM"], // Thu
        ["09:00 AM - 10:30 AM", "04:30 PM - 05:30 PM"], // Fri
        ["07:30 AM - 08:30 AM", "04:30 PM - 05:30 PM"]  // Sat
    ];

    return {
        rahuKaalam: rahuKaalamTable[day],
        yamagandam: yamagandamTable[day],
        kulikai: kulikaiTable[day],
        nallaNeram: nallaNeramSlots[day],
        gowriNallaNeram: ["10:30 AM - 11:30 AM", "07:30 PM - 08:30 PM"] // Fixed for example
    };
}

function getJulianDay(date: Date): number {
    return (date.getTime() / 86400000) + 2440587.5;
}

function getSunLongitude(jd: number): number {
    const d = jd - 2451545.0;
    const g = (357.529 + 0.98560028 * d) % 360;
    const q = (280.459 + 0.98564736 * d) % 360;
    const l = (q + 1.915 * Math.sin(g * Math.PI / 180) + 0.020 * Math.sin(2 * g * Math.PI / 180)) % 360;
    return l;
}

function getMoonLongitude(jd: number): number {
    const d = jd - 2451545.0;
    const l = (218.316 + 13.176396 * d) % 360;
    const m = (134.963 + 13.064993 * d) % 360;
    const f = (93.272 + 13.229350 * d) % 360;

    const longitude = (l + 6.289 * Math.sin(m * Math.PI / 180)) % 360;
    return longitude;
}

export function getTamilDayName(date: Date): string {
    return TAMIL_DAYS[date.getDay()];
}

export function getTamilDayNameEng(date: Date): string {
    return TAMIL_DAYS_ENG[date.getDay()];
}
