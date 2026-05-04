// src/pages/Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const [isSending, setIsSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [hasConsent, setHasConsent] = useState(false);

  const [formErrors, setFormErrors] = useState([]);
  const [showConsentError, setShowConsentError] = useState(false);
  const consentWrapRef = useRef(null);
  const formTopRef = useRef(null);

  useEffect(() => {
    if (showConsentError && consentWrapRef.current) {
      consentWrapRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [showConsentError]);

  function resetFormState() {
    setName("");
    setEmail("");
    setTopic("");
    setMessage("");
    setHasConsent(false);
    setShowConsentError(false);
    setFormErrors([]);
  }

  function validate() {
    const errors = [];

    if (!name.trim()) errors.push("Please enter your name.");
    if (!email.trim()) errors.push("Please enter your email.");
    if (!topic) errors.push("Please choose a topic.");
    if (!message.trim()) errors.push("Please enter a short message.");
    if (!hasConsent) errors.push("Please confirm consent before submitting.");

    return errors;
  }

  function handleSubmit(e) {
    const errors = validate();

    if (errors.length > 0) {
      e.preventDefault();
      setFormErrors(errors);

      const missingConsent = errors.some((msg) =>
        msg.toLowerCase().includes("consent"),
      );
      setShowConsentError(missingConsent);

      if (formTopRef.current) {
        formTopRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      return;
    }

    setFormErrors([]);
    setShowConsentError(false);

    if (import.meta.env.DEV) {
      e.preventDefault();
      setIsSending(true);
      resetFormState();
      navigate("/contact-success");
    }
  }

  return (
    <section className="contact-page">
      <div
        className="contact-hero"
        style={{ "--bg-image": "url('/images/ConnaughtHillRoadPG.webp')" }}
      >
        <div className="contact-hero__inner">
          <div className="contact-hero__panel">
            <div className="contact-hero__icon-wrap">
              <img
                src="/guided-footer-icon.png"
                alt=""
                className="hero-panel__icon"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="contact-hero__title-wrap">
              <h1 className="contact-hero__title">Contact</h1>
            </div>

            <div className="contact-hero__blurb-wrap contact-hero__blurb-wrap--one">
              <p className="contact-hero__blurb">
                For general questions about Guided's services or referral
                process, send us a short message and we'll respond by email.
              </p>
            </div>

            <div className="contact-hero__blurb-wrap contact-hero__blurb-wrap--two">
              <p className="contact-hero__note">
                This form is for general inquiries only. Please avoid urgent
                messages, sensitive details, or patient-identifying information.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-section">
        <div className="contact-help">
          <h2 className="contact-help__title">Send us a message</h2>
          <ul className="contact-help__list">
            <li>Keep messages general and brief.</li>
            <li>Do not include sensitive details or patient-identifying information.</li>
            <li>Referrals are typically sent by fax: 1-888-897-6501.</li>
          </ul>
        </div>

        <div className="contact-form-panel">
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

            <p hidden>
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

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

            <div className="contact-field">
              <label htmlFor="name">Name</label>
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

            <div className="contact-field">
              <label htmlFor="email">Email</label>
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

            <div className="contact-field">
              <label htmlFor="topic">Topic</label>
              <select
                id="topic"
                name="topic"
                required
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                <option value="">Select a topic</option>
                <option value="Services / eligibility">Services / eligibility</option>
                <option value="Referrals">Referrals</option>
                <option value="General question">General question</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <span>Keep this general. Do not include patient-identifying information.</span>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

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
                checked={hasConsent}
                onChange={(e) => {
                  setHasConsent(e.target.checked);
                  if (e.target.checked) setShowConsentError(false);
                }}
              />
              <label htmlFor="consent">
                I understand this form is for general inquiries only, is not for
                emergencies, and I will not include sensitive details or
                patient-identifying information.
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
              This form is not monitored for urgent or crisis situations. If you
              need immediate help, please contact local emergency services.
            </p>
          </form>
        </div>

        <aside className="contact-team-box">
          <h2>Want to join our team?</h2>
          <p>
            Please contact us with a short note about yourself and attach your
            resume. We will review it and get in touch if there is a good fit.
          </p>
          <a
            className="btn btn-outline"
            href="mailto:admin@guidedtc.ca?subject=Joining%20the%20Guided%20team"
          >
            Email us
          </a>
        </aside>
      </div>
    </section>
  );
}
