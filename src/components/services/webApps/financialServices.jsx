import "../services.css";
import { useEffect } from "react";
import fintech from "../../../assets/FT.jpeg"; // Updated image for FinTech
import creative from "../../../assets/creative.png";
import social from "../../../assets/socialmedia.png";
import listening from "../../../assets/SocialListening.png";
import media from "../../../assets/MediaPlanning.png";
import engine from "../../../assets/seo.png";
import automation from "../../../assets/marketingautomation.png";
import delivery from "../../../assets/deliverymodel.png";
import analytic from "../../../assets/analytics.png";
import marketautomation from "../../../assets/marketingautomation.png";
import creativemaver from "../../../assets/creative.png";
import technology from "../../../assets/insurance.png";
import reliability from "../../../assets/prediction.png";
import { useLocation } from "react-router-dom";

export default function WebApps() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="fintech-page">
      {/* FinTech Section */}
      <section className="fintech-section">
        <div className="background1" style={{ backgroundImage: `url(${fintech})` }}>
          <div className="heading1">
            <h1>Web Apps for Financial Services (FinTech) (banking, payments, investments)</h1>
            <p style={{ color: "white" }}>
              We specialize in creating powerful, secure, and scalable web applications tailored for FinTech companies,
              including those in banking, payments, and investments. Our solutions drive innovation, enhance user
              experience, and ensure compliance with industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our FinTech Web App Development</h2>
        <ul>
          <li>
            <strong>Security:</strong> We prioritize data security, ensuring your financial web apps comply with the
            latest security standards and regulations.
          </li>
          <li>
            <strong>Scalability:</strong> Our apps are designed to handle increasing numbers of users and transactions
            without compromising performance.
          </li>
          <li>
            <strong>Compliance:</strong> Our solutions are built with financial industry compliance in mind, including
            data protection and anti-money laundering (AML) regulations.
          </li>
          <li>
            <strong>Seamless Integration:</strong> Our web apps integrate smoothly with various payment gateways,
            banking systems, and investment platforms.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          We provide comprehensive web app development services for the financial sector, from conceptualization to
          deployment. Our expertise spans across building secure, user-friendly platforms for banking, payments, and
          investments.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative & Design" />
            <h5>UI/UX Design</h5>
            <p>
              We design intuitive user interfaces for FinTech applications, ensuring a seamless experience for both
              users and administrators.
            </p>
          </div>

          <div className="service-item">
            <img src={social} alt="Payment Integration" />
            <h5>Payment Integration</h5>
            <p>
              Securely integrate with various payment gateways and banking APIs to enable smooth transactions within
              your platform.
            </p>
          </div>

          <div className="service-item">
            <img src={listening} alt="Investment Platforms" />
            <h5>Investment Platforms</h5>
            <p>
              Build robust web applications that facilitate easy and transparent investment tracking, trading, and
              portfolio management.
            </p>
          </div>

          <div className="service-item">
            <img src={media} alt="Banking Web Apps" />
            <h5>Banking Web Apps</h5>
            <p>
              Develop secure and scalable web applications that streamline banking services for both customers and
              financial institutions.
            </p>
          </div>

          <div className="service-item">
            <img src={engine} alt="Compliance Solutions" />
            <h5>Compliance Solutions</h5>
            <p>
              Ensure your web app meets all necessary financial regulations, including KYC, AML, and data protection
              standards.
            </p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Automation" />
            <h5>Automation Solutions</h5>
            <p>
              Automate processes such as user onboarding, transactions, and reporting to improve efficiency and reduce
              manual errors.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>Why Choose Us for FinTech Web App Development?</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Custom Development</h5>
            <p>We tailor each solution to your business needs, ensuring a perfect fit for your FinTech goals.</p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Analytics" />
            <h5>Data Analytics</h5>
            <p>
              Utilize advanced analytics to gain insights into user behavior, transaction patterns, and investment
              trends.
            </p>
          </div>

          <div className="dna-item">
            <img src={marketautomation} alt="Integration" />
            <h5>System Integration</h5>
            <p>Seamlessly integrate with external financial systems, APIs, and services to enhance functionality.</p>
          </div>

          <div className="dna-item">
            <img src={creativemaver} alt="Creative Solutions" />
            <h5>Innovative Solutions</h5>
            <p>
              Leverage cutting-edge technologies to deliver innovative FinTech solutions that keep your business ahead
              of the competition.
            </p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Future-Proof Technology</h5>
            <p>
              We use the latest technologies to build scalable and maintainable web applications, ensuring longevity in
              the rapidly evolving FinTech landscape.
            </p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>
              Our solutions are built to be reliable, ensuring uptime, performance, and security for your FinTech
              platform.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
