import "./industries.css"; 
import { useEffect } from "react";
import healthcareImage from "../../assets/Healthcare.jpg"; // Update to your healthcare background image
import curriculum from "../../assets/HealthcareCurriculum.jpg"; // Update to your healthcare curriculum image
import eLearning from "../../assets/learning.jpg"; // You can keep this if it's suitable
import research from "../../assets/labs.jpg"; // You can keep this if it's suitable
import training from "../../assets/classRoom.jpg"; // You can keep this if it's suitable
import trendsImage from "../../assets/HealthcareTrends.avif"; // Update to your healthcare trends image
import { Link, useLocation } from "react-router-dom";

export default function EducationOfIndustries() {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="education-industries-page">
      {/* Healthcare Services Section */}
      <section className="education-section">
        <div className="background1" style={{ backgroundImage: `url(${healthcareImage})` }}>
          <div className="heading1">
            <h1>Healthcare Services</h1>
            <p style={{ color: "white" }}>
              Healthcare services are crucial for promoting well-being and ensuring individuals have access to essential
              medical resources. Our focus is on providing innovative educational solutions to enhance healthcare
              literacy and development within the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <h2>Overview</h2>
        <p>
          Healthcare services play a vital role in improving health outcomes and accessibility. By integrating modern
          methods and technologies, we equip individuals and organizations with the skills necessary to navigate the
          complex healthcare landscape.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Customized Healthcare Learning Paths:</strong> Tailored educational experiences to meet the specific
            needs of the healthcare industry.
          </li>
          <li>
            <strong>Technology Integration:</strong> Utilizing advanced healthcare technologies to enhance learning and
            application.
          </li>
          <li>
            <strong>Expert Healthcare Instructors:</strong> Learn from industry professionals with extensive experience
            in healthcare.
          </li>
          <li>
            <strong>Flexible Learning Options:</strong> Online and offline learning modes to cater to all learners in
            the healthcare field.
          </li>
        </ul>
      </section>

      {/* Services Offered Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={curriculum} alt="Curriculum Development" />
            <h5>Healthcare Curriculum Development</h5>
            <p>Creating industry-relevant curricula that prepare learners for real-world healthcare challenges.</p>
          </div>
          <div className="service-item">
            <img src={eLearning} alt="E-Learning Solutions" />
            <h5>E-Learning Solutions</h5>
            <p>Robust online platforms offering interactive healthcare courses for flexible learning.</p>
          </div>
          <div className="service-item">
            <img src={research} alt="Research & Development" />
            <h5>Healthcare Research & Development</h5>
            <p>Continual research to adapt educational offerings to current healthcare industry needs.</p>
          </div>
          <div className="service-item">
            <img src={training} alt="Healthcare Training" />
            <h5>Healthcare Professional Training</h5>
            <p>Professional development programs for healthcare educators to enhance teaching methodologies.</p>
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="trends-section">
        <h2>Industry Trends</h2>
        <div className="trends-content">
          <img src={trendsImage} alt="Industry Trends" className="industriesTrends" />
          <p>
            As the healthcare services industry evolves, so do the educational requirements. Current trends include a
            shift towards digital health education, the incorporation of telemedicine, and an emphasis on health
            literacy and management skills for both individuals and organizations.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2>Contact Us</h2>
        <p>If you are interested in our healthcare services or have any questions, please reach out to us!</p>
        <Link to={"/contact/"}>
          <button className="btn-primary">Get In Touch</button>
        </Link>
      </section>
    </div>
  );
}
