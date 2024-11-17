import "../services.css";
import { useEffect } from "react";
import automationImage from "../../../assets/PA.jpeg"; // Change to a relevant automation image
import creative from "../../../assets/creative.png";
import social from "../../../assets/socialmedia.png";
import listening from "../../../assets/SocialListening.png";
import media from "../../../assets/MediaPlanning.png";
import engine from "../../../assets/seo.png";
import delivery from "../../../assets/deliverymodel.png";
import analytic from "../../../assets/analytics.png";
import technology from "../../../assets/optimization2.avif";
import reliability from "../../../assets/prediction.png";
import { useLocation } from "react-router-dom";

export default function ProcessAutomation() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="automation-page">
      {/* Process Automation Section */}
      <section className="automation-section">
        <div className="background1" style={{ backgroundImage: `url(${automationImage})` }}>
          <div className="heading1">
            <h1>Process Automation Services</h1>
            <p style={{ color: "white" }}>
              Streamline your operations with our cutting-edge process automation services. We harness technology to
              improve efficiency, reduce costs, and enhance the quality of your business processes.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Process Automation</h2>
        <ul>
          <li>
            <strong>Efficiency:</strong> Automate repetitive tasks to save time and resources.
          </li>
          <li>
            <strong>Accuracy:</strong> Minimize human error and increase precision in processes.
          </li>
          <li>
            <strong>Scalability:</strong> Easily adapt to changing business needs and scale operations.
          </li>
          <li>
            <strong>Integration:</strong> Seamlessly integrate with existing systems for enhanced functionality.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our process automation services are tailored to enhance your business operations. From initial consultation to
          implementation and support, we ensure a smooth transition to automated processes that drive efficiency and
          growth.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative & Design" />
            <h5>Creative & Design</h5>
            <p>Innovative design solutions to enhance user experiences in automated processes.</p>
          </div>

          <div className="service-item">
            <img src={social} alt="Social Media Marketing" />
            <h5>Social Media Automation</h5>
            <p>Automate social media marketing efforts for better engagement and outreach.</p>
          </div>

          <div className="service-item">
            <img src={listening} alt="Social Listening" />
            <h5>Social Listening Automation</h5>
            <p>Leverage automated tools to monitor brand sentiment and market trends.</p>
          </div>

          <div className="service-item">
            <img src={media} alt="Media Planning and Buying" />
            <h5>Media Planning Automation</h5>
            <p>Use automation to streamline media planning and buying processes for efficiency.</p>
          </div>

          <div className="service-item">
            <img src={engine} alt="Search Engine Optimization" />
            <h5>SEO Automation</h5>
            <p>Automate SEO tasks to improve website visibility and search rankings.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Process Automation Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>Tailored delivery models to meet your specific process automation needs.</p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Advanced analytics services to track and measure the impact of automation.</p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Technology</h5>
            <p>Cutting-edge technology solutions designed for seamless process automation.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Ensure reliable automation processes with real-time monitoring and support.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
