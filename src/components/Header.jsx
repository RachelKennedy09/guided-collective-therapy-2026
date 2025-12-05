// src/components/Header.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">guided</Link>
        </div>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <ul className={`nav-links ${isOpen ? "is-open" : ""}`}>
          <li>
            <NavLink to="/#about">About</NavLink>
          </li>
          <li>
            <NavLink to="/treatments">Treatments</NavLink>
          </li>
          <li>
            <NavLink to="/team">Team</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
