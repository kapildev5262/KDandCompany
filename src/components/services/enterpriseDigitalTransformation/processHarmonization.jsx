import "../services.css";
import { useEffect } from "react";
import processHarmonization from "../../../assets/PH.jpg"; // New image for Process Harmonization
import strategy from "../../../assets/strategy11.avif"; // Example image for Strategy
import workflow from "../../../assets/workflow.avif"; // Example image for Workflow
import integration from "../../../assets/sales-integration.avif"; // Example image for Integration
import optimization from "../../../assets/optimization2.avif"; // Example image for Optimization
import collaboration from "../../../assets/Team-collab.avif"; // Example image for Collaboration
import analysis from "../../../assets/analytics.png"; // Example image for Analysis
import { useLocation } from "react-router-dom";

export default function ProcessHarmonization() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="process-harmonization-page">
      {/* Process Harmonization Section */}
      <section className="harmonization-section">
        <div className="background1" style={{ backgroundImage: `url(${processHarmonization})` }}>
          <div className="heading1">
            <h1>Process Harmonization</h1>
            <p style={{ color: "white" }}>
              Process harmonization optimizes workflows, aligns processes, and ensures consistency across all business
              functions. It enhances efficiency and collaboration, leading to improved performance and customer
              satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Process Harmonization</h2>
        <ul>
          <li>
            <strong>Standardization:</strong> Creating uniform processes to ensure consistency and quality.
          </li>
          <li>
            <strong>Efficiency:</strong> Streamlining workflows to reduce waste and improve productivity.
          </li>
          <li>
            <strong>Integration:</strong> Ensuring all processes work together seamlessly across departments.
          </li>
          <li>
            <strong>Flexibility:</strong> Adapting processes to meet changing market demands and business needs.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our process harmonization services are tailored to streamline your operations, enhance collaboration, and
          improve overall business performance. From analysis to implementation, we provide comprehensive solutions to
          meet your needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={strategy} alt="Strategy Development" />
            <h5>Strategy Development</h5>
            <p>Crafting tailored strategies that align with your business goals and promote process efficiency.</p>
          </div>

          <div className="service-item">
            <img src={workflow} alt="Workflow Optimization" />
            <h5>Workflow Optimization</h5>
            <p>Analyzing and optimizing workflows to enhance productivity and reduce bottlenecks.</p>
          </div>

          <div className="service-item">
            <img src={integration} alt="Systems Integration" />
            <h5>Systems Integration</h5>
            <p>Ensuring seamless integration of processes and systems for improved communication and collaboration.</p>
          </div>

          <div className="service-item">
            <img src={optimization} alt="Performance Optimization" />
            <h5>Performance Optimization</h5>
            <p>Utilizing data-driven approaches to optimize overall business performance and resource utilization.</p>
          </div>

          <div className="service-item">
            <img src={collaboration} alt="Collaboration Tools" />
            <h5>Collaboration Tools</h5>
            <p>Implementing tools that facilitate communication and teamwork across all levels of the organization.</p>
          </div>

          <div className="service-item">
            <img src={analysis} alt="Process Analysis" />
            <h5>Process Analysis</h5>
            <p>Conducting in-depth analysis to identify areas for improvement and implement best practices.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
