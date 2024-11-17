import "../services.css";
import { useEffect } from "react";
import cybersecurity from "../../../assets/Cyber.jpeg"; // Cybersecurity image import
import threatDetection from "../../../assets/threat.avif";
import dataProtection from "../../../assets/data-protection.avif";
import networkSecurity from "../../../assets/security1.avif";
import compliance from "../../../assets/all-good.avif";
import monitoring from "../../../assets/monitor-logging.avif";
import firewall from "../../../assets/security2.avif";
import encryption from "../../../assets/encryption.avif";
import { useLocation } from "react-router-dom";

export default function Cybersecurity() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="cybersecurity-page">
      {/* Cybersecurity Section */}
      <section className="cybersecurity-section">
        <div className="background1" style={{ backgroundImage: `url(${cybersecurity})` }}>
          <div className="heading1">
            <h1>Cybersecurity</h1>
            <p style={{ color: "white" }}>
              Protecting your digital assets through advanced security measures, including threat detection, data
              encryption, and proactive network monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Cybersecurity</h2>
        <ul>
          <li>
            <strong>Threat Detection:</strong> Early detection of potential threats using AI and machine learning.
          </li>
          <li>
            <strong>Data Protection:</strong> Secure sensitive information through encryption and access control.
          </li>
          <li>
            <strong>Network Security:</strong> Safeguard your network from cyberattacks and vulnerabilities.
          </li>
          <li>
            <strong>Compliance:</strong> Ensure adherence to industry regulations and standards.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our cybersecurity services provide comprehensive protection against a wide range of threats, ensuring your
          business operates securely. We cover everything from risk assessments to implementation of advanced security
          solutions.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={threatDetection} alt="Threat Detection" />
            <h5>Threat Detection</h5>
            <p>Monitor and identify cyber threats in real-time to prevent potential breaches.</p>
          </div>

          <div className="service-item">
            <img src={dataProtection} alt="Data Protection" />
            <h5>Data Protection</h5>
            <p>Secure your organization's sensitive data through encryption and secure access protocols.</p>
          </div>

          <div className="service-item">
            <img src={networkSecurity} alt="Network Security" />
            <h5>Network Security</h5>
            <p>Implement firewalls, VPNs, and intrusion detection systems to protect your network infrastructure.</p>
          </div>

          <div className="service-item">
            <img src={compliance} alt="Compliance" />
            <h5>Compliance</h5>
            <p>Ensure compliance with data protection laws such as GDPR, HIPAA, and more.</p>
          </div>

          <div className="service-item">
            <img src={monitoring} alt="Continuous Monitoring" />
            <h5>Continuous Monitoring</h5>
            <p>Provide 24/7 monitoring of systems to detect and respond to potential security incidents.</p>
          </div>

          <div className="service-item">
            <img src={firewall} alt="Firewall Protection" />
            <h5>Firewall Protection</h5>
            <p>Protect your systems with advanced firewall and intrusion prevention systems.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Cybersecurity Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={encryption} alt="Data Encryption" />
            <h5>Data Encryption</h5>
            <p>Ensure data confidentiality through industry-standard encryption techniques.</p>
          </div>

          <div className="dna-item">
            <img src={monitoring} alt="Monitoring" />
            <h5>Monitoring & Response</h5>
            <p>Continuous monitoring and immediate response to security threats to minimize risks.</p>
          </div>

          <div className="dna-item">
            <img src={firewall} alt="Firewall Security" />
            <h5>Firewall Security</h5>
            <p>Enhance your perimeter defense with state-of-the-art firewall technologies.</p>
          </div>

          <div className="dna-item">
            <img src={compliance} alt="Compliance Services" />
            <h5>Compliance Services</h5>
            <p>Stay compliant with the latest cybersecurity standards and regulations.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
