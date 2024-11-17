import "./industries.css";
import { useEffect } from "react";
import technologyImage from "../../assets/technologyBG.jpeg"; // Background image for Technology
import techSolutions from "../../assets/custom.jpg"; // New image for technology solutions
import innovation from "../../assets/innovation.avif"; // New image for innovation
import automation from "../../assets/ml-automation.avif"; // New image for automation
import dataAnalytics from "../../assets/analysis.avif"; // New image for data analytics
import trendsImage from "../../assets/techIntegration.avif"; // Placeholder for trends image
import { Link, useLocation } from "react-router-dom";

export default function TechnologyOfIndustries() {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="technology-industries-page">
      {/* Technology Section */}
      <section className="technology-section">
        <div className="background1" style={{ backgroundImage: `url(${technologyImage})` }}>
          <div className="heading1">
            <h1>Technology</h1>
            <p style={{ color: "white" }}>
              The Technology of Industries focuses on leveraging cutting-edge solutions and strategies to enhance
              productivity, innovation, and efficiency across various sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <h2>Overview</h2>
        <p>
          Technology is transforming industries by enabling smarter processes, fostering innovation, and improving
          decision-making. Our focus is on integrating technology to drive sustainable growth.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Advanced Automation:</strong> Implementing automated solutions for increased efficiency.
          </li>
          <li>
            <strong>Data-Driven Insights:</strong> Utilizing data analytics for informed decision-making.
          </li>
          <li>
            <strong>Innovative Solutions:</strong> Creating tailored tech solutions for industry-specific challenges.
          </li>
          <li>
            <strong>Seamless Integration:</strong> Ensuring smooth integration of technology into existing systems.
          </li>
        </ul>
      </section>

      {/* Services Offered Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={techSolutions} alt="Technology Solutions" />
            <h5>Technology Solutions</h5>
            <p>Providing cutting-edge technology solutions tailored to your business needs.</p>
          </div>
          <div className="service-item">
            <img src={innovation} alt="Innovation Consulting" />
            <h5>Innovation Consulting</h5>
            <p>Guiding organizations in fostering innovation and driving technological advancements.</p>
          </div>
          <div className="service-item">
            <img src={automation} alt="Process Automation" />
            <h5>Process Automation</h5>
            <p>Streamlining operations through effective automation strategies.</p>
          </div>
          <div className="service-item">
            <img src={dataAnalytics} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>Leveraging data analytics for actionable insights and strategic planning.</p>
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="trends-section">
        <h2>Industry Trends</h2>
        <div className="trends-content">
          <img src={trendsImage} alt="Industry Trends" className="industriesTrends" />
          <p>
            As industries adapt to new technologies, trends like AI adoption, IoT integration, and the rise of digital
            transformation are shaping the future. Staying ahead requires embracing these advancements.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2>Contact Us</h2>
        <p>If you are interested in our technology services or have any questions, please reach out to us!</p>
        <Link to={"/contact/"}>
          <button className="btn-primary">Get In Touch</button>
        </Link>
      </section>
    </div>
  );
}
