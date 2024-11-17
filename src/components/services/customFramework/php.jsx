import "../services.css";
import { useEffect } from "react";
import phpImage from "../../../assets/PHP.jpeg"; // PHP image import
import creative from "../../../assets/creative.png";
import api from "../../../assets/api-integration.avif"; // API image
import database from "../../../assets/new-img3.avif"; // Database image
import automation from "../../../assets/Automation.avif"; // Automation image
import scalability from "../../../assets/scalable.avif"; // Scalability image
import security from "../../../assets/security1.avif"; // Security image
import monitoring from "../../../assets/monitor-logging.avif"; // Monitoring image
import loadBalancing from "../../../assets/Cloud-monitering.avif"; // Load Balancing image
import performanceOptimization from "../../../assets/optimization.avif"; // Performance Optimization image
import { useLocation } from "react-router-dom";

export default function PhpServices() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="php-page">
      {/* PHP Section */}
      <section className="php-section">
        <div className="background1" style={{ backgroundImage: `url(${phpImage})` }}>
          <div className="heading1">
            <h1>PHP Development</h1>
            <p style={{ color: "white" }}>
              PHP is a popular general-purpose scripting language that is especially suited to web development. Fast,
              flexible, and pragmatic, PHP powers everything from your blog to the most popular websites in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of PHP</h2>
        <ul>
          <li>
            <strong>Easy to Learn:</strong> PHP is beginner-friendly, making it accessible for new developers.
          </li>
          <li>
            <strong>Cross-Platform:</strong> PHP runs on various platforms like Windows, Linux, and macOS.
          </li>
          <li>
            <strong>Rich Ecosystem:</strong> Extensive libraries and frameworks, such as Laravel and Symfony.
          </li>
          <li>
            <strong>Strong Community Support:</strong> Large community providing support, documentation, and resources.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our PHP development services are designed to deliver high-quality applications, websites, and APIs. From
          custom solutions to eCommerce platforms, we ensure your business objectives are met with precision.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative & Design" />
            <h5>Creative & Design</h5>
            <p>Crafting visually appealing and user-friendly interfaces for web applications.</p>
          </div>

          <div className="service-item">
            <img src={api} alt="API Development" />
            <h5>API Development</h5>
            <p>Building RESTful APIs for seamless integration with frontend and third-party services.</p>
          </div>

          <div className="service-item">
            <img src={database} alt="Database Integration" />
            <h5>Database Integration</h5>
            <p>Connecting applications to databases like MySQL, PostgreSQL, and MongoDB.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Automation" />
            <h5>Automation</h5>
            <p>Implementing automated processes to improve efficiency and reduce manual work.</p>
          </div>

          <div className="service-item">
            <img src={scalability} alt="Scalability Solutions" />
            <h5>Scalability Solutions</h5>
            <p>Developing scalable solutions to accommodate business growth and user demand.</p>
          </div>

          <div className="service-item">
            <img src={security} alt="Security Solutions" />
            <h5>Security Solutions</h5>
            <p>Ensuring secure coding practices and robust security measures for applications.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our PHP Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={monitoring} alt="Monitoring" />
            <h5>Monitoring</h5>
            <p>Keeping track of application performance and uptime for optimal user experience.</p>
          </div>

          <div className="dna-item">
            <img src={loadBalancing} alt="Load Balancing" />
            <h5>Load Balancing</h5>
            <p>Efficiently distributing traffic across servers to enhance reliability and performance.</p>
          </div>

          <div className="dna-item">
            <img src={performanceOptimization} alt="Performance Optimization" />
            <h5>Performance Optimization</h5>
            <p>Improving the performance of PHP applications through best practices and optimizations.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
