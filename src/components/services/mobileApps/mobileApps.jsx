import "../services.css";
import { useEffect } from "react";
import mobileDev from "../../../assets/mobapps.jpg"; // Replace with relevant mobile development image
import uiux from "../../../assets/ui-ux.avif";
import crossPlatform from "../../../assets/Cross-Platform.avif";
import performance from "../../../assets/Performance.avif";
import security from "../../../assets/mob-security.avif";
import support from "../../../assets/Suport-and-update.avif";
import design from "../../../assets/MobDesign.avif";
import reliability from "../../../assets/mob-reliable.avif"; // Update with relevant image for reliability
import innovation from "../../../assets/innovation.avif"; // Update with relevant image for innovation
import scalability from "../../../assets/Scalability-And-Performance-Optimization.avif"; // Update with relevant image for scalability
import { useLocation } from "react-router-dom";

export default function MobileApps() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="mobile-app-page">
      {/* Mobile App Development Section */}
      <section className="mobile-app-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${mobileDev})` }}
        >
          <div className="heading1">
            <h1>Mobile App Development Services</h1>
            <p style={{ color: "white" }}>
              We build high-performance, user-friendly mobile applications for
              iOS and Android that meet your business needs and enhance user
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Mobile App Development</h2>
        <ul>
          <li>
            <strong>Cross-Platform Development:</strong> Build apps that run
            smoothly on both iOS and Android with a single codebase.
          </li>
          <li>
            <strong>Performance Optimization:</strong> We ensure your app is
            fast, responsive, and reliable under all conditions.
          </li>
          <li>
            <strong>Custom UI/UX Design:</strong> Create engaging and intuitive
            interfaces that keep users coming back.
          </li>
          <li>
            <strong>Security & Privacy:</strong> Protect your users' data with
            industry-leading security practices.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          From initial concept and design to development, testing, and
          deployment, we offer comprehensive mobile app development services
          tailored to your business goals.
        </p>
      </section>

      {/* Our Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={design} alt="Custom App Design" />
            <h5>Custom App Design</h5>
            <p>
              We craft unique and engaging app designs to deliver an optimal
              user experience across all devices.
            </p>
          </div>

          <div className="service-item">
            <img src={crossPlatform} alt="Cross-Platform Development" />
            <h5>Cross-Platform Development</h5>
            <p>
              Save time and resources by building apps that work on both iOS and
              Android with a single codebase.
            </p>
          </div>

          <div className="service-item">
            <img src={uiux} alt="UI/UX Design" />
            <h5>UI/UX Design</h5>
            <p>
              We design user interfaces that are not only visually appealing but
              also highly intuitive.
            </p>
          </div>

          <div className="service-item">
            <img src={security} alt="App Security" />
            <h5>App Security</h5>
            <p>
              We incorporate advanced security measures like encryption and
              secure data storage to protect your users.
            </p>
          </div>

          <div className="service-item">
            <img src={performance} alt="Performance Optimization" />
            <h5>Performance Optimization</h5>
            <p>
              Our apps are designed to perform smoothly and efficiently,
              regardless of the user's device or location.
            </p>
          </div>

          <div className="service-item">
            <img src={support} alt="Support & Maintenance" />
            <h5>Support & Maintenance</h5>
            <p>
              We provide ongoing support and updates to ensure your app stays
              current and runs smoothly post-launch.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Mobile App Development Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Mobile App Development Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>
              We deliver robust and reliable mobile applications that perform
              under all conditions, ensuring user satisfaction.
            </p>
          </div>

          <div className="dna-item">
            <img src={innovation} alt="Innovation" />
            <h5>Innovation</h5>
            <p>
              By embracing the latest technologies, we bring innovative ideas to
              life and help you stay ahead of the competition.
            </p>
          </div>

          <div className="dna-item">
            <img src={scalability} alt="Scalability" />
            <h5>Scalability</h5>
            <p>
              Our solutions are designed to grow with your business, ensuring
              your mobile app can handle increased user traffic and data
              effortlessly.
            </p>
          </div>

          <div className="dna-item">
            <img src={performance} alt="Performance" />
            <h5>High Performance</h5>
            <p>
              We optimize mobile applications for peak performance, delivering
              fast and seamless user experiences even under heavy loads.
            </p>
          </div>

          <div className="dna-item">
            <img src={support} alt="Support" />
            <h5>Ongoing Support</h5>
            <p>
              With continuous monitoring and updates, we ensure your mobile app
              remains secure and up-to-date with the latest features.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <h2>Why Choose Us?</h2>
        <p>
          We combine creativity, innovation, and technical expertise to develop
          mobile applications that offer seamless user experiences. Whether
          you're looking to create a new app or improve an existing one, we
          deliver solutions that drive engagement and business growth.
        </p>
      </section>
    </div>
  );
}
