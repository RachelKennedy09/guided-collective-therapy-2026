import React from "react";

const heroSlides = [
  {
    src: "/images/home-slide-FraserRiverPG-1600.webp",
    srcSet:
      "/images/home-slide-FraserRiverPG-960.webp 960w, /images/home-slide-FraserRiverPG-1600.webp 1600w",
  },
  {
    src: "/images/home-slide-WarFalls-1600.webp",
    srcSet:
      "/images/home-slide-WarFalls-960.webp 960w, /images/home-slide-WarFalls-1600.webp 1600w",
  },
  {
    src: "/images/home-slide-LTMPPGTree-1600-1600.webp",
    srcSet:
      "/images/home-slide-LTMPPGTree-1600-960.webp 960w, /images/home-slide-LTMPPGTree-1600-1600.webp 1600w",
  },
  {
    src: "/images/home-slide-FrozenPGUniversityHill-1600.webp",
    srcSet:
      "/images/home-slide-FrozenPGUniversityHill-960.webp 960w, /images/home-slide-FrozenPGUniversityHill-1600.webp 1600w",
  },
  {
    src: "/images/home-slide-EskersPG-1600.webp",
    srcSet:
      "/images/home-slide-EskersPG-960.webp 960w, /images/home-slide-EskersPG-1600.webp 1600w",
  },
  {
    src: "/images/home-slide-DSC03726-1600.webp",
    srcSet:
      "/images/home-slide-DSC03726-960.webp 960w, /images/home-slide-DSC03726-1600.webp 1600w",
  },
  {
    src: "/images/home-slide-DJI_0267-1600.webp",
    srcSet:
      "/images/home-slide-DJI_0267-960.webp 960w, /images/home-slide-DJI_0267-1600.webp 1600w",
  },
  {
    src: "/images/home-slide-AncientForestPG-1600.webp",
    srcSet:
      "/images/home-slide-AncientForestPG-960.webp 960w, /images/home-slide-AncientForestPG-1600.webp 1600w",
  },
  {
    src: "/images/home-slide-ConnaughtHillRoadPG-1600.webp",
    srcSet:
      "/images/home-slide-ConnaughtHillRoadPG-960.webp 960w, /images/home-slide-ConnaughtHillRoadPG-1600.webp 1600w",
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
