'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            setShow(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 md:p-6 z-50 animate-in slide-in-from-bottom-5">
            <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-gray-600 text-sm md:text-base">
                    <p>
                        எங்கள் தளம் சிறந்த பயனர் அனுபவத்தை வழங்க குக்கீகளை (Cookies) பயன்படுத்துகிறது.
                        மேலும் விவரங்களுக்கு எங்கள் <a href="/privacy-policy" className="text-primary hover:underline">தனியுரிமை கொள்கையை</a> பார்க்கவும்.
                    </p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={acceptCookies}
                        className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-accent transition-colors whitespace-nowrap"
                    >
                        ஏற்றுக்கொள்கிறேன் (Accept)
                    </button>
                </div>
            </div>
        </div>
    );
}
