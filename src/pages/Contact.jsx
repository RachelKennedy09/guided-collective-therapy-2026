// src/pages/Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const [isSending, setIsSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [supportInterest, setSupportInterest] = useState("");
  const [careerInterest, setCareerInterest] = useState("");
  const [message, setMessage] = useState("");
  const [hasConsent, setHasConsent] = useState(false);

  const [formErrors, setFormErrors] = useState([]);
  const [showConsentError, setShowConsentError] = useState(false);
  const consentWrapRef = useRef(null);
  const formTopRef = useRef(null);
  const isCareerInquiry = inquiryType === "Careers / training";

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
    setPhone("");
    setContactMethod("");
    setInquiryType("");
    setSupportInterest("");
    setCareerInterest("");
    setMessage("");
    setHasConsent(false);
    setShowConsentError(false);
    setFormErrors([]);
  }

  function validate() {
    const errors = [];

    if (!name.trim()) errors.push("Please enter your name.");
    if (!email.trim()) errors.push("Please enter your email.");
    if (!contactMethod) errors.push("Please choose a preferred contact method.");
    if (!inquiryType) errors.push("Please choose what you are reaching out about.");
    if (isCareerInquiry) {
      if (!careerInterest) errors.push("Please choose the kind of team inquiry.");
    } else if (!supportInterest) {
      errors.push("Please choose the kind of support you are interested in.");
    }
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
                Use this page to request a consultation, ask a general question,
                connect about a referral, or reach out about joining the Guided
                team.
              </p>
            </div>

            <div className="contact-hero__blurb-wrap contact-hero__blurb-wrap--two">
              <p className="contact-hero__note">
                Please keep your message brief and general. If more information
                is needed, we will guide you through the appropriate next step.
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
              <h2>Request a consultation or send an inquiry</h2>
              <p>
                A short, general message is enough. Please do not include
                diagnoses, medication details, trauma history, or identifying
                information about another person.
              </p>
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

              <div className="contact-field-row">
                <div className="contact-field">
                  <label htmlFor="phone">Phone</label>
                  <span>Optional, unless you prefer a phone call.</span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contactMethod">Preferred contact method</label>
                  <select
                    id="contactMethod"
                    name="preferred-contact-method"
                    required
                    value={contactMethod}
                    onChange={(e) => setContactMethod(e.target.value)}
                  >
                    <option value="">Select one</option>
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                    <option value="No preference">No preference</option>
                  </select>
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
                  onChange={(e) => {
                    const nextInquiryType = e.target.value;
                    setInquiryType(nextInquiryType);
                    if (nextInquiryType === "Careers / training") {
                      setSupportInterest("");
                    } else {
                      setCareerInterest("");
                    }
                  }}
                >
                  <option value="">Select one</option>
                  <option value="New client consultation">
                    New client consultation
                  </option>
                  <option value="Current client question">
                    Current client question
                  </option>
                  <option value="Referral / provider inquiry">
                    Referral / provider inquiry
                  </option>
                  <option value="General question">General question</option>
                  <option value="Media / partnership">Media / partnership</option>
                  <option value="Careers / training">Careers / training</option>
                </select>
              </div>

              {isCareerInquiry ? (
                <div className="contact-field">
                  <label htmlFor="careerInterest">
                    What best describes your interest?
                  </label>
                  <select
                    id="careerInterest"
                    name="career-interest"
                    required
                    value={careerInterest}
                    onChange={(e) => setCareerInterest(e.target.value)}
                  >
                    <option value="">Select one</option>
                    <option value="Joining the clinical team">
                      Joining the clinical team
                    </option>
                    <option value="Practicum / training opportunity">
                      Practicum / training opportunity
                    </option>
                    <option value="Administrative or operations role">
                      Administrative or operations role
                    </option>
                    <option value="Collaboration / supervision">
                      Collaboration / supervision
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              ) : (
                <div className="contact-field">
                  <label htmlFor="supportInterest">
                    What kind of support are you interested in?
                  </label>
                  <select
                    id="supportInterest"
                    name="support-interest"
                    required
                    value={supportInterest}
                    onChange={(e) => setSupportInterest(e.target.value)}
                  >
                    <option value="">Select one</option>
                    <option value="Ketamine-assisted therapy">
                      Ketamine-assisted therapy
                    </option>
                    <option value="Psychedelic integration">
                      Psychedelic integration
                    </option>
                    <option value="Trauma therapy">Trauma therapy</option>
                    <option value="Couples / relationship therapy">
                      Couples / relationship therapy
                    </option>
                    <option value="Referral or provider coordination">
                      Referral or provider coordination
                    </option>
                    <option value="Not sure yet">Not sure yet</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              )}

              <div className="contact-field">
                <label htmlFor="message">Brief message</label>
                <span>
                  {isCareerInquiry
                    ? "Tell us briefly about your background, area of interest, and availability."
                    : "Keep this general. We can ask for secure details later if needed."}
                </span>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="A few sentences about what you are hoping for is enough."
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
                New client inquiries begin with a brief conversation about fit
                and next steps.
              </li>
              <li>Guided is located in Prince George, British Columbia.</li>
              <li>Referrals are typically sent by fax: 1-888-897-6501.</li>
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
