// src/pages/Treatments.jsx
export default function Treatments() {
  return (
    <section
      id="services"
      className="services"
      style={{ "--bg-image": "url('/images/hero_background_web.jpg')" }}
    >
      <div className="section-card">
        <h1>Guided Services</h1>
        <p>
          We offer psychedelic assisted therapy for a variety of mental health diagnoses. However
          currently only Ketamine is available without requiring special access from Health Canada.
          Psilocybin and MDMA are available for those that qualify for these treatments through Canada&apos;s
          <br />
          <br />
          <a
            className="sap-link"
            href="https://www.canada.ca/en/health-canada/services/drugs-health-products/special-access/drugs.html"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Special Access Program (opens in a new tab)"
          >
            Special Access Program
          </a>
          .
          <br />
          <br />
          We are happy to help you connect to someone that will help you apply.
        </p>

        <div className="accordion">
          {/* All your <details class="service"> blocks go here exactly as in your HTML,
              just change class -> className. I won't paste the whole thing again to keep this shorter. */}
        </div>

        <p>
          <i>
            <b>Please note</b>
          </i>{" "}
          treatment may be partially covered by MSP if you have a doctor&apos;s referral. Private health
          insurance companies may cover parts of your treatment. As we practice under the supervision of a
          psychiatrist we are able to offer the actual medicine sessions at a much lower cost than other
          clinics if a family doctor has sent us a referral.
        </p>
      </div>
    </section>
  );
}
