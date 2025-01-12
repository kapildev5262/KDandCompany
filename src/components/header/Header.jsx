import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import brand from "../../assets/about/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <Link to={"/"} className="mb-4">
        <img src={brand} className="logo" alt="Logo Missing" />
      </Link>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#hero" className="reffer">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="reffer">
            Skills
          </a>
        </li>
        <li>
          <a href="#experience" className="reffer">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="reffer">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="btn-primary">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
