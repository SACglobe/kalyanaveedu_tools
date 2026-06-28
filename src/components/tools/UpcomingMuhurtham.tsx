import Link from 'next/link';
import { VALUABLE_MARRIAGE_DATES } from '@/lib/tamil-calendar-data';
import { getTamilDate, getTamilDayName } from '@/lib/tamil-calendar-utils';

export default function UpcomingMuhurtham() {
    const todayStr = new Date().toISOString().split('T')[0];
    
    // Get next 6 upcoming dates
    const upcomingDates = VALUABLE_MARRIAGE_DATES
        .filter(date => date >= todayStr)
        .slice(0, 6);

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                <div>
                    <h2 className="text-3xl font-black text-gray-900 mb-2">அடுத்த சுப முகூர்த்த தேதிகள்</h2>
                    <p className="text-gray-500 font-medium italic">Handpicked auspicious dates for your big day</p>
                </div>
                <Link 
                    href="/tools/subha-muhurtham" 
                    className="text-primary font-bold hover:underline bg-primary/5 px-6 py-2 rounded-full transition-all"
                >
                    அனைத்து தேதிகள் →
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {upcomingDates.map((dateStr) => {
                    const date = new Date(dateStr);
                    const tamil = getTamilDate(date);
                    const dayName = getTamilDayName(date);
                    
                    return (
                        <Link 
                            key={dateStr}
                            href={`/tools/subha-muhurtham/${dateStr}`}
                            className="group bg-white border border-orange-100 p-6 rounded-3xl text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 block"
                        >
                            <div className="text-xs font-black text-primary/60 mb-2 uppercase tracking-tighter">
                                {date.toLocaleDateString('en-GB', { month: 'short' })} {date.getFullYear()}
                            </div>
                            <div className="text-4xl font-black text-gray-900 mb-1 group-hover:text-primary transition-colors">
                                {date.getDate()}
                            </div>
                            <div className="text-[10px] font-bold text-gray-400 mb-3 border-b border-gray-50 pb-3">
                                {dayName}
                            </div>
                            <div className="text-[11px] font-bold text-gray-600 leading-tight">
                                {tamil.tamilMonth} <br/> {tamil.tamilDay}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
