// src/pages/Contact.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [isSending, setIsSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Local dev: Netlify Forms won't receive localhost submissions
    if (import.meta.env.DEV) {
      console.info("[DEV] Skipping Netlify Forms POST");
      form.reset();
      navigate("/contact-success");
      return;
    }

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!res.ok) throw new Error("Something went wrong. Please try again.");

      form.reset();
      navigate("/contact-success");
    } catch (err) {
      setErrorMsg(err?.message || "Failed to send. Please try again.");
      setIsSending(false);
    }
  }

  return (
    <section className="contact-page">
      <div
        className="contact-hero"
        style={{ "--bg-image": "url('/images/ConnaughtHillRoadPG.jpg')" }}
      >
        <div className="contact-hero__inner">
          <div className="contact-hero__panel">
            <h1 className="contact-hero__title">Contact</h1>

            <p className="contact-hero__blurb">
              If you’re curious about ketamine-assisted psychotherapy, wondering
              whether you might qualify for psychedelic-assisted treatments
              through Canada’s Special Access Program, or seeking support for a
              loved one, we’d be happy to connect.
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
              data-netlify-recaptcha="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Required Netlify hidden field */}
              <input type="hidden" name="form-name" value="guided-contact" />

              {/* Honeypot */}
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

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

              {/* Phone */}
              <div className="contact-field">
                <label htmlFor="phone">Phone number</label>
                <span>Optional — if you’d prefer a phone call.</span>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                />
              </div>

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
