import React from 'react'
import { Link } from 'react-router-dom'
import NavbarFixed from './NavbarFixed'
import NavbarMobile from './NavbarMobile'

const Navbar = () => {
  return (
    <header>
      <NavbarFixed />
      <div className="main-nav">
        <div className="container">
          <div className="nav-brand">
            <img
              src="https://www.grxstatic.com/d4fuqqd5l3dbz/static/img/goodrx-logo-med-black.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <NavbarMobile />
    </header>
  )
}

export default Navbar
