import React from 'react'
import { Link } from 'react-router-dom'
import { MainPath } from '../routes'
import { FiArrowLeft } from 'react-icons/fi'

function AboutPage () {
  return (
    <div className="about-page">
      <div className="about-page__what">
        <h2>Apa itu HCMS?</h2>
        <p>HCMS adalah singkatan dari Hydroponic Control Monitoring System yang dapat membantu kita untuk membudidayakan tanaman hidroponik berbasis website yang akan menampilkan data suhu dan ketinggian air dengan sensor sensor yang di aplikasikan pada tanaman.</p>
      </div>
      <div className="about-page__why">
        <h2>Kenapa kami membuat HCMS?</h2>
        <p>Tanaman hidroponik memerlukan perawatan secara intens seperti kelembaban air harus dimonitoring dengan baik dan kebutuhan lainnya. Namun, ada saatnya pemilik tanaman hidroponik tidak berada di dekat area penanaman tersebut sehingga tidak dapat secara langsung melakukan perawatan terhadap tanamannya. Maka dari itu diperlukan solusi untuk memantau kondisi tanaman secara otomatis. Website ini muncul dari pertanyaan “Bagaimana cara merawat tanaman hidroponik secara efektif?”, “Bagaimana orang lebih mudah memantau tanaman hidroponik?”. Website ini diharapkan dapat memudahkan masyarakat yang hobi menggeluti berkebun dengan konsep hidroponik untuk bisa monitoring ketinggian air dan kelembaban air secara otomatis terhadap tanaman hidroponik mereka.</p>
      </div>
      <Link to={MainPath} className='action-submit-back'>
            <button><FiArrowLeft /> Kembali </button>
          </Link>
      </div>
  )
}
export default AboutPage
