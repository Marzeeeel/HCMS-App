import React from 'react'
import pakcoy from '../assets/pakcoy.jpg'
import { Link } from 'react-router-dom'
import { DetailMonitorPath, DetailCekTanamanPath, DetailDataTanamanPath, DetailKontakPath, MainPath, TanamanHidroponikPath } from '../routes'
import { FaTemperatureHigh } from 'react-icons/fa'
import { WiHumidity } from 'react-icons/wi'
import { IoWaterOutline } from 'react-icons/io5'
import { FiArrowLeft } from 'react-icons/fi'

function PakcoyPage () {
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
      <div className="pakcoy-page">
        <div className="pakcoy-page__header">
          <h2>Pakcoy</h2>
        </div>
        <section className="hcms__list-pakcoy">
              <div className="hcms__list-pakcoy-item">
                  <div className="pakcoy__image">
                    <img src={pakcoy} alt="Gambar Pakcoy"/>
                  </div>
                  <section className="hcms__list-pakcoy-item__text">
                    <p>Pakcoy (Brassica rapa L) merupakan sayuran yang tampilannya sangat mirip dengan sawi. Jika sawi batangnya lebih ramping dan memanjang, pakcoy memiliki batang yang lebih besar dan pendek, serta struktur daunnya lebar. Tanaman yang terkenal dengan sebutan sawi daging ini memiliki rahasia ajaib yang masih jarang diketahui masyarakat antara lain yaitu kandungan vitamin A tinggi mampu menjaga kornea mata agar selalu sehat. Kandungan vitamin E pada pakcoy berfungsi sebagai antioksidan di dalam sel, kandungan vitamin K yang sangat tinggi berguna dalam membantu proses pembekuan darah, mencegah penyakit jantung dan stroke. Selain itu, tanaman yang mengandung folat sangat baik dikonsumsi oleh ibu hamil, karena folat berfungsi untuk mencegah terjadinya cacat tabung saraf, kelainan pembentukan otak atau terjadinya kemungkinan kelainan tulang belakang pada janin.</p>
                    <div className='keterangan'>
                    <p><FaTemperatureHigh /> 10°C - 21°C</p>
                    <p><WiHumidity /> 80% - 90%</p>
                    <p><IoWaterOutline /> 5 cm</p>
                    </div>
                  </section>
              </div>
        </section>
      </div>
      <Link to={TanamanHidroponikPath} className='action-back'>
            <button><FiArrowLeft /> Kembali </button>
          </Link>
      </div>
  )
}

export default PakcoyPage
