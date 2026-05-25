import React from "react";
import { Link } from "react-router-dom";
import mainHero from "../../assets/mainhero.jpg";

const heroSlides = [
  {
    src: mainHero,
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero__bg">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              srcSet={slide.srcSet}
              sizes="100vw"
              alt=""
              className="home-hero__slide"
              style={{ "--slide-index": index }}
              aria-hidden="true"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchpriority={index === 0 ? "high" : "auto"}
            />
          ))}
          <div className="home-hero__overlay" />
        </div>

        <div className="home-hero__content">
          <div className="home-hero__grid">
            <div className="home-hero__panel">
              <h1 className="sr-only">Guided Therapy Collective</h1>
              <div className="home-hero__logo-wrap">
                <img
                  src="/guided-home-hero-mark.png"
                  alt=""
                  className="home-hero__logo-mark"
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                />
                <img
                  src="/guided-home-hero-wordmark.png"
                  alt=""
                  className="home-hero__logo-wordmark"
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                />
              </div>
              <div className="home-hero__subtitle-wrap">
                <div className="home-hero__subtitle-mask" aria-hidden="true" />
                <p className="home-hero__subtitle">We're glad you're here.</p>
              </div>
              <div className="home-hero__therapy-note">
                <p>
                  Offering a relational, heart-centered approach to
                  psychedelic-assisted therapy.
                </p>
                <Link to="/about">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
