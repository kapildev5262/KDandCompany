import "../services.css";
import { useEffect } from "react";
import ecommerce from "../../../assets/omnichannel_img.webp"; // E-Commerce image import
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

export default function ECommerceServices() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="ecommerce-page">
      {/* E-Commerce (Omnichannel) Section */}
      <section className="ecommerce-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${ecommerce})` }}
        >
          <div className="heading1">
            <h1>E-Commerce (Omnichannel)</h1>
            <p style={{ color: "white" }}>
              Delivering seamless and integrated shopping experiences across
              all channels—online, in-store, and mobile—enhancing customer
              engagement and satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Omnichannel E-Commerce</h2>
        <ul>
          <li>
            <strong>Unified Customer Experience:</strong> Provide a consistent
            experience across all platforms.
          </li>
          <li>
            <strong>Inventory Syncing:</strong> Real-time inventory management
            across online and offline channels.
          </li>
          <li>
            <strong>Personalization:</strong> Tailored recommendations and
            offers based on customer behavior.
          </li>
          <li>
            <strong>Seamless Checkout:</strong> Integrate payment gateways for
            smooth, secure transactions.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our omnichannel E-Commerce solutions ensure a cohesive shopping
          experience, whether online or in-store. From strategy to execution,
          we provide the tools to engage customers and drive conversions across
          all touchpoints.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative & Design" />
            <h5>Creative & Design</h5>
            <p>
              Developing visually appealing, responsive designs that enhance
              user engagement across devices.
            </p>
          </div>

          <div className="service-item">
            <img src={social} alt="Social Media Marketing" />
            <h5>Social Media Marketing</h5>
            <p>
              Increase brand awareness and customer interaction through
              strategic social media campaigns.
            </p>
          </div>

          <div className="service-item">
            <img src={listening} alt="Social Listening" />
            <h5>Social Listening</h5>
            <p>
              Monitor customer conversations to adapt your omnichannel strategy
              for better engagement.
            </p>
          </div>

          <div className="service-item">
            <img src={media} alt="Media Planning and Buying" />
            <h5>Media Planning and Buying</h5>
            <p>
              Ensure maximum ROI through precise media planning and ad
              placement across channels.
            </p>
          </div>

          <div className="service-item">
            <img src={engine} alt="Search Engine Optimization" />
            <h5>Search Engine Optimization</h5>
            <p>
              Improve your E-Commerce store’s visibility on search engines,
              driving more organic traffic.
            </p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>
              Automate your marketing processes for efficient, data-driven
              campaigns that convert.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Omnichannel Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>
              Flexible delivery models tailored to your business’s needs,
              ensuring timely and successful omnichannel integration.
            </p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Analytics" />
            <h5>Analytics</h5>
            <p>
              Advanced analytics to track customer behavior and optimize your
              omnichannel strategy.
            </p>
          </div>

          <div className="dna-item">
            <img src={marketautomation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>
              Streamline your omnichannel marketing operations with automated
              solutions that increase engagement.
            </p>
          </div>

          <div className="dna-item">
            <img src={creativemaver} alt="Creative Mavericks" />
            <h5>Creative Mavericks</h5>
            <p>
              Unique and innovative design solutions to improve customer
              experience and brand interaction.
            </p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Technology</h5>
            <p>
              Cutting-edge technology integrations to enhance your omnichannel
              platform's performance and reliability.
            </p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>
              Dependable solutions that ensure seamless performance across all
              E-Commerce channels.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
