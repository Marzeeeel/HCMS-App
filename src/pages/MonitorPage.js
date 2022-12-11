import React from 'react'
import { Link } from 'react-router-dom'
import { TanamanHidroponikPath, DetailSuhuRuangPath, DetailKelembapanPath, DetailKetinggianAirPath, DetailMonitorPath, DetailCekTanamanPath, DetailDataTanamanPath, DetailKontakPath, MainPath } from '../routes'
import { FiThermometer, FiCloudSnow, FiSunrise, FiWind } from 'react-icons/fi'

function Monitor () {
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
    <div className="monitor">
        <section className="hcms__monitor">
          <div className="hcms__monitor-item">
            <div className="hcms__monitor-item__title">
              <h2>Pilih Fitur</h2>
            </div>
          </div>
        </section>
        <section className="hcms__list-monitor">
          <div className="row">
            <div className="column">
              <div className="container">
                <Link to={`${DetailSuhuRuangPath}`}>
                  <div className="hcms__list-monitor-item-suhu">
                    <h3>Suhu Ruang <FiThermometer /></h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="column">
              <Link to={`${DetailKelembapanPath}`}>
                <div className="hcms__list-monitor-item-kelembapan">
                  <h3>Kelembaban <FiCloudSnow/></h3>
                </div>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <Link to={`${DetailKetinggianAirPath}`}>
                <div className="hcms__list-monitor-item-ketinggianAir">
                  <h3>Ketinggian Air <FiWind /></h3>
                </div>
              </Link>
            </div>
            <div className="column">
              <Link to={`${TanamanHidroponikPath}`}>
                <div className="hcms__list-monitor-item-tanaman">
                  <h3>Tanaman Hidroponik <FiSunrise /></h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
      </div>
  )
};

export default Monitor
