import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero__bg">
          <img
            src="/images/hero_background_web.jpg"
            alt=""
            className="home-hero__still"
            aria-hidden="true"
          />
          <video
            className="home-hero__video"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/here_video_still.jpg"
          >
            <source src="/images/videos/Pgvideo_h264.mp4" type="video/mp4" />
          </video>
          <div className="home-hero__overlay" />
        </div>

        <div className="home-hero__content">
          <div className="home-hero__panel">
            <h1 className="home-hero__title">Guided Therapy Collective</h1>
            <p className="home-hero__subtitle">We’re glad you’re here.</p>

            <div className="home-hero__about">
              <h2>About Guided</h2>
              <p>
                We strive to offer a safe space in which, together, we can seek
                a deeper connection with the self. Here, you can explore what
                you may be seeking, be that reduced suffering, growth,
                understanding, or healing.
                <br />
                <br />
                Through an emotionally and attachment focused lens, along with
                utilizing acceptance and commitment and psychodynamic therapy
                tools, we can work with you through a traditional psychotherapy
                framework or with the assistance of psychedelic medicines.
                <br />
                <br />
                We have dedicated our time to this healing experience with
                psychedelics and are grateful these medicines are now becoming
                more accessible as one avenue to help with mental health
                conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LINK CARDS */}
      <section className="home-links" aria-label="Explore Guided">
        <div className="home-links__inner">
          <h2 className="home-links__title">Explore</h2>

          <div className="home-links__grid">
            <Link to="/treatments" className="home-card">
              <h3>Treatments</h3>
              <p>
                Learn about ketamine-assisted psychotherapy and guided care.
              </p>
              <span className="home-card__cta">View treatments →</span>
            </Link>

            <Link to="/team" className="home-card">
              <h3>Meet the Team</h3>
              <p>Get to know the medical director and collaborators.</p>
              <span className="home-card__cta">Meet the team →</span>
            </Link>

            <Link to="/referrals" className="home-card">
              <h3>Referrals</h3>
              <p>How to get started, eligibility, and what you’ll need.</p>
              <span className="home-card__cta">Referral info →</span>
            </Link>

            <Link to="/contact" className="home-card home-card--primary">
              <h3>Contact</h3>
              <p>Questions or referrals? Send a note and we’ll respond.</p>
              <span className="home-card__cta">Go to contact →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
