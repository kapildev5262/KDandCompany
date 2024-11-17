import "../services.css";

import { useEffect } from "react";
import iotOverview from "../../../assets/IOT-factoryAutomation.webp"; // IoT overview image import
import assetTracking from "../../../assets/assetTracking.avif";
import predictiveMaintenance from "../../../assets/predictive_maintenance.avif";
import processOptimization from "../../../assets/processOptimization.avif";
import energyManagement from "../../../assets/energyManagement.jpg";
import qualityControl from "../../../assets/QualityControl.jpg";
import realTimeMonitoring from "../../../assets/realTimeMonitoring.jpg";
import automationWorkflow from "../../../assets/workflow.avif";
import dataAnalytics from "../../../assets/analytics.png";
import remoteManagement from "../../../assets/Management.jpg";
import connectivity from "../../../assets/connectivity.avif";
import technology from "../../../assets/techIntegration.avif";
import reliability from "../../../assets/mob-reliable.avif";
import { useLocation } from "react-router-dom";

export default function IoTFactoryAutomation() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="iot-page">
      {/* IoT Overview Section */}
      <section className="iot-section">
        <div className="background1" style={{ backgroundImage: `url(${iotOverview})` }}>
          <div className="heading1">
            <h1>IoT-Powered Factory Automation</h1>
            <p style={{ color: "white" }}>
              Revolutionize your factory with IoT-driven automation, enabling real-time monitoring, predictive
              maintenance, and optimized operations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of IoT in Factory Automation</h2>
        <ul>
          <li>
            <strong>Real-Time Monitoring:</strong> Track machinery and production status instantly.
          </li>
          <li>
            <strong>Predictive Maintenance:</strong> Anticipate and prevent equipment failures before they happen.
          </li>
          <li>
            <strong>Process Optimization:</strong> Use data to streamline and improve production efficiency.
          </li>
          <li>
            <strong>Energy Efficiency:</strong> Optimize power consumption and reduce operational costs.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our IoT solutions are tailored for seamless integration with factory operations, offering enhanced efficiency,
          safety, and productivity.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={assetTracking} alt="Asset Tracking" />
            <h5>Asset Tracking</h5>
            <p>Monitor and manage the movement of assets throughout the facility in real-time.</p>
          </div>

          <div className="service-item">
            <img src={predictiveMaintenance} alt="Predictive Maintenance" />
            <h5>Predictive Maintenance</h5>
            <p>Reduce downtime by predicting equipment issues before they occur.</p>
          </div>

          <div className="service-item">
            <img src={processOptimization} alt="Process Optimization" />
            <h5>Process Optimization</h5>
            <p>Enhance production workflows and minimize waste through continuous process monitoring.</p>
          </div>

          <div className="service-item">
            <img src={energyManagement} alt="Energy Management" />
            <h5>Energy Management</h5>
            <p>Track and optimize energy consumption across operations for reduced costs.</p>
          </div>

          <div className="service-item">
            <img src={qualityControl} alt="Quality Control" />
            <h5>Quality Control</h5>
            <p>Leverage IoT data for enhanced quality assurance and product consistency.</p>
          </div>

          <div className="service-item">
            <img src={realTimeMonitoring} alt="Real-Time Monitoring" />
            <h5>Real-Time Monitoring</h5>
            <p>Get live updates on equipment status, production levels, and factory conditions.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our IoT Automation Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={automationWorkflow} alt="Automation Workflow" />
            <h5>Automation Workflow</h5>
            <p>Develop customized workflows to ensure seamless and efficient factory automation.</p>
          </div>

          <div className="dna-item">
            <img src={dataAnalytics} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>Analyze production data to gain actionable insights for better decision-making.</p>
          </div>

          <div className="dna-item">
            <img src={remoteManagement} alt="Remote Management" />
            <h5>Remote Management</h5>
            <p>Control and monitor factory operations remotely with our IoT solutions.</p>
          </div>

          <div className="dna-item">
            <img src={connectivity} alt="Connectivity" />
            <h5>Connectivity</h5>
            <p>Seamless connectivity between devices to ensure reliable data flow and integration.</p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Advanced Technology</h5>
            <p>Utilize cutting-edge IoT technology to drive innovation and productivity.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Ensure consistent performance with real-time monitoring and secure data logging.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
