// src/pages/Treatments.jsx
import React from "react";
import BackToHome from "../components/FloatingBack";

export default function Treatments() {
  return (
    <section className="treatments-page">
      {/* TOP: background image behind intro */}
      <div
        className="treatments-hero"
        style={{ "--bg-image": "url('/images/LTMPPGTree.webp')" }}
      >
        <div className="treatments-hero__inner">
          <BackToHome />

          {/* Intro (lets more photo show) */}
          <header className="treatments-intro">
            <h1 className="treatments-intro__title">Guided Services</h1>

            <p className="treatments-intro__blurb">
              We at Guided offer medicine-assisted psychotherapy for a variety
              of mental health diagnoses including but not limited to treatment
              resistant depression, PTSD, anxiety disorders and chronic pain.
            </p>

            {/* ✅ Directory / On this page */}
            <nav className="treatments-directory" aria-label="On this page">
              <div className="treatments-directory__links">
                <a href="#ketamine" className="treatments-directory__link">
                  Ketamine-Assisted Therapy
                </a>
                <a href="#other-medicine" className="treatments-directory__link">
                  Other Medicine-Assisted Therapies
                </a>
                <a
                  href="#perinatal-parenting"
                  className="treatments-directory__link"
                >
                  Perinatal &amp; Parenting Psychiatry
                </a>
                <a href="#traditional" className="treatments-directory__link">
                  Traditional Therapies
                </a>
                <a href="#coverage-note" className="treatments-directory__link">
                  Coverage &amp; Notes
                </a>
              </div>
            </nav>
          </header>
        </div>
      </div>

      {/* BELOW: clean sections */}
      <div className="treatments-sections">
        {/* Ketamine */}
        <section id="ketamine" className="treatment-section-block">
          <div className="treatment-section-inner">
            <h2>Ketamine-Assisted Therapy</h2>
            <p>
              Ketamine-assisted psychotherapy combines medically supervised
              ketamine sessions with psychotherapy preparation and integration.
            </p>

            <div className="treatment-split">
              <div className="treatment-box">
                <h3>Individual Ketamine Therapy</h3>
                <ul>
                  <li>Consultation</li>
                  <li>2× Preparation Sessions (Group or Individual)</li>
                  <li>3× Ketamine Treatment Sessions</li>
                  <li>2× Integration Sessions</li>
                  <li>Closing Session</li>
                </ul>
                <p className="price">Investment of $2,975 </p>
              </div>

              <div className="treatment-box">
                <h3>
                  Group Ketamine Therapy <small>(*when available)</small>
                </h3>
                <ul>
                  <li>Individual Consultation</li>
                  <li>2× Group Preparation Sessions</li>
                  <li>3× Group Ketamine Treatment Sessions</li>
                  <li>2× Group Integration Sessions</li>
                  <li>Group Closing Session</li>
                </ul>
                <p className="price">Investment of $1,575 </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Medicine Assisted Therapies */}
        <section id="other-medicine" className="treatment-section-block">
          <div className="treatment-section-inner">
            <h2>Other Medicine Assisted Therapies</h2>

            <p>
              Currently only <b>Ketamine-Assisted Therapy</b> is approved for
              prescribed use in a medical setting without special approval.
              Psilocybin, MDMA, and in some cases other psychedelic substances,
              are approved only through Canada’s{" "}
              <a
                className="sap-link-inline"
                href="https://www.canada.ca/en/health-canada/services/drugs-health-products/special-access/drugs.html"
                target="_blank"
                rel="noreferrer"
              >
                Special Access Program (SAP)
              </a>
              .
            </p>
          </div>
        </section>

        {/* Perinatal + parenting */}
        <section id="perinatal-parenting" className="treatment-section-block">
          <div className="treatment-section-inner">
            <h2>Perinatal &amp; Parenting Psychiatry</h2>

            <div className="treatment-split">
              <div className="treatment-box">
                <h3>Perinatal Psychiatry</h3>
                <p>
                  Psychiatric care for pregnant and post-partum patients (up to
                  1 year post-partum) is available. We strive to support these
                  individuals with supportive, emotional and cognitive therapy
                  along with psychiatric medication management for pregnancy and
                  in the first year following birth.
                </p>
                <p>
                  If you are interested, please have your physicians send in a
                  referral.
                </p>
              </div>

              <div className="treatment-box">
                <h3>Circle of Security Parenting Course (COS-P)</h3>
                <p>
                  This is a parenting group program based on theories of
                  attachment and the principles that secure relationships are
                  important for children’s well-being, and these attachments are
                  amendable to positive change.
                </p>
                <p>
                  Format is 8 weeks of weekly groups ran by Dr. Christine
                  Kennedy — contact to see availability or to be put onto a
                  waitlist.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Traditional therapies */}
        <section id="traditional" className="treatment-section-block">
          <div className="treatment-section-inner">
            <h2>Traditional Therapies</h2>

            <div className="treatment-split">
              <div className="treatment-box">
                <h3>General Outpatient Psychiatry Services</h3>
                <p>
                  Currently Dr. Christine Kennedy’s waitlist is closed to
                  general outpatient psychiatric care. Please check back in the
                  future.
                </p>
              </div>

              <div className="treatment-box">
                <h3>Individual and/or Group Psychodynamic Therapy</h3>
                <p>
                  This is a relational, emotionally focused and psychodynamic
                  approach to in depth, long-term therapy. When with a
                  psychiatrist this is covered by MSP, however acceptance will
                  be dependent on availability, suitability and compatibility
                  with the therapist and this type of work.
                </p>
                <p>
                  Please reach out to be potentially added to a waitlist.
                  Short-term group offerings are available intermittently,
                  contact for more information.
                </p>
              </div>

              <div className="treatment-box">
                <h3>Couple’s Therapy</h3>
                <p>
                  Attachment-focused, emotionally oriented psychotherapy for
                  couples. Custom treatment plans available, please reach out if
                  interested.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* note section */}
        <section
          id="coverage-note"
          className="treatment-section-block treatment-section-block--note"
        >
          <div className="treatment-section-inner">
            <p>
              <b>Please note:</b> some of the treatment is covered by MSP if you
              have a doctor's referral. We encourage those who also have private
              health insurance to inquire with their respective health plans to
              see if they can seek any additional coverage.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
