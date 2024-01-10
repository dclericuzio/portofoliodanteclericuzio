"use client"
import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react'
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeSwitcher() {

    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted){
        return (
            <div className='gradient-animation'></div>
        )
    }

  return (
    <div 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='animation-effect cursor-pointer h-[35px] w-[65px] bg-[#2C2C2C] rounded-full flex items-center'
    >
      <div
        className={`${theme === 'dark' ? 'translate-x-0 bg-[#1C1C1C]' : 'translate-x-[32.5px] bg-[#E4E4E4]' } drop-shadow-2xl border-border border border-[#3E3E3E] animation-effect flex rounded-full text-[#5a5959] h-[35px] w-[35px] items-center justify-center`}
      >
       {theme === 'dark' ? <FaMoon className='text-[#E4E4E4]'/> : <FaSun className='text-[#1C1C1C]'/>}
      </div>
    </div>
  )
}