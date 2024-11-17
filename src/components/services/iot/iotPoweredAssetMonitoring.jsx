import "../services.css";

import { useEffect } from "react";
import iotBackground from "../../../assets/IOT-assetMonitor.webp"; // Main IoT background image
import sensors from "../../../assets/iot3.jpg"; // Image representing sensors
import realTimeMonitoring from "../../../assets/assetTracking.avif"; // Image for real-time monitoring
import analytics from "../../../assets/ml-automation1.avif"; // Image for analytics services
import predictiveMaintenance from "../../../assets/predictive_maintenance.avif"; // Image for predictive maintenance
import security from "../../../assets/cloud-security.avif"; // Image for security
import cloudIntegration from "../../../assets/sales-integration.avif"; // Image for cloud integration
import { useLocation } from "react-router-dom";

export default function IOTAssetMonitoring() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="iot-page">
      {/* IoT Asset Management Section */}
      <section className="iot-section">
        <div className="background1" style={{ backgroundImage: `url(${iotBackground})` }}>
          <div className="heading1">
            <h1>IoT-Powered Asset Monitoring</h1>
            <p style={{ color: "white" }}>
              Our IoT Asset Monitoring solutions enable real-time tracking, predictive maintenance, and enhanced asset
              reliability. Leveraging IoT, we ensure your assets are continuously monitored for optimal performance and
              security.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of IoT Asset Monitoring</h2>
        <ul>
          <li>
            <strong>Real-Time Tracking:</strong> Monitor asset conditions and status continuously for instant insights.
          </li>
          <li>
            <strong>Predictive Maintenance:</strong> Prevent downtime by predicting maintenance needs before issues
            arise.
          </li>
          <li>
            <strong>Data Analytics:</strong> Leverage data analytics for informed decision-making and performance
            optimization.
          </li>
          <li>
            <strong>Enhanced Security:</strong> Secure IoT network to prevent unauthorized access and data breaches.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our IoT Asset Monitoring services provide end-to-end solutions, including sensor integration, cloud data
          storage, and advanced analytics. We help you achieve operational excellence through real-time visibility and
          predictive insights.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={sensors} alt="Sensor Integration" />
            <h5>Sensor Integration</h5>
            <p>Integrate IoT sensors for seamless data collection from assets, ensuring accurate monitoring.</p>
          </div>

          <div className="service-item">
            <img src={realTimeMonitoring} alt="Real-Time Monitoring" />
            <h5>Real-Time Monitoring</h5>
            <p>Enable continuous monitoring to instantly detect and respond to any asset irregularities.</p>
          </div>

          <div className="service-item">
            <img src={predictiveMaintenance} alt="Predictive Maintenance" />
            <h5>Predictive Maintenance</h5>
            <p>Analyze data to predict and schedule maintenance, reducing downtime and extending asset life.</p>
          </div>

          <div className="service-item">
            <img src={analytics} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>Advanced analytics for detailed insights, helping you make informed decisions based on asset data.</p>
          </div>

          <div className="service-item">
            <img src={security} alt="Security and Compliance" />
            <h5>Security and Compliance</h5>
            <p>Safeguard your IoT network with enhanced security protocols to ensure compliance and data protection.</p>
          </div>

          <div className="service-item">
            <img src={cloudIntegration} alt="Cloud Integration" />
            <h5>Cloud Integration</h5>
            <p>Store and analyze asset data in the cloud, enabling scalable storage and accessible insights.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our IoT Asset Monitoring Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={realTimeMonitoring} alt="Real-Time Monitoring" />
            <h5>Real-Time Monitoring</h5>
            <p>Achieve constant asset visibility with our real-time monitoring solutions.</p>
          </div>

          <div className="dna-item">
            <img src={analytics} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>Our IoT solutions include analytics to transform raw data into actionable insights.</p>
          </div>

          <div className="dna-item">
            <img src={predictiveMaintenance} alt="Predictive Maintenance" />
            <h5>Predictive Maintenance</h5>
            <p>Reduce operational interruptions with predictive insights for asset maintenance.</p>
          </div>

          <div className="dna-item">
            <img src={sensors} alt="Advanced Sensor Technology" />
            <h5>Advanced Sensor Technology</h5>
            <p>State-of-the-art sensors that capture precise data for optimized asset monitoring.</p>
          </div>

          <div className="dna-item">
            <img src={cloudIntegration} alt="Cloud Integration" />
            <h5>Cloud Integration</h5>
            <p>Seamlessly integrate with cloud platforms for enhanced data storage and analysis.</p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Enhanced Security" />
            <h5>Enhanced Security</h5>
            <p>Protect your data and operations with robust security measures.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
