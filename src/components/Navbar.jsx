import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#hero" className="logo" onClick={closeMenu}>
        <span className="logo-bracket">&lt;</span>
        <span className="logo-name">Shivani Kotwal</span>
        <span className="logo-bracket">/&gt;</span>
      </a>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="nav-links"
      >
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      <ul
        id="nav-links"
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >
        <li><a href="#hero" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#tech-stack" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;