
import Providers from '@/Store/provider'
import Footer from './Comps/Footer'
import Header from './Comps/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'StyleUP',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <main className='bg-gradient-to-l from-[#181e41] to-[#984D38] md:py-5 py-3'>
          <div className='md:container md:max-w-[1400px]  max-w-[400px]'>
            <Providers>
              <Header />
              {children}
              <Footer />
            </Providers>
          </div>
        </main>
      </body>
    </html>
  )
}
