import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function AppLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">guided</Link>
          </div>

          {/* Hamburger button (mobile) */}
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={toggleMenu}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          {/* Nav links */}
          <ul
            id="primary-navigation"
            className={`nav-links ${menuOpen ? "is-open" : ""}`}
          >
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
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

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-top">
          <p>© 2025 Guided Therapy Collective Inc. All rights reserved.</p>
          <nav className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Disclaimer</a>
          </nav>
        </div>

        <div className="footer-flags">
          <img
            src="/images/EveryChildMatters.png"
            alt="Every Child Matters flag"
          />
          <img src="/images/Pride.png" alt="Pride flag" />
          <img
            src="/images/BlackLivesMatter.png"
            alt="Black Lives Matter flag"
          />
        </div>

        <div className="footer-treaty">
          <p>
            We acknowledge that we live, work, and create on the traditional and
            unceded territories of the Indigenous peoples of Canada. Guided
            Therapy Collective Inc. is situated in the traditional territories
            of the Dakelh (Carrier) people of the Lheidli T'enneh First Nation.
            We honour and commit to reconciliation, respect, and the Land Back
            movement.
          </p>
        </div>
      </footer>
    </>
  );
}
