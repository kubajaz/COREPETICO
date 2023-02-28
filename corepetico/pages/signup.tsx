import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { getAuth, updateProfile } from "firebase/auth";

const Signup = () => {
  const { user, signup } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
    displayName: '',
  })
  const router = useRouter()
  const auth = getAuth();

  useEffect(() => {
    if (user) { //add displayName to firebase while signup
      update(auth.currentUser, data.displayName)
    }
  }, [user])

  const update = (currentUser: any, displayName: any) => {
    updateProfile(currentUser, {
      displayName: displayName
    }).then(() => {
      console.log('Profile updated!')
    }).catch((error) => {
      console.log(error)
    });
  }


  const handleSignup = async (e: any) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password)
      router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="w-2/5 mx-auto">
      <h1 className="text-center my-3 text-2xl font-bold">Zarejestruj się</h1>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="displayName" className="form-label">
            Nick
          </label>
          <input
            type="name"
            className="form-control"
            placeholder="Wpisz nick"
            required
            id="displayName"
            onChange={(e) =>
              setData({
                ...data,
                displayName: e.target.value,
              })
            }
            value={data.displayName}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Wpisz email"
            required
            id="email"
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Hasło
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Wpisz hasło"
            required
            id="password"
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
          />
        </div>

        <button type="submit" className="w-full">
          Zarejestruj się
        </button>
      </form>
    </div>
  )
}

export default Signup;
