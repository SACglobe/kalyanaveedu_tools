export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: '/blog/oonjal-ceremony',
        title: 'ஊஞ்சல் சடங்கு: வாழ்க்கையின் ஏற்ற இறக்கங்களை எதிர்கொள்ளும் பக்குவம்',
        excerpt: 'ஊஞ்சல் சடங்கு ஏன் செய்யப்படுகிறது, அதன் தத்துவம் என்ன, ஊஞ்சல் பாட்டுகள் மற்றும் திருஷ்டி கழிக்கும் முறைகள்.',
        date: 'Feb 25, 2026',
        category: 'Traditions',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/malai-matruthel',
        title: 'மாலை மாற்றுதல்: திருமணத்தின் மகிழ்ச்சியான முதல் சங்கமம்',
        excerpt: 'மாலை மாற்றுதல் சடங்கு ஏன் செய்யப்படுகிறது, அதன் தத்துவம் என்ன, தோளில் தூக்குவது ஏன் - விரிவான கட்டுரை.',
        date: 'Feb 25, 2026',
        category: 'Traditions',
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/kasi-yatra',
        title: 'காசி யாத்திரை: திருமணத்தின் சுவாரஸ்யமான பண்பாட்டு சடங்கு',
        excerpt: 'காசி யாத்திரை சடங்கு என்றால் என்ன, குடை, கம்பு, விசிறி ஏன் பிடிக்கிறார்கள் — தமிழ் திருமணத்தின் முக்கிய நிகழ்வு.',
        date: 'Feb 25, 2026',
        category: 'Traditions',
        image: 'https://images.unsplash.com/photo-1532706302136-3392437645f7?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/thali-tying-significance',
        title: 'தாலி கட்டுவதன் ரகசியம்: மூன்று முடிச்சுகளின் அர்த்தம்',
        excerpt: 'தாலி கட்டும் போது போடப்படும் மூன்று முடிச்சுகள், மஞ்சள் கயிறு மற்றும் அதன் பின்னால் உள்ள ஆன்மீக உண்மைகளை அறிக.',
        date: 'Feb 25, 2026',
        category: 'Traditions',
        image: 'https://images.unsplash.com/photo-1621112904887-419379ce6824?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/naandi-ceremony',
        title: 'நாந்தி சடங்கு: முன்னோர்களின் ஆசியைப் பெறுதல்',
        excerpt: 'திருமணத்திற்கு முன் முன்னோர்களை வணங்கி அவர்களின் ஆசியைப் பெறும் நாந்தி சடங்கின் முக்கியத்துவம் மற்றும் வழிமுறைகள்.',
        date: 'Feb 25, 2026',
        category: 'Traditions',
        image: 'https://images.unsplash.com/photo-1544923246-77307dd654ca?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/vedic-wedding-mantras',
        title: 'வேத மந்திர விளக்கம்: தமிழ் திருமணம்',
        excerpt: 'மங்கள்ய தாரணம், சப்தபதி, மற்றும் பிற வேத மந்திரங்களின் பொருள், உச்சரிப்பு, மற்றும் நவீன முக்கியத்துவம்.',
        date: 'Feb 10, 2026',
        category: 'Traditions',
        image: 'https://images.unsplash.com/photo-1596751303335-ca42b3ca50c1?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/avoid-wedding-debt',
        title: 'திருமண கடனை தவிர்ப்பது எப்படி?',
        excerpt: 'கடன் வாங்காமல் அழகான திருமணம் நடத்துவது எப்படி? Budget tips, cost-cutting strategies, மற்றும் நிதி மேலாண்மை.',
        date: 'Feb 10, 2026',
        category: 'Finance',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/gold-jewelry-buying-guide',
        title: 'திருமண தங்க நகை வாங்கும் வழிகாட்டி',
        excerpt: 'தங்க தரம் (purity), hallmark, making charges, designs, budgeting - திருமண தங்க நகை வாங்குபவர்களுக்கான முழுமையான வழிகாட்டி.',
        date: 'Feb 10, 2026',
        category: 'Shopping',
        image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/wedding-insurance-guide',
        title: 'திருமண காப்பீடு (Wedding Insurance) வழிகாட்டி',
        excerpt: 'திருமணத்திற்கு insurance வேண்டுமா? Coverage types, cost, benefits, மற்றும் claim process - முழுமையான வழிகாட்டி.',
        date: 'Feb 10, 2026',
        category: 'Finance',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/wedding-menu-planning',
        title: 'திருமண உணவு திட்டமிடல்: முழுமையான வழிகாட்டி',
        excerpt: 'தமிழ் திருமண உணவு மெனு திட்டமிடல். பாரம்பரிய சைவ உணவுகள், விருந்து எண்ணிக்கை கணக்கீடு, கேட்டரிங் தேர்வு.',
        date: 'Feb 10, 2026',
        category: 'Planning',
        image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/destination-wedding-planning',
        title: 'Destination திருமணம் திட்டமிடல்',
        excerpt: 'Destination wedding திட்டமிடுவது எப்படி? Best locations (Ooty, Coorg, Kerala), budget tips, guest management.',
        date: 'Feb 10, 2026',
        category: 'Planning',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/tamil-nakshatras-significance',
        title: 'தமிழ் நட்சத்திரங்கள் & திருமண பொருத்தம்',
        excerpt: '27 தமிழ் நட்சத்திரங்கள், திருமண பொருத்தம், 10 பொருத்தங்கள், தோஷங்கள், மற்றும் ஜோதிட முக்கியத்துவம்.',
        date: 'Feb 10, 2026',
        category: 'Astrology',
        image: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/thali-cultural-significance',
        title: 'தாலி: தமிழ் திருமணத்தின் புனித அடையாளம்',
        excerpt: 'தாலி கலாச்சார முக்கியத்துவம், வகைகள், பாரம்பரிய நம்பிக்கைகள், நவீன வடிவமைப்புகள்.',
        date: 'Feb 10, 2026',
        category: 'Traditions',
        image: 'https://images.unsplash.com/photo-1621112904887-419379ce6824?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/tamil-wedding-rituals',
        title: 'தமிழ் திருமண சடங்குகள்: முழுமையான வழிகாட்டி',
        excerpt: 'நிச்சயதார்த்தம், திருமண நாள் சடங்குகள், மற்றும் திருமணத்திற்கு பின் நடக்கும் அனைத்து சடங்குகளையும் விரிவாக அறிந்து கொள்ளுங்கள்.',
        date: 'Feb 10, 2026',
        category: 'Traditions',
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/mandapam-decoration',
        title: 'மண்டப அலங்காரம்: 10 சிறந்த யோசனைகள்',
        excerpt: 'பாரம்பரியம் மற்றும் நவீனம் கலந்த மண்டப அலங்கார யோசனைகள். பட்ஜெட் மற்றும் சுற்றுச்சூழல் நட்பு தேர்வுகளும் உள்ளடங்கும்.',
        date: 'Feb 10, 2026',
        category: 'Decoration',
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/wedding-invitation-guide',
        title: 'திருமண அழைப்பிதழ் எழுதும் முறை',
        excerpt: 'பாரம்பரிய தமிழ் திருமண அழைப்பிதழ் எழுதும் முறை, இருமொழி அழைப்பிதழ், மற்றும் தவிர்க்க வேண்டிய பிழைகள்.',
        date: 'Feb 10, 2026',
        category: 'Invitations',
        image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/choosing-wedding-photographer',
        title: 'திருமண புகைப்படக்காரர் தேர்வு: வழிகாட்டி',
        excerpt: 'சிறந்த புகைப்படக்காரரை தேர்வு செய்வது எப்படி? Candid vs Traditional, விலை நிர்ணயம், contract முக்கிய விஷயங்கள்.',
        date: 'Feb 10, 2026',
        category: 'Photography',
        image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/thirumana-velai-pattiyal',
        title: 'திருமண வேலைகள் பட்டியல்: 6 மாத முழுமையான திட்டமிடல்',
        excerpt: 'திருமணத்திற்கு 6 மாதங்கள் முன்பு முதல் திருமண நாள் வரை செய்ய வேண்டிய அனைத்து வேலைகளின் பட்டியல்.',
        date: 'Jan 20, 2026',
        category: 'Planning',
        image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/subha-muhurtham-2026',
        title: '2026 சுப முகூர்த்த நாட்கள்: தேதியை எப்படி தேர்ந்தெடுப்பது?',
        excerpt: 'வளர்பிறை, நல்ல நேரம், மற்றும் தவிர்க்க வேண்டிய நாட்களைக் கொண்டு சிறந்த திருமண தேதியை தேர்வு செய்வது எப்படி?',
        date: 'Jan 21, 2026',
        category: 'Astrology',
        image: 'https://images.unsplash.com/photo-1505933383163-e3832bd7232e?auto=format&fit=crop&q=80&w=1200'
    },
    {
        slug: '/blog/budget-planning-tips',
        title: 'நடுத்தர வர்க்க திருமண பட்ஜெட்: செலவுகளை குறைப்பது எப்படி?',
        excerpt: 'ஆடம்பரத்தை குறைத்து, அவசியமான செலவுகளை மட்டும் செய்து சிக்கனமான திருமணம் நடத்துவது எப்படி?',
        date: 'Jan 22, 2026',
        category: 'Finance',
        image: 'https://images.unsplash.com/photo-1554224155-16974a4ea2c5?auto=format&fit=crop&q=80&w=1200'
    }
];
