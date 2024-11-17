import "../services.css";
import { useEffect } from "react";
import blockchain from "../../../assets/blockchain.jpg"; // Blockchain image import
import security from "../../../assets/Security-and-Immutability.avif";
import decentralization from "../../../assets/Decentralization.avif";
import transparency from "../../../assets/Supply-Chain.avif";
import automation from "../../../assets/Smart-Contracts-and-Automation.avif";
import scalability from "../../../assets/Blockchain-Scalability-Performance.avif";
import smartContracts from "../../../assets/Smart-Contract-Development.avif";
import analytics from "../../../assets/analytics.png";
import { useLocation } from "react-router-dom";

export default function Blockchain() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="blockchain-page">
      {/* Blockchain Introduction Section */}
      <section className="blockchain-section">
        <div className="background1" style={{ backgroundImage: `url(${blockchain})` }}>
          <div className="heading1">
            <h1>Blockchain Development Services</h1>
            <p style={{ color: "white" }}>
              Blockchain is revolutionizing industries by providing secure, transparent, and decentralized solutions.
              From financial services to supply chain management, blockchain technology ensures reliability and trust in
              digital transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Blockchain Technology</h2>
        <ul>
          <li>
            <strong>Decentralization:</strong> Eliminates the need for central authorities, empowering peer-to-peer
            networks.
          </li>
          <li>
            <strong>Security:</strong> Advanced cryptographic techniques secure transactions and protect data from
            tampering.
          </li>
          <li>
            <strong>Transparency:</strong> All transactions are recorded on an immutable ledger, ensuring complete
            traceability.
          </li>
          <li>
            <strong>Automation:</strong> Smart contracts automate processes, reducing human error and increasing
            efficiency.
          </li>
          <li>
            <strong>Scalability:</strong> Flexible solutions to accommodate growing transaction volumes and network
            expansion.
          </li>
        </ul>
      </section>

      {/* Our Blockchain Services Section */}
      <section className="services-section">
        <h2>Our Blockchain Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={smartContracts} alt="Smart Contracts" />
            <h5>Smart Contract Development</h5>
            <p>
              We develop secure and efficient smart contracts that automate business processes and enable trustless
              transactions.
            </p>
          </div>

          <div className="service-item">
            <img src={security} alt="Blockchain Security" />
            <h5>Blockchain Security Solutions</h5>
            <p>
              Our solutions prioritize security by utilizing cryptography and advanced encryption to safeguard your
              blockchain network.
            </p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Process Automation" />
            <h5>Process Automation</h5>
            <p>
              Leverage blockchain for automated workflows that eliminate manual intervention, reducing operational
              costs.
            </p>
          </div>

          <div className="service-item">
            <img src={decentralization} alt="Decentralized Applications (dApps)" />
            <h5>Decentralized Application (dApp) Development</h5>
            <p>
              Build scalable and reliable decentralized applications to provide your users with a seamless experience
              without intermediaries.
            </p>
          </div>

          <div className="service-item">
            <img src={transparency} alt="Supply Chain Management" />
            <h5>Blockchain-Based Supply Chain Management</h5>
            <p>
              Improve transparency and traceability in your supply chain by implementing blockchain-powered solutions.
            </p>
          </div>

          <div className="service-item">
            <img src={scalability} alt="Blockchain Scalability" />
            <h5>Blockchain Scalability Solutions</h5>
            <p>
              Enhance your blockchain network's capacity to process a higher number of transactions without sacrificing
              speed or security.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Service Details Section */}
      <section className="dna-section">
        <h2>Why Choose Us for Blockchain Development</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={analytics} alt="Advanced Analytics" />
            <h5>Advanced Analytics</h5>
            <p>
              We provide real-time blockchain analytics to offer insights into transaction patterns, user behavior, and
              network performance.
            </p>
          </div>

          <div className="dna-item">
            <img src={automation} alt="Custom Blockchain Solutions" />
            <h5>Custom Blockchain Solutions</h5>
            <p>
              Our expert team delivers tailored blockchain solutions to meet your business needs, from finance to
              logistics and beyond.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
