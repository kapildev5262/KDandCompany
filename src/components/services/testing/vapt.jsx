import "../services.css";

import { useEffect } from "react";
import vulnerabilityAssessmentImage from "../../../assets/VAPT.webp"; // Image for VAPT
import networkSecurity from "../../../assets/cloud-security.avif"; // Replace with actual image paths
import penetrationTesting from "../../../assets/Security-Integration-DevSecOps.avif"; // Replace with actual image paths
import webAppSecurity from "../../../assets/security2.avif"; // Replace with actual image paths
import mobileAppSecurity from "../../../assets/security-img.avif"; // Replace with actual image paths
import cloudSecurity from "../../../assets/cloud-security.avif"; // Replace with actual image paths
import iotSecurity from "../../../assets/iot.avif"; // Replace with actual image paths
import riskManagement from "../../../assets/risk-manage.avif"; // Replace with actual image paths
import compliance from "../../../assets/legal.jpg"; // Replace with actual image paths
import reportAnalysis from "../../../assets/Performance1.avif"; // Replace with actual image paths
import expertConsultation from "../../../assets/consulting.jpg"; // Replace with actual image paths
import latestTools from "../../../assets/automation-tool.avif"; // Replace with actual image paths
import consistentReliability from "../../../assets/reliable1.avif"; // Replace with actual image paths
import { useLocation } from "react-router-dom";

export default function VAPT() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="vapt-page">
      {/* VAPT Overview Section */}
      <section className="vapt-overview-section">
        <div className="background1" style={{ backgroundImage: `url(${vulnerabilityAssessmentImage})` }}>
          <div className="heading1">
            <h1>Vulnerability Assessment & Penetration Testing (VAPT)</h1>
            <p style={{ color: "white" }}>
              VAPT services identify vulnerabilities and security risks within your systems, ensuring robust protection
              against potential cyber threats through comprehensive analysis and real-world attack simulation.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of VAPT</h2>
        <ul>
          <li>
            <strong>Risk Identification:</strong> Thoroughly evaluate potential vulnerabilities across all systems.
          </li>
          <li>
            <strong>Real-World Threat Simulation:</strong> Simulate attacks to test system resilience.
          </li>
          <li>
            <strong>Compliance Assurance:</strong> Ensure alignment with industry standards and regulations.
          </li>
          <li>
            <strong>Detailed Reporting:</strong> Comprehensive reports to facilitate security improvements.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our VAPT services provide in-depth security testing across your entire IT infrastructure, identifying
          weaknesses and fortifying defenses. We leverage cutting-edge techniques to ensure your assets remain secure
          and compliant.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our VAPT Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={networkSecurity} alt="Network Security" />
            <h5>Network Security</h5>
            <p>Evaluate and secure your network against unauthorized access and potential threats.</p>
          </div>

          <div className="service-item">
            <img src={penetrationTesting} alt="Penetration Testing" />
            <h5>Penetration Testing</h5>
            <p>Simulate attacks to identify security gaps within your applications and infrastructure.</p>
          </div>

          <div className="service-item">
            <img src={webAppSecurity} alt="Web Application Security" />
            <h5>Web Application Security</h5>
            <p>Protect your web applications from common vulnerabilities and malicious activities.</p>
          </div>

          <div className="service-item">
            <img src={mobileAppSecurity} alt="Mobile Application Security" />
            <h5>Mobile Application Security</h5>
            <p>Identify and mitigate security risks specific to mobile applications.</p>
          </div>

          <div className="service-item">
            <img src={cloudSecurity} alt="Cloud Security" />
            <h5>Cloud Security</h5>
            <p>Ensure the security of your cloud-based assets against breaches and data loss.</p>
          </div>

          <div className="service-item">
            <img src={iotSecurity} alt="IoT Security" />
            <h5>IoT Security</h5>
            <p>Secure IoT devices against unauthorized access and network vulnerabilities.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our VAPT Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={riskManagement} alt="Risk Management" />
            <h5>Risk Management</h5>
            <p>Proactive identification and mitigation of security risks.</p>
          </div>

          <div className="dna-item">
            <img src={compliance} alt="Compliance" />
            <h5>Compliance</h5>
            <p>Ensure adherence to industry standards and legal requirements.</p>
          </div>

          <div className="dna-item">
            <img src={reportAnalysis} alt="Report Analysis" />
            <h5>Report Analysis</h5>
            <p>Actionable insights based on detailed analysis of vulnerabilities and threats.</p>
          </div>

          <div className="dna-item">
            <img src={expertConsultation} alt="Expert Consultation" />
            <h5>Expert Consultation</h5>
            <p>Guidance from experienced security professionals to enhance your defense strategies.</p>
          </div>

          <div className="dna-item">
            <img src={latestTools} alt="Latest Tools" />
            <h5>Latest Tools</h5>
            <p>Leverage the most advanced tools and methodologies in cybersecurity.</p>
          </div>

          <div className="dna-item">
            <img src={consistentReliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Consistent results that ensure your systems are secure and resilient.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
