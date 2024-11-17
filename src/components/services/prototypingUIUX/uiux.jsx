import "../services.css";
import { useEffect } from "react";
import uiuxBackground from "../../../assets/UX_UI.jpeg"; // Background image for UI/UX
import design from "../../../assets/ui-ux.avif"; // Design image
import usability from "../../../assets/mobile-testing.avif"; // Usability image
import research from "../../../assets/ux-research.avif"; // Research image
import prototyping from "../../../assets/prototyping.avif"; // Prototyping image
import testing from "../../../assets/mobile-testing.avif"; // Testing image
import analytics from "../../../assets/analytics.png"; // Analytics image
import { useLocation } from "react-router-dom";

export default function UiUxDesign() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="uiux-page">
      {/* UI/UX Design Section */}
      <section className="uiux-section">
        <div className="background1" style={{ backgroundImage: `url(${uiuxBackground})` }}>
          <div className="heading1">
            <h1>UI/UX Design Services</h1>
            <p style={{ color: "white" }}>
              We specialize in creating user-centered designs that enhance the overall user experience. Our UI/UX
              services are aimed at crafting intuitive and engaging interfaces that drive user satisfaction and business
              success.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our UI/UX Services</h2>
        <ul>
          <li>
            <strong>User-Centric:</strong> Designs focused on the needs and preferences of the end-users.
          </li>
          <li>
            <strong>Responsive:</strong> Ensuring seamless experience across all devices and screen sizes.
          </li>
          <li>
            <strong>Intuitive Navigation:</strong> Easy-to-use interfaces that promote efficient user interactions.
          </li>
          <li>
            <strong>Visual Appeal:</strong> Aesthetic designs that attract and retain user attention.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our UI/UX design services encompass the entire design process from research and prototyping to testing and
          implementation. We aim to deliver designs that not only meet functional requirements but also resonate with
          users emotionally.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={design} alt="UI Design" />
            <h5>UI Design</h5>
            <p>
              Creating visually stunning interfaces that enhance usability and provide a delightful user experience.
            </p>
          </div>

          <div className="service-item">
            <img src={usability} alt="Usability Testing" />
            <h5>Usability Testing</h5>
            <p>
              Conducting thorough usability tests to identify pain points and improve user interaction with your
              product.
            </p>
          </div>

          <div className="service-item">
            <img src={research} alt="User Research" />
            <h5>User Research</h5>
            <p>
              In-depth user research to understand user behavior and preferences, ensuring that designs are aligned with
              their needs.
            </p>
          </div>

          <div className="service-item">
            <img src={prototyping} alt="Prototyping" />
            <h5>Prototyping</h5>
            <p>
              Building interactive prototypes to visualize the design concept and gather feedback early in the design
              process.
            </p>
          </div>

          <div className="service-item">
            <img src={testing} alt="A/B Testing" />
            <h5>A/B Testing</h5>
            <p>Implementing A/B testing to measure user preferences and optimize designs based on real user data.</p>
          </div>

          <div className="service-item">
            <img src={analytics} alt="Analytics" />
            <h5>Data Analytics</h5>
            <p>
              Utilizing analytics tools to track user interactions and gather insights for continuous improvement of the
              UI/UX.
            </p>
          </div>
        </div>
      </section>

      {/* Our Design Process Section */}
      <section className="process-section">
        <h2>Our Design Process</h2>
        <div className="process-container">
          <div className="process-item">
            <h5>Discovery</h5>
            <p>Understanding the project requirements and goals through client collaboration and user research.</p>
          </div>

          <div className="process-item">
            <h5>Ideation</h5>
            <p>Brainstorming and generating creative ideas that align with user needs and business objectives.</p>
          </div>

          <div className="process-item">
            <h5>Design</h5>
            <p>
              Crafting wireframes and high-fidelity designs that reflect the vision and functionality of the product.
            </p>
          </div>

          <div className="process-item">
            <h5>Implementation</h5>
            <p>Collaborating with developers to ensure that designs are implemented effectively and efficiently.</p>
          </div>

          <div className="process-item">
            <h5>Feedback & Iteration</h5>
            <p>Gathering user feedback and iterating on designs to enhance usability and user satisfaction.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
