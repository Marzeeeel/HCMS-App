import React from 'react'
import useInput from '../hooks/useInput'
import { dbTanaman } from '../utils/firebase'
import { addDoc, collection } from 'firebase/firestore'
// eslint-disable-next-line no-unused-vars
import { async } from '@firebase/util'

function CekTanamanInput () {
  const [name, setName] = useInput('')
  const [hidroponik, setHidroponik] = useInput(false)
  const [nonhidroponik, setnonHidroponik] = useInput(true)
  const [suhu, setSuhu] = useInput('')
  const [kelembapan, setKelembapan] = useInput('')
  const [ketinggianAir, setKetinggianAir] = useInput('')
  const dataTanamanCollectionRef = collection(dbTanaman, 'Tanaman')

  const createDataTanaman = async (event) => {
    event.preventDefault()
    console.log(name)
    console.log(hidroponik)
    console.log(suhu)
    await addDoc(dataTanamanCollectionRef, { NamaTanaman: name, Kelembapan: Number(kelembapan), KetinggianAir: Number(ketinggianAir), Suhu: Number(suhu), Hidroponik: Boolean(hidroponik) })

    // eslint-disable-next-line no-undef
    swal({

      title: 'Data Saved!',
      icon: 'success',
      button: true

    })
  }

  return (
    <div className='input-cek-tanaman'>
      <form className='cek-tanaman-input'>
        <h4>Nama</h4><input className="input__action" type="text" placeholder="Nama" value={name} onChange={setName} required/>
        <h4>Hidroponik<input className="input__action" type="radio" placeholder="No" value={hidroponik} onChange={setHidroponik} required/><span>Yes</span>
        <input className="input__action" type="radio" placeholder="Yes" value={nonhidroponik} onChange={setnonHidroponik} required/><span>No</span></h4>
        <h4>Suhu</h4><input className="input__action" type="text" placeholder="Suhu" value={suhu} onChange={setSuhu} required/>
        <h4>Kelembapan</h4><input className="input__action" type="text" placeholder="Kelembapan" value={kelembapan} onChange={setKelembapan} required/>
        <h4>Ketinggian Air</h4><input className="input__action" type="text" placeholder="Ketinggian Air" value={ketinggianAir} onChange={setKetinggianAir} required/>
        <div className='cek-tanaman__action'>
        <button className='action-submit' type='submit' title='Simpan' onClick={createDataTanaman}> Save </button>
        </div>
      </form>
    </div>
  )
}

export default CekTanamanInput
