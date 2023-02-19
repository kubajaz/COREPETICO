import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 items-center justify-center'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How it works</p>
            <p>Newsroom</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>CONTACT</h5>
            <p>xxx@corepetico.com</p>
            <p>Newsroom</p>
            <p>Investors</p>

        </div>
    </div>
  )
}

export default Footer