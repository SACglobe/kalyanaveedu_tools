// Tamil Astrology & Panchangam Core Constants

export interface TamilCity {
  id: string;
  nameTa: string;
  nameEn: string;
  lat: number;
  lon: number;
  utcOffset: number;
}

export const TAMIL_CITIES: TamilCity[] = [
  { id: 'chennai', nameTa: 'சென்னை', nameEn: 'Chennai', lat: 13.0827, lon: 80.2707, utcOffset: 5.5 },
  { id: 'madurai', nameTa: 'மதுரை', nameEn: 'Madurai', lat: 9.9252, lon: 78.1198, utcOffset: 5.5 },
  { id: 'coimbatore', nameTa: 'கோயம்புத்தூர்', nameEn: 'Coimbatore', lat: 11.0168, lon: 76.9558, utcOffset: 5.5 },
  { id: 'tiruchirappalli', nameTa: 'திருச்சிராப்பள்ளி', nameEn: 'Tiruchirappalli', lat: 10.7905, lon: 78.7047, utcOffset: 5.5 },
  { id: 'salem', nameTa: 'சேலம்', nameEn: 'Salem', lat: 11.6643, lon: 78.146, utcOffset: 5.5 },
  { id: 'tirunelveli', nameTa: 'திருநெல்வேலி', nameEn: 'Tirunelveli', lat: 8.7139, lon: 77.7567, utcOffset: 5.5 },
  { id: 'vellore', nameTa: 'வேலூர்', nameEn: 'Vellore', lat: 12.9165, lon: 79.1325, utcOffset: 5.5 },
  { id: 'thanjavur', nameTa: 'தஞ்சாவூர்', nameEn: 'Thanjavur', lat: 10.787, lon: 79.1378, utcOffset: 5.5 },
  { id: 'erode', nameTa: 'ஈரோடு', nameEn: 'Erode', lat: 11.341, lon: 77.7172, utcOffset: 5.5 },
  { id: 'nagercoil', nameTa: 'நாகர்கோவில்', nameEn: 'Nagercoil', lat: 8.1833, lon: 77.4119, utcOffset: 5.5 },
  { id: 'dindigul', nameTa: 'திண்டுக்கல்', nameEn: 'Dindigul', lat: 10.3673, lon: 77.9803, utcOffset: 5.5 },
  { id: 'kanchipuram', nameTa: 'காஞ்சிபுரம்', nameEn: 'Kanchipuram', lat: 12.8342, lon: 79.7036, utcOffset: 5.5 },
  { id: 'karur', nameTa: 'கரூர்', nameEn: 'Karur', lat: 10.9601, lon: 78.0766, utcOffset: 5.5 },
  { id: 'cuddalore', nameTa: 'கடலூர்', nameEn: 'Cuddalore', lat: 11.748, lon: 79.7714, utcOffset: 5.5 },
  { id: 'pudukkottai', nameTa: 'புதுக்கோட்டை', nameEn: 'Pudukkottai', lat: 10.3797, lon: 78.8208, utcOffset: 5.5 },
  { id: 'sivakasi', nameTa: 'சிவகாசி', nameEn: 'Sivakasi', lat: 9.4533, lon: 77.8024, utcOffset: 5.5 },
  { id: 'bengaluru', nameTa: 'பெங்களூரு', nameEn: 'Bengaluru', lat: 12.9716, lon: 77.5946, utcOffset: 5.5 },
  { id: 'singapore', nameTa: 'சிங்கப்பூர்', nameEn: 'Singapore', lat: 1.3521, lon: 103.8198, utcOffset: 8 },
  { id: 'kuala_lumpur', nameTa: 'கோலாலம்பூர்', nameEn: 'Kuala Lumpur', lat: 3.139, lon: 101.6869, utcOffset: 8 },
  { id: 'colombo', nameTa: 'கொழும்பு', nameEn: 'Colombo', lat: 6.9271, lon: 79.8612, utcOffset: 5.5 },
];

