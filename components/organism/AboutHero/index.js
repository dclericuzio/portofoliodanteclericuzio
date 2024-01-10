import { FaGraduationCap } from "react-icons/fa";
import { VscDebugBreakpointFunctionUnverified } from "react-icons/vsc";
import { skills } from "@/app/constants";

export default function AboutHero() {
    return(
        <div className="bg-[#E4E4E4] dark:bg-[#1C1C1C] min-h-screen pt-20 pb-5 px-[16px]">
            <div className="dc-container">
                <h1 className="xt-[#1C1C1C] dark:text-[#7E7E7E] text-center title-responsive2 font-[600] whitespace-nowrap tracking-[-1px] md:tracking-[-3px]">
                    About Me
                </h1>

                <div className="grid grid-cols-4 gap-5">
                    <div className='p-0 card1 hidden sm:col-span-2 lg:col-span-1 group sm:flex'>
                        <img src="./danteclericuzio.png" alt="banner" className="w-full object-cover rounded-[10px]"/>
                    </div>
                    <div className="bg-[#F9F9F9] hover:bg-[#FF5733] dark:bg-[#2C2C2C] dark:hover:bg-[#68CC93] group sm:h-[300px] h-fit col-span-4 sm:col-span-2 lg:col-span-1 flex card1 animation-effect">
                        <div className="flex flex-col relative w-full">
                            <h1 className="font-[700] text-[#1C1C1C] dark:text-[#E4E4E4] group-hover:text-[#E4E4E4] text-[28px] tracking-[-2px]">Hey, I'm Dante</h1>
                            <h1 className="font-[400] group-hover:text-[#E4E4E4] text-[#7E7E7E] text-[18px] tracking-[-1px]">Software Engineer at Easycash</h1>
                            <h1 className="font-[400] group-hover:text-[#E4E4E4] text-[#7E7E7E] text-[18px] tracking-[-1px] mt-5">I'm a software engineer who values design, focusing on details and passionate about merging elegant code with stunning design principles.</h1>
                        </div>
                    </div>
                    <div className="bg-[#F9F9F9] hover:bg-[#FF5733] dark:bg-[#2C2C2C] dark:hover:bg-[#68CC93] group col-span-4 lg:col-span-2 flex card1 animation-effect">
                        <div className="flex flex-col">
                            <FaGraduationCap className='text-[100px] text-[#1C1C1C] dark:text-[#E4E4E4] group-hover:text-[#E4E4E4]'/>
                            <h1 className="font-[500] text-[#1C1C1C] dark:text-[#E4E4E4] group-hover:text-[#E4E4E4] text-[28px] tracking-[-1px]">Bachelor Of Engineering</h1>
                            <h1 className="font-[400] group-hover:text-[#E4E4E4] text-[#7E7E7E] text-[18px] tracking-[-1px]">(Upper Second Class Honours)</h1>
                            <h1 className="font-[400] group-hover:text-[#E4E4E4] text-[#7E7E7E] text-[18px] tracking-[-1px]">Xi'an Jiaaotong-Liverpool University</h1>
                            <h1 className="font-[400] group-hover:text-[#E4E4E4] text-[#7E7E7E] text-[18px] tracking-[-1px]">2019-2022 (Continuing Academic Merit Scholarship)</h1>
                        </div>
                    </div>
                    <div className="bg-[#F9F9F9] hover:bg-[#FF5733] dark:bg-[#2C2C2C] dark:hover:bg-[#68CC93] group col-span-4 flex p-[32px] h-fit card1 animation-effect">
                        <div className="flex flex-col">
                            <h1 className="mb-5 font-[500] text-[#1C1C1C] dark:text-[#E4E4E4] group-hover:text-[#E4E4E4] text-[28px] tracking-[-2px]">Background</h1>
                            <h1 className="font-[400] group-hover:text-[#E4E4E4] text-[#7E7E7E] text-[18px] tracking-[-1px]">Hello there! I'm Dante Clericuzio, and I have a passion for crafting things that thrive on the internet. My journey into web development began in 2019 when I delved into inspecting elements in Google Chrome. It all started with tinkering around, customizing elements, and understanding HTML & CSS on a deeper level.</h1>
                            <h1 className="mt-5 font-[400] group-hover:text-[#E4E4E4] text-[#7E7E7E] text-[18px] tracking-[-1px]">Moving ahead to the present, I've had the privilege of working within the fintech industry. These days, my primary emphasis revolves around crafting accessible, inclusive products, and digital experiences as a freelance professional.</h1>
                            <h1 className="mt-5 font-[400] group-hover:text-[#E4E4E4] text-[#7E7E7E] text-[18px] tracking-[-1px]">Here are a few technologies I’ve been working with recently:</h1>
                            <div className='mt-5 flex flex-wrap gap-5'>
                                {skills.map((item, i)=>(
                                    <div key={i} className='flex gap-1 items-center'>
                                        <VscDebugBreakpointFunctionUnverified className='rotate-90 group-hover:text-[#E4E4E4] text-[#FF5733] dark:text-[#68CC93]'/>
                                        <h1 className='font-[400] group-hover:text-[#E4E4E4] text-[#7E7E7E] text-[18px] tracking-[-1px]'>{item.name}</h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}