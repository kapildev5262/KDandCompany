import "../services.css";
import { useEffect } from "react";
import automationTestingImage from "../../../assets/AutomationBG.webp"; // Replace with your automation testing image path
import functionalTestingImage from "../../../assets/testing1.jpg"; // Updated naming
import regressionTestingImage from "../../../assets/testqa.avif"; // Updated naming
import userAcceptanceTestingImage from "../../../assets/mobile-testing.avif"; // Updated naming
import compatibilityTestingImage from "../../../assets/usability-testing.avif"; // Updated naming
import performanceTestingImage from "../../../assets/Performance2.avif"; // Updated naming
import securityTestingImage from "../../../assets/cloud-security.avif"; // Updated naming
import deliveryModelImage from "../../../assets/deliverymodel.png"; // Updated naming
import analyticsImage from "../../../assets/analytics.png"; // Updated naming
import collaborationImage from "../../../assets/team-collab2.avif"; // Updated naming
import expertiseImage from "../../../assets/expertise.avif"; // Updated naming
import technologyImage from "../../../assets/optimization2.avif"; // Updated naming
import reliabilityImage from "../../../assets/reliable1.avif"; // Updated naming
import { useLocation } from "react-router-dom";

export default function AutomationTesting() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="automation-testing-page">
      {/* Automation Testing Section */}
      <section className="automation-testing-section">
        <div className="background1" style={{ backgroundImage: `url(${automationTestingImage})` }}>
          <div className="heading1">
            <h1>Automation Testing</h1>
            <p style={{ color: "white" }}>
              Automation testing is a vital part of the software development process, aimed at automating repetitive
              tasks to increase efficiency. It utilizes specialized tools to execute test cases, allowing for quicker
              feedback and increased test coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Automation Testing</h2>
        <ul>
          <li>
            <strong>Efficiency:</strong> Automation significantly reduces the time needed for repetitive testing tasks.
          </li>
          <li>
            <strong>Consistency:</strong> Automated tests perform the same steps precisely each time, ensuring
            reliability.
          </li>
          <li>
            <strong>Reusability:</strong> Test scripts can be reused across different projects and testing cycles.
          </li>
          <li>
            <strong>Scalability:</strong> Automation allows for testing a larger number of test cases simultaneously.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our automation testing services provide robust testing strategies that enhance the reliability of your
          software applications. We utilize cutting-edge tools and methodologies to ensure optimal performance and
          functionality.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Testing Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={functionalTestingImage} alt="Functional Testing" />
            <h5>Functional Testing</h5>
            <p>Validate that the software functions as expected based on requirements.</p>
          </div>

          <div className="service-item">
            <img src={regressionTestingImage} alt="Regression Testing" />
            <h5>Regression Testing</h5>
            <p>Ensure that new changes haven’t affected existing functionalities.</p>
          </div>

          <div className="service-item">
            <img src={userAcceptanceTestingImage} alt="User Acceptance Testing" />
            <h5>User Acceptance Testing</h5>
            <p>Involve real users to validate the software against business needs.</p>
          </div>

          <div className="service-item">
            <img src={compatibilityTestingImage} alt="Compatibility Testing" />
            <h5>Compatibility Testing</h5>
            <p>Check software compatibility across different devices and platforms.</p>
          </div>

          <div className="service-item">
            <img src={performanceTestingImage} alt="Performance Testing" />
            <h5>Performance Testing</h5>
            <p>Assess the speed, scalability, and stability of the application under load.</p>
          </div>

          <div className="service-item">
            <img src={securityTestingImage} alt="Security Testing" />
            <h5>Security Testing</h5>
            <p>Identify vulnerabilities in the application to prevent data breaches.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Automation Testing Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={deliveryModelImage} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>Customized delivery models to meet your project timelines and requirements.</p>
          </div>

          <div className="dna-item">
            <img src={analyticsImage} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Comprehensive reporting and analysis of test results for informed decision-making.</p>
          </div>

          <div className="dna-item">
            <img src={collaborationImage} alt="Collaboration" />
            <h5>Collaboration</h5>
            <p>Seamless integration with your development team for improved communication and issue resolution.</p>
          </div>

          <div className="dna-item">
            <img src={expertiseImage} alt="Expertise" />
            <h5>Expertise</h5>
            <p>Our team consists of experienced testers committed to delivering quality results.</p>
          </div>

          <div className="dna-item">
            <img src={technologyImage} alt="Technology" />
            <h5>Technology</h5>
            <p>Utilize the latest testing tools and methodologies for effective results.</p>
          </div>

          <div className="dna-item">
            <img src={reliabilityImage} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Our rigorous testing processes ensure that your software is reliable and ready for market.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
