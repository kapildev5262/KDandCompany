import "../services.css";
import { useEffect } from "react";
import rpaImage from "../../../assets/RPA.avif"; // RPA image import
import workflow from "../../../assets/optimization2.avif";
import automationProcess from "../../../assets/ml-automation1.avif";
import efficiency from "../../../assets/Performance2.avif";
import analytics from "../../../assets/analytics.png";
import integration from "../../../assets/new-img5.avif";
import reliability from "../../../assets/reliable1.avif";
import { useLocation } from "react-router-dom";

export default function RPA() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="rpa-page">
      {/* RPA Section */}
      <section className="rpa-section">
        <div className="background1" style={{ backgroundImage: `url(${rpaImage})` }}>
          <div className="heading1">
            <h1>Robotic Process Automation</h1>
            <p style={{ color: "white" }}>
              Robotic Process Automation (RPA) automates repetitive tasks, streamlining workflows, improving efficiency,
              and reducing errors. It enables businesses to automate processes using software robots, enhancing
              productivity and lowering costs.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Robotic Process Automation</h2>
        <ul>
          <li>
            <strong>Workflow Automation:</strong> Automates routine tasks, saving time and reducing human intervention.
          </li>
          <li>
            <strong>Efficiency Boost:</strong> Increases productivity by eliminating manual errors and speeding up
            processes.
          </li>
          <li>
            <strong>Cost Reduction:</strong> Reduces operational costs by automating high-volume tasks with software
            robots.
          </li>
          <li>
            <strong>Scalability:</strong> Easily scale your automated processes to accommodate business growth.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our RPA solutions are designed to automate complex workflows, enhance productivity, and improve overall
          efficiency. From consultancy to implementation, we provide end-to-end RPA services to transform your business.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our RPA Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={workflow} alt="Workflow Automation" />
            <h5>Workflow Automation</h5>
            <p>Streamline and automate repetitive business processes to increase operational efficiency.</p>
          </div>

          <div className="service-item">
            <img src={automationProcess} alt="Process Automation" />
            <h5>Process Automation</h5>
            <p>
              Use RPA to automate end-to-end business processes, minimizing human errors and maximizing productivity.
            </p>
          </div>

          <div className="service-item">
            <img src={efficiency} alt="Operational Efficiency" />
            <h5>Operational Efficiency</h5>
            <p>Enhance efficiency across departments with seamless automation of routine tasks.</p>
          </div>

          <div className="service-item">
            <img src={analytics} alt="Analytics & Insights" />
            <h5>Analytics & Insights</h5>
            <p>Gain real-time insights into your automated processes with advanced analytics.</p>
          </div>

          <div className="service-item">
            <img src={integration} alt="System Integration" />
            <h5>System Integration</h5>
            <p>Easily integrate RPA with existing systems to enhance workflows without disrupting current processes.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our RPA Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>We ensure highly reliable RPA services, providing real-time monitoring for transparent operations.</p>
          </div>

          <div className="dna-item">
            <img src={efficiency} alt="Efficiency" />
            <h5>Efficiency</h5>
            <p>Our RPA solutions focus on delivering maximum efficiency through automation.</p>
          </div>

          <div className="dna-item">
            <img src={integration} alt="Technology Integration" />
            <h5>Technology Integration</h5>
            <p>Seamlessly integrate RPA solutions with your existing tech stack for smooth operations.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
