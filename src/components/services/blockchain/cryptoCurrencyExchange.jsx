import "../services.css";
import { useEffect } from "react";
import cryptoExchange from "../../../assets/Currency.jpeg"; // Main background image for the page
import tradingEngine from "../../../assets/trading-engine.jpg";
import liquidityPools from "../../../assets/blockchain2.jpg";
import security from "../../../assets/security2.avif";
import compliance from "../../../assets/legal.jpg";
import analytics from "../../../assets/anaytics.avif";
import userInterface from "../../../assets/Mob-app-development.avif";
import { useLocation } from "react-router-dom";

export default function CryptoExchangeServices() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="crypto-exchange-page">
      {/* Crypto Exchange Services Section */}
      <section className="crypto-exchange-section">
        <div className="background1" style={{ backgroundImage: `url(${cryptoExchange})` }}>
          <div className="heading1">
            <h1>Crypto Currency Exchange Services</h1>
            <p style={{ color: "white" }}>
              Our cryptocurrency exchange solutions offer a secure, scalable, and efficient platform for trading digital
              assets. From custom exchange development to liquidity management, we provide end-to-end solutions for your
              business.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Crypto Exchange Services</h2>
        <ul>
          <li>
            <strong>Real-Time Trading:</strong> High-performance trading engine to handle large volumes of transactions
            seamlessly.
          </li>
          <li>
            <strong>Liquidity Solutions:</strong> Integrate liquidity pools and market-making services for a smooth
            trading experience.
          </li>
          <li>
            <strong>Security:</strong> Comprehensive security protocols to protect funds and data from unauthorized
            access.
          </li>
          <li>
            <strong>Compliance:</strong> Adherence to regulatory standards for a compliant and transparent trading
            environment.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          From exchange setup to advanced trading features, our services cover all aspects of cryptocurrency exchange
          development, tailored to your business needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Exchange Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={tradingEngine} alt="Trading Engine Development" />
            <h5>Trading Engine Development</h5>
            <p>
              A high-speed, robust trading engine with real-time processing and order matching for optimal performance.
            </p>
          </div>

          <div className="service-item">
            <img src={liquidityPools} alt="Liquidity Management" />
            <h5>Liquidity Management</h5>
            <p>Solutions to integrate liquidity pools, optimize market depth, and provide seamless order matching.</p>
          </div>

          <div className="service-item">
            <img src={security} alt="Enhanced Security" />
            <h5>Enhanced Security</h5>
            <p>Industry-standard security protocols, including encryption and multi-factor authentication.</p>
          </div>

          <div className="service-item">
            <img src={compliance} alt="Regulatory Compliance" />
            <h5>Regulatory Compliance</h5>
            <p>Adhere to global regulations and ensure a compliant trading environment.</p>
          </div>

          <div className="service-item">
            <img src={analytics} alt="Analytics and Reporting" />
            <h5>Analytics and Reporting</h5>
            <p>Data-driven insights with real-time reporting and analysis to monitor trading performance and trends.</p>
          </div>

          <div className="service-item">
            <img src={userInterface} alt="User Interface Design" />
            <h5>User Interface Design</h5>
            <p>Intuitive, user-friendly interfaces to deliver an optimal trading experience.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Exchange Services Section */}
      <section className="dna-section">
        <h2>Our Approach to Exchange Development</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={tradingEngine} alt="Scalable Trading Engine" />
            <h5>Scalable Trading Engine</h5>
            <p>High-performance architecture to handle peak trading volumes with minimal latency.</p>
          </div>

          <div className="dna-item">
            <img src={liquidityPools} alt="Liquidity Options" />
            <h5>Liquidity Options</h5>
            <p>Advanced liquidity management to ensure smooth trading and minimize slippage.</p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Security Assurance" />
            <h5>Security Assurance</h5>
            <p>Comprehensive security measures to protect assets and ensure transaction integrity.</p>
          </div>

          <div className="dna-item">
            <img src={compliance} alt="Compliance Expertise" />
            <h5>Compliance Expertise</h5>
            <p>In-depth knowledge of regulatory frameworks for crypto exchanges worldwide.</p>
          </div>

          <div className="dna-item">
            <img src={userInterface} alt="User-Centric Design" />
            <h5>User-Centric Design</h5>
            <p>Creating user-friendly, intuitive trading interfaces for enhanced user engagement.</p>
          </div>

          <div className="dna-item">
            <img src={analytics} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>Real-time data insights for improved decision-making and market strategy.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
