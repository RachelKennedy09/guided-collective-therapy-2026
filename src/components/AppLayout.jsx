// src/components/AppLayout.jsx
import { Link } from "react-router-dom";

export default function AppLayout({ children }) {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <a href="/">guided</a>
          </div>

          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded="false"
            aria-controls="primary-navigation"
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <ul id="primary-navigation" className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* These two jump to sections on the home page */}
            {/* <li>
              <a href="/#about">About</a>
            </li> */}
            <li>
              <Link to="/treatments">Treatments</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
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
          <img src="/images/EveryChildMatters.png" alt="Every Child Matters flag" />
          <img src="/images/Pride.png" alt="Pride flag" />
          <img src="/images/BlackLivesMatter.png" alt="Black Lives Matter flag" />
        </div>

        <div className="footer-treaty">
          <p>
            We acknowledge that we live, work, and create on the traditional and unceded territories
            of the Indigenous peoples of Canada. Guided Therapy Collective Inc. is situated in the
            traditional territories of the Dakelh (Carrier) people of the Lheidli T&apos;enne h First Nation.
            We honour and commit to reconciliation, respect, and the Land Back movement.
          </p>
        </div>
      </footer>
    </>
  );
}

/**
 * Very small JS to toggle the mobile menu.
 * This mimics what you had in <script> before.
 */
function toggleMenu(e) {
  const btn = e.currentTarget;
  const nav = document.getElementById("primary-navigation");
  if (!nav) return;

  const open = !nav.classList.contains("is-open");
  nav.classList.toggle("is-open", open);
  btn.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
}
