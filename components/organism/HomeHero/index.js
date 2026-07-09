"use client"
import React from 'react'
import Link from "next/link";
import Typewriter from 'typewriter-effect';
import { FiArrowUpRight } from "react-icons/fi";
import { svgLogos, works } from "@/app/constants"
import { useLanguage } from "@/app/language-provider"
import Reveal from "@/components/Reveal"

export default function HomeHero(){

    const { t, locale } = useLanguage();
    const [showSkeleton, setShowSkeleton] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowSkeleton(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const services = t.home.services.map((s, i) => ({ n: `0${i + 1}`, ...s }));

    const featuredNames = ['LingoFoundry', 'PT SBS', 'PT SKL', 'Vit Pilates'];
    const selectedWork = featuredNames
        .map((name) => works.find((w) => w.name === name))
        .filter(Boolean);

    return (
        <div className="bg-[#E4E4E4] dark:bg-[#1C1C1C] min-h-screen pt-28 pb-5 px-[16px]">
            <div className="dc-container">

                <div className="pt-2 pb-12 md:pb-16 grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-8">
                        <h1 className="text-[#1C1C1C] dark:text-[#E4E4E4] font-[600] leading-[1.02] tracking-[-1px] md:tracking-[-3px] text-[clamp(34px,5vw,80px)]">
                            {t.home.headlineLine1}<br className="hidden sm:block" /> {t.home.headlineLine2}
                            <span className="block text-[#FF5733] dark:text-[#68CC93] min-h-[1.1em]">
                                {showSkeleton
                                    ?
                                    (
                                        <span className="inline-block align-middle h-[0.7em] w-[6ch] rounded-md bg-[#7E7E7E]/30 animate-pulse" />
                                    )
                                    :
                                    (
                                        <Typewriter
                                            key={locale}
                                            options={{
                                                strings: t.home.roles,
                                                autoStart: true,
                                                loop: true
                                            }}
                                        />
                                    )
                                }
                            </span>
                        </h1>

                        <p className="mt-6 max-w-[560px] text-[#7E7E7E] font-[500] text-[16px] md:text-[20px] tracking-[-0.5px] leading-relaxed">
                            {t.home.intro}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link href="/works">
                                <button className="rounded-[10px] py-[14px] px-[28px] text-[16px] font-[700] text-[#FCFAF4] bg-[#FF5733] dark:bg-[#68CC93] hover:opacity-90 animation-effect">
                                    {t.home.seeWork}
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="rounded-[10px] py-[14px] px-[28px] text-[16px] font-[700] text-[#1C1C1C] dark:text-[#E4E4E4] border border-[#3E3E3E] hover:text-[#FF5733] hover:border-[#FF5733] dark:hover:text-[#68CC93] dark:hover:border-[#68CC93] animation-effect">
                                    {t.home.getInTouch}
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:col-span-4">
                        <div className="rounded-[20px] border border-[#3E3E3E] bg-[#F9F9F9] dark:bg-[#2C2C2C] p-6 ml-auto max-w-[360px]">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#68CC93] animate-pulse" />
                                <span className="uppercase tracking-[1px] text-[12px] font-[500] text-[#7E7E7E]">{t.home.available}</span>
                            </div>

                            <p className="text-[12px] uppercase tracking-[1px] font-[500] text-[#7E7E7E]">{t.home.focus}</p>
                            <p className="mt-1 text-[18px] font-[700] tracking-[-0.5px] text-[#1C1C1C] dark:text-[#E4E4E4]">{t.home.focusValue}</p>

                            <div className="h-px bg-[#3E3E3E] my-5" />

                            <p className="text-[12px] uppercase tracking-[1px] font-[500] text-[#7E7E7E]">{t.home.mainStack}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind', 'CSS', 'Vue.js', 'AI'].map((tech, i) => (
                                    <span key={i} className="rounded-full border border-[#3E3E3E] px-3 py-1 text-[13px] font-[500] text-[#1C1C1C] dark:text-[#E4E4E4]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* SELECTED WORK */}
                <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="uppercase tracking-[2px] text-[12px] md:text-[14px] font-[500] text-[#7E7E7E]">{t.home.selectedWork}</span>
                    <Link href="/works" className="group inline-flex items-center gap-1 text-[14px] font-[700] text-[#1C1C1C] dark:text-[#E4E4E4] hover:text-[#FF5733] dark:hover:text-[#68CC93] animation-effect whitespace-nowrap">
                        {t.home.viewAll}
                        <FiArrowUpRight className="text-[16px] group-hover:translate-x-1 group-hover:-translate-y-1 animation-effect" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {selectedWork.map((item, i) => (
                        <Reveal key={i} delay={(i % 2) * 90}>
                            <Link href={`/works/${item.slug}`}>
                                <div className="group rounded-[20px] border border-[#3E3E3E] bg-[#F9F9F9] dark:bg-[#2C2C2C] overflow-hidden animation-effect hover:border-[#FF5733] dark:hover:border-[#68CC93]">
                                    <div className="relative aspect-[16/10] flex items-center justify-center p-5 overflow-hidden bg-[#E4E4E4] dark:bg-[#1C1C1C]">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-105 animation-effect" />
                                    </div>
                                    <div className="flex items-center justify-between gap-4 p-6">
                                        <div>
                                            <span className="text-[12px] uppercase tracking-[1px] font-[500] text-[#7E7E7E]">{t.works.categories[item.categoryKey] || item.company}</span>
                                            <h3 className="mt-1 text-[24px] font-[700] tracking-[-1px] text-[#1C1C1C] dark:text-[#E4E4E4]">{item.name}</h3>
                                        </div>
                                        <FiArrowUpRight className="shrink-0 text-[24px] text-[#7E7E7E] group-hover:text-[#FF5733] dark:group-hover:text-[#68CC93] group-hover:translate-x-1 group-hover:-translate-y-1 animation-effect" />
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>

                {/* WHAT I DO */}
                <div className="flex items-center gap-4 mt-16 mb-6">
                    <span className="uppercase tracking-[2px] text-[12px] md:text-[14px] font-[500] text-[#7E7E7E]">{t.home.whatIDo}</span>
                    <span className="h-px flex-1 bg-[#3E3E3E]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {services.map((item, i) => (
                        <Reveal key={i} delay={i * 90}>
                            <div className="h-full rounded-[20px] border border-[#3E3E3E] bg-[#F9F9F9] dark:bg-[#2C2C2C] p-7">
                                <span className="text-[14px] font-[500] text-[#7E7E7E]">{item.n}</span>
                                <h3 className="mt-4 text-[26px] font-[700] tracking-[-1px] text-[#1C1C1C] dark:text-[#E4E4E4]">{item.title}</h3>
                                <p className="mt-3 text-[15px] font-[500] leading-relaxed text-[#7E7E7E]">{item.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* WHAT I USE */}
                <div className="flex items-center gap-4 mt-16 mb-6">
                    <span className="uppercase tracking-[2px] text-[12px] md:text-[14px] font-[500] text-[#7E7E7E]">{t.home.toolsIUse}</span>
                    <span className="h-px flex-1 bg-[#3E3E3E]" />
                </div>

                <div className="rounded-[20px] border border-[#3E3E3E] bg-[#F9F9F9] dark:bg-[#2C2C2C] overflow-hidden">
                    <div className="logos">
                        <div className="logos-slide">
                            {svgLogos.map((item, i) => (
                                <item.name key={i} className="text-[60px] text-[#7E7E7E] logos-inner" />
                            ))}
                        </div>
                        <div className="logos-slide">
                            {svgLogos.map((item, i) => (
                                <item.name key={i} className="text-[60px] text-[#7E7E7E] logos-inner" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <Reveal className="mt-16 rounded-[20px] border border-[#3E3E3E] bg-[#F9F9F9] dark:bg-[#2C2C2C] px-6 py-14 md:py-20 flex flex-col items-center text-center gap-6">
                    <h2 className="text-[clamp(32px,5vw,64px)] font-[700] tracking-[-2px] leading-[1.05] text-[#1C1C1C] dark:text-[#E4E4E4]">
                        {t.home.ctaTitlePre}<span className="text-[#FF5733] dark:text-[#68CC93]">{t.home.ctaTitleAccent}</span>
                    </h2>
                    <p className="max-w-[460px] text-[#7E7E7E] font-[500] text-[16px] md:text-[18px] leading-relaxed">
                        {t.home.ctaText}
                    </p>
                    <Link href="/contact">
                        <button className="rounded-[10px] py-[14px] px-[32px] text-[16px] font-[700] text-[#FCFAF4] bg-[#FF5733] dark:bg-[#68CC93] hover:opacity-90 animation-effect">
                            {t.home.getInTouch}
                        </button>
                    </Link>
                </Reveal>

            </div>
        </div>
    )
}