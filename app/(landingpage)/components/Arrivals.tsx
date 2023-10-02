import React from 'react'
import Image from 'next/image'
import icon from '../../assets/icon.svg'
import first from '../../assets/first.svg'
import second from '../../assets/second.svg'
import third from '../../assets/third.svg'
import arrow from '../../assets/arrow.svg'

const Arrivals = () => {
  return (
    <div className='bg-white h-1/2 w-full justify-center items-center p-10'>
        <div className='md:pl-5'>
            <div className='pl-20 md:pl-40 '>
                <Image src={icon} alt='icon'/>
            </div>
            <p className='text-4xl -mt-12 md:-mt-14 md:text-5xl font-semibold'>NEW ARRIVALS</p>
        </div>
        <div className='flex md:flex-row flex-col justify-center items-center md:justify-around md:items-start p-2'>
            <div className='p-5'>
                <ul>
                    <li>
                        <Image src={first} alt='first' />
                    </li>
                    <li>
                        <div className='flex flex-row gap-5 md:gap-14'>
                            <div className=''>
                                <ul>
                                    <li className='text-xl md:text-2xl font-medium'>Hoodies & Sweetshirt</li>
                                    <li className='font-small'>Explore Now!</li>
                                </ul>
                            </div>
                            <div className='pt-1'>
                                <ul>
                                    <li>
                                        <Image src={arrow} alt='arrow' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='p-5'>
                <ul>
                    <li>
                        <Image src={second} alt='second' />
                    </li>
                    <li>
                        <div className='flex flex-row gap-16 md:gap-32'>
                            <div className=''>
                                <ul>
                                    <li className='text-xl md:text-2xl font-medium'>Coats & Parkas</li>
                                    <li className='font-small'>Explore Now!</li>
                                </ul>
                            </div>
                            <div className='p-1'>
                                <ul>
                                    <li>
                                        <Image src={arrow} alt='arrow' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='p-5'>
                <ul>
                    <li>
                        <Image src={third} alt='third' />
                    </li>
                    <li>
                        <div className='flex flex-row gap-20 md:gap-36'>
                            <div className=''>
                                <ul>
                                    <li className='text-xl md:text-2xl font-medium'>Tees & T-Shirt</li>
                                    <li className='font-small'>Explore Now!</li>
                                </ul>
                            </div>
                            <div className='p-1'>
                                <ul>
                                    <li>
                                        <Image src={arrow} alt='arrow' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Arrivals