import "../services.css";
import { useEffect } from "react";
import javaImage from "../../../assets/Java.jpeg"; // Import a Java framework image
import springImage from "../../../assets/java-spring.avif"; // Spring Framework image
import hibernateImage from "../../../assets/code2.avif"; // Hibernate image
import jsfImage from "../../../assets/code1.avif"; // JSF image
import strutsImage from "../../../assets/code3.jpg"; // Struts image
import mavenImage from "../../../assets/java1.jpg"; // Maven image
import performanceOptimization from "../../../assets/optimization.avif"; // Add a Performance Optimization image
import Integration from "../../../assets/api-integration.avif";
import Testing from "../../../assets/mobile-testing.avif";

import { useLocation } from "react-router-dom";

export default function JavaFrameworkServices() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="java-framework-page">
      {/* Java Framework Section */}
      <section className="java-framework-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${javaImage})` }} // Note the use of backticks for template literals
        >
          <div className="heading1">
            <h1>Java Framework Development</h1>
            <p style={{ color: "white" }}>
              Java frameworks simplify the development process by providing reusable components and tools, promoting
              best practices, and enhancing productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Java Frameworks</h2>
        <ul>
          <li>
            <strong>Reusability:</strong> Allows developers to reuse code, reducing development time.
          </li>
          <li>
            <strong>Scalability:</strong> Frameworks like Spring support scalable application development.
          </li>
          <li>
            <strong>Security:</strong> Java frameworks come with built-in security features to protect applications.
          </li>
          <li>
            <strong>Integration:</strong> Easily integrates with various technologies and databases.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our Java framework services aim to enhance your application's efficiency and scalability while maintaining
          high standards of quality and security.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={springImage} alt="Spring Framework" />
            <h5>Spring Framework</h5>
            <p>Comprehensive services for building enterprise-level applications using the Spring Framework.</p>
          </div>

          <div className="service-item">
            <img src={hibernateImage} alt="Hibernate" />
            <h5>Hibernate</h5>
            <p>Efficient database management solutions using Hibernate for ORM-based applications.</p>
          </div>

          <div className="service-item">
            <img src={jsfImage} alt="JavaServer Faces" />
            <h5>JavaServer Faces (JSF)</h5>
            <p>Expert development and integration of web applications using JavaServer Faces.</p>
          </div>

          <div className="service-item">
            <img src={strutsImage} alt="Struts Framework" />
            <h5>Struts Framework</h5>
            <p>Building robust and maintainable applications with the Struts Framework.</p>
          </div>

          <div className="service-item">
            <img src={mavenImage} alt="Maven" />
            <h5>Maven</h5>
            <p>Streamlining project management and build processes with Maven.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Java Framework Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={performanceOptimization} alt="Performance Optimization" />
            <h5>Performance Optimization</h5>
            <p>Leveraging advanced techniques for optimizing Java application performance.</p>
          </div>

          <div className="dna-item">
            <img src={Integration} alt="Performance Optimization" />
            <h5>Continuous Integration</h5>
            <p>Implementing CI/CD pipelines for automated testing and deployment of Java applications.</p>
          </div>

          {/* New DNA Item Added */}
          <div className="dna-item">
            <img src={Testing} alt="Performance Optimization" />
            <h5>Testing and Quality Assurance</h5>
            <p>Ensuring high-quality applications through comprehensive testing strategies and frameworks.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
