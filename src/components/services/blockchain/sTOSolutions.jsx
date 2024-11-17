import "../services.css";
import { useEffect } from "react";
import blockchain from "../../../assets/STO.jpeg"; // Blockchain image import
import compliance from "../../../assets/legal.jpg";
import investor from "../../../assets/investor.avif";
import liquidity from "../../../assets/blockchain2.jpg";
import transparency from "../../../assets/blockchain3.avif";
import security from "../../../assets/security2.avif";
import tokenization from "../../../assets/token.jpg";
import { useLocation } from "react-router-dom";

export default function STOSolutions() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="sto-page">
      {/* STO Solutions Section */}
      <section className="sto-section">
        <div className="background1" style={{ backgroundImage: `url(${blockchain})` }}>
          <div className="heading1">
            <h1>STO Solutions</h1>
            <p style={{ color: "white" }}>
              Security Token Offerings (STO) provide a secure, compliant, and regulated way to raise capital by
              tokenizing real-world assets on the blockchain. Leverage our expertise to enhance transparency, security,
              and liquidity in your fundraising process.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of STO</h2>
        <ul>
          <li>
            <strong>Tokenization:</strong> Convert traditional assets into digital tokens to simplify asset transfer and
            ownership.
          </li>
          <li>
            <strong>Compliance:</strong> Ensure adherence to regulatory frameworks and investor protection laws.
          </li>
          <li>
            <strong>Security:</strong> Secure transactions using blockchain’s cryptographic integrity and immutable
            ledger.
          </li>
          <li>
            <strong>Liquidity:</strong> Facilitate easier asset trading through secondary markets, increasing liquidity.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our STO solutions support your business through the entire tokenization process, from initial strategy and
          compliance to investor relations and liquidity management.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our STO Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={tokenization} alt="Tokenization" />
            <h5>Tokenization</h5>
            <p>
              Transform assets into digital tokens to represent ownership and enhance transferability on the blockchain.
            </p>
          </div>

          <div className="service-item">
            <img src={compliance} alt="Compliance" />
            <h5>Regulatory Compliance</h5>
            <p>Comprehensive compliance solutions to meet regulatory standards and ensure secure transactions.</p>
          </div>

          <div className="service-item">
            <img src={investor} alt="Investor Relations" />
            <h5>Investor Relations</h5>
            <p>Engage and manage investors efficiently with tools for transparency and communication.</p>
          </div>

          <div className="service-item">
            <img src={liquidity} alt="Liquidity Management" />
            <h5>Liquidity Management</h5>
            <p>Enable secondary market trading to provide liquidity and flexibility to token holders.</p>
          </div>

          <div className="service-item">
            <img src={security} alt="Enhanced Security" />
            <h5>Enhanced Security</h5>
            <p>Utilize blockchain’s inherent security features for safe, tamper-proof transactions.</p>
          </div>

          <div className="service-item">
            <img src={transparency} alt="Transparency" />
            <h5>Transparency</h5>
            <p>Blockchain-enabled transparency for investors, ensuring visibility into all transactions.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our STO Services Section */}
      <section className="dna-section">
        <h2>Our Approach to STO Solutions</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={compliance} alt="Regulatory Expertise" />
            <h5>Regulatory Expertise</h5>
            <p>Deep knowledge of global regulations to help navigate legal requirements for STOs.</p>
          </div>

          <div className="dna-item">
            <img src={liquidity} alt="Liquidity Options" />
            <h5>Liquidity Options</h5>
            <p>Advanced strategies for liquidity provision, ensuring token accessibility in secondary markets.</p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Security Assurance" />
            <h5>Security Assurance</h5>
            <p>Robust security measures and monitoring for safe, reliable STO processes.</p>
          </div>

          <div className="dna-item">
            <img src={investor} alt="Investor Management" />
            <h5>Investor Management</h5>
            <p>Manage investor relations effectively with blockchain’s transparency and engagement tools.</p>
          </div>

          <div className="dna-item">
            <img src={tokenization} alt="Asset Tokenization" />
            <h5>Asset Tokenization</h5>
            <p>Transform assets into digital tokens, creating new opportunities for capital formation.</p>
          </div>

          <div className="dna-item">
            <img src={transparency} alt="Transparent Processes" />
            <h5>Transparent Processes</h5>
            <p>Transparency in every step, from token issuance to post-STO management.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
