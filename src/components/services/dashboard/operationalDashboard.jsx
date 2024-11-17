import "../services.css";

import { useEffect } from "react";
import dashboardImage from "../../../assets/OP.jpeg"; // Image for the dashboard
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
import technology from "../../../assets/insurance.png";
import reliability from "../../../assets/prediction.png";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="dashboard-page">
      {/* Dashboard Section */}
      <section className="dashboard-section">
        <div className="background1" style={{ backgroundImage: `url(${dashboardImage})` }}>
          <div className="heading1">
            <h1>Operational Dashboard Development</h1>
            <p style={{ color: "white" }}>
              Our operational dashboards provide real-time insights into your business performance, enabling data-driven
              decisions and enhanced operational efficiency. Leverage powerful analytics and visualizations to transform
              your data into actionable intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Dashboards</h2>
        <ul>
          <li>
            <strong>Real-Time Data:</strong> Access up-to-date information for informed decision-making.
          </li>
          <li>
            <strong>Customizable Views:</strong> Tailor dashboards to meet specific business needs and metrics.
          </li>
          <li>
            <strong>Interactive Visualizations:</strong> Engage with your data through dynamic charts and graphs.
          </li>
          <li>
            <strong>Mobile Accessibility:</strong> Monitor your operations on the go with responsive design.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our dashboard development services are designed to help organizations harness the power of data. From
          conceptualization to deployment, we ensure that your operational dashboard is aligned with your business goals
          and provides valuable insights.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative & Design" />
            <h5>Creative & Design</h5>
            <p>Tailored dashboard designs that prioritize user experience and data visualization.</p>
          </div>

          <div className="service-item">
            <img src={social} alt="Data Integration" />
            <h5>Data Integration</h5>
            <p>Seamlessly connect various data sources to create a unified dashboard experience.</p>
          </div>

          <div className="service-item">
            <img src={listening} alt="Data Analysis" />
            <h5>Data Analysis</h5>
            <p>Utilize advanced analytics to extract actionable insights from your data.</p>
          </div>

          <div className="service-item">
            <img src={media} alt="Reporting" />
            <h5>Automated Reporting</h5>
            <p>Generate real-time reports that summarize key metrics and performance indicators.</p>
          </div>

          <div className="service-item">
            <img src={engine} alt="Performance Monitoring" />
            <h5>Performance Monitoring</h5>
            <p>Keep track of key performance indicators with automated alerts and notifications.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Customization" />
            <h5>Customization</h5>
            <p>Customize dashboards to meet your specific operational needs and preferences.</p>
          </div>
        </div>
      </section>

      {/* Core Aspects of Our Services Section */}
      <section className="dna-section">
        <h2>Core Aspects of Our Dashboard Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Agile Delivery Model</h5>
            <p>We adopt an agile approach to ensure timely and efficient delivery of your dashboard solutions.</p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Comprehensive analytics capabilities that provide deep insights into your data.</p>
          </div>

          <div className="dna-item">
            <img src={marketautomation} alt="Automation" />
            <h5>Automation</h5>
            <p>Automate data collection and reporting processes for enhanced efficiency.</p>
          </div>

          <div className="dna-item">
            <img src={creativemaver} alt="Creative Design" />
            <h5>Creative Design</h5>
            <p>Innovative design solutions that enhance user engagement and experience.</p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Cutting-Edge Technology</h5>
            <p>Leverage the latest technologies to build robust and scalable dashboard solutions.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Ensure reliable data access and performance with our proven methodologies.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
