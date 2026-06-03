// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section
        className="page-hero"
        style={{ "--bg-image": "url('/images/DSC03726.webp')" }}
      >
        <div className="page-hero__inner">
          <div className="page-hero__panel about-hero">
            <div className="about-hero__icon-wrap">
              <img
                src="/guided-footer-icon.png"
                alt=""
                className="hero-panel__icon"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
              />
            </div>

            <div className="about-hero__title-wrap">
              <h1 className="page-hero__title about-hero__title">About Guided</h1>
            </div>

            <div className="about-hero__copy">
              <div className="about-hero__blurb-wrap about-hero__blurb-wrap--one">
                <p className="page-hero__blurb">
                  We created this clinic with the intention of making
                  psychedelic treatment more accessible to people living in Northern
                  BC and warmly welcome those who choose to travel to this
                  beautiful region.
                </p>
              </div>
              <div className="about-hero__blurb-wrap about-hero__blurb-wrap--two">
                <p className="page-hero__blurb">
                  In addition to traditional therapeutic methods, we take a
                  heart-centered approach with our use of psychedelics to help
                  individuals connect with deep-seated patterns that may be
                  difficult to access through standard&nbsp;therapy.
                </p>
              </div>
              <div className="about-hero__blurb-wrap about-hero__blurb-wrap--three">
                <p className="page-hero__blurb">
                  We chose the name Guided to embody the act of walking beside
                  someone to an unfamiliar place. We would love the opportunity
                  to accompany you on your healing&nbsp;journey.
                </p>
              </div>
            </div>

            <a className="btn btn-outline about-hero__cta" href="#what-we-offer">
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
              you feel supported before, during, and after sessions. For current
              offerings and treatment pathways, visit Guided Services.
            </p>
          </header>

          {/* Cards */}
          <div className="about-grid">
            <article className="about-card">
              <h3 className="about-card__title">Our approach</h3>
              <p className="about-card__text">
                We strive to offer a safe, supportive space where we can take
                time to explore together what matters most to you - whether you
                seek growth, healing, greater acceptance, or a deeper
                understanding of yourself.
              </p>
            </article>

            <article className="about-card">
              <h3 className="about-card__title">Psychedelic-assisted therapy</h3>
              <p className="about-card__text">
                We offer psychedelic-assisted therapy with careful consultation,
                preparation, medicine sessions, and integration to support
                long-term change.
              </p>
              <Link className="about-card__link" to="/treatments">
                View Guided Services →
              </Link>
            </article>

            <article className="about-card">
              <h3 className="about-card__title">Referrals and next steps</h3>
              <p className="about-card__text">
                If you’re a clinician, patient, or prospective client wondering
                where to begin, contact us and we’ll help guide you toward the
                right next step.
              </p>

              {/* Optional: small “button” link style */}
              <Link className="about-card__link" to="/contact">
                Contact us →
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
