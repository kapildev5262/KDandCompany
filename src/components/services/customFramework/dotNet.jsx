import "../services.css";
import { useEffect } from "react";
import dotnetImage from "../../../assets/Dotnet1.jpg"; // DotNet image import
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

export default function DotNetServices() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="dotnet-page">
      {/* DotNet Section */}
      <section className="dotnet-section">
        <div className="background1" style={{ backgroundImage: `url(${dotnetImage})` }}>
          <div className="heading1">
            <h1>.NET Development</h1>
            <p style={{ color: "white" }}>
              .NET is a versatile development platform that allows developers to create cross-platform applications
              efficiently. With its robust libraries and frameworks, .NET is ideal for building scalable,
              high-performance applications.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of .NET</h2>
        <ul>
          <li>
            <strong>Cross-Platform:</strong> Build applications for Windows, macOS, and Linux.
          </li>
          <li>
            <strong>Rich Libraries:</strong> Access to a vast collection of libraries and frameworks.
          </li>
          <li>
            <strong>Integrated Development Environment:</strong> Visual Studio provides powerful tools for development.
          </li>
          <li>
            <strong>Strong Community Support:</strong> A large community for help and resources.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our .NET development services are designed to deliver high-quality applications tailored to your business
          needs. From enterprise solutions to web applications, we ensure high performance, security, and scalability.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative & Design" />
            <h5>Creative & Design</h5>
            <p>Crafting user-friendly interfaces and engaging user experiences with .NET technologies.</p>
          </div>

          <div className="service-item">
            <img src={api} alt="API Development" />
            <h5>API Development</h5>
            <p>Creating RESTful and SOAP APIs for seamless integration and communication.</p>
          </div>

          <div className="service-item">
            <img src={database} alt="Database Integration" />
            <h5>Database Integration</h5>
            <p>Integrating SQL Server, MySQL, and NoSQL databases for dynamic data management.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Automation" />
            <h5>Automation</h5>
            <p>Streamlining processes through automated workflows and services.</p>
          </div>

          <div className="service-item">
            <img src={scalability} alt="Scalability Solutions" />
            <h5>Scalability Solutions</h5>
            <p>Implementing scalable architectures to support growing application demands.</p>
          </div>

          <div className="service-item">
            <img src={security} alt="Security Solutions" />
            <h5>Security Solutions</h5>
            <p>Applying best practices to ensure application and data security.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our .NET Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={monitoring} alt="Monitoring" />
            <h5>Monitoring</h5>
            <p>Ongoing monitoring and logging for optimal application performance.</p>
          </div>

          <div className="dna-item">
            <img src={loadBalancing} alt="Load Balancing" />
            <h5>Load Balancing</h5>
            <p>Distributing workloads to improve application responsiveness and availability.</p>
          </div>

          <div className="dna-item">
            <img src={performanceOptimization} alt="Performance Optimization" />
            <h5>Performance Optimization</h5>
            <p>Tuning applications for speed and efficient resource usage.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
