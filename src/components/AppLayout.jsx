import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import FloatingBack from "./FloatingBack";

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const isHome = location.pathname === "/";

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
            <NavLink to="/" onClick={closeMenu}>
              guided
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
      {!isHome && <FloatingBack />}
      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <h3>Guided Therapy Collective</h3>
            <p className="footer-tagline">
              Prince George, BC • Psychedelic-assisted therapy & psychotherapy
            </p>
          </div>

          <div className="footer-contact">
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+12505551234">(250) 555-1234</a>
            </p>
            <p>
              <strong>Clinic After Hours:</strong>{" "}
              <a href="tel:+12505559876">(250) 555-9876</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:hello@guidedtherapycollective.ca">
                hello@guidedtherapycollective.ca
              </a>
            </p>
            <p>
              <strong>Address:</strong> 123 Example St, Prince George, BC
            </p>

            <p className="footer-hours">
              <strong>Clinic Hours:</strong> Mon–Fri 9:00am–5:00pm
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
            <p className="footer-copy">© 2026 Guided Therapy Collective</p>

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
          </div>
        </div>
      </footer>
    </>
  );
}
