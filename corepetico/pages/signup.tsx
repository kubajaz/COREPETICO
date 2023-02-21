import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
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
  
  useEffect(()=>{
    if(user){ //add displayName to firebase while signup
      update(auth.currentUser, data.displayName)
    }
  }, [user])

  const update = (currentUser:any, displayName:any) => {
    updateProfile(currentUser, {
      displayName: displayName
    }).then(() => {
      console.log('Profile updated!')
    }).catch((error) => {
      console.log(error)
    });
  }


  const handleSignup = async (e:any) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password)
      router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className="text-center my-3 ">Signup</h1>
      <Form onSubmit={handleSignup}>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            required
            onChange={(e) =>
              setData({
                ...data,
                displayName: e.target.value,
              })
            }
            value={data.displayName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  )
}

export default Signup