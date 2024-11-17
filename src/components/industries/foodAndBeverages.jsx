import "./industries.css";
import { useEffect } from "react";
import foodBeveragesImage from "../../assets/FoodBG.jpg"; // Update to your food & beverages background image
import curriculum from "../../assets/HospitalityCurriculum.jpg"; // Update to your food & beverages curriculum image
import eLearning from "../../assets/learning.jpg"; // You can keep this if it's suitable
import research from "../../assets/labs.jpg"; // You can keep this if it's suitable
import training from "../../assets/classRoom.jpg"; // You can keep this if it's suitable
import trendsImage from "../../assets/FoodBeveragesTrends.jpg"; // Update to your food & beverages trends image
import { Link, useLocation } from "react-router-dom";

export default function FoodBeveragesServices() {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="education-industries-page">
      {/* Food & Beverages Services Section */}
      <section className="education-section">
        <div className="background1" style={{ backgroundImage: `url(${foodBeveragesImage})` }}>
          <div className="heading1">
            <h1>Food & Beverages Services</h1>
            <p style={{ color: "white" }}>
              Food & beverages services are essential for enhancing customer satisfaction and driving sales. Our goal is
              to provide innovative educational solutions that enhance skills and knowledge within the food and beverage
              industry.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <h2>Overview</h2>
        <p>
          The food and beverage industry plays a vital role in shaping consumer experiences and driving economic growth.
          By integrating modern educational practices, we empower individuals and organizations with the skills
          necessary to thrive in this dynamic environment.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Customized Food & Beverages Learning Paths:</strong> Tailored educational experiences to meet the
            specific needs of the food and beverage sector.
          </li>
          <li>
            <strong>Technology Integration:</strong> Utilizing advanced technologies to enhance training and operations
            in food & beverages.
          </li>
          <li>
            <strong>Expert Food & Beverages Instructors:</strong> Learn from industry professionals with extensive
            experience in food and beverage management.
          </li>
          <li>
            <strong>Flexible Learning Options:</strong> Online and offline learning modes to cater to all learners in
            the food and beverage field.
          </li>
        </ul>
      </section>

      {/* Services Offered Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={curriculum} alt="Curriculum Development" />
            <h5>Food & Beverages Curriculum Development</h5>
            <p>
              Creating industry-relevant curricula that prepare learners for real-world challenges in food and
              beverages.
            </p>
          </div>
          <div className="service-item">
            <img src={eLearning} alt="E-Learning Solutions" />
            <h5>E-Learning Solutions</h5>
            <p>Robust online platforms offering interactive food and beverage courses for flexible learning.</p>
          </div>
          <div className="service-item">
            <img src={research} alt="Research & Development" />
            <h5>Food & Beverages Research & Development</h5>
            <p>Ongoing research to adapt educational offerings to current food and beverage industry needs.</p>
          </div>
          <div className="service-item">
            <img src={training} alt="Food & Beverages Training" />
            <h5>Food & Beverages Professional Training</h5>
            <p>Professional development programs for food and beverage educators to enhance teaching methodologies.</p>
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="trends-section">
        <h2>Industry Trends</h2>
        <div className="trends-content">
          <img src={trendsImage} alt="Industry Trends" className="industriesTrends" />
          <p>
            As the food and beverage industry evolves, so do the educational requirements. Current trends include the
            rise of plant-based foods, the integration of technology in food service, and a focus on sustainability and
            health-conscious choices.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2>Contact Us</h2>
        <p>If you are interested in our food and beverage services or have any questions, please reach out to us!</p>
        <Link to={"/contact/"}>
          <button className="btn-primary">Get In Touch</button>
        </Link>
      </section>
    </div>
  );
}
