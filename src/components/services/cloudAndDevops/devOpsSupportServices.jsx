import "../services.css";
import { useEffect } from "react";
import devops from "../../../assets/Devops-Support.jpg"; // DevOps image import
import monitoring from "../../../assets/monitor-logging.avif";
import ciCd from "../../../assets/CI_CD.avif";
import cloudMigration from "../../../assets/cloud3.avif";
import security from "../../../assets/cloud-security.avif";
import automation from "../../../assets/new-img.avif";
import reliability from "../../../assets/reliable-img.avif";
import { useLocation } from "react-router-dom";

export default function DevOpsSupport() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="devops-page">
      {/* DevOps Section */}
      <section className="devops-section">
        <div className="background1" style={{ backgroundImage: `url(${devops})` }}>
          <div className="heading1">
            <h1>DevOps Support Services</h1>
            <p style={{ color: "white" }}>
              Our DevOps Support Services are designed to streamline software development and operations processes
              through automation, continuous integration, and deployment strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our DevOps Services</h2>
        <ul>
          <li>
            <strong>Automation:</strong> Automate repetitive tasks to reduce errors and accelerate workflows.
          </li>
          <li>
            <strong>Continuous Integration/Delivery (CI/CD):</strong> Implement seamless integration and deployment
            pipelines for faster delivery.
          </li>
          <li>
            <strong>Monitoring & Logging:</strong> Real-time monitoring and logging to ensure reliability and quick
            issue resolution.
          </li>
          <li>
            <strong>Security & Compliance:</strong> Integrate security checks at every step of the development cycle to
            ensure compliance.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our DevOps support services are aimed at enhancing your development lifecycle, from automating workflows to
          ensuring scalable and secure cloud infrastructure. We offer end-to-end solutions tailored to your business
          needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={ciCd} alt="CI/CD" />
            <h5>CI/CD Pipeline Setup</h5>
            <p>
              We build and automate continuous integration and delivery pipelines for efficient and error-free
              deployments.
            </p>
          </div>

          <div className="service-item">
            <img src={cloudMigration} alt="Cloud Migration" />
            <h5>Cloud Migration</h5>
            <p>Seamlessly migrate your infrastructure to the cloud with minimal disruption and maximum scalability.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Infrastructure Automation" />
            <h5>Infrastructure Automation</h5>
            <p>Automate infrastructure management with tools like Terraform, Ansible, and more.</p>
          </div>

          <div className="service-item">
            <img src={security} alt="Security & Compliance" />
            <h5>Security & Compliance</h5>
            <p>Integrate security best practices across your CI/CD pipeline and ensure compliance at every stage.</p>
          </div>

          <div className="service-item">
            <img src={monitoring} alt="Monitoring & Logging" />
            <h5>Monitoring & Logging</h5>
            <p>Ensure reliability with real-time monitoring, log aggregation, and alerting systems.</p>
          </div>

          <div className="service-item">
            <img src={reliability} alt="Reliability Engineering" />
            <h5>Reliability Engineering</h5>
            <p>Enhance system performance and uptime with Site Reliability Engineering (SRE) best practices.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our DevOps Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={automation} alt="Automation" />
            <h5>Automation</h5>
            <p>
              We ensure that automation is at the core of our DevOps strategies to drive efficiency and speed in your
              processes.
            </p>
          </div>

          <div className="dna-item">
            <img src={monitoring} alt="Monitoring" />
            <h5>Monitoring & Analytics</h5>
            <p>Our advanced monitoring solutions provide deep insights into your infrastructure performance.</p>
          </div>

          <div className="dna-item">
            <img src={ciCd} alt="CI/CD" />
            <h5>Continuous Integration/Delivery</h5>
            <p>We design robust CI/CD pipelines that ensure your applications are delivered quickly and reliably.</p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Security" />
            <h5>Security</h5>
            <p>
              Security is integrated into every aspect of our DevOps processes, ensuring a secure development lifecycle.
            </p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>
              We maintain high standards of reliability through consistent monitoring, automation, and proactive
              support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
