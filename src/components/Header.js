import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header" style={{ paddingTop: "20px" }}>
      <div className="container">
        <h1 className="logo">
          <Link to="/" className="logo-link">
            <img
              src="assets/img/track.jpg" // Replace with the path to your logo image
              alt="WorkTrack"
              className="logo-image"
            /><br/>Work Track
          </Link>
        </h1>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#hero" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <Link to="/login" className="login-link">
                Login/Signup
              </Link>
            </li>
          </ul>
          <div className="mobile-nav-toggle">
            <i className="bi bi-list" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
