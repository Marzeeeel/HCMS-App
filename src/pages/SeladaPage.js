import React from 'react'
import selada from '../assets/selada.jpg'
import { Link } from 'react-router-dom'
import { DetailMonitorPath, DetailCekTanamanPath, DetailDataTanamanPath, DetailKontakPath, MainPath, TanamanHidroponikPath } from '../routes'
import { FaTemperatureHigh } from 'react-icons/fa'
import { WiHumidity } from 'react-icons/wi'
import { IoWaterOutline } from 'react-icons/io5'
import { FiArrowLeft } from 'react-icons/fi'

function SeladaPage () {
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
      <div className="selada-page">
        <div className="selada-page__header">
          <h2>Selada</h2>
        </div>
        <section className="hcms__list-selada">
              <div className="hcms__list-selada-item">
                  <div className="selada__image">
                    <img src={selada} alt="Gambar Selada"/>
                  </div>
                  <section className="hcms__list-selada-item__text">
                    <p>Selada (Lactuca sativa) merupakan  sayuran daun yang tergolong ke dalam  genus Lactuca. Selada ini termasuk tanaman semusim  yang memiliki berbagai bentuk, khususnya bentuk daun. Tanaman ini banyak dibudidayakan petani terutama di daerah dataran tinggi atau sekitar pegunungan. Budidaya selada hidroponik merupakan cara baru dalam teknik penanaman yang dilakukan tanpa media tanah. Teknik ini pada dasarnya hanya memanfaatkan air sebagai media tumbuh tanaman. Sistem Hidroponik menggunakan air lebih efisien, sehingga cocok diterapkan pada daerah yang memiliki pasokan air terbatas.  Jika dibandingkan dengan penanaman secara konvensional, hidroponik lebih dapat memberi keuntungan seperti pemanfaatan lahan sempit, pemeliharaan tanaman yang tergolong mudah dan hasil panen higienis sehingga sayuran yang dipanen lebih bersih dan sehat.</p>
                    <div className='keterangan'>
                    <p><FaTemperatureHigh /> 25°C - 27°C</p>
                    <p><WiHumidity /> 65% - 78%</p>
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

export default SeladaPage
