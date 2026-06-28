import Link from 'next/link';
import { VALUABLE_MARRIAGE_DATES, TAMIL_MONTHS } from '@/lib/tamil-calendar-data';
import { getTamilDate, getTamilDayName } from '@/lib/tamil-calendar-utils';

export default function MuhurthamMasterIndex() {
    const year = new Date().getFullYear();
    
    // Group dates by English month
    const groupedDates = VALUABLE_MARRIAGE_DATES.reduce((acc, dateStr) => {
        const date = new Date(dateStr);
        const month = date.toLocaleDateString('en-GB', { month: 'long' });
        if (!acc[month]) acc[month] = [];
        acc[month].push(dateStr);
        return acc;
    }, {} as Record<string, string[]>);

    const monthsOrder = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return (
        <div className="space-y-12">
            <div className="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10">
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                    {year} முகூர்த்த தேதிகள் அட்டவணை (Master Index)
                </h2>
                <p className="text-gray-600 font-medium leading-relaxed">
                    2026 ஆம் ஆண்டின் அனைத்து சுப முகூர்த்த தேதிகளும் இங்கே மாதவாரியாகத் தொகுக்கப்பட்டுள்ளன. 
                    ஒவ்வொரு தேதியையும் கிளிக் செய்து அந்த நாளின் விரிவான தகவல்களைக் காணலாம்.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {monthsOrder.map(monthName => {
                    const dates = groupedDates[monthName];
                    if (!dates || dates.length === 0) return null;

                    return (
                        <div key={monthName} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-black text-primary mb-4 border-b border-gray-50 pb-2">
                                {monthName} 2026
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {dates.map(dateStr => {
                                    const date = new Date(dateStr);
                                    const dayName = getTamilDayName(date);
                                    const tamil = getTamilDate(date);
                                    
                                    return (
                                        <Link 
                                            key={dateStr}
                                            href={`/tools/subha-muhurtham/${dateStr}`}
                                            className="group block p-3 rounded-xl bg-gray-50 hover:bg-primary hover:text-white transition-all text-center"
                                        >
                                            <div className="text-lg font-black">{date.getDate()}</div>
                                            <div className="text-[10px] font-bold opacity-60 group-hover:opacity-100">{dayName}</div>
                                            <div className="text-[9px] font-medium mt-1 truncate">
                                                {tamil.tamilMonth} {tamil.tamilDay}
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
