import "../services.css";
import { useEffect } from "react";
import frameworkImage from "../../../assets/C_F2.webp"; // Custom framework image import
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

export default function CustomFramework() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="framework-page">
      {/* Custom Framework Section */}
      <section className="framework-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${frameworkImage})` }} // Update with the correct image
        >
          <div className="heading1">
            <h1>Custom Framework Development</h1>
            <p style={{ color: "white" }}>
              Our custom framework services provide tailored solutions designed to meet your specific business needs,
              enhancing efficiency and scalability through innovative technology.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Custom Framework</h2>
        <ul>
          <li>
            <strong>Flexibility:</strong> Highly adaptable frameworks that can evolve with your business requirements.
          </li>
          <li>
            <strong>Scalability:</strong> Solutions designed to grow alongside your business, ensuring long-term
            success.
          </li>
          <li>
            <strong>Integration:</strong> Seamless integration with existing systems and tools for optimized
            performance.
          </li>
          <li>
            <strong>Support:</strong> Comprehensive support and maintenance services to ensure smooth operation.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our custom framework services are focused on delivering innovative solutions that enhance your operational
          capabilities. From concept to deployment, we ensure a smooth and efficient process tailored to your specific
          needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="Creative & Design" />
            <h5>Creative & Design</h5>
            <p>Tailored design solutions that enhance the user experience while aligning with your brand identity.</p>
          </div>

          <div className="service-item">
            <img src={social} alt="Social Media Marketing" />
            <h5>Social Media Marketing</h5>
            <p>Build a robust online presence with customized social media strategies tailored for your framework.</p>
          </div>

          <div className="service-item">
            <img src={listening} alt="Social Listening" />
            <h5>Social Listening</h5>
            <p>
              Utilize advanced analytics to gain insights into customer sentiment and market trends for better
              decision-making.
            </p>
          </div>

          <div className="service-item">
            <img src={media} alt="Media Planning and Buying" />
            <h5>Media Planning and Buying</h5>
            <p>Enhance your media strategy through custom solutions that drive engagement and conversions.</p>
          </div>

          <div className="service-item">
            <img src={engine} alt="Search Engine Optimization" />
            <h5>Search Engine Optimization</h5>
            <p>Improve your online visibility with SEO strategies designed specifically for your framework.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>Automate your marketing efforts with tailored solutions that enhance efficiency and ROI.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Custom Framework Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>
              We provide customized delivery models to ensure the highest quality of service and support for your
              framework.
            </p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Leverage powerful analytics for actionable insights that inform your business strategy.</p>
          </div>

          <div className="dna-item">
            <img src={marketautomation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>Streamline your marketing processes with automation solutions tailored to your framework.</p>
          </div>

          <div className="dna-item">
            <img src={creativemaver} alt="Creative Mavericks" />
            <h5>Creative Mavericks</h5>
            <p>
              Our team of creative experts ensures your framework stands out with innovative design and user experience.
            </p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Technology</h5>
            <p>Cutting-edge technology solutions to enhance the capabilities and performance of your framework.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>We prioritize reliability, providing robust frameworks that ensure uptime and performance.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
