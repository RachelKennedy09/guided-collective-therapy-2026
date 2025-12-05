// src/pages/Team.jsx
import { useState } from "react";

function TeamMember({ name, title, imgSrc, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`profile ${open ? "is-open" : ""}`}
      style={{ "--bg-image": "url('/images/hero_background_web.jpg')" }}
    >
      <img
        src={imgSrc}
        alt={name}
        onClick={() => setOpen((prev) => !prev)}
        style={{ cursor: "pointer" }}
      />
      <div className="profile-text">
        <h2>{name}</h2>
        {title && (
          <p>
            <strong>{title}</strong>
          </p>
        )}
        <p>{children}</p>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <>
      {/* Intro section at top of page */}
      <section
        className="about"
        style={{ "--bg-image": "url('/images/hero_background_web.jpg')" }}
      >
        <div className="about-text">
          <h1>Our Team</h1>
          <p>
            Guided Therapy Collective is led by a medical director and a
            collaborative care team. Click a photo below to learn more about
            each clinician.
          </p>
        </div>
      </section>

      {/* Bios using the same layout + background */}
      <section id="bios" className="bios">
        <TeamMember
          name="Dr. Christine Kennedy, MD, FRCPC, Psychiatry"
          title="Medical Director, Psychiatrist"
          imgSrc="/images/AboutChristine.jpg"
        >
          Thank you for your curiosity and seeking an avenue of healing that
          feels aligned with you.
          {"\n\n"}I am grateful to live and work on the unceded traditional
          territory of the Lheidli T'enneh Nation. I was raised in the North and
          am honored to continue to serve and work with people in Northern BC.
          In my general practice I offer psychodynamic therapy with a relational
          approach, focusing on attachment and emotional processing.
          {"\n\n"}I am passionate about the use of psychedelics as a way of
          opening one's heart and mind to what lies beyond their defenses that
          have evolved from years of suffering. Psychedelic healing can be a
          spiritual, deeply connected experience and I strive to create an
          environment that offers the opportunity for people to explore these
          depths. With supportive integration of these experiences, there can be
          healing and growth within their lives and relationships.
          {"\n\n"}I look forward to seeing if working together in this realm is
          the right fit at the right time.
        </TeamMember>

        <TeamMember
          name="Laura Fisher, RN"
          title="Ketamine-Assisted Therapist, Registered Nurse"
          imgSrc="/images/you.jpg"
        >
          Welcome to a space that supports community and connection.
          {"\n\n"}
          I'm a registered nurse who began my career on Vancouver's Downtown
          Eastside, working in addictions and mental health. Four years ago, I
          moved to Prince George to be closer to nature and community. For the
          past two years I've specialized as a Ketamine-Assisted Therapist, with
          additional training in psilocybin and MDMA therapy through Therapsil.
          I am currently working toward my Masters in Counselling at UNBC.
          {"\n\n"}I believe clients are the experts of their own healing. My
          role is to create conditions where people feel safe and at ease, and
          to collaborate in ways that allow their own innate wisdom to arise. My
          passion for psychedelic therapy comes from witnessing firsthand the
          profound changes it can generate, and from the dedication and
          resilience of my clients. I take a collaborative, relational,
          psychodynamic approach, drawing on ACT, Motivational Interviewing, and
          strengths-based methods.
        </TeamMember>
      </section>
    </>
  );
}
