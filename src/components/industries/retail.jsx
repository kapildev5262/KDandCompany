import "./industries.css";
import { useEffect } from "react";
import retailImage from "../../assets/retail.jpg"; // Update to your retail background image
import curriculum from "../../assets/RetailCurriculum.jpg"; // Update to your retail curriculum image
import eLearning from "../../assets/learning.jpg"; // You can keep this if it's suitable
import research from "../../assets/labs.jpg"; // You can keep this if it's suitable
import training from "../../assets/classRoom.jpg"; // You can keep this if it's suitable
import trendsImage from "../../assets/RetailTrends.avif"; // Update to your retail trends image
import { Link, useLocation } from "react-router-dom";

export default function RetailServices() {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="education-industries-page">
      {/* Retail Services Section */}
      <section className="education-section">
        <div className="background1" style={{ backgroundImage: `url(${retailImage})` }}>
          <div className="heading1">
            <h1>Retail Services</h1>
            <p style={{ color: "white" }}>
              Retail services play a crucial role in enhancing customer experiences and driving sales. Our goal is to
              provide innovative educational solutions that enhance skills and knowledge within the retail industry.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <h2>Overview</h2>
        <p>
          The retail industry is vital in shaping consumer experiences and driving economic growth. By integrating
          modern educational practices, we empower individuals and organizations with the skills necessary to thrive in
          this dynamic environment.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Customized Retail Learning Paths:</strong> Tailored educational experiences to meet the specific
            needs of the retail sector.
          </li>
          <li>
            <strong>Technology Integration:</strong> Utilizing advanced technologies to enhance retail training and
            operations.
          </li>
          <li>
            <strong>Expert Retail Instructors:</strong> Learn from industry professionals with extensive experience in
            retail management.
          </li>
          <li>
            <strong>Flexible Learning Options:</strong> Online and offline learning modes to cater to all learners in
            the retail field.
          </li>
        </ul>
      </section>

      {/* Services Offered Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={curriculum} alt="Curriculum Development" />
            <h5>Retail Curriculum Development</h5>
            <p>Creating industry-relevant curricula that prepare learners for real-world challenges in retail.</p>
          </div>
          <div className="service-item">
            <img src={eLearning} alt="E-Learning Solutions" />
            <h5>E-Learning Solutions</h5>
            <p>Robust online platforms offering interactive retail courses for flexible learning.</p>
          </div>
          <div className="service-item">
            <img src={research} alt="Research & Development" />
            <h5>Retail Research & Development</h5>
            <p>Ongoing research to adapt educational offerings to current retail industry needs.</p>
          </div>
          <div className="service-item">
            <img src={training} alt="Retail Training" />
            <h5>Retail Professional Training</h5>
            <p>Professional development programs for retail educators to enhance teaching methodologies.</p>
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="trends-section">
        <h2>Industry Trends</h2>
        <div className="trends-content">
          <img src={trendsImage} alt="Industry Trends" className="industriesTrends" />
          <p>
            As the retail industry evolves, so do the educational requirements. Current trends include the rise of
            e-commerce, the integration of AI in customer service, and a focus on sustainable retail practices.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2>Contact Us</h2>
        <p>If you are interested in our retail services or have any questions, please reach out to us!</p>
        <Link to={"/contact/"}>
          <button className="btn-primary">Get In Touch</button>
        </Link>
      </section>
    </div>
  );
}
