// src/pages/Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const [isSending, setIsSending] = useState(false);

  // "patient" | "physician" | "team"
  const [contactAs, setContactAs] = useState("patient");

  // simple controlled fields for validation
  const [name, setName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [email, setEmail] = useState("");
  const [clinic, setClinic] = useState("");
  const [referralSent, setReferralSent] = useState("");
  const [role, setRole] = useState("");
  const [interest, setInterest] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const [hasConsent, setHasConsent] = useState(false);

  // errors
  const [formErrors, setFormErrors] = useState([]);
  const [showConsentError, setShowConsentError] = useState(false);
  const consentWrapRef = useRef(null);
  const formTopRef = useRef(null);

  useEffect(() => {
    if (showConsentError && consentWrapRef.current) {
      consentWrapRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [showConsentError]);

  function resetFormState() {
    setContactAs("patient");
    setName("");
    setPronouns("");
    setEmail("");
    setClinic("");
    setReferralSent("");
    setRole("");
    setInterest("");
    setTopic("");
    setMessage("");
    setHasConsent(false);
    setShowConsentError(false);
    setFormErrors([]);
  }

  function validate() {
    const errors = [];

    // Required for everyone
    if (!contactAs) errors.push("Please choose who you are contacting as.");
    if (!name.trim()) errors.push("Please enter your name.");
    if (!email.trim()) errors.push("Please enter your email.");
    if (!topic) errors.push("Please choose a topic.");
    if (!message.trim()) errors.push("Please enter a short message.");
    if (!hasConsent) errors.push("Please confirm consent before submitting.");

    // Required only for Join the Team
    if (contactAs === "team") {
      if (!role.trim()) errors.push("Please add your role / profession.");
      if (!interest) errors.push("Please select what you’re interested in.");
    }

    return errors;
  }

  function handleSubmit(e) {
    const errors = validate();

    if (errors.length > 0) {
      e.preventDefault();
      setFormErrors(errors);

      // show consent highlight if missing
      const missingConsent = errors.some((msg) => msg.toLowerCase().includes("consent"));
      setShowConsentError(missingConsent);

      // scroll to top of form so they see errors
      if (formTopRef.current) {
        formTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    // Clear errors
    setFormErrors([]);
    setShowConsentError(false);

    // Local dev: fake success flow
    if (import.meta.env.DEV) {
      e.preventDefault();
      setIsSending(true);

      // mimic send
      resetFormState();
      navigate("/contact-success");
      return;
    }

    // production: allow normal POST so Netlify captures
  }

  const guidanceText =
    contactAs === "physician"
      ? "Please do not include any patient-identifying information in this form. Referrals are typically sent by fax."
      : contactAs === "team"
      ? "Please share a brief overview of your role and what you’re interested in. We’ll follow up by email if it looks like a fit for next steps."
      : "Please keep your message general and avoid sharing detailed or urgent medical information. We’ll follow up by email with next steps.";

  return (
    <section className="contact-page">
      {/* HERO */}
      <div
        className="contact-hero"
        style={{ "--bg-image": "url('/images/ConnaughtHillRoadPG.webp')" }}
      >
        <div className="contact-hero__inner">
          <div className="contact-hero__panel">
            <h1 className="contact-hero__title">Contact</h1>

            <p className="contact-hero__blurb">
              For general questions about Guided’s services, referrals, or joining our team,
              please use the form below and we’ll respond by email.
            </p>

            <p className="contact-hero__note">
              This form is for general inquiries only. Please avoid sending urgent messages
              or detailed medical information here. If needed, we will provide guidance on
              how to share information securely.
            </p>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className="contact-form-section">
        <div className="contact-form-panel">
          <div className="contact-help">
            <h2 className="contact-help__title">How to use this form</h2>
            <ul className="contact-help__list">
              <li>Choose the option that best fits your inquiry.</li>
              <li>Keep messages general — we’ll follow up by email.</li>
              <li>Do not include sensitive details or patient-identifying information.</li>
            </ul>
          </div>

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
            <div ref={formTopRef} />

            <input type="hidden" name="form-name" value="guided-contact" />

            {/* Honeypot */}
            <p hidden>
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>

            {/* Error summary */}
            {formErrors.length > 0 && (
              <div className="contact-error-summary" role="alert" aria-live="polite">
                <p className="contact-error-summary__title">
                  Please fix the following before submitting:
                </p>
                <ul>
                  {formErrors.map((err, i) => (
                    <li key={i}>{err}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact as (required) */}
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
                <option value="physician">Physician / referral inquiry</option>
                <option value="team">Interested in joining the team</option>
              </select>
            </div>

            <p className="contact-guidance" role="note">
              {guidanceText}
            </p>

            {/* Name (required) */}
            <div className="contact-field">
              <label htmlFor="name">Name</label>
              <span>How would you like us to greet you?</span>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Pronouns (optional) */}
            <div className="contact-field">
              <label htmlFor="pronouns">Pronouns</label>
              <span>Optional</span>
              <select
                id="pronouns"
                name="pronouns"
                value={pronouns}
                onChange={(e) => setPronouns(e.target.value)}
              >
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

            {/* Email (required) */}
            <div className="contact-field">
              <label htmlFor="email">Email</label>
              <span>We will respond to your inquiry by email.</span>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Physician extras */}
            {contactAs === "physician" && (
              <>
                <div className="contact-field">
                  <label htmlFor="clinic">Clinic / Practice name</label>
                  <span>Optional</span>
                  <input
                    id="clinic"
                    name="clinic"
                    type="text"
                    value={clinic}
                    onChange={(e) => setClinic(e.target.value)}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="referralSent">Referral status</label>
                  <span>Referrals are typically sent by fax.</span>
                  <select
                    id="referralSent"
                    name="referralSent"
                    value={referralSent}
                    onChange={(e) => setReferralSent(e.target.value)}
                  >
                    <option value="">—</option>
                    <option value="Fax sent">Fax sent</option>
                    <option value="Fax will be sent">Fax will be sent</option>
                    <option value="General question only">General question only</option>
                  </select>
                </div>

                <p className="contact-faxline">
                  <strong>Fax for referrals:</strong> 1-888-897-6501
                </p>
              </>
            )}

            {/* Team extras (required) */}
            {contactAs === "team" && (
              <>
                <div className="contact-field">
                  <label htmlFor="role">Your role / profession</label>
                  <span>Required</span>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="interest">Interested in</label>
                  <span>Required</span>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  >
                    <option value="">—</option>
                    <option value="Medicine-assisted services">Medicine-assisted services</option>
                    <option value="Traditional psychotherapy">Traditional psychotherapy</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
              </>
            )}

            {/* Topic (required) */}
            <div className="contact-field">
              <label htmlFor="topic">Topic</label>
              <span>Required</span>
              <select
                id="topic"
                name="topic"
                required
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                <option value="">—</option>
                <option value="Services / eligibility">Services / eligibility</option>
                <option value="Referrals">Referrals</option>
                <option value="Joining the team">Joining the team</option>
                <option value="General question">General question</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message (required) */}
            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <span>
                Required. Keep this general.{" "}
                {contactAs === "physician" && (
                  <strong>Do not include patient-identifying information.</strong>
                )}
              </span>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Consent (required) */}
            <div
              ref={consentWrapRef}
              className={`contact-consent ${showConsentError ? "contact-consent--error" : ""}`}
            >
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={hasConsent}
                onChange={(e) => {
                  setHasConsent(e.target.checked);
                  if (e.target.checked) setShowConsentError(false);
                }}
              />
              <label htmlFor="consent">
                I understand this form is for general inquiries only, is not for emergencies,
                and I will not include sensitive details or patient-identifying information.
              </label>

              {showConsentError && (
                <p className="contact-inline-error" role="alert">
                  Please check the consent box to continue.
                </p>
              )}
            </div>

            <div data-netlify-recaptcha="true"></div>

            <button type="submit" className="btn" disabled={isSending}>
              {isSending ? "Sending..." : "Submit"}
            </button>

            <p className="contact-status">
              This form is not monitored for urgent or crisis situations. If you need
              immediate help, please contact local emergency services.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
