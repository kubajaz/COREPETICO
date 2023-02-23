import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
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
    <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className="text-center my-3 ">Zaloguj się</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            required
            type="email"
            placeholder="Wpisz email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Hasło</Form.Label>
          <Form.Control
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            required
            type="password"
            placeholder="Wpisz hasło"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Zaloguj się
        </Button>
      </Form>
    </div>
  )
}

export default Login