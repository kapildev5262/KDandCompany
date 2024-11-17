import "../services.css";
import { useEffect } from "react";
import rapidPrototypingImage from "../../../assets/RP.jpeg"; // Image specific to Rapid Prototyping
import design from "../../../assets/ui-ux.avif";
import testing from "../../../assets/mobile-testing.avif";
import feedback from "../../../assets/feedback2.avif";
import revision from "../../../assets/revesion.avif";
import iteration from "../../../assets/online-intrection.jpg";
import innovation from "../../../assets/innovation.avif";
import { useLocation } from "react-router-dom";

export default function RapidPrototypes() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="rapid-prototypes-page">
      {/* Rapid Prototyping Section */}
      <section className="rapid-prototyping-section">
        <div className="background1" style={{ backgroundImage: `url(${rapidPrototypingImage})` }}>
          <div className="heading1">
            <h1>Rapid Prototyping Services</h1>
            <p style={{ color: "white" }}>
              Our Rapid Prototyping services enable fast, iterative development of new ideas, allowing businesses to
              bring innovative products to market efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Rapid Prototyping</h2>
        <ul>
          <li>
            <strong>Speed:</strong> Quickly transform concepts into working prototypes.
          </li>
          <li>
            <strong>Cost-effective:</strong> Minimize waste by refining prototypes early in the development process.
          </li>
          <li>
            <strong>Iteration:</strong> Continuous improvement through iterative design and testing.
          </li>
          <li>
            <strong>Collaboration:</strong> Involve stakeholders throughout the process for valuable feedback.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our rapid prototyping solutions are designed to support innovation, adaptability, and reduced time-to-market.
          We provide end-to-end support from initial concept to refined prototype.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={design} alt="Design & Ideation" />
            <h5>Design & Ideation</h5>
            <p>Transform your ideas into tangible prototypes using cutting-edge design tools and techniques.</p>
          </div>

          <div className="service-item">
            <img src={testing} alt="Testing & Feedback" />
            <h5>Testing & Feedback</h5>
            <p>Gather real-time feedback to refine prototypes and improve functionality and usability.</p>
          </div>

          <div className="service-item">
            <img src={feedback} alt="User Feedback Integration" />
            <h5>User Feedback Integration</h5>
            <p>Incorporate user insights to optimize your prototype for better market fit.</p>
          </div>

          <div className="service-item">
            <img src={revision} alt="Continuous Revision" />
            <h5>Continuous Revision</h5>
            <p>Iteratively refine the prototype until it meets your vision and business goals.</p>
          </div>

          <div className="service-item">
            <img src={iteration} alt="Iterative Design Process" />
            <h5>Iterative Design Process</h5>
            <p>Embrace flexibility by testing and adjusting prototypes as new insights are gathered.</p>
          </div>

          <div className="service-item">
            <img src={innovation} alt="Innovation & Development" />
            <h5>Innovation & Development</h5>
            <p>Leverage modern tools and approaches to drive innovation through effective prototyping.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>Our Approach to Rapid Prototyping</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={design} alt="Collaborative Design" />
            <h5>Collaborative Design</h5>
            <p>Work closely with our team for continuous input, ensuring alignment with your vision.</p>
          </div>

          <div className="dna-item">
            <img src={testing} alt="Functional Testing" />
            <h5>Functional Testing</h5>
            <p>Rigorous testing to validate design and functionality at every stage of development.</p>
          </div>

          <div className="dna-item">
            <img src={feedback} alt="Feedback-Driven" />
            <h5>Feedback-Driven</h5>
            <p>Incorporate feedback from stakeholders to refine prototypes in real-time.</p>
          </div>

          <div className="dna-item">
            <img src={innovation} alt="Innovation at Core" />
            <h5>Innovation at Core</h5>
            <p>Pioneering new technologies to support effective and future-ready prototypes.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
