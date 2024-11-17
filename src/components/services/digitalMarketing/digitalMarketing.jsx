import "../services.css";
import { useEffect } from "react";
import digitalMarketingBanner from "../../../assets/DigitalMarket.jpg"; // Digital marketing banner image
import creative from "../../../assets/creative.png";
import social from "../../../assets/socialmedia.png";
import seo from "../../../assets/seo.png";
import content from "../../../assets/contentmarketing.png";
import automation from "../../../assets/marketingautomation.png";
import analytic from "../../../assets/analytics.png";
import emailMarketing from "../../../assets/email-icon.png";
import influencer from "../../../assets/c2.png";
import dataDriven from "../../../assets/blog1.png";
import innovation from "../../../assets/innovation.avif";
import personalization from "../../../assets/Whitepaper5.png";
import { useLocation } from "react-router-dom";

export default function DigitalMarketing() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="digital-marketing-page">
      {/* Digital Marketing Section */}
      <section className="digital-marketing-section">
        <div className="background1" style={{ backgroundImage: `url(${digitalMarketingBanner})` }}>
          <div className="heading1">
            <h1>Digital Marketing</h1>
            <p style={{ color: "white" }}>
              Enhance your online presence and connect with your audience through strategic digital marketing services.
              We offer comprehensive solutions tailored to your brand's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-section">
        <h2>Our Digital Marketing Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative & Design" />
            <h5>Creative & Design</h5>
            <p>We create visually compelling designs and content that engage your audience and elevate your brand.</p>
          </div>

          <div className="service-item">
            <img src={social} alt="Social Media Marketing" />
            <h5>Social Media Marketing</h5>
            <p>Boost your online presence with targeted social media campaigns that resonate with your audience.</p>
          </div>

          <div className="service-item">
            <img src={seo} alt="Search Engine Optimization" />
            <h5>Search Engine Optimization (SEO)</h5>
            <p>
              Increase your visibility on search engines and attract more organic traffic with our expert SEO
              strategies.
            </p>
          </div>

          <div className="service-item">
            <img src={content} alt="Content Marketing" />
            <h5>Content Marketing</h5>
            <p>Deliver valuable, consistent content to attract and engage your audience, building trust and loyalty.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>
              Automate your marketing efforts to reach the right audience at the right time, improving efficiency and
              ROI.
            </p>
          </div>

          <div className="service-item">
            <img src={analytic} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>
              Gain insights from data to make informed decisions and optimize your marketing strategies for better
              results.
            </p>
          </div>

          <div className="service-item">
            <img src={emailMarketing} alt="Email Marketing" />
            <h5>Email Marketing</h5>
            <p>
              Engage with your customers through personalized email campaigns designed to boost conversions and
              retention.
            </p>
          </div>

          <div className="service-item">
            <img src={influencer} alt="Influencer Marketing" />
            <h5>Influencer Marketing</h5>
            <p>Collaborate with influencers to expand your reach and build trust with your target audience.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Digital Marketing Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Digital Marketing Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={dataDriven} alt="Data-Driven Approach" />
            <h5>Data-Driven Approach</h5>
            <p>
              We use data to optimize strategies and deliver results that matter, ensuring informed decision-making.
            </p>
          </div>

          <div className="dna-item">
            <img src={innovation} alt="Innovation" />
            <h5>Innovation</h5>
            <p>
              Our team stays ahead of the curve by incorporating the latest tools and trends to bring fresh ideas to
              your marketing strategy.
            </p>
          </div>

          <div className="dna-item">
            <img src={personalization} alt="Personalization" />
            <h5>Personalization</h5>
            <p>
              We tailor our campaigns to your specific audience, delivering personalized experiences that resonate and
              convert.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="approach-section">
        <h2>Why Choose Our Digital Marketing Services?</h2>
        <p>
          We leverage the latest trends and tools to deliver results that align with your business objectives. Our team
          is dedicated to providing tailored solutions that drive growth, engagement, and conversions.
        </p>
      </section>
    </div>
  );
}
