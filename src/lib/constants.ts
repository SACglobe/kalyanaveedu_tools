export const SITE_CONFIG = {
    name: 'கல்யாண வீடு',
    domain: 'www.kalyanaveedu.in',
    description: 'தமிழர்களின் நம்பகமான திருமண திட்டமிடல் தளம். வயது வரம்பு, பட்ஜெட் மற்றும் திருமண தேதி கணிப்பான்கள்.',
    url: 'https://www.kalyanaveedu.in',
    contactUrl: 'https://www.kalyanaveedu.in/contact',
    metaDescription: 'தமிழ் குடும்பங்களுக்கான நம்பகமான திருமண திட்டமிடல் தளம். சுப முகூர்த்த தேதிகள், வயது தகுதி, பட்ஜெட் கணிப்பான் மற்றும் விரிவான திருமண வழிகாட்டிகள் அனைத்தும் ஒரே இடத்தில். ',
    social: {
        twitter: 'https://x.com/kalyanaveedu',
        facebook: 'https://www.facebook.com/kalyanaveedu',
        instagram: 'https://www.instagram.com/kalyanaveedu',
        linkedin: 'https://www.linkedin.com/company/kalyanaveedu',
    },
    founder: {
        name: 'Chithrai Selvan',
        title: 'Founder & Chief Architect',
        url: 'https://selvan.dev',
        linkedin: 'https://linkedin.com/in/chithraiselvan',
        twitter: 'https://x.com/chithraiselvan'
    }
};

// Sister sites of SAC GLOBE TECH (shown in the footer; this site is excluded)
export const COMPANY = {
    name: 'SAC GLOBE TECH',
    url: 'https://tech.sacglobe.com/',
};

export const NETWORK_SITES = [
    { name: 'MyUtilityBox', url: 'https://www.myutilitybox.com/', desc: 'Free online utility tools' },
    { name: 'Matrimony4U', url: 'https://www.matrimony4u.com/', desc: 'Matrimony tools' },
    { name: 'Karuvii', url: 'https://www.karuvii.com/', desc: 'Online tools' },
    { name: 'Karuvigal', url: 'https://www.karuvigal.com/', desc: 'தமிழ் கருவிகள்' },
];

export const NAV_LINKS = [
    { label: 'முகப்பு (Home)', href: '/' },
    { label: 'பஞ்சாங்கம் (Panchangam)', href: '/panchangam' },
    { label: 'ராசிபலன் (Rasi Palan)', href: '/rasi-palan' },
    { label: 'கருவிகள் (Tools)', href: '/tools' },
    { label: 'கட்டுரைகள் (Articles)', href: '/blog' },
    { label: 'தொடர்பு (Contact)', href: '/contact' },
];

