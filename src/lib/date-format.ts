// Calendar-date helpers that never touch the runtime time zone (everything is plain y/m/d arithmetic via UTC)

export const GREG_MONTHS_TA = ['ஜனவரி', 'பிப்ரவரி', 'மார்ச்', 'ஏப்ரல்', 'மே', 'ஜூன்', 'ஜூலை', 'ஆகஸ்ட்', 'செப்டம்பர்', 'அக்டோபர்', 'நவம்பர்', 'டிசம்பர்'];
export const GREG_MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export interface YMD {
  y: number;
  m: number; // 1..12
  d: number;
}

export function parseDateStr(s: string): YMD | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!match) return null;
  const y = Number(match[1]);
  const m = Number(match[2]);
  const d = Number(match[3]);
  const dt = new Date(Date.UTC(y, m - 1, d));
  if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== m - 1 || dt.getUTCDate() !== d) return null;
  return { y, m, d };
}

export function toDateStr({ y, m, d }: YMD): string {
  return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

export function addDays(s: string, n: number): string {
  const p = parseDateStr(s)!;
  const dt = new Date(Date.UTC(p.y, p.m - 1, p.d + n));
  return toDateStr({ y: dt.getUTCFullYear(), m: dt.getUTCMonth() + 1, d: dt.getUTCDate() });
}

export function formatDateTa(s: string): string {
  const p = parseDateStr(s)!;
  return `${p.d} ${GREG_MONTHS_TA[p.m - 1]} ${p.y}`;
}

export function formatDateEn(s: string): string {
  const p = parseDateStr(s)!;
  return `${p.d} ${GREG_MONTHS_EN[p.m - 1]} ${p.y}`;
}

// Dates we are willing to generate pages for (astronomy stays accurate; avoids crawl-trap infinite dates)
export function isSupportedDate(s: string): boolean {
  const p = parseDateStr(s);
  return !!p && p.y >= 2024 && p.y <= 2035;
}
