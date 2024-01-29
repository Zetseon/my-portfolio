import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Parth Shah',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <div className='flex min-h-screen flex-col items-center bg-gradient-to-r from-third to-fourth font-serif  bg-fourth text-txt'>
          <Navbar />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
