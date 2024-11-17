import "../services.css";
import { useEffect } from "react";
import productDev from "../../../assets/PD2.jpeg"; // Image for Product Development
import ideation from "../../../assets/creative1.jpg";
import prototyping from "../../../assets/prototyping.avif";
import testing from "../../../assets/mob-reliable.avif";
import release from "../../../assets/mobile-app-deployment.avif";
import support from "../../../assets/CustomerSupport.avif";
import enhancement from "../../../assets/custom.jpg";
import { useLocation } from "react-router-dom";

export default function ProductDevelopment() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="product-development-page">
      {/* Product Development Section */}
      <section className="product-development-section">
        <div className="background1" style={{ backgroundImage: `url(${productDev})` }}>
          <div className="heading1">
            <h1>Product Development</h1>
            <p style={{ color: "white" }}>
              Our Product Development services help you bring your innovative ideas to life. From initial concept to
              market-ready product, we support each stage to ensure high-quality and efficient delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Product Development Services</h2>
        <ul>
          <li>
            <strong>End-to-End Solutions:</strong> Comprehensive support from ideation to post-launch maintenance.
          </li>
          <li>
            <strong>Agile Methodology:</strong> Fast, iterative processes that adapt to changing requirements.
          </li>
          <li>
            <strong>High-Quality Standards:</strong> Focus on delivering quality products that meet user expectations.
          </li>
          <li>
            <strong>Innovation & Scalability:</strong> Cutting-edge technology solutions that scale as your business
            grows.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our product development services are designed to accelerate your ideas into successful products. We integrate
          agile processes with the latest technology to ensure a streamlined development experience.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={ideation} alt="Ideation & Strategy" />
            <h5>Ideation & Strategy</h5>
            <p>Collaborate to shape your ideas, define goals, and create a strategic roadmap for development.</p>
          </div>

          <div className="service-item">
            <img src={prototyping} alt="Prototyping & Design" />
            <h5>Prototyping & Design</h5>
            <p>Visualize and test your product with prototypes to refine features and improve user experience.</p>
          </div>

          <div className="service-item">
            <img src={testing} alt="Quality Assurance & Testing" />
            <h5>Quality Assurance & Testing</h5>
            <p>Rigorous testing ensures your product is reliable, user-friendly, and free of bugs.</p>
          </div>

          <div className="service-item">
            <img src={release} alt="Product Release" />
            <h5>Product Release</h5>
            <p>Seamless deployment and launch support to bring your product to the market successfully.</p>
          </div>

          <div className="service-item">
            <img src={support} alt="Post-Launch Support" />
            <h5>Post-Launch Support</h5>
            <p>Dedicated support team to address issues, monitor performance, and ensure smooth operations.</p>
          </div>

          <div className="service-item">
            <img src={enhancement} alt="Continuous Enhancement" />
            <h5>Continuous Enhancement</h5>
            <p>Ongoing improvements and feature updates to keep your product competitive and up-to-date.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
