import "../services.css";

import { useEffect } from "react";
import assetManagement from "../../../assets/IOT-assetManagement.webp"; // IoT Asset Management background image
import predictiveMaintenance from "../../../assets/predictive_maintenance.avif";
import realTimeTracking from "../../../assets/assetTracking.avif";
import inventoryManagement from "../../../assets/inventoryManagement.avif";
import energyOptimization from "../../../assets/energyManagement.jpg";
import assetSecurity from "../../../assets/Security-Integration-DevSecOps.avif";
import fleetManagement from "../../../assets/fleet_management.avif";
import dataAnalytics from "../../../assets/ml-automation1.avif";
import remoteMonitoring from "../../../assets/remote_monitoring.avif";
import reliability from "../../../assets/mob-reliable.avif";
import { useLocation } from "react-router-dom";

export default function IoTAssetManagement() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="iot-asset-management-page">
      {/* IoT Asset Management Section */}
      <section className="iot-asset-management-section">
        <div className="background1" style={{ backgroundImage: `url(${assetManagement})` }}>
          <div className="heading1">
            <h1>IoT Asset Management</h1>
            <p style={{ color: "white" }}>
              Leveraging IoT technology to transform asset management through real-time tracking, predictive
              maintenance, and improved operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of IoT in Asset Management</h2>
        <ul>
          <li>
            <strong>Real-Time Monitoring:</strong> Track asset location and status in real-time for better visibility
            and control.
          </li>
          <li>
            <strong>Predictive Maintenance:</strong> Use data analytics to predict and prevent equipment failures.
          </li>
          <li>
            <strong>Inventory Management:</strong> Optimize stock levels and reduce downtime with automated tracking.
          </li>
          <li>
            <strong>Energy Efficiency:</strong> Minimize energy consumption through optimized usage patterns.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our IoT asset management solutions help businesses improve asset utilization, minimize downtime, and enhance
          operational efficiency. From installation to data-driven insights, we offer end-to-end IoT solutions tailored
          to your needs.
        </p>
      </section>

      {/* IoT Services Section */}
      <section className="services-section">
        <h2>Our IoT Solutions</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={predictiveMaintenance} alt="Predictive Maintenance" />
            <h5>Predictive Maintenance</h5>
            <p>Use IoT sensors and data analytics to anticipate maintenance needs and reduce unplanned downtime.</p>
          </div>

          <div className="service-item">
            <img src={realTimeTracking} alt="Real-Time Tracking" />
            <h5>Real-Time Asset Tracking</h5>
            <p>Monitor assets in real-time, enabling better tracking and resource allocation.</p>
          </div>

          <div className="service-item">
            <img src={inventoryManagement} alt="Inventory Management" />
            <h5>Inventory Management</h5>
            <p>Automate inventory tracking to improve stock management and reduce shortages.</p>
          </div>

          <div className="service-item">
            <img src={energyOptimization} alt="Energy Optimization" />
            <h5>Energy Optimization</h5>
            <p>Optimize energy consumption across facilities for cost savings and sustainability.</p>
          </div>

          <div className="service-item">
            <img src={assetSecurity} alt="Asset Security" />
            <h5>Asset Security</h5>
            <p>Enhance security measures with IoT-enabled surveillance and monitoring.</p>
          </div>

          <div className="service-item">
            <img src={fleetManagement} alt="Fleet Management" />
            <h5>Fleet Management</h5>
            <p>Manage and optimize fleet performance with real-time tracking and diagnostic insights.</p>
          </div>
        </div>
      </section>

      {/* IoT DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our IoT Solutions</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={dataAnalytics} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>Leverage advanced analytics for data-driven insights on asset performance and lifecycle.</p>
          </div>

          <div className="dna-item">
            <img src={remoteMonitoring} alt="Remote Monitoring" />
            <h5>Remote Monitoring</h5>
            <p>Monitor assets remotely to ensure optimal operation and quick response to issues.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Dependable IoT solutions with consistent uptime and reliable monitoring capabilities.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
