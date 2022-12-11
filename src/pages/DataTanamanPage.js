import React, { useEffect, useState } from 'react'
import { dbTanaman } from '../utils/firebase'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { DetailMonitorPath, DetailCekTanamanPath, DetailDataTanamanPath, DetailKontakPath, MainPath } from '../routes'
import { FaTrash } from 'react-icons/fa'

function DataTanamanPage () {
  const [dataTanaman, setDataTanaman] = useState([])

  const getDataTanaman = async () => {
    const tanamanCollectionRef = collection(dbTanaman, 'Tanaman')
    const data = await getDocs(tanamanCollectionRef)
    setDataTanaman(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  const deleteTanaman = async (id) => {
    const tanamanRef = doc(dbTanaman, 'Tanaman', id)
    await deleteDoc(tanamanRef)
    window.location.reload()
  }

  useEffect(() => {
    getDataTanaman()
  }, [])

  console.log(dataTanaman)
  return (
    <div className="hcms__list-hidroponik">
      <div className="hcms__list-hidroponik-list">
      <div className="header-wrapper">
          <div className="header-logo-navbar">
            <Link to={'/'}>
            <h1>HCMS</h1>
            </Link>
          </div>
      </div>
        <Link to={`${DetailMonitorPath}`}>
          <div className="hcms__list-hidroponik-item">
            <h3 className="hcms__list-hidroponik-item__description">Monitor</h3>
          </div>
        </Link>
        <Link to={`${DetailCekTanamanPath}`}>
          <div className="hcms__list-hidroponik-item">
            <h3 className="hcms__list-hidroponik-item__description">Cek Tanaman</h3>
          </div>
        </Link>
        <Link to={`${DetailDataTanamanPath}`}>
          <div className="hcms__list-hidroponik-item">
            <h3 className="hcms__list-hidroponik-item__dataTanaman">Data Tanaman</h3>
          </div>
        </Link>
        <Link to={`${DetailKontakPath}`}>
          <div className="hcms__list-hidroponik-item">
            <h3 className="hcms__list-hidroponik-item__description">Kontak</h3>
          </div>
        </Link>
        <Link to={`${MainPath}`}>
          <div className="hcms__dashboard-item__logout">
            <h3> Log Out </h3>
          </div>
        </Link>
      </div>
      <div className="Data-Tanaman-page">
        <div className="Data-Tanaman-page__header">
          <h2>Data Tanaman</h2>
          <section className="hcms_list-dataTanaman">
            <table border="solid" >
              <thead>
                <th>Nama Tanaman</th>
                <th>Hidoponik</th>
                <th>Suhu</th>
                <th>Kelembapan</th>
                <th>Ketinggian Air</th>
                <th>Keterangan</th>
              </thead>
              {dataTanaman.map((tanaman) => {
                let hidroponik
                if (tanaman.Hidroponik) {
                  hidroponik = 'Yes'
                } else { hidroponik = 'No' }
                console.log(tanaman)
                return <tbody key={tanaman.id}>
                          <td>{tanaman.NamaTanaman}</td>
                          <td>{hidroponik}</td>
                          <td>{tanaman.Suhu} C</td>
                          <td>{tanaman.Kelembapan} %</td>
                          <td>{tanaman.KetinggianAir} cm</td>
                          <td><button><FaTrash onClick={() => deleteTanaman(tanaman.id)}/></button></td>
                        </tbody>
              })}
            </table>
          </section>
        </div>
      </div>
      </div>
  )
}

export default DataTanamanPage
