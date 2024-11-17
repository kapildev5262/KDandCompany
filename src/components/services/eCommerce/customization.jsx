import "../services.css";
import { useEffect } from "react";
import ecommerce from "../../../assets/Customization_img.webp"; // E-commerce image import
import creative from "../../../assets/creative.png";
import customization from "../../../assets/personalization.avif";
import uxui from "../../../assets/ui-ux.avif";
import payment from "../../../assets/Payments.jpg";
import analytics from "../../../assets/analytics.avif";
import automation from "../../../assets/marketingautomation.png";
import security from "../../../assets/Encryption.png";
import { useLocation } from "react-router-dom";

export default function ECommerceCustomization() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="ecommerce-page">
      {/* E-Commerce Customization Services Section */}
      <section className="ecommerce-section">
        <div className="background1" style={{ backgroundImage: `url(${ecommerce})` }}>
          <div className="heading1">
            <h1>E-Commerce Customization Services</h1>
            <p style={{ color: "white" }}>
              Our tailored e-commerce customization services help you build a unique, engaging, and scalable platform.
              We offer solutions that cater to your specific business needs and customer preferences, ensuring a
              standout presence in the digital marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="features-section">
        <h2>Why Choose E-Commerce Customization?</h2>
        <ul>
          <li>
            <strong>Branding:</strong> Custom user interfaces to reflect your unique brand identity, enhancing
            recognition and loyalty.
          </li>
          <li>
            <strong>Enhanced User Experience:</strong> Tailored navigation layouts and smooth checkout processes
            designed to maximize customer satisfaction and conversion rates.
          </li>
          <li>
            <strong>Scalable Solutions:</strong> Flexible, scalable architectures that grow with your business and
            handle increasing traffic without compromising performance.
          </li>
          <li>
            <strong>Security & Compliance:</strong> Industry-standard security measures and regulatory compliance for
            smooth, secure transactions.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>Our Customization Services</h2>
        <p>
          We offer comprehensive e-commerce customization services to create a platform that meets your unique
          requirements. Whether you need custom design, development, payment integration, or data analytics, we tailor
          our services to boost your e-commerce performance.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Specialized Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative Design" />
            <h5>Creative Design</h5>
            <p>
              Custom designs tailored to your brand that enhance user experience and engagement on your e-commerce
              platform.
            </p>
          </div>

          <div className="service-item">
            <img src={customization} alt="Customization & Development" />
            <h5>Customization & Development</h5>
            <p>
              Tailor-made e-commerce solutions designed for your unique business needs, improving customer engagement
              and operational efficiency.
            </p>
          </div>

          <div className="service-item">
            <img src={uxui} alt="UX/UI Optimization" />
            <h5>UX/UI Optimization</h5>
            <p>
              Improve user interfaces and streamline the user experience for better customer retention and satisfaction.
            </p>
          </div>

          <div className="service-item">
            <img src={payment} alt="Payment Integration" />
            <h5>Payment Integration</h5>
            <p>
              Seamless integration of multiple secure payment gateways to provide customers with a smooth transaction
              experience.
            </p>
          </div>

          <div className="service-item">
            <img src={analytics} alt="Analytics" />
            <h5>Data Analytics</h5>
            <p>
              Leverage advanced analytics to monitor customer behavior and optimize your platform for improved
              conversion rates.
            </p>
          </div>

          <div className="service-item">
            <img src={security} alt="Security & Compliance" />
            <h5>Security & Compliance</h5>
            <p>
              Ensure your platform is secure and compliant with global e-commerce standards, protecting your customers
              and business.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Customization Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Customization Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={automation} alt="Automation" />
            <h5>Automation</h5>
            <p>Automate your operations with efficient, intelligent processes to save time and improve accuracy.</p>
          </div>

          <div className="dna-item">
            <img src={analytics} alt="Advanced Analytics" />
            <h5>Advanced Analytics</h5>
            <p>
              Utilize data to create customer insights and marketing strategies that increase your sales and customer
              loyalty.
            </p>
          </div>

          <div className="dna-item">
            <img src={uxui} alt="Enhanced UX/UI" />
            <h5>Enhanced UX/UI</h5>
            <p>
              Streamline user experiences through intuitive and visually compelling designs to keep your customers
              engaged.
            </p>
          </div>

          <div className="dna-item">
            <img src={payment} alt="Payment Security" />
            <h5>Payment Security</h5>
            <p>Secure payment gateways to protect your customers’ sensitive information and provide peace of mind.</p>
          </div>

          <div className="dna-item">
            <img src={customization} alt="Scalability" />
            <h5>Scalability</h5>
            <p>Develop an e-commerce platform that grows with your business, capable of handling increased demand.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
