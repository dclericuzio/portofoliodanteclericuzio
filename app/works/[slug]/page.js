"use client"
import Link from 'next/link'
import { FiArrowUpRight, FiArrowLeft } from 'react-icons/fi'
import { works } from '@/app/constants'
import { useLanguage } from '@/app/language-provider'
import Reveal from '@/components/Reveal'

export default function ProjectDetail({ params }) {
    const { t, locale } = useLanguage()
    const project = works.find((w) => w.slug === params.slug)

    if (!project) {
        return (
            <div className="bg-[#E4E4E4] dark:bg-[#1C1C1C] min-h-screen pt-28 pb-16 px-[16px]">
                <div className="dc-container">
                    <Link href="/works" className="inline-flex items-center gap-2 text-[14px] font-[700] text-[#7E7E7E] hover:text-[#FF5733] dark:hover:text-[#68CC93] animation-effect">
                        <FiArrowLeft /> {t.works.back}
                    </Link>
                    <h1 className="mt-8 text-[#1C1C1C] dark:text-[#E4E4E4] font-[600] text-[clamp(32px,5vw,56px)] tracking-[-1px]">
                        {t.works.notFound}
                    </h1>
                </div>
            </div>
        )
    }

    const description = project.description?.[locale] || project.description?.en || ''

    return (
        <div className="bg-[#E4E4E4] dark:bg-[#1C1C1C] min-h-screen pt-28 pb-16 px-[16px]">
            <div className="dc-container">

                <Link href="/works" className="inline-flex items-center gap-2 text-[14px] font-[700] text-[#7E7E7E] hover:text-[#FF5733] dark:hover:text-[#68CC93] animation-effect">
                    <FiArrowLeft /> {t.works.back}
                </Link>

                <div className="mt-8 pb-8 md:pb-12">
                    <span className="uppercase tracking-[2px] text-[12px] md:text-[14px] font-[500] text-[#7E7E7E]">
                        {t.works.categories[project.categoryKey] || project.company}
                    </span>
                    <h1 className="mt-3 text-[#1C1C1C] dark:text-[#E4E4E4] font-[600] leading-[1.02] tracking-[-1px] md:tracking-[-3px] text-[clamp(40px,7vw,88px)]">
                        {project.name}
                    </h1>
                </div>

                <Reveal className="rounded-[20px] overflow-hidden border border-[#3E3E3E] bg-[#F9F9F9] dark:bg-[#2C2C2C]">
                    <img src={project.image.replace(/^\.\//, '/')} alt={project.name} className="w-full h-auto object-cover" />
                </Reveal>

                <Reveal delay={120} className="mt-10 grid lg:grid-cols-3 gap-8 lg:gap-10">
                    <div className="lg:col-span-2">
                        <h2 className="text-[13px] uppercase tracking-[1px] font-[500] text-[#7E7E7E]">{t.works.overview}</h2>
                        <p className="mt-4 max-w-[680px] text-[#1C1C1C] dark:text-[#E4E4E4] font-[500] text-[18px] md:text-[22px] leading-relaxed tracking-[-0.5px]">
                            {description}
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {project.tags?.length > 0 && (
                            <div>
                                <h2 className="text-[13px] uppercase tracking-[1px] font-[500] text-[#7E7E7E] mb-3">{t.works.services}</h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="rounded-full border border-[#3E3E3E] px-3 py-1 text-[14px] font-[500] text-[#1C1C1C] dark:text-[#E4E4E4]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <Link href={project.href} target="_blank" rel="noopener noreferrer" className="w-fit">
                            <button className="inline-flex items-center gap-2 rounded-[10px] py-[14px] px-[28px] text-[16px] font-[700] text-[#FCFAF4] bg-[#FF5733] dark:bg-[#68CC93] hover:opacity-90 animation-effect">
                                {t.works.visit}
                                <FiArrowUpRight className="text-[18px]" />
                            </button>
                        </Link>
                    </div>
                </Reveal>

            </div>
        </div>
    )
}
