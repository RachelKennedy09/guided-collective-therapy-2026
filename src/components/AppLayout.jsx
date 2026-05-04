import React, { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import FloatingContact from "./FloatingContact";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/treatments", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/referrals", label: "Referrals" },
  { to: "/contact", label: "Contact" },
];

const heroImageUrls = [
  "/images/DSC03726.webp",
  "/images/FrozenPGUniversityHill.webp",
  "/images/DJI_0267.webp",
  "/images/ConnaughtHillRoadPG.webp",
  "/images/FraserRiver.jpg",
];

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const location = useLocation();
  const desktopMenuRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setDesktopMenuOpen(false);
  };

  const isHome = location.pathname === "/";
  const showFloatingContact = location.pathname !== "/contact";

  useEffect(() => {
    setDesktopMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(event.target)
      ) {
        setDesktopMenuOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setDesktopMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const preloadedLinks = heroImageUrls.map((href) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = href;
      document.head.appendChild(link);
      return link;
    });

    const warmedImages = heroImageUrls.map((src) => {
      const image = new Image();
      image.decoding = "async";
      image.src = src;
      return image;
    });

    return () => {
      preloadedLinks.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });

      void warmedImages;
    };
  }, []);

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

          <div className="desktop-nav" ref={desktopMenuRef}>
            <button
              className="desktop-nav__toggle"
              type="button"
              aria-expanded={desktopMenuOpen}
              aria-controls="desktop-nav-panel"
              onClick={() => setDesktopMenuOpen((open) => !open)}
            >
              <span>Menu</span>
              <span
                className={`desktop-nav__chevron ${
                  desktopMenuOpen ? "is-open" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              id="desktop-nav-panel"
              className={`desktop-nav__panel ${
                desktopMenuOpen ? "is-open" : ""
              }`}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `desktop-nav__link ${isActive ? "is-active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
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
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} onClick={closeMenu}>
                  {item.label}
                </NavLink>
              </li>
            ))}
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
              <a href="mailto:admin@guidedtc.ca">admin@guidedtc.ca</a>
            </p>
            <p className="footer-hours">
              <strong>Clinic Hours:</strong> Mon-Fri 9:00am-5:00pm
            </p>
          </div>

          <div className="footer-treaty">
            <p>
              We acknowledge that we live, work, and create on the traditional
              and unceded territories of the Indigenous peoples of Canada.
              Guided Therapy Collective Inc. is situated in the traditional
              territories of the Dakelh (Carrier) people of the Lheidli
              T&apos;enneh First Nation. We honour and commit to reconciliation,
              respect, and the Land Back movement.
            </p>
          </div>

          <div className="footer-bottom">
            <img
              src="/guided-footer-icon.png"
              alt="Guided Therapy Collective icon"
              className="footer-mark"
              loading="lazy"
              decoding="async"
            />

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

            <p className="footer-copy">&copy; 2026 Guided Therapy Collective</p>
          </div>
        </div>
      </footer>
    </>
  );
}




