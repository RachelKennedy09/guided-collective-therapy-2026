// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section
        className="page-hero"
        style={{ "--bg-image": "url('/images/DSC03726.jpg')" }}
      >
        <div className="page-hero__inner">
          <div className="page-hero__panel">
            <h1 className="page-hero__title">About</h1>

            <p className="page-hero__blurb">
              We created this clinic with the hope to increase the availability
              of psychedelic treatment to people living in Northern BC.
            </p>
            <p>
              All aspects of the space — the clinic, team, website, photos and
              artwork — have been created or curated by people living here in
              the North.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT BELOW HERO */}
      <section className="about-content">
        <div className="about-content__inner">
          <h2>Our approach</h2>
          <p>
            We strive to offer a safe space in which, together, we can search
            inward. Here, you can explore what you may be seeking, be that
            growth, healing, understanding, or reduced suffering.
          </p>

          {/* Optional — keep, edit, or delete */}
          <h2>What to expect</h2>
          <ul>
            <li>Consultation and screening</li>
            <li>Preparation sessions</li>
            <li>Selected therapy sessions</li>
            <li>Integration sessions to support long-term change</li>
          </ul>

          <h2>Referrals</h2>
          <p>
            If you’re a clinician or a patient looking to refer, please visit
            the Contact page and we’ll guide you through next steps.
          </p>
        </div>
      </section>
    </main>
  );
}
