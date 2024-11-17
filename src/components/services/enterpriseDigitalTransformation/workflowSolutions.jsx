import "../services.css";
import { useEffect } from "react";
import workflowBackground from "../../../assets/WFS.jpg"; // New background image for workflow
import collaboration from "../../../assets/Team-collab.avif"; // Import relevant images for workflow services
import efficiency from "../../../assets/Performance3.avif";
import integration from "../../../assets/sales-integration.avif";
import optimization from "../../../assets/optimization2.avif";
import automation from "../../../assets/ml-automation.avif";
import monitoring from "../../../assets/monitor-logging.avif";
import reporting from "../../../assets/Performance1.avif";
import support from "../../../assets/CustomerSupport.avif"; // New support image
import training from "../../../assets/training.avif"; // New training image
import { useLocation } from "react-router-dom";

export default function WorkflowSolutions() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="workflow-solutions-page">
      {/* Workflow Solutions Section */}
      <section className="workflow-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${workflowBackground})` }} // Set the new background image
        >
          <div className="heading1">
            <h1>Workflow Solutions</h1>
            <p style={{ color: "white" }}>
              Our Workflow Solutions streamline processes, enhance collaboration, and boost productivity. We leverage
              innovative technologies to optimize your business workflows, ensuring seamless operations and superior
              outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Workflow Solutions</h2>
        <ul>
          <li>
            <strong>Integration:</strong> Seamless integration with existing systems to improve efficiency.
          </li>
          <li>
            <strong>Automation:</strong> Automate repetitive tasks to save time and reduce errors.
          </li>
          <li>
            <strong>Real-Time Monitoring:</strong> Monitor workflows in real time for better decision-making.
          </li>
          <li>
            <strong>Collaboration:</strong> Enhance team collaboration through centralized communication tools.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our Workflow Solutions provide a comprehensive approach to optimizing your business processes. We focus on
          increasing efficiency, reducing costs, and enhancing overall performance, allowing you to focus on your core
          business objectives.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={collaboration} alt="Collaboration Solutions" />
            <h5>Collaboration Solutions</h5>
            <p>Empower your teams with tools that enhance collaboration and communication across the board.</p>
          </div>

          <div className="service-item">
            <img src={efficiency} alt="Efficiency Improvement" />
            <h5>Efficiency Improvement</h5>
            <p>Implement strategies to optimize processes and improve overall operational efficiency.</p>
          </div>

          <div className="service-item">
            <img src={integration} alt="System Integration" />
            <h5>System Integration</h5>
            <p>Seamlessly integrate various systems and tools to create a unified workflow environment.</p>
          </div>

          <div className="service-item">
            <img src={optimization} alt="Workflow Optimization" />
            <h5>Workflow Optimization</h5>
            <p>Analyze and enhance workflows to maximize productivity and minimize bottlenecks.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Process Automation" />
            <h5>Process Automation</h5>
            <p>Utilize automation tools to streamline tasks and reduce manual effort.</p>
          </div>

          <div className="service-item">
            <img src={monitoring} alt="Performance Monitoring" />
            <h5>Performance Monitoring</h5>
            <p>Keep track of performance metrics to ensure workflows run smoothly and efficiently.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>Core Elements of Our Workflow Solutions</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={reporting} alt="Reporting and Analytics" />
            <h5>Reporting and Analytics</h5>
            <p>
              Advanced reporting capabilities that provide insights into workflow performance and areas for improvement.
            </p>
          </div>

          <div className="dna-item">
            <img src={support} alt="Ongoing Support" />
            <h5>Ongoing Support</h5>
            <p>Dedicated support team to assist with any issues and ensure smooth operations at all times.</p>
          </div>

          <div className="dna-item">
            <img src={training} alt="Training & Development" />
            <h5>Training & Development</h5>
            <p>
              Comprehensive training programs to empower your team with the skills needed to leverage workflow solutions
              effectively.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
