"use client"
import { useLanguage } from '@/app/language-provider';

export default function LanguageSwitcher() {
    const { locale, setLocale } = useLanguage();

    return (
        <div className="flex items-center rounded-full border border-[#3E3E3E] overflow-hidden text-[13px] font-[600]">
            {['en', 'id'].map((l) => (
                <button
                    key={l}
                    type="button"
                    onClick={() => setLocale(l)}
                    aria-pressed={locale === l}
                    className={`px-3 py-1.5 animation-effect ${locale === l
                        ? 'bg-[#FF5733] dark:bg-[#68CC93] text-[#FCFAF4]'
                        : 'text-[#1C1C1C] dark:text-[#E4E4E4] hover:text-[#FF5733] dark:hover:text-[#68CC93]'}`}
                >
                    {l.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
