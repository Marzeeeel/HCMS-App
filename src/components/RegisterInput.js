import React from 'react'
import useInput from '../hooks/useInput'
import { ref, set } from 'firebase/database'
import { auth, userDatabase } from '../utils/firebase'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function RegisterInput ({ register }) {
  const [name, onNameChange] = useInput('')
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  const [confirmPassword, onConfirmPasswordChange] = useInput('')

  const navigate = useNavigate()

  const onRegisterHandler = async ({ email, name, password }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          set(ref(userDatabase, 'users/' + user.uid), {
            name,
            email,
            password
          })
          // eslint-disable-next-line no-undef
          swal({
            title: 'User Telah Ditambahkan!',
            icon: 'success',
            button: true
          })
          navigate('/login')
        })
        .catch((error) => {
          const errorMessage = error.message
          alert(errorMessage)
        })
      await sendEmailVerification(auth.currentUser).catch((error) => console.log(error.message))
      await updateProfile(auth.currentUser, { displayName: name }).catch((error) => console.log(error.message))
    } catch (error) {
      console.log(error.message)
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()

    if (password === confirmPassword) {
      onRegisterHandler({ email, name, password })
    } else {
      alert('Register Gagal, Password dan Confirm Password harus sama')
    }
  }

  return (
    <div className='input-register'>
      <form onSubmit={onSubmitHandler} className='register-input'>
        <input className="input__action" type="text" placeholder="Nama" value={name} onChange={onNameChange} required/>
        <input className="input__action" type="email" placeholder="Email" value={email} onChange={onEmailChange} required/>
        <input className="input__action" type="password" placeholder="Password" value={password} onChange={onPasswordChange} required/>
        <input className="input__action" type="password" placeholder="Konfirmasi Password" value={confirmPassword} onChange={onConfirmPasswordChange} required/>
        <div className='register__action'>
          <button className='action-submit' type='submit' title='Simpan'>
            <p>Simpan</p>
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterInput
