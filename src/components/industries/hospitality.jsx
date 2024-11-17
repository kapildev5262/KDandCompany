import "./industries.css"; 
import { useEffect } from "react";
import hospitalityImage from "../../assets/Hospitality.jpg"; // Update to your hospitality background image
import curriculum from "../../assets/HospitalityCurriculum.jpg"; // Update to your hospitality curriculum image
import eLearning from "../../assets/learning.jpg"; // You can keep this if it's suitable
import research from "../../assets/labs.jpg"; // You can keep this if it's suitable
import training from "../../assets/classRoom.jpg"; // You can keep this if it's suitable
import trendsImage from "../../assets/HospitalityTrends.avif"; // Update to your hospitality trends image
import { Link, useLocation } from "react-router-dom";

export default function HospitalityOfIndustries() {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="education-industries-page">
      {/* Hospitality Services Section */}
      <section className="education-section">
        <div className="background1" style={{ backgroundImage: `url(${hospitalityImage})` }}>
          <div className="heading1">
            <h1>Hospitality Services</h1>
            <p style={{ color: "white" }}>
              Hospitality services are essential for delivering exceptional guest experiences and fostering customer
              loyalty. Our goal is to provide innovative educational solutions that enhance skills and knowledge within
              the hospitality industry.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <h2>Overview</h2>
        <p>
          The hospitality industry is pivotal in shaping memorable experiences for guests and creating lasting
          relationships. By integrating modern educational practices, we empower individuals and organizations with the
          skills necessary to thrive in a dynamic environment.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Customized Hospitality Learning Paths:</strong> Tailored educational experiences to meet the
            specific needs of the hospitality sector.
          </li>
          <li>
            <strong>Technology Integration:</strong> Utilizing advanced technologies to enhance guest service training
            and application.
          </li>
          <li>
            <strong>Expert Hospitality Instructors:</strong> Learn from industry professionals with extensive experience
            in hospitality management.
          </li>
          <li>
            <strong>Flexible Learning Options:</strong> Online and offline learning modes to cater to all learners in
            the hospitality field.
          </li>
        </ul>
      </section>

      {/* Services Offered Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={curriculum} alt="Curriculum Development" />
            <h5>Hospitality Curriculum Development</h5>
            <p>Creating industry-relevant curricula that prepare learners for real-world challenges in hospitality.</p>
          </div>
          <div className="service-item">
            <img src={eLearning} alt="E-Learning Solutions" />
            <h5>E-Learning Solutions</h5>
            <p>Robust online platforms offering interactive hospitality courses for flexible learning.</p>
          </div>
          <div className="service-item">
            <img src={research} alt="Research & Development" />
            <h5>Hospitality Research & Development</h5>
            <p>Ongoing research to adapt educational offerings to current hospitality industry needs.</p>
          </div>
          <div className="service-item">
            <img src={training} alt="Hospitality Training" />
            <h5>Hospitality Professional Training</h5>
            <p>Professional development programs for hospitality educators to enhance teaching methodologies.</p>
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="trends-section">
        <h2>Industry Trends</h2>
        <div className="trends-content">
          <img src={trendsImage} alt="Industry Trends" className="industriesTrends" />
          <p>
            As the hospitality industry evolves, so do the educational requirements. Current trends include a shift
            towards sustainable practices, the incorporation of technology in guest services, and a focus on
            personalized experiences.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2>Contact Us</h2>
        <p>If you are interested in our hospitality services or have any questions, please reach out to us!</p>
        <Link to={"/contact/"}>
          <button className="btn-primary">Get In Touch</button>
        </Link>
      </section>
    </div>
  );
}
