import "../services.css";
import { useEffect } from "react";
import androidBanner from "../../../assets/Android.jpeg"; // Android app development image import
import design from "../../../assets/MobDesign.avif";
import development from "../../../assets/Mob-app-development.avif";
import testing from "../../../assets/mobile-testing.avif";
import maintenance from "../../../assets/maintainance.avif";
import seo from "../../../assets/seo.png";
import marketing from "../../../assets/marketingautomation.png";
import { useLocation } from "react-router-dom";

export default function AndroidAppDevelopment() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="android-page">
      {/* Android Development Section */}
      <section className="android-section">
        <div className="background1" style={{ backgroundImage: `url(${androidBanner})` }}>
          <div className="heading1">
            <h1>Android Mobile App Development</h1>
            <p style={{ color: "white" }}>
              We specialize in crafting high-performance, user-friendly Android mobile applications tailored to meet
              your business needs. From concept to deployment, we ensure seamless functionality and an exceptional user
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Android Apps</h2>
        <ul>
          <li>
            <strong>User-Centric Design:</strong> We prioritize intuitive and aesthetically pleasing UI/UX design.
          </li>
          <li>
            <strong>Performance Optimization:</strong> Our apps are optimized for speed, responsiveness, and efficiency.
          </li>
          <li>
            <strong>Security:</strong> We implement top-notch security protocols to safeguard user data.
          </li>
          <li>
            <strong>Seamless Integration:</strong> Our apps are designed to integrate smoothly with your existing
            systems.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          From idea validation to post-launch maintenance, we provide comprehensive Android app development services to
          help your business thrive in the digital landscape. We focus on delivering scalable and innovative mobile
          solutions.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={design} alt="UI/UX Design" />
            <h5>UI/UX Design</h5>
            <p>
              Our design experts create visually appealing and user-friendly interfaces that elevate user engagement and
              satisfaction.
            </p>
          </div>

          <div className="service-item">
            <img src={development} alt="App Development" />
            <h5>App Development</h5>
            <p>We build high-quality Android applications with robust architecture and cutting-edge technologies.</p>
          </div>

          <div className="service-item">
            <img src={testing} alt="App Testing" />
            <h5>App Testing</h5>
            <p>
              Our thorough testing processes ensure that your app is free of bugs and delivers a smooth experience
              across all devices.
            </p>
          </div>

          <div className="service-item">
            <img src={maintenance} alt="Maintenance & Support" />
            <h5>Maintenance & Support</h5>
            <p>
              We provide ongoing maintenance to keep your app updated, secure, and functioning optimally post-launch.
            </p>
          </div>

          <div className="service-item">
            <img src={seo} alt="App Store Optimization" />
            <h5>App Store Optimization</h5>
            <p>
              Boost your app's visibility with our app store optimization strategies, ensuring it ranks high in search
              results.
            </p>
          </div>

          <div className="service-item">
            <img src={marketing} alt="Digital Marketing" />
            <h5>Digital Marketing</h5>
            <p>
              Leverage our digital marketing expertise to promote your Android app and reach a wider audience
              effectively.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>Why Choose Our Android Development Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={design} alt="Customized Solutions" />
            <h5>Customized Solutions</h5>
            <p>Tailored Android applications designed to meet the unique requirements of your business.</p>
          </div>

          <div className="dna-item">
            <img src={development} alt="Cutting-Edge Technology" />
            <h5>Cutting-Edge Technology</h5>
            <p>We utilize the latest technology stacks to deliver apps that are scalable and future-proof.</p>
          </div>

          <div className="dna-item">
            <img src={testing} alt="Quality Assurance" />
            <h5>Quality Assurance</h5>
            <p>Our rigorous testing processes guarantee an error-free and highly efficient mobile experience.</p>
          </div>

          <div className="dna-item">
            <img src={maintenance} alt="Ongoing Support" />
            <h5>Ongoing Support</h5>
            <p>
              We offer continuous support and updates to keep your app aligned with evolving user needs and technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
