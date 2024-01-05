"use client"
import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../loading'

export default function ContactHero(){

    const formData = useRef();
    const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm('service_zk3qmep', 'template_41qbcyh', formData.current, 'tJm5AiimXVbnv8b_x')
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
        <div className="bg-[#1C1C1C] min-h-screen pt-32 lg:pt-52 pb-5 px-[16px] relative">
            <ToastContainer/>
            <div className="dc-container">
                <div className="grid grid-cols-7 gap-5 mb-0">
                    <div className="col-span-7 lg:col-span-3 flex w-full">
                        <div className="flex flex-col">
                            <h1 className="mb-5 font-[700] text-[#E4E4E4]  text-[40px] tracking-[-2px]">Get In Touch</h1>
                            <h1 className="mb-5 font-[400] text-[#7E7E7E]  text-[20px] tracking-[-1px]">Are you in search of a skilled Front-End Developer to enhance your upcoming project?</h1>
                            <h1 className="mb-5 font-[400] text-[#7E7E7E]  text-[20px] tracking-[-1px]">I'd love to hear from you! Whether it's for a charity event, conceptual project or anything in relation to UX and UI I can help! Just contact me on this form or email below and let's start collaborating!</h1>
                            <h1 className="mb-3 font-[400] text-[#68CC93]  text-[14px] tracking-[-1px]">WANT TO CALL ME?</h1>
                            <a href='https://wa.me/62818589669?text=Hi%20Dante,%20I%20want%20to%20know%20more%20about%20websites.'>
                                <h1 className="mb-5 font-[400] text-[#7E7E7E]  text-[20px] tracking-[-1px]">+62 81-858-9669</h1>
                            </a>
                            <h1 className="mb-3 font-[400] text-[#68CC93]  text-[14px] tracking-[-1px]">JUST WANT TO EMAIL ME?</h1>
                            <a href="mailto:danteclericuzio1999@gmail.com">
                                <h1 className="mb-5 font-[400] text-[#7E7E7E]  text-[20px] tracking-[-1px]">danteclericuzio1999@gmail.com</h1>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-7 lg:col-span-4 flex p-[32px] w-full h-[480px] bg-[#2C2C2C] rounded-[10px] border border-border border-[#3E3E3E]">
                        <form ref={formData} onSubmit={sendEmail} className='flex flex-col w-full'>
                            <input
                                required
                                className="text-[#E4E4E4] capitalize mb-5 w-full rounded-[10px] p-5 outline-none bg-[#1C1C1C] placeholder:text-[#7E7E7E]"
                                type="text"
                                placeholder="Name"
                                name='user_name'     
                            />
                            <input
                                required
                                className="text-[#E4E4E4] mb-5 w-full rounded-[10px] p-5 outline-none bg-[#1C1C1C] placeholder:text-[#7E7E7E]"
                                type="email"
                                placeholder="Email" 
                                name='user_email'    
                            />
                            <textarea
                                required
                                className="capitalize text-[#E4E4E4] mb-5 w-full rounded-[10px] p-5 h-44 outline-none bg-[#1C1C1C] placeholder:text-[#7E7E7E]"
                                type="text"
                                placeholder="Type you message" 
                                name="message"   
                            />
                            <button type="submit" className={`${loading ? 'bg-[#1C1C1C]' : 'bg-[#68CC93]' } relative animation-effect rounded-[10px] py-[12px] h-[70px] px-[24px] text-[#E4E4E4]`}>
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
            </div>
        </div>
    )
}