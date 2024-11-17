import "../services.css";

import { useEffect } from "react";
import iotImage from "../../../assets/IOT-Retails2.jpg"; // New IoT image import
import automation from "../../../assets/Automation-Efficiency.avif"; // IoT Automation image
import dataAnalytics from "../../../assets/ml-automation.avif"; // IoT Data Analytics image
import smartDevices from "../../../assets/iot1.jpg"; // Smart Devices image
import supplyChain from "../../../assets/iot-supply-chain.jpg"; // IoT Supply Chain image
import customerExperience from "../../../assets/feedback2.avif"; // IoT Customer Experience image
import security from "../../../assets/iot-security.jpg"; // IoT Security image
import { useLocation } from "react-router-dom";

export default function IoTPoweredRetail() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="iot-retail-page">
      {/* IoT Retail Section */}
      <section className="iot-retail-section">
        <div className="background1" style={{ backgroundImage: `url(${iotImage})` }}>
          <div className="heading1">
            <h1>IoT Powered Retail</h1>
            <p style={{ color: "white" }}>
              Harness the power of IoT to transform your retail operations, enhancing customer experience, optimizing
              supply chains, and driving growth through data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of IoT in Retail</h2>
        <ul>
          <li>
            <strong>Real-Time Data:</strong> Access to real-time data for informed decision-making.
          </li>
          <li>
            <strong>Automation:</strong> Automate processes to improve operational efficiency.
          </li>
          <li>
            <strong>Enhanced Security:</strong> IoT devices improve security with advanced monitoring.
          </li>
          <li>
            <strong>Personalized Customer Experience:</strong> Tailored shopping experiences based on consumer behavior.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our IoT solutions for retail are designed to integrate seamlessly into your existing processes, helping you
          harness the power of connected devices to enhance customer engagement and operational efficiency.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={automation} alt="IoT Automation" />
            <h5>IoT Automation</h5>
            <p>Implement automated solutions to streamline inventory management and enhance operational efficiency.</p>
          </div>

          <div className="service-item">
            <img src={dataAnalytics} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>Utilize IoT data analytics to gain insights into customer behavior and market trends.</p>
          </div>

          <div className="service-item">
            <img src={smartDevices} alt="Smart Devices" />
            <h5>Smart Devices Integration</h5>
            <p>Integrate smart devices for improved customer interactions and service delivery.</p>
          </div>

          <div className="service-item">
            <img src={supplyChain} alt="Supply Chain Optimization" />
            <h5>Supply Chain Optimization</h5>
            <p>Enhance supply chain transparency and efficiency through IoT solutions.</p>
          </div>

          <div className="service-item">
            <img src={customerExperience} alt="Customer Experience" />
            <h5>Customer Experience Enhancement</h5>
            <p>Leverage IoT to provide personalized shopping experiences that cater to customer preferences.</p>
          </div>

          <div className="service-item">
            <img src={security} alt="IoT Security" />
            <h5>IoT Security Solutions</h5>
            <p>Ensure secure transactions and protect customer data with advanced IoT security measures.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our IoT Services</h2>
        <div className="dna-container">
          {/* This section can remain as is, or you can replace the content with IoT-specific services */}
          <div className="dna-item">
            <img src={automation} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>We offer tailored delivery models to ensure the highest quality of IoT services and support.</p>
          </div>

          <div className="dna-item">
            <img src={dataAnalytics} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Dedicated analytics services using IoT data for secure and accurate insights.</p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Security" />
            <h5>Security</h5>
            <p>Real-time monitoring and logging for reliable and secure IoT operations.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
