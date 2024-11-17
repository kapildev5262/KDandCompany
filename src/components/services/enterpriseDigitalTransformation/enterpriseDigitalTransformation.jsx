import "../services.css";
import { useEffect } from "react";
import transformation from "../../../assets/EnterpriseDigital.webp"; // Enterprise Digital Transformation image
import analytics from "../../../assets/analytics.png";
import customerExperience from "../../../assets/Feedback1.avif";
import dataManagement from "../../../assets/data-visual.jpg";
import cloudComputing from "../../../assets/cloud4.avif";
import automation from "../../../assets/ml-automation.avif";
import security from "../../../assets/cloud-security.avif";
import innovation from "../../../assets/innovation.avif";
import delivery from "../../../assets/deliverymodel.png";
import { useLocation } from "react-router-dom";

export default function EnterpriseDigitalTransformation() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="enterprise-page">
      {/* Enterprise Digital Transformation Section */}
      <section className="transformation-section">
        <div className="background1" style={{ backgroundImage: `url(${transformation})` }}>
          <div className="heading1">
            <h1>Enterprise Digital Transformation</h1>
            <p style={{ color: "white" }}>
              Drive growth and innovation with comprehensive digital transformation solutions. We enable enterprises to
              modernize processes, optimize operations, and deliver enhanced customer experiences through advanced
              digital technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Digital Transformation</h2>
        <ul>
          <li>
            <strong>Automation:</strong> Streamline workflows and reduce manual processes for greater efficiency.
          </li>
          <li>
            <strong>Data-Driven Insights:</strong> Leverage big data analytics for informed decision-making.
          </li>
          <li>
            <strong>Cloud Computing:</strong> Enable scalable infrastructure to meet dynamic business demands.
          </li>
          <li>
            <strong>Enhanced Security:</strong> Implement robust security frameworks to protect data and systems.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our enterprise digital transformation services include strategic consulting, cutting-edge technology
          integration, and continuous support to help businesses stay competitive in an evolving digital landscape.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={customerExperience} alt="Customer Experience" />
            <h5>Customer Experience</h5>
            <p>Redefine customer engagement through personalized, digitally enabled experiences.</p>
          </div>

          <div className="service-item">
            <img src={dataManagement} alt="Data Management" />
            <h5>Data Management</h5>
            <p>Unlock data value with solutions for data integration, storage, and analytics.</p>
          </div>

          <div className="service-item">
            <img src={cloudComputing} alt="Cloud Computing" />
            <h5>Cloud Computing</h5>
            <p>Leverage the power of the cloud to drive agility and scalability for your business.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Automation" />
            <h5>Automation</h5>
            <p>Automate processes across your organization to increase productivity and reduce costs.</p>
          </div>

          <div className="service-item">
            <img src={security} alt="Cybersecurity" />
            <h5>Cybersecurity</h5>
            <p>Implement secure frameworks and protocols to safeguard digital assets.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Digital Transformation Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>Tailored delivery models to ensure the best quality service and support.</p>
          </div>

          <div className="dna-item">
            <img src={analytics} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Advanced analytics to turn insights into strategic business value.</p>
          </div>

          <div className="dna-item">
            <img src={innovation} alt="Innovation" />
            <h5>Innovation</h5>
            <p>Cutting-edge innovation solutions that keep you ahead of the competition.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
