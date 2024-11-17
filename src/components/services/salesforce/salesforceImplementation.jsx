import "../services.css";
import { useEffect } from "react";
import salesforceImage from "../../../assets/S_Implement.jpeg"; // Updated image import for Salesforce
import customization from "../../../assets/custom.jpg"; // Add appropriate image imports
import automation from "../../../assets/salesforce-auto.avif";
import analytics from "../../../assets/analytics.png";
import integration from "../../../assets/sales-integration.avif";
import { useLocation } from "react-router-dom";

export default function Salesforce() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="salesforce-page">
      {/* Salesforce Section */}
      <section className="salesforce-section">
        <div className="background1" style={{ backgroundImage: `url(${salesforceImage})` }}>
          <div className="heading1">
            <h1>Salesforce Implementation Services</h1>
            <p style={{ color: "white" }}>
              Transform your business with our expert Salesforce implementation services. We leverage Salesforce's
              powerful features to enhance customer engagement, drive sales, and optimize business processes.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Salesforce Implementation</h2>
        <ul>
          <li>
            <strong>Customization:</strong> Tailor Salesforce to fit your specific business processes and customer
            needs.
          </li>
          <li>
            <strong>Automation:</strong> Streamline operations with automation tools that enhance productivity and
            reduce errors.
          </li>
          <li>
            <strong>Analytics:</strong> Utilize in-depth analytics for actionable insights and better decision-making.
          </li>
          <li>
            <strong>Integration:</strong> Seamlessly integrate Salesforce with existing systems for a cohesive
            technology ecosystem.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our Salesforce implementation services include comprehensive strategy development, customization, integration,
          and ongoing support to ensure you maximize the platform's potential.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={customization} alt="Salesforce Customization" />
            <h5>Salesforce Customization</h5>
            <p>Customize Salesforce features and functionalities to align with your business goals.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Salesforce Automation" />
            <h5>Salesforce Automation</h5>
            <p>Automate marketing, sales, and customer service processes to enhance efficiency.</p>
          </div>

          <div className="service-item">
            <img src={analytics} alt="Salesforce Analytics" />
            <h5>Salesforce Analytics</h5>
            <p>Implement powerful analytics solutions to track performance and optimize strategies.</p>
          </div>

          <div className="service-item">
            <img src={integration} alt="Salesforce Integration" />
            <h5>Salesforce Integration</h5>
            <p>Connect Salesforce with other applications to unify data and workflows across your organization.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <h2>Why Choose Our Salesforce Services</h2>
        <div>
          <p style={{fontSize:"15px", padding:"12px, 10%, 20px, 10%"}}>
            Our experienced team of Salesforce professionals is dedicated to delivering high-quality implementation
            services. We focus on understanding your unique needs and developing tailored solutions that drive success.
          </p>
        </div>
      </section>
    </div>
  );
}
