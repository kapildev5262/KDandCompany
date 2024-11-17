import "./industries.css";
import { useEffect } from "react";
import energyMiningImage from "../../assets/EnergyMiningBG.webp"; // Background image specific to Energy & Mining
import exploration from "../../assets/Exploration.jpg"; // Image for Exploration & Surveying
import renewableEnergy from "../../assets/RenewableEnergy.jpg"; // Image for Renewable Energy Solutions
import resourceManagement from "../../assets/Management.jpg"; // Image for Resource Management
import safetyTraining from "../../assets/SafetyTraining.jpg"; // Image for Safety Training Programs
import trendsImage from "../../assets/energytrends.jpg"; // Placeholder for industry trends
import { Link, useLocation } from "react-router-dom";

export default function EnergyAndMiningIndustries() {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="energy-mining-industries-page">
      {/* Energy & Mining Section */}
      <section className="industry-section">
        <div className="background1" style={{ backgroundImage: `url(${energyMiningImage})` }}>
          <div className="heading1">
            <h1>Energy & Mining</h1>
            <p style={{ color: "white" }}>
              We provide innovative solutions for the Energy & Mining sectors, focusing on sustainable practices,
              efficient resource utilization, and advanced technologies to drive industry growth.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <h2>Overview</h2>
        <p>
          The Energy & Mining industries are foundational to powering the modern world. Our solutions emphasize
          sustainable resource management, renewable energy integration, and advanced exploration methods to ensure
          responsible growth.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Sustainable Resource Management:</strong> Advanced techniques for efficient and responsible resource
            extraction.
          </li>
          <li>
            <strong>Renewable Energy Integration:</strong> Solutions that promote renewable energy use in mining
            operations.
          </li>
          <li>
            <strong>Safety & Compliance:</strong> Ensuring safety and regulatory compliance in every aspect of
            operation.
          </li>
          <li>
            <strong>Technology-driven Exploration:</strong> Leveraging technology for more accurate and efficient
            surveying.
          </li>
        </ul>
      </section>

      {/* Services Offered Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={exploration} alt="Exploration & Surveying" />
            <h5>Exploration & Surveying</h5>
            <p>Innovative surveying methods and geological exploration for optimal resource discovery.</p>
          </div>
          <div className="service-item">
            <img src={renewableEnergy} alt="Renewable Energy Solutions" />
            <h5>Renewable Energy Solutions</h5>
            <p>Integrating renewable energy sources to power mining operations sustainably.</p>
          </div>
          <div className="service-item">
            <img src={resourceManagement} alt="Resource Management" />
            <h5>Resource Management</h5>
            <p>Efficient resource extraction and processing techniques to maximize output responsibly.</p>
          </div>
          <div className="service-item">
            <img src={safetyTraining} alt="Safety Training Programs" />
            <h5>Safety Training Programs</h5>
            <p>Comprehensive safety and compliance training for all personnel to ensure a safe work environment.</p>
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="trends-section">
        <h2>Industry Trends</h2>
        <div className="trends-content">
          <img src={trendsImage} alt="Industry Trends" className="industriesTrends" />
          <p>
            The Energy & Mining sector is embracing trends like automation, renewable integration, and AI-driven data
            analysis to improve efficiency, reduce environmental impact, and adapt to changing regulatory landscapes.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2>Contact Us</h2>
        <p>If you are interested in our services or have any questions, please reach out to us!</p>
        <Link to={"/contact/"}>
          <button className="btn-primary">Get In Touch</button>
        </Link>
      </section>
    </div>
  );
}
