import React from 'react'
import style from './login.module.css'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEMail] = setState()
    const [password, setPassword] = setState()
    const [error, setError] = setState()
  return (
    <div>Login</div>
  )
}

export default Login