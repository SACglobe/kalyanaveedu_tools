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

export const NAV_LINKS = [
    { label: 'முகப்பு (Home)', href: '/' },
    { label: 'கருவிகள் (Tools)', href: '/tools' },
    { label: 'கட்டுரைகள் (Articles)', href: '/blog' },
    { label: 'எங்களை பற்றி (About)', href: '/about' },
    { label: 'தொடர்பு (Contact)', href: '/contact' },
];

export const TOOLS_LIST = [
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
