import React from 'react'
import Image from 'next/image'

function SmallCard({ title, url }: any) {
    return (
        <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
            <div className="relative h-16 w-16">
                <Image
                    alt="small"
                    src={url}
                    fill
                    className="rounded-lg"
                />
            </div>

            <div>
                <h2>{title}</h2>
                <h3 className='text-gray-500'>Random text</h3>
            </div>
        </div>

    )
}

export default SmallCard