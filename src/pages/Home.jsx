import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg is-ready">
          <img
            src="/images/hero_background_web.jpg"
            alt="Guided Therapy Collective"
            className="hero-still"
          />
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/here_video_still.jpg"
          >
            <source src="/images/videos/NewHeroVideo.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <div className="hero-with-about">
            <h1>Guided Therapy Collective</h1>
            <p className="hero-subtitle">
              Psychedelic-assisted and trauma-informed care in Prince George, BC.
            </p>
            <p className="hero-about">
              Guided is a small, collaborative practice offering
              ketamine-assisted psychotherapy and evidence-based treatments for
              depression, PTSD, anxiety, and other mood concerns. We work
              slowly, intentionally, and always in partnership with your
              existing care team when possible.
            </p>
            <Link to="/treatments" className="btn hero-btn">
              Learn more about Guided
            </Link>
          </div>
        </div>
      </section>

      {/* HOME: TREATMENT OVERVIEW */}
      <section className="home-section">
        <div className="home-section-inner">
          <h2>Treatment pathways</h2>
          <p className="home-section-intro">
            We offer medically supervised ketamine-assisted psychotherapy and
            integrative approaches that combine medication, psychotherapy, and
            nervous-system support.
          </p>

          <div className="treatment-grid">
            <article className="treatment-card">
              <h3>Ketamine-assisted psychotherapy (KAP)</h3>
              <p>
                Individual, carefully prepared sessions supported by an MD
                psychiatrist and a trained therapist to help shift patterns of
                depression, anxiety, or PTSD.
              </p>
              <Link to="/treatments" className="btn btn-outline">
                View KAP details
              </Link>
            </article>

            <article className="treatment-card">
              <h3>Preparation & integration</h3>
              <p>
                Therapy focused on getting ready for medicine work and making
                sense of insights afterward — even if you received treatment
                elsewhere.
              </p>
              <Link to="/treatments" className="btn btn-outline">
                Preparation & integration
              </Link>
            </article>

            <article className="treatment-card">
              <h3>Group & family support</h3>
              <p>
                When appropriate, we involve partners, family, or group work to
                help you feel held and supported outside of session.
              </p>
              <Link to="/treatments" className="btn btn-outline">
                Explore options
              </Link>
            </article>

            <article className="treatment-card">
              <h3>Consultation & referrals</h3>
              <p>
                Not sure where to start? We can help you explore options,
                understand Health Canada’s Special Access Program, and connect
                with other services if needed.
              </p>
              <Link to="/contact" className="btn btn-outline">
                Book a consult
              </Link>
            </article>
          </div>

          <div className="home-section-cta">
            <Link to="/treatments" className="text-link">
              Read full treatment descriptions →
            </Link>
          </div>
        </div>
      </section>

      {/* HOME: TEAM PREVIEW */}
      <section className="home-section">
        <div className="home-section-inner">
          <h2>Meet the team</h2>
          <p className="home-section-intro">
            Guided is led by psychiatrist Dr. Christine Kennedy and a
            small circle of trusted therapists and collaborators.
          </p>

          <div className="team-grid">
            <article className="team-card">
              <img
                src="/images/AboutChristine.jpg"
                alt="Dr. Christine"
                className="team-avatar"
              />
              <h3>Dr. Christine Kennedy</h3>
              <p className="team-role">MD, FRCPC – Psychiatry</p>
              <p>
                Christine is a psychiatrist with a special focus on
                psychedelic-assisted therapies, ketamine, and trauma-informed
                care.
              </p>
            </article>

            <article className="team-card">
              <h3>Your care team</h3>
              <p className="team-role">Therapists & collaborators</p>
              <p>
                We collaborate with therapists, physicians, and other providers
                who share a grounded, relational approach to care.
              </p>
            </article>
          </div>

          <div className="home-section-cta">
            <Link to="/team" className="text-link">
              Learn more about the team →
            </Link>
          </div>
        </div>
      </section>

      {/* HOME: CONTACT PREVIEW */}
      <section className="contact-preview">
        <div className="contact-preview-inner">
          <h2>Connect about treatment or referrals</h2>
          <p>
            We offer psychedelic-assisted therapy for a variety of mental health
            diagnoses. However, currently only ketamine is available without
            requiring special access from Health Canada. Psilocybin and MDMA may
            be available if you qualify through Canada’s{" "}
            <a
              href="https://www.canada.ca/en/health-canada/services/drugs-medication/special-access/drugs.html"
              target="_blank"
              rel="noreferrer"
              className="sap-link-inline"
            >
              Special Access Program
            </a>
            .
          </p>

          <p>
            We’re happy to help you connect to someone who can support your SAP
            application. Treatment may be partially covered by MSP with a
            doctor’s referral, and private health insurance may cover portions
            of your care. Because we practice under the supervision of a
            psychiatrist, we are often able to offer medicine sessions at a
            lower cost when a family doctor has referred you.
          </p>

          <Link to="/contact" className="contact-btn">
            Go to contact form
          </Link>
        </div>
      </section>
    </>
  );
}
