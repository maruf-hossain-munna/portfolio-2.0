import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/nav/Navbar'
import Footer from './components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maruf Hossain Munna',
  description: 'Myself Maruf, Full stack web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <div className='flex flex-col min-h-screen bg-gradient-to-r from-black via-slate-900 to-slate-700 text-white'>
        <NavBar />
        <main className='flex-grow '>
          {children}
        </main>
        <Footer />
      </div>
    </html>
  )
}
