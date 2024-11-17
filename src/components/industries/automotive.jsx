import "./industries.css";
import { useEffect } from "react";
import automotiveImage from "../../assets/AutomationBG.webp"; // Background image for Automotive
import vehicleDesign from "../../assets/automotiveDesign.jpg";
import autonomousDriving from "../../assets/Automotive.jpeg";
import performanceAnalytics from "../../assets/Performance1.avif";
import manufacturingAutomation from "../../assets/automation-tool.avif";
import trendsImage from "../../assets/TransportationTrends.jpg"; // Placeholder for trends image
import { Link, useLocation } from "react-router-dom";

export default function AutomotiveIndustry() {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="automotive-industry-page">
      {/* Automotive Section */}
      <section className="automotive-section">
        <div className="background1" style={{ backgroundImage: `url(${automotiveImage})` }}>
          <div className="heading1">
            <h1>Automotive</h1>
            <p style={{ color: "white" }}>
              Our automotive industry solutions drive innovation, efficiency, and safety across the sector. We integrate
              cutting-edge technology and advanced analytics to meet the evolving demands of the automotive world.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <h2>Overview</h2>
        <p>
          The automotive industry is rapidly transforming with advancements in autonomous driving, electric vehicles,
          and data-driven design. Our services support this shift by focusing on innovative solutions for vehicle
          development and manufacturing.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Vehicle Design:</strong> Optimizing design for performance, safety, and sustainability.
          </li>
          <li>
            <strong>Autonomous Technology:</strong> Implementing AI-driven autonomous solutions for safer, smarter
            vehicles.
          </li>
          <li>
            <strong>Advanced Analytics:</strong> Leveraging data to enhance vehicle performance and user experience.
          </li>
          <li>
            <strong>Manufacturing Automation:</strong> Streamlining production processes for greater efficiency.
          </li>
        </ul>
      </section>

      {/* Services Offered Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={vehicleDesign} alt="Vehicle Design" />
            <h5>Vehicle Design</h5>
            <p>Advanced design solutions that prioritize safety, efficiency, and user experience in modern vehicles.</p>
          </div>
          <div className="service-item">
            <img src={autonomousDriving} alt="Autonomous Driving Solutions" />
            <h5>Autonomous Driving Solutions</h5>
            <p>Innovative autonomous technology to create safer, smarter vehicles for the future.</p>
          </div>
          <div className="service-item">
            <img src={performanceAnalytics} alt="Performance Analytics" />
            <h5>Performance Analytics</h5>
            <p>Data-driven insights to improve vehicle diagnostics, design, and customer satisfaction.</p>
          </div>
          <div className="service-item">
            <img src={manufacturingAutomation} alt="Manufacturing Automation" />
            <h5>Manufacturing Automation</h5>
            <p>Automating production lines for efficient, high-quality manufacturing in the automotive industry.</p>
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="trends-section">
        <h2>Industry Trends</h2>
        <div className="trends-content">
          <img src={trendsImage} alt="Automotive Trends" className="industriesTrends" />
          <p>
            The automotive industry is embracing trends like electric vehicles, AI-powered autonomous driving, and
            sustainability. These advancements drive efficiency, safety, and environmental responsibility.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2>Contact Us</h2>
        <p>If you are interested in our automotive services or have any questions, please reach out to us!</p>
        <Link to={"/contact/"}>
          <button className="btn-primary">Get In Touch</button>
        </Link>
      </section>
    </div>
  );
}
