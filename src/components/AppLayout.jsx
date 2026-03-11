import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import FloatingContact from "./FloatingContact";

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const isHome = location.pathname === "/";
  const showFloatingContact = location.pathname !== "/contact";

  return (
    <>
      <header
        className={`site-header ${
          isHome ? "site-header--home" : "site-header--inner"
        }`}
      >
        <nav className="navbar">
          {/* Logo */}
          <div className="logo">
            <NavLink to="/" onClick={closeMenu} aria-label="Guided home">
              <img
                src="/guided-navbar-logo.png"
                alt="Guided Therapy Collective"
                className="logo__mark"
                loading="lazy"
                decoding="async"
              />
              <span className="sr-only">Guided</span>
            </NavLink>
          </div>

          {/* Hamburger button (mobile) */}
          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          {/* Nav links */}
          <ul className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/treatments" onClick={closeMenu}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" onClick={closeMenu}>
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/referrals" onClick={closeMenu}>
                Referrals
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
      {showFloatingContact ? <FloatingContact /> : null}
      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <h2 className="footer-title">Guided Therapy Collective</h2>

          <div className="footer-contact">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:guidedtc@gmail.com">guidedtc@gmail.com</a>
            </p>
            <p className="footer-hours">
              <strong>Clinic Hours:</strong> Mon - Fri 9:00am - 5:00pm
            </p>
          </div>

          <div className="footer-treaty">
            <p>
              We acknowledge that we live, work, and create on the traditional
              and unceded territories of the Indigenous peoples of Canada.
              Guided Therapy Collective Inc. is situated in the traditional
              territories of the Dakelh(Carrier) people of the Lheidli
              T&apos;enneh First Nation. We honour and commit to reconciliation,
              respect, and the Land Back movement.
            </p>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">&copy; 2026 Guided Therapy Collective</p>

            <div className="footer-flags">
              <img
                src="/images/EveryChildMatters.png"
                alt="Every Child Matters flag"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/images/Pride.png"
                alt="Pride flag"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/images/BlackLivesMatter.png"
                alt="Black Lives Matter flag"
                loading="lazy"
                decoding="async"
              />
            </div>

            <img
              src="/guided-footer-icon.png"
              alt="Guided Therapy Collective icon"
              className="footer-mark"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </footer>
    </>
  );
}











