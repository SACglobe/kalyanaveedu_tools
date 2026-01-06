import Link from 'next/link';

export const metadata = {
    title: 'திருமண வழிகாட்டி கட்டுரைகள் | Blog',
    description: 'தமிழ் திருமண சடங்குகள், திட்டமிடல் குறிப்புகள் மற்றும் பயனுள்ள தகவல்கள்.',
};

export default function BlogIndex() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">திருமண வழிகாட்டி கட்டுரைகள்</h1>
                <p className="text-gray-600">விரைவில் பயனுள்ள கட்டுரைகள் இங்கு பதிவேற்றப்படும்.</p>
            </div>

            <div className="flex justify-center">
                <div className="bg-gray-50 p-12 rounded-2xl border border-gray-200 text-center max-w-lg">
                    <span className="text-4xl block mb-4">✍️</span>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">கட்டுரைகள் தயாராகி வருகின்றன</h2>
                    <p className="text-gray-600 mb-6">
                        திருமண சடங்குகள், சம்பிரதாயங்கள் மற்றும் திட்டமிடல் குறிப்புகள் பற்றிய
                        விரிவான கட்டுரைகளை விரைவில் எதிர்பார்க்கலாம்.
                    </p>
                    <Link href="/" className="text-primary hover:underline font-medium">
                        முகப்பு பக்கத்திற்கு செல்ல
                    </Link>
                </div>
            </div>
        </div>
    );
}
