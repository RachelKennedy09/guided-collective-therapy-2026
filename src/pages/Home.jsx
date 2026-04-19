import React, { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero__bg">
          <img
            src="/images/PgVideoStill-home.webp"
            alt=""
            className="home-hero__still"
            aria-hidden="true"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
          <video
            ref={videoRef}
            className="home-hero__video"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/PgVideoStill-home.webp"
            preload="metadata"
          >
            <source
              src="/images/videos/Pgvideo_h264_1280_hq.mp4"
              type="video/mp4"
            />
          </video>
          <div className="home-hero__overlay" />
        </div>

        <div className="home-hero__content">
          <div className="home-hero__grid">
            <div className="home-hero__panel">
              <h1 className="sr-only">Guided Therapy Collective</h1>
              <div className="home-hero__logo-wrap">
                <div className="home-hero__logo-mask" aria-hidden="true" />
                <img
                  src="/guided-home-hero-logo-tight.png"
                  alt=""
                  className="home-hero__logo"
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
