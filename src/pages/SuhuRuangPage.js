import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DetailMonitorPath, DetailCekTanamanPath, DetailDataTanamanPath, DetailKontakPath, MainPath } from '../routes'
import { FaTemperatureHigh } from 'react-icons/fa'
import db from '../utils/firebase'
import { ref, onValue } from 'firebase/database'
import { FiArrowLeft } from 'react-icons/fi'

// eslint-disable-next-line require-jsdoc
function SuhuRuangPage () {
  const [currentTemp, setCurrentTemp] = useState()

  const getData = async () => {
    const data = await ref(db, 'DHT')
    console.log(data)
    let data1

    onValue(data, (snapshot) => {
      data1 = snapshot.val()
      console.log(data1.Hum)
      setCurrentTemp(data1.Temp)
    })
  }
  useEffect(() => {
    getData()
  }, [currentTemp])

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
    <div className="suhu-ruang-page">
      <div className="suhu-ruang-page__header">
        <h2>Suhu Ruang</h2>
      </div>
      <section className="HCMS__list-suhu-ruang">
        <div className="HCMS__list-suhu-ruang-item">
          <section className="HCMS__suhu-ruang-item__text">
            <p><FaTemperatureHigh />{currentTemp}</p>
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

export default SuhuRuangPage
