import "../services.css";
import { useEffect } from "react";
import salesforceImage from "../../../assets/Cloud.jpeg"; // Salesforce image import
import customization from "../../../assets/custom.jpg"; // Update to your asset paths
import automation from "../../../assets/salesforce-auto.avif";
import analytics from "../../../assets/analytics.png";
import integration from "../../../assets/sales-integration.avif";
import support from "../../../assets/CustomerSupport.avif"; // Ensure you have relevant images
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
            <h1>Salesforce Cloud Services</h1>
            <p style={{ color: "white" }}>
              Unlock the full potential of your business with Salesforce Cloud Services, designed to enhance customer
              engagement, automate processes, and provide deep insights into your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Salesforce Cloud Services</h2>
        <ul>
          <li>
            <strong>Customization:</strong> Tailor Salesforce to fit your unique business needs with advanced
            customization options.
          </li>
          <li>
            <strong>Automation:</strong> Streamline your workflows to improve efficiency and reduce manual tasks.
          </li>
          <li>
            <strong>Analytics:</strong> Gain insights into your business with powerful analytics and reporting tools.
          </li>
          <li>
            <strong>Integration:</strong> Seamlessly integrate Salesforce with various platforms for a unified
            experience.
          </li>
          <li>
            <strong>Support:</strong> Access robust support and resources to maximize your Salesforce investment.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          We provide comprehensive Salesforce development services, including customization, integration, and automation
          solutions to help businesses leverage the full potential of Salesforce Cloud Services.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={customization} alt="Customization" />
            <h5>Customization</h5>
            <p>Develop tailored Salesforce solutions to meet your specific business requirements.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Automation" />
            <h5>Automation</h5>
            <p>Implement automation tools to streamline your business processes and enhance productivity.</p>
          </div>

          <div className="service-item">
            <img src={analytics} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Utilize Salesforce analytics for data-driven decision-making and performance tracking.</p>
          </div>

          <div className="service-item">
            <img src={integration} alt="Integration" />
            <h5>Integration</h5>
            <p>Achieve seamless integration with your existing systems for enhanced functionality.</p>
          </div>

          <div className="service-item">
            <img src={support} alt="Support" />
            <h5>Ongoing Support</h5>
            <p>Benefit from ongoing support and resources to optimize your Salesforce experience.</p>
          </div>
        </div>
      </section>

      {/* Customer Success Section */}
      <section className="why-choose-us-section">
        <h2>Customer Success Stories</h2>
        <p style={{fontSize:"15px", padding:"12px, 10%, 20px, 10%"}}>
          Explore how our Salesforce Cloud Services have transformed businesses, driving efficiency, enhancing customer
          experiences, and delivering measurable results.
        </p>
        {/* You can add testimonials or case studies here */}
      </section>
    </div>
  );
}
