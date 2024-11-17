import "../services.css";
import { useEffect } from "react";
import devops from "../../../assets/devops3.jpg"; // DevOps image import
import monitoring from "../../../assets/Performance1.avif";
import automation from "../../../assets/new-img.avif";
import integration from "../../../assets/CI_CD.avif";
import logging from "../../../assets/monitor-logging.avif";
import reliability from "../../../assets/reliable-img.avif";
import observability from "../../../assets/cloud-img1.avif";
import { useLocation } from "react-router-dom";

export default function DevopsMonitoring() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="devops-page">
      {/* DevOps Monitoring Section */}
      <section className="devops-section">
        <div className="background1" style={{ backgroundImage: `url(${devops})` }}>
          <div className="heading1">
            <h1>DevOps Monitoring Services</h1>
            <p style={{ color: "white" }}>
              Our DevOps monitoring services provide real-time insights into your applications and infrastructure. With
              automated monitoring, logging, and alerting, you can ensure smooth operation and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of DevOps Monitoring</h2>
        <ul>
          <li>
            <strong>Automation:</strong> Continuous monitoring with automated alerts and responses to critical events.
          </li>
          <li>
            <strong>Scalability:</strong> Our services scale with your infrastructure, ensuring effective monitoring at
            all levels.
          </li>
          <li>
            <strong>Real-Time Insights:</strong> Get instant visibility into system performance with real-time
            dashboards.
          </li>
          <li>
            <strong>Reliability:</strong> Improve uptime and reliability with proactive monitoring and issue resolution.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our comprehensive DevOps monitoring solutions ensure that your applications and infrastructure are always
          running smoothly. From setup to ongoing support, we provide end-to-end monitoring services tailored to your
          needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={monitoring} alt="Monitoring & Alerts" />
            <h5>Monitoring & Alerts</h5>
            <p>
              Real-time monitoring of infrastructure and applications with instant alerts for any performance issues.
            </p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Automation" />
            <h5>Automation</h5>
            <p>Automate repetitive tasks and incident responses with advanced automation tools.</p>
          </div>

          <div className="service-item">
            <img src={integration} alt="Continuous Integration" />
            <h5>Continuous Integration</h5>
            <p>Ensure seamless integration and delivery processes with monitoring of build and deployment pipelines.</p>
          </div>

          <div className="service-item">
            <img src={logging} alt="Logging & Analytics" />
            <h5>Logging & Analytics</h5>
            <p>Track logs across your infrastructure to identify patterns, issues, and insights.</p>
          </div>

          <div className="service-item">
            <img src={observability} alt="Observability" />
            <h5>Observability</h5>
            <p>Gain full observability into system behavior and performance, ensuring quicker root-cause analysis.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our DevOps Monitoring Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Proactive monitoring ensures system reliability and helps prevent downtime.</p>
          </div>

          <div className="dna-item">
            <img src={automation} alt="Automation" />
            <h5>Automation</h5>
            <p>Automate monitoring tasks and incident responses for a seamless DevOps experience.</p>
          </div>

          <div className="dna-item">
            <img src={logging} alt="Logging & Analytics" />
            <h5>Logging & Analytics</h5>
            <p>Analyze logs and metrics to ensure optimal performance and scalability.</p>
          </div>

          <div className="dna-item">
            <img src={observability} alt="Observability" />
            <h5>Observability</h5>
            <p>Full visibility into system performance and user experience ensures faster issue resolution.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
