import "../services.css";
import { useEffect } from "react";
import contentMarketingImage from "../../../assets/Content-Marketing.webp"; // Content Marketing main image
import creative from "../../../assets/creative.png";
import strategy from "../../../assets/strategy.jpg"; // Strategy image
import seo from "../../../assets/seo.png";
import media from "../../../assets/MediaPlanning.png";
import automation from "../../../assets/marketingautomation.png";
import analytics from "../../../assets/analytics.png";
import copywriting from "../../../assets/copyWriting.jpg"; // Copywriting image
import distribution from "../../../assets/distribution.png"; // Distribution image
import reliability from "../../../assets/reliable1.avif"; // Reliability image
import { useLocation } from "react-router-dom";

export default function ContentMarketing() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="content-marketing-page">
      {/* Content Marketing Section */}
      <section className="content-marketing-section">
        <div className="background1" style={{ backgroundImage: `url(${contentMarketingImage})` }}>
          <div className="heading1">
            <h1>Content Marketing Services</h1>
            <p style={{ color: "white" }}>
              Drive brand growth with strategic content marketing, combining creativity, data, and technology to engage
              your audience and increase reach.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Content Marketing</h2>
        <ul>
          <li>
            <strong>Audience Engagement:</strong> Create compelling content that resonates with your target audience.
          </li>
          <li>
            <strong>SEO Optimization:</strong> Improve visibility with content tailored for search engines and user
            intent.
          </li>
          <li>
            <strong>Cross-Platform Reach:</strong> Distribute content across various digital channels for maximum
            impact.
          </li>
          <li>
            <strong>Analytics-Driven:</strong> Use data insights to refine strategies and measure content success.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our content marketing services are designed to elevate your brand, enhance visibility, and foster meaningful
          engagement with your audience. From strategy to content creation and analytics, we ensure a holistic approach
          to content marketing.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative & Design" />
            <h5>Creative & Design</h5>
            <p>Innovative content designs that capture attention and communicate your brand’s story.</p>
          </div>

          <div className="service-item">
            <img src={strategy} alt="Content Strategy" />
            <h5>Content Strategy</h5>
            <p>Develop a tailored strategy to guide content creation and align with your brand goals.</p>
          </div>

          <div className="service-item">
            <img src={seo} alt="SEO Optimization" />
            <h5>SEO Optimization</h5>
            <p>Optimize content for search engines, increasing visibility and engagement.</p>
          </div>

          <div className="service-item">
            <img src={media} alt="Media Planning" />
            <h5>Media Planning</h5>
            <p>Strategic distribution across the right channels for maximum reach and impact.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>Automate content delivery for personalized and efficient customer journeys.</p>
          </div>

          <div className="service-item">
            <img src={copywriting} alt="Copywriting" />
            <h5>Copywriting</h5>
            <p>Craft compelling content that engages and informs, driving your message home.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Content Marketing Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={distribution} alt="Content Distribution" />
            <h5>Content Distribution</h5>
            <p>Strategic content placement to reach your audience across all relevant platforms.</p>
          </div>

          <div className="dna-item">
            <img src={analytics} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Leverage data insights to measure, analyze, and improve content performance.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Reliable, data-driven approaches for consistent, impactful content marketing.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
