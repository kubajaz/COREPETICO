import React from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

function InfoCard({ url, title }:any) {
  return (
    <div className='flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
        <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
            <Image alt='info' src={url} fill className='object-cover rounded-2xl'/>
        </div>

        <div className='flex flex-col flex-grow pl-5'>
            <div className='flex justify-between'>
                <p>Warsaw</p>
                <HeartIcon className='h-7 cursor-pointer' />
            </div>

            <h4 className='text-xl'>{title}</h4>

            <div className='border-b w-10 pt-2'></div>

            <p className='pt-2 text-sm text-blue-800 flex-grow'>description description description description description</p>

            <div className='flex justify-between items-end pt-5'>
                <p className='flex item-center'>
                    <StarIcon className='h-5 text-red-400' />
                    {4.7}
                </p>

                <div>
                    <p className='text-lg lg:text-2xl font-semibold pb-2'>{80}$/lesson</p>
                    <p className='text-right font-extralight'>{3*80}$ total</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard