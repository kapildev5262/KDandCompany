import "../services.css";

import { useEffect } from "react";
import iotWarehouse from "../../../assets/IOTwarehouse2.jpg"; // IoT warehouse image import
import smartSensors from "../../../assets/iot3.jpg";
import automation from "../../../assets/automation-tool.avif";
import tracking from "../../../assets/tracking.jpg";
import dataAnalytics from "../../../assets/data-visual.jpg";
import inventoryManagement from "../../../assets/inventoryManagement.avif";
import predictiveMaintenance from "../../../assets/Automation-Efficiency.avif";
import cloudIntegration from "../../../assets/cloud4.avif";
import security from "../../../assets/cloud5.avif";
import { useLocation } from "react-router-dom";

export default function IOTWarehouse() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="iot-warehouse-page">
      {/* IoT Warehouse Section */}
      <section className="iot-section">
        <div className="background1" style={{ backgroundImage: `url(${iotWarehouse})` }}>
          <div className="heading1">
            <h1>IoT Powered Warehouse Solutions</h1>
            <p style={{ color: "white" }}>
              Leverage the power of IoT to enhance warehouse efficiency, automate processes, and gain real-time insights
              into your inventory management.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of IoT in Warehousing</h2>
        <ul>
          <li>
            <strong>Real-Time Monitoring:</strong> Constant tracking of inventory levels and warehouse conditions.
          </li>
          <li>
            <strong>Automation:</strong> Streamlining warehouse operations to reduce human error and enhance
            productivity.
          </li>
          <li>
            <strong>Data Analytics:</strong> Using IoT data for predictive analytics and better decision-making.
          </li>
          <li>
            <strong>Enhanced Security:</strong> Real-time alerts and monitoring systems for enhanced warehouse security.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our IoT solutions are designed to transform your warehouse operations, providing cutting-edge technology for
          improved efficiency, safety, and operational visibility.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={smartSensors} alt="Smart Sensors" />
            <h5>Smart Sensors</h5>
            <p>Deploy smart sensors to monitor environmental conditions and asset status in real-time.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Process Automation" />
            <h5>Process Automation</h5>
            <p>Automate warehouse processes such as picking, packing, and shipping for improved efficiency.</p>
          </div>

          <div className="service-item">
            <img src={tracking} alt="Asset Tracking" />
            <h5>Asset Tracking</h5>
            <p>Use IoT technology for accurate asset tracking and inventory management.</p>
          </div>

          <div className="service-item">
            <img src={dataAnalytics} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>Analyze warehouse data for actionable insights and improved decision-making.</p>
          </div>

          <div className="service-item">
            <img src={inventoryManagement} alt="Inventory Management" />
            <h5>Inventory Management</h5>
            <p>Optimize inventory levels and reduce holding costs with smart solutions.</p>
          </div>

          <div className="service-item">
            <img src={predictiveMaintenance} alt="Predictive Maintenance" />
            <h5>Predictive Maintenance</h5>
            <p>Implement predictive maintenance strategies to minimize downtime and extend equipment life.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our IoT Solutions</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={cloudIntegration} alt="Cloud Integration" />
            <h5>Cloud Integration</h5>
            <p>Seamlessly integrate IoT devices with cloud platforms for enhanced data storage and processing.</p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Security Solutions" />
            <h5>Security Solutions</h5>
            <p>Implement robust security measures for protecting your IoT infrastructure and data.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
