import "../services.css";
import { useEffect } from "react";
import iot from "../../../assets/IOTBG.webp"; // IoT image import
import dataIntegration from "../../../assets/api-integration.avif";
import deviceManagement from "../../../assets/device-management.jpg";
import analytics from "../../../assets/analytics.png";
import monitoring from "../../../assets/monitor-logging.avif";
import automation from "../../../assets/ml-automation.avif";
import security from "../../../assets/cloud-security.avif";
import { useLocation } from "react-router-dom";

export default function IoTServices() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="iot-page">
      {/* IoT Services Section */}
      <section className="iot-section">
        <div className="background1" style={{ backgroundImage: `url(${iot})` }}>
          <div className="heading1">
            <h1>IoT Development Services</h1>
            <p style={{ color: "white" }}>
              The Internet of Things (IoT) connects devices across various networks, enabling smarter operations,
              monitoring, and insights. IoT technology helps transform data into actionable intelligence, improving
              efficiency and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of IoT</h2>
        <ul>
          <li>
            <strong>Connectivity:</strong> Seamless device communication across various networks.
          </li>
          <li>
            <strong>Data Collection & Analysis:</strong> Real-time data gathering and analytics for actionable insights.
          </li>
          <li>
            <strong>Automation:</strong> Intelligent automation of tasks, reducing manual intervention.
          </li>
          <li>
            <strong>Security:</strong> Secure data exchange protocols to ensure privacy and prevent unauthorized access.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our IoT services are designed to enable connected solutions, enhance operational efficiencies, and support
          data-driven decision-making across various industries.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our IoT Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={dataIntegration} alt="Data Integration" />
            <h5>Data Integration</h5>
            <p>Integrate data from multiple IoT devices for comprehensive analysis and insight.</p>
          </div>

          <div className="service-item">
            <img src={deviceManagement} alt="Device Management" />
            <h5>Device Management</h5>
            <p>Manage, monitor, and update IoT devices efficiently across your network.</p>
          </div>

          <div className="service-item">
            <img src={analytics} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>Leverage IoT data analytics to gain actionable insights and drive business growth.</p>
          </div>

          <div className="service-item">
            <img src={monitoring} alt="Remote Monitoring" />
            <h5>Remote Monitoring</h5>
            <p>Enable real-time remote monitoring of systems for predictive maintenance and reduced downtime.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Automation Solutions" />
            <h5>Automation Solutions</h5>
            <p>Streamline processes with intelligent automation, enhancing productivity.</p>
          </div>

          <div className="service-item">
            <img src={security} alt="IoT Security" />
            <h5>IoT Security</h5>
            <p>Ensure secure IoT deployments with robust security solutions and data protection.</p>
          </div>
        </div>
      </section>

      {/* Core Aspects Section */}
      <section className="dna-section">
        <h2>Core Aspects of Our IoT Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={automation} alt="Automation" />
            <h5>Automation</h5>
            <p>Advanced automation solutions tailored for various industries.</p>
          </div>

          <div className="dna-item">
            <img src={analytics} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Real-time and historical data analytics for in-depth insights.</p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Security" />
            <h5>Security</h5>
            <p>Cutting-edge security protocols to safeguard data and devices.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
