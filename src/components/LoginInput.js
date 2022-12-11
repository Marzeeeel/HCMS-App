import React from 'react'
import { useNavigate } from 'react-router-dom'
import useInput from '../hooks/useInput'
import { auth } from '../utils/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { putAccessToken, getUserLogged } from '../utils/helper'
import LocaleContext from '../contexts/LocaleContext'

// eslint-disable-next-line react/prop-types
function LoginInput ({ login }) {
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  const { locale } = React.useContext(LocaleContext)

  const navigate = useNavigate()

  const onLoginHandler = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user.accessToken
        // eslint-disable-next-line no-undef
        swal({
          title: 'Login Berhasil!',
          icon: 'success',
          button: true
        })
        putAccessToken(user)
        getUserLogged()
        navigate('/monitor')
      })
      .catch((error) => {
        const errorMessage = error.message
        // eslint-disable-next-line no-undef
        swal({
          title: 'Login Gagal!',
          icon: 'failed',
          button: true
        })
        console.log(errorMessage)
      })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()

    onLoginHandler({ email, password })
  }

  return (
    <div className='input-login'>
      <form onSubmit={onSubmitHandler} className='login-input'>
        <input className="input__action" type="email" id='email' placeholder="Email" value={email} onChange={onEmailChange} required/>
        <input className="input__action" type="password" id='password' placeholder="Password" value={password} onChange={onPasswordChange} required/>
        <div className='login__action'>
          <button className='action-submit' type='submit' title='Simpan'>
            <p>{locale === 'id' ? 'Login' : 'Sign In'}</p>
          </button>
        </div>
      </form>
    </div>
  )
};

export default LoginInput
