import React from 'react'
import LoginForm from '../components/LoginForm'
import { useLocation } from 'react-router-dom'

const LoginPage = () => {

    const location = useLocation()
    const data = location.state

    console.log(data)
  return (
    <div>
      <LoginForm/>
    </div>
  )
}

export default LoginPage
