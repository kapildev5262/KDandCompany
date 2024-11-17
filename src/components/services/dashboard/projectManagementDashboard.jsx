import "../services.css";

import { useEffect } from "react";
import projectManagement from "../../../assets/PMD.jpeg"; // Import the new project management image
import creative from "../../../assets/creative.png";
import social from "../../../assets/socialmedia.png";
import listening from "../../../assets/SocialListening.png";
import media from "../../../assets/MediaPlanning.png";
import engine from "../../../assets/seo.png";
import automation from "../../../assets/marketingautomation.png";
import delivery from "../../../assets/deliverymodel.png";
import analytic from "../../../assets/analytics.png";
import marketautomation from "../../../assets/marketingautomation.png";
import creativemaver from "../../../assets/creative.png";
import technology from "../../../assets/insurance.png"; // Update if a more relevant image is available
import reliability from "../../../assets/prediction.png";
import { useLocation } from "react-router-dom";

export default function ProjectManagementDashboard() {
  // Updated component name
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="dashboard-page">
      {/* Project Management Dashboard Section */}
      <section className="dashboard-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${projectManagement})` }} // Corrected background image syntax
        >
          <div className="heading1">
            <h1>Project Management Dashboard Development</h1>
            <p style={{ color: "white" }}>
              Our Project Management Dashboard development services empower teams to manage projects efficiently,
              offering real-time insights, tracking progress, and facilitating collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Dashboard</h2>
        <ul>
          <li>
            <strong>Real-time Collaboration:</strong> Enhance teamwork with live updates and notifications.
          </li>
          <li>
            <strong>Customizable Views:</strong> Tailor the dashboard to fit your specific project needs.
          </li>
          <li>
            <strong>Progress Tracking:</strong> Monitor tasks and milestones effectively.
          </li>
          <li>
            <strong>Data Analytics:</strong> Utilize analytics to make informed decisions based on project data.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our dashboard development services are designed to provide clarity and control over your projects. We focus on
          usability, ensuring that your team can access vital information effortlessly.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative & Design" />
            <h5>Creative & Design</h5>
            <p>Crafting intuitive and visually appealing dashboards that enhance user experience.</p>
          </div>

          <div className="service-item">
            <img src={social} alt="Social Media Marketing" />
            <h5>Integration Services</h5>
            <p>Seamlessly integrate your dashboard with existing tools and platforms.</p>
          </div>

          <div className="service-item">
            <img src={listening} alt="Social Listening" />
            <h5>Analytics & Reporting</h5>
            <p>Implement advanced analytics features to track performance and generate reports.</p>
          </div>

          <div className="service-item">
            <img src={media} alt="Media Planning and Buying" />
            <h5>Customization</h5>
            <p>Tailor the dashboard functionalities to meet your project's unique requirements.</p>
          </div>

          <div className="service-item">
            <img src={engine} alt="Search Engine Optimization" />
            <h5>Support & Maintenance</h5>
            <p>Provide ongoing support and maintenance to ensure your dashboard operates smoothly.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Marketing Automation" />
            <h5>Training & Onboarding</h5>
            <p>Comprehensive training sessions for your team to maximize dashboard usage.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>Customized delivery methods to meet your project management needs.</p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Analytics" />
            <h5>Performance Analytics</h5>
            <p>Use analytics to gauge the success of projects and improve processes.</p>
          </div>

          <div className="dna-item">
            <img src={marketautomation} alt="Marketing Automation" />
            <h5>Automation Solutions</h5>
            <p>Automate routine tasks within the dashboard to enhance productivity.</p>
          </div>

          <div className="dna-item">
            <img src={creativemaver} alt="Creative Mavericks" />
            <h5>User-Centric Design</h5>
            <p>Focus on user experience and design for maximum engagement and usability.</p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Cutting-Edge Technology</h5>
            <p>Leverage the latest technologies to deliver high-performance dashboards.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliable Support</h5>
            <p>Ensure ongoing support for all your project management needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
