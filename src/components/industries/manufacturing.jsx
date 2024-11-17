import "./industries.css";
import { useEffect } from "react";
import manufacturingImage from "../../assets/manufacturingBG.webp"; // Background image
import processImage from "../../assets/manufacturingProcess.avif"; // Example image for process optimization
import automationImage from "../../assets/Automation.avif"; // Example image for automation solutions
import qualityControlImage from "../../assets/QualityControl.jpg"; // Example image for quality control
import trainingImage from "../../assets/learning.jpg"; // Example image for workforce training
import trendsImage from "../../assets/industry-4-0.jpg"; // Placeholder for trends image
import { Link, useLocation } from "react-router-dom";

export default function ManufacturingOfIndustries() {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="manufacturing-industries-page">
      {/* Manufacturing Section */}
      <section className="manufacturing-section">
        <div className="background1" style={{ backgroundImage: `url(${manufacturingImage})` }}>
          <div className="heading1">
            <h1>Manufacturing</h1>
            <p style={{ color: "white" }}>
              The Manufacturing sector focuses on innovative solutions and strategies that enhance production processes,
              quality control, and workforce development. By integrating technology, we aim to optimize operational
              efficiency and product quality.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <h2>Overview</h2>
        <p>
          Manufacturing is vital for economic growth, driving innovation and efficiency. By employing modern techniques
          and technologies, we empower manufacturers to excel in a competitive environment.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Process Optimization:</strong> Streamlined manufacturing processes to enhance productivity.
          </li>
          <li>
            <strong>Technology Integration:</strong> Incorporating advanced technologies for smarter manufacturing.
          </li>
          <li>
            <strong>Quality Assurance:</strong> Ensuring product quality through rigorous testing and standards.
          </li>
          <li>
            <strong>Workforce Training:</strong> Training programs to equip staff with the latest industry skills.
          </li>
        </ul>
      </section>

      {/* Services Offered Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={processImage} alt="Process Optimization" />
            <h5>Process Optimization</h5>
            <p>Enhancing manufacturing efficiency through process analysis and improvements.</p>
          </div>
          <div className="service-item">
            <img src={automationImage} alt="Automation Solutions" />
            <h5>Automation Solutions</h5>
            <p>Implementing automated systems to reduce labor costs and improve production speed.</p>
          </div>
          <div className="service-item">
            <img src={qualityControlImage} alt="Quality Control" />
            <h5>Quality Control</h5>
            <p>Developing comprehensive quality assurance programs to maintain high standards.</p>
          </div>
          <div className="service-item">
            <img src={trainingImage} alt="Workforce Training" />
            <h5>Workforce Training</h5>
            <p>Providing targeted training programs for employees to improve skills and efficiency.</p>
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="trends-section">
        <h2>Industry Trends</h2>
        <div className="trends-content">
          <img src={trendsImage} alt="Industry Trends" className="industriesTrends" />
          <p>
            The manufacturing industry is evolving with trends such as Industry 4.0, the Internet of Things (IoT), and
            sustainable manufacturing practices, all aimed at improving efficiency and reducing environmental impact.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2>Contact Us</h2>
        <p>If you are interested in our manufacturing solutions or have any questions, please reach out to us!</p>
        <Link to={"/contact/"}>
          <button className="btn-primary">Get In Touch</button>
        </Link>
      </section>
    </div>
  );
}
