import "../services.css";
import { useEffect } from "react";
import automation from "../../../assets/Sales.webp"; // Marketing Automation image
import creative from "../../../assets/creative.png";
import social from "../../../assets/socialmedia.png";
import listening from "../../../assets/SocialListening.png";
import media from "../../../assets/MediaPlanning.png";
import engine from "../../../assets/seo.png";
import delivery from "../../../assets/deliverymodel.png";
import analytic from "../../../assets/analytics.png";
import creativemaver from "../../../assets/creative.png"; // Assuming this is still needed
import technology from "../../../assets/insurance.png"; // Assuming this is still needed
import reliability from "../../../assets/prediction.png"; // Assuming this is still needed
import { useLocation } from "react-router-dom";

export default function SalesMarketingAutomation() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="automation-page">
      {/* Automation Section */}
      <section className="automation-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${automation})` }} // Corrected background image syntax
        >
          <div className="heading1">
            <h1>Sales & Marketing Automation Services</h1>
            <p style={{ color: "white" }}>
              Our Sales & Marketing Automation services empower businesses to enhance efficiency, drive revenue, and
              optimize their marketing strategies through automated solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Services</h2>
        <ul>
          <li>
            <strong>Automation:</strong> Streamline your marketing processes to save time and resources.
          </li>
          <li>
            <strong>Data-Driven Insights:</strong> Leverage analytics to make informed marketing decisions.
          </li>
          <li>
            <strong>Integration:</strong> Seamlessly connect with existing tools and platforms for enhanced
            functionality.
          </li>
          <li>
            <strong>Customization:</strong> Tailored solutions to meet your unique business needs.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our Sales & Marketing Automation services are designed to integrate seamlessly with your business processes,
          ensuring innovation, efficiency, and improved customer engagement. From strategy development to execution, we
          provide end-to-end automation solutions.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative & Design" />
            <h5>Creative & Design</h5>
            <p>Innovative design solutions that captivate audiences and enhance brand recognition.</p>
          </div>

          <div className="service-item">
            <img src={social} alt="Social Media Marketing" />
            <h5>Social Media Marketing</h5>
            <p>Boost your brand's visibility with strategic social media campaigns and automation.</p>
          </div>

          <div className="service-item">
            <img src={listening} alt="Social Listening" />
            <h5>Social Listening</h5>
            <p>Gain insights into customer sentiments and trends to inform your marketing strategies.</p>
          </div>

          <div className="service-item">
            <img src={media} alt="Media Planning and Buying" />
            <h5>Media Planning and Buying</h5>
            <p>Optimize media strategies using data-driven insights for effective ad placements.</p>
          </div>

          <div className="service-item">
            <img src={engine} alt="Search Engine Optimization" />
            <h5>Search Engine Optimization</h5>
            <p>Improve your website's visibility and rankings through comprehensive SEO strategies.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>Automate your marketing processes to enhance efficiency and drive better results.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>Customized delivery models that ensure the highest quality of service and support.</p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Advanced analytics services to track performance and optimize strategies.</p>
          </div>

          <div className="dna-item">
            <img src={automation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>Solutions to automate and enhance your marketing operations for better results.</p>
          </div>

          <div className="dna-item">
            <img src={creativemaver} alt="Creative Mavericks" />
            <h5>Creative Mavericks</h5>
            <p>Exceptional design and user experience services to captivate and engage customers.</p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Technology</h5>
            <p>State-of-the-art technology solutions to drive innovation in your marketing strategies.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Dependable services with a focus on quality and performance.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
