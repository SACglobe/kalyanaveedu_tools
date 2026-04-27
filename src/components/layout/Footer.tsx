import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-xl font-bold text-primary">{SITE_CONFIG.name}</h3>
                        <p className="text-gray-600 max-w-sm leading-relaxed">
                            {SITE_CONFIG.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">கருவிகள் (Tools)</h4>
                        <ul className="space-y-2">
                            <li><Link href="/tools/tamil-calendar" className="text-gray-600 hover:text-primary">📅 தமிழ் காலண்டர்</Link></li>
                            <li><Link href="/tools/vayathu-kanakku" className="text-gray-600 hover:text-primary">📅 வயது கணக்கிடுபவர்</Link></li>
                            <li><Link href="/tools" className="text-gray-600 font-bold hover:text-accent">அனைத்து கருவிகள் →</Link></li>
                            <li><Link href="/faq" className="text-gray-600 hover:text-primary">கேள்வி-பதில் (FAQ)</Link></li>
                            <li><Link href="/about" className="text-gray-600 hover:text-primary">நாங்கள் யார் (About)</Link></li>
                        </ul>
                    </div>

                    {/* Traditions (Internal Links for SEO) */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">பாரம்பரிய கட்டுரைகள்</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/blog/oonjal-ceremony" className="text-gray-600 hover:text-primary">ஊஞ்சல் சடங்கு விளக்கம்</Link></li>
                            <li><Link href="/blog/malai-matruthel" className="text-gray-600 hover:text-primary">மாலை மாற்றுதல் தத்துவம்</Link></li>
                            <li><Link href="/blog/kasi-yatra" className="text-gray-600 hover:text-primary">காசி யாத்திரை சடங்கு</Link></li>
                            <li><Link href="/blog/thali-tying-significance" className="text-gray-600 hover:text-primary">தாலி கட்டுவதன் ரகசியம்</Link></li>
                            <li><Link href="/blog/vedic-wedding-mantras" className="text-gray-600 hover:text-primary">வேத மந்திர விளக்கம்</Link></li>
                            <li><Link href="/blog" className="text-gray-600 font-bold hover:text-accent">அனைத்து கட்டுரைகள் →</Link></li>
                        </ul>
                    </div>

                    {/* Guides (Internal Links for SEO) */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">திருமண வழிகாட்டி</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/blog/thirumana-velai-pattiyal" className="text-gray-600 hover:text-primary">வேலைகள் பட்டியல் (Checklist)</Link></li>
                            <li><Link href="/blog/subha-muhurtham-2026" className="text-gray-600 hover:text-primary">சுப முகூர்த்த நாட்கள் 2026</Link></li>
                            <li><Link href="/blog/budget-planning-tips" className="text-gray-600 hover:text-primary">சிக்கன திருமண டிப்ஸ்</Link></li>
                            <li><Link href="/blog/gold-jewelry-buying-guide" className="text-gray-600 hover:text-primary">தங்க நகை வாங்கும் முறை</Link></li>
                            <li><Link href="/blog/wedding-invitation-guide" className="text-gray-600 hover:text-primary">அழைப்பிதழ் எழுதும் முறை</Link></li>
                            <li><Link href="/privacy-policy" className="text-gray-600 hover:text-primary">Legal & Privacy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p className="mb-2">© {currentYear} {SITE_CONFIG.name}. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</p>
                    <p className="text-gray-400 font-medium tracking-wide">A Unit of Matrimony4U.com</p>
                </div>
            </div>
        </footer>
    );
}
