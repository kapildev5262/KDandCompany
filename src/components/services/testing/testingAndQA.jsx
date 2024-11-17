import "../services.css";

import { useEffect } from "react";
import testingImage from "../../../assets/TestingQA.webp"; // Testing image import
import qaImage from "../../../assets/testqa.avif"; // QA image import
import testAutomation from "../../../assets/automation-tool.avif"; // Test Automation image
import manualTesting from "../../../assets/testing1.jpg"; // Manual Testing image
import performance from "../../../assets/Performance2.avif"; // Performance Testing image
import securityTesting from "../../../assets/cloud-security.avif"; // Security Testing image
import usabilityTesting from "../../../assets/usability-testing.avif"; // Usability Testing image
import reporting from "../../../assets/Performance1.avif"; // Reporting image
import { useLocation } from "react-router-dom";

export default function TestingQA() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="testing-qa-page">
      {/* Testing & QA Section */}
      <section className="testing-section">
        <div className="background1" style={{ backgroundImage: `url(${testingImage})` }}>
          <div className="heading1">
            <h1>Testing & QA</h1>
            <p style={{ color: "white" }}>
              Our Testing and Quality Assurance services ensure that your software is reliable, functional, and meets
              all specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Testing Services</h2>
        <ul>
          <li>
            <strong>Comprehensive Testing:</strong> We cover functional, performance, security, and usability testing to
            ensure software quality.
          </li>
          <li>
            <strong>Automated Testing:</strong> Efficiently run tests using automation to speed up the development
            process and reduce human error.
          </li>
          <li>
            <strong>Manual Testing:</strong> Conduct detailed manual testing for complex scenarios that require human
            judgment.
          </li>
          <li>
            <strong>Performance Testing:</strong> Assess the scalability and reliability of applications under varying
            load conditions.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our Testing & QA services are designed to integrate seamlessly with your development processes, ensuring your
          software meets the highest standards of quality.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Testing Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={qaImage} alt="Quality Assurance" />
            <h5>Quality Assurance</h5>
            <p>Our QA specialists ensure that your product meets all functional requirements and user expectations.</p>
          </div>

          <div className="service-item">
            <img src={manualTesting} alt="Manual Testing" />
            <h5>Manual Testing</h5>
            <p>Perform detailed manual tests to capture edge cases and enhance user experience.</p>
          </div>

          <div className="service-item">
            <img src={testAutomation} alt="Test Automation" />
            <h5>Test Automation</h5>
            <p>Automate repetitive tests to save time and resources while ensuring quality.</p>
          </div>

          <div className="service-item">
            <img src={performance} alt="Performance Testing" />
            <h5>Performance Testing</h5>
            <p>Validate your application's performance and scalability under various load conditions.</p>
          </div>

          <div className="service-item">
            <img src={securityTesting} alt="Security Testing" />
            <h5>Security Testing</h5>
            <p>Identify vulnerabilities and ensure your application is secure against potential threats.</p>
          </div>

          <div className="service-item">
            <img src={usabilityTesting} alt="Usability Testing" />
            <h5>Usability Testing</h5>
            <p>Evaluate the user-friendliness of your application to enhance user satisfaction.</p>
          </div>
        </div>
      </section>

      {/* Reporting and Feedback Section */}
      <section className="dna-section">
        <h2>Reporting and Feedback</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={reporting} alt="Reporting" />
            <h5>Detailed Reporting</h5>
            <p>
              Our comprehensive reports provide insights into the testing process, ensuring transparency and actionable
              feedback.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
