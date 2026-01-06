'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 group-hover:scale-105 transition-transform duration-300">
                        <img src="/logo.png" alt="Kalyana Veedu Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-primary tracking-wide leading-none">
                            {SITE_CONFIG.name}
                        </span>
                        <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase mt-0.5">
                            A Unit of Matrimony4U
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gray-700 hover:text-primary font-medium transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/tools"
                        className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-accent transition-colors"
                    >
                        கருவிகள்
                    </Link>
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
                    <nav className="flex flex-col p-4 gap-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 py-2 hover:text-primary border-b border-gray-50 last:border-0"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/tools"
                            className="bg-primary text-center text-white px-5 py-3 rounded-lg font-medium hover:bg-accent transition-colors mt-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            அனைத்து கருவிகள்
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
