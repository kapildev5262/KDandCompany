import "../services.css";
import { useEffect } from "react";
import blockchain from "../../../assets/Emerging-tech2.jpg"; 
import blockchain1 from "../../../assets/blockchain1.png"; // Blockchain image import
import aiImage from "../../../assets/Ai.png"; // AI image
import cvImage from "../../../assets/AIhome.webp"; // Computer Vision image
import mlImage from "../../../assets/block1.png"; // Machine Learning image
import { useLocation } from "react-router-dom";

export default function EmergingTech() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="emerging-tech-page">
      {/* Page Header */}
      <section className="header-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${blockchain})` }}
        >
          <div className="heading1">
            <h1>Emerging Technologies</h1>
            <p style={{ color: "white" }}>
              Explore the transformative power of AI, Blockchain, Computer Vision,
              and Machine Learning in modern business applications.
            </p>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="ai-section">
        <div className="service-section-content">
          <img src={aiImage} alt="AI Services" />
          <div>
            <h2>AI Services</h2>
            <p>
              Our AI services leverage advanced algorithms to automate tasks,
              enhance decision-making, and personalize customer experiences.
              We offer solutions in natural language processing, predictive analytics,
              and robotic process automation to boost efficiency and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Blockchain Services Section */}
      <section className="blockchain-section">
        <div className="service-section-content">
          <img src={blockchain1} alt="Blockchain Services" />
          <div>
            <h2>Blockchain Services</h2>
            <p>
              Blockchain ensures secure, transparent, and immutable transactions.
              From decentralized applications (dApps) to smart contract development,
              we provide comprehensive blockchain solutions that enhance trust and
              security in business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Computer Vision Services Section */}
      <section className="cv-section">
        <div className="service-section-content">
          <img src={cvImage} alt="Computer Vision Services" />
          <div>
            <h2>Computer Vision Services</h2>
            <p>
              We specialize in image and video analysis through advanced computer
              vision techniques such as facial recognition, object detection, and
              augmented reality. These solutions help businesses automate visual
              inspection, monitoring, and data analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Machine Learning Services Section */}
      <section className="ml-section">
        <div className="service-section-content">
          <img src={mlImage} alt="Machine Learning Services" />
          <div>
            <h2>Machine Learning Services</h2>
            <p>
              Our machine learning solutions help businesses harness the power of
              data-driven insights. From recommendation systems to predictive
              maintenance, we build custom ML models that learn and adapt to your
              business needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