export interface NakshatraDetail {
  id: number;
  nameTa: string;
  nameEn: string;
  rasiIndex: number; // 0 to 11
  rasiTa: string;
  rasiEn: string;
  dashaLord: string;
  dashaLordTa: string;
  syllables: string[]; // Pada 1, 2, 3, 4 naming letters
  gana: 'deva' | 'manushya' | 'rakshasa';
  ganaTa: string;
  yoni: string;
  yoniTa: string;
  rajju: 'padham' | 'ooru' | 'naabhi' | 'kandam' | 'siro';
  rajjuTa: string;
}

export const NAKSHATRAS_LIST: NakshatraDetail[] = [
  { id: 1, nameTa: 'அஸ்வினி', nameEn: 'Ashwini', rasiIndex: 0, rasiTa: 'மேஷம்', rasiEn: 'Aries', dashaLord: 'Ketu', dashaLordTa: 'கேது', syllables: ['Chu', 'Che', 'Cho', 'La'], gana: 'deva', ganaTa: 'தேவ கணம்', yoni: 'Horse', yoniTa: 'குதிரை', rajju: 'padham', rajjuTa: 'பாத ரஜ்ஜு' },
  { id: 2, nameTa: 'பரணி', nameEn: 'Bharani', rasiIndex: 0, rasiTa: 'மேஷம்', rasiEn: 'Aries', dashaLord: 'Venus', dashaLordTa: 'சுக்கிரன்', syllables: ['Lee', 'Lu', 'Le', 'Lo'], gana: 'manushya', ganaTa: 'மனித கணம்', yoni: 'Elephant', yoniTa: 'யானை', rajju: 'ooru', rajjuTa: 'தொடை (ஊரு) ரஜ்ஜு' },
  { id: 3, nameTa: 'கிருத்திகை', nameEn: 'Krittika', rasiIndex: 0, rasiTa: 'மேஷம்/ரிஷபம்', rasiEn: 'Aries/Taurus', dashaLord: 'Sun', dashaLordTa: 'சூரியன்', syllables: ['A', 'Ee', 'U', 'Ea'], gana: 'rakshasa', ganaTa: 'ராட்சஸ கணம்', yoni: 'Goat', yoniTa: 'ஆடு', rajju: 'naabhi', rajjuTa: 'நாபி (உந்தி) ரஜ்ஜு' },
  { id: 4, nameTa: 'ரோகிணி', nameEn: 'Rohini', rasiIndex: 1, rasiTa: 'ரிஷபம்', rasiEn: 'Taurus', dashaLord: 'Moon', dashaLordTa: 'சந்திரன்', syllables: ['O', 'Va', 'Vee', 'Vu'], gana: 'manushya', ganaTa: 'மனித கணம்', yoni: 'Serpent', yoniTa: 'பாம்பு', rajju: 'kandam', rajjuTa: 'கழுத்து (கண்ட) ரஜ்ஜு' },
  { id: 5, nameTa: 'மிருகசீரிஷம்', nameEn: 'Mrigashira', rasiIndex: 1, rasiTa: 'ரிஷபம்/மிதுனம்', rasiEn: 'Taurus/Gemini', dashaLord: 'Mars', dashaLordTa: 'செவ்வாய்', syllables: ['Ve', 'Vo', 'Ka', 'Kee'], gana: 'deva', ganaTa: 'தேவ கணம்', yoni: 'Serpent', yoniTa: 'பாம்பு', rajju: 'siro', rajjuTa: 'சிரோ (தலை) ரஜ்ஜு' },
  { id: 6, nameTa: 'திருவாதிரை', nameEn: 'Thiruvathirai', rasiIndex: 2, rasiTa: 'மிதுனம்', rasiEn: 'Gemini', dashaLord: 'Rahu', dashaLordTa: 'ராகு', syllables: ['Ku', 'Gha', 'Ng', 'Chha'], gana: 'manushya', ganaTa: 'மனித கணம்', yoni: 'Dog', yoniTa: 'நாய்', rajju: 'kandam', rajjuTa: 'கழுத்து (கண்ட) ரஜ்ஜு' },
  { id: 7, nameTa: 'புனர்பூசம்', nameEn: 'Punarvasu', rasiIndex: 2, rasiTa: 'மிதுனம்/கடகம்', rasiEn: 'Gemini/Cancer', dashaLord: 'Jupiter', dashaLordTa: 'குரு', syllables: ['Ke', 'Ko', 'Ha', 'Hee'], gana: 'deva', ganaTa: 'தேவ கணம்', yoni: 'Cat', yoniTa: 'பூனை', rajju: 'naabhi', rajjuTa: 'நாபி (உந்தி) ரஜ்ஜு' },
  { id: 8, nameTa: 'பூசம்', nameEn: 'Poosam', rasiIndex: 3, rasiTa: 'கடகம்', rasiEn: 'Cancer', dashaLord: 'Saturn', dashaLordTa: 'சனி', syllables: ['Hu', 'He', 'Ho', 'Da'], gana: 'deva', ganaTa: 'தேவ கணம்', yoni: 'Goat', yoniTa: 'ஆடு', rajju: 'ooru', rajjuTa: 'தொடை (ஊரு) ரஜ்ஜு' },
  { id: 9, nameTa: 'ஆயில்யம்', nameEn: 'Ayilyam', rasiIndex: 3, rasiTa: 'கடகம்', rasiEn: 'Cancer', dashaLord: 'Mercury', dashaLordTa: 'புதன்', syllables: ['Dee', 'Du', 'De', 'Do'], gana: 'rakshasa', ganaTa: 'ராட்சஸ கணம்', yoni: 'Cat', yoniTa: 'பூனை', rajju: 'padham', rajjuTa: 'பாத ரஜ்ஜு' },
  { id: 10, nameTa: 'மகம்', nameEn: 'Magam', rasiIndex: 4, rasiTa: 'சிம்மம்', rasiEn: 'Leo', dashaLord: 'Ketu', dashaLordTa: 'கேது', syllables: ['Ma', 'Mee', 'Mu', 'Me'], gana: 'rakshasa', ganaTa: 'ராட்சஸ கணம்', yoni: 'Rat', yoniTa: 'எலி', rajju: 'padham', rajjuTa: 'பாத ரஜ்ஜு' },
  { id: 11, nameTa: 'பூரம்', nameEn: 'Pooram', rasiIndex: 4, rasiTa: 'சிம்மம்', rasiEn: 'Leo', dashaLord: 'Venus', dashaLordTa: 'சுக்கிரன்', syllables: ['Mo', 'Ta', 'Tee', 'Tu'], gana: 'manushya', ganaTa: 'மனித கணம்', yoni: 'Rat', yoniTa: 'எலி', rajju: 'ooru', rajjuTa: 'தொடை (ஊரு) ரஜ்ஜு' },
  { id: 12, nameTa: 'உத்திரம்', nameEn: 'Uthiram', rasiIndex: 4, rasiTa: 'சிம்மம்/கன்னி', rasiEn: 'Leo/Virgo', dashaLord: 'Sun', dashaLordTa: 'சூரியன்', syllables: ['Te', 'To', 'Pa', 'Pee'], gana: 'manushya', ganaTa: 'மனித கணம்', yoni: 'Cow', yoniTa: 'பசு', rajju: 'naabhi', rajjuTa: 'நாபி (உந்தி) ரஜ்ஜு' },
  { id: 13, nameTa: 'அஸ்தம்', nameEn: 'Hastham', rasiIndex: 5, rasiTa: 'கன்னி', rasiEn: 'Virgo', dashaLord: 'Moon', dashaLordTa: 'சந்திரன்', syllables: ['Pu', 'Sha', 'Na', 'Tha'], gana: 'deva', ganaTa: 'தேவ கணம்', yoni: 'Buffalo', yoniTa: 'எருமை', rajju: 'kandam', rajjuTa: 'கழுத்து (கண்ட) ரஜ்ஜு' },
  { id: 14, nameTa: 'சித்திரை', nameEn: 'Chithirai', rasiIndex: 5, rasiTa: 'கன்னி/துலாம்', rasiEn: 'Virgo/Libra', dashaLord: 'Mars', dashaLordTa: 'செவ்வாய்', syllables: ['Pe', 'Po', 'Ra', 'Ree'], gana: 'rakshasa', ganaTa: 'ராட்சஸ கணம்', yoni: 'Tiger', yoniTa: 'புலி', rajju: 'siro', rajjuTa: 'சிரோ (தலை) ரஜ்ஜு' },
  { id: 15, nameTa: 'சுவாதி', nameEn: 'Swathi', rasiIndex: 6, rasiTa: 'துலாம்', rasiEn: 'Libra', dashaLord: 'Rahu', dashaLordTa: 'ராகு', syllables: ['Ru', 'Re', 'Ro', 'Ta'], gana: 'deva', ganaTa: 'தேவ கணம்', yoni: 'Buffalo', yoniTa: 'எருமை', rajju: 'kandam', rajjuTa: 'கழுத்து (கண்ட) ரஜ்ஜு' },
  { id: 16, nameTa: 'விசாகம்', nameEn: 'Visakam', rasiIndex: 6, rasiTa: 'துலாம்/விருச்சிகம்', rasiEn: 'Libra/Scorpio', dashaLord: 'Jupiter', dashaLordTa: 'குரு', syllables: ['Tee', 'Tue', 'Te', 'To'], gana: 'rakshasa', ganaTa: 'ராட்சஸ கணம்', yoni: 'Tiger', yoniTa: 'புலி', rajju: 'naabhi', rajjuTa: 'நாபி (உந்தி) ரஜ்ஜு' },
  { id: 17, nameTa: 'அனுஷம்', nameEn: 'Anusham', rasiIndex: 7, rasiTa: 'விருச்சிகம்', rasiEn: 'Scorpio', dashaLord: 'Saturn', dashaLordTa: 'சனி', syllables: ['Na', 'Nee', 'Nu', 'Ne'], gana: 'deva', ganaTa: 'தேவ கணம்', yoni: 'Deer', yoniTa: 'மான்', rajju: 'ooru', rajjuTa: 'தொடை (ஊரு) ரஜ்ஜு' },
  { id: 18, nameTa: 'கேட்டை', nameEn: 'Kettai', rasiIndex: 7, rasiTa: 'விருச்சிகம்', rasiEn: 'Scorpio', dashaLord: 'Mercury', dashaLordTa: 'புதன்', syllables: ['No', 'Ya', 'Yee', 'Yu'], gana: 'rakshasa', ganaTa: 'ராட்சஸ கணம்', yoni: 'Deer', yoniTa: 'மான்', rajju: 'padham', rajjuTa: 'பாத ரஜ்ஜு' },
  { id: 19, nameTa: 'மூலம்', nameEn: 'Moolam', rasiIndex: 8, rasiTa: 'தனுசு', rasiEn: 'Sagittarius', dashaLord: 'Ketu', dashaLordTa: 'கேது', syllables: ['Ye', 'Yo', 'Bha', 'Bhee'], gana: 'rakshasa', ganaTa: 'ராட்சஸ கணம்', yoni: 'Dog', yoniTa: 'நாய்', rajju: 'padham', rajjuTa: 'பாத ரஜ்ஜு' },
  { id: 20, nameTa: 'பூராடம்', nameEn: 'Pooradam', rasiIndex: 8, rasiTa: 'தனுசு', rasiEn: 'Sagittarius', dashaLord: 'Venus', dashaLordTa: 'சுக்கிரன்', syllables: ['Bhu', 'Dha', 'Pha', 'Dha'], gana: 'manushya', ganaTa: 'மனித கணம்', yoni: 'Monkey', yoniTa: 'குரங்கு', rajju: 'ooru', rajjuTa: 'தொடை (ஊரு) ரஜ்ஜு' },
  { id: 21, nameTa: 'உத்திராடம்', nameEn: 'Uthiradam', rasiIndex: 8, rasiTa: 'தனுசு/மகரம்', rasiEn: 'Sagittarius/Capricorn', dashaLord: 'Sun', dashaLordTa: 'சூரியன்', syllables: ['Bhe', 'Bho', 'Ja', 'Jee'], gana: 'manushya', ganaTa: 'மனித கணம்', yoni: 'Mongoose', yoniTa: 'கீரி', rajju: 'naabhi', rajjuTa: 'நாபி (உந்தி) ரஜ்ஜு' },
  { id: 22, nameTa: 'திருவோணம்', nameEn: 'Thiruvonam', rasiIndex: 9, rasiTa: 'மகரம்', rasiEn: 'Capricorn', dashaLord: 'Moon', dashaLordTa: 'சந்திரன்', syllables: ['Khi', 'Khoo', 'Khe', 'Kho'], gana: 'deva', ganaTa: 'தேவ கணம்', yoni: 'Monkey', yoniTa: 'குரங்கு', rajju: 'kandam', rajjuTa: 'கழுத்து (கண்ட) ரஜ்ஜு' },
  { id: 23, nameTa: 'அவிட்டம்', nameEn: 'Avittam', rasiIndex: 9, rasiTa: 'மகரம்/கும்பம்', rasiEn: 'Capricorn/Aquarius', dashaLord: 'Mars', dashaLordTa: 'செவ்வாய்', syllables: ['Ga', 'Gee', 'Gu', 'Ge'], gana: 'rakshasa', ganaTa: 'ராட்சஸ கணம்', yoni: 'Lion', yoniTa: 'சிங்கம்', rajju: 'siro', rajjuTa: 'சிரோ (தலை) ரஜ்ஜு' },
  { id: 24, nameTa: 'சதயம்', nameEn: 'Sathayam', rasiIndex: 10, rasiTa: 'கும்பம்', rasiEn: 'Aquarius', dashaLord: 'Rahu', dashaLordTa: 'ராகு', syllables: ['Go', 'Sa', 'See', 'Su'], gana: 'rakshasa', ganaTa: 'ராட்சஸ கணம்', yoni: 'Horse', yoniTa: 'குதிரை', rajju: 'kandam', rajjuTa: 'கழுத்து (கண்ட) ரஜ்ஜு' },
  { id: 25, nameTa: 'பூரட்டாதி', nameEn: 'Poorattathi', rasiIndex: 10, rasiTa: 'கும்பம்/மீனம்', rasiEn: 'Aquarius/Pisces', dashaLord: 'Jupiter', dashaLordTa: 'குரு', syllables: ['Se', 'So', 'Dha', 'Dhee'], gana: 'manushya', ganaTa: 'மனித கணம்', yoni: 'Lion', yoniTa: 'சிங்கம்', rajju: 'naabhi', rajjuTa: 'நாபி (உந்தி) ரஜ்ஜு' },
  { id: 26, nameTa: 'உத்திரட்டாதி', nameEn: 'Uthirattathi', rasiIndex: 11, rasiTa: 'மீனம்', rasiEn: 'Pisces', dashaLord: 'Saturn', dashaLordTa: 'சனி', syllables: ['Dhu', 'Shya', 'Jha', 'Da'], gana: 'manushya', ganaTa: 'மனித கணம்', yoni: 'Cow', yoniTa: 'பசு', rajju: 'ooru', rajjuTa: 'தொடை (ஊரு) ரஜ்ஜு' },
  { id: 27, nameTa: 'ரேவதி', nameEn: 'Revathi', rasiIndex: 11, rasiTa: 'மீனம்', rasiEn: 'Pisces', dashaLord: 'Mercury', dashaLordTa: 'புதன்', syllables: ['De', 'Do', 'Cha', 'Chee'], gana: 'deva', ganaTa: 'தேவ கணம்', yoni: 'Elephant', yoniTa: 'யானை', rajju: 'padham', rajjuTa: 'பாத ரஜ்ஜு' },
];

