import React from 'react'
import Link from 'next/link'
import { MenuIcon, UserCircleIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';


function DropDown() {
    const { user, logout } = useAuth()
    const router = useRouter();
    console.log(user)

    return (
        <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn m-1"><div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer'>
                <MenuIcon className='h-6' />
                <UserCircleIcon className='h-6' />
            </div></label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/login">Log In</Link></li>
                <li><Link href="/signup">Sign Up</Link></li>
                <li onClick={() => {
                    logout()
                    router.push('/login')
                }}>Log out</li>
            </ul>
        </div>
    )
}

export default DropDown