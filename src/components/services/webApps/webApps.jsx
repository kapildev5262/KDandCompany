import "../services.css";
import { useEffect } from "react";
import webappBanner from "../../../assets/webapps.jpg"; // Web App Development banner image import
import design from "../../../assets/creative.png";
import social from "../../../assets/socialmedia.png";
import responsive from "../../../assets/Responsive-Design.avif";
import performance from "../../../assets/Scalability-And-Performance-Optimization.avif";
import seo from "../../../assets/seo.png";
import automation from "../../../assets/marketingautomation.png";
import delivery from "../../../assets/deliverymodel.png";
import analytic from "../../../assets/analytics.png";
import technology from "../../../assets/Custom-Development.avif";
import reliability from "../../../assets/Security-Best-Practices.avif";
import { useLocation } from "react-router-dom";

export default function WebApps() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="webapp-page">
      {/* Web App Development Section */}
      <section className="webapp-section">
        <div className="background1" style={{ backgroundImage: `url(${webappBanner})` }}>
          <div className="heading1">
            <h1>Web App Development</h1>
            <p style={{ color: "white" }}>
              Our web app development services provide cutting-edge solutions tailored to your business needs. We
              specialize in building responsive, user-friendly, and high-performance web applications.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Web App Development</h2>
        <ul>
          <li>
            <strong>Responsiveness:</strong> Our web applications are fully responsive and optimized for all devices.
          </li>
          <li>
            <strong>High Performance:</strong> We focus on delivering fast, scalable, and secure web apps.
          </li>
          <li>
            <strong>User-Centered Design:</strong> Intuitive UI/UX for better user engagement and experience.
          </li>
          <li>
            <strong>SEO Optimization:</strong> Built-in SEO optimization for enhanced visibility.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          We offer end-to-end web app development services, from design and development to deployment and maintenance.
          Our solutions are tailored to meet your business objectives.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={design} alt="Creative & Design" />
            <h5>Creative & Design</h5>
            <p>
              Combining creativity and functionality, we deliver aesthetically pleasing web apps that resonate with
              users.
            </p>
          </div>

          <div className="service-item">
            <img src={social} alt="Social Media Integration" />
            <h5>Social Media Integration</h5>
            <p>
              Seamlessly integrate social media features into your web apps for improved user interaction and
              engagement.
            </p>
          </div>

          <div className="service-item">
            <img src={responsive} alt="Responsive Design" />
            <h5>Responsive Design</h5>
            <p>Ensure your web app is optimized for mobile, tablet, and desktop devices.</p>
          </div>

          <div className="service-item">
            <img src={performance} alt="Performance Optimization" />
            <h5>Performance Optimization</h5>
            <p>We ensure fast load times and smooth interactions to enhance user experience.</p>
          </div>

          <div className="service-item">
            <img src={seo} alt="SEO Optimization" />
            <h5>SEO Optimization</h5>
            <p>Our web apps are optimized for search engines to ensure better visibility and ranking.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>Streamline your marketing efforts with automation tools integrated directly into your web app.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Web App Development Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>Tailored delivery models to meet your business needs and ensure timely project completion.</p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Analytics" />
            <h5>Analytics</h5>
            <p>We offer integrated analytics to track and optimize your web app’s performance.</p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Latest Technology" />
            <h5>Latest Technology</h5>
            <p>Utilizing the latest technologies, we build robust and scalable web applications.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Our web apps are built for reliability, ensuring seamless operations and minimal downtime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
