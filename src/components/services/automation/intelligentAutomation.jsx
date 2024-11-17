import "../services.css";
import { useEffect } from "react";
import automationBackground from "../../../assets/IA.jpeg"; // Background image
import innovative from "../../../assets/creative1.jpg"; // Image for Innovative Solutions
import integration from "../../../assets/api-integration.avif"; // Image for Integration Services
import optimization from "../../../assets/optimization.avif"; // Image for Optimization Services
import analytics from "../../../assets/analytics.png"; // Image for Data Analytics
import automationTool from "../../../assets/automation-tool.avif"; // Image for Automation Tools
import deliveryModel from "../../../assets/deliverymodel.png"; // Image for Delivery Model
import support from "../../../assets/CustomerSupport.avif"; // New image for Customer Support
import innovation from "../../../assets/innovation.avif"; // New image for Continuous Innovation
import { useLocation } from "react-router-dom";

export default function IntelligentAutomation() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="automation-page">
      {/* Intelligent Automation Section */}
      <section className="automation-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${automationBackground})` }} // Background image
        >
          <div className="heading1">
            <h1>Intelligent Automation Services</h1>
            <p style={{ color: "white" }}>
              Intelligent automation combines AI, machine learning, and process automation to streamline operations,
              enhance productivity, and drive innovation in your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Intelligent Automation</h2>
        <ul>
          <li>
            <strong>Efficiency:</strong> Automate repetitive tasks to save time and reduce errors.
          </li>
          <li>
            <strong>Scalability:</strong> Easily scale automation solutions to meet growing business needs.
          </li>
          <li>
            <strong>Insights:</strong> Leverage data analytics for informed decision-making.
          </li>
          <li>
            <strong>Flexibility:</strong> Adapt automation solutions to various business processes.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our intelligent automation services are designed to integrate seamlessly with your existing processes,
          ensuring enhanced efficiency, accuracy, and operational agility. From initial strategy to implementation, we
          deliver comprehensive automation solutions tailored to your business needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={innovative} alt="Innovative Solutions" />
            <h5>Innovative Solutions</h5>
            <p>Develop cutting-edge automation solutions that transform how you operate and deliver value.</p>
          </div>

          <div className="service-item">
            <img src={integration} alt="Integration Services" />
            <h5>Integration Services</h5>
            <p>Seamlessly integrate automation tools with your existing systems for enhanced productivity.</p>
          </div>

          <div className="service-item">
            <img src={optimization} alt="Process Optimization" />
            <h5>Process Optimization</h5>
            <p>Analyze and refine business processes to maximize efficiency and minimize costs.</p>
          </div>

          <div className="service-item">
            <img src={analytics} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>Utilize advanced analytics to derive actionable insights and drive data-informed decisions.</p>
          </div>

          <div className="service-item">
            <img src={automationTool} alt="Automation Tools" />
            <h5>Automation Tools</h5>
            <p>
              Implement the latest automation tools and technologies to streamline operations and enhance performance.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Intelligent Automation Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={deliveryModel} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>We offer customized delivery models to ensure the highest quality automation services and support.</p>
          </div>

          {/* Additional DNA items */}
          <div className="dna-item">
            <img src={support} alt="Customer Support" />
            <h5>Customer Support</h5>
            <p>Dedicated support to assist clients in navigating their automation journey and ensuring success.</p>
          </div>

          <div className="dna-item">
            <img src={innovation} alt="Continuous Innovation" />
            <h5>Continuous Innovation</h5>
            <p>We prioritize ongoing innovation to enhance our services and adapt to evolving market needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
