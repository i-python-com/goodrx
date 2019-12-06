import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavbarMobile from './NavbarMobile'

function hasClass(obj, cls) {
  return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

const Navbar = () => {
  useEffect(() => {
    let hamburgerMain = document.querySelector('#hamburger-main')
    let navLi = document.querySelectorAll('.mobile-nav .nav-li')
    let mobileNav = document.querySelector('.mobile-nav')
    let searchBar = document.querySelector('#search-bar')
    let dropdownMenu = document.querySelector('.typeahead.dropdown-menu')
    let html = document.documentElement
    hamburgerMain.addEventListener('click', function(e) {
      if (hasClass(this, 'rd-close')) {
        html.style.setProperty('overflow-y', '')
        this.classList.remove('rd-close')
        mobileNav.classList.remove('show')
      } else {
        html.style.setProperty('overflow-y', 'hidden')
        this.classList.add('rd-close')
        mobileNav.classList.add('show')
      }
    })
    navLi.forEach(nav => {
      nav.addEventListener('click', function() {
        console.log('click')
        if (hasClass(this, 'nav-li-drop')) {
          if (hasClass(this.querySelector('.nav-ul.nav-ul-drop'), 'show')) {
            this.querySelector('.nav-ul.nav-ul-drop').classList.remove('show')
          } else {
            this.querySelector('.nav-ul.nav-ul-drop').classList.add('show')
          }
        } else {
          hamburgerMain.classList.remove('rd-close')
          mobileNav.classList.remove('show')
        }
      })
    })
    searchBar.addEventListener('focus', function(e) {
      dropdownMenu.classList.add('show')
    })
    searchBar.addEventListener('blur', function(e) {
      dropdownMenu.classList.remove('show')
    })
  }, [])
  return (
    <header>
      <div className="main-nav">
        <div className="container">
          <div className="nav-left">
            <Link to="/" className="nav-brand">
              <img
                src="https://www.grxstatic.com/d4fuqqd5l3dbz/static/img/goodrx-logo-med-black.png"
                alt="logo"
              />
            </Link>
            <div className="nav-search">
              <svg className="search-icon" viewBox="0 0 24 24">
                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path>
              </svg>
              <input
                type="text"
                className="search-bar"
                name="search-bar"
                id="search-bar"
                placeholder="Search drug prices"
              />
              <ul className="typeahead dropdown-menu">
                <div className="recent-searches-control">
                  <label>
                    <input type="checkbox" className="toggle-recent-searches" />
                    Save recent searches
                  </label>
                </div>
              </ul>
            </div>
            <ul className="nav-ul">
              <li className="nav-li">
                <Link to="/mobile" className="nav-li-link">
                  Mobile App
                </Link>
              </li>
              <li className="nav-li">
                <Link to="/discount-card" className="nav-li-link">
                  Discount Card
                </Link>
              </li>
              <li className="nav-li nav-li-drop">
                <Link to="" className="nav-li-link nav-li-link-drop">
                  More
                </Link>
                <ul className="nav-ul nav-ul-drop">
                  <li className="nav-li">
                    <Link to="/conditions" className="nav-li-link">
                      Find Drugs by Condition
                    </Link>
                  </li>
                  <li className="nav-li">
                    <Link to="/pharmacy-near-me" className="nav-li-link">
                      Find Pharmacies Near Me
                    </Link>
                  </li>
                  <li className="nav-li">
                    <Link to="/blog" className="nav-li-link">
                      Latest Drug News
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <ul className="nav-ul">
              <li className="nav-li">
                <Link to="/faq" className="nav-li-link">
                  Help
                </Link>
              </li>
              <li className="nav-li">
                <Link to="/my-rx/sign-in" className="nav-li-link">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
          <button className="hamburger" id="hamburger-main">
            <span className="line line01"></span>
            <span className="line line02"></span>
            <span className="line line03"></span>
          </button>
        </div>
      </div>
      <NavbarMobile />
    </header>
  )
}

export default Navbar
