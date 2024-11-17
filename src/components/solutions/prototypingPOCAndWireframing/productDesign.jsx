import "../solution.css";
import { useEffect } from "react";
import productDesignBanner from "../../../assets/PD.jpeg"; // Update with a relevant product design image
import uiux from "../../../assets/ui-ux.avif";
import prototyping from "../../../assets/prototyping.avif";
import marketResearch from "../../../assets/market-research.jpg";
import branding from "../../../assets/brand.avif";
import testing from "../../../assets/mob-reliable.avif";
import consulting from "../../../assets/ux-research.avif";
import processDesign from "../../../assets/mockup-design.jpg";
import creativeSolutions from "../../../assets/creative1.jpg";
import innovation from "../../../assets/innovation.avif";
import userExperience from "../../../assets/User-Friendly-Design.avif";
import qualityAssurance from "../../../assets/all-good1.avif";
import { useLocation } from "react-router-dom";

export default function ProductDesign() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="product-design-page">
      {/* Product Design Section */}
      <section className="design-section">
        <div className="background1" style={{ backgroundImage: `url(${productDesignBanner})` }}>
          <div className="heading1">
            <h1>Product Design</h1>
            <p style={{ color: "white" }}>
              Our Product Design services combine creativity, technology, and market research to create impactful,
              user-centered designs that align with your brand's vision and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Aspects of Product Design</h2>
        <ul>
          <li>
            <strong>Human-Centered Design:</strong> Focusing on user needs and experiences to create intuitive designs.
          </li>
          <li>
            <strong>Innovation:</strong> Applying creative and technical solutions to design standout products.
          </li>
          <li>
            <strong>Efficiency:</strong> Streamlined processes for fast and effective product development.
          </li>
          <li>
            <strong>Quality Assurance:</strong> Rigorous testing to ensure high-quality, reliable designs.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          We provide comprehensive product design services, from initial concept development to final testing and
          optimization, ensuring your products are innovative, user-friendly, and market-ready.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={uiux} alt="UI/UX Design" />
            <h5>UI/UX Design</h5>
            <p>Crafting user interfaces and experiences that are visually appealing and highly functional.</p>
          </div>

          <div className="service-item">
            <img src={prototyping} alt="Prototyping" />
            <h5>Prototyping</h5>
            <p>Developing interactive prototypes to visualize and test design concepts.</p>
          </div>

          <div className="service-item">
            <img src={marketResearch} alt="Market Research" />
            <h5>Market Research</h5>
            <p>Analyzing market trends to ensure your product aligns with customer needs and preferences.</p>
          </div>

          <div className="service-item">
            <img src={branding} alt="Branding & Identity" />
            <h5>Branding & Identity</h5>
            <p>Building strong brand identities that resonate with your target audience.</p>
          </div>

          <div className="service-item">
            <img src={testing} alt="Usability Testing" />
            <h5>Usability Testing</h5>
            <p>Conducting usability tests to ensure a smooth and user-friendly experience.</p>
          </div>

          <div className="service-item">
            <img src={consulting} alt="Design Consulting" />
            <h5>Design Consulting</h5>
            <p>Offering expert guidance to enhance your product’s design strategy and execution.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>Core Elements of Our Product Design Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={processDesign} alt="Process Design" />
            <h5>Process Design</h5>
            <p>Tailored design processes to deliver high-quality products.</p>
          </div>

          <div className="dna-item">
            <img src={creativeSolutions} alt="Creative Solutions" />
            <h5>Creative Solutions</h5>
            <p>Innovative design solutions to meet complex project requirements.</p>
          </div>

          <div className="dna-item">
            <img src={innovation} alt="Innovation" />
            <h5>Innovation</h5>
            <p>Applying new techniques to create groundbreaking product designs.</p>
          </div>

          <div className="dna-item">
            <img src={userExperience} alt="User Experience" />
            <h5>User Experience</h5>
            <p>Focusing on exceptional user experience through research and testing.</p>
          </div>

          <div className="dna-item">
            <img src={qualityAssurance} alt="Quality Assurance" />
            <h5>Quality Assurance</h5>
            <p>Ensuring products meet the highest standards through rigorous testing.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
