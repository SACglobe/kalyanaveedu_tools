"use client";

import { useState, useEffect, useRef } from 'react';
import {
    getTamilDate,
    getPanchangam,
    getTamilDayName,
    getTamilDayNameEng,
    getMuhurthamTimes
} from '@/lib/tamil-calendar-utils';
import { TAMIL_MONTHS, HOLIDAYS_2026, VALUABLE_MARRIAGE_DATES } from '@/lib/tamil-calendar-data';

export default function SubhaMuhurthamCalendar() {
    const [mounted, setMounted] = useState(false);
    const [viewDate, setViewDate] = useState(new Date(2026, 0, 1));
    const [selectedDate, setSelectedDate] = useState(new Date(2026, 0, 1));
    const detailsRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        const today = new Date();

        // Handle URL Params
        const params = new URLSearchParams(window.location.search);
        const dateParam = params.get('date');

        if (dateParam) {
            const d = new Date(dateParam);
            if (!isNaN(d.getTime())) {
                const initialView = new Date(d.getFullYear(), d.getMonth(), 1);
                setViewDate(initialView);
                setSelectedDate(d);

                // Scroll logic based on device
                setTimeout(() => {
                    if (window.innerWidth < 1024) {
                        // Mobile: Scroll to details card
                        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                        // Desktop: Scroll to calendar/list
                        listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 500);
            }
        } else {
            const initialView = new Date(today.getFullYear(), today.getMonth(), 1);
            setViewDate(initialView);

            // Initial auto-selection
            const monthMarriages = VALUABLE_MARRIAGE_DATES.filter(dateStr => {
                const d = new Date(dateStr);
                return d.getMonth() === initialView.getMonth() && d.getFullYear() === initialView.getFullYear();
            });

            if (monthMarriages.length > 0) {
                const holidayDate = monthMarriages.find(dateStr => {
                    const d = new Date(dateStr);
                    const dateKey = `${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
                    return HOLIDAYS_2026[dateKey];
                });
                setSelectedDate(holidayDate ? new Date(holidayDate) : new Date(monthMarriages[0]));

                // Fallback scroll to list if no date param
                setTimeout(() => {
                    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 500);
            } else {
                setSelectedDate(today);
                // Fallback scroll to list if no date param
                setTimeout(() => {
                    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 500);
            }
        }
    }, []);

    if (!mounted) {
        return <div className="min-h-[600px] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>;
    }

    const today = new Date();
    const monthsEng = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const autoSelectDate = (newDate: Date) => {
        const month = newDate.getMonth();
        const year = newDate.getFullYear();

        const monthMarriages = VALUABLE_MARRIAGE_DATES.filter(dateStr => {
            const d = new Date(dateStr);
            return d.getMonth() === month && d.getFullYear() === year;
        }).map(dateStr => new Date(dateStr));

        if (monthMarriages.length > 0) {
            // Prioritize holidays
            const holidayDate = monthMarriages.find(d => {
                const dateKey = `${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
                return HOLIDAYS_2026[dateKey];
            });

            setSelectedDate(holidayDate || monthMarriages[0]);
        }
    };

    const changeMonth = (monthIdx: number) => {
        const newDate = new Date(viewDate.getFullYear(), monthIdx, 1);
        setViewDate(newDate);
        autoSelectDate(newDate);
    };

    const changeYear = (offset: number) => {
        const newDate = new Date(viewDate.getFullYear() + offset, viewDate.getMonth(), 1);
        setViewDate(newDate);
        autoSelectDate(newDate);
    };

    const goToToday = () => {
        const d = new Date();
        const newView = new Date(d.getFullYear(), d.getMonth(), 1);
        setViewDate(newView);
        setSelectedDate(d);
        listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleShare = (e: React.MouseEvent) => {
        e.stopPropagation();
        const dateStr = selectedDate.toISOString().split('T')[0];
        const url = `${window.location.origin}${window.location.pathname}?date=${dateStr}`;
        const text = `சுப முகூர்த்த நாட்காட்டி: ${selectedDate.getDate()} ${monthsEng[selectedDate.getMonth()]} (${getTamilDayName(selectedDate)}). முகூர்த்த தேதிகளைப் பாருங்கள்: `;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + url)}`;
        window.open(whatsappUrl, '_blank');
    };

    const selectedTamil = getTamilDate(selectedDate);
    const selectedPanchangam = getPanchangam(selectedDate);
    const selectedMuhurthamTimes = getMuhurthamTimes(selectedDate);

    // Filter marriages for this month
    const currentMonthMarriages = VALUABLE_MARRIAGE_DATES.filter(dateStr => {
        const d = new Date(dateStr);
        return d.getMonth() === viewDate.getMonth() && d.getFullYear() === viewDate.getFullYear();
    }).map(dateStr => new Date(dateStr));

    const getHolidayInfo = (date: Date) => {
        const dateKey = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        return HOLIDAYS_2026[dateKey];
    };

    return (
        <div className="flex flex-col lg:flex-row gap-0 w-full lg:max-w-[1440px] lg:mx-auto bg-gray-50 lg:rounded-3xl shadow-none lg:shadow-2xl overflow-hidden border-y lg:border border-gray-200">

            {/* Left Column: Month Selector (Sidebar) */}
            <div className="w-full lg:w-48 bg-[#8B1A1A] text-white flex flex-col shrink-0">
                <div className="p-4 flex items-center justify-between border-b border-red-800">
                    <button onClick={() => changeYear(-1)} className="p-1 hover:bg-red-800 rounded transition-colors text-xs">◀</button>
                    <span className="text-xl font-black">{viewDate.getFullYear()}</span>
                    <button onClick={() => changeYear(1)} className="p-1 hover:bg-red-800 rounded transition-colors text-xs">▶</button>
                </div>
                <div className="flex lg:flex-col overflow-x-auto lg:overflow-y-auto no-scrollbar py-2">
                    {monthsEng.map((m, idx) => (
                        <button
                            key={m}
                            onClick={() => changeMonth(idx)}
                            className={`px-6 py-3 text-left text-sm font-bold transition-all whitespace-nowrap lg:whitespace-normal
                                ${viewDate.getMonth() === idx ? 'bg-black/20 border-l-4 border-white' : 'hover:bg-white/10 border-l-4 border-transparent'}
                            `}
                        >
                            {m === "January" ? "ஜனவரி" : m === "February" ? "பிப்ரவரி" : m === "March" ? "மார்ச்" : m === "April" ? "ஏப்ரல்" : m === "May" ? "மே" : m === "June" ? "ஜூன்" : m === "July" ? "ஜூலை" : m === "August" ? "ஆகஸ்ட்" : m === "September" ? "செப்டம்பர்" : m === "October" ? "அக்டோபர்" : m === "November" ? "நவம்பர்" : "டிசம்பர்"}
                        </button>
                    ))}
                </div>

                {/* Left Sidebar Status */}
                <div className="mt-auto p-4 border-t border-red-800 hidden lg:block bg-black/5">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-red-200 mb-2">தகவல் நிலை (Status)</h5>
                    <p className="text-[10px] text-red-100/80 font-bold leading-relaxed">
                        இந்த மாதத்தில் {currentMonthMarriages.length} முகூர்த்த தேதிகள் உள்ளன.
                    </p>
                </div>

                <div className="p-4 border-t border-red-800 hidden lg:block">
                    <p className="text-[9px] text-red-200/60 text-center italic leading-relaxed">
                        பாரம்பரிய பஞ்சாங்க முறைப்படி தொகுக்கப்பட்ட தகவல்.
                    </p>
                </div>
            </div>

            {/* Center Column: Muhurtham List */}
            <div
                ref={listRef}
                className="flex-1 bg-white p-4 md:p-8 flex flex-col min-w-0 scroll-mt-20 overflow-hidden"
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 px-2">
                    <div>
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                            {monthsEng[viewDate.getMonth()]} {viewDate.getFullYear()}
                        </h2>
                        <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-wider">முகூர்த்த தேதிகள் பட்டியல் (Auspicious Dates List)</p>
                    </div>
                    <button
                        onClick={handleShare}
                        className="flex items-center gap-2 px-6 py-2 bg-[#25D366] text-white rounded-full font-black hover:bg-[#128C7E] transition-all text-sm shadow-md whitespace-nowrap w-fit"
                        title="Share on WhatsApp"
                    >
                        <span>📲</span>
                        <span className="hidden md:inline">WhatsApp-ல் பகிர்க</span>
                        <span className="md:hidden">Share</span>
                    </button>
                </div>

                {currentMonthMarriages.length > 0 ? (
                    <div className="space-y-4 pt-2">
                        {currentMonthMarriages.map((date) => {
                            const tamil = getTamilDate(date);
                            const panchangam = getPanchangam(date);
                            const holiday = getHolidayInfo(date);
                            const isSelected = selectedDate.toDateString() === date.toDateString();
                            const isToday = today.toDateString() === date.toDateString();

                            return (
                                <button
                                    key={date.toISOString()}
                                    onClick={() => {
                                        setSelectedDate(date);
                                        if (window.innerWidth < 1024) {
                                            detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }
                                    }}
                                    className={`w-full text-left p-4 md:p-6 rounded-2xl border transition-all relative flex flex-col md:flex-row items-start md:items-center gap-4 group
                                        ${isSelected ? 'bg-orange-50 border-orange-500 ring-2 ring-orange-500/20 shadow-lg -translate-y-1' : 'bg-white border-gray-100 hover:border-orange-200 hover:bg-orange-50/30'}
                                        ${isToday ? 'border-primary/40' : ''}
                                    `}
                                >
                                    {/* Date Column */}
                                    <div className="flex items-center gap-4 shrink-0">
                                        <div className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center shadow-sm border 
                                            ${isSelected ? 'bg-orange-500 text-white border-orange-400' : 'bg-gray-50 text-gray-900 border-gray-100 group-hover:bg-white'}
                                        `}>
                                            <span className="text-2xl font-black leading-none">{date.getDate()}</span>
                                            <span className="text-[10px] font-black uppercase tracking-tighter opacity-80">{monthsEng[date.getMonth()].slice(0, 3)}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-sm font-black text-gray-900">{getTamilDayName(date)}</p>
                                            <p className="text-xs font-bold text-red-600">{tamil.tamilMonth} {tamil.tamilDay}</p>
                                        </div>
                                    </div>

                                    {/* timing column */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-black rounded uppercase tracking-wider border border-green-100">
                                                காலை 9:00 - 10:30
                                            </span>
                                            {holiday && (
                                                <span className="px-2 py-0.5 bg-red-50 text-red-700 text-[10px] font-black rounded uppercase tracking-wider border border-red-100 flex items-center gap-1">
                                                    <span>🏦</span> {holiday}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm font-bold text-gray-700 truncate">
                                            {panchangam.nakshatra.split(' ')[0]} - {panchangam.tithi.split('-')[0]}
                                        </p>
                                        {holiday && (
                                            <p className="text-[10px] font-bold text-blue-600 mt-1 flex items-center gap-1">
                                                <span>✔️</span> விடுமுறை நாள் - உறவினர்கள் வர எளிதாக இருக்கும் (Great for guests)
                                            </p>
                                        )}
                                    </div>

                                    {/* Detail Button */}
                                    <div className="hidden md:block">
                                        <span className={`px-4 py-2 rounded-xl text-xs font-black transition-all border
                                            ${isSelected ? 'bg-white text-orange-600 border-orange-200' : 'bg-gray-50 text-gray-400 border-gray-100 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-400'}
                                        `}>
                                            விவரங்கள்
                                        </span>
                                    </div>

                                    {isSelected && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-orange-500 rounded-r-full" />}
                                </button>
                            );
                        })}
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-gray-100 rounded-[2rem] bg-gray-50/30">
                        <div className="text-6xl mb-6 grayscale opacity-20">📅</div>
                        <h3 className="text-xl font-black text-gray-400">இந்த மாதத்தில் முகூர்த்த தேதிகள் இல்லை</h3>
                        <p className="text-sm font-bold text-gray-300 mt-2 max-w-sm uppercase tracking-wide">
                            (There are no marriage dates for the selected month)
                        </p>
                        <p className="text-xs font-bold text-gray-400 mt-4 uppercase tracking-widest">
                            வேறு ஒரு மாதத்தைத் தேர்ந்தெடுத்துப் பார்க்கவும் (Check another month)
                        </p>
                    </div>
                )}
            </div>

            {/* Right Column: Detailed View */}
            <div ref={detailsRef} className="w-full lg:w-[400px] bg-white lg:border-l border-gray-200 flex flex-col overflow-y-auto no-scrollbar lg:h-auto lg:max-h-none scroll-mt-24">

                <div className="bg-[#8B1A1A] p-6 text-white text-center shrink-0">
                    <div className="flex justify-between items-center mb-4 text-xs font-bold opacity-80 uppercase tracking-widest">
                        <span>{selectedTamil.tamilYear} ஆண்டு</span>
                        <span>{getTamilDayName(selectedDate)}</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <div className="text-right">
                            <p className="text-xl font-bold leading-tight uppercase tracking-tighter">{getTamilDayNameEng(selectedDate).slice(0, 3)}</p>
                        </div>
                        <div className="bg-white text-[#8B1A1A] w-16 h-16 rounded-2xl flex items-center justify-center text-4xl font-black shadow-lg">
                            {selectedDate.getDate()}
                        </div>
                        <div className="text-left">
                            <p className="text-xl font-bold leading-tight">{monthsEng[selectedDate.getMonth()]}</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    {/* Status Badge */}
                    <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-xl shadow-sm">
                        <p className="text-[10px] text-orange-600 font-black uppercase mb-1 tracking-widest">தேர்வு செய்த நாள் (Selected)</p>
                        <p className="text-gray-900 font-bold text-sm leading-relaxed">
                            {VALUABLE_MARRIAGE_DATES.includes(selectedDate.toISOString().split('T')[0])
                                ? 'இந்த நாள் பாரம்பரிய பஞ்சாங்கங்களில் முகூர்த்த நாளாகக் குறிப்பிடப்பட்டுள்ளது.'
                                : 'இது ஒரு சாதாரண நாள். முகூர்த்த நாட்களைப் பட்டியலில் காணலாம்.'}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="p-5 bg-gray-50 rounded-3xl border border-gray-100 flex items-start gap-4 hover:shadow-md transition-all">
                            <div className="text-2xl mt-1">⭐</div>
                            <div>
                                <h4 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-1">நட்சத்திரம் (Nakshatra)</h4>
                                <p className="text-lg font-bold text-gray-900 leading-snug">{selectedPanchangam.nakshatra}</p>
                                <p className="text-xs font-bold text-gray-400 mt-1 italic">முடிவு: {selectedPanchangam.nakshatraEndTime}</p>
                            </div>
                        </div>

                        <div className="p-5 bg-gray-50 rounded-3xl border border-gray-100 flex items-start gap-4 hover:shadow-md transition-all">
                            <div className="text-2xl mt-1">🌙</div>
                            <div>
                                <h4 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-1">திதி (Tithi)</h4>
                                <p className="text-lg font-bold text-gray-900 leading-snug">{selectedPanchangam.tithi}</p>
                                <p className="text-xs font-bold text-gray-400 mt-1 italic">முடிவு: {selectedPanchangam.tithiEndTime}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <DetailSlot
                            title="முகூர்த்த நேரம் (Timing)"
                            value="காலை 9:00 - 10:30"
                            icon="🕙"
                            bg="bg-green-50"
                            accent="text-green-700"
                        />
                        <DetailSlot
                            title="நல்ல நேரம்"
                            value={selectedMuhurthamTimes.nallaNeram[0]}
                            icon="✨"
                            bg="bg-blue-50"
                            accent="text-blue-700"
                        />
                    </div>

                    {/* Funnel Note */}
                    <div className="bg-gray-900 p-6 rounded-[2rem] text-white shadow-xl">
                        <h5 className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 italic">நிபுணர் குறிப்பு (Note)</h5>
                        <p className="text-[11px] font-bold leading-relaxed opacity-80 uppercase">
                            விசேஷங்களைத் திட்டமிடும் போது உங்கள் ஜாதகப்படி நட்சத்திரப் பொருத்தத்தையும் சரிபார்க்க பரிந்துரைக்கப்படுகிறது.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DetailSlot({ title, value, icon, bg, accent }: { title: string, value: string, icon: string, bg: string, accent: string }) {
    return (
        <div className={`${bg} p-4 rounded-2xl flex items-center justify-between border border-black/5`}>
            <div className="flex items-center gap-3">
                <span className="text-xl">{icon}</span>
                <span className="text-xs font-black text-gray-500 uppercase tracking-tight">{title}</span>
            </div>
            <span className={`text-sm font-black ${accent}`}>{value}</span>
        </div>
    );
}
