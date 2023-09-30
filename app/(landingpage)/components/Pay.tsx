import React from 'react'
import Image from 'next/image'
import fine from '../../assets/fine.svg'

const Pay = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='h-3/4 bg-primary-200 w-full flex md:flex-row flex-col justify-center items-center md:justify-around md:items-start p-2'>
            <div className='p-2'>
                <ul>
                    <li>
                        <Image src={fine} alt='fine' width={600} />
                    </li>
                </ul>
            </div>
            <div className='p-2'>
                <ul className='pt-10'>
                    <li>
                    <button className='rotate-[355deg] bg-white py-2 px-9 text-black text-8xl font-extrabold'>PAYDAY</button>
                    </li>
                    <li className='text-black text-8xl font-extrabold pt-5'>SALE NOW</li>
                    <br />
                    <li className='text-3xl'>Spend minimal $100 off</li>
                    <li className='text-3xl'>Voucher code for your next purchase</li>
                    <br />
                    <li className='text-3xl font-medium'>1 June - 10 June 2021</li>
                    <li className='text-3xl'>*Terms & Conditions apply</li>
                    <br />
                    <li>
                        <button className='bg-black text-white py-4 px-10'>Shop Now</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Pay