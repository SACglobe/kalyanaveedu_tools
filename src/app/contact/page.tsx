export const metadata = {
    title: 'தொடர்புக்கு | Contact Us',
    description: 'எங்களை தொடர்பு கொள்ள விரும்புகிறீர்களா? உங்கள் கருத்துக்களை பகிருங்கள்.',
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-2xl">
            <h1 className="text-3xl font-bold mb-8">தொடர்புக்கு (Contact Us)</h1>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-700 mb-6">
                    எங்கள் இணையதளம் குறித்த கருத்துக்கள், சந்தேகங்கள் அல்லது ஆலோசனைகள் இருந்தால்,
                    கீழ்க்கண்ட மின்னஞ்சல் முகவரியில் எங்களை தொடர்பு கொள்ளலாம்.
                </p>

                <div className="flex items-center gap-3 p-4 bg-blue-50 text-blue-800 rounded-lg mb-8">
                    <span className="text-xl">📧</span>
                    <a href="mailto:support@kalyanaveedu.in" className="font-bold hover:underline">
                        support@kalyanaveedu.in
                    </a>
                </div>

                <h3 className="text-xl font-bold mb-4">முகவரி</h3>
                <address className="not-italic text-gray-600">
                    Kalyana Veedu Team,<br />
                    Chennai, Tamil Nadu, India.
                </address>
            </div>
        </div>
    );
}
