import "../services.css";
import { useEffect } from "react";
import blockchain from "../../../assets/salesforce.jpg"; // Salesforce image import
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

export default function Salesforce() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="salesforce-page">
      {/* Salesforce Section */}
      <section className="blockchain-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${blockchain})` }}
        >
          <div className="heading1">
            <h1>Salesforce Development</h1>
            <p style={{ color: "white" }}>
              Blockchain is a distributed ledger technology that ensures secure,
              transparent, and immutable transactions. It utilizes cryptography
              to maintain data integrity and decentralization, making it highly
              secure and reliable.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Salesforce</h2>
        <ul>
          <li>
            <strong>Customization:</strong> Tailor Salesforce to fit your unique
            business needs with advanced customization options.
          </li>
          <li>
            <strong>Automation:</strong> Automate your workflows and processes
            to improve efficiency and reduce manual tasks.
          </li>
          <li>
            <strong>Analytics:</strong> Gain insights into your business with
            powerful, data-driven analytics and reporting.
          </li>
          <li>
            <strong>Integration:</strong> Seamlessly integrate Salesforce with
            other platforms and systems for a unified experience.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          We provide Salesforce development services, including customization,
          integration, and automation solutions to help businesses achieve their
          goals and maximize the potential of their CRM platform.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative & Design" />
            <h5>Creative & Design</h5>
            <p>
              Develop custom Salesforce solutions that combine creativity with
              functionality to enhance user experience.
            </p>
          </div>

          <div className="service-item">
            <img src={social} alt="Social Media Marketing" />
            <h5>Social Media Marketing</h5>
            <p>
              Leverage Salesforce’s social media tools to improve your brand’s
              online presence and engagement.
            </p>
          </div>

          <div className="service-item">
            <img src={listening} alt="Social Listening" />
            <h5>Social Listening</h5>
            <p>
              Use Salesforce’s capabilities to monitor and analyze customer
              sentiment across various channels.
            </p>
          </div>

          <div className="service-item">
            <img src={media} alt="Media Planning and Buying" />
            <h5>Media Planning and Buying</h5>
            <p>
              Improve media planning and ad buying efficiency using Salesforce’s
              integrated tools.
            </p>
          </div>

          <div className="service-item">
            <img src={engine} alt="Search Engine Optimization" />
            <h5>Search Engine Optimization</h5>
            <p>
              Enhance your website’s visibility with Salesforce’s SEO solutions
              and tools.
            </p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>
              Automate and optimize your marketing efforts with Salesforce’s
              robust marketing automation features.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Salesforce Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>
              Our tailored delivery models ensure that your Salesforce solutions
              are implemented effectively and efficiently.
            </p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Analytics" />
            <h5>Analytics</h5>
            <p>
              Use Salesforce analytics to track performance and make data-driven
              decisions for your business.
            </p>
          </div>

          <div className="dna-item">
            <img src={marketautomation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>
              Automate marketing tasks and enhance your campaigns with
              Salesforce’s marketing automation tools.
            </p>
          </div>

          <div className="dna-item">
            <img src={creativemaver} alt="Creative Mavericks" />
            <h5>Creative Mavericks</h5>
            <p>
              Our team offers creative design services that help you deliver
              engaging Salesforce solutions.
            </p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Technology</h5>
            <p>
              Leverage cutting-edge technology with Salesforce to drive
              innovation and efficiency in your business.
            </p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>
              Ensure reliability and transparency in your business operations
              with Salesforce’s robust tools and services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
