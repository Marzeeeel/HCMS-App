import React from 'react'
import RegisterInput from '../components/RegisterInput'
import { Link } from 'react-router-dom'
import { LoginPath, MainPath } from '../routes'
import { FiArrowLeft } from 'react-icons/fi'

function RegisterPage () {
  return (
    <div className="register-page">
      <div className="register-page__header">
        <h2>Registrasi Akun</h2>
        <p>Silahkan melakukan registrasi untuk membuat akun</p>
      </div>
      <RegisterInput />
      <p className='register__link'>Kembali ke
        <Link to={LoginPath}>Login</Link>
      </p>
      <Link to={MainPath} className='action-submit-back'>
            <button><FiArrowLeft /> Kembali </button>
          </Link>
    </div>
  )
}

export default RegisterPage
