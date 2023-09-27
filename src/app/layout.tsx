import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create todo list',
  description: 'Create todo list with next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Navbar/>
        
        {children}
        <Footer/>
      </body>
    </html>
  )
}
