import "./solution.css";

import { useEffect } from "react";
import blockchain from "../../assets/workforce.jpg"; // Blockchain image import
import creative from "../../assets/creative.png";
import social from "../../assets/socialmedia.png";
import listening from "../../assets/SocialListening.png";
import media from "../../assets/MediaPlanning.png";
import engine from "../../assets/seo.png";
import automation from "../../assets/marketingautomation.png";
import delivery from "../../assets/deliverymodel.png";
import analytic from "../../assets/analytics.png";
import marketautomation from "../../assets/marketingautomation.png";
import creativemaver from "../../assets/creative.png";
import technology from "../../assets/insurance.png";
import reliability from "../../assets/prediction.png";
import { useLocation } from "react-router-dom";

export default function Workforce() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="blockchain-page">
      {/* Blockchain Section */}
      <section className="blockchain-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${blockchain})` }}
        >
          <div className="heading1">
            <h1>Web & CMS</h1>
            <p style={{ color: "white" }}>
              Blockchain is a distributed ledger technology that ensures secure,
              transparent, and immutable transactions. It utilizes cryptography
              to maintain data integrity and decentralization, making it highly
              secure and reliable.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Blockchain</h2>
        <ul>
          <li>
            <strong>Immutability:</strong> Data on the blockchain cannot be
            altered once it's added.
          </li>
          <li>
            <strong>Decentralization:</strong> Transactions are verified across
            a distributed network without a central authority.
          </li>
          <li>
            <strong>Security:</strong> Blockchain employs cryptography to
            protect data and prevent tampering.
          </li>
          <li>
            <strong>Transparency:</strong> All transactions are recorded,
            allowing complete traceability and verification.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our blockchain services are designed to integrate seamlessly with your
          business processes, ensuring innovation, transparency, and enhanced
          security. From strategy to implementation, we provide comprehensive
          blockchain solutions.
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
              Combining creativity with technology to deliver unique blockchain
              solutions that are visually appealing and highly functional.
            </p>
          </div>

          <div className="service-item">
            <img src={social} alt="Social Media Marketing" />
            <h5>Social Media Marketing</h5>
            <p>
              Enhance your brand’s visibility through strategic
              blockchain-powered social media marketing.
            </p>
          </div>

          <div className="service-item">
            <img src={listening} alt="Social Listening" />
            <h5>Social Listening</h5>
            <p>
              Understand market trends and customer sentiment using blockchain
              for a transparent and secure data analysis process.
            </p>
          </div>

          <div className="service-item">
            <img src={media} alt="Media Planning and Buying" />
            <h5>Media Planning and Buying</h5>
            <p>
              Use blockchain technology to enhance the transparency and
              efficiency of media transactions and ad placement.
            </p>
          </div>

          <div className="service-item">
            <img src={engine} alt="Search Engine Optimization" />
            <h5>Search Engine Optimization</h5>
            <p>
              Optimize your blockchain website’s visibility with cutting-edge
              SEO strategies.
            </p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>
              Use blockchain technology to streamline and automate your
              marketing campaigns for better efficiency and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Digital Marketing Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>
              We offer customized delivery models to ensure the highest quality
              blockchain services and support.
            </p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Analytics" />
            <h5>Analytics</h5>
            <p>
              Dedicated analytics services using blockchain for secure and
              accurate data analysis.
            </p>
          </div>

          <div className="dna-item">
            <img src={marketautomation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>
              Automate and optimize your marketing operations with blockchain
              solutions.
            </p>
          </div>

          <div className="dna-item">
            <img src={creativemaver} alt="Creative Mavericks" />
            <h5>Creative Mavericks</h5>
            <p>
              Expert UX and creative design services, powered by blockchain, to
              enhance user experience and brand engagement.
            </p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Technology</h5>
            <p>
              Leading-edge technology solutions built on blockchain to drive
              innovation and business success.
            </p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>
              Real-time monitoring and logging for reliable and transparent
              blockchain operations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
