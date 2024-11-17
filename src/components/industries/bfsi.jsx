import "./industries.css";
import { useEffect } from "react";
import bfsiImage from "../../assets/bfsiBG.webp"; // Background image for BFSI
import consultingImage from "../../assets/consulting.jpg"; // Image for consulting services
import digitalBankingImage from "../../assets/banking.avif"; // Image for digital banking solutions
import riskManagementImage from "../../assets/risk-manage.avif"; // Image for risk management services
import insuranceSolutionsImage from "../../assets/Insurance.jpg"; // Image for insurance solutions
import trendsImage from "../../assets/strategy11.avif"; // Placeholder for BFSI trends image
import { Link, useLocation } from "react-router-dom";

export default function BFSIOfIndustries() {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="bfsi-industries-page">
      {/* BFSI Section */}
      <section className="bfsi-section">
        <div className="background1" style={{ backgroundImage: `url(${bfsiImage})` }}>
          <div className="heading1">
            <h1>BFSI Sector</h1>
            <p style={{ color: "white" }}>
              The BFSI sector encompasses a wide range of financial services and products, focusing on delivering
              customer-centric solutions through innovative technology and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <h2>Overview</h2>
        <p>
          The BFSI sector is vital for economic growth and stability. By leveraging advanced technologies and strategic
          frameworks, we aim to provide unparalleled services that meet the evolving needs of customers and businesses.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Customized Financial Solutions:</strong> Tailored services to address specific client needs.
          </li>
          <li>
            <strong>Digital Transformation:</strong> Enhancing customer experience through innovative digital platforms.
          </li>
          <li>
            <strong>Risk Management Expertise:</strong> Comprehensive strategies to mitigate financial risks.
          </li>
          <li>
            <strong>Regulatory Compliance:</strong> Ensuring all operations adhere to financial regulations and
            standards.
          </li>
        </ul>
      </section>

      {/* Services Offered Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={consultingImage} alt="Consulting Services" />
            <h5>Consulting Services</h5>
            <p>Providing expert advice on financial strategies and market opportunities.</p>
          </div>
          <div className="service-item">
            <img src={digitalBankingImage} alt="Digital Banking Solutions" />
            <h5>Digital Banking Solutions</h5>
            <p>Innovative digital platforms for seamless banking experiences.</p>
          </div>
          <div className="service-item">
            <img src={riskManagementImage} alt="Risk Management" />
            <h5>Risk Management</h5>
            <p>Assessing and mitigating risks to protect assets and investments.</p>
          </div>
          <div className="service-item">
            <img src={insuranceSolutionsImage} alt="Insurance Solutions" />
            <h5>Insurance Solutions</h5>
            <p>Comprehensive insurance products tailored to individual and business needs.</p>
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="trends-section">
        <h2>Industry Trends</h2>
        <div className="trends-content">
          <img src={trendsImage} alt="BFSI Trends" className="industriesTrends" />
          <p>
            The BFSI sector is rapidly evolving, driven by technological advancements such as AI, blockchain, and data
            analytics. Current trends include a focus on customer-centric services, regulatory changes, and digital
            transformations to enhance operational efficiency.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2>Contact Us</h2>
        <p>If you are interested in our BFSI services or have any questions, please reach out to us!</p>
        <Link to={"/contact/"}>
          <button className="btn-primary">Get In Touch</button>
        </Link>
      </section>
    </div>
  );
}
