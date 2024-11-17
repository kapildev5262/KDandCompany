import "../services.css";
import { useEffect } from "react";
import metaverseBackground from "../../../assets/MVD.jpg"; // Metaverse image import
import immersive from "../../../assets/imersive-environment.avif";
import community from "../../../assets/community.avif";
import integration from "../../../assets/sales-integration.avif";
import experience from "../../../assets/Feedback1.avif";
import strategy from "../../../assets/strategy.jpg";
import analytics from "../../../assets/analytics.png";
import engagement from "../../../assets/engage.jpg";
import security from "../../../assets/security2.avif";
import scalability from "../../../assets/scalable.avif";
import customization from "../../../assets/custom.jpg";
import innovation from "../../../assets/innovation.avif";
import reliability from "../../../assets/reliable1.avif";
import { useLocation } from "react-router-dom";

export default function MetaverseDevelopment() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="metaverse-page">
      {/* Metaverse Section */}
      <section className="metaverse-section">
        <div className="background1" style={{ backgroundImage: `url(${metaverseBackground})` }}>
          <div className="heading1">
            <h1>Metaverse Development</h1>
            <p style={{ color: "white" }}>
              Explore the limitless possibilities of the metaverse, where virtual and augmented realities converge to
              create immersive experiences. We leverage cutting-edge technologies to build engaging and interactive
              environments for users.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Metaverse Development</h2>
        <ul>
          <li>
            <strong>Immersive Experiences:</strong> Create engaging environments that captivate users with stunning
            visuals and interactivity.
          </li>
          <li>
            <strong>Decentralized Ecosystems:</strong> Build platforms that empower users with ownership and control of
            their digital assets.
          </li>
          <li>
            <strong>Cross-Platform Integration:</strong> Seamlessly connect various virtual and augmented reality
            platforms.
          </li>
          <li>
            <strong>Community Engagement:</strong> Foster vibrant communities within the metaverse through interactive
            social features.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our metaverse development services are designed to provide innovative solutions that enhance user experiences
          and drive engagement. From concept to execution, we ensure a cohesive and immersive journey.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={immersive} alt="Immersive Environments" />
            <h5>Immersive Environments</h5>
            <p>Develop virtual spaces that immerse users in rich, interactive experiences tailored to their needs.</p>
          </div>

          <div className="service-item">
            <img src={community} alt="Community Building" />
            <h5>Community Building</h5>
            <p>Create engaging platforms that foster community interaction and collaboration within the metaverse.</p>
          </div>

          <div className="service-item">
            <img src={integration} alt="Integration Services" />
            <h5>Integration Services</h5>
            <p>Seamlessly integrate various technologies and platforms to enhance the metaverse experience.</p>
          </div>

          <div className="service-item">
            <img src={experience} alt="User Experience Design" />
            <h5>User Experience Design</h5>
            <p>Craft intuitive and engaging user experiences that enhance interaction in the metaverse.</p>
          </div>

          <div className="service-item">
            <img src={strategy} alt="Strategic Development" />
            <h5>Strategic Development</h5>
            <p>Develop strategic plans to ensure the success and sustainability of metaverse initiatives.</p>
          </div>

          <div className="service-item">
            <img src={analytics} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>Leverage data analytics to understand user behavior and improve metaverse experiences.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Metaverse Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={engagement} alt="Engagement Strategies" />
            <h5>Engagement Strategies</h5>
            <p>Implement strategies to increase user engagement and retention within the metaverse.</p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Security Solutions" />
            <h5>Security Solutions</h5>
            <p>Ensure secure transactions and data protection in the metaverse environment.</p>
          </div>

          <div className="dna-item">
            <img src={scalability} alt="Scalability" />
            <h5>Scalability</h5>
            <p>Design scalable solutions that can grow with your metaverse initiatives.</p>
          </div>

          <div className="dna-item">
            <img src={customization} alt="Customization" />
            <h5>Customization</h5>
            <p>Tailor solutions to meet specific business needs and user preferences.</p>
          </div>

          <div className="dna-item">
            <img src={innovation} alt="Innovation" />
            <h5>Innovation</h5>
            <p>Stay ahead of the curve with innovative technologies and trends in metaverse development.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Ensure consistent and reliable performance of your metaverse solutions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
