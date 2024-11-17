import "./industries.css";
import { useEffect } from "react";
import educationImage from "../../assets/educationBG.webp"; // Background image
import curriculum from "../../assets/EducationLogo.jpg";
import eLearning from "../../assets/training.avif";
import research from "../../assets/labs.jpg";
import training from "../../assets/classRoom.jpg";
import trendsImage from "../../assets/techIntegration.avif"; // Placeholder for trends image
import { Link, useLocation } from "react-router-dom";

export default function EducationOfIndustries() {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="education-industries-page">
      {/* Education Section */}
      <section className="education-section">
        <div className="background1" style={{ backgroundImage: `url(${educationImage})` }}>
          <div className="heading1">
            <h1>Education</h1>
            <p style={{ color: "white" }}>
              Education of Industries focuses on providing innovative solutions and strategies that enhance learning,
              curriculum development, and research. By integrating technology, we aim to improve access to high-quality
              education for all.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <h2>Overview</h2>
        <p>
          Education plays a crucial role in shaping the future of industries. By integrating modern teaching methods and
          technologies, we equip learners with the skills necessary to thrive in a competitive landscape.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Customized Learning Paths:</strong> Tailored educational experiences to meet industry needs.
          </li>
          <li>
            <strong>Technology Integration:</strong> Utilizing advanced technologies to enhance learning.
          </li>
          <li>
            <strong>Expert Instructors:</strong> Learn from industry professionals with practical experience.
          </li>
          <li>
            <strong>Flexible Learning Options:</strong> Online and offline learning modes to suit all learners.
          </li>
        </ul>
      </section>

      {/* Services Offered Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={curriculum} alt="Curriculum Development" />
            <h5>Curriculum Development</h5>
            <p>Creating industry-relevant curricula that prepare learners for real-world challenges.</p>
          </div>
          <div className="service-item">
            <img src={eLearning} alt="E-Learning Solutions" />
            <h5>E-Learning Solutions</h5>
            <p>Robust online platforms offering interactive courses for flexible learning.</p>
          </div>
          <div className="service-item">
            <img src={research} alt="Research & Development" />
            <h5>Research & Development</h5>
            <p>Continual research to adapt educational offerings to current industry needs.</p>
          </div>
          <div className="service-item">
            <img src={training} alt="Teacher Training" />
            <h5>Teacher Training</h5>
            <p>Professional development programs for educators to enhance teaching methodologies.</p>
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="trends-section">
        <h2>Industry Trends</h2>
        <div className="trends-content">
          <img src={trendsImage} alt="Industry Trends" className="industriesTrends" />
          <p>
            As industries evolve, so do the educational requirements. Current trends include a shift towards online
            learning, the incorporation of artificial intelligence, and an emphasis on lifelong learning to keep pace
            with technological advancements.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2>Contact Us</h2>
        <p>If you are interested in our services or have any questions, please reach out to us!</p>
        <Link to={"/contact/"}>
          <button className="btn-primary">Get In Touch</button>
        </Link>
      </section>
    </div>
  );
}
