import "./industries.css";
import { useEffect } from "react";
import transportationImage from "../../assets/TransportationBG.jpg"; // Update to your transportation background image
import curriculum from "../../assets/TransportationCurriculum.jpg"; // Update to your transportation curriculum image
import eLearning from "../../assets/learning.jpg"; // You can keep this if it's suitable
import research from "../../assets/labs.jpg"; // You can keep this if it's suitable
import training from "../../assets/classRoom.jpg"; // You can keep this if it's suitable
import trendsImage from "../../assets/TransportationTrends.jpg"; // Update to your transportation trends image
import { Link, useLocation } from "react-router-dom";

export default function TransportationServices() {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="education-industries-page">
      {/* Transportation Services Section */}
      <section className="education-section">
        <div className="background1" style={{ backgroundImage: `url(${transportationImage})` }}>
          <div className="heading1">
            <h1>Transportation Services</h1>
            <p style={{ color: "white" }}>
              Transportation services are essential for efficient movement and logistics. Our goal is to provide
              innovative educational solutions that enhance skills and knowledge within the transportation industry.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <h2>Overview</h2>
        <p>
          The transportation industry plays a critical role in connecting people and goods, driving economic
          development. By integrating modern educational practices, we empower individuals and organizations with the
          skills necessary to excel in this dynamic environment.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Customized Transportation Learning Paths:</strong> Tailored educational experiences to meet the
            specific needs of the transportation sector.
          </li>
          <li>
            <strong>Technology Integration:</strong> Utilizing advanced technologies to enhance transportation training
            and operations.
          </li>
          <li>
            <strong>Expert Transportation Instructors:</strong> Learn from industry professionals with extensive
            experience in transportation management.
          </li>
          <li>
            <strong>Flexible Learning Options:</strong> Online and offline learning modes to cater to all learners in
            the transportation field.
          </li>
        </ul>
      </section>

      {/* Services Offered Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={curriculum} alt="Curriculum Development" />
            <h5>Transportation Curriculum Development</h5>
            <p>
              Creating industry-relevant curricula that prepare learners for real-world challenges in transportation.
            </p>
          </div>
          <div className="service-item">
            <img src={eLearning} alt="E-Learning Solutions" />
            <h5>E-Learning Solutions</h5>
            <p>Robust online platforms offering interactive transportation courses for flexible learning.</p>
          </div>
          <div className="service-item">
            <img src={research} alt="Research & Development" />
            <h5>Transportation Research & Development</h5>
            <p>Ongoing research to adapt educational offerings to current transportation industry needs.</p>
          </div>
          <div className="service-item">
            <img src={training} alt="Transportation Training" />
            <h5>Transportation Professional Training</h5>
            <p>Professional development programs for transportation educators to enhance teaching methodologies.</p>
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="trends-section">
        <h2>Industry Trends</h2>
        <div className="trends-content">
          <img src={trendsImage} alt="Industry Trends" className="industriesTrends" />
          <p>
            As the transportation industry evolves, so do the educational requirements. Current trends include the rise
            of autonomous vehicles, sustainability in logistics, and the integration of technology in transportation
            management.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2>Contact Us</h2>
        <p>If you are interested in our transportation services or have any questions, please reach out to us!</p>
        <Link to={"/contact/"}>
          <button className="btn-primary">Get In Touch</button>
        </Link>
      </section>
    </div>
  );
}
