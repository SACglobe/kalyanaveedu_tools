'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';
import { usePWA } from '@/components/providers/PWAProvider';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { showInstallButton, installApp } = usePWA();

    return (
        <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 h-20 lg:h-24 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 lg:gap-4 group shrink-0">
                    <div className="relative w-10 h-10 lg:w-12 lg:h-12 group-hover:scale-105 transition-transform duration-300">
                        <img src="/logo.png" alt="Kalyana Veedu Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl lg:text-2xl font-black text-primary tracking-tight leading-none">
                            {SITE_CONFIG.name}
                        </span>
                        <span className="text-[9px] lg:text-[10px] text-gray-400 font-bold tracking-widest uppercase mt-1">
                            Matrimony4U
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-5 lg:gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex flex-col items-center group transition-all ${link.href === '/tools' ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
                        >
                            <span className="text-[14px] lg:text-[16px] font-black tracking-tight leading-none group-hover:-translate-y-0.5 transition-transform">
                                {link.label.split(' ')[0]}
                            </span>
                            <span className="text-[10px] lg:text-[11px] font-bold text-gray-400 uppercase tracking-tighter mt-1 opacity-0 group-hover:opacity-100 lg:opacity-60 transition-all">
                                {link.label.includes('(') ? link.label.split('(')[1].replace(')', '') : ''}
                            </span>
                        </Link>
                    ))}
                    <Link
                        href="/tools/tamil-calendar"
                        className="flex flex-col items-center group text-primary hover:text-accent transition-all"
                    >
                        <span className="text-[14px] lg:text-[16px] font-black tracking-tight leading-none flex items-center gap-1 group-hover:-translate-y-0.5 transition-transform">
                            📅 காலண்டர்
                        </span>
                        <span className="text-[10px] lg:text-[11px] font-bold text-gray-400 uppercase tracking-tighter mt-1 opacity-0 group-hover:opacity-100 lg:opacity-60 transition-all">
                            Calendar
                        </span>
                    </Link>

                    {showInstallButton && (
                        <button
                            onClick={installApp}
                            className="bg-green-600 text-white px-4 py-2 rounded-full text-[12px] font-black hover:bg-green-700 transition-all flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 shrink-0"
                        >
                            📲 <span>Install App</span>
                        </button>
                    )}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-gray-700 hover:bg-gray-50 rounded"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white absolute w-full shadow-lg">
                    <nav className="flex flex-col p-6 gap-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex flex-col border-b border-gray-50 pb-4 last:border-0 last:pb-0"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="text-lg font-black text-gray-800">
                                    {link.label.split(' ')[0]}
                                </span>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                                    {link.label.includes('(') ? link.label.split('(')[1].replace(')', '') : ''}
                                </span>
                            </Link>
                        ))}
                        <Link
                            href="/tools/tamil-calendar"
                            className="flex flex-col border-b border-gray-50 pb-4"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span className="text-lg font-black text-primary flex items-center gap-2">
                                📅 தமிழ் காலண்டர்
                            </span>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-0.5 ml-8">
                                Tamil Calendar
                            </span>
                        </Link>
                        {showInstallButton && (
                            <button
                                onClick={() => {
                                    installApp();
                                    setIsMobileMenuOpen(false);
                                }}
                                className="bg-green-600 text-white px-6 py-4 rounded-xl font-black hover:bg-green-700 transition-colors flex items-center justify-center gap-3 shadow-lg"
                            >
                                📲 <span>Install App</span>
                            </button>
                        )}
                        <Link
                            href="/tools"
                            className="bg-primary text-center text-white px-6 py-4 rounded-xl font-black hover:bg-accent transition-colors mt-2 shadow-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            அனைத்து கருவிகள் (All Tools)
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
