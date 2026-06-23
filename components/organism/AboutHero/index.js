import { FaGraduationCap } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { skills } from "@/app/constants";

const certifications = [
    {
        title: 'Vue.js Program',
        issuer: 'Hacktiv8',
        year: '2025',
        detail: '42 hours · Certificate of Completion',
        href: './hacktiv8-certification.pdf'
    },
    {
        title: 'React Front To Back',
        issuer: 'Udemy',
        year: '2022',
        detail: '20 hours · Brad Traversy',
        href: './udemy-certification.pdf'
    },
];

export default function AboutHero() {
    return (
        <div className="bg-[#E4E4E4] dark:bg-[#1C1C1C] min-h-screen pt-28 pb-16 px-[16px]">
            <div className="dc-container">

                <div className="pt-2 pb-10 md:pb-14">
                    <span className="uppercase tracking-[2px] text-[12px] md:text-[14px] font-[500] text-[#7E7E7E]">About</span>
                    <h1 className="mt-4 text-[#1C1C1C] dark:text-[#E4E4E4] font-[600] leading-[1.02] tracking-[-1px] md:tracking-[-3px] text-[clamp(40px,8vw,110px)]">
                        About me
                    </h1>
                    <p className="mt-6 max-w-[560px] text-[#7E7E7E] font-[500] text-[16px] md:text-[20px] tracking-[-0.5px] leading-relaxed">
                        A software engineer who values design — blending clean, maintainable code with thoughtful, accessible interfaces.
                    </p>
                </div>

                {/* INTRO */}
                <div className="grid lg:grid-cols-3 gap-5 items-stretch">
                    <div className="rounded-[20px] overflow-hidden border border-[#3E3E3E] min-h-[320px]">
                        <img src="./danteclericuzio.jpg" alt="Dante Clericuzio" className="w-full h-full object-cover" />
                    </div>
                    <div className="lg:col-span-2 rounded-[20px] border border-[#3E3E3E] bg-[#F9F9F9] dark:bg-[#2C2C2C] p-8 md:p-10 flex flex-col justify-center">
                        <h2 className="text-[clamp(28px,3.5vw,44px)] font-[700] tracking-[-1px] text-[#1C1C1C] dark:text-[#E4E4E4]">Hey, I&apos;m Dante</h2>
                        <p className="mt-2 text-[18px] md:text-[20px] font-[600] tracking-[-0.5px] text-[#FF5733] dark:text-[#68CC93]">Software Engineer at Easycash</p>
                        <p className="mt-5 max-w-[560px] text-[#7E7E7E] font-[500] text-[16px] md:text-[18px] leading-relaxed">
                            I build web products where engineering meets design. I care deeply about the details — fast performance, clean architecture, and interfaces that feel effortless to use.
                        </p>
                    </div>
                </div>

                {/* BACKGROUND */}
                <div className="mt-5 rounded-[20px] border border-[#3E3E3E] bg-[#F9F9F9] dark:bg-[#2C2C2C] p-8 md:p-10">
                    <h2 className="text-[26px] md:text-[32px] font-[700] tracking-[-1px] text-[#1C1C1C] dark:text-[#E4E4E4]">Background</h2>
                    <p className="mt-5 max-w-[760px] text-[#7E7E7E] font-[500] text-[16px] md:text-[18px] leading-relaxed">
                        My path into web development started in 2019, poking around the browser&apos;s inspect panel — tweaking elements and learning the fundamentals of HTML and CSS. That curiosity quickly grew into a craft I&apos;ve pursued ever since.
                    </p>
                    <p className="mt-5 max-w-[760px] text-[#7E7E7E] font-[500] text-[16px] md:text-[18px] leading-relaxed">
                        Since then, I&apos;ve worked in the fintech industry and as a freelance developer — shipping responsive marketing sites, internal dashboards, and end-to-end web products. Today I focus on building fast, accessible, and inclusive digital experiences that help brands grow.
                    </p>
                </div>

                {/* EDUCATION + SKILLS */}
                <div className="mt-5 grid lg:grid-cols-2 gap-5">
                    <div className="rounded-[20px] border border-[#3E3E3E] bg-[#F9F9F9] dark:bg-[#2C2C2C] p-8 md:p-10">
                        <FaGraduationCap className="text-[56px] text-[#1C1C1C] dark:text-[#E4E4E4]" />
                        <h2 className="mt-5 text-[24px] md:text-[28px] font-[700] tracking-[-1px] text-[#1C1C1C] dark:text-[#E4E4E4]">Bachelor of Engineering</h2>
                        <p className="mt-2 text-[16px] font-[500] text-[#7E7E7E]">Upper Second Class Honours</p>
                        <p className="text-[16px] font-[500] text-[#7E7E7E]">Xi&apos;an Jiaotong-Liverpool University</p>
                        <p className="text-[16px] font-[500] text-[#7E7E7E]">2019 – 2022 · Continuing Academic Merit Scholarship</p>
                    </div>

                    <div className="rounded-[20px] border border-[#3E3E3E] bg-[#F9F9F9] dark:bg-[#2C2C2C] p-8 md:p-10">
                        <h2 className="text-[24px] md:text-[28px] font-[700] tracking-[-1px] text-[#1C1C1C] dark:text-[#E4E4E4]">Skills &amp; tools</h2>
                        <p className="mt-2 text-[16px] font-[500] text-[#7E7E7E]">Technologies I&apos;ve been working with recently:</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {skills.map((item, i) => (
                                <span key={i} className="rounded-full border border-[#3E3E3E] px-3 py-1 text-[14px] font-[500] text-[#1C1C1C] dark:text-[#E4E4E4]">
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CERTIFICATIONS */}
                <div className="flex items-center gap-4 mt-16 mb-6">
                    <span className="uppercase tracking-[2px] text-[12px] md:text-[14px] font-[500] text-[#7E7E7E]">Certifications</span>
                    <span className="h-px flex-1 bg-[#3E3E3E]" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {certifications.map((cert, i) => (
                        <a key={i} href={cert.href} target="_blank" rel="noopener noreferrer">
                            <div className="group h-full rounded-[20px] border border-[#3E3E3E] bg-[#F9F9F9] dark:bg-[#2C2C2C] p-7 md:p-8 flex items-start justify-between gap-4 animation-effect hover:border-[#FF5733] dark:hover:border-[#68CC93]">
                                <div>
                                    <span className="text-[13px] uppercase tracking-[1px] font-[500] text-[#7E7E7E]">{cert.issuer} · {cert.year}</span>
                                    <h3 className="mt-1 text-[24px] font-[700] tracking-[-1px] text-[#1C1C1C] dark:text-[#E4E4E4]">{cert.title}</h3>
                                    <p className="mt-1 text-[15px] font-[500] text-[#7E7E7E]">{cert.detail}</p>
                                </div>
                                <FiArrowUpRight className="shrink-0 text-[24px] text-[#7E7E7E] group-hover:text-[#FF5733] dark:group-hover:text-[#68CC93] group-hover:translate-x-1 group-hover:-translate-y-1 animation-effect" />
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </div>
    )
}
