import './globals.css'
import NavBar from '@/components/layout/navigationbar'
import Footer from '@/components/layout/footer'
import {DM_Sans} from 'next/font/google'
import Toggle from '@/components/toggle'

const dmsans = DM_Sans({subsets: ['latin'],  weight:['400','500','700']})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/arrow.ico' />
      </head>
      <body className={`${dmsans.className} relative`}>
        <header>
          <NavBar/>
        </header>
        {children}
        <Toggle/>
        <Footer/>
      </body>
    </html>
  )
}
