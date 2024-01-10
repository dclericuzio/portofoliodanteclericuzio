import './globals.css'
import NavBar from '@/components/layout/navigationbar'
import Footer from '@/components/layout/footer'
import {DM_Sans} from 'next/font/google'
import Whatsapp from '@/components/whatsapp'
import Providers from './provider'

const dmsans = DM_Sans({subsets: ['latin'],  weight:['400','500','700']})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/arrow.ico' />
      </head>
      <body className={`${dmsans.className} relative`}>
        <Providers>
          <header>
            <NavBar/>
          </header>
          {children}
          <Whatsapp/>
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
