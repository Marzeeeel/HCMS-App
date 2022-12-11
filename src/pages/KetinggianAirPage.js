import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { DetailMonitorPath, DetailCekTanamanPath, DetailDataTanamanPath, DetailKontakPath, MainPath } from '../routes'
import { IoWaterOutline } from 'react-icons/io5'
import db from '../utils/firebase'
import { ref, onValue } from 'firebase/database'

function KetinggianAirPage () {
  const [currentWLev, setCurrentWLev] = useState()

  const getData = async () => {
    const data = await ref(db, 'WLev')
    console.log(data)
    let data1

    onValue(data, (snapshot) => {
      data1 = snapshot.val()
      console.log(data1)
      setCurrentWLev(data1)
    })
  }
  useEffect(() => {
    getData()
  }, [currentWLev])

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
      <div className="Ketinggian-Air-page">
        <div className="Ketinggian-Air-page__header">
          <h2>Ketinggian Air</h2>
        </div>
        <section className="hcms__list-ketinggian-air">
          <div className="hcms__list-ketinggian-air-item">
            <section className="hcms__list-ketinggian-air-item__text">
              <p><IoWaterOutline /> {currentWLev}</p>
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

export default KetinggianAirPage
