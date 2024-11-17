import "../services.css";

import { useEffect } from "react";
import dashboardImage from "../../../assets/DB_1.jpeg"; // Replace with your dashboard image import
import design from "../../../assets/ui-ux.avif"; // Example image for Design
import development from "../../../assets/Dashboard.jpg"; // Example image for Development
import analytics from "../../../assets/analytics.png"; // Example image for Analytics
import integration from "../../../assets/sales-integration.avif"; // Example image for Integration
import security from "../../../assets/security2.avif"; // Example image for Security
import userExperience from "../../../assets/User-Friendly-Design.avif"; // Example image for User Experience
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="dashboard-page">
      {/* Dashboard Section */}
      <section className="dashboard-section">
        <div className="background1" style={{ backgroundImage: `url(${dashboardImage})` }}>
          <div className="heading1">
            <h1>Dashboard Development Services</h1>
            <p style={{ color: "white" }}>
              We offer comprehensive dashboard development services to visualize your data effectively. Our dashboards
              are designed to provide actionable insights and enhance decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Dashboards</h2>
        <ul>
          <li>
            <strong>Data Visualization:</strong> Transforming complex data into easy-to-understand visual formats.
          </li>
          <li>
            <strong>Real-Time Analytics:</strong> Access up-to-date insights for timely decision-making.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> Intuitive design for seamless user experience.
          </li>
          <li>
            <strong>Customizable Dashboards:</strong> Tailored solutions to fit your specific business needs.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our dashboard development services are designed to empower businesses with real-time data insights, helping
          you monitor performance and drive strategic decisions. We focus on delivering tailored solutions that meet
          your unique requirements.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={design} alt="Dashboard Design" />
            <h5>Dashboard Design</h5>
            <p>Creative and functional dashboard designs that enhance user engagement and usability.</p>
          </div>

          <div className="service-item">
            <img src={development} alt="Dashboard Development" />
            <h5>Dashboard Development</h5>
            <p>Robust development of dashboards using the latest technologies to ensure high performance.</p>
          </div>

          <div className="service-item">
            <img src={analytics} alt="Analytics Integration" />
            <h5>Analytics Integration</h5>
            <p>Seamless integration of analytics tools to provide deeper insights and reporting capabilities.</p>
          </div>

          <div className="service-item">
            <img src={integration} alt="System Integration" />
            <h5>System Integration</h5>
            <p>Integrate dashboards with existing systems for a cohesive user experience.</p>
          </div>

          <div className="service-item">
            <img src={security} alt="Security Features" />
            <h5>Security Features</h5>
            <p>Implementing top-notch security measures to protect sensitive data and ensure compliance.</p>
          </div>

          <div className="service-item">
            <img src={userExperience} alt="User Experience" />
            <h5>User Experience</h5>
            <p>Focusing on user experience to ensure intuitive navigation and accessibility.</p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="approach-section">
        <h2>Our Approach to Dashboard Development</h2>
        <div className="approach-container">
          <p>
            We follow a structured approach to dashboard development, ensuring that we meet your needs and exceed your
            expectations.
          </p>
          <ul>
            <li>Requirement Analysis</li>
            <li>Wireframing and Prototyping</li>
            <li>Development and Testing</li>
            <li>Deployment and Maintenance</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
