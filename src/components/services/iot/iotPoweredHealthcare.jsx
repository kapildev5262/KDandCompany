import "../services.css";

import { useEffect } from "react";
import healthcareImage from "../../../assets/IOTHealthcare.jpg"; // IoT Healthcare image import
import remoteMonitoring from "../../../assets/remote-health-monitoring.jpg";
import patientManagement from "../../../assets/patientManagement.avif";
import predictiveAnalytics from "../../../assets/predictive_analytics.avif";
import telemedicine from "../../../assets/telemedicine.avif";
import wearables from "../../../assets/wearables.jpg";
import healthDataIntegration from "../../../assets/health_data_integration.jpg";
import security from "../../../assets/health-security.jpg";
import analytics from "../../../assets/analytics.png";
import compliance from "../../../assets/leagel1.jpg";
import reliability from "../../../assets/reliable1.avif";
import connectivity from "../../../assets/iot1.jpg";
import { useLocation } from "react-router-dom";

export default function IoTHealthcare() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="iot-healthcare-page">
      {/* IoT Healthcare Section */}
      <section className="iot-healthcare-section">
        <div className="background1" style={{ backgroundImage: `url(${healthcareImage})` }}>
          <div className="heading1">
            <h1>IoT Powered Healthcare Solutions</h1>
            <p style={{ color: "white" }}>
              IoT technology is transforming healthcare by enabling real-time monitoring, data-driven decision-making,
              and enhanced patient care. Our solutions integrate seamlessly into existing systems, providing reliable
              and secure healthcare services.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of IoT in Healthcare</h2>
        <ul>
          <li>
            <strong>Real-Time Monitoring:</strong> Continuous monitoring of patient's health conditions through
            connected devices.
          </li>
          <li>
            <strong>Data Integration:</strong> Seamless integration of health data from various sources for a
            comprehensive view.
          </li>
          <li>
            <strong>Enhanced Security:</strong> Advanced security measures to protect sensitive health data and ensure
            privacy.
          </li>
          <li>
            <strong>Predictive Analytics:</strong> Using AI to predict health issues before they become critical,
            enabling proactive care.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our IoT healthcare services are designed to improve patient outcomes, streamline operations, and enhance care
          delivery. From wearable technology to telemedicine solutions, we provide comprehensive IoT services tailored
          for healthcare providers.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={remoteMonitoring} alt="Remote Patient Monitoring" />
            <h5>Remote Patient Monitoring</h5>
            <p>
              Monitor patient's vital signs and health metrics remotely using IoT devices, improving care efficiency and
              outcomes.
            </p>
          </div>

          <div className="service-item">
            <img src={patientManagement} alt="Patient Management Systems" />
            <h5>Patient Management Systems</h5>
            <p>
              Streamline patient management processes with IoT solutions, ensuring timely interventions and enhanced
              care.
            </p>
          </div>

          <div className="service-item">
            <img src={predictiveAnalytics} alt="Predictive Analytics" />
            <h5>Predictive Analytics</h5>
            <p>
              Leverage data analytics to anticipate patient needs and improve healthcare outcomes through proactive
              measures.
            </p>
          </div>

          <div className="service-item">
            <img src={telemedicine} alt="Telemedicine Services" />
            <h5>Telemedicine Services</h5>
            <p>Offer remote consultations and healthcare services through secure IoT-powered telemedicine platforms.</p>
          </div>

          <div className="service-item">
            <img src={wearables} alt="Wearable Health Devices" />
            <h5>Wearable Health Devices</h5>
            <p>Utilize smart wearables to track health metrics, providing valuable insights into patient wellness.</p>
          </div>

          <div className="service-item">
            <img src={healthDataIntegration} alt="Health Data Integration" />
            <h5>Health Data Integration</h5>
            <p>
              Integrate diverse health data sources to create a unified health record, improving decision-making
              processes.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our IoT Healthcare Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={security} alt="Security" />
            <h5>Security</h5>
            <p>Ensure the security and privacy of health data with robust IoT solutions designed for compliance.</p>
          </div>

          <div className="dna-item">
            <img src={analytics} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Utilize advanced analytics for real-time insights and improved healthcare decision-making.</p>
          </div>

          <div className="dna-item">
            <img src={compliance} alt="Compliance" />
            <h5>Compliance</h5>
            <p>Stay compliant with healthcare regulations while leveraging IoT technology for improved services.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Dependable IoT solutions that enhance operational efficiency and ensure consistent patient care.</p>
          </div>

          <div className="dna-item">
            <img src={connectivity} alt="Connectivity" />
            <h5>Connectivity</h5>
            <p>Maintain seamless connectivity between devices and systems for uninterrupted healthcare delivery.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
