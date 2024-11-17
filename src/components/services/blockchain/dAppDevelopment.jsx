import "../services.css";
import { useEffect } from "react";
import dappsImage from "../../../assets/D_app.jpeg"; // Replace with a relevant image for dApps
import design from "../../../assets/Mob-app-development.avif";
import integration from "../../../assets/ml-automation3.avif";
import smartContracts from "../../../assets/contract.jpg";
import ux from "../../../assets/MobDesign.avif";
import security from "../../../assets/security2.avif";
import scalability from "../../../assets/Decentralization.avif";
import { useLocation } from "react-router-dom";

export default function DAppsDevelopment() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="dapps-page">
      {/* dApps Development Section */}
      <section className="dapps-section">
        <div className="background1" style={{ backgroundImage: `url(${dappsImage})` }}>
          <div className="heading1">
            <h1>dApps Development Services</h1>
            <p style={{ color: "white" }}>
              Leverage the power of decentralized applications (dApps) to transform your business operations. Our
              expertise spans across blockchain protocols, smart contracts, and seamless integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our dApps Solutions</h2>
        <ul>
          <li>
            <strong>Decentralization:</strong> Eliminates intermediaries by deploying applications on the blockchain.
          </li>
          <li>
            <strong>Smart Contracts:</strong> Automate and secure processes with self-executing code.
          </li>
          <li>
            <strong>Transparency:</strong> Provides open and immutable data transactions.
          </li>
          <li>
            <strong>Security:</strong> Ensures enhanced protection through cryptography and consensus mechanisms.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our dApps development services cater to a wide range of industries and needs, from ideation to deployment. We
          ensure seamless user experiences, robust smart contracts, and secure blockchain integration.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our dApps Development Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={design} alt="UI/UX Design" />
            <h5>UI/UX Design</h5>
            <p>Delivering intuitive and appealing interfaces to enhance user interaction with dApps.</p>
          </div>

          <div className="service-item">
            <img src={smartContracts} alt="Smart Contract Development" />
            <h5>Smart Contract Development</h5>
            <p>Creating secure, efficient, and self-executing smart contracts for various use cases.</p>
          </div>

          <div className="service-item">
            <img src={integration} alt="Blockchain Integration" />
            <h5>Blockchain Integration</h5>
            <p>Integrating dApps with various blockchain protocols for seamless connectivity.</p>
          </div>

          <div className="service-item">
            <img src={security} alt="Enhanced Security" />
            <h5>Enhanced Security</h5>
            <p>Implementing best-in-class security measures to protect data and user assets.</p>
          </div>

          <div className="service-item">
            <img src={ux} alt="User Experience Optimization" />
            <h5>User Experience Optimization</h5>
            <p>Optimizing dApps to ensure smooth, responsive, and engaging user experiences.</p>
          </div>

          <div className="service-item">
            <img src={scalability} alt="Scalability Solutions" />
            <h5>Scalability Solutions</h5>
            <p>Ensuring dApps can scale with your business needs, supporting more users and data.</p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="dna-section">
        <h2>Our Approach to dApps Development</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={design} alt="Design Excellence" />
            <h5>Design Excellence</h5>
            <p>Prioritizing user-centric design to ensure dApps are both functional and aesthetically pleasing.</p>
          </div>

          <div className="dna-item">
            <img src={smartContracts} alt="Robust Contracts" />
            <h5>Robust Smart Contracts</h5>
            <p>Developing smart contracts that are thoroughly tested and secure for real-world applications.</p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Advanced Security" />
            <h5>Advanced Security</h5>
            <p>Utilizing the latest security protocols to protect dApps against vulnerabilities.</p>
          </div>

          <div className="dna-item">
            <img src={integration} alt="Seamless Integration" />
            <h5>Seamless Integration</h5>
            <p>Connecting dApps seamlessly with other systems to maximize functionality.</p>
          </div>

          <div className="dna-item">
            <img src={scalability} alt="Scalability" />
            <h5>Scalability</h5>
            <p>Optimizing for growth, ensuring that dApps can handle increased demand.</p>
          </div>

          <div className="dna-item">
            <img src={ux} alt="User Engagement" />
            <h5>User Engagement</h5>
            <p>Providing engaging experiences to keep users interacting with the dApp.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
