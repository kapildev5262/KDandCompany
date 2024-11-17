import "../services.css";
import { useEffect } from "react";
import ecommerce from "../../../assets/ecommerce.avif"; // E-commerce image import
import creative from "../../../assets/creative.png";
import social from "../../../assets/socialmedia.png";
import listing from "../../../assets/User-Friendly-Design.avif";
import media from "../../../assets/MediaPlanning.png";
import seo from "../../../assets/seo.png";
import automation from "../../../assets/marketingautomation.png";
import delivery from "../../../assets/Product-delivery.jpg";
import analytics from "../../../assets/analytics.png";
import personalization from "../../../assets/personalization.avif";
import technology from "../../../assets/optimization.avif";
import security from "../../../assets/security.avif";
import { useLocation } from "react-router-dom";

export default function ECommerce() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="ecommerce-page">
      {/* E-Commerce Section */}
      <section className="ecommerce-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${ecommerce})` }}
        >
          <div className="heading1">
            <h1>E-Commerce Services (Online Stores, Transactions)</h1>
            <p style={{ color: "white" }}>
              Our e-commerce solutions are designed to boost your business by
              creating seamless, secure, and user-friendly platforms that
              facilitate online transactions and store management.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our E-Commerce Solutions</h2>
        <ul>
          <li>
            <strong>Product Listings:</strong> Manage a vast catalog of products
            with advanced categorization and filtering options.
          </li>
          <li>
            <strong>Secure Payments:</strong> Ensure safe and encrypted
            transactions with multiple payment gateways.
          </li>
          <li>
            <strong>User Experience:</strong> Deliver smooth and responsive user
            interfaces that enhance the shopping experience.
          </li>
          <li>
            <strong>Order Management:</strong> Track and fulfill orders with
            efficient inventory and delivery integration.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          We provide end-to-end e-commerce solutions that cater to all aspects
          of running an online store, from product management and marketing
          automation to analytics and customer personalization.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative & Design" />
            <h5>Creative & Design</h5>
            <p>
              Unique designs tailored to your brand that enhance your e-commerce
              platform's aesthetics and user experience.
            </p>
          </div>

          <div className="service-item">
            <img src={social} alt="Social Media Marketing" />
            <h5>Social Media Marketing</h5>
            <p>
              Boost your online store’s presence through targeted social media
              campaigns and content creation.
            </p>
          </div>

          <div className="service-item">
            <img src={listing} alt="Product Listings" />
            <h5>Product Listings</h5>
            <p>
              Effectively manage and display your products with rich content,
              categorization, and easy navigation.
            </p>
          </div>

          <div className="service-item">
            <img src={media} alt="Media Planning" />
            <h5>Media Planning</h5>
            <p>
              Create and execute ad campaigns that reach your target audience
              and drive conversions.
            </p>
          </div>

          <div className="service-item">
            <img src={seo} alt="Search Engine Optimization" />
            <h5>Search Engine Optimization</h5>
            <p>
              Increase your e-commerce store’s visibility on search engines with
              powerful SEO strategies.
            </p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>
              Automate your marketing efforts to streamline campaigns,
              personalize content, and optimize conversions.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our E-Commerce Services Section */}
      <section className="dna-section">
        <h2>DNA of Our E-Commerce Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>
              Flexible and scalable delivery models to ensure your e-commerce
              business runs smoothly.
            </p>
          </div>

          <div className="dna-item">
            <img src={analytics} alt="Analytics" />
            <h5>Analytics</h5>
            <p>
              Use data to drive business decisions with our integrated analytics
              solutions.
            </p>
          </div>

          <div className="dna-item">
            <img src={personalization} alt="Personalization" />
            <h5>Personalization</h5>
            <p>
              Tailor customer experiences with personalized content and product
              recommendations.
            </p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Technology</h5>
            <p>
              Leverage cutting-edge e-commerce technologies to stay ahead of the
              competition.
            </p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Security" />
            <h5>Security</h5>
            <p>
              Keep your customer data safe with advanced security protocols and
              compliance standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
