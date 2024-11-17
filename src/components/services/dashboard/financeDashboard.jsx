import "../services.css";
import { useEffect } from "react";
import blockchain from "../../../assets/FD.jpeg"; // Finance Dashboard image import
import creative from "../../../assets/creative.png";
import social from "../../../assets/socialmedia.png";
import delivery from "../../../assets/deliverymodel.png";
import analytic from "../../../assets/analytics.png";
import technology from "../../../assets/insurance.png";
import reliability from "../../../assets/prediction.png";
import { useLocation } from "react-router-dom";

export default function FinanceDashboard() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="finance-dashboard-page">
      {/* Finance Dashboard Section */}
      <section className="dashboard-section">
        <div className="background1" style={{ backgroundImage: `url(${blockchain})` }}>
          <div className="heading1">
            <h1>Finance Dashboard Development Services</h1>
            <p style={{ color: "white" }}>
              Our finance dashboard development services empower businesses with real-time data analytics and
              visualization, enabling informed decision-making and strategic financial planning.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Finance Dashboards</h2>
        <ul>
          <li>
            <strong>Real-time Data Visualization:</strong> Gain insights with interactive graphs and charts.
          </li>
          <li>
            <strong>Customizable Interfaces:</strong> Tailor dashboards to meet your specific business needs.
          </li>
          <li>
            <strong>Integration with Financial Tools:</strong> Seamlessly connect with existing financial systems.
          </li>
          <li>
            <strong>Security and Compliance:</strong> Ensure data integrity and compliance with industry standards.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our finance dashboard development services are designed to deliver insights that drive growth. We provide
          end-to-end solutions, from design to deployment, ensuring you have the tools you need for financial
          excellence.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Custom Dashboard Design" />
            <h5>Custom Dashboard Design</h5>
            <p>Create tailored dashboards that reflect your brand and cater to specific financial metrics.</p>
          </div>

          <div className="service-item">
            <img src={social} alt="Financial Analytics" />
            <h5>Financial Analytics</h5>
            <p>Analyze financial data trends to enhance decision-making processes.</p>
          </div>

          <div className="service-item">
            <img src={delivery} alt="Implementation" />
            <h5>Implementation</h5>
            <p>Ensure smooth integration and implementation of your finance dashboard.</p>
          </div>

          <div className="service-item">
            <img src={analytic} alt="Performance Tracking" />
            <h5>Performance Tracking</h5>
            <p>Monitor financial performance in real-time to make timely adjustments.</p>
          </div>

          <div className="service-item">
            <img src={technology} alt="Technology Solutions" />
            <h5>Technology Solutions</h5>
            <p>Leverage the latest technologies for a responsive and robust dashboard experience.</p>
          </div>

          <div className="service-item">
            <img src={reliability} alt="Support and Maintenance" />
            <h5>Support and Maintenance</h5>
            <p>Enjoy continuous support and maintenance for optimal performance of your dashboards.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>Core Aspects of Our Dashboard Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>We offer various delivery models to suit your project's requirements and timelines.</p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Data Analysis" />
            <h5>Data Analysis</h5>
            <p>Utilize advanced analytics for accurate and actionable financial insights.</p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Innovative Technology" />
            <h5>Innovative Technology</h5>
            <p>Stay ahead with cutting-edge technology that enhances your financial processes.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Count on us for reliable services that ensure the longevity and stability of your dashboards.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
