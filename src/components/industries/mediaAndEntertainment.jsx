import "./industries.css";
import { useEffect } from "react";
import mediaImage from "../../assets/mediiaBG.jpg"; // New background image
import contentCreation from "../../assets/contentCreation.avif"; // New image for content creation
import videoProduction from "../../assets/VideoProduction.jpg"; // New image for video production
import audioEditing from "../../assets/AudioEditing.jpg"; // New image for audio editing
import eventManagement from "../../assets/project-management.avif"; // New image for event management
import trendsImage from "../../assets/mediaTrends.jpg"; // New trends image
import { Link, useLocation } from "react-router-dom";

export default function MediaAndEntertainment() {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="media-entertainment-page">
      {/* Media & Entertainment Section */}
      <section className="media-section">
        <div className="background1" style={{ backgroundImage: `url(${mediaImage})` }}>
          <div className="heading1">
            <h1>Media & Entertainment</h1>
            <p style={{ color: "white" }}>
              The Media & Entertainment sector focuses on creating, distributing, and monetizing content across various
              platforms. Our mission is to harness innovation and creativity to deliver engaging experiences to
              audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <h2>Overview</h2>
        <p>
          The Media & Entertainment industry is constantly evolving, with new technologies shaping how content is
          created and consumed. We strive to stay at the forefront of these changes to provide cutting-edge solutions.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Innovative Content Creation:</strong> Utilizing advanced tools and technologies for creative
            processes.
          </li>
          <li>
            <strong>Multi-Platform Distribution:</strong> Seamless content delivery across various channels and formats.
          </li>
          <li>
            <strong>Audience Engagement:</strong> Strategies designed to maximize viewer interaction and loyalty.
          </li>
          <li>
            <strong>Data-Driven Insights:</strong> Analyzing audience data to inform content strategies and enhance
            performance.
          </li>
        </ul>
      </section>

      {/* Services Offered Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={contentCreation} alt="Content Creation" />
            <h5>Content Creation</h5>
            <p>Developing engaging content tailored for diverse audiences across multiple platforms.</p>
          </div>
          <div className="service-item">
            <img src={videoProduction} alt="Video Production" />
            <h5>Video Production</h5>
            <p>Comprehensive video production services from concept to final edit, ensuring high-quality outputs.</p>
          </div>
          <div className="service-item">
            <img src={audioEditing} alt="Audio Editing" />
            <h5>Audio Editing</h5>
            <p>Professional audio editing services to enhance the quality of your soundtracks and voiceovers.</p>
          </div>
          <div className="service-item">
            <img src={eventManagement} alt="Event Management" />
            <h5>Event Management</h5>
            <p>Planning and executing memorable events that resonate with audiences and enhance brand visibility.</p>
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="trends-section">
        <h2>Industry Trends</h2>
        <div className="trends-content">
          <img src={trendsImage} alt="Media Industry Trends" className="industriesTrends" />
          <p>
            The Media & Entertainment industry is witnessing rapid changes, including the rise of streaming services,
            virtual reality experiences, and the increasing importance of social media in content distribution.
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
