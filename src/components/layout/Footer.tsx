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
                        <h4 className="font-bold text-gray-900 mb-4">விரைவு இணைப்புகள்</h4>
                        <ul className="space-y-2">
                            <li><Link href="/tools/tamil-calendar" className="text-primary font-bold hover:text-accent">📅 தமிழ் காலண்டர்</Link></li>
                            <li><Link href="/tools" className="text-gray-600 hover:text-primary">அனைத்து கருவிகள்</Link></li>
                            <li><Link href="/blog" className="text-gray-600 hover:text-primary">கட்டுரைகள்</Link></li>
                            <li><Link href="/about" className="text-gray-600 hover:text-primary">எங்களை பற்றி</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">விதிமுறைகள்</h4>
                        <ul className="space-y-2">
                            <li><Link href="/privacy-policy" className="text-gray-600 hover:text-primary">தனியுரிமை கொள்கை</Link></li>
                            <li><Link href="/terms" className="text-gray-600 hover:text-primary">விதிமுறைகள்</Link></li>
                            <li><Link href="/disclaimer" className="text-gray-600 hover:text-primary">பொறுப்புத் துறப்பு</Link></li>
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
