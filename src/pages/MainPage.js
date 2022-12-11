import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import logo from '../assets/hcms-img.png'
import { AboutPath, LoginPath, RegisterPath } from '../routes'

function MainPage () {
  return (
    <div className="main-page">
      <div className="main-page__image">
        <img src={logo} alt="Gambar hcml"/>
      </div>
      <div className="main-page__container">
        <div className="main-page__text">
          <h2>Selamat Datang di HCMS</h2>
          <p className="main-page__text-acronym">HCMS adalah Hydroponic Control Monitoring System.</p>
          <p className="main-page__text-desc">Aplikasi budidaya hidroponik yang dapat mempermudah Anda dalam perawatan <br></br> tanaman hidroponik menjadi lebih efektif dan fleksibel.</p>
        </div>
        <div className="main-page__link">
          <Link to={LoginPath} className='action-submit'>
            <button> Login <span className="one"><FiArrowRight /></span></button>
          </Link>
          <Link to={RegisterPath} className='action-submit'>
            <button> Buat Akun <span className="two"><FiArrowRight /></span></button>
          </Link>
          <Link to={AboutPath} className='action-submit action-about-page'>
            <button> Tentang HCMS </button>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default MainPage
