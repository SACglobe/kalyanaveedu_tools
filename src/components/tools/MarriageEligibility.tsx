'use client';

import { useState } from 'react';

type EligibilityResult = {
    isEligible: boolean;
    currentAge: {
        years: number;
        months: number;
        days: number;
    };
    message: string;
    shortage?: {
        years: number;
        months: number;
        days: number;
    };
} | null;

export default function MarriageEligibility() {
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [dob, setDob] = useState('');
    const [result, setResult] = useState<EligibilityResult>(null);

    const checkEligibility = (e: React.FormEvent) => {
        e.preventDefault();
        if (!dob) return;

        const birthDate = new Date(dob);
        const today = new Date();

        // Calculate exact age
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += lastMonth.getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        const ageInMonths = (years * 12) + months + (days / 30);
        const requiredAge = gender === 'male' ? 21 : 18;
        const isEligible = years >= requiredAge;

        let message = '';
        let shortage = undefined;

        if (isEligible) {
            message = `வாழ்த்துக்கள்! நீங்கள் திருமணத்திற்கு தகுதியானவர். சட்டப்படி ${gender === 'male' ? 'ஆண்களுக்கு 21' : 'பெண்களுக்கு 18'} வயது பூர்த்தியாகி இருக்க வேண்டும்.`;
        } else {
            message = `மன்னிக்கவும். நீங்கள் இன்னும் திருமண வயதை எட்டவில்லை. ${gender === 'male' ? 'ஆண்களுக்கு 21' : 'பெண்களுக்கு 18'} வயது பூர்த்தியாகியிருக்க வேண்டும்.`;

            // Calculate shortage
            const targetDate = new Date(birthDate);
            targetDate.setFullYear(birthDate.getFullYear() + requiredAge);

            let sYears = targetDate.getFullYear() - today.getFullYear();
            let sMonths = targetDate.getMonth() - today.getMonth();
            let sDays = targetDate.getDate() - today.getDate();

            if (sDays < 0) {
                sMonths--;
                const lastMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0);
                sDays += lastMonth.getDate();
            }
            if (sMonths < 0) {
                sYears--;
                sMonths += 12;
            }

            shortage = { years: sYears, months: sMonths, days: sDays };
        }

        setResult({
            isEligible,
            currentAge: { years, months, days },
            message,
            shortage
        });
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
            <form onSubmit={checkEligibility} className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-4">
                    விவரங்களை சரிபார்க்கவும்
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">பாலினம்</label>
                        <div className="flex gap-4">
                            <label className={`flex-1 cursor-pointer border rounded-lg p-3 flex items-center justify-center gap-2 transition-colors ${gender === 'male' ? 'bg-blue-50 border-blue-200 text-blue-700' : 'hover:bg-gray-50'}`}>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={gender === 'male'}
                                    onChange={() => setGender('male')}
                                    className="w-4 h-4 text-primary"
                                />
                                <span>ஆண் (Male)</span>
                            </label>
                            <label className={`flex-1 cursor-pointer border rounded-lg p-3 flex items-center justify-center gap-2 transition-colors ${gender === 'female' ? 'bg-pink-50 border-pink-200 text-pink-700' : 'hover:bg-gray-50'}`}>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={gender === 'female'}
                                    onChange={() => setGender('female')}
                                    className="w-4 h-4 text-primary"
                                />
                                <span>பெண் (Female)</span>
                            </label>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">பிறந்த தேதி</label>
                        <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-accent transition-colors shadow-lg shadow-primary/20"
                >
                    தகுதியை சோதிக்கவும் (Check Eligibility)
                </button>
            </form>

            {result && (
                <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className={`p-6 rounded-2xl text-center border-2 ${result.isEligible ? 'bg-green-50 border-green-100 text-green-900' : 'bg-red-50 border-red-100 text-red-900'}`}>
                        <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl mb-4 ${result.isEligible ? 'bg-green-100' : 'bg-red-100'}`}>
                            {result.isEligible ? '✅' : '❌'}
                        </div>
                        <h4 className="text-2xl font-bold mb-2">
                            {result.isEligible ? 'திருமணத்திற்கு தகுதியுண்டு' : 'தகுதி பெறவில்லை'}
                        </h4>
                        <p className="opacity-90 leading-relaxed max-w-lg mx-auto">
                            {result.message}
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                        <div className="text-gray-500 text-sm mb-1">உங்கள் தற்போதைய வயது</div>
                        <div className="text-2xl font-bold text-gray-900">
                            {result.currentAge.years} <span className="text-base font-normal text-gray-600">வருடம்</span>, {' '}
                            {result.currentAge.months} <span className="text-base font-normal text-gray-600">மாதம்</span>
                        </div>
                    </div>

                    {!result.isEligible && result.shortage && (
                        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 text-center">
                            <div className="text-orange-900 font-bold mb-1">தகுதி பெற இன்னும்...</div>
                            <div className="text-xl text-orange-800">
                                {result.shortage.years > 0 && <span>{result.shortage.years} வருடம் </span>}
                                {result.shortage.months > 0 && <span>{result.shortage.months} மாதம் </span>}
                                {result.shortage.days} நாட்கள் காத்திருக்க வேண்டும்
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
