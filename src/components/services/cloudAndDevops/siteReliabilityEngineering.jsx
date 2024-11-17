import "../services.css";
import { useEffect } from "react";
import devopsImage from "../../../assets/site_Engg.jpg"; // DevOps image import
import monitoring from "../../../assets/monitor-logging.avif";
import automation from "../../../assets/new-img.avif";
import scalability from "../../../assets/cloud-img.avif";
import security from "../../../assets/cloud-security.avif";
import observability from "../../../assets/cloud-img1.avif";
import performance from "../../../assets/Performance3.avif";
import reliability from "../../../assets/reliable-img.avif";
import { useLocation } from "react-router-dom";

export default function DevOpsSRE() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="devops-sre-page">
      {/* DevOps SRE Section */}
      <section className="devops-section">
        <div className="background1" style={{ backgroundImage: `url(${devopsImage})` }}>
          <div className="heading1">
            <h1>DevOps & Site Reliability Engineering</h1>
            <p style={{ color: "white" }}>
              DevOps and Site Reliability Engineering (SRE) are essential practices that bridge the gap between software
              development and IT operations, ensuring seamless delivery, stability, and scalability of applications.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of DevOps & SRE</h2>
        <ul>
          <li>
            <strong>Automation:</strong> Automate repetitive tasks for faster deployments and reduced human errors.
          </li>
          <li>
            <strong>Scalability:</strong> Ensure your system can handle increasing loads with automated scaling
            solutions.
          </li>
          <li>
            <strong>Monitoring & Observability:</strong> Continuous monitoring to detect issues and ensure system
            health.
          </li>
          <li>
            <strong>Security:</strong> Implement best security practices to safeguard your systems from vulnerabilities.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our DevOps and SRE services provide end-to-end solutions for enhancing application performance, reliability,
          and scalability. From continuous integration and delivery to infrastructure as code, we deliver efficient and
          secure operations.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={automation} alt="Automation" />
            <h5>Automation</h5>
            <p>
              Implement CI/CD pipelines, automated testing, and deployment processes to streamline development cycles.
            </p>
          </div>

          <div className="service-item">
            <img src={monitoring} alt="Monitoring & Alerts" />
            <h5>Monitoring & Alerts</h5>
            <p>Real-time monitoring and alert systems to ensure your infrastructure runs smoothly and efficiently.</p>
          </div>

          <div className="service-item">
            <img src={scalability} alt="Scalability" />
            <h5>Scalability</h5>
            <p>Ensure your applications can scale dynamically to handle increasing user traffic and workloads.</p>
          </div>

          <div className="service-item">
            <img src={security} alt="Security & Compliance" />
            <h5>Security & Compliance</h5>
            <p>
              Integrate security at every level of the development lifecycle to meet compliance and ensure data
              protection.
            </p>
          </div>

          <div className="service-item">
            <img src={observability} alt="Observability" />
            <h5>Observability</h5>
            <p>
              Gain insights into the performance of your systems through logs, metrics, and traces, enabling quick
              troubleshooting.
            </p>
          </div>

          <div className="service-item">
            <img src={performance} alt="Performance Optimization" />
            <h5>Performance Optimization</h5>
            <p>
              Ensure optimal system performance through proactive measures, including load balancing and resource
              management.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our DevOps & SRE Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={reliability} alt="Reliability Engineering" />
            <h5>Reliability Engineering</h5>
            <p>Focused on ensuring your systems remain highly available and fault-tolerant under all conditions.</p>
          </div>

          <div className="dna-item">
            <img src={automation} alt="Automation at Scale" />
            <h5>Automation at Scale</h5>
            <p>Automate large-scale infrastructure management for efficiency, reducing manual interventions.</p>
          </div>

          <div className="dna-item">
            <img src={observability} alt="Comprehensive Observability" />
            <h5>Comprehensive Observability</h5>
            <p>
              Understand and visualize every part of your system’s operation for enhanced reliability and faster
              incident resolution.
            </p>
          </div>

          <div className="dna-item">
            <img src={scalability} alt="Scalable Infrastructure" />
            <h5>Scalable Infrastructure</h5>
            <p>Build and manage infrastructure that scales with the growth of your business needs.</p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Security-First Approach" />
            <h5>Security-First Approach</h5>
            <p>Integrate security at every level of development and operations to protect your systems and data.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
