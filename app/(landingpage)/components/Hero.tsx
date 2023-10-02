import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import hero from '../../assets/hero.svg'
import icon from '../../assets/icon.svg'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='h-3/4 bg-grays-100 w-full flex md:flex-row flex-col justify-center items-center md:justify-around md:items-start pl-10 md:p-2'>
            <div className='p-2'>
                <ul>
                    <li className='pt-5'>
                        <button className='rotate-[355deg] bg-white py-2 pl-9 pr-44 text-black text-7xl md:text-8xl font-extrabold'>LET&apos;S</button>
                    </li>
                    <li className='text-black md:text-8xl font-extrabold pt-5 pl-9 text-7xl'>EXPLORE</li>
                    <li className='text-black md:text-8xl font-extrabold pt-5 text-7xl'>
                        <div>
                            <button className='rotate-[355deg] bg-yellow-400 py-2 pl-9 pr-20 '>UNIQUE</button>
                        </div>
                    </li>
                    <li className='text-black md:text-8xl font-extrabold pt-5 pl-9 text-7xl'>CLOTHES</li>
                    <li>
                        <p className='text-2xl font-light'>Live for Influential and Innovative fashion!</p>
                    </li>
                    <br />
                    <li>
                        <div className='flex flex-row gap-5'>
                            <Image src={icon} alt='icon' />
                            <button className='bg-black text-white py-4 px-10'>Shop Now</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='p-2'>
                <ul>
                    <Image src={hero} alt='hero' width={500} height={500}/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Hero