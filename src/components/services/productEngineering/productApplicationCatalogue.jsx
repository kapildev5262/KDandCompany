import "../services.css";
import { useEffect } from "react";
import catalogueBanner from "../../../assets/Product Catalogue.jpeg"; // Replace with your banner image
import designImage from "../../../assets/Mob-app-development.avif"; // Replace with relevant images for your catalogue services
import developmentImage from "../../../assets/development.avif";
import integrationImage from "../../../assets/sales-integration.avif";
import supportImage from "../../../assets/CustomerSupport.avif";

import { useLocation } from "react-router-dom";

export default function ProductCatalogue() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="catalogue-page">
      {/* Catalogue Banner Section */}
      <section className="catalogue-section">
        <div className="background1" style={{ backgroundImage: `url(${catalogueBanner})` }}>
          <div className="heading1">
            <h1>Product Application Catalogue</h1>
            <p style={{ color: "white" }}>
              Discover our comprehensive range of products and services designed to enhance your business efficiency and
              customer engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Product Application Catalogue</h2>
        <ul>
          <li>
            <strong>Comprehensive Listings:</strong> Detailed product information to help customers make informed
            decisions.
          </li>
          <li>
            <strong>Search & Filter Options:</strong> Easy navigation through products using advanced search and filter
            capabilities.
          </li>
          <li>
            <strong>Responsive Design:</strong> Optimized for all devices to ensure a seamless user experience.
          </li>
          <li>
            <strong>Integration Capabilities:</strong> Seamless integration with your existing systems for efficient
            management.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our Product Application Catalogue development services are tailored to showcase your offerings effectively. We
          provide a full lifecycle approach from initial design to deployment and ongoing support, ensuring your
          catalogue is always up-to-date and engaging for your customers.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={designImage} alt="Product Design" />
            <h5>Product Design</h5>
            <p>Creating visually appealing and functional designs tailored to showcase your products effectively.</p>
          </div>

          <div className="service-item">
            <img src={developmentImage} alt="Custom Development" />
            <h5>Custom Development</h5>
            <p>
              Bespoke application development that aligns with your business objectives and enhances customer
              interaction.
            </p>
          </div>

          <div className="service-item">
            <img src={integrationImage} alt="Integration Services" />
            <h5>Integration Services</h5>
            <p>
              Ensuring smooth integration with your current systems for efficient product management and data
              synchronization.
            </p>
          </div>

          <div className="service-item">
            <img src={supportImage} alt="Support & Maintenance" />
            <h5>Support & Maintenance</h5>
            <p>Ongoing support and maintenance to ensure your catalogue remains efficient, secure, and up-to-date.</p>
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="features-section">
        <h2>Client Success Stories</h2>
        <p>
          "The product catalogue developed by the team has streamlined our sales process and improved customer
          engagement." - Emily
        </p>
        <p>
          "Their custom solutions are unparalleled! Our catalogue not only looks great but works seamlessly." - John
        </p>
      </section>
    </div>
  );
}
