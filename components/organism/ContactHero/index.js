"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { iconSvg } from '@/app/constants';

export default function ContactHero() {

    const [loading, setLoading] = useState(false)
    const [cooldown, setCooldown] = useState(0)

    React.useEffect(() => {
        if (cooldown <= 0) return;
        const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
        return () => clearTimeout(timer);
    }, [cooldown]);

    const toastOptions = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        if (loading || cooldown > 0) return;
        setLoading(true)
        const form = e.target;
        const payload = {
            name: form.user_name.value,
            email: form.user_email.value,
            message: form.message.value,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error('Request failed');

            toast.success('Message Sent!', toastOptions);
            form.reset();
            setCooldown(30);
        } catch (error) {
            toast.error('Please Try Again!', toastOptions);
        } finally {
            setLoading(false)
        }
    };

    const inputClass = "text-[#1C1C1C] dark:text-[#E4E4E4] w-full rounded-[10px] p-4 outline-none bg-[#E4E4E4] dark:bg-[#1C1C1C] border border-[#3E3E3E] focus:border-[#FF5733] dark:focus:border-[#68CC93] animation-effect placeholder:text-[#7E7E7E]"

    return (
        <div className="bg-[#E4E4E4] dark:bg-[#1C1C1C] min-h-screen pt-28 pb-16 px-[16px]">
            <ToastContainer />
            <div className="dc-container">

                <div className="pt-2 pb-10 md:pb-14">
                    <span className="uppercase tracking-[2px] text-[12px] md:text-[14px] font-[500] text-[#7E7E7E]">Contact</span>
                    <h1 className="mt-4 text-[#1C1C1C] dark:text-[#E4E4E4] font-[600] leading-[1.02] tracking-[-1px] md:tracking-[-3px] text-[clamp(40px,8vw,110px)]">
                        Get in touch
                    </h1>
                    <p className="mt-6 max-w-[560px] text-[#7E7E7E] font-[500] text-[16px] md:text-[20px] tracking-[-0.5px] leading-relaxed">
                        Looking for a developer to bring your next project to life? Whether it&apos;s a full build or a focused task, I&apos;d love to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-5 items-stretch">

                    {/* INFO */}
                    <div className="rounded-[20px] border border-[#3E3E3E] bg-[#F9F9F9] dark:bg-[#2C2C2C] p-8 md:p-10 flex flex-col gap-8">
                        <p className="text-[#7E7E7E] font-[500] text-[16px] md:text-[18px] leading-relaxed">
                            Available for freelance projects and full-time roles. Reach out through the form or any of the channels below — I usually reply within a day.
                        </p>

                        <div>
                            <p className="text-[13px] uppercase tracking-[1px] font-[500] text-[#FF5733] dark:text-[#68CC93]">Want to call me?</p>
                            <a href="https://wa.me/62818589669?text=Hi%20Dante,%20I%20want%20to%20know%20more%20about%20websites." target="_blank" rel="noopener noreferrer">
                                <p className="mt-1 text-[#1C1C1C] dark:text-[#E4E4E4] font-[600] text-[20px] md:text-[24px] tracking-[-0.5px] hover:text-[#FF5733] dark:hover:text-[#68CC93] animation-effect">+62 81-858-9669</p>
                            </a>
                        </div>

                        <div>
                            <p className="text-[13px] uppercase tracking-[1px] font-[500] text-[#FF5733] dark:text-[#68CC93]">Just want to email me?</p>
                            <a href="mailto:danteclericuzio1999@gmail.com">
                                <p className="mt-1 text-[#1C1C1C] dark:text-[#E4E4E4] font-[600] text-[20px] md:text-[24px] tracking-[-0.5px] break-all hover:text-[#FF5733] dark:hover:text-[#68CC93] animation-effect">danteclericuzio1999@gmail.com</p>
                            </a>
                        </div>

                        <div className="mt-auto">
                            <p className="text-[13px] uppercase tracking-[1px] font-[500] text-[#7E7E7E] mb-3">Find me on</p>
                            <div className="flex items-center gap-5">
                                {iconSvg.map((item, i) => (
                                    <Link key={i} href={item.href} target="_blank" rel="noopener noreferrer">
                                        <item.name className="text-[24px] text-[#7E7E7E] hover:text-[#FF5733] dark:hover:text-[#68CC93] animation-effect" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* FORM */}
                    <div className="rounded-[20px] border border-[#3E3E3E] bg-[#F9F9F9] dark:bg-[#2C2C2C] p-8 md:p-10">
                        <form onSubmit={sendEmail} className="flex flex-col gap-4 w-full">
                            <input
                                required
                                className={inputClass}
                                type="text"
                                placeholder="Name"
                                name="user_name"
                            />
                            <input
                                required
                                className={inputClass}
                                type="email"
                                placeholder="Email"
                                name="user_email"
                            />
                            <textarea
                                required
                                className={`${inputClass} h-44 resize-none`}
                                placeholder="Type your message"
                                name="message"
                            />
                            <button
                                type="submit"
                                disabled={loading || cooldown > 0}
                                className={`${loading ? 'animate-pulse' : ''} rounded-[10px] py-[16px] text-[16px] font-[700] text-[#FCFAF4] bg-[#FF5733] dark:bg-[#68CC93] hover:opacity-90 animation-effect disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:opacity-60`}
                            >
                                {loading ? 'Submitting...' : cooldown > 0 ? `Sent — please wait ${cooldown}s` : 'Send message'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
