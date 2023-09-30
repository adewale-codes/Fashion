import React from 'react'

const Favorite = () => {
  return (
    <div className='bg-white h-1/2 w-full justify-center items-center p-10'>
        <div className=''>
            <p className='text-5xl font-semibold'>Young's Favorite</p>
        </div>
        <div className='flex md:flex-row flex-col justify-center items-center md:justify-around md:items-start p-2'>
            <div className='p-5'>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Favorite