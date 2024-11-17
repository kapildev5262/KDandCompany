import "../services.css";
import { useEffect } from "react";
import automationBg from "../../../assets/Automation.webp"; // Background image for Automation
import creative from "../../../assets/creative.png";
import social from "../../../assets/socialmedia.png";
import listening from "../../../assets/SocialListening.png";
import media from "../../../assets/MediaPlanning.png";
import engine from "../../../assets/seo.png";
import automationImg from "../../../assets/marketingautomation.png";
import delivery from "../../../assets/deliverymodel.png";
import analytic from "../../../assets/analytics.png";
import marketautomation from "../../../assets/marketingautomation.png";
import creativemaver from "../../../assets/creative.png";
import technology from "../../../assets/insurance.png";
import reliability from "../../../assets/prediction.png";
import { useLocation } from "react-router-dom";

export default function AutomationServices() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="automation-page">
      {/* Automation Section */}
      <section className="automation-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${automationBg})` }} // Updated background image for Automation
        >
          <div className="heading1">
            <h1>Automation Services</h1>
            <p style={{ color: "white" }}>
              Our Automation Services empower businesses to streamline their processes, enhance productivity, and drive
              growth through cutting-edge technologies and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Automation Services</h2>
        <ul>
          <li>
            <strong>Efficiency:</strong> Automate repetitive tasks to save time and reduce errors.
          </li>
          <li>
            <strong>Integration:</strong> Seamlessly connect various business tools and platforms for improved workflow.
          </li>
          <li>
            <strong>Scalability:</strong> Easily scale automation solutions as your business grows.
          </li>
          <li>
            <strong>Analytics:</strong> Gain insights from automated processes for better decision-making.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our automation services are designed to optimize your business operations. From strategy development to
          implementation, we provide customized solutions that align with your specific needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative & Design" />
            <h5>Creative & Design</h5>
            <p>Innovative design solutions that enhance user interaction with automated systems.</p>
          </div>

          <div className="service-item">
            <img src={social} alt="Social Media Marketing" />
            <h5>Social Media Marketing</h5>
            <p>Automate your social media campaigns for improved engagement and efficiency.</p>
          </div>

          <div className="service-item">
            <img src={listening} alt="Social Listening" />
            <h5>Social Listening</h5>
            <p>Use automation tools to monitor brand sentiment and market trends effortlessly.</p>
          </div>

          <div className="service-item">
            <img src={media} alt="Media Planning and Buying" />
            <h5>Media Planning and Buying</h5>
            <p>Automate media planning for precise ad placements and budget management.</p>
          </div>

          <div className="service-item">
            <img src={engine} alt="Search Engine Optimization" />
            <h5>Search Engine Optimization</h5>
            <p>Enhance your online visibility with automated SEO solutions tailored to your business.</p>
          </div>

          <div className="service-item">
            <img src={automationImg} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>Streamline your marketing efforts through automation for greater impact and accountability.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Automation Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>Tailored delivery models to meet diverse automation needs across industries.</p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Leverage analytics tools to gain actionable insights from your automated processes.</p>
          </div>

          <div className="dna-item">
            <img src={marketautomation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>Automate your marketing operations for streamlined workflows and enhanced results.</p>
          </div>

          <div className="dna-item">
            <img src={creativemaver} alt="Creative Mavericks" />
            <h5>Creative Mavericks</h5>
            <p>Expertise in creating engaging and user-friendly automation solutions.</p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Technology</h5>
            <p>Cutting-edge technologies to drive efficiency and innovation in your business operations.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Ensure reliable operations with real-time monitoring and support.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
