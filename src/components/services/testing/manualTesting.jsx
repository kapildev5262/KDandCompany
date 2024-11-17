import "../services.css";

import { useEffect } from "react";
import manualTestingImage from "../../../assets/Manual-testing.webp"; // Image for manual testing
import functionalTesting from "../../../assets/testing1.jpg"; // Replace with actual image paths
import regressionTesting from "../../../assets/testqa.avif"; // Replace with actual image paths
import userAcceptanceTesting from "../../../assets/mobile-testing.avif"; // Replace with actual image paths
import compatibilityTesting from "../../../assets/usability-testing.avif"; // Replace with actual image paths
import performanceTesting from "../../../assets/Performance2.avif"; // Replace with actual image paths
import securityTesting from "../../../assets/cloud-security.avif"; // Replace with actual image paths
import deliveryModel from "../../../assets/deliverymodel.png"; // Replace with actual image paths
import analytics from "../../../assets/analytics.png"; // Replace with actual image paths
import collaboration from "../../../assets/team-collab2.avif"; // Replace with actual image paths
import expertise from "../../../assets/expertise.avif"; // Replace with actual image paths
import technology from "../../../assets/optimization2.avif"; // Replace with actual image paths
import reliability from "../../../assets/reliable1.avif"; // Replace with actual image paths
import { useLocation } from "react-router-dom";

export default function ManualTesting() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="manual-testing-page">
      {/* Manual Testing Section */}
      <section className="manual-testing-section">
        <div className="background1" style={{ backgroundImage: `url(${manualTestingImage})` }}>
          <div className="heading1">
            <h1>Manual Testing</h1>
            <p style={{ color: "white" }}>
              Manual testing is a crucial phase in software development, ensuring that applications function correctly
              before deployment. It involves human testers executing test cases without automation tools, allowing for a
              detailed examination of the user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Manual Testing</h2>
        <ul>
          <li>
            <strong>User Experience Focus:</strong> Testers can provide insights into usability and design.
          </li>
          <li>
            <strong>Exploratory Testing:</strong> Allows for creativity in testing that automated scripts might miss.
          </li>
          <li>
            <strong>Immediate Feedback:</strong> Quick identification of issues can lead to faster fixes.
          </li>
          <li>
            <strong>Flexibility:</strong> Test cases can be adapted on the fly based on findings.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our manual testing services provide a thorough examination of your software applications. We focus on
          identifying bugs, enhancing usability, and ensuring a seamless experience for your users. Our team employs
          comprehensive testing strategies tailored to your project requirements.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Testing Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={functionalTesting} alt="Functional Testing" />
            <h5>Functional Testing</h5>
            <p>Validate that the software functions as expected based on requirements.</p>
          </div>

          <div className="service-item">
            <img src={regressionTesting} alt="Regression Testing" />
            <h5>Regression Testing</h5>
            <p>Ensure that new changes haven’t affected existing functionalities.</p>
          </div>

          <div className="service-item">
            <img src={userAcceptanceTesting} alt="User Acceptance Testing" />
            <h5>User Acceptance Testing</h5>
            <p>Involve real users to validate the software against business needs.</p>
          </div>

          <div className="service-item">
            <img src={compatibilityTesting} alt="Compatibility Testing" />
            <h5>Compatibility Testing</h5>
            <p>Check software compatibility across different devices and platforms.</p>
          </div>

          <div className="service-item">
            <img src={performanceTesting} alt="Performance Testing" />
            <h5>Performance Testing</h5>
            <p>Assess the speed, scalability, and stability of the application under load.</p>
          </div>

          <div className="service-item">
            <img src={securityTesting} alt="Security Testing" />
            <h5>Security Testing</h5>
            <p>Identify vulnerabilities in the application to prevent data breaches.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Manual Testing Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={deliveryModel} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>Customized delivery models to meet your project timelines and requirements.</p>
          </div>

          <div className="dna-item">
            <img src={analytics} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Comprehensive reporting and analysis of test results for informed decision-making.</p>
          </div>

          <div className="dna-item">
            <img src={collaboration} alt="Collaboration" />
            <h5>Collaboration</h5>
            <p>Seamless integration with your development team for improved communication and issue resolution.</p>
          </div>

          <div className="dna-item">
            <img src={expertise} alt="Expertise" />
            <h5>Expertise</h5>
            <p>Our team consists of experienced testers committed to delivering quality results.</p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Technology</h5>
            <p>Utilize the latest testing tools and methodologies for effective results.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Our rigorous testing processes ensure that your software is reliable and ready for market.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
