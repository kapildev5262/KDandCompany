import "../services.css";
import { useEffect } from "react";
import prototypes from "../../../assets/LFP.jpeg"; // Prototypes banner image
import sketching from "../../../assets/sketching.jpg";
import wireframing from "../../../assets/wireframe.jpg";
import usability from "../../../assets/ux-research.avif";
import flowchart from "../../../assets/workflow.avif";
import mockups from "../../../assets/mockup-design.jpg";
import testing from "../../../assets/mobile-testing.avif";
import { useLocation } from "react-router-dom";

export default function Prototypes() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="prototypes-page">
      {/* Prototypes Section */}
      <section className="prototypes-section">
        <div className="background1" style={{ backgroundImage: `url(${prototypes})` }}>
          <div className="heading1">
            <h1>Low Fidelity Prototypes</h1>
            <p style={{ color: "white" }}>
              Our low-fidelity prototyping services help visualize ideas early in the design process, focusing on
              structure, flow, and usability without the need for high-end visuals.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Low Fidelity Prototyping</h2>
        <ul>
          <li>
            <strong>Cost-Effective:</strong> Rapidly generate and test ideas without high development costs.
          </li>
          <li>
            <strong>Speed:</strong> Quickly create prototypes to validate ideas and improve design efficiency.
          </li>
          <li>
            <strong>Feedback-Driven:</strong> Gather user feedback early in the process to guide development.
          </li>
          <li>
            <strong>Iterative Design:</strong> Easily modify and iterate on design concepts based on feedback.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our services in low-fidelity prototyping cover the full design spectrum, from initial sketches to usability
          testing, ensuring your product concepts align with user needs and business goals.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={sketching} alt="Sketching" />
            <h5>Sketching</h5>
            <p>
              Visualize early ideas through hand-drawn or digital sketches, setting the foundation for a solid design.
            </p>
          </div>

          <div className="service-item">
            <img src={wireframing} alt="Wireframing" />
            <h5>Wireframing</h5>
            <p>Develop structural blueprints that define user flow and layout without focusing on final aesthetics.</p>
          </div>

          <div className="service-item">
            <img src={usability} alt="Usability Testing" />
            <h5>Usability Testing</h5>
            <p>Conduct testing sessions to gather feedback on functionality, flow, and user interaction.</p>
          </div>

          <div className="service-item">
            <img src={flowchart} alt="User Flow Design" />
            <h5>User Flow Design</h5>
            <p>Map out user journeys to ensure seamless navigation and positive user experiences.</p>
          </div>

          <div className="service-item">
            <img src={mockups} alt="Mockups" />
            <h5>Mockups</h5>
            <p>Create detailed representations of the final product using low-fidelity mockups for visual reference.</p>
          </div>

          <div className="service-item">
            <img src={testing} alt="A/B Testing" />
            <h5>A/B Testing</h5>
            <p>Test different design variations with target users to identify the most effective solution.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Prototyping Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Prototyping Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={flowchart} alt="User Journey Mapping" />
            <h5>User Journey Mapping</h5>
            <p>We map out end-to-end user journeys to create intuitive and seamless designs.</p>
          </div>

          <div className="dna-item">
            <img src={usability} alt="Interactive Feedback Loops" />
            <h5>Interactive Feedback Loops</h5>
            <p>Engage users early and often with feedback loops to refine the prototype iteratively.</p>
          </div>

          <div className="dna-item">
            <img src={testing} alt="User Testing" />
            <h5>User Testing</h5>
            <p>We emphasize user-centered design with rigorous testing at each stage.</p>
          </div>

          <div className="dna-item">
            <img src={mockups} alt="Flexible Iteration" />
            <h5>Flexible Iteration</h5>
            <p>Quickly iterate on prototypes to adapt to feedback and ensure a user-friendly design.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
