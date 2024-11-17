import "../services.css";
import { useEffect } from "react";
import mvpImage from "../../../assets/MVPs.jpeg"; // Import an MVP-related image
import creative from "../../../assets/creative.png";
import social from "../../../assets/socialmedia.png";
import listening from "../../../assets/SocialListening.png";
import media from "../../../assets/MediaPlanning.png";
import engine from "../../../assets/seo.png";
import automation from "../../../assets/marketingautomation.png";
import delivery from "../../../assets/deliverymodel.png";
import analytic from "../../../assets/analytics.png";
import marketautomation from "../../../assets/marketingautomation.png";
import creativemaver from "../../../assets/creative.png";
import technology from "../../../assets/insurance.png";
import reliability from "../../../assets/prediction.png";
import { useLocation } from "react-router-dom";

export default function MVPs() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="mvp-page">
      {/* MVPs Section */}
      <section className="mvp-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${mvpImage})` }} // Update background image for MVPs
        >
          <div className="heading1">
            <h1>Minimum Viable Products (MVPs)</h1>
            <p style={{ color: "white" }}>
              Our MVP services help you validate your business ideas quickly and efficiently. We focus on developing
              core functionalities to attract early users and gather feedback for future enhancements.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our MVPs</h2>
        <ul>
          <li>
            <strong>Speed:</strong> Rapid development process to bring your idea to market quickly.
          </li>
          <li>
            <strong>Cost-Effective:</strong> Focus on essential features to minimize initial costs.
          </li>
          <li>
            <strong>User Feedback:</strong> Gather insights from real users to inform further development.
          </li>
          <li>
            <strong>Iterative Development:</strong> Continuously improve the product based on user feedback.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our MVP development services are tailored to help startups and businesses validate their concepts with a focus
          on user experience and market needs. We guide you from ideation to deployment, ensuring a strategic approach
          to your MVP.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our MVP Development Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative & Design" />
            <h5>Creative & Design</h5>
            <p>Innovative design solutions that resonate with your target audience while maintaining functionality.</p>
          </div>

          <div className="service-item">
            <img src={social} alt="Social Media Marketing" />
            <h5>Market Validation</h5>
            <p>Utilize social media insights to validate your MVP's concept and gather user feedback.</p>
          </div>

          <div className="service-item">
            <img src={listening} alt="Social Listening" />
            <h5>Customer Insights</h5>
            <p>Leverage social listening tools to understand user sentiment and improve your product offering.</p>
          </div>

          <div className="service-item">
            <img src={media} alt="Media Planning and Buying" />
            <h5>Effective Launch Strategies</h5>
            <p>Plan and execute successful launch strategies to attract early adopters and maximize visibility.</p>
          </div>

          <div className="service-item">
            <img src={engine} alt="Search Engine Optimization" />
            <h5>SEO Optimization</h5>
            <p>
              Implement SEO best practices to ensure your MVP gains visibility in search engines right from the start.
            </p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>
              Automate marketing efforts to efficiently communicate with your MVP users and gather valuable feedback.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our MVP Development Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Agile Delivery Model</h5>
            <p>
              We follow an agile approach to ensure flexible and efficient development cycles tailored to your needs.
            </p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Analytics" />
            <h5>User Analytics</h5>
            <p>Implement analytics tools to track user behavior and gather insights for future iterations.</p>
          </div>

          <div className="dna-item">
            <img src={marketautomation} alt="Marketing Automation" />
            <h5>Feedback Loop</h5>
            <p>Establish a feedback loop with users to continuously refine and enhance your MVP.</p>
          </div>

          <div className="dna-item">
            <img src={creativemaver} alt="Creative Mavericks" />
            <h5>Expert Guidance</h5>
            <p>Benefit from our team of experts who will guide you through the MVP development process.</p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Cutting-Edge Technologies</h5>
            <p>Utilize the latest technologies to build a scalable and robust MVP that meets your business needs.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Trust and Reliability</h5>
            <p>Build a reliable MVP that you can trust to engage your users and meet their expectations.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
