// src/components/AppLayout.jsx
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <nav className="navbar">
          <div className="logo">
            {/* logo stays white due to .logo a in CSS */}
            <NavLink to="/" onClick={closeMenu}>
              guided
            </NavLink>
          </div>

          {/* Hamburger button (shown on mobile via CSS) */}
          <button
            className="menu-toggle"
            type="button"
            onClick={handleToggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          {/* Nav links container */}
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

      {/* Page content */}
      <main>
        <Outlet />
      </main>
    </>
  );
}
