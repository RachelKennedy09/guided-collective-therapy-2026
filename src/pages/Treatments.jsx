import React from "react";

export default function Treatments() {
  return (
    <section
      className="services"
      style={{ "--bg-image": "url('/images/hero_background_web.jpg')" }}
    >
      <div className="section-card">
        <h1>Treatments & services</h1>
        <p>
          Every person’s path is different. Below is a general outline of how we
          work with ketamine and related therapies. Final plans are always
          tailored to your needs, medical history, and support system.
        </p>

        <div className="accordion">
          <details className="service" open>
            <summary>Ketamine-assisted psychotherapy (KAP)</summary>
            <div className="service-content">
              <h3>Who this may help</h3>
              <ul>
                <li>Depression that has not fully responded to medication</li>
                <li>PTSD and complex trauma</li>
                <li>Anxiety and mood disorders</li>
              </ul>

              <h3>What to expect</h3>
              <ul>
                <li>Initial psychiatric assessment and safety screening</li>
                <li>Preparation sessions with your therapist</li>
                <li>
                  Medicine sessions in a calm, medically supervised setting
                </li>
                <li>Integration sessions to help you apply insights</li>
              </ul>

              <p className="price">
                Fees depend on session length and whether MSP / insurance is
                involved. We will review this with you before starting.
              </p>
            </div>
          </details>

          <details className="service">
            <summary>Preparation & integration therapy</summary>
            <div className="service-content">
              <p>
                These sessions focus on resourcing, nervous-system regulation,
                and meaning-making before and after medicine work — whether
                you’re working with us or another clinic.
              </p>

              <h3>Examples</h3>
              <ul>
                <li>Clarifying intentions and boundaries</li>
                <li>Planning support for the days after treatment</li>
                <li>
                  Working with imagery, themes, or emotions that arise in
                  sessions
                </li>
              </ul>
            </div>
          </details>

          <details className="service">
            <summary>Consultation, referrals & SAP support</summary>
            <div className="service-content">
              <p>
                For some therapies, like psilocybin or MDMA, access may be
                through Health Canada’s Special Access Program (SAP). We can
                help you understand whether this is appropriate and connect you
                with providers who offer those treatments.
              </p>

              <p>
                Learn more about SAP on Health Canada’s website or reach out to
                us if you’d like support navigating options.
              </p>

              <a
                href="https://www.canada.ca/en/health-canada/services/drugs-medication/special-access/drugs.html"
                target="_blank"
                rel="noreferrer"
                className="sap-link"
              >
                Read about the Special Access Program
              </a>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
