import "../services.css";
import { useEffect } from "react";
import salesforceImage from "../../../assets/Automation.jpeg"; // Updated image import
import automationImage from "../../../assets/marketingautomation.png"; // Ensure correct image paths
import analyticsImage from "../../../assets/analytics.png";
import integrationImage from "../../../assets/cloud-integration.jpg"; // New image for integration
import workflowImage from "../../../assets/workflow.avif"; // New image for workflow automation
import optimizationImage from "../../../assets/Security-Integration-DevSecOps.avif"; // New image for optimization
import { useLocation } from "react-router-dom";

export default function Salesforce() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="salesforce-page">
      {/* Salesforce Automation Section */}
      <section className="salesforce-section">
        <div className="background1" style={{ backgroundImage: `url(${salesforceImage})` }}>
          <div className="heading1">
            <h1>Salesforce Automation Services</h1>
            <p style={{ color: "white" }}>
              Elevate your business efficiency with our tailored Salesforce Automation Services, designed to streamline
              workflows, enhance productivity, and drive innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Salesforce Automation</h2>
        <ul>
          <li>
            <strong>Workflow Automation:</strong> Streamline repetitive tasks and enhance efficiency through automated
            workflows.
          </li>
          <li>
            <strong>Real-Time Analytics:</strong> Utilize powerful analytics to gain insights into your processes and
            make informed decisions.
          </li>
          <li>
            <strong>Seamless Integration:</strong> Integrate Salesforce with other tools for a unified automation
            experience.
          </li>
          <li>
            <strong>Custom Solutions:</strong> Develop tailored automation solutions that meet your unique business
            requirements.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          We provide comprehensive Salesforce Automation Services, including process automation, integration solutions,
          and ongoing support to help you maximize the potential of your Salesforce platform.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Automation Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={automationImage} alt="Process Automation" />
            <h5>Process Automation</h5>
            <p>Automate business processes to increase efficiency and reduce operational costs.</p>
          </div>

          <div className="service-item">
            <img src={analyticsImage} alt="Analytics and Reporting" />
            <h5>Analytics and Reporting</h5>
            <p>Gain valuable insights with our advanced reporting and analytics capabilities.</p>
          </div>

          <div className="service-item">
            <img src={integrationImage} alt="Integration Services" />
            <h5>Integration Services</h5>
            <p>Seamlessly integrate Salesforce with your existing systems for improved data flow.</p>
          </div>

          <div className="service-item">
            <img src={workflowImage} alt="Custom Workflows" />
            <h5>Custom Workflows</h5>
            <p>Create custom workflows that match your business processes and increase productivity.</p>
          </div>

          <div className="service-item">
            <img src={optimizationImage} alt="Process Optimization" />
            <h5>Process Optimization</h5>
            <p>Optimize existing processes to ensure maximum efficiency and effectiveness.</p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="why-choose-us-section">
        <h2>Our Approach to Salesforce Automation</h2>
        <div className="approach-container">
          <p>
            Our approach combines industry best practices with tailored strategies to ensure that your Salesforce
            automation efforts align with your business goals. We focus on understanding your unique challenges and
            delivering solutions that drive success.
          </p>
        </div>
      </section>
    </div>
  );
}
