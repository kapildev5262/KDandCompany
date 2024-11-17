import "./industries.css";
import { useEffect } from "react";
import financeBackground from "../../assets/FinancialBG.webp"; // Background image specific to Financial Services
import advisory from "../../assets/AdvisoryServices.avif";
import investment from "../../assets/FinancialCurriculum.avif";
import compliance from "../../assets/ComplianceManagement.avif";
import risk from "../../assets/risk-manage.avif";
import trendsImage from "../../assets/FinancialSuccess.avif"; // Placeholder for trends image
import { Link, useLocation } from "react-router-dom";

export default function FinancialServices() {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="financial-services-page">
      {/* Financial Services Section */}
      <section className="financial-section">
        <div className="background1" style={{ backgroundImage: `url(${financeBackground})` }}>
          <div className="heading1">
            <h1>Financial Services</h1>
            <p style={{ color: "white" }}>
              Our Financial Services division provides strategic insights and comprehensive solutions to support the
              evolving needs of businesses and individuals, ensuring a pathway to financial stability and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <h2>Overview</h2>
        <p>
          The financial industry is the backbone of economic development, offering essential services such as
          investment, advisory, and risk management to help clients secure their future and expand their wealth.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Personalized Advisory:</strong> Tailored financial advice for individuals and businesses to achieve
            their financial goals.
          </li>
          <li>
            <strong>Risk Management:</strong> Proactive strategies to identify and mitigate financial risks.
          </li>
          <li>
            <strong>Regulatory Compliance:</strong> Ensuring adherence to financial regulations for trustworthy
            operations.
          </li>
          <li>
            <strong>Innovative Investment Solutions:</strong> Customized investment plans to maximize returns.
          </li>
        </ul>
      </section>

      {/* Services Offered Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={advisory} alt="Advisory Services" />
            <h5>Advisory Services</h5>
            <p>Expert advice to guide financial decision-making and business strategy.</p>
          </div>
          <div className="service-item">
            <img src={investment} alt="Investment Solutions" />
            <h5>Investment Solutions</h5>
            <p>Diversified investment options tailored to meet unique financial goals.</p>
          </div>
          <div className="service-item">
            <img src={compliance} alt="Compliance Management" />
            <h5>Compliance Management</h5>
            <p>Ensuring operations adhere to regulatory standards and ethical practices.</p>
          </div>
          <div className="service-item">
            <img src={risk} alt="Risk Assessment" />
            <h5>Risk Assessment</h5>
            <p>Identifying and managing potential financial risks for a secure future.</p>
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="trends-section">
        <h2>Industry Trends</h2>
        <div className="trends-content">
          <img src={trendsImage} alt="Industry Trends" className="industriesTrends" />
          <p>
            The financial sector is embracing digital transformation, with trends such as fintech innovation,
            data-driven insights, and sustainability-focused investments reshaping the industry landscape.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2>Contact Us</h2>
        <p>If you are interested in our services or have any questions, please reach out to us!</p>
        <Link to={"/contact/"}>
          <button className="btn-primary">Get In Touch</button>
        </Link>
      </section>
    </div>
  );
}
