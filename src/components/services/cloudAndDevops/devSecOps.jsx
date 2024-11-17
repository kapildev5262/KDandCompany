import "../services.css";
import { useEffect } from "react";
import devsecopsBanner from "../../../assets/Devsecops.webp"; // New banner for DevSecOps
import security from "../../../assets/cloud-security.avif"; // Security-focused service image
import ciCd from "../../../assets/CI_CD.avif"; // CI/CD service image
import monitoring from "../../../assets/monitor-logging.avif"; // Monitoring service image
import automation from "../../../assets/new-img.avif"; // Automation service image
import compliance from "../../../assets/new-img3.avif"; // Compliance service image
import vulnerability from "../../../assets/cloud-img5.avif"; // Vulnerability management service image
import { useLocation } from "react-router-dom";

export default function DevSecOps() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="devsecops-page">
      {/* DevSecOps Section */}
      <section className="devsecops-section">
        <div className="background1" style={{ backgroundImage: `url(${devsecopsBanner})` }}>
          <div className="heading1">
            <h1>DevSecOps</h1>
            <p style={{ color: "white" }}>
              DevSecOps integrates security practices within the DevOps process, ensuring secure, compliant, and
              resilient systems from the start. Our approach incorporates automation, continuous monitoring, and
              collaborative development, ensuring security is built into every stage of the software lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of DevSecOps</h2>
        <ul>
          <li>
            <strong>Security Automation:</strong> Automate security checks at every stage of development.
          </li>
          <li>
            <strong>Continuous Integration & Delivery:</strong> Seamlessly integrate security into your CI/CD pipelines.
          </li>
          <li>
            <strong>Compliance Monitoring:</strong> Ensure compliance with industry standards and regulations.
          </li>
          <li>
            <strong>Real-Time Monitoring:</strong> Proactive monitoring and response to security threats and
            vulnerabilities.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our DevSecOps services are designed to embed security into the entire software lifecycle, ensuring robust
          protection without sacrificing speed or agility. We help you move beyond traditional security models with
          comprehensive solutions that are built to scale.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={security} alt="Security Integration" />
            <h5>Security Integration</h5>
            <p>
              Integrate security best practices within your development and deployment pipelines for enhanced
              protection.
            </p>
          </div>

          <div className="service-item">
            <img src={ciCd} alt="CI/CD Pipeline Security" />
            <h5>CI/CD Pipeline Security</h5>
            <p>
              Ensure your continuous integration and delivery processes are secure by embedding automated security
              checks.
            </p>
          </div>

          <div className="service-item">
            <img src={monitoring} alt="Continuous Monitoring" />
            <h5>Continuous Monitoring</h5>
            <p>Real-time monitoring for threats and vulnerabilities to respond proactively and minimize risks.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Automation and Orchestration" />
            <h5>Automation and Orchestration</h5>
            <p>Streamline security processes and incident response with automation and orchestration tools.</p>
          </div>

          <div className="service-item">
            <img src={compliance} alt="Compliance and Governance" />
            <h5>Compliance and Governance</h5>
            <p>Maintain industry compliance with ongoing governance and regulatory monitoring.</p>
          </div>

          <div className="service-item">
            <img src={vulnerability} alt="Vulnerability Management" />
            <h5>Vulnerability Management</h5>
            <p>Identify and address vulnerabilities in your system before they can be exploited.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our DevSecOps Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={ciCd} alt="CI/CD Pipeline" />
            <h5>CI/CD Pipeline</h5>
            <p>Secure integration and delivery pipelines designed to protect your code and infrastructure.</p>
          </div>

          <div className="dna-item">
            <img src={monitoring} alt="Threat Monitoring" />
            <h5>Threat Monitoring</h5>
            <p>Continuous monitoring to detect and respond to security threats in real time.</p>
          </div>

          <div className="dna-item">
            <img src={automation} alt="Security Automation" />
            <h5>Security Automation</h5>
            <p>Automate security tasks such as patch management, testing, and monitoring for maximum efficiency.</p>
          </div>

          <div className="dna-item">
            <img src={compliance} alt="Regulatory Compliance" />
            <h5>Regulatory Compliance</h5>
            <p>Meet industry standards and regulations with ease through continuous compliance monitoring.</p>
          </div>

          <div className="dna-item">
            <img src={vulnerability} alt="Vulnerability Scanning" />
            <h5>Vulnerability Scanning</h5>
            <p>Proactively scan and resolve security vulnerabilities to protect your systems.</p>
          </div>

          <div className="dna-item">
            <img src={security} alt="DevSecOps Governance" />
            <h5>DevSecOps Governance</h5>
            <p>Implement governance policies to ensure secure development practices across your organization.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
