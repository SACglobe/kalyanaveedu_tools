import { SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';
import type { Metadata } from 'next';
import Schema from '@/components/SEO/Schema';

export const metadata: Metadata = {
    title: 'எங்களை பற்றி | About Kalyana Veedu',
    description: 'கல்யாண வீடு - தமிழர்களின் நம்பகமான திருமண திட்டமிடல் தளம். எங்கள் நோக்கம், குழு மற்றும் சேவைகள் பற்றி அறிந்துகொள்ளுங்கள்.',
    alternates: {
        canonical: '/about',
    },
};

const TEAM = [
    {
        name: 'சித்ரை செல்வன்',
        role: 'Founder & Lead Developer',
        initials: 'CS',
        website: 'https://selvan.dev',
        bio: 'சித்ரை செல்வன் ஒரு மென்பொருள் பொறியாளர் மற்றும் தமிழ் கலாச்சார ஆர்வலர். தொழில்நுட்பம் மூலம் பாரம்பரியத்தை எளிமைப்படுத்துவதில் ஆர்வம் கொண்டவர்.',
        linkedin: 'https://linkedin.com/in/chithraiselvan'
    },
    {
        name: 'சரவண குமார்',
        role: 'Co-Founder & Business Lead',
        initials: 'SK',
        website: 'https://senthilmurugantraders.in',
        bio: 'வணிகத் துறையில் பல ஆண்டுகால அனுபவம் கொண்டவர். கல்யாண வீடு தளத்தின் வளர்ச்சி மற்றும் சமூக மேலாண்மைக்கு பொறுப்பானவர்.',
        linkedin: 'https://linkedin.com/in/saravanakumar'
    },
    {
        name: 'அருண் ஈசாக்கி ராஜ்',
        role: 'Co-Founder & UX Architect',
        initials: 'AR',
        website: 'https://thearun.dev',
        bio: 'பயனர் அனுபவ வடிவமைப்பில் (UX Design) நிபுணர். தளத்தை பயனர்களுக்கு எளிமையாகவும் அழகாகவும் மாற்றுவதில் முக்கிய பங்காற்றுகிறார்.',
        linkedin: 'https://linkedin.com/in/arunraj'
    }
];

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            {/* E-E-A-T: Person Schemas for each founder */}
            {TEAM.map((member) => (
                <Schema 
                    key={member.name}
                    type="Person" 
                    data={{
                        name: member.name,
                        url: member.website,
                        jobTitle: member.role,
                        sameAs: [member.linkedin, member.website]
                    }} 
                />
            ))}

            <header className="mb-12">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    எங்களை பற்றி (About Us)
                </h1>
                <div className="w-24 h-2 bg-primary rounded-full"></div>
            </header>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-12 leading-relaxed">
                <section>
                    <p className="text-xl md:text-2xl text-gray-800 leading-snug">
                        வணக்கம்! <strong>{SITE_CONFIG.name}</strong> தளத்திற்கு உங்களை அன்புடன் வரவேற்கிறோம்.
                        இது தமிழ் குடும்பங்களின் திருமணத் திட்டமிடலை எளிமையாக்கும் ஒரு பிரத்யேக முயற்சியாகும்.
                    </p>
                    <p className="mt-6">
                        பாரம்பரிய தமிழ் திருமண கலாச்சாரத்தையும் நவீன தொழில்நுட்பத்தையும் இணைத்து, 
                        திருமண திட்டமிடலை அனைவருக்கும் எளிமையாக்குவதை நோக்கமாகக் கொண்டுள்ளோம். 
                        எங்கள் தளத்தின் மூலம் ஒவ்வொரு திருமணமும் ஒரு இனிய நினைவாக மாற வேண்டும் என்பதே எங்கள் விருப்பம்.
                    </p>
                </section>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 md:p-12 rounded-3xl border border-orange-100 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span className="text-3xl">🎯</span> எங்கள் நோக்கம் (Our Mission)
                    </h2>
                    <p className="font-bold text-orange-900 mb-8 text-xl italic border-l-4 border-primary pl-6">
                        "தமிழ் திருமண பாரம்பரியங்களை டிஜிட்டல் யுகத்திற்கு கொண்டு வந்து,
                        ஒவ்வொரு தமிழ் குடும்பமும் எளிதாக, மன அழுத்தமில்லாமல், மகிழ்ச்சியுடன்
                        திருமணத்தை திட்டமிட உதவுவது."
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="font-bold text-gray-900">கலாச்சார பாதுகாப்பு</h3>
                            <p className="text-sm">நமது பாரம்பரிய திருமண முறைகளை சிதையாமல் அடுத்த தலைமுறைக்கு டிஜிட்டல் வடிவில் ஆவணப்படுத்துதல்.</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-bold text-gray-900">எளிமையான திட்டமிடல்</h3>
                            <p className="text-sm">சிக்கலான பட்ஜெட் கணக்கீடுகள் மற்றும் வேலைப் பட்டியல்களை எளிய கருவிகள் மூலம் தீர்த்தல்.</p>
                        </div>
                    </div>
                </div>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                        <span className="text-3xl">👥</span> எங்கள் நிபுணர் குழு (Our Expert Team)
                    </h2>
                    <div className="grid md:grid-cols-1 gap-8 my-8">
                        {TEAM.map((member) => (
                            <div key={member.name} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start transition-all hover:shadow-md">
                                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary text-3xl font-bold shrink-0">
                                    {member.initials}
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-primary font-semibold mb-4">{member.role}</p>
                                    <p className="text-gray-600 text-md mb-6 leading-relaxed">
                                        {member.bio}
                                    </p>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                        <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
                                            <span>🌐</span> Website
                                        </a>
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
                                            <span>🔗</span> LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="bg-primary/5 p-8 md:p-12 rounded-3xl border border-primary/10 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">எங்களுடன் இணையுங்கள்</h2>
                    <p className="mb-8 max-w-xl mx-auto">
                        கேள்விகள், ஆலோசனைகள், அல்லது கலாச்சார திருத்தங்களுக்கு எங்களை தொடர்பு கொள்ள தயங்காதீர்கள்.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:scale-105">
                            தொடர்பு கொள்ளுங்கள் →
                        </Link>
                        <Link href="/tools" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold border border-gray-200 hover:bg-gray-50 transition-all shadow-sm">
                            கருவிகளைப் பயன்படுத்துங்கள்
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
