// src/pages/Team.jsx
import React from "react";

export default function Team() {
  return (
    <section className="team-page">
      {/* TOP: video behind intro + mini team bubbles */}
      <div
        className="team-hero"
        id="team-top"
        style={{ "--bg-image": "url('/images/FrozenPGUniversityHill.webp')" }}
      >
        <div className="team-hero__overlay" />

        <div className="team-hero__inner">
          <div className="team-hero__panel">
            <h1>Our Team</h1>
            <p className="team-hero__blurb">
              Guided Therapy Collective is led by a medical director and a
              collaborative care team. We work with care, curiosity, and a
              grounded relational approach.
            </p>

            {/* <a href="#team-members" className="btn btn-outline team-hero__cta">
              Click on a team member’s photo to learn more ↓
            </a> */}
            {/* Mini bubbles
            <div className="team-bubbles" id="team-members">
              <a href="#christine" className="team-bubble">
                <img
                  src="/images/AboutChristine.jpg"
                  alt="Dr. Christine Kennedy"
                />
                <div className="team-bubble__text">
                  <h3>Dr. Christine Kennedy</h3>
                  <p>Medical Director • Psychiatrist</p>
                </div>
              </a>

              <a href="#laura" className="team-bubble">
                <img src="/images/LauraProfile.JPG" alt="Laura Fisher" />
                <div className="team-bubble__text">
                  <h3>Laura Fisher</h3>
                  <p>RN • Ketamine-Assisted Therapist</p>
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* BELOW: full bios as clean sections */}
      <div className="team-sections">
        <section id="christine" className="team-section-block">
          <div className="team-section-inner">
            <div className="team-section-header">
              <img
                className="team-section-avatar"
                src="/images/AboutChristine.jpg"
                alt="Dr. Christine Kennedy"
                loading="lazy"
                decoding="async"
              />
              <div>
                <h2>Dr. Christine Kennedy</h2>
                <p className="team-role">
                  MD, FRCPC, Psychiatry • Medical Director
                </p>
              </div>
            </div>

            <div className="team-bio-box">
              <p>
                Thank you for your curiosity and seeking an avenue of healing that
                feels aligned with you.
              </p>
              <p>
                I am grateful to live and work on the unceded traditional
                territory of the Lheidli T'enneh Nation. I was raised in the North
                and am honored to continue to serve and work with people in
                Northern BC. In my general practice I offer psychodynamic therapy
                with a relational approach, focusing on attachment and emotional
                processing.
              </p>
              <p>
                I am passionate about the use of psychedelics as a way of opening
                one's heart and mind to what lies beyond their defenses that have
                evolved from years of suffering. Psychedelic healing can be a
                spiritual, deeply connected experience and I strive to create an
                environment that offers the opportunity for people to explore
                these depths. With supportive integration of these experiences
                there can be healing and growth within their lives and
                relationships.
              </p>
              <p>
                I look forward to seeing if working together in this realm is the
                right fit at the right time.
              </p>
            </div>
          </div>
        </section>

        <section id="laura" className="team-section-block">
          <div className="team-section-inner">
            <div className="team-section-header">
              <img
                className="team-section-avatar"
                src="/images/LauraProfile3.JPG"
                alt="Laura Fisher"
                loading="lazy"
                decoding="async"
              />
              <div>
                <h2>Laura Fisher</h2>
                <p className="team-role">RN • Ketamine-Assisted Therapist</p>
              </div>
            </div>

            <div className="team-bio-box">
              <p>Welcome to a space that supports community and connection.</p>
              <p>
                I’m a registered nurse who began my career on Vancouver’s Downtown
                Eastside, working in addictions and mental health. 
                I now live and work in Prince George, where nature feels close at hand and there is a strong sense of community.
               For the past three years I’ve specialized as a Ketamine-Assisted
                Therapist, with additional training in psilocybin and MDMA therapy
                through Therapsil. I am currently working toward my Masters in
                Counselling at UNBC.
              </p>
              <p>
                I believe clients are the experts of their own healing. My role is
                to create conditions where people feel safe and at ease, and to
                collaborate in ways that allow their own innate wisdom to arise.
                My passion for psychedelic therapy comes from witnessing firsthand
                the profound changes it can generate, and from the dedication and
                resilience of my clients. I take a collaborative, relational,
                psychodynamic approach, drawing on ACT, Motivational Interviewing,
                and strengths-based methods
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
