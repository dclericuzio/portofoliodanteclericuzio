"use client"
import Typewriter from 'typewriter-effect';

export default function About(){
    return(
        <div className="bg-[#ECECEC] min-h-screen pt-20 pb-5 px-[16px]">
            <div className="dc-container">
                <h1 className="text-[#313638] text-center title-responsive2 font-[600] whitespace-nowrap tracking-[-1px] md:tracking-[-3px]">
                    About Me
                </h1>

                <div className="grid grid-cols-4 gap-5">
                    <img src="https://res.cloudinary.com/dsjeycect/image/upload/q_50/v1691919979/danteclericuzio/pic_qpmtha.jpg" alt="banner" className="border-[#FFFFFF] border-[1px] hidden sm:col-span-2 lg:col-span-1 group sm:flex items-center w-full h-[300px] rounded-[24px] object-contain bg-black"/>
                    <div className="col-span-4 sm:col-span-2 lg:col-span-1 flex items-center p-[32px] w-full h-[300px] bg-[#FFFFFF] rounded-[24px]">
                        <div className="flex flex-col relative w-full">
                            <h1 className="font-[700] text-[#313638] text-[40px] tracking-[-2px]">Hey, I'm Dante</h1>
                            <div className="whitespace-nowrap font-[500] text-[#313638] text-[28px] tracking-[-1px]">
                                <Typewriter
                                    options={{
                                        strings: ['Developer </>','Engineer ⚙︎'],
                                        autoStart: true,
                                        loop: true
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 lg:col-span-2 flex p-[32px] w-full h-[300px] bg-[#FFFFFF] rounded-[24px]">
                        <div className="flex flex-col">
                            <img src="https://res.cloudinary.com/dsjeycect/image/upload/v1691919959/danteclericuzio/graduation_i1dy1r.png" alt="graduation" className="h-[100px] w-[100px]"/>
                            <h1 className="font-[500] text-[#313638] text-[28px] tracking-[-1px]">Bachelor Of Engineering</h1>
                            <h1 className="font-[400] text-[#313638] text-[18px] tracking-[-1px]">(Upper Second Class Honours)</h1>
                            <h1 className="font-[400] text-[#313638] text-[18px] tracking-[-1px]">Xi'an Jiaaotong-Liverpool University</h1>
                            <h1 className="font-[400] text-[#313638] text-[18px] tracking-[-1px]">2019-2022 (Continuing Academic Merit Scholarship)</h1>
                        </div>
                    </div>
                    <div className="col-span-4 flex p-[32px] w-full h-fit bg-[#FFFFFF] rounded-[24px] animation-effect">
                        <div className="flex flex-col">
                            <h1 className="mb-5 font-[500] text-[#313638] text-[28px] tracking-[-1px]">About me</h1>
                            <h1 className="mb-5 font-[3400] text-[#313638] text-[22px] tracking-[-1px]">I'm a recent <span className="font-[500] text-[#FF6900]">Front-End / Software Engineering</span> graduate, brimming with enthusiasm to translate my technical skills into real-world applications. With a keen eye for creating user-friendly interfaces and a strong foundation in coding, I'm eager to contribute to projects that merge creativity and functionality.</h1>
                            <h1 className="mb-5 font-[400] text-[#313638] text-[22px] tracking-[-1px]">During my studies, I honed my coding abilities and developed a solid grasp of front-end development principles. My coursework and projects have equipped me with the tools needed to transform design concepts into tangible code, ensuring seamless user interactions and visually appealing interfaces.</h1>
                            <h1 className="mb-5 font-[400] text-[#313638] text-[22px] tracking-[-1px]">As a new entrant into the industry, I'm committed to continuous learning and growth. I recognize the value of collaboration and look forward to working alongside experienced professionals to refine my skills further and make meaningful contributions to the field.</h1>
                            <h1 className="mb-5 font-[400] text-[#313638] text-[22px] tracking-[-1px]">Beyond my technical aspirations, I'm inspired by the concept of servant leadership. I believe in sharing knowledge and uplifting others, and I'm excited to be a part of a community where collaboration and mentorship thrive. I'm eager to engage with challenges that not only push my technical boundaries but also allow me to contribute positively to the solutions.</h1>
                            <h1 className="mb-5 font-[400] text-[#313638] text-[22px] tracking-[-1px]">In my leisure hours, I enthusiastically explore new technologies and experiment with personal projects, all while immersing myself in open-source contributions. A strong advocate for work-life balance, I cherish moments of relaxation, indulging in my passion for cars, dribbling through basketball games, savoring diverse culinary experiences, and getting lost in soul-stirring rhythms of music. Additionally, spending quality time with my nephews brings me immense joy and strengthens family bonds, further enriching the tapestry of my interests and rejuvenating my spirit.</h1>
                            <h1 className="mb-5 font-[400] text-[#313638] text-[22px] tracking-[-1px]">As I embark on this exciting journey, I'm focused on building a strong foundation in software engineering, creating innovative solutions, and eventually leaving my mark on the industry.</h1>
                        </div>
                    </div>
                    <img src="https://res.cloudinary.com/dsjeycect/image/upload/q_50/v1691919966/danteclericuzio/hobby1_djzdru.jpg" alt="1" className="border-[#FFFFFF] border-[1px] col-span-4 lg:col-span-2 group flex items-center w-full sm:h-[300px] md:h-[400px] rounded-[24px]"/>
                    <img src="https://res.cloudinary.com/dsjeycect/image/upload/q_50/v1691919980/danteclericuzio/hobby2_mke1o6.png" alt="2" className="border-[#FFFFFF] border-[1px] col-span-2 lg:col-span-1 group flex items-center w-full sm:h-[300px] md:h-[400px] rounded-[24px]"/>
                    <img src="https://res.cloudinary.com/dsjeycect/image/upload/v1691919960/danteclericuzio/hobby3_iqaqgp.jpg" alt="3" className="border-[#FFFFFF] border-[1px] col-span-2 lg:col-span-1 group flex items-center w-full sm:h-[300px] md:h-[400px] rounded-[24px]"/>
                    <img src="https://res.cloudinary.com/dsjeycect/image/upload/v1691919973/danteclericuzio/hobby4_v11fjw.jpg" alt="5" className="border-[#FFFFFF] border-[1px] col-span-2 lg:col-span-1 group flex items-center w-full sm:h-[300px] md:h-[400px] rounded-[24px]"/>
                    <img src="https://res.cloudinary.com/dsjeycect/image/upload/v1691919962/danteclericuzio/hobby6_qp8hwa.jpg" alt="6" className="border-[#FFFFFF] border-[1px] col-span-2 lg:col-span-1 group flex items-center w-full sm:h-[300px] md:h-[400px] rounded-[24px]"/>
                    <img src="https://res.cloudinary.com/dsjeycect/image/upload/v1691919961/danteclericuzio/hobby5_iszbcx.jpg" alt="4" className="border-[#FFFFFF] border-[1px] col-span-4 lg:col-span-2 group flex items-center w-full sm:h-[300px] md:h-[400px] rounded-[24px]"/>
                </div>
            </div>
        </div>
    )
}