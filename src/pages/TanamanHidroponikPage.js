import React from 'react'
import { Link } from 'react-router-dom'
import { SeladaPath, SawiPath, PakcoyPath, TomatPath, KangkungPath, DetailMonitorPath, DetailCekTanamanPath, DetailDataTanamanPath, DetailKontakPath, MainPath } from '../routes'
import selada from '../assets/selada.jpg'
import sawi from '../assets/sawi.jpg'
import pakcoy from '../assets/pakcoy.jpg'
import tomat from '../assets/tomat.jpg'
import kangkung from '../assets/kangkung.jpg'

function TanamanHidroponikPage () {
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
    <div className="tanaman-hidroponik-page">
      <div className="tanaman-hidroponik-page__header">
        <h2>Tanaman Hidroponik</h2>
      </div>
      <section className="hcms__list-tanaman-hidroponik">
        <div className="hcms__list-tanaman-hidroponik-item">
          <h3 className="hcms__list-tanaman-hidroponik-item__description"> Selada</h3>
          <div className="selada__image">
            <img src={selada} alt="Gambar Selada"/>
          </div>
          <section className="hcms__list-tanaman-hidroponik-item__text">
            <p>Rekomendasi Perawatan<Link to={`${SeladaPath}`}> Lihat selengkapnya. </Link> </p>
          </section>
        </div>

        <div className="hcms__list-tanaman-hidroponik-item">
          <h3 className="hcms__list-tanaman-hidroponik-item__description">Sawi</h3>
          <div className="sawi__image">
            <img src={sawi} alt="Gambar Sawi"/>
          </div>
          <section className="hcms__list-tanaman-hidroponik-item__text">
            <p>Rekomendasi Perawatan<Link to={`${SawiPath}`}> Lihat selengkapnya. </Link> </p>
          </section>
        </div>

        <div className="hcms__list-tanaman-hidroponik-item">
          <h3 className="hcms__list-tanaman-hidroponik-item__description">Pakcoy</h3>
          <div className="pakcoy__image">
            <img src={pakcoy} alt="Gambar Pakcoy"/>
          </div>
          <section className="hcms__list-tanaman-hidroponik-item__text">
            <p>Rekomendasi Perawatan<Link to={`${PakcoyPath}`}> Lihat selengkapnya. </Link> </p>
          </section>
        </div>

        <div className="hcms__list-tanaman-hidroponik-item">
          <h3 className="hcms__list-tanaman-hidroponik-item__description">Tomat</h3>
          <div className="tomat__image">
            <img src={tomat} alt="Gambar Tomat"/>
          </div>
          <section className="hcms__list-tanaman-hidroponik-item__text">
            <p>Rekomendasi Perawatan<Link to={`${TomatPath}`}> Lihat selengkapnya. </Link> </p>
          </section>
        </div>

        <div className="hcms__list-tanaman-hidroponik-item">
          <h3 className="hcms__list-tanaman-hidroponik-item__description">Kangkung</h3>
          <div className="kangkung__image">
            <img src={kangkung} alt="Gambar Kangkung"/>
          </div>
          <section className="hcms__list-tanaman-hidroponik-item__text">
            <p>Rekomendasi Perawatan<Link to={`${KangkungPath}`}> Lihat selengkapnya. </Link> </p>
          </section>
        </div>

      </section>
    </div>
    </div>
  )
}

export default TanamanHidroponikPage
