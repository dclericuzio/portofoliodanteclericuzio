"use client"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"
import { works } from "@/app/constants"
import { useLanguage } from "@/app/language-provider"
import Reveal from "@/components/Reveal"

export default function WorksHero () {

    const { t } = useLanguage();

    return (
        <div className="bg-[#E4E4E4] dark:bg-[#1C1C1C] min-h-screen pt-28 pb-16 px-[16px]">
            <div className="dc-container">

                <div className="pt-2 pb-10 md:pb-14">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="uppercase tracking-[2px] text-[12px] md:text-[14px] font-[500] text-[#7E7E7E]">{t.works.eyebrow}</span>
                        <span className="text-[12px] md:text-[14px] font-[500] text-[#7E7E7E]">({works.length})</span>
                    </div>
                    <h1 className="text-[#1C1C1C] dark:text-[#E4E4E4] font-[600] leading-[1.02] tracking-[-1px] md:tracking-[-3px] text-[clamp(40px,8vw,110px)]">
                        {t.works.title}
                    </h1>
                    <p className="mt-6 max-w-[560px] text-[#7E7E7E] font-[500] text-[16px] md:text-[20px] tracking-[-0.5px] leading-relaxed">
                        {t.works.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {works.map((item, i) => (
                        <Reveal key={i} delay={(i % 3) * 80}>
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

            </div>
        </div>
    )
}
