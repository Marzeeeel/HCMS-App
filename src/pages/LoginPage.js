import React from 'react'
import { Link } from 'react-router-dom'
import { RegisterPath, MainPath } from '../routes'
import LoginInput from '../components/LoginInput'
import { FiArrowLeft } from 'react-icons/fi'

function LoginPage () {
  return (
    <div className='login-page'>
      <div className='login-page__header'>
        <h2>Login</h2>
        <p>Silahkan login untuk melanjutkan</p>
      </div>
      <LoginInput />
      <p className='login__link'>Belum memiliki akun?
        <Link to={RegisterPath}> Buat akun</Link>
      </p>
      <Link to={MainPath} className='action-submit-back'>
            <button><FiArrowLeft /> Kembali </button>
          </Link>
    </div>
  )
}

export default LoginPage
