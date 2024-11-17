import "../services.css";
import { useEffect } from "react";
import seoBanner from "../../../assets/SEO.webp"; // Replace with an SEO-related image
import seo from "../../../assets/seo.png";
import keywordResearch from "../../../assets/keyword.jpg";
import onPage from "../../../assets/SEO-optimization.avif";
import linkBuilding from "../../../assets/link-building.jpg";
import analytics from "../../../assets/analytics.png";
import contentCreation from "../../../assets/content.avif";
import technicalSEO from "../../../assets/seo1.avif";
import localSEO from "../../../assets/seo2.avif";
import { useLocation } from "react-router-dom";

export default function SEO() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="seo-page">
      {/* SEO Banner Section */}
      <section className="seo-banner">
        <div className="background1" style={{ backgroundImage: `url(${seoBanner})` }}>
          <div className="heading1">
            <h1>SEO Services</h1>
            <p style={{ color: "white" }}>
              Boost your online presence with our comprehensive SEO services. From keyword research to technical
              optimization, we provide a holistic approach to drive your site’s visibility and traffic.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features of SEO Section */}
      <section className="features-section">
        <h2>Core Aspects of SEO</h2>
        <ul>
          <li>
            <strong>Keyword Research:</strong> Identifying the most effective keywords to target for driving relevant
            traffic.
          </li>
          <li>
            <strong>On-Page Optimization:</strong> Optimizing individual pages to rank higher and earn more relevant
            traffic.
          </li>
          <li>
            <strong>Link Building:</strong> Creating high-quality backlinks to increase authority and visibility.
          </li>
          <li>
            <strong>Content Strategy:</strong> Developing quality content that meets user intent and engages visitors.
          </li>
        </ul>
      </section>

      {/* Our SEO Services Section */}
      <section className="services-section">
        <h2>Our SEO Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={keywordResearch} alt="Keyword Research" />
            <h5>Keyword Research</h5>
            <p>Identifying high-value keywords to attract your target audience and drive quality traffic.</p>
          </div>

          <div className="service-item">
            <img src={onPage} alt="On-Page Optimization" />
            <h5>On-Page Optimization</h5>
            <p>Enhancing your content and HTML source code for better rankings on search engines.</p>
          </div>

          <div className="service-item">
            <img src={linkBuilding} alt="Link Building" />
            <h5>Link Building</h5>
            <p>Building strategic partnerships and backlinks to enhance your domain authority.</p>
          </div>

          <div className="service-item">
            <img src={contentCreation} alt="Content Creation" />
            <h5>Content Creation</h5>
            <p>Crafting SEO-optimized content to engage your audience and improve search visibility.</p>
          </div>

          <div className="service-item">
            <img src={technicalSEO} alt="Technical SEO" />
            <h5>Technical SEO</h5>
            <p>Improving website structure, mobile-friendliness, and speed for better performance.</p>
          </div>

          <div className="service-item">
            <img src={localSEO} alt="Local SEO" />
            <h5>Local SEO</h5>
            <p>Optimizing for local search to attract nearby customers and increase foot traffic.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our SEO Services Section */}
      <section className="dna-section">
        <h2>DNA of Our SEO Strategy</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={analytics} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Leveraging analytics to track performance and make data-driven adjustments.</p>
          </div>

          <div className="dna-item">
            <img src={contentCreation} alt="Content Strategy" />
            <h5>Content Strategy</h5>
            <p>A solid content plan aimed at engaging audiences and addressing their needs.</p>
          </div>

          <div className="dna-item">
            <img src={linkBuilding} alt="Backlink Strategy" />
            <h5>Backlink Strategy</h5>
            <p>Building a strong backlink profile to elevate your site’s authority.</p>
          </div>

          <div className="dna-item">
            <img src={technicalSEO} alt="Site Optimization" />
            <h5>Site Optimization</h5>
            <p>Ensuring your website meets technical SEO standards for peak performance.</p>
          </div>

          <div className="dna-item">
            <img src={keywordResearch} alt="Targeted Keywords" />
            <h5>Targeted Keywords</h5>
            <p>Using carefully selected keywords to drive the right audience to your site.</p>
          </div>

          <div className="dna-item">
            <img src={seo} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Our reliable, data-driven SEO approach helps maintain strong, consistent rankings.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
