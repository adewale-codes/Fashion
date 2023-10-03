import React from 'react'
import Image from 'next/image'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'

const Footer = () => {
  return (
    <div className='bg-black h-1/2 w-full p-10'>
        <div className='flex md:flex-row flex-col justify-start items-start md:justify-around md:items-start p-2'>
            <div className='p-5'>
                <ul>
                    <li className='text-white text-4xl font-semibold'>FASHION</li>
                    <li className='text-secondary-900 py-2'>Complete your style with awesome <br /> clothes from us</li>
                    <li className='py-2'>
                        <div className='flex flex-row gap-2'>
                            <Image src={facebook} alt='facebook' />
                            <Image src={instagram} alt='instagram' />
                            <Image src={twitter} alt='twitter' />
                            <Image src={linkedin} alt='linkedin' />
                        </div>
                    </li>
                </ul>
            </div>
            <div className='p-5'>
                <ul>
                    <li className='text-secondary-800'>Company</li>
                    <li className='text-secondary-900 py-3'>About</li>
                    <li className='text-secondary-900 py-2'>Contact us</li>
                    <li className='text-secondary-900 py-2'>Support</li>
                    <li className='text-secondary-900 py-2'>Careers</li>
                </ul>
            </div>
            <div className='p-5'>
                <ul>
                    <li className='text-secondary-800'>Quick Link</li>
                    <li className='text-secondary-900 py-3'>Share Location</li>
                    <li className='text-secondary-900 py-2'>Orders tracking</li>
                    <li className='text-secondary-900 py-2'>Size Guide</li>
                    <li className='text-secondary-900 py-2'>FAQs</li>
                </ul>
            </div>
            <div className='p-5'>
                <ul>
                    <li className='text-secondary-800'>Legal</li>
                    <li className='text-secondary-900 py-3'>Terms & conditions</li>
                    <li className='text-secondary-900 py-2'>Privacy Policy</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer