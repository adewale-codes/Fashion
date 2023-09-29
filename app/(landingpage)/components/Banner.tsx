import React from 'react'
import Image from 'next/image'
import Marquee from "react-fast-marquee";
import amazon from '../../assets/amazon.svg'
import him from '../../assets/him.svg'
import lacoste from '../../assets/lacoste.svg'
import levis from '../../assets/levis.svg'
import obey from '../../assets/obey.svg'
import shopify from '../../assets/shopify.svg'

const Banner = () => {
  return (
    <Marquee pauseOnHover>
        <div className='bg-yellow-400 p-10 h-28 w-full flex flex-row justify-center items-center'>
            <div className='p-5'>
                <ul>
                    <li>
                        <Image src={him} alt='H&M' />
                    </li>
                </ul>
            </div>
            <div className='p-5'>
                <ul>
                    <li>
                        <Image src={obey} alt='OBEY' />
                    </li>
                </ul>
            </div>
            <div className='p-5'>
                <ul>
                    <li>
                        <Image src={shopify} alt='shopify' />
                    </li>
                </ul>
            </div>
            <div className='p-5'>
                <ul>
                    <li>
                        <Image src={lacoste} alt='lacoste' />
                    </li>
                </ul>
            </div>
            <div className='p-5'>
                <ul>
                    <li>
                        <Image src={levis} alt='levis' />
                    </li>
                </ul>
            </div>
            <div className='p-5'>
                <ul>
                    <li>
                        <Image src={amazon} alt='amazon' />
                    </li>
                </ul>
            </div>
        </div>
    </Marquee>
  )
}

export default Banner