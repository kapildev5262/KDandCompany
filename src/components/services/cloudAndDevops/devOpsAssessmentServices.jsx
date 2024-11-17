import "../services.css";
import { useEffect } from "react";
import devopsImage from "../../../assets/Assesment_img.webp"; // Replace with the DevOps background image
import agile from "../../../assets/cloud-agile.jpg"; // Example images for DevOps services
import automation from "../../../assets/cloud1.jpg";
import monitoring from "../../../assets/Cloud-monitering.avif";
import integration from "../../../assets/CI_CD.avif";
import cloud from "../../../assets/cloud-img2.avif";
import collaboration from "../../../assets/team-collab2.avif";
import security from "../../../assets/cloud-security.avif";
import performance from "../../../assets/Performance.avif"; // New image
import feedback from "../../../assets/feedback2.avif"; // New image
import containerization from "../../../assets/cloud_containerization.avif"; // New image
import orchestration from "../../../assets/new-img4.avif"; // New image
import { useLocation } from "react-router-dom";

export default function DevOpsAssessmentServices() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="devops-page">
      {/* DevOps Section */}
      <section className="devops-section">
        <div className="background1" style={{ backgroundImage: `url(${devopsImage})` }}>
          <div className="heading1">
            <h1>DevOps Assessment Services</h1>
            <p style={{ color: "white" }}>
              Our DevOps Assessment Services help organizations streamline their development processes and improve
              collaboration between teams, ensuring faster delivery and higher quality software.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of DevOps</h2>
        <ul>
          <li>
            <strong>Continuous Integration:</strong> Automate the integration of code changes for faster feedback.
          </li>
          <li>
            <strong>Automation:</strong> Streamline manual processes to enhance efficiency and reduce errors.
          </li>
          <li>
            <strong>Monitoring:</strong> Implement real-time monitoring for proactive issue detection and resolution.
          </li>
          <li>
            <strong>Collaboration:</strong> Foster a culture of collaboration between development and operations teams.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our DevOps services are designed to integrate seamlessly with your business processes, ensuring innovation,
          collaboration, and efficiency. From assessment to implementation, we provide comprehensive DevOps solutions
          tailored to your needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={agile} alt="Agile Methodologies" />
            <h5>Agile Methodologies</h5>
            <p>Implement Agile practices to enhance team collaboration and adapt quickly to changes.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Process Automation" />
            <h5>Process Automation</h5>
            <p>Automate repetitive tasks to save time and reduce human error in your development lifecycle.</p>
          </div>

          <div className="service-item">
            <img src={monitoring} alt="Monitoring Solutions" />
            <h5>Monitoring Solutions</h5>
            <p>Set up robust monitoring systems to ensure system health and performance tracking.</p>
          </div>

          <div className="service-item">
            <img src={integration} alt="CI/CD Integration" />
            <h5>CI/CD Integration</h5>
            <p>Implement Continuous Integration and Continuous Deployment for faster release cycles.</p>
          </div>

          <div className="service-item">
            <img src={cloud} alt="Cloud Services" />
            <h5>Cloud Services</h5>
            <p>Leverage cloud technologies to enhance scalability and reduce operational costs.</p>
          </div>

          <div className="service-item">
            <img src={collaboration} alt="Team Collaboration" />
            <h5>Team Collaboration</h5>
            <p>Improve communication and collaboration among teams for better project outcomes.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our DevOps Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={security} alt="Security" />
            <h5>Security</h5>
            <p>
              Implement security best practices throughout the development lifecycle to safeguard your applications.
            </p>
          </div>

          <div className="dna-item">
            <img src={performance} alt="Performance Optimization" />
            <h5>Performance Optimization</h5>
            <p>Continuously optimize system performance to enhance user experience and operational efficiency.</p>
          </div>

          <div className="dna-item">
            <img src={feedback} alt="Feedback Loops" />
            <h5>Feedback Loops</h5>
            <p>Establish continuous feedback loops to improve processes and product quality based on user input.</p>
          </div>

          <div className="dna-item">
            <img src={containerization} alt="Containerization" />
            <h5>Containerization</h5>
            <p>
              Use containerization technologies like Docker to ensure consistency across development and production
              environments.
            </p>
          </div>

          <div className="dna-item">
            <img src={orchestration} alt="Orchestration" />
            <h5>Orchestration</h5>
            <p>Implement orchestration tools to manage complex containerized applications seamlessly.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
