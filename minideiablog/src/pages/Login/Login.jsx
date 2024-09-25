import React, { useEffect } from 'react'
import style from './login.module.css'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useNavigate } from 'react-router-dom'
import { load } from 'firebase-tools/lib/commands'

const Login = () => {
  const [email, setEMail] = setState()
  const [password, setPassword] = setState()
  const [error, setError] = setState()

  const { login, error: authError, loading } = useAuthentication()
  const navigate = useNavigate()

  const handlerSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const user = {
      email,
      password
    }
    const res = await login(user)

    console.table(res)
    navigate('/post/create')
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])
  return (
    <div className={style.login}>
      <h1>Entrar no Ideia App</h1>
      <p>Compartilhe suas ideias! Aqui no nosso App</p>
      <form onSubmit={handlerSubmit}>
        <label>
          <span>E-mail: </span>
          <input
            type='email'
            name='email'
            required
            value={email}
            onChange={(e) => setEMail(e.target.value)}
            placeholder='Digite seu e-mail'
          >
          </input>
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="passord"
            name='passord'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Entre com sua senha'
          >
          </input>
        </label>
        {!loading && <button className='btn'>Login</button>}
        {loading && <button className='btn'>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Login