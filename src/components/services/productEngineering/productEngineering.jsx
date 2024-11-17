import "../services.css";
import { useEffect } from "react";
import engineering from "../../../assets/Product Engg.webp"; // Replace with relevant image for Product Engineering
import creative from "../../../assets/creative.png";
import design from "../../../assets/ui-ux.avif";
import devOps from "../../../assets/cloud.avif";
import cloud from "../../../assets/cloud-integration.jpg";
import testing from "../../../assets/mobile-testing.avif";
import analytics from "../../../assets/analytics.png";
import automation from "../../../assets/ml-automation1.avif";
import reliability from "../../../assets/reliable1.avif";
import { useLocation } from "react-router-dom";

export default function ProductEngineering() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="product-engineering-page">
      {/* Product Engineering Section */}
      <section className="engineering-section">
        <div className="background1" style={{ backgroundImage: `url(${engineering})` }}>
          <div className="heading1">
            <h1>Product Engineering Services</h1>
            <p style={{ color: "white" }}>
              Our Product Engineering services help businesses bring innovative products to market efficiently,
              combining agile development, high-quality standards, and advanced technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Product Engineering</h2>
        <ul>
          <li>
            <strong>End-to-End Development:</strong> From concept to deployment, we manage the entire product lifecycle.
          </li>
          <li>
            <strong>Agility & Innovation:</strong> Agile methodologies and innovative solutions ensure flexibility and
            fast time-to-market.
          </li>
          <li>
            <strong>Reliability & Scalability:</strong> Building resilient systems designed to scale with your business.
          </li>
          <li>
            <strong>Seamless Integration:</strong> Integrated systems and processes to ensure streamlined product
            performance.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          We provide comprehensive Product Engineering services, from initial planning and design to development,
          testing, and deployment. Our expertise enables us to deliver high-quality, innovative products tailored to
          your business needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Product Design" />
            <h5>Product Design</h5>
            <p>
              Innovative design services focused on user experience and functionality, crafted to meet your product
              vision.
            </p>
          </div>

          <div className="service-item">
            <img src={design} alt="UI/UX Design" />
            <h5>UI/UX Design</h5>
            <p>Designing intuitive interfaces that enhance usability and engagement, tailored to user needs.</p>
          </div>

          <div className="service-item">
            <img src={devOps} alt="DevOps & Continuous Integration" />
            <h5>DevOps & CI/CD</h5>
            <p>
              Streamline development and deployment with robust DevOps practices, ensuring faster and smoother releases.
            </p>
          </div>

          <div className="service-item">
            <img src={cloud} alt="Cloud Solutions" />
            <h5>Cloud Solutions</h5>
            <p>Scalable cloud infrastructure and solutions that support flexible, resilient product engineering.</p>
          </div>

          <div className="service-item">
            <img src={testing} alt="Quality Assurance" />
            <h5>Quality Assurance</h5>
            <p>Rigorous testing processes to deliver reliable, high-performing products with minimal bugs.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Process Automation" />
            <h5>Process Automation</h5>
            <p>Automate repetitive processes to improve efficiency and reduce operational costs.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Product Engineering</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={analytics} alt="Data-Driven Analytics" />
            <h5>Data-Driven Analytics</h5>
            <p>Leverage data insights to drive strategic decisions and enhance product performance.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability & Support" />
            <h5>Reliability & Support</h5>
            <p>Comprehensive support and monitoring to ensure product reliability and customer satisfaction.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
