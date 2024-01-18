import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/nav/Navbar'

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
      {/* <body className={inter.className}>{children}</body> */}
      <div className='flex flex-col min-h-screen bg-black text-white'>
        <NavBar />
        <main className='flex-grow '>
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    </html>
  )
}
