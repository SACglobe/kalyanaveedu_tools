'use client';

import { useState } from 'react';

type AgeResult = {
    years: number;
    months: number;
    days: number;
    totalDays: number;
    nextBirthday: {
        months: number;
        days: number;
    };
} | null;

export default function AgeCalculator() {
    const [dob, setDob] = useState('');
    const [todayDate, setTodayDate] = useState(new Date().toISOString().split('T')[0]);
    const [result, setResult] = useState<AgeResult>(null);

    const calculateAge = (e: React.FormEvent) => {
        e.preventDefault();
        if (!dob) return;

        const birthDate = new Date(dob);
        const targetDate = new Date(todayDate);

        let years = targetDate.getFullYear() - birthDate.getFullYear();
        let months = targetDate.getMonth() - birthDate.getMonth();
        let days = targetDate.getDate() - birthDate.getDate();

        // Adjust for negative days
        if (days < 0) {
            months--;
            const lastMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0);
            days += lastMonth.getDate();
        }

        // Adjust for negative months
        if (months < 0) {
            years--;
            months += 12;
        }

        // Total days calculation
        const timeDiff = targetDate.getTime() - birthDate.getTime();
        const totalDays = Math.floor(timeDiff / (1000 * 3600 * 24));

        // Next Birthday Calculation
        const nextBirthday = new Date(targetDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
        if (nextBirthday < targetDate) {
            nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
        }

        let nbMonths = nextBirthday.getMonth() - targetDate.getMonth();
        let nbDays = nextBirthday.getDate() - targetDate.getDate();

        if (nbDays < 0) {
            nbMonths--;
            const lastMonth = new Date(nextBirthday.getFullYear(), nextBirthday.getMonth(), 0);
            nbDays += lastMonth.getDate();
        }
        if (nbMonths < 0) {
            nbMonths += 12;
        }

        setResult({
            years,
            months,
            days,
            totalDays,
            nextBirthday: {
                months: nbMonths,
                days: nbDays
            }
        });
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
            <form onSubmit={calculateAge} className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-4">
                    உங்கள் விவரங்களை உள்ளிடவும்
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
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

                    <div className="space-y-2">
                        <label className="block text-gray-700 font-medium">இன்றைய தேதி (அல்லது கணக்கிட வேண்டிய தேதி)</label>
                        <input
                            type="date"
                            value={todayDate}
                            onChange={(e) => setTodayDate(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-accent transition-colors shadow-lg shadow-primary/20"
                >
                    கணக்கிடவும் (Calculate)
                </button>
            </form>

            {result && (
                <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-gradient-to-br from-primary to-accent text-white p-6 rounded-2xl text-center">
                        <div className="text-sm opacity-90 mb-1">உங்கள் வயது</div>
                        <div className="text-5xl font-bold mb-2">
                            {result.years} <span className="text-2xl font-normal">வருடம்</span>
                        </div>
                        <div className="flex justify-center gap-4 text-lg opacity-90">
                            <span>{result.months} மாதம்</span>
                            <span>•</span>
                            <span>{result.days} நாட்கள்</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 text-center">
                            <div className="text-gray-500 text-sm mb-1">மொத்த நாட்கள்</div>
                            <div className="text-2xl font-bold text-gray-900">{result.totalDays.toLocaleString()}</div>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100 text-center">
                            <div className="text-gray-500 text-sm mb-1">அடுத்த பிறந்தநாள்</div>
                            <div className="text-2xl font-bold text-gray-900">
                                {result.nextBirthday.months} மாதம், {result.nextBirthday.days} நாட்கள்
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
