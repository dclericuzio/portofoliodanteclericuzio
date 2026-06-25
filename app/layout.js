import './globals.css'
import NavBar from '@/components/layout/navigationbar'
import Footer from '@/components/layout/footer'
import {DM_Sans} from 'next/font/google'
import Whatsapp from '@/components/whatsapp'
import SplashScreen from '@/components/SplashScreen'
import Providers from './provider'
import { LanguageProvider } from './language-provider'

const dmsans = DM_Sans({subsets: ['latin'],  weight:['400','500','700']})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.png' type='image/png' />
        <link rel='apple-touch-icon' href='/favicon.png' />
      </head>
      <body className={`${dmsans.className} relative`}>
        <Providers>
          <LanguageProvider>
            <SplashScreen/>
            <header>
              <NavBar/>
            </header>
            {children}
            <Whatsapp/>
            <Footer/>
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  )
}
