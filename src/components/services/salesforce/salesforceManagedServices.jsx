import "../services.css";
import { useEffect } from "react";
import salesforceImage from "../../../assets/S_Manged.jpeg"; // Salesforce image import
import customization from "../../../assets/custom.jpg"; // Example image imports
import automation from "../../../assets/salesforce-auto.avif";
import analytics from "../../../assets/analytics.png";
import integration from "../../../assets/sales-integration.avif";
import support from "../../../assets/CustomerSupport.avif";
import strategy from "../../../assets/project-management.avif";
import { useLocation } from "react-router-dom";

export default function Salesforce() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="salesforce-page">
      {/* Salesforce Section */}
      <section className="salesforce-section">
        <div className="background1" style={{ backgroundImage: `url(${salesforceImage})` }}>
          <div className="heading1">
            <h1>Salesforce Managed Services</h1>
            <p style={{ color: "white" }}>
              Unlock the full potential of your Salesforce platform with our comprehensive managed services, tailored to
              drive your business success.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Salesforce Managed Services</h2>
        <ul>
          <li>
            <strong>Customization:</strong> Tailor Salesforce to fit your unique business needs with advanced
            customization options.
          </li>
          <li>
            <strong>Automation:</strong> Automate workflows to enhance efficiency and streamline processes.
          </li>
          <li>
            <strong>Analytics:</strong> Leverage powerful analytics for actionable insights and improved
            decision-making.
          </li>
          <li>
            <strong>Integration:</strong> Seamlessly connect Salesforce with other platforms for a unified business
            experience.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our Salesforce Managed Services encompass end-to-end support, including system administration, user training,
          and continuous optimization to ensure your CRM adapts to your evolving business needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={customization} alt="Customization Services" />
            <h5>Customization Services</h5>
            <p>Tailor Salesforce functionalities to enhance user experience and meet specific business requirements.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Workflow Automation" />
            <h5>Workflow Automation</h5>
            <p>Streamline business processes through automation, reducing manual tasks and improving productivity.</p>
          </div>

          <div className="service-item">
            <img src={analytics} alt="Business Analytics" />
            <h5>Business Analytics</h5>
            <p>
              Utilize advanced analytics tools to gather insights and drive strategic decisions for your organization.
            </p>
          </div>

          <div className="service-item">
            <img src={integration} alt="Integration Solutions" />
            <h5>Integration Solutions</h5>
            <p>
              Ensure seamless integration with third-party applications to enhance data flow and operational efficiency.
            </p>
          </div>

          <div className="service-item">
            <img src={support} alt="24/7 Support" />
            <h5>24/7 Support</h5>
            <p>
              Access round-the-clock support to address any issues and ensure smooth operation of your Salesforce
              instance.
            </p>
          </div>

          <div className="service-item">
            <img src={strategy} alt="Strategic Planning" />
            <h5>Strategic Planning</h5>
            <p>
              Develop a roadmap for Salesforce implementation and optimization, aligning it with your business
              objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="why-choose-us-section">
        <h2>Why Choose Our Salesforce Managed Services?</h2>
        <p>
          Our dedicated team of Salesforce experts ensures that your platform is fully optimized, providing you with the
          tools and insights needed to grow your business effectively.
        </p>
      </section>
    </div>
  );
}
