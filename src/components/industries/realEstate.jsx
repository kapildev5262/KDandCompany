import "./industries.css";
import { useEffect } from "react";
import realEstateImage from "../../assets/realstateBG.jpeg"; // Background image for real estate
import propertyManagement from "../../assets/PropertyManagement.avif"; // Image for property management
import marketAnalysis from "../../assets/analytics.png"; // Image for market analysis
import consulting from "../../assets/consulting.jpg"; // Image for consulting services
import investmentAdvice from "../../assets/FinancialTrends.jpg"; // Image for investment advice
import trendsImage from "../../assets/RealEstateTrends.jpg"; // Image for real estate trends
import { Link, useLocation } from "react-router-dom";

export default function RealEstateOfIndustries() {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="real-estate-industries-page">
      {/* Real Estate Section */}
      <section className="real-estate-section">
        <div className="background1" style={{ backgroundImage: `url(${realEstateImage})` }}>
          <div className="heading1">
            <h1>Real Estate</h1>
            <p style={{ color: "white" }}>
              The Real Estate sector focuses on providing comprehensive services for property management, market
              analysis, and investment strategies. We strive to enhance your real estate experience through expert
              insights and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <h2>Overview</h2>
        <p>
          Real estate plays a vital role in economic development. Our services aim to connect buyers and sellers while
          providing valuable market insights and investment opportunities.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Comprehensive Market Insights:</strong> In-depth analysis to help you make informed decisions.
          </li>
          <li>
            <strong>Expert Property Management:</strong> Professional services to maintain and maximize property value.
          </li>
          <li>
            <strong>Investment Strategies:</strong> Tailored advice to optimize your real estate investments.
          </li>
          <li>
            <strong>Consulting Services:</strong> Personalized guidance for navigating the real estate market.
          </li>
        </ul>
      </section>

      {/* Services Offered Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={propertyManagement} alt="Property Management" />
            <h5>Property Management</h5>
            <p>
              Efficient management of residential and commercial properties to ensure high occupancy and satisfaction.
            </p>
          </div>
          <div className="service-item">
            <img src={marketAnalysis} alt="Market Analysis" />
            <h5>Market Analysis</h5>
            <p>Comprehensive analysis of market trends to help you understand the real estate landscape.</p>
          </div>
          <div className="service-item">
            <img src={consulting} alt="Consulting Services" />
            <h5>Consulting Services</h5>
            <p>Expert consulting for buyers, sellers, and investors to make informed decisions.</p>
          </div>
          <div className="service-item">
            <img src={investmentAdvice} alt="Investment Advice" />
            <h5>Investment Advice</h5>
            <p>Strategies and insights to help you maximize your real estate investment returns.</p>
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="trends-section">
        <h2>Industry Trends</h2>
        <div className="trends-content">
          <img src={trendsImage} alt="Industry Trends" className="industriesTrends" />
          <p>
            The real estate industry is evolving with trends such as sustainable building practices, digital
            transformations, and a shift towards urban living. Staying updated with these trends is crucial for
            successful investments.
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
