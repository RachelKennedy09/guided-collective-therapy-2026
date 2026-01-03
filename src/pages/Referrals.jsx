import React from "react";
import { Link } from "react-router-dom";

export default function Referrals() {
  return (
    <section className="referrals-page">
      {/* HERO (photo background + frosted panel) */}
      <div
        className="referrals-hero"
        style={{ "--bg-image": "url('/images/DJI_0267.jpg')" }}
      >
        <div className="referrals-hero__overlay" />

        <div className="referrals-hero__inner">
          <div className="referrals-hero__panel">
            <h1 className="referrals-hero__title">Referrals</h1>

            <p className="referrals-hero__blurb">
              If you’re looking to start ketamine-assisted psychotherapy or
              explore options through Canada’s Special Access Program, we’ll
              help you understand the next steps and what you’ll need.
            </p>

            <div className="referrals-grid">
              <article className="referrals-tile">
                <h2>1) Reach out</h2>
                <p>
                  Send us a message to share what you’re looking for. We’ll
                  reply with next steps and what information is helpful to
                  include.
                </p>
                <Link to="/contact" className="btn btn-outline">
                  Contact →{" "}
                </Link>
              </article>

              <article className="referrals-tile">
                <h2>2) Referral (recommended)</h2>
                <p>
                  A referral from your primary care provider can support access
                  and may help with partial coverage depending on your
                  situation.
                </p>
              </article>

              <article className="referrals-tile">
                <h2>3) Intake + consult</h2>
                <p>
                  We’ll book an intake/consultation to review goals, history,
                  and eligibility, and answer questions about what to expect.
                </p>
              </article>

              <article className="referrals-tile">
                <h2>4) Special Access Program</h2>
                <p>
                  Psilocybin and MDMA may be possible for eligible clients
                  through Health Canada’s Special Access Program.
                </p>
                <a
                  className="sap-link"
                  href="https://www.canada.ca/en/health-canada/services/drugs-health-products/special-access/drugs.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Special Access Program
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* BELOW: clean sections like Treatments */}
      <div className="referrals-sections">
        <section className="referrals-section-block">
          <div className="referrals-section-inner">
            <h2>Guided Services</h2>
            <p>
              We offer psychedelic assisted therapy for a variety of mental
              health diagnoses. However currently only Ketamine is available
              without requiring special access from Health Canada. Psilocybin
              and MDMA are available for those that qualify for these treatments
              through Canada's Special Access Program.
              <br />
              <br />
              We are happy to help you connect to someone that will help you
              apply.
            </p>
          </div>
        </section>

        <section className="referrals-section-block">
          <div className="referrals-section-inner">
            <h2>What to have ready</h2>
            <ul className="referrals-list">
              <li>Your main goals for treatment and any questions you have</li>
              <li>Relevant medical/mental health history (brief is okay)</li>
              <li>Current medications</li>
              <li>Any referral paperwork (if you have it)</li>
            </ul>
          </div>
        </section>

        <section className="referrals-section-block">
          <div className="referrals-section-inner">
            <h2>Need help deciding?</h2>
            <p>
              If you’re not sure whether you’re looking for ketamine-assisted
              therapy or traditional psychotherapy, send a message and we’ll
              help guide you to the right next step.
            </p>
            <Link to="/contact" className="btn">
              Message us →
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
