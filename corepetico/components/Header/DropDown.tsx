import React, { useState } from 'react'
import Link from 'next/link'
import { MenuIcon, UserCircleIcon } from '@heroicons/react/solid'
import { useAuth } from '../../context/AuthContext';


function DropDown() {
    const { user, logout } = useAuth()
    const [isVisible, setIsVisible] = useState(false)

    return <>
        <div onClick={() => setIsVisible(!isVisible)} className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn m-1">
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer text-gray-700'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </label>
            {isVisible ?
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    {user ? <li onClick={() => logout()}><Link style={{ textDecoration: 'none' }} href="/">Log Out</Link></li> :
                        <>
                            <li><Link style={{ textDecoration: 'none' }} href="/login">Logowanie</Link></li>
                            <li><Link style={{ textDecoration: 'none' }} href="/signup">Rejestracja</Link></li>
                        </>
                    }

                </ul> : null}
        </div>
    </>
}

export default DropDown