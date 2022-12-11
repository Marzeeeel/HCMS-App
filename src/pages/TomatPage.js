import React from 'react'
import tomat from '../assets/tomat.jpg'
import { Link } from 'react-router-dom'
import { DetailMonitorPath, DetailCekTanamanPath, DetailDataTanamanPath, DetailKontakPath, MainPath, TanamanHidroponikPath } from '../routes'
import { FaTemperatureHigh } from 'react-icons/fa'
import { WiHumidity } from 'react-icons/wi'
import { IoWaterOutline } from 'react-icons/io5'
import { FiArrowLeft } from 'react-icons/fi'

function TomatPage () {
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
      <div className="tomat-page">
        <div className="tomat-page__header">
          <h2>Tomat</h2>
        </div>
        <section className="hcms__list-tomat">
              <div className="hcms__list-tomat-item">
                  <div className="tomat__image">
                    <img src={tomat} alt="Gambar Tomat"/>
                  </div>
                  <section className="hcms__list-tomat-item__text">
                    <p>Tomat merupakan salah satu buah yang punya banyak manfaat untuk tubuh. Buah ini memiliki rasa cenderung asam karena kandungan vitamin A dan vitamin C, serta betakaroten yang sangat bermanfaat bagi tubuh. Tomat bisa dicampur sebagai bahan tambahan dalam masakan dan minuman. Tomat hidroponik adalah tomat yang tumbuh dalam larutan nutrisi dan bukan di tanah, meskipun mereka biasanya ditempatkan dalam bahan yang bukan tanah yang dapat mendukung akarnya dan memberi nutrisi. Menanam tomat secara hidroponik juga memungkinkan tukang kebun untuk membesarkannya di lingkungan yang lebih terkendali. Tomat tumbuh sehat, lebih cepat, dan hasil buah yang lebih besar. Namun berkebun tomat lebih membutuhkan banyak bahan dibanding konvensional pakai tanah.</p>
                    <div className='keterangan'>
                    <p><FaTemperatureHigh /> Suhu : 18°C - 25°C</p>
                    <p><WiHumidity /> Kelembapan : 25%</p>
                    <p><IoWaterOutline /> Ketinggian Air : 5 cm</p>
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

export default TomatPage
