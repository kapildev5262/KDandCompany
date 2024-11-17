import "../services.css";

import { useEffect } from "react";
import iotParking from "../../../assets/IOTParking.jpg"; // Image for IoT Parking
import parkingManagement from "../../../assets/iotParkingManagement.jpg";
import vehicleTracking from "../../../assets/vehicle_tracking.avif";
import smartPayment from "../../../assets/payments1.avif";
import userExperience from "../../../assets/Feedback1.avif";
import dataAnalytics from "../../../assets/ml-automation.avif";
import cloudIntegration from "../../../assets/cloud4.avif";
import mobileApp from "../../../assets/iot1.jpg";
import security from "../../../assets/cloud-security.avif";
import costEfficiency from "../../../assets/cost.jpg";
import reliability from "../../../assets/reliable1.avif";
import { useLocation } from "react-router-dom";

export default function IOTPoweredParking() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="iot-parking-page">
      {/* IoT Parking Section */}
      <section className="iot-parking-section">
        <div className="background1" style={{ backgroundImage: `url(${iotParking})` }}>
          <div className="heading1">
            <h1>IoT Powered Parking Solutions</h1>
            <p style={{ color: "white" }}>
              Our IoT-powered parking solutions utilize advanced technology to enhance the parking experience, ensuring
              efficiency, security, and user convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of IoT Powered Parking</h2>
        <ul>
          <li>
            <strong>Real-Time Availability:</strong> Monitor parking space availability in real time for users.
          </li>
          <li>
            <strong>Smart Payment Solutions:</strong> Seamless payment options for hassle-free transactions.
          </li>
          <li>
            <strong>Vehicle Tracking:</strong> Track vehicles accurately to enhance security and reduce theft.
          </li>
          <li>
            <strong>Data Analytics:</strong> Utilize collected data for insights into parking trends and patterns.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our IoT-powered parking services are designed to streamline the parking process, providing users with a
          seamless and efficient experience. From real-time tracking to smart payment integration, we offer
          comprehensive solutions tailored to meet your needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={parkingManagement} alt="Parking Management" />
            <h5>Parking Management</h5>
            <p>Efficient management of parking spaces using IoT technology for optimal space utilization.</p>
          </div>

          <div className="service-item">
            <img src={vehicleTracking} alt="Vehicle Tracking" />
            <h5>Vehicle Tracking</h5>
            <p>Implement real-time vehicle tracking solutions to enhance security and user peace of mind.</p>
          </div>

          <div className="service-item">
            <img src={smartPayment} alt="Smart Payment" />
            <h5>Smart Payment Solutions</h5>
            <p>Integrate seamless payment methods for a hassle-free parking experience.</p>
          </div>

          <div className="service-item">
            <img src={userExperience} alt="User Experience" />
            <h5>Enhanced User Experience</h5>
            <p>Design user-friendly interfaces that make parking simple and accessible.</p>
          </div>

          <div className="service-item">
            <img src={dataAnalytics} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>Utilize analytics to gain insights into parking behavior and improve services.</p>
          </div>

          <div className="service-item">
            <img src={cloudIntegration} alt="Cloud Integration" />
            <h5>Cloud Integration</h5>
            <p>Leverage cloud technology for real-time data access and enhanced service delivery.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our IoT Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={mobileApp} alt="Mobile App" />
            <h5>Mobile Application</h5>
            <p>A dedicated mobile app for users to find and reserve parking spaces easily.</p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Security" />
            <h5>Security</h5>
            <p>Ensure the safety of vehicles with enhanced security measures and monitoring systems.</p>
          </div>

          <div className="dna-item">
            <img src={costEfficiency} alt="Cost Efficiency" />
            <h5>Cost Efficiency</h5>
            <p>Optimize costs through efficient resource management and utilization.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Dependable systems and infrastructure to provide consistent parking services.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
