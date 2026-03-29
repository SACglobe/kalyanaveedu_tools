export const SITE_CONFIG = {
    name: 'கல்யாண வீடு',
    domain: 'www.kalyanaveedu.in',
    description: 'தமிழர்களின் நம்பகமான திருமண திட்டமிடல் தளம். வயது வரம்பு, பட்ஜெட் மற்றும் திருமண தேதி கணிப்பான்கள்.',
    url: 'https://www.kalyanaveedu.in',
    metaDescription: 'தமிழ் குடும்பங்களுக்கான நம்பகமான திருமண திட்டமிடல் தளம். சுப முகூர்த்த தேதிகள், வயது தகுதி, பட்ஜெட் கணிப்பான் மற்றும் விரிவான திருமண வழிகாட்டிகள் அனைத்தும் ஒரே இடத்தில். ',
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
    }
];
