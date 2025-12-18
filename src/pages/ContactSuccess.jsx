// src/pages/ContactSuccess.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function ContactSuccess() {
  return (
    <section className="contact-page">
      <div
        className="contact-hero"
        style={{ "--bg-image": "url('/images/FraserRiver.jpg')" }}
      >
        <div className="contact-hero__inner">
          <div className="contact-hero__panel">
            <h1 className="contact-hero__title">Message received</h1>

            <p className="contact-hero__blurb">
              Thanks — we’ve received your message. We aim to respond within a
              few business days.
            </p>

            <div style={{ marginTop: "1rem" }}>
              <NavLink className="btn" to="/">
                Back to home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
