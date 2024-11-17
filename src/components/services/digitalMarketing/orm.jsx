import "../services.css";
import { useEffect } from "react";
import ormImage from "../../../assets/ORM.webp"; // ORM service main image
import brandMonitoring from "../../../assets/brand.avif";
import crisisManagement from "../../../assets/crisis_font_1.jpg";
import reviewManagement from "../../../assets/Feedback1.avif";
import contentCreation from "../../../assets/content.avif";
import seo from "../../../assets/seo.png";
import socialMediaManagement from "../../../assets/SocialMedia.avif";
import analytics from "../../../assets/analytics.png";
import reliability from "../../../assets/reliable1.avif";
import { useLocation } from "react-router-dom";

export default function OrmServices() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="orm-page">
      {/* ORM Header Section */}
      <section className="orm-section">
        <div className="background1" style={{ backgroundImage: `url(${ormImage})` }}>
          <div className="heading1">
            <h1>Online Reputation Management (ORM)</h1>
            <p style={{ color: "white" }}>
              Protect and enhance your brand's online presence with our comprehensive ORM services, ensuring a positive
              image across digital platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of ORM</h2>
        <ul>
          <li>
            <strong>Brand Monitoring:</strong> Track brand mentions across digital channels and maintain a consistent
            image.
          </li>
          <li>
            <strong>Crisis Management:</strong> Proactively manage crises and maintain a positive brand presence.
          </li>
          <li>
            <strong>Review Management:</strong> Monitor and respond to reviews to build customer trust and loyalty.
          </li>
          <li>
            <strong>SEO Optimization:</strong> Improve search visibility to present your brand in the best light.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our ORM services are tailored to protect, promote, and improve your brand’s reputation. From strategic
          planning to real-time monitoring, we help you maintain a positive digital footprint.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={brandMonitoring} alt="Brand Monitoring" />
            <h5>Brand Monitoring</h5>
            <p>Continuous monitoring of your brand’s online presence to detect and address potential issues.</p>
          </div>

          <div className="service-item">
            <img src={crisisManagement} alt="Crisis Management" />
            <h5>Crisis Management</h5>
            <p>Proactive crisis management to prevent reputation damage during critical situations.</p>
          </div>

          <div className="service-item">
            <img src={reviewManagement} alt="Review Management" />
            <h5>Review Management</h5>
            <p>Efficiently manage online reviews to cultivate a positive brand perception.</p>
          </div>

          <div className="service-item">
            <img src={contentCreation} alt="Content Creation" />
            <h5>Content Creation</h5>
            <p>Crafting engaging and reputation-building content across digital channels.</p>
          </div>

          <div className="service-item">
            <img src={seo} alt="SEO Optimization" />
            <h5>SEO Optimization</h5>
            <p>Improve search rankings to showcase a positive online image for your brand.</p>
          </div>

          <div className="service-item">
            <img src={socialMediaManagement} alt="Social Media Management" />
            <h5>Social Media Management</h5>
            <p>Manage social media to build a consistent and favorable brand presence.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our ORM Services Section */}
      <section className="dna-section">
        <h2>DNA of Our ORM Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={analytics} alt="Analytics" />
            <h5>Analytics</h5>
            <p>In-depth analytics to track reputation metrics and measure the success of ORM efforts.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Reliable monitoring and reporting for maintaining a transparent online reputation.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
