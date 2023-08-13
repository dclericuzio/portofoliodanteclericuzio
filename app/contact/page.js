"use client"
import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/loading.js'

export default function Contact(){

    const formData = useRef();
    const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm('service_6c35oe1', 'template_41qbcyh', formData.current, 'VbsxYzmqTnKLbLkRL')
          .then((result) => {
                setLoading(false)
              toast.success('Message Sent!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                e.target.reset();
              
          }, (error) => {
              toast.error('Please Try Again!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
              e.target.reset();
          });
    };

    return(
        <div className="bg-[#ECECEC] min-h-screen pt-36 pb-5 px-[16px] relative">
            <ToastContainer/>
            <div className="dc-container">
                <div className="grid grid-cols-7 gap-5 mb-24">
                    <div className="col-span-7 lg:col-span-3 flex w-full h-[450px]">
                        <div className="flex flex-col">
                            <h1 className="mb-5 font-[700] text-[#313638]  text-[40px] tracking-[-2px]">Get In Touch</h1>
                            <h1 className="mb-5 font-[400] text-[#313638]  text-[20px] tracking-[-1px]">Are you in search of a skilled Front-End Developer to enhance your upcoming project?</h1>
                            <h1 className="mb-5 font-[400] text-[#313638]  text-[20px] tracking-[-1px]">I'd love to hear from you! Whether it's for a charity event, conceptual project or anything in relation to UX and UI I can help! Just contact me on this form or email below and let's start collaborating!</h1>
                            <h1 className="mb-3 font-[400] text-[#FF6900]  text-[14px] tracking-[-1px]">WANT TO CALL ME?</h1>
                            <h1 className="mb-5 font-[400] text-[#313638]  text-[20px] tracking-[-1px]">+62 81-858-9669</h1>
                            <h1 className="mb-3 font-[400] text-[#FF6900]  text-[14px] tracking-[-1px]">JUST WANT TO EMAIL ME?</h1>
                            <h1 className="mb-5 font-[400] text-[#313638]  text-[20px] tracking-[-1px]">danteclericuzio1999@gmail.com</h1>
                        </div>
                    </div>
                    <div className="col-span-7 lg:col-span-4 flex p-[32px] w-full h-[480px] bg-[#FFFFFF] rounded-[24px]">
                        <form ref={formData} onSubmit={sendEmail} className='flex flex-col w-full'>
                            <input
                                required
                                className="capitalize mb-5 w-full rounded-[10px] p-5 outline-none bg-[#ECECEC] placeholder:text-[#313638]"
                                type="text"
                                placeholder="Name"
                                name='user_name'     
                            />
                            <input
                                required
                                className="mb-5 w-full rounded-[10px] p-5 outline-none bg-[#ECECEC] placeholder:text-[#313638]"
                                type="email"
                                placeholder="Email" 
                                name='user_email'    
                            />
                            <textarea
                                required
                                className="mb-5 w-full rounded-[10px] p-5 h-44 outline-none bg-[#ECECEC] placeholder:text-[#313638]"
                                type="text"
                                placeholder="Type you message" 
                                name="message"   
                            />
                            <button type="submit" className={`${loading ? 'bg-[#000000]' : 'bg-[#FF6900]' } relative animation-effect rounded-[10px] py-[12px] h-[70px] px-[24px] text-[#FCFAF4]`}>
                                {loading ? 
                                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                        <Loader/>
                                    </div>
                                    : 
                                    'Submit'
                                }
                            </button>
                        </form>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="flex p-[32px] w-full h-[320px] bg-[#FFFFFF] rounded-[24px]">
                        <div className="flex flex-col">
                            <img src="./uxblack.png" alt="ux" className="h-[60px] w-[60px] md:h-[80px] md:w-[80px]"/>
                            <h1 className="my-5 font-[500] text-[#313638] text-[20px] tracking-[-1px] whitespace-nowrap">UX Research</h1>
                            <h1 className="font-[400] text-[#313638]  text-[20px] tracking-[-1px]">Through user feedback and analysis, I ensure that every interface I create is user-centered and efficient.</h1>
                        </div>
                    </div>
                    <div className="flex p-[32px] w-full h-[320px] bg-[#FFFFFF] rounded-[24px]">
                        <div className="flex flex-col">
                            <img src="./uiblack.png" alt="ux" className="h-[60px] w-[60px] md:h-[80px] md:w-[80px]"/>
                            <h1 className="my-5 font-[500] text-[#313638] text-[20px] tracking-[-1px] whitespace-nowrap">UI Design</h1>
                            <h1 className="font-[400] text-[#313638]  text-[20px] tracking-[-1px]">My UI creations align seamlessly with brand identities, offering engaging and cohesive experiences.</h1>
                        </div>
                    </div>
                    <div className="flex p-[32px] w-full h-[320px] bg-[#FFFFFF] rounded-[24px]">
                        <div className="flex flex-col">
                            <img src="./codeblack.png" alt="ux" className="h-[60px] w-[60px] md:h-[80px] md:w-[80px]"/>
                            <h1 className="my-5 font-[500] text-[#313638] text-[20px] tracking-[-1px] whitespace-nowrap">Coding</h1>
                            <h1 className="font-[400] text-[#313638]  text-[20px] tracking-[-1px]">Proficient in HTML, CSS, and JavaScript, I bring designs to life with interactivity and responsiveness.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}