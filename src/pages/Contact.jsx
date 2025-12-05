import React from "react";

export default function Contact() {
  return (
    <section
      className="contact"
      style={{ "--bg-image": "url('/images/hero_background_web.jpg')" }}
    >
      <div className="section-card">
        <h1>Contact & referrals</h1>

        <p className="contact-intro">
          If you’re curious about ketamine-assisted psychotherapy, wondering
          whether you might qualify for psychedelic-assisted treatments through
          Canada’s Special Access Program, or seeking support for a loved one,
          we’d be happy to connect.
        </p>

        <p className="contact-privacy">
          Please avoid sending urgent or highly detailed medical information by
          email. This form is for general inquiries only. We’ll follow up with
          next steps, including how to share referrals or records securely.
        </p>

        <form
          id="contact-form"
          name="guided-contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          {/* Netlify config */}
          <input type="hidden" name="form-name" value="guided-contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="field">
            <label htmlFor="name">Name</label>
            <span>How would you like us to address you?</span>
            <input id="name" name="name" type="text" required />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <span>We’ll only use this to respond to your inquiry.</span>
            <input id="email" name="email" type="email" required />
          </div>

          <div className="field">
            <label htmlFor="reason">Reason for reaching out</label>
            <select id="reason" name="reason" required>
              <option value="">Select an option</option>
              <option value="personal-care">
                I&apos;m seeking care for myself
              </option>
              <option value="loved-one">
                I&apos;m reaching out for a loved one
              </option>
              <option value="professional">
                I&apos;m a clinician / provider
              </option>
              <option value="other">Something else</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="message">Anything else you’d like us to know</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              style={{ resize: "vertical", padding: "0.75rem 0.9rem" }}
            />
          </div>

          <div className="consent">
            <input id="consent" name="consent" type="checkbox" required />
            <label htmlFor="consent">
              I understand this form is not for emergencies and does not
              establish an immediate treatment relationship.
            </label>
          </div>

          <button type="submit" className="btn">
            Submit
          </button>

          <p className="form-status">
            We aim to respond within a few business days.
          </p>
        </form>
      </div>
    </section>
  );
}