// src/pages/About.jsx
import React from "react";
import HeroQuote from "../components/HeroQuote";

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
            <img
              src="/guided-footer-icon.png"
              alt=""
              className="hero-panel__icon"
              loading="lazy"
              decoding="async"
            />
            <h1 className="page-hero__title">About</h1>

            <p className="page-hero__blurb">
              We created this clinic with the intention of making psychedelic treatment accessible to people living in Northern BC 
              and warmly welcome those who choose to travel to this beautiful region. 
                           </p>
                           <p>While we also work in traditional therapy realms we feel that psychedlics offer an avenue for some individuals to reach and heal aspects of themselves that can be difficult to access.</p>
                           <p>We chose the name "guided" in relation to "accompanying (one) to an unfamiliar place." We would love the opportunity to accompany you on your healing journey.</p>

            <HeroQuote page="about" />

            <a className="btn btn-outline" href="#what-we-offer">
              What we offer
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT BELOW HERO */}
      <section id="what-we-offer" className="about-content">
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
                <li>Preparation</li>
                <li>Medicine sessions</li>
                <li>Integration to support long-term change</li>
              </ul>
            </article>

            <article className="about-card">
              <h3 className="about-card__title">Referrals</h3>
              <p className="about-card__text">
                If you’re a clinician or a patient looking to refer, please
                visit the Referrals page and we’ll guide you through next steps.
              </p>

              {/* Optional: small “button” link style */}
              <a className="about-card__link" href="/referrals">
                Go to Referrals →
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
