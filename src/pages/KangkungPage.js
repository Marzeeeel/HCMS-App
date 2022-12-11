import React from 'react'
import kangkung from '../assets/kangkung.jpg'
import { Link } from 'react-router-dom'
import { DetailMonitorPath, DetailCekTanamanPath, DetailDataTanamanPath, DetailKontakPath, MainPath, TanamanHidroponikPath } from '../routes'
import { FaTemperatureHigh } from 'react-icons/fa'
import { WiHumidity } from 'react-icons/wi'
import { IoWaterOutline } from 'react-icons/io5'
import { FiArrowLeft } from 'react-icons/fi'

function KangkungPage () {
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
      <div className="kangkung-page">
        <div className="kangkung-page__header">
          <h2>Kangkung</h2>
        </div>
        <section className="hcms__list-kangkung">
              <div className="hcms__list-kangkung-item">
                  <div className="kangkung__image">
                    <img src={kangkung} alt="Gambar Kangkung"/>
                  </div>
                  <section className="hcms__list-kangkung-item__text">
                    <p>Kangkung (kangkung) adalah tumbuhan yang termasuk jenis sayur-sayuran dan ditanam sebagai makanan. Kangkung banyak dijual di pasar-pasar. Kangkung banyak terdapat di kawasan Asia, tempat asalnya tidak diketahui. dan merupakan tumbuhan yang dapat dijumpai hampir di mana-mana terutama di kawasan berair. Kangkung biasanya memiliki batang dengan ukuran sekitar 2-3 meter atau lebih. Tanaman ini memiliki akar serabut serta bisa mengapung. Daun kangkung biasanya berbentuk seperti kepala panah, namun ada juga yang berbentuk lain. Daun kangkung bisa memiliki panjang 5-15 cm dengan lebar 2-8 cm. Tanaman kangkung memiliki bunga yang berbentuk seperti terompet dengan diameter 3-5 cm dan berwarna putih dengan warna ungu muda di bagian tengahnya.</p>
                    <div className='keterangan'>
                    <p><FaTemperatureHigh /> 20°C - 28°C</p>
                    <p><WiHumidity /> 87% </p>
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

export default KangkungPage
