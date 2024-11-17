import "../services.css";
import { useEffect } from "react";
import mobileAppBanner from "../../../assets/PAWS.jpeg"; // Mobile app image import
import design from "../../../assets/MobDesign.avif"; // Update with relevant images
import development from "../../../assets/Mob-app-development.avif"; // Update with relevant images
import testing from "../../../assets/mobile-testing.avif"; // Update with relevant images
import deployment from "../../../assets/mobile-app-deployment.avif"; // Update with relevant images
import maintenance from "../../../assets/maintainance.avif"; // Update with relevant images
import analytics from "../../../assets/analytics.png"; // Update with relevant images
import { useLocation } from "react-router-dom";

export default function MobileApps() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="mobile-apps-page">
      {/* Mobile Apps Section */}
      <section className="mobile-apps-section">
        <div className="background1" style={{ backgroundImage: `url(${mobileAppBanner})` }}>
          <div className="heading1">
            <h1>Paws Mobile App Development</h1>
            <p style={{ color: "white" }}>
              We specialize in developing innovative and user-friendly mobile applications tailored to your needs,
              ensuring a seamless user experience across all devices.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Mobile Apps</h2>
        <ul>
          <li>
            <strong>User-Centric Design:</strong> Our apps are designed with the user in mind, ensuring an intuitive
            experience.
          </li>
          <li>
            <strong>Cross-Platform Compatibility:</strong> We develop apps that work seamlessly on both iOS and Android
            platforms.
          </li>
          <li>
            <strong>Performance Optimization:</strong> Our apps are optimized for speed and efficiency.
          </li>
          <li>
            <strong>Security:</strong> We prioritize security, implementing robust measures to protect user data.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our mobile app development services cover the entire lifecycle, from initial concept to deployment and ongoing
          support. We ensure your app meets the highest standards of quality and performance.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={design} alt="App Design" />
            <h5>App Design</h5>
            <p>Creating visually appealing and user-friendly interfaces that engage users effectively.</p>
          </div>

          <div className="service-item">
            <img src={development} alt="App Development" />
            <h5>App Development</h5>
            <p>Developing robust and scalable mobile applications tailored to your business requirements.</p>
          </div>

          <div className="service-item">
            <img src={testing} alt="App Testing" />
            <h5>App Testing</h5>
            <p>Comprehensive testing to ensure the app is bug-free and performs well across devices.</p>
          </div>

          <div className="service-item">
            <img src={deployment} alt="App Deployment" />
            <h5>App Deployment</h5>
            <p>Seamless deployment of your app on app stores, ensuring visibility and accessibility.</p>
          </div>

          <div className="service-item">
            <img src={maintenance} alt="App Maintenance" />
            <h5>App Maintenance</h5>
            <p>Ongoing support and updates to keep your app running smoothly and securely.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Mobile App Development Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={analytics} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Utilizing analytics to gather insights and improve app performance based on user behavior.</p>
          </div>

          <div className="dna-item">
            <img src={design} alt="Custom Solutions" />
            <h5>Custom Solutions</h5>
            <p>Tailored mobile app solutions that align with your business goals and user needs.</p>
          </div>

          {/* Add more DNA items as necessary */}
        </div>
      </section>
    </div>
  );
}
