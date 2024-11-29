import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="my-navbar">
        <div className="navbar-logo">
          <img className="logo-image" src="/ivf-logo.png" alt="logo" />
        </div>

        <div className={`list-items ${isMenuOpen ? "active" : ""}`}>
          <ul className="unorder">
            <div>
              <li>Donor Programme</li>
            </div>
            <div>
              <li>Fertility Preservation</li>
            </div>
            <div>
              <li>Advanced Treatments</li>
            </div>
            <div>
              <li>Infertility Treatments</li>
            </div>
            <div>
              <li>IVF Testing</li>
            </div>
            <div>
              <li>About us</li>
            </div>
            <div className="nav-button">
              <button>Talk to us &#8594;</button>
            </div>
          </ul>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
