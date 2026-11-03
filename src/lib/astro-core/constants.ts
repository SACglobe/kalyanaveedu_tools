// Tamil Astrology & Panchangam Core Constants

export interface TamilCity {
  id: string;
  nameTa: string;
  nameEn: string;
  lat: number;
  lon: number;
  utcOffset: number; // standard offset (hours); the real offset comes from tz when the city observes DST
  tz?: string; // IANA time zone for cities with daylight saving
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
  { id: 'tiruppur', nameTa: 'திருப்பூர்', nameEn: 'Tiruppur', lat: 11.1085, lon: 77.3411, utcOffset: 5.5 },
  { id: 'thoothukudi', nameTa: 'தூத்துக்குடி', nameEn: 'Thoothukudi', lat: 8.7642, lon: 78.1348, utcOffset: 5.5 },
  { id: 'tiruvannamalai', nameTa: 'திருவண்ணாமலை', nameEn: 'Tiruvannamalai', lat: 12.2253, lon: 79.0747, utcOffset: 5.5 },
  { id: 'villupuram', nameTa: 'விழுப்புரம்', nameEn: 'Villupuram', lat: 11.9401, lon: 79.4861, utcOffset: 5.5 },
  { id: 'namakkal', nameTa: 'நாமக்கல்', nameEn: 'Namakkal', lat: 11.2189, lon: 78.1677, utcOffset: 5.5 },
  { id: 'dharmapuri', nameTa: 'தர்மபுரி', nameEn: 'Dharmapuri', lat: 12.1211, lon: 78.1582, utcOffset: 5.5 },
  { id: 'krishnagiri', nameTa: 'கிருஷ்ணகிரி', nameEn: 'Krishnagiri', lat: 12.5186, lon: 78.2138, utcOffset: 5.5 },
  { id: 'hosur', nameTa: 'ஓசூர்', nameEn: 'Hosur', lat: 12.7409, lon: 77.8253, utcOffset: 5.5 },
  { id: 'ramanathapuram', nameTa: 'ராமநாதபுரம்', nameEn: 'Ramanathapuram', lat: 9.3639, lon: 78.8395, utcOffset: 5.5 },
  { id: 'rameswaram', nameTa: 'ராமேஸ்வரம்', nameEn: 'Rameswaram', lat: 9.2876, lon: 79.3129, utcOffset: 5.5 },
  { id: 'theni', nameTa: 'தேனி', nameEn: 'Theni', lat: 10.0104, lon: 77.4768, utcOffset: 5.5 },
  { id: 'virudhunagar', nameTa: 'விருதுநகர்', nameEn: 'Virudhunagar', lat: 9.568, lon: 77.9624, utcOffset: 5.5 },
  { id: 'sivaganga', nameTa: 'சிவகங்கை', nameEn: 'Sivaganga', lat: 9.8433, lon: 78.4809, utcOffset: 5.5 },
  { id: 'karaikudi', nameTa: 'காரைக்குடி', nameEn: 'Karaikudi', lat: 10.0735, lon: 78.78, utcOffset: 5.5 },
  { id: 'nagapattinam', nameTa: 'நாகப்பட்டினம்', nameEn: 'Nagapattinam', lat: 10.7672, lon: 79.8449, utcOffset: 5.5 },
  { id: 'mayiladuthurai', nameTa: 'மயிலாடுதுறை', nameEn: 'Mayiladuthurai', lat: 11.1018, lon: 79.652, utcOffset: 5.5 },
  { id: 'tiruvarur', nameTa: 'திருவாரூர்', nameEn: 'Tiruvarur', lat: 10.7661, lon: 79.6344, utcOffset: 5.5 },
  { id: 'kumbakonam', nameTa: 'கும்பகோணம்', nameEn: 'Kumbakonam', lat: 10.9602, lon: 79.3845, utcOffset: 5.5 },
  { id: 'chidambaram', nameTa: 'சிதம்பரம்', nameEn: 'Chidambaram', lat: 11.3993, lon: 79.6934, utcOffset: 5.5 },
  { id: 'ariyalur', nameTa: 'அரியலூர்', nameEn: 'Ariyalur', lat: 11.1401, lon: 79.0786, utcOffset: 5.5 },
  { id: 'perambalur', nameTa: 'பெரம்பலூர்', nameEn: 'Perambalur', lat: 11.2342, lon: 78.8807, utcOffset: 5.5 },
  { id: 'kallakurichi', nameTa: 'கள்ளக்குறிச்சி', nameEn: 'Kallakurichi', lat: 11.7384, lon: 78.9639, utcOffset: 5.5 },
  { id: 'chengalpattu', nameTa: 'செங்கல்பட்டு', nameEn: 'Chengalpattu', lat: 12.6819, lon: 79.9888, utcOffset: 5.5 },
  { id: 'tiruvallur', nameTa: 'திருவள்ளூர்', nameEn: 'Tiruvallur', lat: 13.1431, lon: 79.9086, utcOffset: 5.5 },
  { id: 'ranipet', nameTa: 'ராணிப்பேட்டை', nameEn: 'Ranipet', lat: 12.9224, lon: 79.3326, utcOffset: 5.5 },
  { id: 'tirupathur', nameTa: 'திருப்பத்தூர்', nameEn: 'Tirupathur', lat: 12.495, lon: 78.573, utcOffset: 5.5 },
  { id: 'tenkasi', nameTa: 'தென்காசி', nameEn: 'Tenkasi', lat: 8.9594, lon: 77.3152, utcOffset: 5.5 },
  { id: 'ooty', nameTa: 'ஊட்டி', nameEn: 'Ooty', lat: 11.4102, lon: 76.695, utcOffset: 5.5 },
  { id: 'palani', nameTa: 'பழனி', nameEn: 'Palani', lat: 10.45, lon: 77.52, utcOffset: 5.5 },
  { id: 'tiruchendur', nameTa: 'திருச்செந்தூர்', nameEn: 'Tiruchendur', lat: 8.4955, lon: 78.1202, utcOffset: 5.5 },
  { id: 'kanyakumari', nameTa: 'கன்னியாகுமரி', nameEn: 'Kanyakumari', lat: 8.0883, lon: 77.5385, utcOffset: 5.5 },
  { id: 'pollachi', nameTa: 'பொள்ளாச்சி', nameEn: 'Pollachi', lat: 10.6609, lon: 77.0048, utcOffset: 5.5 },
  { id: 'puducherry', nameTa: 'புதுச்சேரி', nameEn: 'Puducherry', lat: 11.9416, lon: 79.8083, utcOffset: 5.5 },
  { id: 'hyderabad', nameTa: 'ஹைதராபாத்', nameEn: 'Hyderabad', lat: 17.385, lon: 78.4867, utcOffset: 5.5 },
  { id: 'mumbai', nameTa: 'மும்பை', nameEn: 'Mumbai', lat: 19.076, lon: 72.8777, utcOffset: 5.5 },
  { id: 'delhi', nameTa: 'டெல்லி', nameEn: 'Delhi', lat: 28.6139, lon: 77.209, utcOffset: 5.5 },
  { id: 'kochi', nameTa: 'கொச்சி', nameEn: 'Kochi', lat: 9.9312, lon: 76.2673, utcOffset: 5.5 },
  { id: 'jaffna', nameTa: 'யாழ்ப்பாணம்', nameEn: 'Jaffna', lat: 9.6615, lon: 80.0255, utcOffset: 5.5 },
  { id: 'dubai', nameTa: 'துபாய்', nameEn: 'Dubai', lat: 25.2048, lon: 55.2708, utcOffset: 4 },
  { id: 'abu_dhabi', nameTa: 'அபுதாபி', nameEn: 'Abu Dhabi', lat: 24.4539, lon: 54.3773, utcOffset: 4 },
  { id: 'doha', nameTa: 'தோஹா', nameEn: 'Doha', lat: 25.2854, lon: 51.531, utcOffset: 3 },
  { id: 'kuwait_city', nameTa: 'குவைத்', nameEn: 'Kuwait City', lat: 29.3759, lon: 47.9774, utcOffset: 3 },
  { id: 'riyadh', nameTa: 'ரியாத்', nameEn: 'Riyadh', lat: 24.7136, lon: 46.6753, utcOffset: 3 },
  { id: 'mauritius', nameTa: 'மொரிஷியஸ்', nameEn: 'Port Louis (Mauritius)', lat: -20.1609, lon: 57.5012, utcOffset: 4 },
  { id: 'london', nameTa: 'லண்டன்', nameEn: 'London', lat: 51.5072, lon: -0.1276, utcOffset: 0, tz: 'Europe/London' },
  { id: 'paris', nameTa: 'பாரிஸ்', nameEn: 'Paris', lat: 48.8566, lon: 2.3522, utcOffset: 1, tz: 'Europe/Paris' },
  { id: 'zurich', nameTa: 'சூரிச்', nameEn: 'Zurich', lat: 47.3769, lon: 8.5417, utcOffset: 1, tz: 'Europe/Zurich' },
  { id: 'frankfurt', nameTa: 'பிராங்பேர்ட்', nameEn: 'Frankfurt', lat: 50.1109, lon: 8.6821, utcOffset: 1, tz: 'Europe/Berlin' },
  { id: 'new_york', nameTa: 'நியூயார்க்', nameEn: 'New York', lat: 40.7128, lon: -74.006, utcOffset: -5, tz: 'America/New_York' },
  { id: 'chicago', nameTa: 'சிகாகோ', nameEn: 'Chicago', lat: 41.8781, lon: -87.6298, utcOffset: -6, tz: 'America/Chicago' },
  { id: 'san_francisco', nameTa: 'சான் பிரான்சிஸ்கோ', nameEn: 'San Francisco', lat: 37.7749, lon: -122.4194, utcOffset: -8, tz: 'America/Los_Angeles' },
  { id: 'toronto', nameTa: 'டொரோண்டோ', nameEn: 'Toronto', lat: 43.6532, lon: -79.3832, utcOffset: -5, tz: 'America/Toronto' },
  { id: 'sydney', nameTa: 'சிட்னி', nameEn: 'Sydney', lat: -33.8688, lon: 151.2093, utcOffset: 10, tz: 'Australia/Sydney' },
  { id: 'melbourne', nameTa: 'மெல்பேர்ண்', nameEn: 'Melbourne', lat: -37.8136, lon: 144.9631, utcOffset: 10, tz: 'Australia/Melbourne' },
  { id: 'auckland', nameTa: 'ஆக்லாந்து', nameEn: 'Auckland', lat: -36.8485, lon: 174.7633, utcOffset: 12, tz: 'Pacific/Auckland' },
];

export function getCityById(id: string): TamilCity | undefined {
  return TAMIL_CITIES.find((c) => c.id === id);
}

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
