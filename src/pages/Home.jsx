import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero__bg">
          <img
            src="/images/PgVideoStill.png"
            alt=""
            className="home-hero__still"
            aria-hidden="true"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
          <video
            className="home-hero__video"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/PgVideoStill.png"
            preload="metadata"
          >
            <source src="/images/videos/Pgvideo_h264.mp4" type="video/mp4" />
          </video>
          <div className="home-hero__overlay" />
        </div>

        <div className="home-hero__content">
          <div className="home-hero__grid">
            <div className="home-hero__panel">
              <h1 className="home-hero__title">Guided Therapy Collective</h1>
              <p className="home-hero__subtitle">We’re glad you’re here.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
