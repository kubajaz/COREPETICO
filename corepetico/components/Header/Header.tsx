import Image from 'next/image'
import { useRouter } from 'next/router';
import DropDown from './DropDown';
import { useAuth } from '../../context/AuthContext';

function Header() {
  const router = useRouter();
  const { user } = useAuth()

 /*  const search = () => {
    router.push({
      pathname: '/tutors',
      query: {
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    })
  } */

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>

      <div className='relative flex items-center h-10 cursor-pointer'>
        <Image
          alt="logo"
          src="/../public/logo_name_transparent.png"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className='object-contain object-left'
          onClick={() => { router.push('/') }}
        />
      </div>

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
    </header>
  )
}

export default Header