export const TOOLS_LIST = [
    {
        path: '/tools/festivals',
        title: 'தமிழ் பண்டிகைகள் (Festival Calendar)',
        description: 'பொங்கல், தீபாவளி, நவராத்திரி, கார்த்திகை தீபம் தேதிகள் (Tamil festival dates)',
        icon: '🎆'
    },
    {
        path: '/tools/free-jathagam',
        title: 'இலவச ஜாதகம் (Free Jathagam / Kundli)',
        description: 'லக்னம், ராசி கட்டம், நவாம்சம், கிரக நிலை, தசை, தோஷங்கள் (Birth chart, Navamsa, Dasha)',
        icon: '📜'
    },
    {
        path: '/panchangam',
        title: 'இன்றைய பஞ்சாங்கம் (Today Panchangam)',
        description: 'திதி, நட்சத்திரம், யோகம், கரணம், ராகு காலம், நல்ல நேரம் – 60+ ஊர்களுக்கு (Daily Tamil Panchangam)',
        icon: '🪔'
    },
    {
        path: '/rasi-palan',
        title: 'இன்றைய ராசி பலன் (Rasi Palan)',
        description: '12 ராசிகளுக்கும் சந்திர கோசார அடிப்படையிலான தினசரி பலன் (Daily Tamil Horoscope)',
        icon: '♈'
    },
    {
        path: '/tools/viratham',
        title: 'விரத நாட்கள் (Viratham Calendar)',
        description: 'அமாவாசை, பௌர்ணமி, ஏகாதசி, சஷ்டி, பிரதோஷம் தேதிகள் (Amavasai, Pournami, Ekadashi dates)',
        icon: '🌕'
    },
    {
        path: '/tools/baby-names',
        title: 'குழந்தை பெயர்கள் (Baby Names by Star)',
        description: '27 நட்சத்திரங்களுக்கும் பாதம் வாரியான பெயர் எழுத்துகள் (Tamil baby names by nakshatra)',
        icon: '👶'
    },
    {
        path: '/tools/vayathu-kanakku',
        title: 'வயது கணக்கிடுபவர் (Age Calculator)',
        description: 'பிறந்த தேதியை வைத்து வயதை கணக்கிட (Calculate exact age)',
        icon: '📅'
    },
    {
        path: '/tools/thirumana-vayathu',
        title: 'திருமண வயது தகுதி (Marriage Age Checker)',
        description: 'சட்டப்படி திருமண வயது உள்ளதா என சரிபார்க்கவும் (Check legal eligibility)',
        icon: '⚖️'
    },
    {
        path: '/tools/thirumana-selavu',
        title: 'திருமண செலவு கணிப்பான் (Wedding Budget)',
        description: 'திருமண பட்ஜெட்டை முன்கூட்டியே திட்டமிடுங்கள் (Estimate expenses)',
        icon: '💰'
    },
    {
        path: '/tools/thirumana-thinam',
        title: 'திருமண தேதி கணிப்பான் (Date Planner)',
        description: 'திருமணத்திற்கு இன்னும் எத்தனை நாட்கள் உள்ளன (Days remaining)',
        icon: '📆'
    },
    {
        path: '/tools/thirumana-thayaripu',
        title: 'திருமண தயாரிப்பு பட்டியல் (Checklist)',
        description: 'திருமண வேலைகளை பட்டியலிட்டு நிர்வகிக்க (Wedding to-do list)',
        icon: '📝'
    },
    {
        path: '/tools/tamil-calendar',
        title: 'தமிழ் காலண்டர் (Tamil Calendar)',
        description: 'இன்றைய தமிழ் தேதி, நட்சத்திரம் மற்றும் திதி (Daily Tamil date, Nakshatra & Tithi)',
        icon: '📅'
    },
    {
        path: '/tools/subha-muhurtham',
        title: 'சுப முகூர்த்த நாட்காட்டி (Subha Muhurtham)',
        description: 'பாரம்பரிய சுப முகூர்த்த தேதிகளின் பட்டியல் (Traditional auspicious dates list)',
        icon: '💍'
    },
    {
        path: '/tools/jathagam-porutham',
        title: 'ஜாதக பொருத்தம் (Marriage Compatibility)',
        description: '27 நட்சத்திர அடிப்படையில் 10 திருமண பொருத்தங்களை கணக்கிடுங்கள் (Nakshatra compatibility)',
        icon: '⭐'
    },
    {
        path: '/tools/rahu-kalam',
        title: 'இன்றைய ராகு காலம் (Rahu Kalam Today)',
        description: 'உங்கள் ஊரின் சூரிய உதயப்படி இன்றைய ராகு கால நேரம் (City-based Rahu Kalam)',
        icon: '⏰'
    },
    {
        path: '/tools/gowri-nalla-neram',
        title: 'கவுரி நல்ல நேரம் (Gowri Nalla Neram)',
        description: 'பகல் மற்றும் இரவு சுப கவுரி நேர அட்டவணை (Day & Night Gowri Panchangam)',
        icon: '✨'
    },
    {
        path: '/tools/yamakandam',
        title: 'யமகண்டம் & குளிகை (Yamakandam & Kuligai)',
        description: 'இன்றைய யமகண்டம் மற்றும் குளிகை நேரங்கள் (Inauspicious & Repeating Timings)',
        icon: '⏳'
    },
    {
        path: '/tools/choghadiya',
        title: 'சோகாதியம் அட்டவணை (Choghadiya Muhurat)',
        description: 'பகல் மற்றும் இரவு சுப நேர சோகாதியம் கணிப்பான் (Day & Night Choghadiya)',
        icon: '🧭'
    },
    {
        path: '/tools/nakshatra-finder',
        title: 'நட்சத்திரம் கண்டுபிடி (Nakshatra Finder)',
        description: 'பிறந்த தேதி, நேரம் வைத்து நட்சத்திரம், பாதம், ராசி அறிய (Birth Star & Rasi)',
        icon: '🌟'
    },
    {
        path: '/tools/sevvai-dosham',
        title: 'செவ்வாய் தோஷம் கணிப்பான் (Sevvai Dosha)',
        description: 'செவ்வாய் தோஷம், விலக்குகள் மற்றும் திருமண வழிகாட்டல் (Mangal / Kuja Dosha)',
        icon: '🛡️'
    },
    {
        path: '/tools/thirumana-muhurtham',
        title: 'திருமண முகூர்த்த தேதிகள் (Muhurtham 2025-2026)',
        description: '2025 & 2026 ஆம் ஆண்டிற்கான சுப திருமண முகூர்த்த நாட்கள் (Auspicious Dates List)',
        icon: '💍'
    }
];
