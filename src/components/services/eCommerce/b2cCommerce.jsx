import "../services.css";
import { useEffect } from "react";
import ecommerce from "../../../assets/B2C_IMG.webp"; // B2C commerce image import
import ux from "../../../assets/ui-ux.avif";
import advertising from "../../../assets/discount-shopping-season-with-sale.jpg";
import payments from "../../../assets/Payments.jpg";
import logistics from "../../../assets/Warehouse.avif";
import optimization from "../../../assets/seo.png";
import automation from "../../../assets/marketingautomation.png";
import delivery from "../../../assets/deliverymodel.png";
import analytics from "../../../assets/analytics.avif";
import customerSupport from "../../../assets/CustomerSupport.avif";
import technology from "../../../assets/AI-Driven-Product-Recommendations_.avif";
import reliability from "../../../assets/reliable1.avif";
import { useLocation } from "react-router-dom";

export default function WebApps() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="ecommerce-page">
      {/* E-Commerce Section */}
      <section className="ecommerce-section">
        <div className="background1" style={{ backgroundImage: `url(${ecommerce})` }}>
          <div className="heading1">
            <h1>B2C E-Commerce Solutions</h1>
            <p style={{ color: "white" }}>
              Our B2C e-commerce solutions provide businesses with the tools and strategies to drive online sales,
              enhance customer experience, and streamline operations for long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our B2C E-Commerce Services</h2>
        <ul>
          <li>
            <strong>Seamless User Experience:</strong> Our design focuses on creating intuitive and engaging customer
            journeys.
          </li>
          <li>
            <strong>Advanced Payment Solutions:</strong> Integration with secure and flexible payment gateways.
          </li>
          <li>
            <strong>Logistics & Delivery:</strong> Optimized shipping and delivery models to meet customer expectations.
          </li>
          <li>
            <strong>Data-Driven Insights:</strong> Comprehensive analytics to track performance and customer behavior.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our B2C e-commerce services cover the entire spectrum of online business needs, from UX design to digital
          marketing, inventory management, and seamless payment integration. We help businesses scale and succeed in the
          digital landscape.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our E-Commerce Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={ux} alt="UX Design" />
            <h5>UX Design</h5>
            <p>Creating a smooth and engaging customer experience that drives sales and fosters brand loyalty.</p>
          </div>

          <div className="service-item">
            <img src={advertising} alt="Digital Advertising" />
            <h5>Digital Advertising</h5>
            <p>Enhance your brand’s visibility and drive online traffic with targeted advertising strategies.</p>
          </div>

          <div className="service-item">
            <img src={payments} alt="Payment Integration" />
            <h5>Payment Integration</h5>
            <p>Secure and flexible payment options integrated seamlessly into your online store.</p>
          </div>

          <div className="service-item">
            <img src={logistics} alt="Logistics & Delivery" />
            <h5>Logistics & Delivery</h5>
            <p>
              Streamline your supply chain with our optimized logistics and delivery solutions for faster fulfillment.
            </p>
          </div>

          <div className="service-item">
            <img src={optimization} alt="Search Engine Optimization" />
            <h5>Search Engine Optimization</h5>
            <p>Boost your store’s visibility in search engines with cutting-edge SEO practices.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>Automate your marketing campaigns for increased efficiency and customer engagement.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our E-Commerce Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>We provide flexible delivery models to ensure timely and efficient e-commerce services.</p>
          </div>

          <div className="dna-item">
            <img src={analytics} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Leverage data insights to refine strategies and improve performance.</p>
          </div>

          <div className="dna-item">
            <img src={customerSupport} alt="Customer Support" />
            <h5>Customer Support</h5>
            <p>Provide 24/7 customer support to ensure satisfaction and loyalty.</p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Technology</h5>
            <p>Harness the latest technology to provide reliable, secure, and scalable solutions.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Ensure uptime and security with our reliable infrastructure.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
