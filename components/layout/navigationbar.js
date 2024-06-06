"use client";
import Link from 'next/link'
import React, {useState} from 'react'
import { links } from '@/app/constants'
import ThemeSwitcher from '@/components/ThemeSwitcher'

export default function navigationbar() {

  const [open, setOpen] = useState(false)

  return (
    <nav className='bg-[#E4E4E4] dark:bg-[#1C1C1C] py-5 px-[16px] z-50 fixed top-0 w-full'>
      
      <div className='flex justify-between items-center dc-container'>
        <div className='md:flex hidden items-center'>
          <Link href='/' className='tracking-[-2px] text-[28px] font-[700] text-[#1C1C1C] dark:text-[#68CC93]'>DON Clericuzio</Link>
          <img src='./danteclericuzio.png' alt='logo' className='hidden lg:block w-[50px] h-[50px] bg-contain bg-center rounded-full bg-no-repeat ml-[16px]'/>
        </div>

        <div className='hidden md:flex'>
          <ul className='flex cursor-pointer items-center'>
            {links.map((item, i)=>(
              !item.isButton 
              ?
              (
                <Link
                  key={i}
                  className='text-[#1C1C1C] dark:text-[#E4E4E4] hover:text-[#FF5733] dark:hover:text-[#68CC93] mr-[40px] text-[24px] font-[700] animation-effect'
                  href={item.href}
                  {...(i === links.length - 2 ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {item.label}
                </Link>
              )
              :
              (
                <div className='flex flex-row items-center'>
                  <Link 
                    key={i}
                    href={item.href}
                  >
                    <button className='mr-[20px] hidden lg:block rounded-md py-[12px] px-[24px] text-[#1C1C1C] hover:text-[#FCFAF4] dark:text-[#E4E4E4] dark:hover:text-[#FCFAF4] border-border border border-[#3E3E3E] hover:border-[#FF5733] hover:bg-[#FF5733] dark:hover:border-[#68CC93] dark:hover:bg-[#68CC93] animation-effect'>
                      {item.label}
                    </button>
                  </Link>
                  <ThemeSwitcher/>
                </div>
                  
              )
            ))}
          </ul>
        </div>

        {/* HAMBURGER */}
        <div className='flex ml-auto md:hidden group z-50 w-6 h-6 cursor-pointer flex-col justify-between items-center' onClick={() => { setOpen(!open) }}>
          <span className={`h-1 w-full rounded-lg cursor-pointer transform transition duration-300 ease-in-out bg-[#FF5733] dark:bg-[#68CC93] ${open ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`h-1 rounded-lg cursor-pointer transition-all duration-300 ease-in-out bg-[#1C1C1C] dark:bg-[#E4E4E4] ${open ? "w-0" : "w-full"}`} />
          <span className={`h-1 w-full rounded-lg cursor-pointer transform transition duration-300 ease-in-out bg-[#FF5733] dark:bg-[#68CC93] ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </div>
      </div>

      {/* MOBILE */}
      <div className={`${open ? 'max-h-full' : 'max-h-0 overflow-hidden'} px-[16px] bg-[#E4E4E4] dark:bg-[#1C1C1C] fixed top-0 left-0 z-10 w-full h-full animation-effect`}>
        <ul className='flex flex-col w-full h-full mt-36'>
          <div onClick={() => { setOpen(!open) }} className='flex items-center mb-[40px]'>
            <Link href='/' className='tracking-[-2px] text-[28px] font-[700] text-[#1C1C1C] dark:text-[#68CC93]'>Dante Clericuzio</Link>
            <img src='./danteclericuzio.png' alt='logo' className='w-[50px] h-[50px] bg-contain bg-center rounded-full bg-no-repeat mx-[16px]'/>
            <ThemeSwitcher/>
          </div>
          {links.map((item, i)=>(
            !item.isButton 
            ? 
            (
              <Link 
                key={i}
                className='text-[#1C1C1C] dark:text-[#E4E4E4] hover:text-[#FF5733] dark:hover:text-[#68CC93] mb-[40px] text-[24px] font-[700] animation-effect'
                href={item.href}
                onClick={() => { setOpen(!open) }}
                {...(i === links.length - 2 ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {item.label}
              </Link>
            )
            :
            (
              <Link
                key={i}
                href={item.href} 
                onClick={() => { setOpen(!open) }}
              >
                <button className='w-fit rounded-[10px] py-[12px] px-[24px] text-[#1C1C1C] hover:text-[#FCFAF4] dark:text-[#E4E4E4] dark:hover:text-[#FCFAF4] border-[1px] border-[#3E3E3E] hover:border-[#FF5733] hover:bg-[#FF5733] dark:hover:border-[#68CC93] dark:hover:bg-[#68CC93] animation-effect'>
                  {item.label}
                </button>
              </Link>
            )
          ))}
        </ul>
      </div>

    </nav>
  )
}
