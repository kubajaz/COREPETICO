import Image from 'next/image'
import React, { useState } from 'react'
import {
  SearchIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';
import DropDown from './DropDown';
import { useAuth } from '../../context/AuthContext';

function Header() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();
  const { user } = useAuth()
  console.log(user)

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const search = () => {
    router.push({
      pathname: '/tutors',
      query: {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    })
  }

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>

      <div className='relative flex items-center h-10 cursor-pointer'>
        <Image
          alt="logo"
          src="/../public/logoname.png"
          fill
          className='object-contain object-left'
          onClick={() => { router.push('/') }}
        />
      </div>

      {/* <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm cursor-pointer'>
        <div className='flex-grow pl-5 bg-transparent outline-none text-sm text-blue-800 placeholder-gray-400'>Search</div>
        <SearchIcon className='hidden md:inline-flex h-8 bg-blue-800 text-white rounded-full p-2 md:mx-2' />
      </div> */}

      <h3 className='text-2xl flex space-x-4 items-center justify-center text-gray-500 '>
        {user?.displayName ?
          <div className='hidden md:flex'>
            Hello {user.displayName}!
          </div> : null
        }
      </h3>

      <div className='flex space-x-4 items-center justify-end text-gray-500'>
        <DropDown />
      </div>

      {/* {false && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />

          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>

            <UsersIcon className='h-5' />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(Number(e.target.value))}
              type='number'
              min={1}
              className='w-12 pl-2 text-lg outline-none text-red-400'
            />

          </div>
          <div className='flex'>
          <button onClick={()=>{}} className='flex-grow text-gray-500'>Cancel</button>
            <button onClick={search} className='flex-grow text-red-400'>Search</button>
          </div>
        </div>
      )} */}
    </header>
  )
}

export default Header