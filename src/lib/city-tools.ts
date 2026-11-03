// Config for the per-city landing pages of the daily-timing tools (/tools/<tool>/<city>)
import type { TamilCity } from '@/lib/astro-core/constants';
import {
  calculateRahuKalam,
  calculateYamakandam,
  calculateKuligai,
  calculateGowriPanchangam,
  calculateChoghadiya,
} from '@/lib/astro-core/panchangam';
import { formatDateTa, formatDateEn } from '@/lib/date-format';

export type CityToolKey = 'rahu-kalam' | 'yamakandam' | 'gowri-nalla-neram' | 'choghadiya';

export const CITY_TOOLS: Record<CityToolKey, { titleTa: string; titleEn: string; keywordEn: string; icon: string }> = {
  'rahu-kalam': { titleTa: 'இன்றைய ராகு காலம்', titleEn: 'Rahu Kalam Today', keywordEn: 'Rahu Kalam today', icon: '⏰' },
  yamakandam: { titleTa: 'இன்றைய யமகண்டம் & குளிகை', titleEn: 'Yamakandam & Kuligai Today', keywordEn: 'Yamakandam today', icon: '⏳' },
  'gowri-nalla-neram': { titleTa: 'இன்றைய கவுரி நல்ல நேரம்', titleEn: 'Gowri Nalla Neram Today', keywordEn: 'Nalla Neram today', icon: '✨' },
  choghadiya: { titleTa: 'இன்றைய சோகாதியம்', titleEn: 'Choghadiya Today', keywordEn: 'Choghadiya today', icon: '🧭' },
};

export function cityToolTitle(tool: CityToolKey, city: TamilCity) {
  const t = CITY_TOOLS[tool];
  return `${t.titleTa} ${city.nameTa} | ${t.titleEn} in ${city.nameEn}`;
}

export function cityToolDescription(tool: CityToolKey, city: TamilCity) {
  const t = CITY_TOOLS[tool];
  return `${city.nameTa}யின் சூரிய உதயப்படி ${t.titleTa} – துல்லியமான நேரங்கள். ${t.keywordEn} in ${city.nameEn} with exact start and end times, updated daily.`;
}

// Plain-language answer for today (also used as the FAQ answer so the snippet shows real times)
export function citySummary(tool: CityToolKey, city: TamilCity, dateStr: string, wall: Date): { q: string; a: string } {
  const dateTa = formatDateTa(dateStr);
  switch (tool) {
    case 'rahu-kalam': {
      const r = calculateRahuKalam(wall, city);
      return {
        q: `இன்று (${dateTa}) ${city.nameTa}யில் ராகு காலம் எத்தனை மணிக்கு?`,
        a: `${dateTa} (${formatDateEn(dateStr)}) ${r.weekdayTa}க்கிழமை ${city.nameTa}யில் ராகு காலம் ${r.window.startFormatted} முதல் ${r.window.endFormatted} வரை.`,
      };
    }
    case 'yamakandam': {
      const y = calculateYamakandam(wall, city);
      const k = calculateKuligai(wall, city);
      return {
        q: `இன்று (${dateTa}) ${city.nameTa}யில் யமகண்டம், குளிகை நேரம் என்ன?`,
        a: `${dateTa} அன்று ${city.nameTa}யில் யமகண்டம் ${y.window.startFormatted} – ${y.window.endFormatted}; குளிகை ${k.window.startFormatted} – ${k.window.endFormatted}.`,
      };
    }
    case 'gowri-nalla-neram': {
      const g = calculateGowriPanchangam(wall, city);
      const good = g.daySegments.filter((s) => s.isAuspicious).map((s) => `${s.nameTa} ${s.window.startFormatted}–${s.window.endFormatted}`);
      return {
        q: `இன்று (${dateTa}) ${city.nameTa}யில் கவுரி நல்ல நேரம் எப்போது?`,
        a: `${dateTa} அன்று பகல் நேர நல்ல கவுரி: ${good.join(', ') || 'இன்று குறிப்பிடத்தக்க நல்ல நேரம் இல்லை'}.`,
      };
    }
    case 'choghadiya': {
      const c = calculateChoghadiya(wall, city);
      const good = c.daySegments.filter((s) => s.nature === 'good').map((s) => `${s.nameTa} ${s.window.startFormatted}–${s.window.endFormatted}`);
      return {
        q: `இன்று (${dateTa}) ${city.nameTa}யில் சுப சோகாதியம் எப்போது?`,
        a: `${dateTa} அன்று பகல் நேர சுப சோகாதியம்: ${good.join(', ') || 'இல்லை'}.`,
      };
    }
  }
}
