// src/pages/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section className="contact-page">
      <div
        className="contact-hero"
        style={{ "--bg-image": "url('/images/FraserRiver.jpg')" }}
      >
        <div className="contact-hero__inner">
          <div className="contact-hero__panel">
            <h1 className="contact-hero__title">Contact & Referrals</h1>

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
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/contact-success"
              noValidate
            >
              <input type="hidden" name="form-name" value="guided-contact" />

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
                  placeholder="e.g. Jordan Smith"
                  autoComplete="name"
                  required
                />
              </div>

              {/* Pronouns (blank by default + can return to blank) */}
              <div className="contact-field">
                <label htmlFor="pronouns">Pronouns</label>
                <span>Optional</span>
                <select id="pronouns" name="pronouns" defaultValue="">
                  <option value="" aria-label="No pronouns selected">
                    —
                  </option>
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
                  placeholder="e.g. yourname@email.com"
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
                  inputMode="tel"
                  placeholder="e.g. (403) 555-1234"
                  autoComplete="tel"
                />
              </div>

              {/* Subject */}
              <div className="contact-field">
                <label htmlFor="subject">Subject</label>
                <span>
                  Optional — a short note to help us understand your question.
                </span>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="e.g. Booking inquiry, referral question, availability"
                  autoComplete="off"
                />
              </div>

              {/* Message */}
              <div className="contact-field">
                <label htmlFor="message">Message</label>
                <span>
                  Share whatever feels helpful. Please avoid sensitive medical
                  details here.
                </span>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here…"
                />
              </div>

              {/* Consent */}
              <div className="contact-consent">
                <input id="consent" name="consent" type="checkbox" required />
                <label htmlFor="consent">
                  I understand this form is not for emergencies and does not
                  establish an immediate treatment relationship.
                </label>
              </div>

              <button type="submit" className="btn">
                Submit
              </button>

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
