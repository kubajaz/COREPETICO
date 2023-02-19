import React from 'react'
import Image from 'next/image'

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
            <Image
                alt='banner'
                src='/../public/banner.jpg'
                fill
                className='object-cover'
            />

            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-white text-xs sm:text-lg'>Order your perfect lesson<br/> Choose a topic, time and place!<br/> We will do our best to fulfill your wish</p>

                <button className='text-blue-800 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>Order Lesson</button>
            </div>
        </div>
    )
}

export default Banner