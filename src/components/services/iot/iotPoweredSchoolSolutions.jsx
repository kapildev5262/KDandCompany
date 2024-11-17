import "../services.css";

import { useEffect } from "react";
import iotImage from "../../../assets/IOTschool1.jpg"; // IoT image import
import smartClassroom from "../../../assets/classRoom.jpg";
import studentTracking from "../../../assets/student-tracking.jpg";
import attendanceSystem from "../../../assets/attendance-system.jpg";
import smartLibrary from "../../../assets/smart-library.jpg";
import dataAnalytics from "../../../assets/ml-automation1.avif";
import schoolManagement from "../../../assets/school-management.jpg";
import remoteLearning from "../../../assets/training.avif";
import security from "../../../assets/security2.avif";
import connectivity from "../../../assets/iot2.jpg";
import parentEngagement from "../../../assets/parent-engagement.jpg";
import { useLocation } from "react-router-dom";

export default function IOTPoweredSchoolSolutions() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="iot-page">
      {/* IoT Asset Management Section */}
      <section className="iot-section">
        <div className="background1" style={{ backgroundImage: `url(${iotImage})` }}>
          <div className="heading1">
            <h1>IoT Powered School Solutions</h1>
            <p style={{ color: "white" }}>
              Empower your school with IoT technology, ensuring enhanced learning experiences, improved operational
              efficiency, and effective communication.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of IoT Solutions</h2>
        <ul>
          <li>
            <strong>Real-time Data:</strong> Access real-time data from connected devices to make informed decisions.
          </li>
          <li>
            <strong>Enhanced Communication:</strong> Improve communication between students, teachers, and parents
            through connected platforms.
          </li>
          <li>
            <strong>Data Security:</strong> Ensure the safety and privacy of sensitive data with advanced security
            measures.
          </li>
          <li>
            <strong>Integration:</strong> Seamlessly integrate IoT solutions into existing school systems and
            infrastructure.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our IoT solutions are tailored to meet the unique needs of educational institutions, enhancing learning and
          administrative processes through innovative technology.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={smartClassroom} alt="Smart Classroom Solutions" />
            <h5>Smart Classroom Solutions</h5>
            <p>Implement smart technologies to create engaging and interactive learning environments.</p>
          </div>

          <div className="service-item">
            <img src={studentTracking} alt="Student Tracking System" />
            <h5>Student Tracking System</h5>
            <p>Monitor student attendance and performance with advanced tracking solutions.</p>
          </div>

          <div className="service-item">
            <img src={attendanceSystem} alt="Automated Attendance System" />
            <h5>Automated Attendance System</h5>
            <p>Use IoT to automate attendance and streamline administrative tasks.</p>
          </div>

          <div className="service-item">
            <img src={smartLibrary} alt="Smart Library Management" />
            <h5>Smart Library Management</h5>
            <p>Enhance library operations with IoT-enabled management systems for books and resources.</p>
          </div>

          <div className="service-item">
            <img src={dataAnalytics} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>Analyze data from connected devices to improve educational outcomes and operational efficiency.</p>
          </div>

          <div className="service-item">
            <img src={schoolManagement} alt="School Management Solutions" />
            <h5>School Management Solutions</h5>
            <p>Streamline school operations with IoT-powered management tools for administration and finance.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our IoT Solutions</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={remoteLearning} alt="Remote Learning Solutions" />
            <h5>Remote Learning Solutions</h5>
            <p>Provide robust tools for remote learning, ensuring accessibility for all students.</p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Security Solutions" />
            <h5>Security Solutions</h5>
            <p>Implement IoT solutions for enhanced safety and security on campus.</p>
          </div>

          <div className="dna-item">
            <img src={connectivity} alt="Connectivity Solutions" />
            <h5>Connectivity Solutions</h5>
            <p>Ensure reliable internet connectivity and network management for educational activities.</p>
          </div>

          <div className="dna-item">
            <img src={parentEngagement} alt="Parent Engagement Tools" />
            <h5>Parent Engagement Tools</h5>
            <p>Foster better communication between parents and schools through connected platforms.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
