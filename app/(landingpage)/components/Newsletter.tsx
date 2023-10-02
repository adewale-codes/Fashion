import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
        <div className='h-3/4 bg-primary-100 w-full flex md:flex-row flex-col justify-center items-center md:justify-around md:items-start p-2'>
            <div className='py-20'>
                <p className='text-white text-3xl text-center md:text-4xl font-semibold'>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</p>
                <p className='text-white pt-2'>Type your email down below and be young wild generation</p>
                <div className='flex flex-row justify-center pt-2'>
                    <input type="text" placeholder='Add your email here' className='px-4' />
                    <button className='text-white bg-black py-2 px-4'>SEND</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter