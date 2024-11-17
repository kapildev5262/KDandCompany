import "../services.css";

import { useEffect } from "react";
import dashboardImage from "../../../assets/SD.jpeg"; // New image for Sales Dashboard
import analytics from "../../../assets/analytics.png"; // Keep existing images or add new ones as needed
import integration from "../../../assets/sales-integration.avif";
import reporting from "../../../assets/repoting.avif";
import dataVisualization from "../../../assets/data-visual.jpg";
import automation from "../../../assets/ml-automation.avif";
import support from "../../../assets/CustomerSupport.avif";
import security from "../../../assets/security2.avif";
import { useLocation } from "react-router-dom";

export default function SalesDashboard() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="sales-dashboard-page">
      {/* Sales Dashboard Section */}
      <section className="dashboard-section">
        <div className="background1" style={{ backgroundImage: `url(${dashboardImage})` }}>
          <div className="heading1">
            <h1>Sales Dashboard Development</h1>
            <p style={{ color: "white" }}>
              Our Sales Dashboard Development services provide you with intuitive, interactive dashboards that enable
              real-time insights into your sales performance. Harness the power of data to drive your business
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Sales Dashboards</h2>
        <ul>
          <li>
            <strong>Real-time Analytics:</strong> Get instant insights into sales performance with up-to-date data.
          </li>
          <li>
            <strong>Customizable Views:</strong> Tailor your dashboard to focus on the metrics that matter most to your
            business.
          </li>
          <li>
            <strong>Data Integration:</strong> Seamlessly integrate with existing sales and marketing tools for a
            unified view.
          </li>
          <li>
            <strong>Visual Reporting:</strong> Use charts and graphs for easy comprehension of complex data sets.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our Sales Dashboard Development services empower organizations with tools that provide clarity and drive
          action. From data aggregation to visualization, we offer end-to-end solutions that enhance decision-making and
          strategic planning.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={analytics} alt="Analytics" />
            <h5>Advanced Analytics</h5>
            <p>
              Leverage data analytics to uncover sales trends and customer behaviors, driving smarter business
              strategies.
            </p>
          </div>

          <div className="service-item">
            <img src={integration} alt="Integration" />
            <h5>System Integration</h5>
            <p>
              Ensure seamless integration with your existing CRM and sales tools for a comprehensive sales overview.
            </p>
          </div>

          <div className="service-item">
            <img src={reporting} alt="Reporting" />
            <h5>Automated Reporting</h5>
            <p>Generate insightful reports automatically to save time and enhance productivity.</p>
          </div>

          <div className="service-item">
            <img src={dataVisualization} alt="Data Visualization" />
            <h5>Data Visualization</h5>
            <p>Transform complex data sets into visually appealing and understandable charts and graphs.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Automation" />
            <h5>Sales Process Automation</h5>
            <p>Automate your sales processes to improve efficiency and focus on closing deals.</p>
          </div>

          <div className="service-item">
            <img src={support} alt="Support" />
            <h5>Ongoing Support</h5>
            <p>Receive continuous support and training to ensure you get the most out of your sales dashboard.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <h2>Why Choose Our Sales Dashboard Services?</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={security} alt="Security" />
            <h5>Data Security</h5>
            <p>We prioritize the security of your data with robust measures to ensure confidentiality and integrity.</p>
          </div>

          <div className="dna-item">
            <img src={support} alt="Support" />
            <h5>Dedicated Support</h5>
            <p>Our team is here to assist you every step of the way, from setup to ongoing maintenance.</p>
          </div>

          <div className="dna-item">
            <img src={analytics} alt="Customization" />
            <h5>Customization</h5>
            <p>Tailor our dashboards to fit your unique business needs and objectives, ensuring maximum impact.</p>
          </div>

          <div className="dna-item">
            <img src={dataVisualization} alt="User-Friendly" />
            <h5>User-Friendly Interface</h5>
            <p>Designed with user experience in mind, our dashboards are easy to navigate and understand.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
