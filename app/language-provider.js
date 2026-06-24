"use client"
import { createContext, useContext, useEffect, useState } from 'react';
import { dictionary } from '@/app/i18n/dictionary';

const LanguageContext = createContext({
    locale: 'en',
    setLocale: () => { },
    t: dictionary.en,
});

export function LanguageProvider({ children }) {
    const [locale, setLocaleState] = useState('en');

    useEffect(() => {
        const stored = localStorage.getItem('lang');
        if (stored === 'en' || stored === 'id') {
            setLocaleState(stored);
        }
    }, []);

    const setLocale = (next) => {
        setLocaleState(next);
        try {
            localStorage.setItem('lang', next);
        } catch (e) {
            // ignore storage errors
        }
    };

    const t = dictionary[locale] || dictionary.en;

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
