import "../services.css";
import { useEffect } from "react";
import techSupportBanner from "../../../assets/TS.jpeg"; // New image for Solution Architecture
import security from "../../../assets/security2.avif";
import remoteSupport from "../../../assets/CustomerSupport.avif";
import troubleshooting from "../../../assets/mobile-testing.avif";
import monitoring from "../../../assets/monitor-logging.avif";
import consulting from "../../../assets/consulting.jpg";
import maintenance from "../../../assets/maintainance.avif";

import { useLocation } from "react-router-dom";

export default function SolutionArchitecture() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="tech-support-page">
      {/* Tech Support Section */}
      <section className="tech-support-section">
        <div className="background1" style={{ backgroundImage: `url(${techSupportBanner})` }}>
          <div className="heading1">
            <h1>Tech Support Services</h1>
            <p style={{ color: "white" }}>
              Our Tech Support Services ensure your systems run smoothly, providing comprehensive support from
              troubleshooting to maintenance. Trust us to keep your technology reliable and secure.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Core Features of Our Tech Support Services</h2>
        <ul>
          <li>
            <strong>24/7 Availability:</strong> Support around the clock to address your needs at any time.
          </li>
          <li>
            <strong>Remote Assistance:</strong> Quick and effective help without needing on-site visits.
          </li>
          <li>
            <strong>Proactive Monitoring:</strong> Continuous monitoring to prevent potential issues.
          </li>
          <li>
            <strong>Customized Solutions:</strong> Tailored support to match your business’s unique requirements.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our comprehensive tech support solutions cover everything from troubleshooting and system updates to proactive
          monitoring and cybersecurity consulting, ensuring smooth and efficient IT operations.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={remoteSupport} alt="Remote Support" />
            <h5>Remote Support</h5>
            <p>Quick, efficient troubleshooting and support from our team without on-site requirements.</p>
          </div>

          <div className="service-item">
            <img src={troubleshooting} alt="Troubleshooting & Diagnostics" />
            <h5>Troubleshooting & Diagnostics</h5>
            <p>Identifying and resolving technical issues to minimize downtime and enhance productivity.</p>
          </div>

          <div className="service-item">
            <img src={monitoring} alt="System Monitoring" />
            <h5>System Monitoring</h5>
            <p>Continuous monitoring to identify and address issues before they impact your business.</p>
          </div>

          <div className="service-item">
            <img src={consulting} alt="Consulting Services" />
            <h5>Consulting Services</h5>
            <p>Expert advice and strategic planning to optimize your tech environment for future growth.</p>
          </div>

          <div className="service-item">
            <img src={maintenance} alt="Preventative Maintenance" />
            <h5>Preventative Maintenance</h5>
            <p>Regular system checks and updates to keep your technology operating at peak performance.</p>
          </div>

          <div className="service-item">
            <img src={security} alt="Cybersecurity" />
            <h5>Cybersecurity</h5>
            <p>Robust security measures to protect your data and safeguard against potential threats.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>Why Choose Our Tech Support Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={remoteSupport} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Dependable, responsive support you can trust to keep your systems running smoothly.</p>
          </div>

          <div className="dna-item">
            <img src={monitoring} alt="Proactive Approach" />
            <h5>Proactive Approach</h5>
            <p>Identifying and resolving issues before they become critical, ensuring uninterrupted service.</p>
          </div>

          <div className="dna-item">
            <img src={consulting} alt="Expertise" />
            <h5>Expertise</h5>
            <p>Knowledgeable professionals with years of experience in diverse tech support areas.</p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Security Focused" />
            <h5>Security Focused</h5>
            <p>Prioritizing data security with advanced measures to protect your systems from threats.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
