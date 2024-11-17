import "../services.css";
import { useEffect } from "react";
import blockchain from "../../../assets/IEO.jpeg"; // Blockchain image import
import tokenLaunch from "../../../assets/token.jpg";
import compliance from "../../../assets/legal.jpg";
import security from "../../../assets/security2.avif";
import liquidity from "../../../assets/blockchain2.jpg";
import marketStrategy from "../../../assets/marketing.avif";
import advisory from "../../../assets/advisory.jpg";
import analytics from "../../../assets/anaytics.avif";
import { useLocation } from "react-router-dom";

export default function BlockchainIEOServices() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="blockchain-ieo-page">
      {/* IEO Services Section */}
      <section className="blockchain-section">
        <div className="background1" style={{ backgroundImage: `url(${blockchain})` }}>
          <div className="heading1">
            <h1>Blockchain IEO Solutions</h1>
            <p style={{ color: "white" }}>
              Our IEO services offer comprehensive support for secure, compliant, and successful token launches on
              leading exchanges, driving innovation and capital growth through blockchain technology.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of IEO</h2>
        <ul>
          <li>
            <strong>Compliance:</strong> Ensuring adherence to regulatory standards for secure and compliant token
            sales.
          </li>
          <li>
            <strong>Security:</strong> Robust security measures to safeguard token issuance and transactions.
          </li>
          <li>
            <strong>Liquidity:</strong> Access to a network of exchanges providing liquidity to token offerings.
          </li>
          <li>
            <strong>Transparency:</strong> Clear and traceable transactions, enhancing investor confidence and
            accountability.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>Our IEO Services</h2>
        <p>
          Our Blockchain IEO services include everything from strategic planning and compliance to marketing and
          post-launch support, ensuring your token offering achieves maximum visibility, security, and success.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Core IEO Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={tokenLaunch} alt="Token Launch Strategy" />
            <h5>Token Launch Strategy</h5>
            <p>
              Comprehensive planning and roadmap creation for a successful IEO launch, aligning with your goals and
              target market.
            </p>
          </div>

          <div className="service-item">
            <img src={compliance} alt="Legal and Compliance" />
            <h5>Legal and Compliance</h5>
            <p>
              Ensuring regulatory compliance and legal support to navigate token issuance requirements across
              jurisdictions.
            </p>
          </div>

          <div className="service-item">
            <img src={security} alt="Security Protocols" />
            <h5>Security Protocols</h5>
            <p>Advanced security solutions to protect token distribution, safeguarding both issuers and investors.</p>
          </div>

          <div className="service-item">
            <img src={liquidity} alt="Liquidity Solutions" />
            <h5>Liquidity Solutions</h5>
            <p>Partnering with leading exchanges to ensure liquidity and accessibility for your token in the market.</p>
          </div>

          <div className="service-item">
            <img src={marketStrategy} alt="Market Strategy and Promotion" />
            <h5>Market Strategy and Promotion</h5>
            <p>Targeted marketing strategies to increase visibility and investor engagement for your IEO.</p>
          </div>

          <div className="service-item">
            <img src={advisory} alt="Advisory and Consulting" />
            <h5>Advisory and Consulting</h5>
            <p>Expert consulting to guide you through each stage of your IEO process for optimized success.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our IEO Services Section */}
      <section className="dna-section">
        <h2>Why Choose Our IEO Services?</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={analytics} alt="Comprehensive Analytics" />
            <h5>Comprehensive Analytics</h5>
            <p>
              In-depth data and analytics services for performance insights, enabling data-driven decisions throughout
              your IEO.
            </p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Enhanced Security" />
            <h5>Enhanced Security</h5>
            <p>Industry-leading security protocols to ensure safe and reliable token transactions and data handling.</p>
          </div>

          <div className="dna-item">
            <img src={liquidity} alt="Liquidity Management" />
            <h5>Liquidity Management</h5>
            <p>Leveraging exchange partnerships to ensure liquidity, making tokens easily accessible post-IEO.</p>
          </div>

          <div className="dna-item">
            <img src={marketStrategy} alt="Marketing and Outreach" />
            <h5>Marketing and Outreach</h5>
            <p>
              Integrated marketing approaches to drive investor interest, providing visibility and engagement for your
              project.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
