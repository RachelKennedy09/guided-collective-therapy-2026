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
                Prospective Patients
              </a>
              <a className="btn btn-outline" href="#physicians">
                Physicians
              </a>
              <a className="btn btn-outline" href="#join-team">
                Join The Team
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="referrals-sections">
        <section id="prospective-patients" className="referrals-section-block">
          <h2 className="referrals-section-title">Prospective Patients</h2>
          <div className="referrals-section-inner treatment-box">
            <p>
              Guided Therapy Collective offers a range of mental health services,
              including ketamine-assisted therapy, other medicine-assisted therapies
              (when available), traditional psychotherapy and psychiatry services,
              and perinatal and parenting-focused care.
            </p>

            <p>
              If you are exploring care or unsure which service may be the right fit,
              we invite you to reach out using our{" "}
              <Link to="/contact" className="text-link">
                contact form
              </Link>{" "}
              as a general outpatient inquiry.
            </p>

            <p>
              Please keep messages brief and avoid sharing detailed or urgent medical
              information. Our team will follow up with next steps and guidance on how
              to share information securely if appropriate.
            </p>

            <h3>What to have ready</h3>
            <ul className="referrals-list">
              <li>Your main goals for treatment and any questions you have</li>
              <li>Relevant medical or mental health history (brief is okay)</li>
              <li>Current medications</li>
              <li>Any referral paperwork (if you have it)</li>
            </ul>
          </div>
        </section>

        <section id="physicians" className="referrals-section-block">
          <h2 className="referrals-section-title">Physicians</h2>
          <div className="referrals-section-inner treatment-box">
            <p>
              Guided Therapy Collective offers a range of mental health services,
              including ketamine-assisted therapy, psychiatry, and psychotherapy.
              Clinical care is led by Dr. Christine Kennedy.
            </p>

            <p>
              For select patients, other medicine-assisted therapies may be considered
              through Health Canada's{" "}
              <a
                href="https://www.canada.ca/en/health-canada/services/drugs-health-products/special-access.html"
                target="_blank"
                rel="noopener noreferrer"
                className="sap-link-inline"
              >
                Special Access Program
              </a>{" "}
              when clinically appropriate.
            </p>

            <p>
              Physicians who wish to refer a patient are invited to fax a referral to
              Dr. Kennedy at Guided Therapy Collective.
            </p>

            <p>
              <strong>Fax:</strong> 1-888-897-6501
            </p>

            <p>
              For general inquiries, please{" "}
              <Link to="/contact" className="text-link">
                contact us
              </Link>{" "}
              by email <strong>(without patient-identifying information)</strong>.
            </p>
          </div>
        </section>

        <section id="join-team" className="referrals-section-block">
          <h2 className="referrals-section-title">Join the team</h2>
          <div className="referrals-section-inner treatment-box">
            <p>
              We welcome health professionals and counsellors interested in
              psychedelic-assisted or traditional psychotherapy services.
            </p>
            <p>
              Please{" "}
              <Link to="/contact" className="text-link">
                contact us
              </Link>{" "}
              and share a bit about your background.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
