"use client";

import { useEffect, useState, createContext, useContext } from 'react';

const PWAContext = createContext<{
    deferredPrompt: any;
    showInstallButton: boolean;
    installApp: () => void;
}>({
    deferredPrompt: null,
    showInstallButton: false,
    installApp: () => { },
});

export const usePWA = () => useContext(PWAContext);

export default function PWAProvider({ children }: { children: React.ReactNode }) {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showInstallButton, setShowInstallButton] = useState(false);

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/sw.js')
                .then((reg) => console.log('SW Registered', reg))
                .catch((err) => console.error('SW Failed', err));
        }

        const handleBeforeInstallPrompt = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowInstallButton(true);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const installApp = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult: any) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the PWA prompt');
                }
                setDeferredPrompt(null);
                setShowInstallButton(false);
            });
        }
    };

    return (
        <PWAContext.Provider value={{ deferredPrompt, showInstallButton, installApp }}>
            {children}
        </PWAContext.Provider>
    );
}
