import "./industries.css";
import { useEffect } from "react";
import tourTravelImage from "../../assets/Tour&travels.jpg"; // Update to your Tour & Travel background image
import curriculum from "../../assets/TourTravelCurriculum.jpg"; // Update to your Tour & Travel curriculum image
import eLearning from "../../assets/learning.jpg"; // You can keep this if it's suitable
import research from "../../assets/labs.jpg"; // You can keep this if it's suitable
import training from "../../assets/classRoom.jpg"; // You can keep this if it's suitable
import trendsImage from "../../assets/TourTravelTrends.jpg"; // Update to your Tour & Travel trends image
import { Link, useLocation } from "react-router-dom";

export default function TourTravelOfIndustries() {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="education-industries-page">
      {/* Tour & Travel Services Section */}
      <section className="education-section">
        <div className="background1" style={{ backgroundImage: `url(${tourTravelImage})` }}>
          <div className="heading1">
            <h1>Tour & Travel Services</h1>
            <p style={{ color: "white" }}>
              Tour and travel services are vital for creating unforgettable journeys and enhancing traveler experiences.
              Our aim is to provide innovative educational solutions that elevate skills and knowledge within the travel
              industry.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <h2>Overview</h2>
        <p>
          The tour and travel industry plays a crucial role in shaping unique experiences and fostering cultural
          exchange. By integrating modern educational practices, we equip individuals and organizations with the skills
          necessary to excel in this dynamic environment.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Customized Travel Learning Paths:</strong> Tailored educational experiences to meet the specific
            needs of the tour and travel sector.
          </li>
          <li>
            <strong>Technology Integration:</strong> Utilizing advanced technologies to enhance travel service training
            and application.
          </li>
          <li>
            <strong>Expert Travel Instructors:</strong> Learn from industry professionals with extensive experience in
            travel management.
          </li>
          <li>
            <strong>Flexible Learning Options:</strong> Online and offline learning modes to cater to all learners in
            the travel field.
          </li>
        </ul>
      </section>

      {/* Services Offered Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={curriculum} alt="Curriculum Development" />
            <h5>Travel Curriculum Development</h5>
            <p>Creating industry-relevant curricula that prepare learners for real-world challenges in travel.</p>
          </div>
          <div className="service-item">
            <img src={eLearning} alt="E-Learning Solutions" />
            <h5>E-Learning Solutions</h5>
            <p>Robust online platforms offering interactive travel courses for flexible learning.</p>
          </div>
          <div className="service-item">
            <img src={research} alt="Research & Development" />
            <h5>Travel Research & Development</h5>
            <p>Ongoing research to adapt educational offerings to current travel industry needs.</p>
          </div>
          <div className="service-item">
            <img src={training} alt="Travel Training" />
            <h5>Travel Professional Training</h5>
            <p>Professional development programs for travel educators to enhance teaching methodologies.</p>
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="trends-section">
        <h2>Industry Trends</h2>
        <div className="trends-content">
          <img src={trendsImage} alt="Industry Trends" className="industriesTrends" />
          <p>
            As the travel industry evolves, so do the educational requirements. Current trends include a focus on
            sustainable tourism, the incorporation of technology in travel planning, and a growing emphasis on
            personalized travel experiences.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2>Contact Us</h2>
        <p>If you are interested in our tour and travel services or have any questions, please reach out to us!</p>
        <Link to={"/contact/"}>
          <button className="btn-primary">Get In Touch</button>
        </Link>
      </section>
    </div>
  );
}
