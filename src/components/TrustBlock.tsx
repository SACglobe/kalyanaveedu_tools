import React from 'react';

interface TrustBlockProps {
    author: string;
    updatedDate: string;
}

const TrustBlock: React.FC<TrustBlockProps> = ({ author, updatedDate }) => {
    return (
        <div className="my-8 pt-8 border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-700">எழுதியவர்:</span>
                    <span className="bg-primary/5 text-primary px-2 py-1 rounded">{author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-700">கடைசியாக புதுப்பிக்கப்பட்டது:</span>
                    <time dateTime="2026-02-25">{updatedDate}</time>
                </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-xs text-gray-600 leading-relaxed italic">
                <p>
                    <strong>பொறுப்புத் துறப்பு (Disclaimer):</strong> கல்யாண வீடு தளத்தில் பகிரப்படும் தகவல்கள் பொதுவானவை மற்றும் தகவல் நோக்கத்திற்காக மட்டுமே.
                    நாங்கள் துல்லியமான மற்றும் தற்போதைய தகவல்களை வழங்க முயற்சி செய்தாலும், தளத்தில் உள்ள தகவல்களின் முழுமை அல்லது துல்லியம் குறித்து நாங்கள் எந்த உத்தரவாதமும் அளிக்கவில்லை.
                    திருமணத் திட்டமிடல் குறித்த இறுதி முடிவுகளை எடுப்பதற்கு முன், சம்பந்தப்பட்ட நிபுணர்களுடன் ஆலோசிப்பது நல்லது.
                </p>
            </div>
        </div>
    );
};

export default TrustBlock;
