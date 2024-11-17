import "../services.css";
import { useEffect } from "react";
import enterpriseBg from "../../../assets/ESS.jpg"; // Background image for Enterprise Solutions
import erp from "../../../assets/ERP.jpg";
import crm from "../../../assets/crm1.avif";
import hrms from "../../../assets/hr1.avif";
import dataAnalytics from "../../../assets/Performance1.avif";
import automation from "../../../assets/ml-automation.avif";
import integration from "../../../assets/sales-integration.avif";
import deliveryModel from "../../../assets/deliverymodel.png";
import insights from "../../../assets/insights.avif";
import innovation from "../../../assets/innovation.avif";
import security from "../../../assets/cloud-security.avif";
import support from "../../../assets/CustomerSupport.avif";
import scalability from "../../../assets/scalable.avif";
import { useLocation } from "react-router-dom";

export default function EnterpriseSolutions() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="enterprise-page">
      {/* Enterprise Solutions Section */}
      <section className="enterprise-section">
        <div className="background1" style={{ backgroundImage: `url(${enterpriseBg})` }}>
          <div className="heading1">
            <h1>Enterprise Software Solutions</h1>
            <p style={{ color: "white" }}>
              We deliver end-to-end enterprise software solutions that help businesses streamline operations, improve
              customer engagement, and drive growth. Our solutions are scalable, secure, and customized to meet specific
              business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Solutions</h2>
        <ul>
          <li>
            <strong>Customization:</strong> Tailored solutions designed to fit your specific business requirements.
          </li>
          <li>
            <strong>Scalability:</strong> Systems that grow with your business needs.
          </li>
          <li>
            <strong>Security:</strong> Robust security features to protect business data and operations.
          </li>
          <li>
            <strong>Integration:</strong> Seamless integration with existing systems to enhance business efficiency.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our suite of enterprise software solutions includes ERP, CRM, HRMS, and Data Analytics platforms designed to
          improve business performance. We provide comprehensive solutions, from strategy to implementation.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={erp} alt="ERP Solutions" />
            <h5>ERP Solutions</h5>
            <p>
              Integrated ERP systems that streamline business processes across departments and improve resource
              planning.
            </p>
          </div>

          <div className="service-item">
            <img src={crm} alt="CRM Solutions" />
            <h5>CRM Solutions</h5>
            <p>Customer Relationship Management solutions to enhance customer engagement and optimize sales.</p>
          </div>

          <div className="service-item">
            <img src={hrms} alt="HRMS Solutions" />
            <h5>HRMS Solutions</h5>
            <p>Advanced HRMS platforms for efficient human resource management and employee engagement.</p>
          </div>

          <div className="service-item">
            <img src={dataAnalytics} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>Comprehensive data analytics solutions to support data-driven decision-making and business insights.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Process Automation" />
            <h5>Process Automation</h5>
            <p>Automate repetitive tasks and enhance operational efficiency with our automation solutions.</p>
          </div>

          <div className="service-item">
            <img src={integration} alt="System Integration" />
            <h5>System Integration</h5>
            <p>Smooth and seamless integration services that connect multiple enterprise applications.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>Core Aspects of Our Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={deliveryModel} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>Customized delivery models to ensure our solutions meet your timeline and quality standards.</p>
          </div>

          <div className="dna-item">
            <img src={insights} alt="Business Insights" />
            <h5>Business Insights</h5>
            <p>Analytics and insights to drive data-based decision-making for business growth.</p>
          </div>

          <div className="dna-item">
            <img src={innovation} alt="Innovation" />
            <h5>Innovation</h5>
            <p>Cutting-edge solutions that leverage the latest technologies for maximum impact.</p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Security" />
            <h5>Security</h5>
            <p>Robust security protocols to protect your data and ensure business continuity.</p>
          </div>

          <div className="dna-item">
            <img src={support} alt="Customer Support" />
            <h5>Customer Support</h5>
            <p>24/7 support to ensure your enterprise software solutions run smoothly.</p>
          </div>

          <div className="dna-item">
            <img src={scalability} alt="Scalability" />
            <h5>Scalability</h5>
            <p>Solutions designed to scale with your business growth.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
