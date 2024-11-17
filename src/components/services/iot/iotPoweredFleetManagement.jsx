import "../services.css";

import { useEffect } from "react";
import fleetManagement from "../../../assets/FM_2.jpg"; // IoT Fleet Management image import
import monitoring from "../../../assets/monitor-logging.avif";
import optimization from "../../../assets/optimization2.avif";
import tracking from "../../../assets/assetTracking.avif";
import maintenance from "../../../assets/maintainance.avif";
import analytics from "../../../assets/analytics.png";
import communication from "../../../assets/communication.jpg";
import security from "../../../assets/security2.avif";
import efficiency from "../../../assets/Automation-Efficiency.avif";
import { useLocation } from "react-router-dom";

export default function IOTFleetManagement() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="iot-fleet-management-page">
      {/* IoT Fleet Management Section */}
      <section className="iot-section">
        <div className="background1" style={{ backgroundImage: `url(${fleetManagement})` }}>
          <div className="heading1">
            <h1>IoT-Powered Fleet Management</h1>
            <p style={{ color: "white" }}>
              Harness the power of IoT to optimize fleet operations, ensuring efficiency, security, and real-time
              monitoring of your vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of IoT Fleet Management</h2>
        <ul>
          <li>
            <strong>Real-Time Tracking:</strong> Monitor vehicle locations and statuses in real-time.
          </li>
          <li>
            <strong>Predictive Maintenance:</strong> Utilize IoT data to predict vehicle maintenance needs before they
            become issues.
          </li>
          <li>
            <strong>Enhanced Security:</strong> Advanced security features to protect your assets and data.
          </li>
          <li>
            <strong>Data Analytics:</strong> Analyze vehicle performance and driver behavior for informed
            decision-making.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our IoT fleet management services provide innovative solutions to enhance operational efficiency, reduce
          costs, and improve safety. We deliver tailored strategies and implementations to meet your specific needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={monitoring} alt="Real-Time Monitoring" />
            <h5>Real-Time Monitoring</h5>
            <p>Stay updated with live monitoring of your fleet’s performance and location.</p>
          </div>

          <div className="service-item">
            <img src={optimization} alt="Route Optimization" />
            <h5>Route Optimization</h5>
            <p>Utilize smart algorithms to find the most efficient routes, saving time and fuel.</p>
          </div>

          <div className="service-item">
            <img src={tracking} alt="Vehicle Tracking" />
            <h5>Vehicle Tracking</h5>
            <p>Comprehensive tracking solutions for vehicles to enhance visibility and control.</p>
          </div>

          <div className="service-item">
            <img src={maintenance} alt="Maintenance Alerts" />
            <h5>Maintenance Alerts</h5>
            <p>Automated alerts for maintenance needs based on vehicle performance data.</p>
          </div>

          <div className="service-item">
            <img src={analytics} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>Leverage analytics tools for insights into fleet performance and cost reduction.</p>
          </div>

          <div className="service-item">
            <img src={communication} alt="Driver Communication" />
            <h5>Driver Communication</h5>
            <p>Improve communication with drivers through IoT devices for better coordination.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our IoT Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={efficiency} alt="Efficiency Solutions" />
            <h5>Efficiency Solutions</h5>
            <p>Streamlined operations to boost efficiency and reduce operational costs.</p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Security Solutions" />
            <h5>Security Solutions</h5>
            <p>Robust security measures to protect your fleet and sensitive data.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
