import Link from "next/link"
import { works } from "@/app/constants"

export default function WorksHero () {

    return (
        <div className="bg-[#E4E4E4] dark:bg-[#1C1C1C] min-h-screen pt-20 pb-5 px-[16px]">
            <div className="dc-container">
                <h1 className="text-[#1C1C1C] dark:text-[#7E7E7E] text-center title-responsive2 font-[600] whitespace-nowrap tracking-[-1px] md:tracking-[-3px]">
                    All Works
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {works.map((item, i) => (
                        <Link 
                            key={i}
                            href={item.href}
                            target="_blank" rel="noopener noreferrer"
                        >
                            <div className="bg-[#F9F9F9] hover:bg-[#FF5733] dark:bg-[#2C2C2C] dark:hover:bg-[#68CC93] card1 group flex w-full overflow-hidden animation-effect">
                                <div className="flex flex-col relative w-full">
                                    <div className="justify-between flex items-center group-hover:translate-y-6 animation-effect">
                                        <div className="flex flex-col">
                                            <h1 className="mr-5 group-hover:text-transparent font-[500] text-[#1C1C1C] dark:text-[#E4E4E4] text-[14px] tracking-[-1px] animation-effect">{item.company}</h1>
                                            <h1 className="mr-5 group-hover:text-transparent font-[500] text-[#7E7E7E] text-[28px] tracking-[-1px] animation-effect">{item.name}</h1>
                                        </div>
                                        <div className="flex flex-col absolute">
                                            <h1 className="mr-5 group-hover:text-[#E4E4E4] font-[500] text-transparent text-[14px] tracking-[-1px] animation-effect">{item.name}</h1>
                                            <h1 className="mr-5 group-hover:text-[#E4E4E4] font-[500] text-transparent text-[28px] tracking-[-1px] animation-effect">View The Website</h1>
                                        </div>
                                        <div className="group-hover:border-[#E4E4E4] button-arrow">
                                            <img src="./arrow.png" alt="arrow" className="group-hover:rotate-90 animation-effect"/>
                                        </div>
                                    </div>
                                    <img src={item.image} alt={item.name} className="w-[300px] mx-auto mt-10 group-hover:translate-y-14 group-hover:scale-125 animation-effect"/>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}