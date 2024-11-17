import "../services.css";
import { useEffect } from "react";
import hrAutomation from "../../../assets/HR.webp"; // HR Automation image import
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

export default function HrAutomation() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="hr-automation-page">
      {/* HR Automation Section */}
      <section className="automation-section">
        <div className="background1" style={{ backgroundImage: `url(${hrAutomation})` }}>
          <div className="heading1">
            <h1>HR Automation Services</h1>
            <p style={{ color: "white" }}>
              Our HR Automation Services streamline your HR processes, improve efficiency, and enhance employee
              engagement through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of HR Automation</h2>
        <ul>
          <li>
            <strong>Efficiency:</strong> Automate repetitive tasks to save time and reduce errors.
          </li>
          <li>
            <strong>Data Management:</strong> Centralized data for easy access and management.
          </li>
          <li>
            <strong>Employee Engagement:</strong> Tools to enhance communication and collaboration.
          </li>
          <li>
            <strong>Analytics:</strong> Insightful data analysis for better decision-making.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our HR Automation Services are designed to transform your HR function, making it more strategic and less
          transactional. We offer comprehensive solutions tailored to meet your organization's unique needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative & Design" />
            <h5>Onboarding Automation</h5>
            <p>Streamline the onboarding process for new hires, making it efficient and engaging.</p>
          </div>

          <div className="service-item">
            <img src={social} alt="Social Media Marketing" />
            <h5>Employee Self-Service Portal</h5>
            <p>Empower employees with self-service capabilities to manage their own information and requests.</p>
          </div>

          <div className="service-item">
            <img src={listening} alt="Social Listening" />
            <h5>Performance Management</h5>
            <p>Implement automated performance evaluations and feedback systems to foster growth and development.</p>
          </div>

          <div className="service-item">
            <img src={media} alt="Media Planning and Buying" />
            <h5>Time and Attendance Tracking</h5>
            <p>Automate time tracking and attendance management to improve payroll accuracy.</p>
          </div>

          <div className="service-item">
            <img src={engine} alt="Search Engine Optimization" />
            <h5>Employee Engagement Tools</h5>
            <p>Utilize automation to enhance communication and foster a positive workplace culture.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Marketing Automation" />
            <h5>HR Analytics</h5>
            <p>Leverage data analytics to gain insights into employee performance and HR metrics.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our HR Automation Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>Customized delivery models that align with your business strategy and goals.</p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Analytics" />
            <h5>Data Security</h5>
            <p>Robust security measures to protect sensitive employee information.</p>
          </div>

          <div className="dna-item">
            <img src={marketautomation} alt="Marketing Automation" />
            <h5>Integration Capabilities</h5>
            <p>Seamless integration with existing HR systems and third-party applications.</p>
          </div>

          <div className="dna-item">
            <img src={creativemaver} alt="Creative Mavericks" />
            <h5>Continuous Support</h5>
            <p>Ongoing support and training to ensure successful implementation and use of HR automation tools.</p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Innovative Solutions</h5>
            <p>Leveraging cutting-edge technology to drive HR transformation and improve outcomes.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliable Performance</h5>
            <p>Ensuring consistent and reliable HR operations through automation.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
