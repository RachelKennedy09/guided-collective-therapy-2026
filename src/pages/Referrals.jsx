import React from "react";
import { Link } from "react-router-dom";

export default function Referrals() {
  return (
    <section className="referrals-page">
      <div
        className="referrals-hero"
        style={{ "--bg-image": "url('/images/DJI_0267.webp')" }}
      >
        <div className="referrals-hero__overlay" />

        <div className="referrals-hero__inner">
          <div className="referrals-hero__panel">
            <header className="referrals-hero__header">
              <h1 className="referrals-hero__title">Referrals</h1>
              <p className="referrals-hero__blurb">
                Whether you're exploring Guided's services or looking for
                referral information, we'll help guide you through the next
                steps.
              </p>
            </header>

            <div className="referrals-nav">
              <a className="btn btn-outline" href="#prospective-patients">
                Prospective patients
              </a>
              <a className="btn btn-outline" href="#physicians">
                Physicians
              </a>
              <a className="btn btn-outline" href="#join-team">
                Join the team
              </a>
            </div>

            <div className="referrals-hero__cta">
              <Link to="/contact" className="btn">
                Contact ->
              </Link>
              <p className="referrals-hero__cta-note">
                For general inquiries only. Please do not include urgent or
                sensitive medical details.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="referrals-sections">
        <section id="prospective-patients" className="referrals-section-block">
          <div className="referrals-section-inner">
            <h2>Prospective patients</h2>
            <p>
              Guided offers ketamine-assisted psychotherapy, other
              medicine-assisted therapies (when available), traditional
              psychotherapy and psychiatry services, and perinatal and
              parenting-focused care. If you're unsure which service is the
              right fit, we're happy to help guide next steps.
            </p>

            <h3>What to have ready</h3>
            <ul className="referrals-list">
              <li>Your main goals for treatment and any questions you have</li>
              <li>Relevant medical/mental health history (brief is okay)</li>
              <li>Current medications</li>
              <li>Any referral paperwork (if you have it)</li>
            </ul>
          </div>
        </section>

        <section id="physicians" className="referrals-section-block">
          <div className="referrals-section-inner">
            <h2>Physicians</h2>
            <p>
              We offer ketamine-assisted therapy for a variety of mental health
              conditions including treatment-resistant depression, anxiety, and
              trauma-related disorders.
            </p>
            <p>Please fax referrals to Dr. Kennedy at Guided:</p>
            <p>
              <strong>Fax:</strong> 1-888-897-6501
            </p>
            <p>
              Email inquiries are welcome (without patient-identifying
              information).
            </p>
          </div>
        </section>

        <section id="join-team" className="referrals-section-block">
          <div className="referrals-section-inner">
            <h2>Join the team</h2>
            <p>
              We welcome health professionals and counsellors interested in
              psychedelic-assisted or traditional psychotherapy services.
            </p>
            <p>Please reach out and share a bit about your background.</p>
            <Link to="/contact" className="btn">
              Message us ->
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
