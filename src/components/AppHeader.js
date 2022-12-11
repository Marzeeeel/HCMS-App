import React from 'react'
import { Link } from 'react-router-dom'

function AppHeader () {
  return (
    <>
        <div className="header-wrapper">
          <div className='header-logo-wrapper'>
            <Link to={'/'}>
            <h1>HCMS</h1>
            </Link>
          </div>
      </div>
    </>
  )
}

export default AppHeader
