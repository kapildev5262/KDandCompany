import "../services.css";
import { useEffect } from "react";
import iosImage from "../../../assets/IOS.jpeg"; // iOS development image import
import uxDesign from "../../../assets/ui-ux.avif";
import integration from "../../../assets/optimization2.avif";
import performance from "../../../assets/Performance2.avif";
import maintenance from "../../../assets/maintainance.avif";
import appstore from "../../../assets/app-store.jpg";
import testing from "../../../assets/mobile-testing.avif";
import customDesign from "../../../assets/custom-design.jpg";
import security from "../../../assets/security1.avif";
import { useLocation } from "react-router-dom";

export default function MobileApps() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="ios-page">
      {/* iOS Development Section */}
      <section className="ios-section">
        <div className="background1" style={{ backgroundImage: `url(${iosImage})` }}>
          <div className="heading1">
            <h1>iOS Mobile App Development</h1>
            <p style={{ color: "white" }}>
              Our iOS app development services focus on delivering user-centric, high-performance apps for iPhones and
              iPads. With expertise in Swift and Objective-C, we create apps tailored to meet your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our iOS Development</h2>
        <ul>
          <li>
            <strong>Native App Development:</strong> Developing high-performance apps specifically for iOS devices.
          </li>
          <li>
            <strong>App Store Integration:</strong> Seamless integration with the Apple App Store for smooth submission
            and updates.
          </li>
          <li>
            <strong>High Security:</strong> Implementing the best security practices to protect user data and privacy.
          </li>
          <li>
            <strong>Custom UI/UX Design:</strong> Crafting intuitive and engaging user experiences for iOS users.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          We offer end-to-end iOS development services, from initial concept and design to development, testing, and
          ongoing support. Whether it's creating a new app or enhancing an existing one, we ensure a seamless user
          experience.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our iOS Development Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={uxDesign} alt="Custom UX/UI Design" />
            <h5>Custom UX/UI Design</h5>
            <p>
              We create custom designs that reflect your brand and provide a smooth user experience for your iOS app.
            </p>
          </div>

          <div className="service-item">
            <img src={integration} alt="API Integration" />
            <h5>API Integration</h5>
            <p>Seamlessly integrate your iOS app with third-party APIs for enhanced functionality and services.</p>
          </div>

          <div className="service-item">
            <img src={performance} alt="Performance Optimization" />
            <h5>Performance Optimization</h5>
            <p>
              Ensuring your iOS app performs optimally, even under heavy usage, to provide the best experience for your
              users.
            </p>
          </div>

          <div className="service-item">
            <img src={maintenance} alt="App Maintenance" />
            <h5>App Maintenance & Support</h5>
            <p>Continuous support and maintenance to ensure your app stays up-to-date and functions smoothly.</p>
          </div>

          <div className="service-item">
            <img src={appstore} alt="App Store Submission" />
            <h5>App Store Submission</h5>
            <p>Assistance with App Store submission, ensuring your app meets all guidelines and is approved swiftly.</p>
          </div>

          <div className="service-item">
            <img src={testing} alt="QA & Testing" />
            <h5>QA & Testing</h5>
            <p>Thorough testing across multiple devices to ensure a bug-free and high-quality iOS app.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our iOS Development Services Section */}
      <section className="dna-section">
        <h2>DNA of Our iOS Development Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={customDesign} alt="Custom Design" />
            <h5>Custom Design</h5>
            <p>We craft custom app designs that provide a unique user experience for your audience.</p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Enhanced Security" />
            <h5>Enhanced Security</h5>
            <p>Implementing top-tier security features to ensure your app and user data remain secure.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
