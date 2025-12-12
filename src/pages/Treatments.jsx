// src/pages/Treatments.jsx
import React from "react";

export default function Treatments() {
  return (
    <section className="treatments-page">
      {/* TOP: background image ONLY for the cards area */}
      <div
        className="treatments-hero"
        style={{ "--bg-image": "url('/images/hero_background_web.jpg')" }}
      >
        <div className="treatments-hero__inner">
          <div className="treatments-hero__panel">
            <h1 className="treatments-hero__title">Guided Services</h1>

            <p className="treatments-hero__blurb">
              We offer psychedelic assisted therapy for a variety of mental
              health diagnoses. However currently only Ketamine is available
              without requiring special access from Health Canada. Psilocybin
              and MDMA are available for those that qualify for these treatments
              through Canada&apos;s
              <br />
              <br />
              <a
                className="sap-link"
                href="https://www.canada.ca/en/health-canada/services/drugs-health-products/special-access/drugs.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Special Access Program
              </a>
              .
              <br />
              <br />
              We are happy to help you connect to someone that will help you
              apply.
            </p>

            {/* CARDS */}
            <div className="treatments-grid">
              <article className="treatment-tile">
                <h2>Ketamine-Assisted Therapy</h2>
                <p>
                  Medically supervised ketamine-assisted psychotherapy with
                  preparation and integration. Individual programs (and group
                  options when available).
                </p>
                <div className="treatment-tile__actions">
                  <a href="#ketamine" className="btn btn-outline">
                    More info →
                  </a>
                </div>
              </article>

              <article className="treatment-tile">
                <h2>Psilocybin-Assisted Therapy</h2>
                <p>
                  Available via Health Canada&apos;s Special Access Program for
                  eligible clients.
                </p>
                <div className="treatment-tile__actions">
                  <a href="#psilocybin" className="btn btn-outline">
                    More info →
                  </a>
                </div>
              </article>

              <article className="treatment-tile">
                <h2>MDMA-Assisted Therapy</h2>
                <p>
                  Available via Special Access Program for qualifying cases.
                </p>
                <div className="treatment-tile__actions">
                  <a href="#mdma" className="btn btn-outline">
                    More info →
                  </a>
                </div>
              </article>

              <article className="treatment-tile">
                <h2>Psychotherapy & Groups</h2>
                <p>
                  Couples therapy, group psychodynamic work, individual
                  psychodynamic therapy, and outpatient care.
                </p>
                <div className="treatment-tile__actions">
                  <a href="#psychotherapy" className="btn btn-outline">
                    More info →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* BELOW: clean sections (NO dropdowns) */}
      <div className="treatments-sections">
        <section id="ketamine" className="treatment-section-block">
          <div className="treatment-section-inner">
            <h2>Ketamine-Assisted Therapy</h2>
            <p>
              Ketamine-assisted psychotherapy combines medically supervised
              ketamine sessions with psychotherapy preparation and integration.
              This approach can support healing and change for eligible mental
              health conditions.
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
                <p className="price">
                  *$2,975{" "}
                  <span className="note">
                    (*2,175 with referral from primary care provider)
                  </span>
                </p>
              </div>

              <div className="treatment-box">
                <h3>
                  Group Ketamine Therapy <small>(when available)</small>
                </h3>
                <ul>
                  <li>Individual Consultation</li>
                  <li>2× Group Preparation Sessions</li>
                  <li>3× Group Ketamine Treatment Sessions</li>
                  <li>2× Group Integration Sessions</li>
                  <li>Group Closing Session</li>
                </ul>
                <p className="price">
                  *$1,575{" "}
                  <span className="note">
                    (*$1,175 with referral from primary care provider)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="psilocybin" className="treatment-section-block">
          <div className="treatment-section-inner">
            <h2>Psilocybin-Assisted Therapy</h2>
            <p>
              Available via Health Canada’s Special Access Program for eligible
              clients. We can help you navigate the application process.
            </p>
          </div>
        </section>

        <section id="mdma" className="treatment-section-block">
          <div className="treatment-section-inner">
            <h2>MDMA-Assisted Therapy</h2>
            <p>
              Available via Special Access Program for qualifying cases. Please
              contact us for current guidance and eligibility.
            </p>
          </div>
        </section>

        <section id="psychotherapy" className="treatment-section-block">
          <div className="treatment-section-inner">
            <h2>Psychotherapy & Groups</h2>

            <h3>Couples Therapy</h3>
            <p>
              Attachment-focused, emotionally-oriented psychotherapy for
              couples. Custom treatment plans available.
            </p>

            <h3>Group Psychodynamic Therapy</h3>
            <p>
              Group offerings scheduled periodically. Register your interest to
              be notified of upcoming cohorts.
            </p>

            <h3>Individual Psychodynamic Therapy</h3>
            <p>
              Relational, psychodynamic therapy tailored to your goals. Optional
              integration after medicine sessions.
            </p>

            <h3>Circle of Security Parenting Group</h3>
            <p>
              Foundations in attachment and connection for caregivers. New
              groups open based on interest.
            </p>

            <h3>General Outpatient / Psychotherapy</h3>
            <p>
              Traditional psychotherapy without psychedelic medicines may also
              be available with Dr. Kennedy or Laura Fisher.
            </p>
          </div>
        </section>

        <section className="treatment-section-block treatment-section-block--note">
          <div className="treatment-section-inner">
            <p>
              <b>Please note:</b> treatment may be partially covered by MSP if
              you have a doctor’s referral. Private health insurance companies
              may cover parts of your treatment. As we practice under the
              supervision of a psychiatrist we are able to offer the medicine
              sessions at a lower cost if a family doctor has sent us a
              referral.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
