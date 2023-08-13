"use client"
import Link from "next/link";
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from "react";

export default function Home() {

  const [active1, setActive1] = useState(false)
  const [active2, setActive2] = useState(false)

  useEffect(() => {
    const imgElement1 = document.getElementById('image-change-color');
    imgElement1.addEventListener('mouseenter', () => setActive1(true));
    imgElement1.addEventListener('mouseleave', () => setActive1(false));
    imgElement1.addEventListener('touchstart', () => setActive1(true));
    imgElement1.addEventListener('touchend', () => setActive1(false));

    const imgElement2 = document.getElementById('image-change-color2');
    imgElement2.addEventListener('mouseenter', () => setActive2(true));
    imgElement2.addEventListener('mouseleave', () => setActive2(false));
    imgElement2.addEventListener('touchstart', () => setActive2(true));
    imgElement2.addEventListener('touchend', () => setActive2(false));

    return () => {
      imgElement1.removeEventListener('mouseenter', () => setActive1(true));
      imgElement1.removeEventListener('mouseleave', () => setActive1(false));
      imgElement1.removeEventListener('touchstart', () => setActive1(true));
      imgElement1.removeEventListener('touchend', () => setActive1(false));
      imgElement2.removeEventListener('mouseenter', () => setActive2(true));
      imgElement2.removeEventListener('mouseleave', () => setActive2(false));
      imgElement2.removeEventListener('touchstart', () => setActive2(true));
      imgElement2.removeEventListener('touchend', () => setActive2(false));
    };
  }, []);

  return (
    <div className="bg-[#ECECEC] min-h-screen pt-20 pb-5 px-[16px]">
      <div className="dc-container">
          
          <div className="text-[#313638] text-center title-responsive font-[600] whitespace-nowrap tracking-[-1px] md:tracking-[-3px]">
            <Typewriter
              options={{
                strings: ['Web Developer </>','Software Engineer ⚙︎'],
                autoStart: true,
                loop: true
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            <Link href='/about'>
              <div className="group flex items-center p-[32px] w-full h-[300px] hover:bg-[#FF6900] bg-[#FFFFFF] rounded-[24px] animation-effect">
                <div className="flex flex-col relative w-full">
                  <h1 className="md:group-hover:text-transparent group-hover:text-[#FCFAF4] font-[700] text-[#313638]  text-[40px] tracking-[-2px] md:group-hover:-translate-y-6 animation-effect">Hey, I'm Dante</h1>
                  <div className="justify-between flex items-center md:group-hover:translate-y-6 animation-effect">
                    <h1 className="hidden md:block mr-5 md:group-hover:text-transparent font-[500] text-[#313638] text-[20px] tracking-[-1px] animation-effect">"Website without visitors is like a ship lost in the horizon."</h1>
                    <h1 className="block group-hover:text-[#FCFAF4] md:hidden mr-5 font-[500] text-[#313638] text-[20px] tracking-[-1px] animation-effect">Learn More About Me</h1>
                    <div className="shrink-0 p-[5px] ml-5 border-2 border-[#313638] group-hover:border-[#FCFAF4] bg-[#FFFFFF50] rounded-full w-[30px] h-[30px]">
                      <img src="./arrow.png" alt="arrow" className="group-hover:rotate-90 animation-effect"/>
                    </div>
                  </div>
                  <h1 className="absolute top-[-30px] md:group-hover:text-[#FCFAF4] font-[700] text-transparent  text-[40px] tracking-[-2px] group-hover:-translate-y-6 animation-effect">LEARN <br/>MORE <br/> ABOUT ME</h1>
                </div>
              </div>
            </Link>
            
            <a href='https://www.internationalsar.com/' target="_blank" rel="noopener noreferrer">
              <div className="group flex p-[32px] w-full h-[300px] hover:bg-[#FF6900] bg-[#FFFFFF] rounded-[24px] overflow-hidden animation-effect">
                <div className="flex flex-col relative w-full">
                  <div className="justify-between flex items-center group-hover:translate-y-6 animation-effect">
                    <div className="flex flex-col">
                      <h1 className="mr-5 group-hover:text-transparent font-[500] text-[#313638] text-[14px] tracking-[-1px] animation-effect">Corporate Website</h1>
                      <h1 className="mr-5 group-hover:text-transparent font-[500] text-[#313638] text-[28px] tracking-[-1px] animation-effect">SAR International</h1>
                    </div>
                    <div className="flex flex-col absolute">
                      <h1 className="mr-5 group-hover:text-[#FCFAF4] font-[500] text-transparent text-[14px] tracking-[-1px] animation-effect">SAR International</h1>
                      <h1 className="mr-5 group-hover:text-[#FCFAF4] font-[500] text-transparent text-[28px] tracking-[-1px] animation-effect">View The Website</h1>
                    </div>
                    <div className="shrink-0 p-[5px] ml-5 border-2 group-hover:border-[#FCFAF4] border-[#313638] bg-[#FFFFFF50] rounded-full w-[30px] h-[30px]">
                      <img src="./arrow.png" alt="arrow" className="group-hover:rotate-90 animation-effect"/>
                    </div>
                  </div>
                  <img src="https://res.cloudinary.com/dsjeycect/image/upload/q_40/v1691919980/danteclericuzio/sar_uheylm.png" alt="sar" className="w-[250px] mx-auto mt-5 group-hover:translate-y-14 group-hover:scale-125 animation-effect"/>
                </div>
              </div>
            </a>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <Link href='/works'>
                <div className="group flex p-[32px] w-full h-[300px] hover:bg-[#FF6900] bg-[#FFFFFF] rounded-[24px] overflow-hidden animation-effect">
                  <div className="flex flex-col justify-center relative w-full">
                    <img src="./stack.png" alt="stack" className=" mt-10 group-hover:hidden w-[75px] h-[75px] mx-auto lg:mx-0"/>
                    <div className="justify-between flex items-center ">
                      <h1 className="mx-auto lg:mx-0 font-[500] text-[#313638] text-[28px] tracking-[-1px] group-hover:text-transparent animation-effect">See My Work</h1>
                      <div className="absolute bottom-[12px] right-0 shrink-0 p-[5px] ml-5 border-2 border-[#313638] group-hover:border-[#FCFAF4] bg-[#FFFFFF50] rounded-full w-[30px] h-[30px]">
                        <img src="./arrow.png" alt="arrow" className="group-hover:rotate-90 animation-effect"/>
                      </div>
                    </div>
                    <h1 className="absolute top-[40px] group-hover:text-[#FCFAF4] font-[700] text-transparent  text-[40px] tracking-[-2px] group-hover:-translate-y-6 animation-effect">View <br/>All My<br/> Work</h1>
                  </div>
                </div>
              </Link>

              <a href="https://www.linkedin.com/in/dante-clericuzio-1b9345241/" target="_blank" rel="noopener noreferrer">
                <div id="image-change-color" className="group flex p-[32px] w-full h-[300px] hover:bg-[#FF6900] bg-[#FFFFFF] rounded-[24px] overflow-hidden animation-effect">
                  <div className="flex flex-col justify-center relative w-full">
                    <img
                      src={active1 ? "./linkedinwhite.png" : "./linkedinblack.png"}
                      alt="stack" 
                      className="w-[100px] h-[100px] mx-auto group-hover:mb-5 group-hover:scale-125 animation-effect"
                    />
                    <h1 className="whitespace-nowrap absolute bottom-[12px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[500] text-transparent text-[28px] tracking-[-1px] group-hover:text-[#FCFAF4] animation-effect">Let's connect</h1>
                    <div className="absolute bottom-[12px] right-0 shrink-0 p-[5px] ml-5 border-2 border-[#313638] group-hover:border-[#FCFAF4] bg-[#FFFFFF50] rounded-full w-[30px] h-[30px]">
                      <img src="./arrow.png" alt="arrow" className="group-hover:rotate-90 animation-effect"/>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <Link href='/contact'>
              <div id="image-change-color2" className="group flex p-[32px] w-full h-[300px] hover:bg-[#FF6900] bg-[#FFFFFF] rounded-[24px] overflow-hidden animation-effect">
                <div className="flex flex-col relative w-full">
                  <h1 className="mr-5 group-hover:text-[#FCFAF4] font-[500] text-[#313638] text-[14px] tracking-[-1px]">WHAT I DO</h1>
                  <div className="w-full flex flex-col lg:flex-row mt-10 overflow-scroll no-scrollbar lg:justify-center gap-10">
                    <div className="flex flex-col shrink-0">
                      <h1 className="group-hover:text-[#FCFAF4] font-[500] text-[#313638] text-[20px] tracking-[-1px] text-center whitespace-nowrap">UX Research</h1>
                      <img 
                        src={active2 ? "./uxwhite.png" : "./uxblack.png"} 
                        alt="ux" 
                        className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] mx-auto"
                      />
                    </div>
                    <div className="flex flex-col shrink-0">
                      <h1 className="group-hover:text-[#FCFAF4] font-[500] text-[#313638] text-[20px] tracking-[-1px] text-center whitespace-nowrap">UI Design</h1>
                      <img 
                        src={active2 ? "./uiwhite.png" : "./uiblack.png"} 
                        alt="ui" 
                        className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] mx-auto"
                      />
                    </div>
                    <div className="flex flex-col shrink-0">
                      <h1 className="group-hover:text-[#FCFAF4] font-[500] text-[#313638] text-[20px] tracking-[-1px] text-center whitespace-nowrap">Coding</h1>
                      <img 
                        src={active2 ? "./codewhite.png" : "./codeblack.png"} 
                        alt="code" 
                        className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] mx-auto"
                      />
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
