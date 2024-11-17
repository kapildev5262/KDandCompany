import "../services.css";
import { useEffect } from "react";
import prototypeImage from "../../../assets/HFP.jpeg"; // Updated image for High Fidelity prototypes
import creative from "../../../assets/creative.png";
import designTools from "../../../assets/mockup-design.jpg";
import uxResearch from "../../../assets/ux-research.avif";
import responsive from "../../../assets/Responsive-Design.avif";
import animation from "../../../assets/Animation.avif";
import iteration from "../../../assets/online-intrection.jpg";
import feedback from "../../../assets/feedback2.avif";
import collaboration from "../../../assets/Team-collab.avif";
import testing from "../../../assets/mobile-testing.avif";
import technology from "../../../assets/Security-Best-Practices.avif";
import reliability from "../../../assets/reliable1.avif";
import { useLocation } from "react-router-dom";

export default function HighFidelityPrototypes() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="prototype-page">
      {/* Prototype Section */}
      <section className="prototype-section">
        <div className="background1" style={{ backgroundImage: `url(${prototypeImage})` }}>
          <div className="heading1">
            <h1>High Fidelity Prototypes</h1>
            <p style={{ color: "white" }}>
              High-fidelity prototypes bring your digital ideas to life with interactive, detailed, and realistic
              mockups. They showcase the design, functionality, and user experience of your application, providing a
              clear picture before development begins.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of High-Fidelity Prototypes</h2>
        <ul>
          <li>
            <strong>Realism:</strong> Offers a close representation of the final product, enabling accurate feedback.
          </li>
          <li>
            <strong>Interactivity:</strong> Interactive elements provide a hands-on experience for testing.
          </li>
          <li>
            <strong>Detailed Design:</strong> Includes precise layout, colors, typography, and animations.
          </li>
          <li>
            <strong>User Experience Testing:</strong> Helps in understanding user interactions and refining UX.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our high-fidelity prototyping services are tailored to transform your ideas into tangible experiences,
          facilitating user testing and efficient design iteration before development.
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
              Crafting unique and visually appealing prototype designs that enhance the look and feel of your
              application.
            </p>
          </div>

          <div className="service-item">
            <img src={designTools} alt="Design Tools Expertise" />
            <h5>Design Tools Expertise</h5>
            <p>
              Skilled in the latest prototyping tools like Figma, Sketch, and Adobe XD to deliver high-fidelity mockups.
            </p>
          </div>

          <div className="service-item">
            <img src={uxResearch} alt="UX Research" />
            <h5>UX Research</h5>
            <p>
              Conducting in-depth user research to ensure that the prototype meets user expectations and business goals.
            </p>
          </div>

          <div className="service-item">
            <img src={responsive} alt="Responsive Prototyping" />
            <h5>Responsive Prototyping</h5>
            <p>
              Designing prototypes that adapt to various screen sizes, ensuring a seamless experience across devices.
            </p>
          </div>

          <div className="service-item">
            <img src={animation} alt="Animation & Interaction" />
            <h5>Animation & Interaction</h5>
            <p>
              Adding animations and interactive elements to bring the prototype to life and reflect the final product’s
              experience.
            </p>
          </div>

          <div className="service-item">
            <img src={iteration} alt="Design Iteration" />
            <h5>Design Iteration</h5>
            <p>
              Rapid iteration based on user feedback, refining the prototype to enhance usability and functionality.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Prototyping Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={feedback} alt="User Feedback" />
            <h5>User Feedback</h5>
            <p>Gathering and analyzing user feedback to refine prototypes and create a user-centered design.</p>
          </div>

          <div className="dna-item">
            <img src={collaboration} alt="Collaboration" />
            <h5>Collaboration</h5>
            <p>
              Working closely with stakeholders to ensure that the prototype aligns with their vision and expectations.
            </p>
          </div>

          <div className="dna-item">
            <img src={testing} alt="Usability Testing" />
            <h5>Usability Testing</h5>
            <p>Conducting usability testing sessions to identify issues and make necessary adjustments.</p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Advanced Tools" />
            <h5>Advanced Tools</h5>
            <p>
              Utilizing cutting-edge technology and tools to create prototypes that reflect the final product
              accurately.
            </p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Ensuring reliability in design and functionality through thorough testing and refinement.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
