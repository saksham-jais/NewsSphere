// components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
            <span className="logo-text">NewsSphere</span>
          </Link>
        </div>

        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            <i className="fas fa-home"></i> Home
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            <i className="fas fa-info-circle"></i> About
          </Link>
          <Link to="/submit-news" className="nav-link submit-news" onClick={() => setIsMenuOpen(false)}>
            <i className="fas fa-plus-circle"></i> Submit News
          </Link>
        </div>

        <button 
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
    </nav>
  );
}