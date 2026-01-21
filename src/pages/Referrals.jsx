import React from "react";
import { Link } from "react-router-dom";

export default function Referrals() {
  return (
    <section className="referrals-page">
      {/* HERO (photo background + frosted panel) */}
      <div
        className="referrals-hero"
        style={{ "--bg-image": "url('/images/DJI_0267.webp')" }}
      >
        <div className="referrals-hero__overlay" />

        <div className="referrals-hero__inner">
          <div className="referrals-hero__panel">
            <h1 className="referrals-hero__title">Referrals</h1>

            <p className="referrals-hero__blurb">
              Whether you’re exploring ketamine-assisted psychotherapy or
              looking for information about referrals, we’ll help guide you
              through the next steps.
            </p>

            <div className="referrals-grid">
              {/* 1) Prospective Patients */}
              <article className="referrals-tile">
  <h2>For Prospective Patients</h2>
  <p>
    Guided offers a range of mental health services including
    ketamine-assisted psychotherapy, other medicine-assisted therapies
    (when available), traditional psychotherapy and psychiatry services,
    and perinatal and parenting-focused care.
  </p>
  <p>
    If you’re exploring treatment options or unsure which service may be
    the right fit, we invite you to reach out and we’ll help guide you
    through next steps.
  </p>
  <Link to="/contact" className="btn btn-outline">
    Contact →
  </Link>
</article>


              {/* 2) Physicians */}
              <article className="referrals-tile">
                <h2>Physicians</h2>
                <p>
                  We offer ketamine-assisted therapy for a variety of mental
                  health conditions, including (but not limited to)
                  Treatment-Resistant Depression, anxiety, and trauma-related
                  disorders.
                </p>
                <p>
                  If you are a physician and have a patient in mind for
                  psychedelic-assisted therapy, please fax your referral to
                  Dr. Kennedy at Guided:
                </p>

                <p className="referrals-contact-lines">
                  <strong>Fax:</strong> 1-888-897-6501
                </p>

                <p>
                  If you have any questions, please reach out to us via email{" "}
                  <strong>(without any patient-identifying information)</strong>.
                </p>

                <Link to="/contact" className="btn btn-outline">
                  Email us →
                </Link>
              </article>

              {/* 3) Join our team */}
              <article className="referrals-tile">
                <h2>Interested in joining our team?</h2>
                <p>
                  We’re always interested in connecting with health
                  professionals and counsellors who may want to get involved in
                  our psychedelic-assisted or traditional psychotherapy services.
                </p>
                <p>
                  Please feel free to reach out and share a bit about you and
                  your professional background.
                </p>
                <Link to="/contact" className="btn btn-outline">
                  Get in touch →
                </Link>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* BELOW: keep your clean sections */}
      <div className="referrals-sections">
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
