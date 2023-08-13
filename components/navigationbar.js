"use client";
import Link from 'next/link'
import React, {useState} from 'react'
import {usePathname} from 'next/navigation'

export default function navigationbar() {

  const [open, setOpen] = useState(false)
  const pathName = usePathname()

  return (
    <nav className='bg-[#ECECEC] py-5 px-[16px] z-50 fixed top-0 w-full'>
      
      <div className='flex justify-between items-center dc-container'>
        <div className='md:flex hidden items-center'>
          <Link href='/' className='tracking-[-2px] text-[28px] font-[700] text-[#FF6900]'>Dante Clericuzio</Link>
          <img src='https://res.cloudinary.com/dsjeycect/image/upload/v1691919958/danteclericuzio/dc_ov8ob7.jpg' alt='logo' className='hidden lg:block w-[50px] h-[50px] bg-contain bg-center rounded-full bg-no-repeat ml-[16px]'/>
        </div>

        <div className='hidden md:flex'>
          <ul className='flex cursor-pointer items-center'>
            <Link 
              className={`${pathName == "/works" ? 'text-[#FF6900]' : 'text-[#313638] hover:text-[#FF6900]'} mr-[40px] text-[24px] font-[700] duration-300 transition-all`}
              href='/works' 
            >
              Works
            </Link>
            <Link 
              className={`${pathName == "/about" ? 'text-[#FF6900]' : 'text-[#313638] hover:text-[#FF6900]'} mr-[40px] text-[24px] font-[700] duration-300 transition-all`}
              href='/about' 
            >
              About
            </Link>
            <a 
              className={`${pathName == "/resume" ? 'text-[#FF6900]' : 'text-[#313638] hover:text-[#FF6900]'} mr-[40px] text-[24px] font-[700] duration-300 transition-all`}
              href='./cvdante.pdf'
              target="_blank" rel="noopener noreferrer"
            >    
              Resume
            </a>
            <Link href='/contact'>
              <button className='hidden lg:block rounded-[10px] py-[12px] px-[24px] text-[#313638] hover:text-[#FCFAF4] border-[1px] border-[#313638] hover:border-[#FF6900] hover:bg-[#FF6900] duration-300 transition-all'>
                Get in touch
              </button>
            </Link>
          </ul>
        </div>

        {/* HAMBURGER */}
        <div className='flex ml-auto md:hidden group z-50 w-6 h-6 cursor-pointer flex-col justify-between items-center' onClick={() => { setOpen(!open) }}>
          <span className={`h-1 w-full rounded-lg cursor-pointer transform transition duration-300 ease-in-out bg-[#313638] ${open ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`h-1 rounded-lg cursor-pointer transition-all duration-300 ease-in-out bg-[#313638] ${open ? "w-0" : "w-full"}`} />
          <span className={`h-1 w-full rounded-lg cursor-pointer transform transition duration-300 ease-in-out bg-[#313638] ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </div>
      </div>

      {/* MOBILE */}
      <div className={`${open ? 'max-h-full' : 'max-h-0 overflow-hidden'} px-[16px] bg-[#ECECEC] fixed top-0 left-0 z-10 w-full h-full animation-effect`}>
        <ul className='flex flex-col w-full h-full mt-36'>
          <div onClick={() => { setOpen(!open) }} className='flex items-center mb-[40px]'>
            <Link href='/' className='tracking-[-2px] text-[28px] font-[700] text-[#FF6900]'>Dante Clericuzio</Link>
            <img src='https://res.cloudinary.com/dsjeycect/image/upload/v1691919958/danteclericuzio/dc_ov8ob7.jpg' alt='logo' className='w-[50px] h-[50px] bg-contain bg-center rounded-full bg-no-repeat ml-[16px]'/>
          </div>
          <Link 
            className={`${pathName == "/works" ? 'text-[#FF6900]' : 'text-[#313638] hover:text-[#FF6900]'} mb-[40px] text-[24px] font-[700] duration-300 transition-all`}
            href='/works' 
            onClick={() => { setOpen(!open) }}
          >
            Works
          </Link>
          <Link 
            className={`${pathName == "/about" ? 'text-[#FF6900]' : 'text-[#313638] hover:text-[#FF6900]'} mb-[40px] text-[24px] font-[700] duration-300 transition-all`}
            href='/about'
            onClick={() => { setOpen(!open) }}
          >
            About
          </Link>
          <a 
            className={`${pathName == "/resume" ? 'text-[#FF6900]' : 'text-[#313638] hover:text-[#FF6900]'} mb-[40px] text-[24px] font-[700] duration-300 transition-all`}
            href='./cvdante.pdf'
            target="_blank" rel="noopener noreferrer"
            onClick={() => { setOpen(!open) }}
          >    
            Resume
          </a>
          <Link href='/contact' onClick={() => { setOpen(!open) }}>
            <button className='w-fit rounded-[10px] py-[12px] px-[24px] text-[#313638] hover:text-[#FCFAF4] border-[1px] border-[#313638] hover:border-[#FF6900] hover:bg-[#FF6900] duration-300 transition-all'>
              Get in touch
            </button>
          </Link>
        </ul>
      </div>

    </nav>
  )
}
