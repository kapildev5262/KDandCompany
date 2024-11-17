import "../services.css";

import { useEffect } from "react";
import marketingImage from "../../../assets/Marketing.jpeg"; // Marketing image import
import creative from "../../../assets/creative.png";
import social from "../../../assets/socialmedia.png";
import listening from "../../../assets/SocialListening.png";
import media from "../../../assets/MediaPlanning.png";
import engine from "../../../assets/seo.png";
import automation from "../../../assets/marketingautomation.png";
import delivery from "../../../assets/deliverymodel.png";
import analytic from "../../../assets/analytics.png";
import marketautomation from "../../../assets/marketingautomation.png";
import creativemaver from "../../../assets/creative.png";
import technology from "../../../assets/Security-Best-Practices.avif";
import reliability from "../../../assets/reliable1.avif";
import { useLocation } from "react-router-dom";

export default function MarketingDashboard() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="marketing-dashboard-page">
      {/* Marketing Dashboard Section */}
      <section className="marketing-dashboard-section">
        <div className="background1" style={{ backgroundImage: `url(${marketingImage})` }}>
          <div className="heading1">
            <h1>Marketing Dashboard Development</h1>
            <p style={{ color: "white" }}>
              Our marketing dashboard development services empower businesses with the tools to analyze data, track
              performance, and optimize strategies effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Marketing Dashboards</h2>
        <ul>
          <li>
            <strong>Real-time Analytics:</strong> Access real-time data for quick decision-making.
          </li>
          <li>
            <strong>Customizable Reports:</strong> Tailor reports to meet specific business needs.
          </li>
          <li>
            <strong>Performance Tracking:</strong> Monitor key performance indicators to assess marketing efforts.
          </li>
          <li>
            <strong>User-friendly Interface:</strong> Easy navigation and usability for all team members.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our marketing dashboard development services are designed to provide comprehensive insights into your
          marketing performance, helping you make data-driven decisions and enhance your ROI.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative & Design" />
            <h5>Creative & Design</h5>
            <p>Craft visually appealing dashboards that enhance user engagement and provide a seamless experience.</p>
          </div>

          <div className="service-item">
            <img src={social} alt="Social Media Marketing" />
            <h5>Social Media Analytics</h5>
            <p>Track and analyze social media performance to optimize your strategies and engagement.</p>
          </div>

          <div className="service-item">
            <img src={listening} alt="Market Research" />
            <h5>Market Research</h5>
            <p>Utilize data analytics for understanding market trends and customer preferences.</p>
          </div>

          <div className="service-item">
            <img src={media} alt="Media Planning" />
            <h5>Media Planning and Buying</h5>
            <p>Enhance media planning efforts with insightful data analytics to improve ad placement strategies.</p>
          </div>

          <div className="service-item">
            <img src={engine} alt="Search Engine Optimization" />
            <h5>Search Engine Optimization</h5>
            <p>Optimize your digital presence with tailored SEO strategies for better visibility.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>Streamline your marketing efforts with automation tools designed to maximize efficiency.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Marketing Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>Customized delivery models to ensure optimal service and support for your marketing needs.</p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Analytics" />
            <h5>Analytics</h5>
            <p>In-depth analytics services to help you understand your marketing performance better.</p>
          </div>

          <div className="dna-item">
            <img src={marketautomation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>Tools and strategies to automate marketing tasks and enhance campaign effectiveness.</p>
          </div>

          <div className="dna-item">
            <img src={creativemaver} alt="Creative Mavericks" />
            <h5>Creative Mavericks</h5>
            <p>Expertise in UX and creative design for impactful marketing dashboards.</p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Technology</h5>
            <p>Innovative technology solutions tailored to boost your marketing performance.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Ensure dependable data and insights with real-time monitoring and reporting.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
