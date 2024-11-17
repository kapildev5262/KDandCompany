import "../services.css";
import { useEffect } from "react";
import uxPrototype from "../../../assets/Prototype.webp"; // Prototype page background image
import wireframes from "../../../assets/wireframe.jpg";
import userTesting from "../../../assets/mob-reliable.avif";
import mockups from "../../../assets/mockup-design.jpg";
import interaction from "../../../assets/online-intrection.jpg";
import responsive from "../../../assets/Responsive-Design.avif";
import branding from "../../../assets/brand.avif";
import { useLocation } from "react-router-dom";

export default function Prototypes() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="prototypes-page">
      {/* Prototypes & UI/UX Section */}
      <section className="prototype-section">
        <div className="background1" style={{ backgroundImage: `url(${uxPrototype})` }}>
          <div className="heading1">
            <h1>Prototypes & UI/UX Services</h1>
            <p style={{ color: "white" }}>
              We specialize in creating intuitive and engaging user interfaces, translating concepts into functional
              prototypes that bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features of Our UI/UX Services */}
      <section className="features-section">
        <h2>Key Features of Our UI/UX Services</h2>
        <ul>
          <li>
            <strong>Intuitive Design:</strong> Crafting user-friendly experiences with streamlined navigation and
            accessibility.
          </li>
          <li>
            <strong>Prototyping:</strong> High-fidelity prototypes to test and refine concepts before development.
          </li>
          <li>
            <strong>User Testing:</strong> Iterative testing with real users to validate and optimize designs.
          </li>
          <li>
            <strong>Responsive Design:</strong> Ensuring seamless experiences across all devices and screen sizes.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our UI/UX and prototyping services are tailored to meet your unique needs, from ideation to wireframing,
          prototyping, and testing. We help brands create digital products that are not only visually appealing but also
          enhance user engagement.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={wireframes} alt="Wireframing" />
            <h5>Wireframing</h5>
            <p>Building the structural layout to organize content and functionality on each screen.</p>
          </div>

          <div className="service-item">
            <img src={userTesting} alt="User Testing" />
            <h5>User Testing</h5>
            <p>Conducting tests with real users to refine and validate the design, ensuring optimal usability.</p>
          </div>

          <div className="service-item">
            <img src={mockups} alt="Mockups & Visual Design" />
            <h5>Mockups & Visual Design</h5>
            <p>Crafting high-fidelity mockups to represent the final design, emphasizing aesthetics and branding.</p>
          </div>

          <div className="service-item">
            <img src={interaction} alt="Interaction Design" />
            <h5>Interaction Design</h5>
            <p>Focusing on creating engaging user interactions to enhance the overall experience.</p>
          </div>

          <div className="service-item">
            <img src={responsive} alt="Responsive Design" />
            <h5>Responsive Design</h5>
            <p>Ensuring your design adapts seamlessly to all devices and screen sizes.</p>
          </div>

          <div className="service-item">
            <img src={branding} alt="Branding & Identity" />
            <h5>Branding & Identity</h5>
            <p>Creating a unique and cohesive brand identity that resonates with your target audience.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our UI/UX Services Section */}
      <section className="dna-section">
        <h2>DNA of Our UI/UX Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={responsive} alt="Responsive & Adaptive" />
            <h5>Responsive & Adaptive</h5>
            <p>Designs that work seamlessly across a wide range of devices and screen sizes.</p>
          </div>

          <div className="dna-item">
            <img src={userTesting} alt="User-Centered Approach" />
            <h5>User-Centered Approach</h5>
            <p>Our approach places the user at the center of every design decision.</p>
          </div>

          <div className="dna-item">
            <img src={interaction} alt="Interactive Experiences" />
            <h5>Interactive Experiences</h5>
            <p>Creating engaging, interactive designs that keep users engaged and connected.</p>
          </div>

          <div className="dna-item">
            <img src={branding} alt="Brand Consistency" />
            <h5>Brand Consistency</h5>
            <p>Ensuring that your brand's identity is consistent across all digital touchpoints.</p>
          </div>

          <div className="dna-item">
            <img src={uxPrototype} alt="Prototyping Excellence" />
            <h5>Prototyping Excellence</h5>
            <p>High-fidelity prototypes that bring your ideas to life and allow for early testing.</p>
          </div>

          <div className="dna-item">
            <img src={responsive} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Committed to delivering reliable and user-friendly designs that enhance user satisfaction.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
