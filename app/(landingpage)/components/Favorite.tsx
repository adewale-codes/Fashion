import React from 'react'
import Image from 'next/image'
import f1 from '../../assets/f1.svg'
import f2 from '../../assets/f2.svg'
import arrow from '../../assets/arrow.svg'

const Favorite = () => {
  return (
    <div className='bg-white h-1/2 w-full justify-center items-center p-10'>
        <div className=''>
            <p className='text-5xl font-semibold'>Young's Favorite</p>
        </div>
        <div className='flex md:flex-row flex-col justify-center items-center md:justify-around md:items-start p-2'>
        <div className='p-5'>
                <ul>
                    <li>
                        <Image src={f1} alt='first' />
                    </li>
                    <li>
                        <div className='flex flex-row gap-60'>
                            <div className=''>
                                <ul>
                                    <li className='text-2xl font-medium'>Trending on instagram</li>
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
                        <Image src={f2} alt='first' />
                    </li>
                    <li>
                        <div className='flex flex-row gap-80'>
                            <div className=''>
                                <ul>
                                    <li className='text-2xl font-medium'>All under $40</li>
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

export default Favorite