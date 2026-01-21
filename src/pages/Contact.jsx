// src/pages/Contact.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [isSending, setIsSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // NEW: contact type toggle
  const [contactAs, setContactAs] = useState("patient"); // "patient" | "physician"

  function handleSubmit(e) {
    // Only intercept in local dev (localhost)
    // Netlify Forms doesn't capture submissions from localhost
    if (import.meta.env.DEV) {
      e.preventDefault();
      setIsSending(true);
      setErrorMsg("");

      const form = e.currentTarget;
      form.reset();

      // reset contactAs too (since we manually reset)
      setContactAs("patient");

      // mimic success flow
      navigate("/contact-success");
      return;
    }

    // In production: do NOT preventDefault.
    // Let the browser submit the POST normally so Netlify captures it.
  }

  return (
    <section className="contact-page">
      <div
        className="contact-hero"
        style={{ "--bg-image": "url('/images/ConnaughtHillRoadPG.webp')" }}
      >
        <div className="contact-hero__inner">
          <div className="contact-hero__panel">
            <h1 className="contact-hero__title">Contact</h1>

            <p className="contact-hero__blurb">
              If you’re reaching out about Guided’s services, referrals, or
              general questions, we’d be happy to connect.
            </p>

            <p className="contact-hero__note">
              Please avoid sending urgent or highly detailed medical information
              by email. This form is for general inquiries only. We’ll follow up
              with next steps, including how to share referrals or records
              securely.
            </p>

            <form
              className="contact-form"
              name="guided-contact"
              method="POST"
              action="/contact-success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* ✅ Required Netlify hidden field */}
              <input type="hidden" name="form-name" value="guided-contact" />

              {/* ✅ Honeypot */}
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              {/* ✅ NEW: Contacting as (required) */}
              <div className="contact-field">
                <label htmlFor="contactAs">I am contacting as</label>
                <span>Select the option that best fits.</span>
                <select
                  id="contactAs"
                  name="contactAs"
                  value={contactAs}
                  onChange={(e) => setContactAs(e.target.value)}
                  required
                >
                  <option value="patient">Prospective patient / general inquiry</option>
                  <option value="physician">Physician / referral</option>
                </select>
              </div>

              {/* Name */}
              <div className="contact-field">
                <label htmlFor="name">Name</label>
                <span>How would you like us to greet you?</span>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </div>

              {/* Pronouns */}
              <div className="contact-field">
                <label htmlFor="pronouns">Pronouns</label>
                <span>Optional</span>
                <select id="pronouns" name="pronouns" defaultValue="">
                  <option value="">—</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                  <option value="She / Her">She / Her</option>
                  <option value="He / Him">He / Him</option>
                  <option value="They / Them">They / Them</option>
                  <option value="She / They">She / They</option>
                  <option value="He / They">He / They</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Email */}
              <div className="contact-field">
                <label htmlFor="email">Email</label>
                <span>We’ll only use this to respond to your inquiry.</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>


              {/* Physician-only fields */}
              {contactAs === "physician" && (
                <>
                  <div className="contact-field">
                    <label htmlFor="clinic">Clinic / Practice name</label>
                    <span>Optional</span>
                    <input id="clinic" name="clinic" type="text" />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="physicianPhone">Best callback number</label>
                    <span>Optional</span>
                    <input
                      id="physicianPhone"
                      name="physicianPhone"
                      type="tel"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="referralSent">Referral being sent by</label>
                    <span>Optional — fax is preferred for referrals.</span>
                    <select id="referralSent" name="referralSent" defaultValue="">
                      <option value="">—</option>
                      <option value="Fax">Fax</option>
                      <option value="Email (no identifying info)">Email (no identifying info)</option>
                      <option value="Not yet sent">Not yet sent</option>
                    </select>
                  </div>
                </>
              )}

              {/* Subject */}
              <div className="contact-field">
                <label htmlFor="subject">Subject</label>
                <span>Optional</span>
                <input id="subject" name="subject" type="text" />
              </div>

              {/* Message */}
              <div className="contact-field">
                <label htmlFor="message">Message</label>
                <span>
                  Please avoid sharing sensitive medical details here.{" "}
                  {contactAs === "physician"
                    ? "Do not include patient-identifying information."
                    : ""}
                </span>
                <textarea id="message" name="message" rows="4" />
              </div>

              {/* Consent */}
              <div className="contact-consent">
                <input id="consent" name="consent" type="checkbox" required />
                <label htmlFor="consent">
                  I understand this form is not for emergencies and does not
                  establish an immediate treatment relationship.
                </label>
              </div>

              {/* Netlify reCAPTCHA */}
              <div data-netlify-recaptcha="true"></div>

              <button type="submit" className="btn" disabled={isSending}>
                {isSending ? "Sending..." : "Submit"}
              </button>

              {errorMsg && (
                <p className="contact-status" role="status">
                  {errorMsg}
                </p>
              )}

              <p className="contact-status">
                This form is for general inquiries only and is not monitored for
                urgent or crisis situations.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
