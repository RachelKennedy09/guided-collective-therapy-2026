// src/pages/Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const [isSending, setIsSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState("");
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
    setInquiryType("");
    setMessage("");
    setHasConsent(false);
    setShowConsentError(false);
    setFormErrors([]);
  }

  function validate() {
    const errors = [];

    if (!name.trim()) errors.push("Please enter your name.");
    if (!email.trim()) errors.push("Please enter your email.");
    if (!inquiryType) errors.push("Please choose what you are reaching out about.");
    if (!message.trim()) errors.push("Please enter your message.");
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
        style={{ "--bg-image": "url('/images/AncientForestPG.jpg')" }}
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
                Please use this page to request consultation or ask general
                questions. If you are a health provider, please fill out form
                below or{" "}
                <span className="contact-hero__nowrap">fax referral</span> to
                <span className="contact-hero__nowrap"> 1-888-897-6501</span>.
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="contact-form-section">
        <div className="contact-form-layout">
          <div className="contact-form-panel">
            <div className="contact-form-heading">
              <p className="contact-form-kicker">Start here</p>
              <h2>General inquiries or consultation requests</h2>
              <p>Please see below</p>
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

              <p hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              {formErrors.length > 0 && (
                <div
                  className="contact-error-summary"
                  role="alert"
                  aria-live="polite"
                >
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

              <div className="contact-field-row">
                <div className="contact-field">
                  <label htmlFor="name">Full name</label>
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
              </div>

              <div className="contact-field">
                <label htmlFor="inquiryType">
                  What are you reaching out about?
                </label>
                <select
                  id="inquiryType"
                  name="inquiry-type"
                  required
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                >
                  <option value="">Select one</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Prospective Client">Prospective Client</option>
                  <option value="Referral / Provider Inquiry">
                    Referral / Provider Inquiry
                  </option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="message">Brief message (200 words or less)</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="How can we help?"
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
                  I understand this form is for general inquiries only, is not
                  for emergencies, and I will not include sensitive details or
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
                We aim to respond within a few business days.
              </p>
            </form>
          </div>

          <aside className="contact-next-panel" aria-label="Contact guidance">
            <div className="contact-next-card">
              <p className="contact-form-kicker">What happens next</p>
              <h2>We will point you to the right pathway.</h2>
            <ul>
              <li>
                New client inquiries are reviewed for fit and next steps.
              </li>
              <li>Guided is located in Prince George, British Columbia.</li>
              <li>
                Referrals are typically sent by fax:{" "}
                <span className="contact-hero__nowrap">1-888-897-6501</span>.
              </li>
              <li>
                Careers, training, media, and partnership messages can use
                  this same form.
                </li>
              </ul>
            </div>

            <div className="contact-urgent-card">
              <h3>Urgent support</h3>
              <p>
                This form is not monitored for urgent or crisis situations. If
                you need immediate help, contact local emergency services.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