export interface RasiDetail {
  id: number; // 0 to 11
  nameTa: string;
  nameEn: string;
  lordTa: string;
  lordEn: string;
  elementTa: string;
  elementEn: string;
  symbol: string;
}

export const RASIS_LIST: RasiDetail[] = [
  { id: 0, nameTa: 'மேஷம்', nameEn: 'Mesha (Aries)', lordTa: 'செவ்வாய்', lordEn: 'Mars', elementTa: 'நெருப்பு', elementEn: 'Fire', symbol: '♈' },
  { id: 1, nameTa: 'ரிஷபம்', nameEn: 'Vrishabha (Taurus)', lordTa: 'சுக்கிரன்', lordEn: 'Venus', elementTa: 'நிலம்', elementEn: 'Earth', symbol: '♉' },
  { id: 2, nameTa: 'மிதுனம்', nameEn: 'Mithuna (Gemini)', lordTa: 'புதன்', lordEn: 'Mercury', elementTa: 'காற்று', elementEn: 'Air', symbol: '♊' },
  { id: 3, nameTa: 'கடகம்', nameEn: 'Kataka (Cancer)', lordTa: 'சந்திரன்', lordEn: 'Moon', elementTa: 'நீர்', elementEn: 'Water', symbol: '♋' },
  { id: 4, nameTa: 'சிம்மம்', nameEn: 'Simha (Leo)', lordTa: 'சூரியன்', lordEn: 'Sun', elementTa: 'நெருப்பு', elementEn: 'Fire', symbol: '♌' },
  { id: 5, nameTa: 'கன்னி', nameEn: 'Kanya (Virgo)', lordTa: 'புதன்', lordEn: 'Mercury', elementTa: 'நிலம்', elementEn: 'Earth', symbol: '♍' },
  { id: 6, nameTa: 'துலாம்', nameEn: 'Thula (Libra)', lordTa: 'சுக்கிரன்', lordEn: 'Venus', elementTa: 'காற்று', elementEn: 'Air', symbol: '♎' },
  { id: 7, nameTa: 'விருச்சிகம்', nameEn: 'Vrischika (Scorpio)', lordTa: 'செவ்வாய்', lordEn: 'Mars', elementTa: 'நீர்', elementEn: 'Water', symbol: '♏' },
  { id: 8, nameTa: 'தனுசு', nameEn: 'Dhanus (Sagittarius)', lordTa: 'குரு', lordEn: 'Jupiter', elementTa: 'நெருப்பு', elementEn: 'Fire', symbol: '♐' },
  { id: 9, nameTa: 'மகரம்', nameEn: 'Makara (Capricorn)', lordTa: 'சனி', lordEn: 'Saturn', elementTa: 'நிலம்', elementEn: 'Earth', symbol: '♑' },
  { id: 10, nameTa: 'கும்பம்', nameEn: 'Kumbha (Aquarius)', lordTa: 'சனி', lordEn: 'Saturn', elementTa: 'காற்று', elementEn: 'Air', symbol: '♒' },
  { id: 11, nameTa: 'மீனம்', nameEn: 'Meena (Pisces)', lordTa: 'குரு', lordEn: 'Jupiter', elementTa: 'நீர்', elementEn: 'Water', symbol: '♓' },
];

