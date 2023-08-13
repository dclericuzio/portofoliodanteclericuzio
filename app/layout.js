import './globals.css'
import NavBar from '../components/navigationbar.js'
import Footer from '../components/footer.js'
import {DM_Sans} from 'next/font/google'

const dmsans = DM_Sans({subsets: ['latin'],  weight:['400','500','700']})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/arrow.ico' />
      </head>
      <body className={`${dmsans.className}`}>
        <header>
          <NavBar/>
        </header>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
