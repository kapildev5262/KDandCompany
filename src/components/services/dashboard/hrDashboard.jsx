import "../services.css";
import { useEffect } from "react";
import hrImage from "../../../assets/HR.jpeg"; // HR Dashboard image import
import creative from "../../../assets/creative.png";
import social from "../../../assets/socialmedia.png";
import delivery from "../../../assets/deliverymodel.png";
import analytic from "../../../assets/analytics.png";
import technology from "../../../assets/insurance.png";
import reliability from "../../../assets/prediction.png";
import { useLocation } from "react-router-dom";

export default function HRDashboard() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="hr-dashboard-page">
      {/* HR Dashboard Section */}
      <section className="dashboard-section">
        <div className="background1" style={{ backgroundImage: `url(${hrImage})` }}>
          <div className="heading1">
            <h1>HR Dashboard Development Services</h1>
            <p style={{ color: "white" }}>
              Our HR dashboard development services provide organizations with insightful data visualization and
              analytics, enhancing workforce management and strategic HR planning.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our HR Dashboards</h2>
        <ul>
          <li>
            <strong>Real-time Employee Analytics:</strong> Access key metrics on employee performance and engagement.
          </li>
          <li>
            <strong>Customizable Reports:</strong> Generate tailored reports to meet specific HR requirements.
          </li>
          <li>
            <strong>Integration with HR Systems:</strong> Seamlessly connect with existing HR management tools.
          </li>
          <li>
            <strong>Compliance and Security:</strong> Ensure data security and compliance with industry regulations.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our HR dashboard development services are crafted to facilitate informed decision-making and enhance workforce
          productivity. We provide comprehensive solutions, from concept to deployment, equipping you with the tools
          needed for HR excellence.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Custom Dashboard Design" />
            <h5>Custom Dashboard Design</h5>
            <p>Create tailored dashboards that reflect your organization's HR metrics and culture.</p>
          </div>

          <div className="service-item">
            <img src={social} alt="Employee Engagement Analytics" />
            <h5>Employee Engagement Analytics</h5>
            <p>Analyze employee engagement and satisfaction to drive retention strategies.</p>
          </div>

          <div className="service-item">
            <img src={delivery} alt="Implementation" />
            <h5>Implementation</h5>
            <p>Ensure seamless implementation and integration of your HR dashboard solutions.</p>
          </div>

          <div className="service-item">
            <img src={analytic} alt="Performance Tracking" />
            <h5>Performance Tracking</h5>
            <p>Monitor workforce performance in real-time to facilitate timely HR decisions.</p>
          </div>

          <div className="service-item">
            <img src={technology} alt="Technology Solutions" />
            <h5>Technology Solutions</h5>
            <p>Utilize the latest technologies for a responsive and effective HR dashboard experience.</p>
          </div>

          <div className="service-item">
            <img src={reliability} alt="Support and Maintenance" />
            <h5>Support and Maintenance</h5>
            <p>Receive continuous support and maintenance for optimal performance of your HR dashboards.</p>
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
            <p>We offer flexible delivery models to meet your project's specific needs and timelines.</p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Data Analysis" />
            <h5>Data Analysis</h5>
            <p>Utilize advanced data analytics to gain valuable insights into your workforce dynamics.</p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Innovative Technology" />
            <h5>Innovative Technology</h5>
            <p>Stay competitive with innovative technology that enhances HR processes and decision-making.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Count on us for reliable services that ensure the stability and longevity of your HR dashboards.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
