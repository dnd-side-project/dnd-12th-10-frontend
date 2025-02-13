import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'
import localFont from 'next/font/local'
import Sidebar from '../components/RootLayout/Sidebar'
import Providers from './providers'

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})

export const metadata: Metadata = {
  title: 'Leev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${pretendard.className} antialiased`}>
        <Providers>
          <div className='flex h-screen bg-[#FEFCF9]'>
            <Toaster position='top-center' />
            <Sidebar />
            <div className='grow overflow-auto'>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
