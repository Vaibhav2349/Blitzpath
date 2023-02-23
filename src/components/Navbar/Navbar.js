import React from 'react'
import logo from '../../images/Blitzpath.jpeg'
import logo1 from '../../images/Blitzpathlogo.jpeg'
import "./Navbar.css"
function Navbar() {
  return (
    <div className="container">
    <header className="nav-item">
        <div className="logo-section">
          <div className="logo">
            <img src={logo1} alt="" />
            </div>
            <div className="logo1">
            <img src={logo} alt="" />
            </div>
        </div>
        <nav>
            <ul  className='navlink'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services And Products</a></li>
                <li><a href="#">Customer Stories</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Carrer</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    </div>
  )
}

export default Navbar