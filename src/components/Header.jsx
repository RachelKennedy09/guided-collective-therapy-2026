// src/components/Header.jsx
import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

// Simple image preloader
function preloadImage(src) {
  const img = new Image();
  img.src = src;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function closeMenu() {
    setIsOpen(false);
  }

  // About = Home → scroll
  function goToAbout(e) {
    e.preventDefault();
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/");
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
          <Link to="/" onClick={closeMenu} aria-label="Guided home">
            <img
              src="/images/logo.png"
              alt="Guided logo"
              className="logo__mark"
              loading="lazy"
              decoding="async"
            />
            <span className="sr-only">Guided</span>
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
            <NavLink
              to="/treatments"
              onMouseEnter={() =>
                preloadImage("/images/DJI_0265-2.webp")
              }
              onFocus={() =>
                preloadImage("/images/DJI_0265-2.webp")
              }
              onClick={closeMenu}
            >
              Treatments
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/team"
              onMouseEnter={() =>
                preloadImage("/images/FrozenPGUniversityHill.webp")
              }
              onFocus={() =>
                preloadImage("/images/FrozenPGUniversityHill.webp")
              }
              onClick={closeMenu}
            >
              Team
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/referrals"
              onMouseEnter={() =>
                preloadImage("/images/WarFalls.webp")
              }
              onFocus={() =>
                preloadImage("/images/WarFalls.webp")
              }
              onClick={closeMenu}
            >
              Referrals
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
