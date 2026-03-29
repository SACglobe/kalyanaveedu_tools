import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_CONFIG } from '@/lib/constants';
import { VALUABLE_MARRIAGE_DATES } from '@/lib/tamil-calendar-data';
import { getTamilDate, getTamilDayName, getTamilDayNameEng, getPanchangam, getMuhurthamTimes } from '@/lib/tamil-calendar-utils';
import Schema from '@/components/SEO/Schema';
import RelevantTools from '@/components/RelevantTools';

interface Props {
    params: Promise<{
        date: string;
    }>;
}

export async function generateStaticParams() {
    return VALUABLE_MARRIAGE_DATES.map((date) => ({
        date,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { date } = await params;
    
    if (!VALUABLE_MARRIAGE_DATES.includes(date)) {
        return {};
    }

    const d = new Date(date);
    const day = d.getDate();
    const month = d.toLocaleDateString('en-GB', { month: 'long' });
    const year = d.getFullYear();
    const tamilData = getTamilDate(d);

    const title = `${day} ${month} ${year} Subha Muhurtham | ${tamilData.tamilMonth} ${tamilData.tamilDay} சுப முகூர்த்தம்`;
    const description = `${day} ${month} ${year} (${tamilData.tamilMonth} ${tamilData.tamilDay}) அன்று சுப முகூர்த்தம் உள்ளதா? நல்ல நேரம், ராகு காலம் மற்றும் எமகண்டம் விபரங்கள்.`;

    return {
        title,
        description,
        alternates: {
            canonical: `${SITE_CONFIG.url}/tools/subha-muhurtham/${date}`,
        },
    };
}

export default async function MuhurthamDatePage({ params }: Props) {
    const { date } = await params;

    if (!VALUABLE_MARRIAGE_DATES.includes(date)) {
        notFound();
    }

    const d = new Date(date);
    const day = d.getDate();
    const month = d.toLocaleDateString('en-GB', { month: 'long' });
    const year = d.getFullYear();
    const tamilData = getTamilDate(d);
    const panchangam = getPanchangam(d);
    const times = getMuhurthamTimes(d);
    const dayName = getTamilDayName(d);
    const dayNameEng = getTamilDayNameEng(d);

    return (
        <main className="min-h-screen bg-gray-50 pt-12 pb-24">
            <Schema 
                type="BreadcrumbList"
                data={{
                    items: [
                        { name: 'முகப்பு', item: '/' },
                        { name: 'கருவிகள்', item: '/tools' },
                        { name: 'சுப முகூர்த்தம்', item: '/tools/subha-muhurtham' },
                        { name: `${day} ${month} ${year}`, item: `/tools/subha-muhurtham/${date}` }
                    ]
                }}
            />

            <div className="container mx-auto px-4 max-w-4xl">
                {/* Hero Header */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12 text-center">
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
                        {day} {month} {year} <br className="md:hidden" />
                        <span className="text-primary">சுப முகூர்த்தம்</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 font-medium">
                        {tamilData.tamilYear} வருடம், {tamilData.tamilMonth} மாதம் {tamilData.tamilDay} ஆம் நாள், {dayName} ({dayNameEng})
                    </p>
                    <div className="mt-8 inline-block bg-green-50 text-green-700 px-6 py-2 rounded-full font-bold text-lg border border-green-100">
                        ✨ விசேஷங்களுக்கு உகந்த சுப முகூர்த்த நாள்
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Time Table */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2 flex items-center gap-2">
                             ⏱️ முக்கிய நேரங்கள்
                        </h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-2 border-b border-gray-50">
                                <span className="text-gray-600">நல்ல நேரம்</span>
                                <span className="font-bold text-green-600 text-right">{times.nallaNeram.join(' / ')}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-gray-50">
                                <span className="text-gray-600">ராகு காலம்</span>
                                <span className="font-bold text-red-500 text-right">{times.rahuKaalam}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-gray-50">
                                <span className="text-gray-600">எமகண்டம்</span>
                                <span className="font-bold text-orange-500 text-right">{times.yamagandam}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-gray-50">
                                <span className="text-gray-600">குளிகை</span>
                                <span className="font-bold text-blue-500 text-right">{times.kulikai}</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="text-gray-600">கௌரி நல்ல நேரம்</span>
                                <span className="font-bold text-green-600 text-right">{times.gowriNallaNeram.join(' / ')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Panchangam Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2 flex items-center gap-2">
                             📖 அன்றைய பஞ்சாங்கம்
                        </h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-2 border-b border-gray-50">
                                <span className="text-gray-600">திதி</span>
                                <span className="font-bold text-gray-900 text-right">{panchangam.tithi}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-gray-50">
                                <span className="text-gray-600">நட்சத்திரம்</span>
                                <span className="font-bold text-gray-900 text-right">{panchangam.nakshatra}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-gray-50">
                                <span className="text-gray-600">யோகம்</span>
                                <span className="font-bold text-gray-900 text-right">{panchangam.yoga}</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="text-gray-600">சந்திராஷ்டமம்</span>
                                <span className="font-bold text-purple-600 text-right text-sm">{panchangam.chandrashtamam}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Analysis Section */}
                <article className="prose prose-orange max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">
                        {month} {day}, {year} முகூர்த்த தின விளக்கம்
                    </h2>
                    <div className="text-gray-700 leading-relaxed space-y-4">
                        <p>
                            {year} ஆம் ஆண்டின் {month} மாதம் {day} ஆம் தேதி பாரம்பரிய தமிழ் பஞ்சாங்கத்தின்படி ஒரு மிகச்சிறந்த சுப முகூர்த்த நாளாகக் கருதப்படுகிறது. 
                            இந்த நாள் {tamilData.tamilYear} தமிழ் வருடம், {tamilData.tamilMonth} மாதம் {tamilData.tamilDay} ஆம் தேதிக்கு நிகரானது.
                        </p>
                        <p>
                            அன்றைய தினம் <strong>{panchangam.nakshatra}</strong> நட்சத்திரம் மற்றும் <strong>{panchangam.tithi}</strong> திதி ஆகியவை அமைந்துள்ளன. 
                            பொதுவாக ஒரு திருமணத் தேதியைத் தீர்மானிக்கும் போது, நட்சத்திரம் மற்றும் திதி ஆகியவற்றின் பொருத்தம் மிக முக்கியமானதாகும். 
                            இந்தத் தேதியானது பலருக்குத் தாரா பலன் மற்றும் சந்திர பலன் ஆகியவற்றின் அடிப்படையில் சாதகமாக அமைய வாய்ப்புள்ளது.
                        </p>
                        <p>
                            நேரக் கணிப்பின்படி, அன்றைய நல்ல நேரம் <strong>{times.nallaNeram[0]}</strong> மற்றும் <strong>{times.nallaNeram[1]}</strong> ஆகும். 
                            அதேசமயம் ராகு காலம் <strong>{times.rahuKaalam}</strong> என்பதால், அந்த நேரத்தில் புதிய காரியங்களைத் தொடங்குவதைத் தவிர்க்கலாம்.
                        </p>
                    </div>
                    
                    <div className="mt-10 p-6 bg-orange-50 rounded-2xl border border-orange-100 italic text-sm text-gray-600">
                        *குறிப்பு: இந்தத் தகவல்கள் பொதுவான பஞ்சாங்கக் குறிப்புகளின் அடிப்படையில் வழங்கப்படுகின்றன. 
                        உங்களின் தனிப்பட்ட ஜாதகம் மற்றும் குலதெய்வ வழக்கங்களுக்கு ஏற்ப இதில் மாற்றங்கள் இருக்கலாம். 
                        முக்கிய முடிவுகளை எடுக்கும் முன் முறையான ஆலோசனையைப் பெறவும்.
                    </div>
                </article>

                {/* Footer Tools Area */}
                <div className="space-y-12">
                     <RelevantTools excludePath="/tools/subha-muhurtham" />
                     
                     <div className="text-center">
                        <Link 
                            href="/tools/subha-muhurtham"
                            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                        >
                            ← அனைத்து முகூர்த்த தேதிகளையும் பார்க்க
                        </Link>
                     </div>
                </div>
            </div>
        </main>
    );
}
