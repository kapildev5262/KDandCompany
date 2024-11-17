import "../services.css";
import { useEffect } from "react";
import devopsImage from "../../../assets/cloud_devops.webp"; // Replace with appropriate DevOps image
import automation from "../../../assets/new-img.avif"; // Replace or add new images as needed
import cloudInfrastructure from "../../../assets/cloud.avif";
import ciCd from "../../../assets/CI_CD.avif";
import monitoring from "../../../assets/Performance1.avif";
import security from "../../../assets/cloud-security.avif";
import performance from "../../../assets/Performance.avif";
import collaboration from "../../../assets/team-collab2.avif";
import testing from "../../../assets/mob-reliable.avif";
import reliability from "../../../assets/reliable-img.avif"; // You can keep this for consistency

import { useLocation } from "react-router-dom";

export default function DevOpsAutomation() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="devops-page">
      {/* DevOps Section */}
      <section className="devops-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${devopsImage})` }}
        >
          <div className="heading1">
            <h1>DevOps Automation Services</h1>
            <p style={{color:"white"}}>
              Streamline your software development and operations processes
              with our comprehensive DevOps automation services. Our solutions
              enhance collaboration, increase efficiency, and ensure faster
              delivery of high-quality software.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of DevOps Automation</h2>
        <ul>
          <li>
            <strong>Continuous Integration & Delivery:</strong> Automate your build, test, and deployment processes.
          </li>
          <li>
            <strong>Infrastructure as Code:</strong> Manage your infrastructure through code to ensure consistency and scalability.
          </li>
          <li>
            <strong>Monitoring and Logging:</strong> Get real-time insights into your applications and infrastructure.
          </li>
          <li>
            <strong>Security Integration:</strong> Embed security practices throughout the development lifecycle.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our DevOps automation services are designed to improve collaboration and efficiency in your software development processes. We help organizations adopt a DevOps culture that fosters innovation and accelerates time-to-market.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={automation} alt="Automation" />
            <h5>Automation</h5>
            <p>
              Implement automated workflows for testing, deployment, and infrastructure management.
            </p>
          </div>

          <div className="service-item">
            <img src={ciCd} alt="CI/CD Pipeline" />
            <h5>CI/CD Pipeline</h5>
            <p>
              Build and manage continuous integration and continuous deployment pipelines for rapid software delivery.
            </p>
          </div>

          <div className="service-item">
            <img src={cloudInfrastructure} alt="Cloud Infrastructure" />
            <h5>Cloud Infrastructure</h5>
            <p>
              Design and manage scalable cloud infrastructures to support your applications.
            </p>
          </div>

          <div className="service-item">
            <img src={monitoring} alt="Monitoring" />
            <h5>Monitoring & Logging</h5>
            <p>
              Monitor application performance and log data for troubleshooting and optimization.
            </p>
          </div>

          <div className="service-item">
            <img src={security} alt="Security" />
            <h5>Security Integration</h5>
            <p>
              Integrate security measures into your DevOps processes for enhanced application security.
            </p>
          </div>

          <div className="service-item">
            <img src={performance} alt="Performance Optimization" />
            <h5>Performance Optimization</h5>
            <p>
              Optimize your applications for speed and efficiency through best practices in DevOps.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our DevOps Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={collaboration} alt="Collaboration" />
            <h5>Collaboration</h5>
            <p>
              Foster collaboration between development and operations teams for better outcomes.
            </p>
          </div>

          <div className="dna-item">
            <img src={testing} alt="Testing" />
            <h5>Automated Testing</h5>
            <p>
              Ensure high-quality software through automated testing strategies.
            </p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>
              Build reliable applications with automated recovery and monitoring systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
