"use client";

import { useEffect, useState, createContext, useContext } from 'react';

type PlatformType = 'native-prompt' | 'ios' | 'mac' | 'other';

interface PWAContextType {
    deferredPrompt: any;
    showInstallButton: boolean;
    platform: PlatformType;
    showInstructionsModal: boolean;
    setShowInstructionsModal: (show: boolean) => void;
    installApp: () => void;
}

const PWAContext = createContext<PWAContextType>({
    deferredPrompt: null,
    showInstallButton: false,
    platform: 'other',
    showInstructionsModal: false,
    setShowInstructionsModal: () => { },
    installApp: () => { },
});

export const usePWA = () => useContext(PWAContext);

export default function PWAProvider({ children }: { children: React.ReactNode }) {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showInstallButton, setShowInstallButton] = useState(false);
    const [platform, setPlatform] = useState<PlatformType>('other');
    const [showInstructionsModal, setShowInstructionsModal] = useState(false);

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/sw.js')
                .then((reg) => console.log('SW Registered', reg))
                .catch((err) => console.error('SW Failed', err));
        }

        // Check if app is already running in standalone (installed) mode
        const isStandalone =
            window.matchMedia('(display-mode: standalone)').matches ||
            (window.navigator as any).standalone === true;

        if (isStandalone) {
            setShowInstallButton(false);
            return;
        }

        const userAgent = window.navigator.userAgent.toLowerCase();
        const isIOS = /iphone|ipad|ipod/.test(userAgent);
        const isMac = /macintosh|mac os x/.test(userAgent) && !isIOS;

        if (isIOS) {
            setPlatform('ios');
            setShowInstallButton(true);
        } else if (isMac) {
            setPlatform('mac');
            setShowInstallButton(true);
        }

        const handleBeforeInstallPrompt = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setPlatform('native-prompt');
            setShowInstallButton(true);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const installApp = () => {
        if (platform === 'native-prompt' && deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult: any) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the PWA prompt');
                }
                setDeferredPrompt(null);
                setShowInstallButton(false);
            });
        } else {
            // For iOS and Mac, show clear instructions modal
            setShowInstructionsModal(true);
        }
    };

    return (
        <PWAContext.Provider
            value={{
                deferredPrompt,
                showInstallButton,
                platform,
                showInstructionsModal,
                setShowInstructionsModal,
                installApp,
            }}
        >
            {children}

            {/* iOS / Mac / Browser Instructions Modal */}
            {showInstructionsModal && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
                    onClick={() => setShowInstructionsModal(false)}
                >
                    <div
                        className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl border border-gray-100 text-left relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowInstructionsModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 cursor-pointer"
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-5 text-2xl">
                            📲
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {platform === 'ios'
                                ? 'iPhone / iPad-ல் செயலியை நிறுவுவது எப்படி?'
                                : 'Mac / Laptop-ல் செயலியை நிறுவுவது எப்படி?'}
                        </h3>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-5">
                            Install Kalyana Veedu App
                        </p>

                        {platform === 'ios' ? (
                            <ol className="space-y-4 text-sm text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-orange-100 text-primary font-bold flex items-center justify-center shrink-0 text-xs">
                                        1
                                    </span>
                                    <span>
                                        Safari உலாவியின் கீழே உள்ள <strong>பகிர் (Share)</strong> பொத்தானை <span className="inline-block px-1.5 py-0.5 bg-gray-100 rounded text-xs">⎋ / [↑]</span> அழுத்தவும்.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-orange-100 text-primary font-bold flex items-center justify-center shrink-0 text-xs">
                                        2
                                    </span>
                                    <span>
                                        கீழே உருட்டி <strong>'Add to Home Screen' (முகப்புத் திரையில் சேர்)</strong> என்பதைத் தேர்ந்தெடுக்கவும்.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-orange-100 text-primary font-bold flex items-center justify-center shrink-0 text-xs">
                                        3
                                    </span>
                                    <span>
                                        மேலே உள்ள <strong>'Add' (சேர்)</strong> பொத்தானை அழுத்தினால் செயலி உங்கள் போனில் நிறுவப்பட்டுவிடும்.
                                    </span>
                                </li>
                            </ol>
                        ) : (
                            <ol className="space-y-4 text-sm text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-orange-100 text-primary font-bold flex items-center justify-center shrink-0 text-xs">
                                        1
                                    </span>
                                    <span>
                                        <strong>Chrome உலாவியில்:</strong> முகவரிப் பட்டியின் (Address bar) வலது மூலையில் உள்ள <strong>கணினி ஐகானை (Install icon)</strong> கிளிக் செய்யவும்.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-orange-100 text-primary font-bold flex items-center justify-center shrink-0 text-xs">
                                        2
                                    </span>
                                    <span>
                                        <strong>Safari உலாவியில்:</strong> மெனுவில் <strong>File → Add to Dock</strong> என்பதைத் தேர்ந்தெடுக்கவும்.
                                    </span>
                                </li>
                            </ol>
                        )}

                        <button
                            onClick={() => setShowInstructionsModal(false)}
                            className="mt-6 w-full bg-primary hover:bg-accent text-white font-bold py-3 px-4 rounded-xl transition cursor-pointer"
                        >
                            புரிந்தது (Got it)
                        </button>
                    </div>
                </div>
            )}
        </PWAContext.Provider>
    );
}
