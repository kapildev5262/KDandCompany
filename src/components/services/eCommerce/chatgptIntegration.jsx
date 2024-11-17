import "../services.css";
import { useEffect } from "react";
import ecommerce from "../../../assets/Gpt-integration_img.webp"; // E-Commerce image import
import chatbot from "../../../assets/Ai2.png";
import customerService from "../../../assets/CustomerSupport.avif";
import personalization from "../../../assets/personalization.avif";
import productSearch from "../../../assets/SEO-optimization.avif";
import automation from "../../../assets/marketingautomation.png";
import analytics from "../../../assets/analytics.avif";
import marketingAutomation from "../../../assets/marketingautomation.png";
import seamlessIntegration from "../../../assets/AI-Driven-Product-Recommendations_.avif";
import { useLocation } from "react-router-dom";

export default function ECommerceChatGPT() {
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
            <h1>E-Commerce Services (ChatGPT Integration)</h1>
            <p style={{ color: "white" }}>
              Enhance your e-commerce platform with AI-driven ChatGPT integration, offering seamless customer
              interactions, personalized shopping experiences, and smart automation for an efficient and engaging online
              store.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of ChatGPT Integration</h2>
        <ul>
          <li>
            <strong>Automated Customer Support:</strong> Provide instant, AI-powered customer service 24/7.
          </li>
          <li>
            <strong>Personalized Recommendations:</strong> Use AI to tailor product suggestions based on customer
            behavior.
          </li>
          <li>
            <strong>Real-time Assistance:</strong> ChatGPT helps users navigate through your e-commerce site seamlessly.
          </li>
          <li>
            <strong>Order Management:</strong> Handle customer queries about orders, delivery, and returns
            automatically.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our e-commerce services with ChatGPT integration bring cutting-edge AI capabilities to your online store. From
          personalized customer engagement to process automation, we help you streamline operations and boost sales.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={chatbot} alt="AI-Powered Chatbot" />
            <h5>AI-Powered Chatbot</h5>
            <p>
              Deliver instant customer support through an AI-powered chatbot that answers queries, provides
              recommendations, and assists in product discovery.
            </p>
          </div>

          <div className="service-item">
            <img src={customerService} alt="Automated Customer Service" />
            <h5>Automated Customer Service</h5>
            <p>
              Use ChatGPT to manage customer queries regarding orders, refunds, and more, providing a smooth and
              efficient shopping experience.
            </p>
          </div>

          <div className="service-item">
            <img src={personalization} alt="Personalized Shopping Experience" />
            <h5>Personalized Shopping Experience</h5>
            <p>
              Leverage AI to offer personalized product recommendations based on customer preferences and browsing
              history.
            </p>
          </div>

          <div className="service-item">
            <img src={productSearch} alt="Smart Product Search" />
            <h5>Smart Product Search</h5>
            <p>
              Enhance product search functionality using AI, making it easier for customers to find what they need
              quickly.
            </p>
          </div>

          <div className="service-item">
            <img src={automation} alt="E-Commerce Automation" />
            <h5>E-Commerce Automation</h5>
            <p>
              Automate tasks such as order processing, customer support, and marketing campaigns to streamline your
              e-commerce operations.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our E-Commerce Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={seamlessIntegration} alt="Seamless Integration" />
            <h5>Seamless Integration</h5>
            <p>
              Easily integrate ChatGPT with your existing e-commerce platform to enhance customer interactions without
              disrupting current workflows.
            </p>
          </div>

          <div className="dna-item">
            <img src={analytics} alt="AI-Driven Analytics" />
            <h5>AI-Driven Analytics</h5>
            <p>
              Utilize AI for deep customer insights, helping you make data-driven decisions that improve sales and
              customer satisfaction.
            </p>
          </div>

          <div className="dna-item">
            <img src={marketingAutomation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>
              Automate and optimize your marketing campaigns with AI, reaching the right customers at the right time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
