import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AppHeader from './AppHeader'
import MainPage from '../pages/MainPage'
import { rootPath, MainPath, LoginPath, RegisterPath, AboutPath, DetailCekTanamanPath, DetailMonitorPath, DetailDataTanamanPath, DetailKontakPath, DetailSuhuRuangPath, DetailKelembapanPath, DetailKetinggianAirPath, TanamanHidroponikPath, SeladaPath, SawiPath, PakcoyPath, TomatPath, KangkungPath } from '../routes'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import AboutPage from '../pages/AboutPage'
import CekTanamanPage from '../pages/CekTanamanPage'
import DataTanamanPage from '../pages/DataTanamanPage'
import Monitor from '../pages/MonitorPage'
import Kontak from '../pages/KontakPage'
import SuhuRuangPage from '../pages/SuhuRuangPage'
import KelembapanPage from '../pages/KelembapanPage'
import KetinggianAirPage from '../pages/KetinggianAirPage'
import TanamanHidroponikPage from '../pages/TanamanHidroponikPage'
import SeladaPage from '../pages/SeladaPage'
import SawiPage from '../pages/SawiPage'
import PakcoyPage from '../pages/PakcoyPage'
import TomatPage from '../pages/TomatPage'
import KangkungPage from '../pages/KangkungPage'
import LocaleContext from '../contexts/LocaleContext'

function HcmsApp () {
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id')

  const localeValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale: () => {
        const newLocale = locale === 'id' ? 'en' : 'id'
        localStorage.setItem('locale', newLocale)
        setLocale(newLocale)
      }
    }
  }, [locale])

  return (
    <LocaleContext.Provider value={localeValue}>

    <div className="app-container">
      <header>
        <AppHeader />
      </header>
      <main>
        <Routes>
          <Route path={rootPath} element={<MainPage/>}></Route>
          <Route path={MainPath} element={<MainPage/>}></Route>
          <Route path={LoginPath} element={<LoginPage />}></Route>
          <Route path={RegisterPath} element={<RegisterPage />}></Route>
          <Route path={AboutPath} element={<AboutPage />}></Route>
          <Route path={DetailCekTanamanPath} element={<CekTanamanPage />}></Route>
          <Route path={DetailDataTanamanPath} element={<DataTanamanPage />}></Route>
          <Route path={DetailMonitorPath} element={<Monitor />}></Route>
          <Route path={DetailKontakPath} element={<Kontak />}></Route>
          <Route path={DetailSuhuRuangPath} element={<SuhuRuangPage/>}></Route>
          <Route path={DetailKelembapanPath} element={<KelembapanPage/>}></Route>
          <Route path={DetailKetinggianAirPath} element={<KetinggianAirPage/>}></Route>
          <Route path={TanamanHidroponikPath} element={<TanamanHidroponikPage/>}></Route>
          <Route path={SeladaPath} element={<SeladaPage/>}></Route>
          <Route path={SawiPath} element={<SawiPage/>}></Route>
          <Route path={PakcoyPath} element={<PakcoyPage/>}></Route>
          <Route path={TomatPath} element={<TomatPage/>}></Route>
          <Route path={KangkungPath} element={<KangkungPage/>}></Route>
        </Routes>
      </main>
    </div>
    </LocaleContext.Provider>
  )
}

export default HcmsApp