export const DASHA_YEARS: Record<string, number> = {
  Ketu: 7,
  Venus: 20,
  Sun: 6,
  Moon: 10,
  Mars: 7,
  Rahu: 18,
  Jupiter: 16,
  Saturn: 19,
  Mercury: 17,
};

export const DASHA_ORDER = [
  'Ketu',
  'Venus',
  'Sun',
  'Moon',
  'Mars',
  'Rahu',
  'Jupiter',
  'Saturn',
  'Mercury',
] as const;

export const WEEKDAYS_TAMIL = [
  { index: 0, nameTa: 'ஞாயிறு', nameEn: 'Sunday', planetTa: 'சூரியன்' },
  { index: 1, nameTa: 'திங்கள்', nameEn: 'Monday', planetTa: 'சந்திரன்' },
  { index: 2, nameTa: 'செவ்வாய்', nameEn: 'Tuesday', planetTa: 'செவ்வாய்' },
  { index: 3, nameTa: 'புதன்', nameEn: 'Wednesday', planetTa: 'புதன்' },
  { index: 4, nameTa: 'வியாழன்', nameEn: 'Thursday', planetTa: 'குரு' },
  { index: 5, nameTa: 'வெள்ளி', nameEn: 'Friday', planetTa: 'சுக்கிரன்' },
  { index: 6, nameTa: 'சனி', nameEn: 'Saturday', planetTa: 'சனி' },
];
