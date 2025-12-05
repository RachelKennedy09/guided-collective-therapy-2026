import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
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

      {/* Main content area */}
      <main>
        <Outlet />
      </main>

      {/* Footer – keep your existing flags/treaty content here */}
      <footer className="site-footer">
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
            of the Dakelh(Carrier) people of the Lheidli T&apos;enneh First
            Nation. We honour and commit to reconciliation, respect, and the
            Land Back movement
          </p>
        </div>
      </footer>
    </>
  );
}
