// src/pages/Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const [isSending, setIsSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [contactAs, setContactAs] = useState("patient"); // "patient" | "physician"
  const [hasConsent, setHasConsent] = useState(false);

  // NEW: for showing consent-specific error UI
  const [showConsentError, setShowConsentError] = useState(false);
  const consentWrapRef = useRef(null);

  // Optional: when error shows, bring it into view
  useEffect(() => {
    if (showConsentError && consentWrapRef.current) {
      consentWrapRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [showConsentError]);

  function handleSubmit(e) {
    // If consent isn't checked, block submission + show message
    if (!hasConsent) {
      e.preventDefault();
      setShowConsentError(true);
      setErrorMsg("Please confirm your consent before submitting this form.");

      // Popup (simple + effective)
      window.alert("Please check the consent box before submitting.");

      return;
    }

    // Clear consent error if they submit properly
    setShowConsentError(false);
    setErrorMsg("");

    // Only intercept in local dev (localhost)
    // Netlify Forms doesn't capture submissions from localhost
    if (import.meta.env.DEV) {
      e.preventDefault();
      setIsSending(true);

      const form = e.currentTarget;
      form.reset();

      // reset controlled fields too
      setContactAs("patient");
      setHasConsent(false);
      setShowConsentError(false);

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

              {/* Contacting as (required) */}
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
                  <option value="patient">
                    Prospective patient / general inquiry
                  </option>
                  <option value="physician">Physician / referral</option>
                </select>
              </div>

              {/* Name */}
              <div className="contact-field">
                <label htmlFor="name">Name</label>
                <span>How would you like us to greet you?</span>
                <input id="name" name="name" type="text" autoComplete="name" required />
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
                <span>We’ll respond to your inquiry by email.</span>
                <input id="email" name="email" type="email" autoComplete="email" required />
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
                    <label htmlFor="referralSent">Referral being sent by</label>
                    <span>Fax is preferred for referrals.</span>
                    <select id="referralSent" name="referralSent" defaultValue="">
                      <option value="">—</option>
                      <option value="Fax">Fax</option>
                      <option value="Email (no identifying information)">
                        Email (no identifying information)
                      </option>
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
                  Please avoid sharing sensitive medical details here.
                  {contactAs === "physician" &&
                    " Do not include patient-identifying information."}
                </span>
                <textarea id="message" name="message" rows="4" />
              </div>

              {/* Consent (required) */}
              <div
                ref={consentWrapRef}
                className={`contact-consent ${
                  showConsentError ? "contact-consent--error" : ""
                }`}
              >
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  checked={hasConsent}
                  onChange={(e) => {
                    setHasConsent(e.target.checked);
                    if (e.target.checked) setShowConsentError(false);
                  }}
                />
                <label htmlFor="consent">
                  I understand this form is not for emergencies and does not
                  establish an immediate treatment relationship.
                </label>

                {showConsentError && (
                  <p className="contact-inline-error" role="alert">
                    Please check the consent box to continue.
                  </p>
                )}
              </div>

              {/* Netlify reCAPTCHA */}
              <div data-netlify-recaptcha="true"></div>

              {/* NOTE: Do NOT disable based on consent if you want the error popup on click */}
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
