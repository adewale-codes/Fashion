"use client"
import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'
import { usePathname } from 'next/navigation'
import logo from "../../assets/logo.svg"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const Nav = () => {
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
        <div className='bg-white grid lg:grid-cols-[200px_minmax(400px,_1fr)_200px] grid-cols-[1fr_50px] items-center lg:px-28 px-4 py-5 h-24'>
            <Link href="/">
                <Image src={logo} height={60} width={237} alt='logo' />
            </Link>
            <div className='justify-self-start lg:pl-16 hidden lg:flex items-center justify-center gap-2 md:gap-8'>
                <Link className={pathName === "/catalogue" ? "" : "text-secondary-400"} href="/">CATALOGUE</Link>
                <Link className={pathName === "/fashion" ? "" : "text-secondary-400"} href="/">FASHION</Link>
                <Link className={pathName === "/favorite" ? "" : "text-secondary-400"} href="/">FAVORITE</Link>
                <Link className={pathName === "/lifestyle" ? "" : "text-secondary-400"} href="/">LIFESTYLE</Link>
            </div>
            <Link href="/" className='hidden lg:flex'>
                <button className='rounded-lg py-4 px-6 h-14 w-28 text-white bg-black'>Login</button>
            </Link>
            <div className='lg:hidden flex justify-self-end cursor-pointer'>
                {isOpen ? (
                    <XMarkIcon className='h-6 w-6' onClick={() => setIsOpen(false)} />
                ) :(
                    <Bars3Icon className='h-6 w-6' onClick={() => setIsOpen(false)} />
                )}
            </div>
        </div>
        <div className={`block lg:hidden fixed h-64 -mt-4 transform left-0 w-full bg-white transition-transform duration-300 ease-in-out overflow-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 lg:justify-self-start lg:pl-32 lg:flex lg:items-center lg:justify-center lg:gap-2 lg:md:gap-8 lg:bg-transparent`}>
            <div className='flex flex-col space-y-5 ml-5'>
                <Link href="/">CATALOGUE</Link>
                <Link href="/">FASHION</Link>
                <Link href="/">FAVORITE</Link>
                <Link href="/">LIFESTYLE</Link>
                <Link href="/">
                    <button className='rounded-lg py-4 px-6 h-14 w-28 text-white bg-black'>Login</button>
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Nav