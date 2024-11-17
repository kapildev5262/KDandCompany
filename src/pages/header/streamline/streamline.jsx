import React from "react";
import challenge from "../../../assets/challenge.png";
import challenge2 from "../../../assets/challenge2.png";
import solution from "../../../assets/case-Solution.png";
import img1 from "../../../assets/img1.png";

const streamline = () => {
  return (
    <>
      <section>
        <div className="header-stream">
          <div className="background_3" style={{ backgroundImage: `url(${img1})` }}>
            <div className="article">
              <div className="article-title">
                <h2>
                  <span className="article-heading">
                    Modernizing business operations for a major South American bank
                  </span>
                </h2>
                <div className="short-title">
                  <p>Accelerating performance and enhancing customer-centricity with experience transformation</p>
                </div>
                <div className="read-time-container">
                  <div className="read-share-container">
                    <span className="read-time"></span>
                    <div className="share-icons">
                      <span>Share</span>
                      <a href="#" className="social-icon fb-icon">
                        f
                      </a>
                      <a href="#" className="social-icon x-icon">
                        X
                      </a>
                      <a href="#" className="social-icon linkedin-icon">
                        in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="highlight-navbar">
          <a href="#highlights" style={{ textAlign: "center" }} className="highlight-item">
            Highlights
          </a>
          <a href="#about-client" style={{ textAlign: "center" }} className="highlight-item">
            About the Client
          </a>
          <a href="#challenge" style={{ textAlign: "center" }} className="highlight-item">
            The Challenge
          </a>
          <a href="#the-solution" style={{ textAlign: "center" }} className="highlight-item">
            The Solution
          </a>
          <a href="#impact" style={{ textAlign: "center" }} className="highlight-item">
            The Impact
          </a>
        </div>

        <div className="case-study-overview" id="highlights">
          <div className="container-highlight">
            <div className="content-highlight">
              <h2>Highlights</h2>
              <p>
                A large multinational bank decided to modernize its end-to-end (E2E) billing platform. The existing
                system was outdated, inefficient and prone to errors, leading to customer dissatisfaction and compliance
                risks. The bank aimed to transform its billing platform to improve accuracy, enhance customer experience
                and ensure compliance with regulatory standards. KDandCompany experts helped the client progress from
                dated technology and processes to eliminating hundreds of spreadsheets and touchpoints while becoming a
                streamlined model of modern efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="case-study-overview" id="about-client">
          <div className="container-highlight">
            <div className="content-highlight">
              <h2>About the client</h2>
              <p>
                The customer is a global financial services company specializing in investment management, servicing and
                administration. The organization has more than $3 trillion in assets under management and more than
                40,000 employees. The top-ranked bank is known for its expertise in asset servicing, investment research
                and trading and providing innovative solutions that help clients optimize their investment operations.
              </p>
            </div>
          </div>
        </div>
        <div className="case-study-challenge" id="challenge">
          <div className="container-highlight">
            <div className="content-highlight">
              <h2>The Challenge</h2>
              <h3>Overcoming billing system challenges</h3>
              <p>
                The client faced outdated and error-prone billing systems, leading to customer dissatisfaction and
                compliance risks. The challenge was leveraging Value Stream Management (VSM) to identify inefficiencies,
                streamline processes and facilitate a smooth transformation of the E2E billing platform.
              </p>
            </div>
          </div>
          <div className="case-study-challenge-img">
            <div className="challenge-img">
              <img src={challenge} alt="" />
            </div>
          </div>
          <div className="case-study-list">
            <div className="list-content">
              <p>
                <strong>Analysis</strong>
              </p>
              <ul>
                <li>
                  <strong>Outdated systems:</strong> The existing billing platform was technologically outdated, causing
                  numerous inefficiencies and operational difficulties
                </li>
                <li>
                  <strong>Inaccuracy:</strong> Frequent errors in billing processes led to incorrect invoices, resulting
                  in customer dissatisfaction and trust issues
                </li>
                <li>
                  <strong>Inefficiency:</strong> The process was slow, with significant delays in billing cycles, partly
                  due to manual data entry and processing
                </li>
                <li>
                  <strong>Compliance risks:</strong> The outdated system struggled to meet regulatory standards, posing
                  risks of non-compliance and potential penalties
                </li>
                <li>
                  <strong>Customer dissatisfactions:</strong> Inaccuracies and delays in billing led to numerous
                  customer complaints, affecting the bank’s reputation
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="case-study-challenge-img2">
          <div className="challenge-img2">
            <img src={challenge2} alt="" />
          </div>
        </div>
        <div className="casestudy-solution" id="the-solution">
          <div className="container-highlight">
            <div className="content-highlight">
              <h2>The Solution</h2>
              <h3>Modernizing billing for enhanced accuracy and compliance</h3>
              <p>
                To address the challenges, the client implemented a modern E2E billing platform that improved accuracy,
                enhanced the customer experience and ensured compliance with regulatory standards.
              </p>
            </div>
          </div>
          <div className="case-study-challenge-img">
            <div className="challenge-img">
              <img src={solution} alt="" />
            </div>
          </div>
          <div className="case-study-list">
            <div className="list-content">
              <ul>
                <li>
                  <strong>Current state mapping:</strong> A multidisciplinary team, including representatives from IT,
                  finance, operations and customer service was assembled to map out the current state of the billing
                  process. This included identifying all steps from data input to invoice generation and customer
                  payment.
                </li>
                <li>
                  <strong>Data collection:</strong>The team collected data on process times, error rates, rework rates
                  and customer feedback to understand pain points and inefficiencies.
                </li>
                <li>
                  <strong>Bottlenecks:</strong>The VSM exercise revealed several bottlenecks, such as manual data entry
                  errors, delays in data processing due to outdated systems and frequent invoice corrections.
                </li>
                <li>
                  <strong>Redundant processes:</strong> Multiple redundant processes were identified, including
                  unnecessary approval steps and repetitive data verification tasks.
                </li>
                <li>
                  <strong>Customer complaints:</strong> Analysis of customer complaints indicated issues with invoice
                  accuracy and delayed billing cycles.
                </li>
                <li>
                  <strong>Optimized process design:</strong>The team designed a future state map that aimed to eliminate
                  identified inefficiencies. This included automating data entry, streamlining approval workflows and
                  integrating real-time data processing.
                </li>
                <li>
                  <strong>Technology integration:</strong>Adoption of advanced technologies such as AI-driven analytics
                  for error detection and predictive maintenance.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="case-study-challenge" id="impact">
          <div className="container-highlight">
            <div className="content-highlight">
              <h2>The Impact</h2>
              <h3>Transforming billing with value stream management</h3>
              <p>
                By applying value stream management under the guidance of HCLTech consulting experts, the bank
                successfully transformed its E2E billing platform and achieved the below results:
              </p>
            </div>
          </div>
          <div className="case-study-list">
            <div className="list-content">
              <p>
                <strong>Analysis</strong>
              </p>
              <ul>
                <li>
                  <strong>Improved efficiency:</strong> Reduced or eliminated approximately 500+ touchpoints per month
                  handling billing data extraction
                </li>
                <li>
                  <strong>Trusted data source adoption:</strong> Migrated the source of Performance & Analytics data
                  from 700+ spreadsheets to a single data source on the billing platform
                </li>
                <li>
                  <strong>Regulatory compliance:</strong> The new system ensured better compliance with financial
                  regulations, reducing the risk of penalties
                </li>
                <li>
                  <strong>Cost savings:</strong>The bank realized substantial cost savings from reduced manual labor and
                  rework, along with lower operational costs due to increased efficiencies
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="third_div">
          <div className="expert_talks">
            <h3>We work on the latest technologies for all our Digital Engineering services</h3>
            <a className="our_expert" href="contact.html">
              Talk To Our Experts
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default streamline;
