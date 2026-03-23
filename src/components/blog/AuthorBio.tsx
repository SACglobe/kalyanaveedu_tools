import Link from 'next/link';

interface AuthorBioProps {
    name?: string;
    role?: string;
    bio?: string;
    website?: string;
}

export default function AuthorBio({ 
    name = 'கல்யாண வீடு டீம் (Team Kalyana Veedu)', 
    role = 'திருமண திட்டமிடல் நிபுணர்',
    bio = 'திருமண திட்டமிடல் மற்றும் கலாச்சார ஆய்வுகளில் 5+ ஆண்டுகள் அனுபவம் கொண்ட நிபுணர் குழு.',
    website
}: AuthorBioProps) {
    return (
        <div className="my-12 p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                {name.charAt(0)}
            </div>
            <div className="text-center md:text-left space-y-2">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2">
                    <h4 className="text-xl font-bold text-gray-900">
                        எழுதியவர்: {name}
                    </h4>
                    {role && <span className="text-sm text-gray-500 font-medium">| {role}</span>}
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                    {bio}
                </p>
                <div className="flex gap-4 justify-center md:justify-start pt-2">
                    <Link href="/about" className="text-primary text-sm font-bold hover:underline">
                        நிபுணர் பற்றி மேலும் அறிய →
                    </Link>
                    {website && (
                        <a href={website} target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-primary transition-colors">
                            இணையதளம் ↗
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
