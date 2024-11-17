import "../services.css";
import { useEffect } from "react";
import icoImage from "../../../assets/ICO.jpeg"; // Update image for ICO page
import strategy from "../../../assets/strategy.jpg";
import tokenomics from "../../../assets/token.jpg";
import compliance from "../../../assets/legal.jpg";
import marketing from "../../../assets/marketing.avif";
import community from "../../../assets/community.avif";
import analytics from "../../../assets/anaytics.avif";
import { useLocation } from "react-router-dom";

export default function ICO() {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="ico-page">
      {/* ICO Section */}
      <section className="ico-section">
        <div className="background1" style={{ backgroundImage: `url(${icoImage})` }}>
          <div className="heading1">
            <h1>Blockchain ICO Solutions</h1>
            <p style={{ color: "white" }}>
              Launch your ICO with confidence using our full-service solutions. We offer end-to-end support, from
              strategy and compliance to tokenomics and community building, ensuring a successful ICO launch.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Why Choose Our ICO Services?</h2>
        <ul>
          <li>
            <strong>Comprehensive Strategy:</strong> Tailored ICO strategies to meet your goals and market demands.
          </li>
          <li>
            <strong>Regulatory Compliance:</strong> Ensure legal and regulatory compliance to avoid risks.
          </li>
          <li>
            <strong>Tokenomics Design:</strong> Expertly crafted tokenomics to maximize your project's potential.
          </li>
          <li>
            <strong>Community Engagement:</strong> Build a loyal community for long-term success.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>Our ICO Solutions</h2>
        <p>
          We offer a complete range of ICO services that integrate seamlessly with your project requirements, from
          strategic planning to post-ICO support.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={strategy} alt="ICO Strategy" />
            <h5>ICO Strategy</h5>
            <p>Strategic planning tailored to your ICO’s needs to ensure a successful launch and long-term growth.</p>
          </div>

          <div className="service-item">
            <img src={tokenomics} alt="Tokenomics" />
            <h5>Tokenomics</h5>
            <p>
              Create a sustainable and attractive token economy that benefits investors and supports the project's
              goals.
            </p>
          </div>

          <div className="service-item">
            <img src={compliance} alt="Legal & Compliance" />
            <h5>Legal & Compliance</h5>
            <p>Comprehensive compliance services to navigate the regulatory landscape and ensure legal safety.</p>
          </div>

          <div className="service-item">
            <img src={marketing} alt="Marketing & PR" />
            <h5>Marketing & PR</h5>
            <p>Attract potential investors with targeted marketing and PR campaigns.</p>
          </div>

          <div className="service-item">
            <img src={community} alt="Community Management" />
            <h5>Community Management</h5>
            <p>Build and nurture an active community to support your ICO and project long-term.</p>
          </div>

          <div className="service-item">
            <img src={analytics} alt="Data & Analytics" />
            <h5>Data & Analytics</h5>
            <p>In-depth analytics to monitor and enhance your ICO's performance at every stage.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
