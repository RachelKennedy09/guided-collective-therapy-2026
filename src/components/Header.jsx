// src/components/Header.jsx
import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function closeMenu() {
    setIsOpen(false);
  }

  // ✅ “About” should navigate to Home, then jump to #about
  function goToAbout(e) {
    e.preventDefault();
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/");
      // wait for Home to mount, then scroll
      setTimeout(() => {
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            guided
          </Link>
        </div>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <ul className={`nav-links ${isOpen ? "is-open" : ""}`}>
          <li>
            <a href="#about" onClick={goToAbout}>
              About
            </a>
          </li>
          <li>
            <NavLink to="/treatments" onClick={closeMenu}>
              Treatments
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" onClick={closeMenu}>
              Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
