"use client"
import Link from "next/link";
import Typewriter from 'typewriter-effect';
import { BsStack } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { svgLogos } from "@/app/constants"

export default function HomeHero(){
    return (
        <div className="bg-[#1C1C1C] min-h-screen pt-20 pb-5 px-[16px]">
            <div className="dc-container">
                
                <div className="text-[#68CC93] text-center title-responsive font-[600] whitespace-nowrap tracking-[-1px] md:tracking-[-3px]">
                    <Typewriter
                    options={{
                        strings: ['Web Developer </>','Software Engineer ⚙︎'],
                        autoStart: true,
                        loop: true
                    }}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                    {/* 1st */}
                    <Link 
                    href='/about'
                    >
                    <div className="card1 animation-effect flex items-center group">
                        <div className="flex flex-col relative w-full">
                        <h1 className="md:group-hover:text-transparent group-hover:text-[#68CC93] font-[700] text-[#E4E4E4]  text-[40px] tracking-[-2px] md:group-hover:-translate-y-6 animation-effect">Hey, I'm Dante</h1>
                        <div className="justify-between flex items-center md:group-hover:translate-y-6 animation-effect">
                            <h1 className="hidden md:block mr-5 md:group-hover:text-[#68CC93] font-[500] text-[#7E7E7E] text-[20px] tracking-[-1px] animation-effect">"Website without visitors is like a ship lost in the horizon."</h1>
                            <h1 className="block group-hover:text-[#E4E4E4] md:hidden mr-5 font-[500] text-[20px] tracking-[-1px] animation-effect">Learn More About Me</h1>
                            <div className="group-hover:border-[#E4E4E4] button-arrow">
                            <img src="./arrow.png" alt="arrow" className="group-hover:rotate-90 animation-effect"/>
                            </div>
                        </div>
                        <h1 className="absolute top-[-30px] md:group-hover:text-[#FCFAF4] font-[700] text-transparent  text-[40px] tracking-[-2px] group-hover:-translate-y-6 animation-effect">LEARN <br/>MORE <br/> ABOUT ME</h1>
                        </div>
                    </div>
                    </Link>
                    
                    {/* 2nd */}
                    <Link 
                    href='https://www.internationalsar.com/' 
                    target="_blank" rel="noopener noreferrer"
                    >
                    <div className="card1 animation-effect group flex overflow-hidden">
                        <div className="flex flex-col relative w-full">
                        <div className="justify-between flex items-center group-hover:translate-y-6 animation-effect">
                            <div className="flex flex-col">
                            <h1 className="mr-5 group-hover:text-transparent font-[500] text-[#E4E4E4] text-[14px] tracking-[-1px] animation-effect">Corporate Website</h1>
                            <h1 className="mr-5 group-hover:text-transparent font-[500] text-[#7E7E7E] text-[28px] tracking-[-1px] animation-effect">Easycash</h1>
                            </div>
                            <div className="flex flex-col absolute">
                            <h1 className="mr-5 group-hover:text-[#E4E4E4] font-[500] text-transparent text-[14px] tracking-[-1px] animation-effect">Easycash</h1>
                            <h1 className="mr-5 group-hover:text-[#E4E4E4] font-[500] text-transparent text-[28px] tracking-[-1px] animation-effect">View The Website</h1>
                            </div>
                            <div className="group-hover:border-[#E4E4E4] button-arrow">
                            <img src="./arrow.png" alt="arrow" className="group-hover:rotate-90 animation-effect"/>
                            </div>
                        </div>
                        <img src="./easycash.png" alt="sar" className="w-[350px] mx-auto mt-8 group-hover:translate-y-14 group-hover:scale-125 animation-effect"/>
                        </div>
                    </div>
                    </Link>

                    {/* 3rd & 4th */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <Link href='/works'>
                        <div className="card1 group flex overflow-hidden animation-effect">
                        <div className="flex flex-col justify-center relative w-full">
                            <BsStack className="text-[#7E7E7E] mt-10 group-hover:hidden w-[75px] h-[75px] mx-auto lg:mx-0"/>
                            <div className="justify-between flex items-center ">
                            <h1 className="mx-auto lg:mx-0 font-[500] text-[#E4E4E4] text-[28px] tracking-[-1px] group-hover:text-transparent animation-effect">See My Work</h1>
                            <div className="absolute bottom-[12px] right-0 group-hover:border-[#E4E4E4] button-arrow">
                                <img src="./arrow.png" alt="arrow" className="group-hover:rotate-90 animation-effect"/>
                            </div>
                            </div>
                            <h1 className="absolute top-[40px] group-hover:text-[#E4E4E4] font-[700] text-transparent  text-[40px] tracking-[-2px] group-hover:-translate-y-6 animation-effect">View <br/>All My<br/> Work</h1>
                        </div>
                        </div>
                    </Link>

                    <Link href="https://www.linkedin.com/in/dante-clericuzio-1b9345241/" target="_blank" rel="noopener noreferrer">
                        <div className="card1 group flex overflow-hidden animation-effect">
                        <div className="flex flex-col justify-center relative w-full">
                            <FaLinkedin className="group-hover:text-[#E4E4E4] text-[#7E7E7E] text-[100px] mx-auto group-hover:mb-5 group-hover:scale-125 animation-effect"/>
                            <h1 className="whitespace-nowrap absolute bottom-[12px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[500] text-transparent text-[28px] tracking-[-1px] group-hover:text-[#E4E4E4] animation-effect">Let's connect</h1>
                            <div className="absolute bottom-[12px] right-0 group-hover:border-[#E4E4E4] button-arrow">
                            <img src="./arrow.png" alt="arrow" className="group-hover:rotate-90 animation-effect"/>
                            </div>
                        </div>
                        </div>
                    </Link>
                    </div>

                    <Link href='/contact'>
                    <div className="card1 group flex overflow-hidden animation-effect">
                        <div className="flex flex-col relative w-full">
                        <h1 className="mr-5 font-[500] text-[#E4E4E4] text-[14px] tracking-[-1px]">WHAT I USE</h1>
                        <div className="">
                            <div className='logos'>
                            <div className='logos-slide'>
                                {svgLogos.map((item, i)=> (
                                <item.name key={i} className='text-[70px] group-hover:text-[#E4E4E4] text-[#7E7E7E] logos-inner'/>
                                ))}
                            </div>
                            <div className='logos-slide'>
                                {svgLogos.map((item, i)=> (
                                <item.name key={i} className='text-[70px] group-hover:text-[#E4E4E4] text-[#7E7E7E] logos-inner'/>
                                ))}
                            </div>
                            </div>
                        </div>
                        <div className="absolute bottom-[12px] right-0 shrink-0 p-[5px] ml-5 border-2 border-[#313638] group-hover:border-[#FCFAF4] bg-[#FFFFFF50] rounded-full w-[30px] h-[30px]">
                            <img src="./arrow.png" alt="arrow" className="group-hover:rotate-90 animation-effect"/>
                        </div>
                        </div>
                    </div>
                    </Link>

                </div>

            </div>
        </div>
    )
}