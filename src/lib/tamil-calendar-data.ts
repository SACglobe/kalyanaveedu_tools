/**
 * Tamil Year Names (60-year cycle)
 */
export const TAMIL_YEARS = [
    "துன்முகி", "ஹேவிளம்பி", "விளம்பி", "விகாரி", "சார்வரி",
    "பிலவ", "சுபகிருது", "சோபகிருது", "குரோதி", "விசுவாசு",
    "பராவப", "பிலவங்க", "கீலக", "சௌமிய", "சாதாரண",
    "விரோதிகிருது", "பரிதாபி", "பிரமாதீச", "ஆனந்த", "ராட்சச",
    "நள", "பிங்கள", "காளயுக்தி", "சித்தார்த்தி", "ரௌத்திரி",
    "துன்மதி", "துந்துபி", "ருத்ரோத்காரி", "ரக்தாட்சி", "குரோதன",
    "அட்சய"
    // Add more if needed, but this covers 2016-2036
];

export const TAMIL_MONTHS = [
    { name: "சித்திரை", english: "Chithirai" },
    { name: "வைகாசி", english: "Vaikasi" },
    { name: "ஆனி", english: "Aani" },
    { name: "ஆடி", english: "Aadi" },
    { name: "ஆவணி", english: "Aavani" },
    { name: "புரட்டாசி", english: "Purattasi" },
    { name: "ஐப்பசி", english: "Aippasi" },
    { name: "கார்த்திகை", english: "Karthigai" },
    { name: "மார்கழி", english: "Margazhi" },
    { name: "தை", english: "Thai" },
    { name: "மாசி", english: "Maasi" },
    { name: "பங்குனி", english: "Panguni" }
];

/**
 * Sankranti (Month Start) Dates (Year index starting from 2016)
 * Format: [ {year: 2024, transits: [ {month: 0, date: 14, time: "08:57"}, ... ] } ]
 * Simplified to just dates for now, can add times for better accuracy later.
 * 0: Thai, 1: Maasi, 2: Panguni, 3: Chithirai ... 11: Margazhi
 */
export const SANKRANTI_DATA: { [key: number]: number[] } = {
    2016: [15, 13, 14, 13, 14, 15, 16, 16, 16, 17, 16, 15],
    2017: [14, 13, 14, 14, 14, 15, 16, 17, 17, 17, 16, 16],
    2018: [14, 13, 14, 14, 15, 15, 16, 17, 17, 18, 17, 16],
    2019: [14, 13, 15, 14, 15, 15, 17, 17, 17, 18, 17, 16],
    2020: [15, 13, 14, 13, 14, 15, 16, 16, 16, 17, 16, 15],
    2021: [14, 13, 14, 14, 14, 15, 16, 17, 17, 17, 16, 16],
    2022: [14, 13, 14, 14, 15, 15, 16, 17, 17, 18, 17, 16],
    2023: [14, 13, 15, 14, 15, 15, 17, 17, 17, 18, 17, 16],
    2024: [15, 13, 14, 13, 14, 15, 16, 16, 16, 17, 16, 15],
    2025: [14, 12, 14, 14, 15, 15, 16, 17, 17, 17, 16, 16],
    2026: [15, 13, 15, 14, 15, 15, 16, 17, 17, 17, 16, 16],
    2027: [15, 13, 15, 14, 15, 16, 17, 17, 17, 18, 17, 16],
    2028: [15, 13, 14, 13, 14, 15, 16, 16, 16, 17, 16, 15],
    2029: [14, 12, 14, 14, 14, 15, 16, 17, 17, 17, 16, 16],
    2030: [14, 13, 14, 14, 15, 15, 16, 17, 17, 18, 17, 16],
    2031: [14, 13, 15, 14, 15, 15, 17, 17, 17, 18, 17, 16],
    2032: [15, 13, 14, 13, 14, 15, 16, 16, 16, 17, 16, 15],
    2033: [14, 12, 14, 14, 14, 15, 16, 17, 17, 17, 16, 16],
    2034: [14, 13, 14, 14, 15, 15, 16, 17, 17, 18, 17, 16],
    2035: [14, 13, 15, 14, 15, 15, 17, 17, 17, 18, 17, 16],
    2036: [15, 13, 14, 13, 14, 15, 16, 16, 16, 17, 16, 15]
};

export const FESTIVALS: { [key: string]: string } = {
    "01-14": "போகி (Bhogi)",
    "01-15": "தைப்பொங்கல் (Thai Pongal)",
    "01-16": "மாட்டுப் பொங்கல் (Maattu Pongal)",
    "01-17": "காணும் பொங்கல் (Kaanum Pongal)",
    "04-14": "தமிழ் புத்தாண்டு (Tamil New Year / Puthandu)",
    "05-01": "உழைப்பாளர் தினம் (May Day)",
    "08-15": "சுதந்திர தினம் (Independence Day)",
    "10-02": "காந்தி ஜெயந்தி (Gandhi Jayanti)",
    "12-25": "கிறிஸ்துமஸ் (Christmas)"
};

/**
 * More precise festival rules can be added here.
 * For now, focusing on fixed solar dates.
 */

export const HOLIDAYS_2026: Record<string, string> = {
    "01-01": "New Year's Day",
    "01-14": "Bhogi Pongal",
    "01-15": "Thai Pongal",
    "01-16": "Thiruvalluvar Day",
    "01-17": "Uzhavar Tirunal",
    "01-26": "Republic Day",
    "03-20": "Telugu New Year (Ugadi)",
    "03-28": "Ramzan (Idul Fitr)",
    "04-01": "Annual accounts closing for Banks",
    "04-02": "Mahaveer Jayanthi",
    "04-03": "Good Friday",
    "04-14": "Tamil New Year / Dr.B.R. Ambedkar's Birthday",
    "05-01": "May Day",
    "06-05": "Bakrid",
    "07-06": "Muharram",
    "08-15": "Independence Day",
    "08-27": "Krishna Jayanthi",
    "09-03": "Vinayaka Chathurthi",
    "09-15": "Milad-un-Nabi",
    "10-02": "Gandhi Jayanthi",
    "10-11": "Ayutha Pooja",
    "10-12": "Vijaya Dasami",
    "10-21": "Deepavali",
    "12-25": "Christmas"
};

export const VALUABLE_MARRIAGE_DATES: string[] = [
    // 2026 Marriage Dates (Approximate standard muhurthams)
    "2026-01-23", "2026-01-26", "2026-01-30",
    "2026-02-01", "2026-02-13", "2026-02-15", "2026-02-19",
    "2026-03-05", "2026-03-06", "2026-03-09", "2026-03-23",
    "2026-04-20", "2026-04-24", "2026-04-27",
    "2026-05-01", "2026-05-04", "2026-05-07", "2026-05-15",
    "2026-06-05", "2026-06-08", "2026-06-12", "2026-06-19",
    "2026-08-20", "2026-08-24", "2026-08-31",
    "2026-09-03", "2026-09-07", "2026-10-22", "2026-10-26"
];
