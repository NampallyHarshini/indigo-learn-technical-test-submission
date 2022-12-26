import {HiShoppingCart} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgProfile} from 'react-icons/cg'
import './index.css'

const Header = () => (
  <nav className="navbar-header">
    <div className="navbar-content">
      <div className="navbar-mobile-container">
        <h1 className="websiteName">
          <GiHamburgerMenu className="menu-icon" />
          Indigo Learn
        </h1>
        <button type="button" className="cart-button">
          <HiShoppingCart className="cart" />
        </button>
      </div>
      <div className="navbar-large-container">
        <h1 className="websiteName">
          <GiHamburgerMenu className="menu-icon" />
          Indigo Learn
        </h1>
        <ul className="nav-menu">
          <li className="nav-menu-item">BUY COURSES</li>

          <li className="nav-menu-item">PROGRAMS</li>

          <li className="nav-menu-item">SCHOLARSHIPS</li>

          <li className="nav-menu-item">FREE RESOURCES</li>
        </ul>
        <button type="button" className="login-desktop-btn">
          <CgProfile /> Log In/Sign Up
        </button>
      </div>
    </div>
  </nav>
)

export default Header
