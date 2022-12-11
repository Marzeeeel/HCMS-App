import React from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { DetailMonitorPath, DetailCekTanamanPath, DetailDataTanamanPath, DetailKontakPath, MainPath } from '../routes'

function Kontak () {
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
            <h3 className="hcms__list-hidroponik-item__description">Data Tanaman</h3>
          </div>
        </Link>
        <Link to={`${DetailKontakPath}`}>
          <div className="hcms__list-hidroponik-item">
            <h3 className="hcms__list-hidroponik-item__kontak">Kontak</h3>
          </div>
        </Link>
        <Link to={`${MainPath}`}>
          <div className="hcms__dashboard-item__logout">
            <h3> Log Out </h3>
          </div>
        </Link>
      </div>
    <section className="kontak">
      <section className="hcms__kontak">
        <div className="hcms__kontak-item">
          <div className='hcms__kontak-item__title'>
            <h2>Kontak Kami</h2>
            <p>Kelompok C22-160</p>
          </div>
        </div>
      </section>

      <section className="hcms__list-kontak">
        <div className="row">
          <div className="column">
          <div className="hcms__list-kontak-item">
            <h3 className="hcms__list-kontak-item__description"><FiUser/> Akbar Andika Khadafi</h3>
            <section className="hcms__list-kontak-item__text">
              <p><FaGoogle /> akbrandika123@gmail.com </p>
              <p><FaLinkedin /><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/akbar-andika-khadafi-384a21251/"> Akbar Andika Khadafi</a></p>
              <p><FaInstagram /><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/akbaraandka/"> akbaraandka</a></p>
            </section>
            </div>
          </div>

          <div className="column">
          <div className="hcms__list-kontak-item">
            <h3 className="hcms__list-kontak-item__description"><FiUser/> Annisa Nur Baiti</h3>
            <section className="hcms__list-kontak-item__text">
              <p><FaGoogle /> anissanurbaiti354@gmail.com</p>
              <p><FaLinkedin /> <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/annisanurbaiti/">Annisa Nur Baiti</a></p>
              <p><FaInstagram /> <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/annisa_nb29/">annisa_nb29</a> </p>
            </section>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
          <div className="hcms__list-kontak-item">
            <h3 className="hcms__list-kontak-item__description"><FiUser/>Marselina Rahmawati</h3>
            <section className="hcms__list-kontak-item__text">
              <p><FaGoogle /> marselinarahmawati75@gmail.com</p>
              <p><FaLinkedin /> <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marselinarahmawati/">Marselina Rahmawati</a></p>
              <p><FaInstagram /><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/marselllinaa_/"> marselllinaa_</a></p>
            </section>
          </div>
          </div>

          <div className="column">
          <div className="hcms__list-kontak-item">
            <h3 className="hcms__list-kontak-item__description"><FiUser/>Muhammad Rendy Pratama</h3>
            <section className="hcms__list-kontak-item__text">
              <p><FaGoogle /> m.rendy5pratama@gmail.com </p>
              <p><FaLinkedin /><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/muhammad-rendy-pratama-29868a245/"> Muhammad Rendy Pratama</a></p>
              <p><FaInstagram /><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rendypratama141/"> rendypratama141</a></p>
            </section>
          </div>
          </div>
          </div>
      </section>
    </section>
    </div>
  )
};

export default Kontak
