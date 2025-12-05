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
          We offer psychedelic assisted therapy for a variety of mental health
          diagnoses. However currently only Ketamine is available without
          requiring special access from Health Canada. Psilocybin and MDMA are
          available for those that qualify for these treatments through
          Canada&apos;s
          <br />
          <br />
          <a
            className="sap-link"
            href="https://www.canada.ca/en/health-canada/services/drugs-health-products/special-access/drugs.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Special Access Program
          </a>
          .
          <br />
          <br />
          We are happy to help you connect to someone that will help you apply.
        </p>

        {/* --- Small service cards / overview ---  */}
        <div className="treatment-grid">
          <div className="treatment-card">
            <h3>Ketamine-Assisted Therapy</h3>
            <p>
              Individual and (when available) group ketamine treatment,
              including preparation and integration, for eligible mental health
              conditions.
            </p>
            <a href="#ketamine" className="btn btn-outline">
              View ketamine details
            </a>
          </div>

          <div className="treatment-card">
            <h3>Psilocybin-Assisted Therapy (via SAP)</h3>
            <p>
              Available through Health Canada&apos;s Special Access Program for
              eligible clients. We can help you navigate the application
              process.
            </p>
            <a href="#psilocybin" className="btn btn-outline">
              View psilocybin details
            </a>
          </div>

          <div className="treatment-card">
            <h3>MDMA-Assisted Therapy (via SAP)</h3>
            <p>
              Offered via Special Access Program for qualifying cases. Please
              contact us for current guidance and eligibility.
            </p>
            <a href="#mdma" className="btn btn-outline">
              View MDMA details
            </a>
          </div>

          <div className="treatment-card">
            <h3>Psychotherapy & Groups</h3>
            <p>
              Couples therapy, group psychodynamic work, individual
              psychodynamic therapy, and general outpatient care, with or
              without psychedelic medicines.
            </p>
            <a href="#psychotherapy" className="btn btn-outline">
              View therapy & group details
            </a>
          </div>
        </div>

        {/* --- Full details (your original accordion HTML, JSX-ified) --- */}
        <div className="accordion">
          {/* KETAMINE */}
          <details className="service" id="ketamine">
            <summary>
              <b>Ketamine-Assisted Therapy</b>
            </summary>
            <div className="service-content">
              <h3>Individual Ketamine Therapy</h3>
              <ul>
                <li>Consultation</li>
                <li>2× Preparation Sessions (Group or Individual)</li>
                <li>3× Ketamine Treatment Sessions</li>
                <li>2× Integration Sessions</li>
                <li>Closing Session</li>
              </ul>
              <p className="price">
                *$2,975{" "}
                <span className="note">
                  (*2,175 with referral from primary care provider)
                </span>
              </p>

              <hr />

              <h3>
                Group Ketamine Therapy<small>(when available)</small>
              </h3>
              <ul>
                <li>Individual Consultation</li>
                <li>2× Group Preparation Sessions</li>
                <li>3× Group Ketamine Treatment Sessions</li>
                <li>2× Group Integration Sessions</li>
                <li>Group Closing Session</li>
              </ul>
              <p className="price">
                *$1,575{" "}
                <span className="note">
                  (*$1,175 with referral from primary care provider)
                </span>
              </p>
            </div>
          </details>

          {/* PSILOCYBIN */}
          <details className="service" id="psilocybin">
            <summary>
              <b>Psilocybin-Assisted Therapy</b>
            </summary>
            <div className="service-content">
              <p>
                Available via Health Canada’s Special Access Program for
                eligible clients. We would be happy to help you navigate the
                application process.
              </p>
            </div>
          </details>

          {/* MDMA */}
          <details className="service" id="mdma">
            <summary>
              <b>MDMA-Assisted Therapy</b>
            </summary>
            <div className="service-content">
              <p>
                Available via Special Access Program for qualifying cases.
                Please contact us for current guidance and eligibility.
              </p>
            </div>
          </details>

          {/* COUPLES */}
          <details className="service" id="couples">
            <summary>
              <b>Couples Therapy</b>
            </summary>
            <div className="service-content">
              <p>
                Attachment-focused, emotionally-oriented psychotherapy for
                couples. Custom treatment plans available.
              </p>
            </div>
          </details>

          {/* GROUP PSYCHODYNAMIC */}
          <details className="service" id="group-psychodynamic">
            <summary>
              <b>Group Psychodynamic Therapy</b>
            </summary>
            <div className="service-content">
              <p>
                Group offerings scheduled periodically. Register your interest
                to be notified of upcoming cohorts.
              </p>
            </div>
          </details>

          {/* INDIVIDUAL PSYCHODYNAMIC */}
          <details className="service" id="individual-psychodynamic">
            <summary>
              <b>Individual Psychodynamic Therapy</b>
            </summary>
            <div className="service-content">
              <p>
                Relational, psychodynamic therapy tailored to your goals.
                Optional integration after medicine sessions.
              </p>
            </div>
          </details>

          {/* CIRCLE OF SECURITY */}
          <details className="service" id="circle-of-security">
            <summary>
              <b>Circle of Security Parenting Group</b>
            </summary>
            <div className="service-content">
              <p>
                Foundations in attachment and connection for caregivers. New
                groups open based on interest.
              </p>
            </div>
          </details>

          {/* GENERAL OUTPATIENT / PSYCHOTHERAPY */}
          <details className="service" id="psychotherapy">
            <summary>
              <b>General Outpatient or Psychotherapy</b>
            </summary>
            <div className="service-content">
              <p>
                If you’re interested in traditional, psychodynamic therapy
                without the use of psychedelics, this is also available with Dr.
                Kennedy or Laura Fisher.
              </p>
            </div>
          </details>
        </div>

        <p>
          <i>
            <b>Please note</b>
          </i>{" "}
          treatment may be partially covered by MSP if you have a doctor’s
          referral. Private health insurance companies may cover parts of your
          treatment. As we practice under the supervision of a psychiatrist we
          are able to offer the actual medicine sessions at a much lower cost
          than other clinics if a family doctor has sent us a referral.
        </p>
      </div>
    </section>
  );
}
