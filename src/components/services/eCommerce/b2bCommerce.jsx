import "../services.css";
import { useEffect } from "react";
import b2bCommerce from "../../../assets/B2B-commerce.avif"; // B2B Commerce image import
import strategy from "../../../assets/strategy.avif";
import analytics from "../../../assets/analytics.png";
import automation from "../../../assets/Automation.avif";
import procurement from "../../../assets/Product-delivery.jpg";
import supplyChain from "../../../assets/personalization.avif";
import crm from "../../../assets/crm.jpg";
import scalability from "../../../assets/optimization.avif";
import customerSupport from "../../../assets/CustomerSupport.avif";
import deliveryModel from "../../../assets/Product-delivery.jpg";
import { useLocation } from "react-router-dom";

export default function B2BCommerce() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="b2bcommerce-page">
      {/* B2B Commerce Section */}
      <section className="b2bcommerce-section">
        <div className="background1" style={{ backgroundImage: `url(${b2bCommerce})` }}>
          <div className="heading1">
            <h1>B2B Commerce Solutions</h1>
            <p style={{ color: "white" }}>
              Our B2B commerce solutions help businesses streamline operations, improve procurement, and enhance supply
              chain management, delivering optimized, scalable services.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our B2B Solutions</h2>
        <ul>
          <li>
            <strong>Scalability:</strong> Built to grow with your business needs and handle high transaction volumes
            efficiently.
          </li>
          <li>
            <strong>Supply Chain Optimization:</strong> Enhance the efficiency and transparency of supply chain
            operations.
          </li>
          <li>
            <strong>Automation:</strong> Streamline procurement, order processing, and other business operations.
          </li>
          <li>
            <strong>Data Analytics:</strong> Leverage detailed analytics to inform decision-making and improve business
            outcomes.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          We provide comprehensive B2B solutions tailored to meet the unique needs of your business. Our services cover
          every aspect from procurement to customer relationship management, designed to enhance operational efficiency
          and drive growth.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our B2B Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={strategy} alt="Business Strategy" />
            <h5>Business Strategy</h5>
            <p>Customized business strategies that align with your goals and market dynamics.</p>
          </div>

          <div className="service-item">
            <img src={analytics} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>Use advanced data analytics to gain insights into your operations and optimize performance.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Automation Solutions" />
            <h5>Automation Solutions</h5>
            <p>Automate key business processes, including procurement, invoicing, and order management.</p>
          </div>

          <div className="service-item">
            <img src={procurement} alt="Procurement Management" />
            <h5>Procurement Management</h5>
            <p>Efficient procurement solutions to streamline your supply chain and reduce costs.</p>
          </div>

          <div className="service-item">
            <img src={supplyChain} alt="Supply Chain Management" />
            <h5>Supply Chain Management</h5>
            <p>Improve the transparency and efficiency of your supply chain operations.</p>
          </div>

          <div className="service-item">
            <img src={crm} alt="CRM Solutions" />
            <h5>CRM Solutions</h5>
            <p>Manage customer relationships and improve client satisfaction with integrated CRM systems.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our B2B Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={scalability} alt="Scalability" />
            <h5>Scalability</h5>
            <p>Scalable B2B solutions that grow with your business.</p>
          </div>

          <div className="dna-item">
            <img src={customerSupport} alt="Customer Support" />
            <h5>Customer Support</h5>
            <p>Reliable customer support services tailored to your business needs.</p>
          </div>

          <div className="dna-item">
            <img src={deliveryModel} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>Flexible and customizable delivery models to ensure seamless service integration.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
