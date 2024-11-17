import "../services.css";
import { useEffect } from "react";
import salesforceImage from "../../../assets/S-Integration.jpeg"; // Salesforce image import
import apiIntegration from "../../../assets/api-integration.avif";
import cloudIntegration from "../../../assets/cloud-integration.jpg";
import dataMigration from "../../../assets/Cloud-monitering.avif";
import reporting from "../../../assets/threat.avif";
import support from "../../../assets/CustomerSupport.avif";
import automation from "../../../assets/salesforce-auto.avif";
import customization from "../../../assets/custom.jpg";
import security from "../../../assets/cloud-security.avif";
import analytics from "../../../assets/analytics.png";
import { useLocation } from "react-router-dom";

export default function SalesforceIntegration() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="salesforce-integration-page">
      {/* Salesforce Integration Section */}
      <section className="integration-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${salesforceImage})` }}
        >
          <div className="heading1">
            <h1>Salesforce Integration Services</h1>
            <p style={{ color: "white" }}>
              Seamlessly integrate Salesforce with your existing systems to
              enhance collaboration, improve efficiency, and drive business
              success. Our expertise ensures smooth data flow and process
              automation.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Salesforce Integration</h2>
        <ul>
          <li>
            <strong>API Integration:</strong> Connect Salesforce with various
            applications through robust APIs for streamlined data exchange.
          </li>
          <li>
            <strong>Cloud Integration:</strong> Leverage cloud services for
            enhanced accessibility and collaboration within your teams.
          </li>
          <li>
            <strong>Data Migration:</strong> Safely migrate your data to
            Salesforce without loss, ensuring a seamless transition.
          </li>
          <li>
            <strong>Analytics and Reporting:</strong> Use integrated analytics
            for real-time insights and informed decision-making.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our Salesforce Integration Services include connecting Salesforce
          with your existing systems, data migration, API development, and
          ongoing support to maximize your CRM investment.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Integration Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={apiIntegration} alt="API Integration" />
            <h5>API Integration</h5>
            <p>
              Connect Salesforce with various third-party applications to
              automate workflows and enhance data sharing.
            </p>
          </div>

          <div className="service-item">
            <img src={cloudIntegration} alt="Cloud Integration" />
            <h5>Cloud Integration</h5>
            <p>
              Enable cloud-based applications to work seamlessly with
              Salesforce for better performance and scalability.
            </p>
          </div>

          <div className="service-item">
            <img src={dataMigration} alt="Data Migration" />
            <h5>Data Migration</h5>
            <p>
              Transition your existing data into Salesforce without disruption,
              ensuring data integrity and continuity.
            </p>
          </div>

          <div className="service-item">
            <img src={reporting} alt="Reporting and Analytics" />
            <h5>Reporting & Analytics</h5>
            <p>
              Leverage Salesforce’s analytics capabilities for actionable
              insights and performance tracking.
            </p>
          </div>

          <div className="service-item">
            <img src={support} alt="Ongoing Support" />
            <h5>Ongoing Support</h5>
            <p>
              Receive continuous support and training to optimize your use of
              Salesforce.
            </p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Process Automation" />
            <h5>Process Automation</h5>
            <p>
              Streamline your business processes with automation tools within
              Salesforce.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Integration Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={customization} alt="Customization" />
            <h5>Customization</h5>
            <p>
              Tailor Salesforce solutions to fit your specific business needs
              and workflows.
            </p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Security" />
            <h5>Security</h5>
            <p>
              Ensure data security and compliance with robust measures during
              integration.
            </p>
          </div>

          <div className="dna-item">
            <img src={analytics} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>
              Use advanced analytics for deeper insights and strategic planning.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
