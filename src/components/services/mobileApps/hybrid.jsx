import "../services.css";
import { useEffect } from "react";
import mobileAppImage from "../../../assets/Hybrid.jpeg"; // Update to relevant image
import design from "../../../assets/MobDesign.avif"; // Image for design service
import development from "../../../assets/Mob-app-development.avif"; // Image for development service
import testing from "../../../assets/mobile-testing.avif"; // Image for testing service
import marketing from "../../../assets//marketingautomation.avif"; // Image for marketing service
import support from "../../../assets/maintainance.avif"; // Image for support service
import { useLocation } from "react-router-dom";

export default function MobileApps() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="mobile-apps-page">
      {/* Mobile App Development Section */}
      <section className="mobile-app-section">
        <div className="background1" style={{ backgroundImage: `url(${mobileAppImage})` }}>
          <div className="heading1">
            <h1>Hybrid Mobile App Development</h1>
            <p style={{ color: "white" }}>
              We specialize in creating robust hybrid mobile applications that combine the best of both worlds: native
              and web apps. Our development process ensures high performance, responsiveness, and user engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Hybrid Mobile Apps</h2>
        <ul>
          <li>
            <strong>Cross-Platform Compatibility:</strong> Build apps for multiple platforms with a single codebase.
          </li>
          <li>
            <strong>Performance:</strong> Native-like performance for a seamless user experience.
          </li>
          <li>
            <strong>Cost-Effective:</strong> Reduces development time and costs significantly.
          </li>
          <li>
            <strong>Easy Updates:</strong> Simplifies the process of app updates and maintenance.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our hybrid mobile app development services are tailored to meet the unique needs of your business. We offer
          end-to-end solutions from concept to deployment, ensuring your app stands out in a competitive market.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={design} alt="UI/UX Design" />
            <h5>UI/UX Design</h5>
            <p>Craft visually stunning and user-friendly interfaces that enhance user experience.</p>
          </div>

          <div className="service-item">
            <img src={development} alt="App Development" />
            <h5>App Development</h5>
            <p>Develop high-performance hybrid mobile applications tailored to your business needs.</p>
          </div>

          <div className="service-item">
            <img src={testing} alt="Quality Assurance" />
            <h5>Quality Assurance</h5>
            <p>Ensure your app is bug-free and performs well with our rigorous testing processes.</p>
          </div>

          <div className="service-item">
            <img src={marketing} alt="App Marketing" />
            <h5>App Marketing</h5>
            <p>Promote your app effectively to reach a broader audience and increase downloads.</p>
          </div>

          <div className="service-item">
            <img src={support} alt="Support & Maintenance" />
            <h5>Support & Maintenance</h5>
            <p>Provide ongoing support and updates to keep your app running smoothly.</p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="features-section">
        <h2>Our Approach to Hybrid App Development</h2>

        <p style={{ fontSize: "14px" }}>
          We follow a systematic approach to ensure the successful delivery of your hybrid mobile application. Our
          process includes:
        </p>
        <ul>
          <li>Understanding your business goals and requirements.</li>
          <li>Creating a detailed project plan and timeline.</li>
          <li>Designing and developing the app with a focus on performance and usability.</li>
          <li>Conducting thorough testing to ensure quality and reliability.</li>
          <li>Launching the app and providing continuous support and updates.</li>
        </ul>
      </section>
    </div>
  );
}
