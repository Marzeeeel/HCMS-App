import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { DetailMonitorPath, DetailCekTanamanPath, DetailDataTanamanPath, DetailKontakPath, MainPath } from '../routes'
import { WiHumidity } from 'react-icons/wi'
import db from '../utils/firebase'
import { ref, onValue } from 'firebase/database'

function KelembapanPage () {
  const [currentHum, setCurrentHum] = useState()

  const getData = async () => {
    const data = await ref(db, 'DHT')
    console.log(data)
    let data1

    onValue(data, (snapshot) => {
      data1 = snapshot.val()
      console.log(data1.Hum)
      setCurrentHum(data1.Hum)
    })
  }
  useEffect(() => {
    getData()
  }, [currentHum])

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
            <h3 className="hcms__list-hidroponik-item__monitor">Monitor</h3>
          </div>
        </Link>
        <Link to={`${DetailCekTanamanPath}`}>
          <div className="hcms__list-hidroponik-item">
            <h3 className="hcms__list-hidroponik-item__description">Cek Tanaman</h3>
          </div>
        </Link>
        <Link to={`${DetailDataTanamanPath}`}>
          <div className="hcms__list-hidroponik-item">
            <h3 className="hcms__list-hidroponik-item__description">Data Tanaman</h3>
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
      <div className="Kelembapan-page">
        <div className="Kelembapan-page__header">
          <h2>Kelembapan</h2>
        </div>
        <section className="hcms__list-kelembapan">
          <div className="hcms__list-kelembapan-item">
            <section className="hcms__list-kelembapan-item__text">
              <p><WiHumidity /> {currentHum}</p>
            </section>
          </div>
        </section>
      </div>
      <Link to={DetailMonitorPath} className='action-back-hidroponik'>
            <button><FiArrowLeft /> Kembali </button>
          </Link>
      </div>
  )
}

export default KelembapanPage
