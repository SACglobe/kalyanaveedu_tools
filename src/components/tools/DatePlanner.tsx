'use client';

import { useState } from 'react';

export default function DatePlanner() {
    const [selectedDate, setSelectedDate] = useState('');
    const [result, setResult] = useState<{
        daysLeft: number;
        dayOfWeek: string;
        isWeekend: boolean;
        season: string;
    } | null>(null);

    const TAMIL_DAYS = ['ஞாயிறு', 'திங்கள்', 'செவ்வாய்', 'புதன்', 'வியாழன்', 'வெள்ளி', 'சனி'];
    const TAMIL_MONTHS = ['சித்திரை', 'வைகாசி', 'ஆனி', 'ஆடி', 'ஆவணி', 'புரட்டாசி', 'ஐப்பசி', 'கார்த்திகை', 'மார்கழி', 'தை', 'மாசி', 'பங்குனி'];

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = e.target.value;
        setSelectedDate(newDate);

        if (newDate) {
            const target = new Date(newDate);
            const today = new Date();

            const diffTime = target.getTime() - today.getTime();
            const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            const dayIndex = target.getDay();

            // Basic Tamil Month mapping (Approximate)
            // Note: Accurate Tamil month calculation requires complex algorithms or libraries.
            // Here we map roughly based on Gregorian month for season/context.
            const monthIndex = target.getMonth(); // 0-11
            // Mid-April starts Chithirai. This is a rough estimation for display context.

            setResult({
                daysLeft,
                dayOfWeek: TAMIL_DAYS[dayIndex],
                isWeekend: dayIndex === 0 || dayIndex === 6,
                season: ''
            });
        }
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 border-b pb-4">
                    திருமண தேதியை தேர்ந்தெடுக்கவும்
                </h3>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">திட்டமிடும் தேதி (Planned Date)</label>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none text-lg"
                    />
                </div>

                {selectedDate && result && (
                    <div className="grid md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4">

                        <div className={`p-6 rounded-xl text-center border ${result.daysLeft < 0 ? 'bg-gray-100 border-gray-200' : 'bg-blue-50 border-blue-100'}`}>
                            <div className="text-gray-500 text-sm mb-1">
                                {result.daysLeft < 0 ? 'முடிந்து' : 'இன்னும்'}
                            </div>
                            <div className="text-3xl font-bold text-gray-900">
                                {Math.abs(result.daysLeft)}
                            </div>
                            <div className="text-sm text-gray-600">நாட்கள் உள்ளன</div>
                        </div>

                        <div className={`p-6 rounded-xl text-center border ${result.isWeekend ? 'bg-green-50 border-green-100' : 'bg-yellow-50 border-yellow-100'}`}>
                            <div className="text-gray-500 text-sm mb-1">கிழமை</div>
                            <div className="text-3xl font-bold text-gray-900">
                                {result.dayOfWeek}
                            </div>
                            <div className="text-sm text-gray-600">
                                {result.isWeekend ? 'வார விடுமுறை (Weekend)' : 'வார வேலைநாள்'}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl text-center border bg-orange-50 border-orange-100">
                            <div className="text-gray-500 text-sm mb-1">திட்டமிடல் நிலை</div>
                            <div className="text-xl font-bold text-gray-900 mt-2">
                                {result.daysLeft > 180 ? 'நிதானமாக திட்டமிடலாம்' :
                                    result.daysLeft > 90 ? 'மண்டபம் புக் செய்யவும்' :
                                        result.daysLeft > 30 ? 'அழைப்பிதழ் கொடுக்கவும்' :
                                            result.daysLeft > 0 ? 'கடைசி நேர ஏற்பாடுகள்' : 'முடிந்தது'}
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}
