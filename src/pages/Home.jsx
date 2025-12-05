// src/pages/Home.jsx
import { Link } from "react-router-dom";

const treatmentCards = [
  {
    id: "ketamine",
    title: "Ketamine-Assisted Therapy",
    blurb:
      "A structured series of preparation, medicine, and integration sessions using ketamine to support healing.",
    href: "/treatments#ketamine",
  },
  {
    id: "psilocybin",
    title: "Psilocybin-Assisted Therapy (via SAP)",
    blurb:
      "Available through Health Canada’s Special Access Program for eligible clients with treatment-resistant conditions.",
    href: "/treatments#psilocybin",
  },
  {
    id: "mdma",
    title: "MDMA-Assisted Therapy (via SAP)",
    blurb:
      "Carefully monitored sessions for qualifying cases, focused on trauma and nervous system regulation.",
    href: "/treatments#mdma",
  },
  {
    id: "psychotherapy",
    title: "Psychodynamic & Relational Therapy",
    blurb:
      "Ongoing non-medicine psychotherapy grounded in attachment, emotion, and relational processing.",
    href: "/treatments#psychotherapy",
  },
  {
    id: "couples",
    title: "Couples & Group Offerings",
    blurb:
      "Attachment-focused couples work and group offerings such as psychodynamic groups or parenting programs.",
    href: "/treatments#groups",
  },
];

export default function Home() {
  return (
    <>
      <section id="hero" className="hero">
        <div className="hero-bg" aria-hidden="true">
          <img
            src="/images/here_video_still.jpg"
            alt=""
            className="hero-still"
          />
          <video
            className="hero-video"
            playsInline
            muted
            loop
            autoPlay
            preload="auto"
            poster="/images/hero_video_still.jpg"
          >
            <source src="/images/videos/NewHeroVideo.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero-overlay" aria-hidden="true"></div>

        <div className="hero-content">
          <h1>Guided Therapy Collective</h1>
          <p className="hero-tagline">
            A grounded, trauma-informed space for psychedelic-assisted and
            relational therapy.
          </p>
          <a href="#overview" className="btn hero-btn">
            Learn more about Guided
          </a>
        </div>

        <noscript>
          <style>
            {`
        .hero-bg { display: none !important; }
      `}
          </style>
          <div
            className="hero-fallback"
            style={{ backgroundImage: "url('/images/hero_video_still.jpg')" }}
          ></div>
        </noscript>
      </section>

      {/* TREATMENTS OVERVIEW (cards/pills) */}
      <section className="home-section treatments-overview" id="overview">
        <div className="home-section-inner">
          <h2>Therapies & Treatments</h2>
          <p className="home-section-intro">
            Here is a brief snapshot of what we offer. You can explore each
            treatment in more detail on the Treatments page.
          </p>

          <div className="treatment-grid">
            {treatmentCards.map((t) => (
              <article key={t.id} className="treatment-card">
                <h3>{t.title}</h3>
                <p>{t.blurb}</p>
                <a className="btn btn-outline" href={t.href}>
                  Learn more
                </a>
              </article>
            ))}
          </div>

          <div className="home-section-cta">
            <Link to="/treatments" className="text-link">
              View all treatments &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM PREVIEW */}
      <section className="home-section team-preview">
        <div className="home-section-inner">
          <h2>Meet the Team</h2>
          <p className="home-section-intro">
            Guided is led by a medical director and a small collaborative care
            team. Click through to read more about each clinician&apos;s
            training, approach, and areas of focus.
          </p>

          <div className="team-grid">
            <article className="team-card">
              <img
                src="/images/AboutChristine.jpg"
                alt="Dr. Christine Kennedy"
                className="team-avatar"
              />
              <h3>Dr. Christine Kennedy</h3>
              <p className="team-role">Medical Director, Psychiatrist</p>
              <a className="btn btn-outline" href="/team#christine">
                Read bio
              </a>
            </article>

            <article className="team-card">
              <img
                src="/images/you.jpg"
                alt="Laura Fisher"
                className="team-avatar"
              />
              <h3>Laura Fisher</h3>
              <p className="team-role">Ketamine-Assisted Therapist, RN</p>
              <a className="btn btn-outline" href="/team#laura">
                Read bio
              </a>
            </article>
          </div>

          <div className="home-section-cta">
            <Link to="/team" className="text-link">
              Meet the full team
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT INFO BLURB + LINK TO CONTACT PAGE */}
      <section className="contact-preview home-section">
        <div className="contact-preview-inner">
          <h2>Access & Coverage</h2>

          <p>
            We offer psychedelic assisted therapy for a variety of mental health
            diagnoses. However currently only ketamine is available without
            requiring special access from Health Canada. Psilocybin and MDMA are
            available for those that qualify for treatment through Canada’s
            <a
              className="sap-link-inline"
              href="https://www.canada.ca/en/health-canada/services/drugs-health-products/special-access/drugs.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Special Access Program
            </a>
            .
          </p>

          <p>
            We are happy to help you connect to someone who can assist you with
            the application process.
            <br />
            <br />
            Treatment may be partially covered by MSP with a doctor’s referral.
            Private insurance may also cover portions of treatment. Under
            psychiatric supervision, we are able to offer medicine sessions at a
            lower cost than many clinics if a family doctor has sent us a
            referral.
          </p>

          <a href="/contact" className="btn contact-btn">
            Go to Contact Form
          </a>
        </div>
      </section>
    </>
  );
}
