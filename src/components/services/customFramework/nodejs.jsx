import "../services.css";
import { useEffect } from "react";
import nodejsImage from "../../../assets/nodejs.png"; // Node.js image import
import creative from "../../../assets/creative.png";
import api from "../../../assets/api-integration.avif"; // Add an API image
import database from "../../../assets/new-img3.avif"; // Add a Database image
import automation from "../../../assets/Automation.avif"; // Add an Automation image
import scalability from "../../../assets/scalable.avif"; // Add a Scalability image
import security from "../../../assets/security2.avif"; // Add a Security image
import monitoring from "../../../assets/monitor-logging.avif"; // Add a Monitoring image
import loadBalancing from "../../../assets/Cloud-monitering.avif"; // Add a Load Balancing image
import performanceOptimization from "../../../assets/optimization.avif"; // Add a Performance Optimization image
import { useLocation } from "react-router-dom";

export default function NodeJsServices() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="nodejs-page">
      {/* Node.js Section */}
      <section className="nodejs-section">
        <div className="background1" style={{ backgroundImage: `url(${nodejsImage})` }}>
          <div className="heading1">
            <h1>Node.js Development</h1>
            <p style={{ color: "white" }}>
              Node.js is a powerful JavaScript runtime built on Chrome's V8 engine, enabling fast and scalable network
              applications. Its event-driven architecture makes it an excellent choice for building real-time
              applications and APIs.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Node.js</h2>
        <ul>
          <li>
            <strong>Asynchronous:</strong> Non-blocking I/O operations for improved performance.
          </li>
          <li>
            <strong>Scalability:</strong> Easily scale applications with a microservices architecture.
          </li>
          <li>
            <strong>Rich Ecosystem:</strong> Extensive library of modules available via npm.
          </li>
          <li>
            <strong>Single Programming Language:</strong> JavaScript can be used for both frontend and backend
            development.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our Node.js development services are tailored to meet your business needs, ensuring high performance,
          scalability, and security. From building RESTful APIs to real-time applications, we deliver robust solutions
          that drive innovation.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative & Design" />
            <h5>Creative & Design</h5>
            <p>Merging design and functionality to create intuitive applications powered by Node.js.</p>
          </div>

          <div className="service-item">
            <img src={api} alt="API Development" />
            <h5>API Development</h5>
            <p>Develop RESTful and GraphQL APIs to enhance communication between services.</p>
          </div>

          <div className="service-item">
            <img src={database} alt="Database Integration" />
            <h5>Database Integration</h5>
            <p>Seamlessly integrate with various databases, including MongoDB, PostgreSQL, and more.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Automation" />
            <h5>Automation</h5>
            <p>Automate workflows and processes using Node.js to improve efficiency.</p>
          </div>

          <div className="service-item">
            <img src={scalability} alt="Scalability Solutions" />
            <h5>Scalability Solutions</h5>
            <p>Design and implement scalable architecture to handle growing traffic and data.</p>
          </div>

          <div className="service-item">
            <img src={security} alt="Security Solutions" />
            <h5>Security Solutions</h5>
            <p>Implement security best practices to safeguard your applications and data.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Node.js Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={monitoring} alt="Monitoring" />
            <h5>Monitoring</h5>
            <p>Continuous monitoring and logging to ensure application health and performance.</p>
          </div>

          <div className="dna-item">
            <img src={loadBalancing} alt="Load Balancing" />
            <h5>Load Balancing</h5>
            <p>Distributing traffic across multiple servers to enhance responsiveness and reliability.</p>
          </div>

          <div className="dna-item">
            <img src={performanceOptimization} alt="Performance Optimization" />
            <h5>Performance Optimization</h5>
            <p>Fine-tuning applications for optimal speed and resource usage.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
