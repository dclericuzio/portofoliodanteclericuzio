"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { links, iconSvg } from '@/app/constants'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { useLanguage } from '@/app/language-provider'

export default function NavBar() {

  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 977px)')
    const handleChange = (e) => { if (e.matches) setOpen(false) }
    mql.addEventListener('change', handleChange)
    return () => mql.removeEventListener('change', handleChange)
  }, [])

  const closeMenu = () => setOpen(false)

  const externalProps = { target: '_blank', rel: 'noopener noreferrer' }

  const navLinks = links.filter((item) => !item.isButton)
  const ctaLink = links.find((item) => item.isButton)

  const renderDesktopLink = (item, i) => {
    const isActive = pathname === item.href

    if (item.isButton) {
      return (
        <Link key={i} href={item.href} onClick={closeMenu} {...(item.external ? externalProps : {})}>
          <button className='hidden nav:block rounded-[10px] py-[12px] px-[24px] text-[18px] font-[600] text-[#1C1C1C] hover:text-[#FCFAF4] dark:text-[#E4E4E4] dark:hover:text-[#FCFAF4] border border-[#3E3E3E] hover:border-[#FF5733] hover:bg-[#FF5733] dark:hover:border-[#68CC93] dark:hover:bg-[#68CC93] animation-effect'>
            {t.nav[item.key]}
          </button>
        </Link>
      )
    }

    return (
      <Link
        key={i}
        href={item.href}
        onClick={closeMenu}
        {...(item.external ? externalProps : {})}
        className={`text-[24px] font-[700] animation-effect hover:text-[#FF5733] dark:hover:text-[#68CC93] ${isActive ? 'text-[#FF5733] dark:text-[#68CC93]' : 'text-[#1C1C1C] dark:text-[#E4E4E4]'}`}
      >
        {t.nav[item.key]}
      </Link>
    )
  }

  return (
    <nav className='fixed top-3 left-0 w-full z-50 px-[16px]'>

      <div className='dc-container relative z-[60] flex justify-between items-center rounded-full border border-[#3E3E3E] bg-[#E4E4E4]/70 dark:bg-[#1C1C1C]/70 backdrop-blur-md py-3 px-5 md:px-6'>

        <Link href='/' onClick={closeMenu} className='flex items-center gap-3 nav:gap-[16px] min-w-0'>
          <img src='./danteclericuzio.jpg' alt='logo' className='shrink-0 w-10 h-10 nav:w-[44px] nav:h-[44px] bg-contain bg-center rounded-full bg-no-repeat' />
          <span className='whitespace-nowrap tracking-[-1px] nav:tracking-[-2px] text-[20px] nav:text-[28px] font-[700] text-[#1C1C1C] dark:text-[#E4E4E4]'>Dante Clericuzio</span>
        </Link>

        <div className='hidden nav:flex items-center gap-[40px]'>
          {links.map((item, i) => renderDesktopLink(item, i))}
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type='button'
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className='flex nav:hidden shrink-0 w-6 h-6 cursor-pointer flex-col justify-between items-center'
        >
          <span className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out bg-[#FF5733] dark:bg-[#68CC93] ${open ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`h-1 rounded-lg transition-all duration-300 ease-in-out bg-[#1C1C1C] dark:bg-[#E4E4E4] ${open ? "w-0" : "w-full"}`} />
          <span className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out bg-[#FF5733] dark:bg-[#68CC93] ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        aria-hidden={!open}
        className={`nav:hidden fixed inset-0 z-10 flex flex-col px-[24px] pt-[128px] pb-[40px] bg-[#E4E4E4] dark:bg-[#1C1C1C] transition-all duration-300 ease-in-out ${open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <span className='text-[12px] font-[500] tracking-[2px] uppercase text-[#7E7E7E] mb-2'>Menu</span>

        <ul className='flex flex-col border-t border-[#3E3E3E]'>
          {navLinks.map((item, i) => {
            const isActive = pathname === item.href
            return (
              <li
                key={i}
                className='border-b border-[#3E3E3E]'
                style={{
                  transitionProperty: 'opacity, transform',
                  transitionDuration: '400ms',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: open ? `${100 + i * 70}ms` : '0ms',
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateY(0)' : 'translateY(16px)',
                }}
              >
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  {...(item.external ? externalProps : {})}
                  className={`group flex items-center justify-between py-5 animation-effect ${isActive ? 'text-[#FF5733] dark:text-[#68CC93]' : 'text-[#1C1C1C] dark:text-[#E4E4E4]'}`}
                >
                  <span className='text-[40px] font-[700] tracking-[-1px]'>{t.nav[item.key]}</span>
                  <FiArrowUpRight className='text-[28px] text-[#7E7E7E] group-hover:text-[#FF5733] dark:group-hover:text-[#68CC93] group-hover:translate-x-1 group-hover:-translate-y-1 animation-effect' />
                </Link>
              </li>
            )
          })}
        </ul>

        <div className='mt-auto flex flex-col gap-8'>
          {ctaLink && (
            <Link
              href={ctaLink.href}
              onClick={closeMenu}
              {...(ctaLink.external ? externalProps : {})}
              className='w-full'
            >
              <button className='w-full rounded-[12px] py-[16px] text-[18px] font-[700] text-[#FCFAF4] bg-[#FF5733] dark:bg-[#68CC93] animation-effect'>
                {t.nav[ctaLink.key]}
              </button>
            </Link>
          )}

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-6'>
              {iconSvg.map((item, i) => (
                <Link key={i} href={item.href} target='_blank' rel='noopener noreferrer' onClick={closeMenu}>
                  <item.name className='text-[24px] text-[#7E7E7E] hover:text-[#FF5733] dark:hover:text-[#68CC93] animation-effect' />
                </Link>
              ))}
            </div>
            <div className='flex items-center gap-3'>
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>

    </nav>
  )
}
