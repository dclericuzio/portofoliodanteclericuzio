"use client"
import React from 'react'

// Deterministic widths so server and client render identically (avoids hydration mismatch)
const BARCODE = (() => {
    let seed = 7;
    return Array.from({ length: 60 }, () => {
        seed = (seed * 1103515245 + 12345) & 0x7fffffff;
        return (seed % 4) + 1;
    });
})();

export default function SplashScreen() {
    const [count, setCount] = React.useState(0);
    const [done, setDone] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);

    React.useEffect(() => {
        document.body.style.overflow = 'hidden';

        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                const next = prev + Math.floor(Math.random() * 5) + 2;
                return next >= 100 ? 100 : next;
            });
        }, 70);

        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        if (count >= 100) {
            const revealTimer = setTimeout(() => setDone(true), 500);
            const removeTimer = setTimeout(() => {
                setHidden(true);
                document.body.style.overflow = '';
            }, 1500);

            return () => {
                clearTimeout(revealTimer);
                clearTimeout(removeTimer);
            };
        }
    }, [count]);

    if (hidden) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col justify-between bg-[#E4E4E4] dark:bg-[#1C1C1C] px-[16px] py-6 md:px-10 md:py-10 ${done ? 'splash-reveal pointer-events-none' : ''}`}
        >
            <div className="flex items-start justify-between">
                <div className="flex flex-col">
                    <span className="text-[#1C1C1C] dark:text-[#E4E4E4] font-[600] text-[14px] md:text-[16px] tracking-[-0.5px]">
                        Dante Clericuzio
                    </span>
                    <span className="text-[#7E7E7E] font-[500] text-[12px] md:text-[14px] tracking-[-0.5px]">
                        Web Developer, Software Engineer
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#68CC93] animate-pulse" />
                    <span className="text-[#7E7E7E] font-[500] text-[12px] md:text-[14px] tracking-[-0.5px]">
                        Available for work
                    </span>
                </div>
            </div>

            <div className="flex flex-1 items-center justify-center">
                <div className="flex h-[50px] md:h-[70px] w-full max-w-[420px] items-stretch justify-center gap-[2px] md:gap-[3px]">
                    {BARCODE.map((width, i) => {
                        const filled = (i / BARCODE.length) * 100 <= count;
                        return (
                            <span
                                key={i}
                                className={`animation-effect h-full rounded-[1px] ${filled ? 'bg-[#FF5733] dark:bg-[#68CC93]' : 'bg-[#7E7E7E]/30 dark:bg-[#3E3E3E]'}`}
                                style={{ width: `${width}px` }}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="flex items-end justify-between">
                <span className="text-[#7E7E7E] font-[500] text-[12px] md:text-[14px] tracking-[-0.5px]">
                    Loading
                </span>
                <span className="text-[#1C1C1C] dark:text-[#E4E4E4] font-[600] text-[14px] md:text-[16px] tracking-[-0.5px]">
                    {count}%
                </span>
            </div>
        </div>
    );
}
