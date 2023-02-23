import React from 'react'
import Image from 'next/image'
import Modal from './Order/OrderModal'

function Banner() {
    return (
        <div className='relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[600px] 2xl:h-[700px]'>
            <Image
                alt='banner'
                src='/../public/banner.jpg'
                fill
                className='object-cover'
            />

            <Modal/>
        </div>
    )
}

export default Banner