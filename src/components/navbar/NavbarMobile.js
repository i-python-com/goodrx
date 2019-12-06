import React from 'react'
import { Link } from 'react-router-dom'

const NavbarMobile = () => {
  return (
    <div className="mobile-nav">
      <div className="container">
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
    </div>
  )
}

export default NavbarMobile
