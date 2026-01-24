"use client";

import { useState, useEffect, useRef } from 'react';
import {
    getTamilDate,
    getPanchangam,
    getTamilDayName,
    getTamilDayNameEng,
    getMuhurthamTimes
} from '@/lib/tamil-calendar-utils';
import { TAMIL_MONTHS, FESTIVALS, HOLIDAYS_2026, VALUABLE_MARRIAGE_DATES, AMAVASAI_DATES_2026, POURNAMI_DATES_2026 } from '@/lib/tamil-calendar-data';

export default function TamilCalendar() {
    const [mounted, setMounted] = useState(false);
    const [viewDate, setViewDate] = useState(new Date(2026, 0, 1));
    const [selectedDate, setSelectedDate] = useState(new Date(2026, 0, 1));
    const detailsRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    // Swipe Navigation Refs
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    useEffect(() => {
        setMounted(true);
        const today = new Date();

        // Handle URL Params
        const params = new URLSearchParams(window.location.search);
        const dateParam = params.get('date');

        if (dateParam) {
            const d = new Date(dateParam);
            if (!isNaN(d.getTime())) {
                setViewDate(new Date(d.getFullYear(), d.getMonth(), 1));
                setSelectedDate(d);
                // Scroll to details after a short delay to allow rendering
                setTimeout(() => {
                    detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 500);
            }
        } else {
            setViewDate(new Date(today.getFullYear(), today.getMonth(), 1));
            setSelectedDate(today);
            // Scroll to grid if no date param
            setTimeout(() => {
                gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 500);
        }
    }, []);

    if (!mounted) {
        return <div className="min-h-[600px] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>;
    }

    const today = new Date();
    const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();

    const monthsEng = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const changeMonth = (monthIdx: number) => {
        setViewDate(new Date(viewDate.getFullYear(), monthIdx, 1));
    };

    const changeYear = (offset: number) => {
        setViewDate(new Date(viewDate.getFullYear() + offset, viewDate.getMonth(), 1));
    };

    const goToToday = () => {
        const d = new Date();
        setViewDate(new Date(d.getFullYear(), d.getMonth(), 1));
        setSelectedDate(d);
        gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleShare = (e: React.MouseEvent) => {
        e.stopPropagation();
        const dateStr = selectedDate.toISOString().split('T')[0];
        const url = `${window.location.origin}${window.location.pathname}?date=${dateStr}`;
        const text = `தமிழ் காலண்டர்: ${selectedTamil.tamilDay} ${selectedTamil.tamilMonth} (${getTamilDayName(selectedDate)}). நட்சத்திரம்: ${selectedPanchangam.nakshatra}. பாருங்கள்: `;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + url)}`;

        window.open(whatsappUrl, '_blank');
    };

    const selectedTamil = getTamilDate(selectedDate);
    const selectedPanchangam = getPanchangam(selectedDate);
    const selectedMuhurtham = getMuhurthamTimes(selectedDate);

    const getHighlightedDates = () => {
        const month = viewDate.getMonth() + 1;
        const year = viewDate.getFullYear();
        const highlights: { day: number, type: 'holiday' | 'marriage' | 'both', name: string }[] = [];

        for (let d = 1; d <= daysInMonth; d++) {
            const dateStr = `${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            const fullDateStr = `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            const holiday = HOLIDAYS_2026[dateStr];
            const isMarriage = VALUABLE_MARRIAGE_DATES.includes(fullDateStr);

            if (holiday || isMarriage) {
                highlights.push({
                    day: d,
                    type: holiday && isMarriage ? 'both' : holiday ? 'holiday' : 'marriage',
                    name: holiday || 'சுப முகூர்த்தம்'
                });
            }
        }
        return highlights;
    };

    const monthlyHighlights = getHighlightedDates();

    // Swipe Navigation Logic
    const onTouchStart = (e: React.TouchEvent) => {
        touchEndX.current = null;
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const onTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            changeMonth(viewDate.getMonth() + 1);
        }
        if (isRightSwipe) {
            changeMonth(viewDate.getMonth() - 1);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-0 w-full lg:max-w-[1440px] lg:mx-auto bg-gray-50 lg:rounded-3xl shadow-none lg:shadow-2xl overflow-hidden border-y lg:border border-gray-200">

            {/* Left Column: Month Selector (Sidebar) */}
            <div className="w-full lg:w-48 bg-[#8B1A1A] text-white flex flex-col shrink-0">
                <div className="p-4 flex items-center justify-between border-b border-red-800">
                    <button onClick={() => changeYear(-1)} className="p-1 hover:bg-red-800 rounded">◀</button>
                    <span className="text-2xl font-black">{viewDate.getFullYear()}</span>
                    <button onClick={() => changeYear(1)} className="p-1 hover:bg-red-800 rounded">▶</button>
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

                {/* Monthly Highlights (Visual Funnel) */}
                <div className="p-4 bg-black/10 border-t border-red-800 hidden lg:block">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-red-200 mb-3">இந்த மாத சிறப்பு (Monthly Highlights)</h5>
                    <div className="space-y-3 max-h-[300px] overflow-y-auto no-scrollbar">
                        {monthlyHighlights.map(h => (
                            <div key={h.day} className="flex gap-2 items-start cursor-pointer group" onClick={() => {
                                const d = new Date(viewDate.getFullYear(), viewDate.getMonth(), h.day);
                                setSelectedDate(d);
                            }}>
                                <span className={`w-6 h-6 rounded flex items-center justify-center shrink-0 text-[10px] font-bold ${h.type === 'holiday' ? 'bg-red-600' : 'bg-orange-500'}`}>
                                    {h.day}
                                </span>
                                <p className="text-[10px] font-bold opacity-80 group-hover:opacity-100 transition-opacity leading-tight">{h.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left Sidebar Disclaimer */}
                <div className="mt-auto p-4 border-t border-red-800 hidden lg:block">
                    <p className="text-[9px] text-red-200/60 text-center italic leading-relaxed">
                        இந்த காலண்டர் தகவல் நோக்கத்திற்காக மட்டுமே.<br />
                        எந்த விதமான முடிவெடுக்க ஆலோசனையாக பயன்படுத்த வேண்டாம்.
                    </p>
                </div>
            </div>

            {/* Center Column: Calendar Grid */}
            <div
                ref={gridRef}
                className="flex-1 bg-white  p-4 px-0 md:p-8 flex flex-col min-w-0 scroll-mt-20"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                        {monthsEng[viewDate.getMonth()]} {viewDate.getFullYear()}
                    </h2>
                    <div className="flex gap-2">
                        <button
                            onClick={goToToday}
                            className="px-6 py-2 bg-primary/10 text-primary rounded-full font-bold hover:bg-primary/20 transition-all text-sm border border-primary/20 whitespace-nowrap"
                        >
                            இன்று (Today)
                        </button>
                        <button
                            onClick={handleShare}
                            className="flex items-center gap-2 px-6 py-2 bg-[#25D366] text-white rounded-full font-black hover:bg-[#128C7E] transition-all text-sm shadow-md whitespace-nowrap"
                            title="Share on WhatsApp"
                        >
                            <span>📲</span>
                            <span className="hidden md:inline">WhatsApp-ல் பகிர்க</span>
                            <span className="md:hidden">Share</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    {["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"].map(day => (
                        <div key={day} className="bg-gray-50 text-center text-[10px] md:text-sm font-black text-gray-500 py-3 uppercase tracking-widest">
                            {day}
                        </div>
                    ))}

                    {/* Previous Month Cells */}
                    {Array.from({ length: firstDayOfMonth }).map((_, i) => {
                        const prevMonthLastDay = new Date(viewDate.getFullYear(), viewDate.getMonth(), 0).getDate();
                        const day = prevMonthLastDay - firstDayOfMonth + i + 1;
                        const prevDate = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, day);
                        const tamil = getTamilDate(prevDate);
                        return (
                            <div key={`prev-${i}`} className="bg-gray-50/30 h-16 md:h-24 flex flex-col p-1 md:p-1.5 opacity-20 grayscale cursor-not-allowed">
                                <div className="flex justify-between items-start w-full">
                                    <span className="text-lg md:text-2xl font-bold text-gray-400">{day}</span>
                                    <span className="text-[10px] md:text-xs font-bold text-red-300">{tamil.tamilDay}</span>
                                </div>
                            </div>
                        );
                    })}

                    {/* Current Month Cells */}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
                        const isToday = date.toDateString() === today.toDateString();
                        const isSelected = date.toDateString() === selectedDate.toDateString();
                        const tamil = getTamilDate(date);
                        const panchangam = getPanchangam(date);
                        const dateStr = `${String(viewDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                        const fullDateStr = `${viewDate.getFullYear()}-${String(viewDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                        const isHoliday = !!HOLIDAYS_2026[dateStr];
                        const isMarriage = VALUABLE_MARRIAGE_DATES.includes(fullDateStr);

                        const shortNaks = panchangam.nakshatra.includes('வரை') ? panchangam.nakshatra.split('வரை')[1].trim() : panchangam.nakshatra.split(' ')[0];
                        const shortTithi = panchangam.tithi.includes('வரை') ? panchangam.tithi.split('வரை')[1].trim().split(' ')[0] : panchangam.tithi.split('-')[0].trim();

                        return (
                            <button
                                key={day}
                                onClick={() => {
                                    setSelectedDate(date);
                                    if (window.innerWidth < 1024) {
                                        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                                className={`h-16 md:h-24 flex flex-col p-1 md:p-1.5 transition-all relative group text-left border-0
                                    ${isSelected ? 'bg-orange-50 z-10' : 'bg-white hover:bg-gray-50'}
                                    ${isHoliday ? 'bg-red-50/30' : ''}
                                `}
                            >
                                <div className="flex justify-between items-start w-full">
                                    <span className={`text-xl md:text-3xl font-black ${isSelected ? 'text-primary' : isHoliday ? 'text-red-600' : 'text-gray-900'}`}>
                                        {day}
                                    </span>
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="text-xs md:text-sm font-black text-red-600 leading-none">
                                            {tamil.tamilDay}
                                        </span>
                                        <div className="flex flex-col items-center pointer-events-none">
                                            {panchangam.isPournami && <PournamiSymbol />}
                                            {panchangam.isAmavasai && <AmavasaiSymbol />}
                                            {isMarriage && <MangalyamSymbol />}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-auto space-y-0.5 relative">
                                    <p className="text-[8px] md:text-[10px] text-gray-600 font-bold truncate">{shortNaks}</p>
                                    <p className="text-[8px] md:text-[10px] text-blue-600 font-bold truncate">{shortTithi}</p>
                                    <div className="flex gap-1 mt-0.5 items-center">
                                        {isMarriage && <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-sm" />}
                                        {isHoliday && <div className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-sm" />}
                                        {isToday && <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-md ring-1 ring-white" />}
                                    </div>
                                </div>
                                {isSelected && <div className="absolute inset-0 border-2 border-primary pointer-events-none rounded-2xl" />}
                            </button>
                        );
                    })}

                    {/* Next Month Cells (Trailing) */}
                    {(() => {
                        const totalSoFar = firstDayOfMonth + daysInMonth;
                        const remaining = (7 - (totalSoFar % 7)) % 7;
                        return Array.from({ length: remaining }).map((_, i) => {
                            const date = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, i + 1);
                            const tamil = getTamilDate(date);
                            return (
                                <div key={`next-${i}`} className="bg-gray-50/30 h-16 md:h-24 flex flex-col p-1 md:p-1.5 opacity-20 grayscale cursor-not-allowed">
                                    <div className="flex justify-between items-start w-full">
                                        <span className="text-lg md:text-2xl font-bold text-gray-400">{i + 1}</span>
                                        <span className="text-[10px] md:text-xs font-bold text-red-300">{tamil.tamilDay}</span>
                                    </div>
                                </div>
                            );
                        });
                    })()}
                </div>
            </div>

            {/* Right Column: Detailed View */}
            <div ref={detailsRef} className="w-full lg:w-[400px] bg-white lg:border-l border-gray-200 flex flex-col overflow-y-auto no-scrollbar lg:h-auto lg:max-h-none scroll-mt-24">

                <div className="bg-[#8B1A1A] p-6 text-white text-center shrink-0">
                    <div className="flex justify-between items-center mb-4 text-xs font-bold opacity-80 uppercase tracking-widest">
                        <span>{selectedTamil.tamilYear}</span>
                        <span>{getTamilDayName(selectedDate)}</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <div className="text-right">
                            <p className="text-xl font-bold leading-tight">{selectedTamil.tamilMonth}</p>
                        </div>
                        <div className="bg-white text-[#8B1A1A] w-16 h-16 rounded-xl flex items-center justify-center text-4xl font-black shadow-lg">
                            {selectedTamil.tamilDay}
                        </div>
                        <div className="text-left">
                            <p className="text-xl font-bold leading-tight">{monthsEng[selectedDate.getMonth()]}</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    {(HOLIDAYS_2026[`${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`] ||
                        VALUABLE_MARRIAGE_DATES.includes(selectedDate.toISOString().split('T')[0])) && (
                            <div className="p-3 bg-orange-50 border-l-4 border-orange-500 rounded-r-xl">
                                <p className="text-[10px] text-orange-600 font-extrabold uppercase mb-1">சிறப்பு தகவல் (Info)</p>
                                <p className="text-gray-900 font-black text-sm">
                                    {HOLIDAYS_2026[`${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`] || 'இன்று சுப முகூர்த்த நாள் (Auspicious Wedding Day)'}
                                </p>
                            </div>
                        )}

                    <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
                            <div className="text-2xl mt-1">⭐</div>
                            <div>
                                <h4 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-1">நட்சத்திரம் (Nakshatra)</h4>
                                <p className="text-lg font-bold text-gray-900 leading-snug">இன்று {selectedPanchangam.nakshatraEndTime} வரை {selectedPanchangam.nakshatra.split(' ')[0]}</p>
                                <p className="text-sm font-medium text-gray-500 mt-1 italic">பின்பு {selectedPanchangam.nextNakshatra}</p>
                            </div>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
                            <div className="text-2xl mt-1">🌙</div>
                            <div>
                                <h4 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-1">திதி (Tithi)</h4>
                                <p className="text-lg font-bold text-gray-900 leading-snug">இன்று {selectedPanchangam.tithiEndTime} வரை {selectedPanchangam.tithi.split('-')[0]}</p>
                                <p className="text-sm font-medium text-gray-500 mt-1 italic">பின்பு {selectedPanchangam.nextTithi}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <TimeTable
                            title="நல்ல நேரம்"
                            items={[
                                { label: "காலை", value: selectedMuhurtham.nallaNeram[0] },
                                { label: "மாலை", value: selectedMuhurtham.nallaNeram[1] }
                            ]}
                            bg="bg-green-50"
                            accent="text-green-700"
                        />

                        <TimeTable
                            title="இராகு காலம், எமகண்டம், குளிகை"
                            items={[
                                { label: "இராகு காலம்", value: selectedMuhurtham.rahuKaalam },
                                { label: "எமகண்டம்", value: selectedMuhurtham.yamagandam },
                                { label: "குளிகை", value: selectedMuhurtham.kulikai }
                            ]}
                            bg="bg-red-50"
                            accent="text-red-700"
                        />
                    </div>

                    <div>
                        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            இன்றைய ராசிபலன் <span className="h-px flex-1 bg-gray-100 italic">(Daily Focus)</span>
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                            {RASI_SIGNS.map((rasi, idx) => {
                                // Dynamic index based on selected date to rotate predictions
                                const dateHash = selectedDate.getFullYear() + selectedDate.getMonth() + selectedDate.getDate() + idx;
                                const predictionIdx = dateHash % RASI_PREDICTIONS.length;

                                return (
                                    <div key={rasi.name} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-xl transition-colors group">
                                        <span className="text-xl grayscale group-hover:grayscale-0 transition-all">{rasi.icon}</span>
                                        <div>
                                            <p className="text-xs font-bold text-gray-900">{rasi.name}</p>
                                            <p className="text-[10px] text-gray-500 font-medium">{RASI_PREDICTIONS[predictionIdx]}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

// Traditional Symbols Components
function AmavasaiSymbol() {
    return (
        <div className="w-3 h-3 md:w-5 md:h-5 bg-red-500 rounded-full" title="அமாவாசை (Amavasai)" />
    );
}

function PournamiSymbol() {
    return (
        <div className="w-3 h-3 md:w-5 md:h-5 border-2 border-red-500 rounded-full" />
    );
}

function MangalyamSymbol() {
    return (
        <svg viewBox="0 0 100 100" className="w-4 h-4 md:w-6 md:h-6 fill-red-600">
            <title>சுப முகூர்த்தம் (Subha Muhurtham)</title>
            {/* The cord/thread */}
            <path d="M10,40 Q50,25 90,40" fill="none" stroke="currentColor" strokeWidth="2" />
            {/* Central Thaali Piece */}
            <path d="M40,40 L60,40 L55,65 Q50,75 45,65 Z" />
            {/* Traditional side beads/pieces */}
            <circle cx="35" cy="42" r="3" />
            <circle cx="65" cy="42" r="3" />
            <path d="M30,42 L30,55 L35,55 L35,42 Z" />
            <path d="M65,42 L65,55 L70,55 L70,42 Z" />
            {/* Bottom dot */}
            <circle cx="50" cy="78" r="4" className="fill-orange-500" />
        </svg>
    );
}

function TimeTable({ title, items, bg, accent }: { title: string, items: { label: string, value: string }[], bg: string, accent: string }) {
    return (
        <div className={`${bg} rounded-2xl overflow-hidden border border-black/5`}>
            <div className="bg-[#8B1A1A] px-4 py-2">
                <h5 className="text-[10px] leading-tight font-black text-white uppercase tracking-wider">{title}</h5>
            </div>
            <div className="p-2 space-y-1">
                {items.map(item => (
                    <div key={item.label} className="flex justify-between items-center px-2 py-1.5 border-b border-black/5 last:border-0">
                        <span className="text-[11px] font-bold text-gray-600">{item.label}</span>
                        <span className={`text-[11px] font-black ${accent}`}>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

const RASI_SIGNS = [
    { name: "மேஷம்", icon: "🐏" }, { name: "ரிஷபம்", icon: "🐂" }, { name: "மிதுனம்", icon: "👬" },
    { name: "கடகம்", icon: "🦀" }, { name: "சிம்மம்", icon: "🦁" }, { name: "கன்னி", icon: "💃" },
    { name: "துலாம்", icon: "⚖️" }, { name: "விருச்சிகம்", icon: "🦂" }, { name: "தனுசு", icon: "🏹" },
    { name: "மகரம்", icon: "🐐" }, { name: "கும்பம்", icon: "🏺" }, { name: "மீனம்", icon: "🐟" }
];

const RASI_PREDICTIONS = [
    "கீர்த்தி", "பாராட்டு", "கவனம்", "நிம்மதி", "அன்பு", "தடங்கல்",
    "ஆதாயம்", "அமைதி", "செலவு", "பெருமை", "பரிசு", "மகிழ்ச்சி"
];
