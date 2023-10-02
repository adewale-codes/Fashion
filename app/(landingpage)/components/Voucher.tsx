import React from 'react'
import Image from 'next/image'
import apple from '../../assets/apple.svg'
import google from '../../assets/google.svg'
import phone from '../../assets/phone.svg'

const Voucher = () => {
  return (
    <div className='bg-white h-1/2 w-full p-10'>
        <div className='flex md:flex-row flex-col justify-center items-center md:justify-around md:items-start p-2'>
            <div className='p-5'>
                <ul className='pt-44'>
                    <li className='text-4xl font-semibold'>DOWNLOAD THE APP & GET THE VOUCHER!</li>
                    <li className='font-small pt-5'>Get 30% off for first transaction using Fashion mobile app for now</li>
                    <li className='pt-5'>
                        <div className='flex flex-row gap-5'>
                            <div className=''>
                                <ul>
                                    <li>
                                        <Image src={apple} alt='apple' />
                                    </li>
                                </ul>
                            </div>
                            <div className=''>
                                <ul>
                                    <li>
                                        <Image src={google} alt='google' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='p-5'>
                <Image src={phone} height={650} alt='phone' />
            </div>
        </div>
    </div>
  )
}

export default Voucher