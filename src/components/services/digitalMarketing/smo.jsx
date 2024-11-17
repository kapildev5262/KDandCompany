import "../services.css";
import { useEffect } from "react";
import smoBanner from "../../../assets/SMO2.jpg"; // Replace with SMO banner image
import creative from "../../../assets/creative.png";
import social from "../../../assets/socialmedia.png";
import listening from "../../../assets/SocialListening.png";
import engagement from "../../../assets/strategy11.avif";
import brandAwareness from "../../../assets/brand.avif";
import community from "../../../assets/community.avif";
import analytics from "../../../assets/analytics.png";
import content from "../../../assets/content.avif";
import reliability from "../../../assets/reliable1.avif";
import { useLocation } from "react-router-dom";

export default function SmoServices() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="smo-page">
      {/* SMO Services Section */}
      <section className="smo-section">
        <div className="background1" style={{ backgroundImage: `url(${smoBanner})` }}>
          <div className="heading1">
            <h1>Social Media Optimization (SMO) Services</h1>
            <p style={{ color: "white" }}>
              Enhance your online presence and build brand loyalty with our specialized Social Media Optimization (SMO)
              services. Our strategies focus on engagement, visibility, and community building to reach your target
              audience effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our SMO Services</h2>
        <ul>
          <li>
            <strong>Audience Engagement:</strong> Develop meaningful interactions with your audience through creative
            content.
          </li>
          <li>
            <strong>Brand Visibility:</strong> Boost your brand's visibility across social platforms with strategic SMO
            tactics.
          </li>
          <li>
            <strong>Community Building:</strong> Foster a loyal community by consistently engaging and responding to
            followers.
          </li>
          <li>
            <strong>Data-Driven Strategy:</strong> Utilize insights and analytics to refine and improve your social
            media approach.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our SMO services are tailored to enhance brand presence, engage customers, and improve reach. From content
          creation to audience analysis, we offer end-to-end solutions for your social media needs.
        </p>
      </section>

      {/* SMO Services Section */}
      <section className="services-section">
        <h2>Our SMO Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative Content" />
            <h5>Creative Content</h5>
            <p>
              Engage your audience with visually appealing and relevant content that resonates with their interests.
            </p>
          </div>

          <div className="service-item">
            <img src={social} alt="Social Media Campaigns" />
            <h5>Social Media Campaigns</h5>
            <p>
              Run impactful campaigns on platforms like Facebook, Instagram, and Twitter to increase reach and
              engagement.
            </p>
          </div>

          <div className="service-item">
            <img src={listening} alt="Social Listening" />
            <h5>Social Listening</h5>
            <p>Monitor brand mentions and trends to understand your audience and refine your social media strategy.</p>
          </div>

          <div className="service-item">
            <img src={engagement} alt="Engagement Strategy" />
            <h5>Engagement Strategy</h5>
            <p>Implement strategies to foster interaction and loyalty among your followers.</p>
          </div>

          <div className="service-item">
            <img src={brandAwareness} alt="Brand Awareness" />
            <h5>Brand Awareness</h5>
            <p>Increase visibility and recognition through targeted awareness campaigns.</p>
          </div>

          <div className="service-item">
            <img src={community} alt="Community Management" />
            <h5>Community Management</h5>
            <p>Build and manage a strong community of followers through active engagement and support.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our SMO Services Section */}
      <section className="dna-section">
        <h2>DNA of Our SMO Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={content} alt="Content Strategy" />
            <h5>Content Strategy</h5>
            <p>We develop a targeted content strategy tailored to your brand’s goals and audience preferences.</p>
          </div>

          <div className="dna-item">
            <img src={analytics} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Our data-driven approach uses social analytics to measure and optimize campaign performance.</p>
          </div>

          <div className="dna-item">
            <img src={creative} alt="Creative Mavericks" />
            <h5>Creative Mavericks</h5>
            <p>Our creative team ensures that your content stands out with unique and compelling visuals.</p>
          </div>

          <div className="dna-item">
            <img src={community} alt="Community Engagement" />
            <h5>Community Engagement</h5>
            <p>Build a loyal following with responsive and thoughtful engagement strategies.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Real-time monitoring for reliable, responsive interactions with your social audience.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
