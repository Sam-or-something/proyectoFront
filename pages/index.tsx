import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import NavbarInicio from '@/components/NavbarInicio'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <NavbarInicio></NavbarInicio>
      <div className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"> 
      </div>
      </div>
    </main>
  )
}
