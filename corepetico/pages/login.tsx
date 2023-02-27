import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  console.log(user, 'u')

  const handleLogin = async (e: any) => {
    e.preventDefault()

    try {
      await login(data.email, data.password)
      router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="w-2/5 mx-auto">
      <h1 className="text-center my-3 text-2xl font-bold">Zaloguj się</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            required
            autoComplete="email"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Wpisz email"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block font-medium text-gray-700">
            Hasło
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={data.password}
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            required
            autoComplete="current-password"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Wpisz hasło"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Zaloguj się
        </button>
      </form>
    </div>
  )
}

export default Login
