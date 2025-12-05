// src/pages/Contact.jsx
export default function Contact() {
  return (
    <section
      className="contact"
      style={{ "--bg-image": "url('/images/hero_background_web.jpg')" }}
    >
      <div className="section-card">
        <h1>Contact</h1>
        <p className="contact-intro">
          Please share your email and we will reach out.{" "}
          <strong>Do not include any personal health information.</strong>
        </p>

        <form
          id="contact-form"
          action="https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID"
          method="POST"
          noValidate
        >
          {/* Name */}
          <label className="field">
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" required />
          </label>

          {/* Place of residence */}
          <label className="field">
            <span>Place of residence</span>
            <input
              type="text"
              name="location"
              placeholder="City / region (e.g., Prince George, BC)"
            />
          </label>

          {/* Service of interest */}
          <label className="field">
            <span>Service you’re inquiring about</span>
            <select name="service" required>
              <option value="">Please select an option</option>
              <option value="Ketamine-Assisted Therapy">
                Ketamine-Assisted Therapy
              </option>
              <option value="Psilocybin-Assisted Therapy (via SAP)">
                Psilocybin-Assisted Therapy (via Special Access Program)
              </option>
              <option value="MDMA-Assisted Therapy (via SAP)">
                MDMA-Assisted Therapy (via Special Access Program)
              </option>
              <option value="Couples Therapy">Couples Therapy</option>
              <option value="Group Psychodynamic Therapy">
                Group Psychodynamic Therapy
              </option>
              <option value="Individual Psychodynamic Therapy">
                Individual Psychodynamic Therapy
              </option>
              <option value="Circle of Security Parenting Group">
                Circle of Security Parenting Group
              </option>
              <option value="General Outpatient / Psychotherapy">
                General Outpatient / Psychotherapy
              </option>
              <option value="Exploring options / not yet sure">
                I&apos;m exploring options / not yet sure
              </option>
            </select>
          </label>

          {/* Email */}
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </label>

          {/* Honeypot + subject */}
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input
            type="hidden"
            name="_subject"
            value="Guided — Contact Request"
          />

          {/* Consent */}
          <label className="consent">
            <input type="checkbox" required />I agree to be contacted by email
            and will not include personal health information online.
          </label>

          <button type="submit" className="btn">
            Request an email back
          </button>

          {/* You can add a React status message later if you want */}
        </form>

        <p className="contact-privacy">
          We do not store medical information on this website. Appointment
          details are handled securely offline.
        </p>
      </div>
    </section>
  );
}
