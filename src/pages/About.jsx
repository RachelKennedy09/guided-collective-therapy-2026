// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section
        className="page-hero"
        style={{ "--bg-image": "url('/images/DSC03726.webp')" }}
      >
        <div className="page-hero__inner">
          <div className="page-hero__panel">
            <h1 className="page-hero__title">About</h1>

            <p className="page-hero__blurb">
              We created this clinic with the hope to increase the availability
              of psychedelic treatment to people living in Northern BC. All
              aspects of the space — the clinic, team, website, photos and
              artwork — have been created or curated by people rooted in this
              region.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT BELOW HERO */}
      <section className="about-content">
        <div className="about-content__inner">
          {/* Little intro block to “fill” the space and guide the eye */}
          <header className="about-intro">
            <h2 className="about-intro__title">What we offer</h2>
            <p className="about-intro__text">
              Our care is grounded in safety, preparation, and integration — so
              you feel supported before, during, and after sessions.
            </p>
          </header>

          {/* Cards */}
          <div className="about-grid">
            <article className="about-card">
              <h3 className="about-card__title">Our approach</h3>
              <p className="about-card__text">
                We strive to offer a safe, supportive space where we can take
                time to explore together what matters most to you. Here, you are
                invited to seek growth, healing, understanding, or relief from
                suffering.
              </p>
            </article>

            <article className="about-card">
              <h3 className="about-card__title">What to expect from Psychedelic-Assisted Therapy</h3>
              <ul className="about-list">
                <li>Consultation and screening</li>
                <li>Medicine sessions</li>
                <li>Integration to support long-term change</li>
              </ul>
            </article>

            <article className="about-card">
              <h3 className="about-card__title">Referrals</h3>
              <p className="about-card__text">
                If you’re a clinician or a patient looking to refer, please
                visit the Contact page and we’ll guide you through next steps.
              </p>

              {/* Optional: small “button” link style */}
              <a className="about-card__link" href="/contact">
                Go to Contact →
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
