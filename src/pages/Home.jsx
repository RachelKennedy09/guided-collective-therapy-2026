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
            <p className="hero-subtitle">We're gald you're here.</p>

            {/* <Link to="/treatments" className="btn hero-btn">
              Learn more about Guided
            </Link> */}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="about"
        // style={{ "--bg-image": "url('/images/hero_background_web.jpg')" }}
      >
        <div className="about-text">
          <h1>About Guided</h1>
          <p>
            We strive to offer a safe space in which, together, we can seek a
            deeper connection with the self. Here, you can explore what you may
            be seeking, be that reduced suffering, growth, understanding, or
            healing.
            <br />
            <br />
            Through an emotionally and attachment focused lens, along with
            utilizing acceptance and commitment and psychodynamic therapy tools,
            we can work with you through a traditional psychotherapy framework
            or with the assistance of psychedelic medicines.
            <br />
            <br />
            We have dedicated our time to this healing experience with
            psychedelics and are grateful these medicines are now becoming more
            accessible as one avenue to help with mental health conditions.
          </p>
            <Link to="/treatments" className="btn hero-btn">
              Learn more about Guided
            </Link>
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
           <Link to="/treatments" className="text-link">
              Read full treatment descriptions →
            </Link>
          </div>
          </section>
 {/*
          <div className="treatment-grid">
            <article className="treatment-card">
              <h3>Ketamine-assisted psychotherapy (KAP)</h3>
              <p>
                Individual, carefully prepared sessions supported by an MD
                psychiatrist and a trained therapist to help shift patterns of
                depression, anxiety, or PTSD.
              </p>
              <Link to="/treatments" className="btn btn-outline">
                Learn More
              </Link>
            </article>

            <article className="treatment-card">
              <h3>Psilocybin-Assisted Therapy</h3>
              <p>
                vailable via Health Canada’s Special Access Program for eligible
                clients. We would be happy to help you navigate the application
                process.
              </p>
              <Link to="/treatments" className="btn btn-outline">
                Learn More
              </Link>
            </article>

            <article className="treatment-card">
              <h3>MDMA-Assisted Therapy</h3>
              <p>
                Available via Special Access Program for qualifying cases.
                Please contact us for current guidance and eligibility.
              </p>
              <Link to="/treatments" className="btn btn-outline">
                Learn More
              </Link>
            </article>

            <article className="treatment-card">
              <h3>Couples Therapy</h3>
              <p>
                Attachment-focused, emotionally-oriented psychotherapy for
                couples. Custom treatment plans available
              </p>
              <Link to="/contact" className="btn btn-outline">
                Learn More
              </Link>
            </article>

            <article className="treatment-card">
              <h3>Group Psychodynamic Therapy</h3>
              <p>
                Group offerings scheduled periodically. Register your interest
                to be notified of upcoming cohorts.
              </p>
              <Link to="/contact" className="btn btn-outline">
                Learn More
              </Link>
            </article>

            <article className="treatment-card">
              <h3>Individual Psychodynamic Therapy</h3>
              <p>
                Relational, psychodynamic therapy tailored to your goals.
                Optional integration after medicine sessions.
              </p>
              <Link to="/contact" className="btn btn-outline">
                Learn More
              </Link>
            </article>

            <article className="treatment-card">
              <h3>Circle of Security Parenting Group</h3>
              <p>
                Foundations in attachment and connection for caregivers. New
                groups open based on interest.
              </p>
              <Link to="/contact" className="btn btn-outline">
                Learn More
              </Link>
            </article>

            <article className="treatment-card">
              <h3>General Outpatient or Psychotherapy</h3>
              <p>
                If you’re interested in traditional, psychodynamic therapy
                without the use of psychedelics, this is also available with Dr.
                Kennedy or Laura Fisher.
              </p>
              <Link to="/contact" className="btn btn-outline">
                Learn More
              </Link>
            </article>
          </div> */}

          {/* <div className="home-section-cta">
            <Link to="/treatments" className="text-link">
              Read full treatment descriptions →
            </Link>
          </div> */}
        {/* </div>
      </section> */}

      {/* HOME: TEAM PREVIEW */}
      <section className="home-section">
        <div className="home-section-inner">
          <h2>Meet the team</h2>
          <p className="home-section-intro">
            Guided is led by the medical director and psychiatrist Dr. Christine
            Kennedy and a small circle of trusted therapists and collaborators.
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
              <img
                src="/images/AboutLaura.jpg"
                alt="Laura Fisher"
                className="team-avatar"
              />
              <h3>Laura Fisher</h3>
              <p className="team-role">Registered Nurse</p>
              <p>
                Laura Fisher is a registered nurse with a special focus on
                addictions and mental health. She also specializes in Ketamine
                Assited therapy and additional training in psilocybin and MDMA
                therapy.
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
            lower investment when a family doctor has referred you.
          </p>

          <Link to="/contact" className="contact-btn">
            Go to contact form
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <p>© 2025 Guided Therapy Collective Inc. All rights reserved.</p>
          <nav className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Disclaimer</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
