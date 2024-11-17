import "../services.css";
import { useEffect } from "react";
import aiHeaderImage from "../../../assets/AI.jpg"; // Update the image for AI
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

export default function AI() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="ai-page">
      {/* AI Development Section */}
      <section className="ai-section">
        <div className="background1" style={{ backgroundImage: `url(${aiHeaderImage})` }}>
          <div className="heading1">
            <h1>AI Development</h1>
            <p style={{ color: "white" }}>
              Artificial Intelligence (AI) leverages data-driven insights to enhance automation, decision-making, and
              user experiences. Our AI services help businesses innovate through predictive analytics, natural language
              processing, and machine learning.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of AI</h2>
        <ul>
          <li>
            <strong>Automation:</strong> AI automates repetitive tasks, improving efficiency.
          </li>
          <li>
            <strong>Predictive Analytics:</strong> AI models can forecast trends and optimize business decisions.
          </li>
          <li>
            <strong>Natural Language Processing:</strong> Enable machines to understand and respond to human language.
          </li>
          <li>
            <strong>Data-driven Insights:</strong> AI analyzes vast data sets to uncover valuable patterns.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our AI services are tailored to fit your business needs, ranging from automation solutions to advanced data
          analytics. We provide customized AI development for real-world applications.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our AI Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={creative} alt="AI for Creative Design" />
            <h5>Creative AI</h5>
            <p>
              Leverage AI to enhance creative processes, generating design solutions that resonate with your audience.
            </p>
          </div>

          <div className="service-item">
            <img src={social} alt="AI for Social Media" />
            <h5>Social Media AI</h5>
            <p>Use AI-driven social media strategies to boost engagement and improve brand perception.</p>
          </div>

          <div className="service-item">
            <img src={listening} alt="AI for Social Listening" />
            <h5>AI-Driven Social Listening</h5>
            <p>
              AI tools help monitor customer sentiment, providing actionable insights to enhance your brand's online
              presence.
            </p>
          </div>

          <div className="service-item">
            <img src={media} alt="AI for Media Planning" />
            <h5>AI in Media Planning</h5>
            <p>AI-driven media planning enhances ad placements, improving ROI by targeting the right audiences.</p>
          </div>

          <div className="service-item">
            <img src={engine} alt="AI for SEO" />
            <h5>AI-Powered SEO</h5>
            <p>
              Implement AI tools to optimize your website's search engine visibility through smarter SEO strategies.
            </p>
          </div>

          <div className="service-item">
            <img src={automation} alt="AI for Marketing Automation" />
            <h5>AI in Marketing Automation</h5>
            <p>
              Streamline your marketing campaigns with AI-powered automation, ensuring efficiency and personalized
              engagement.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our AI Services Section */}
      <section className="dna-section">
        <h2>DNA of Our AI Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="AI Delivery Model" />
            <h5>AI Delivery Model</h5>
            <p>
              Our tailored AI delivery models ensure the highest level of service quality and support for your business
              needs.
            </p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="AI for Analytics" />
            <h5>AI in Analytics</h5>
            <p>AI-driven analytics offers precise, real-time data insights to drive smarter decision-making.</p>
          </div>

          <div className="dna-item">
            <img src={marketautomation} alt="AI for Marketing Automation" />
            <h5>AI in Marketing Automation</h5>
            <p>AI automates marketing tasks, helping you achieve better outcomes with less manual effort.</p>
          </div>

          <div className="dna-item">
            <img src={creativemaver} alt="Creative AI Solutions" />
            <h5>Creative AI Solutions</h5>
            <p>Our AI solutions elevate your brand by providing user-friendly, innovative designs and experiences.</p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="AI Technology" />
            <h5>Advanced AI Technology</h5>
            <p>We use the latest AI technologies to help your business stay ahead in innovation and competitiveness.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="AI Reliability" />
            <h5>Reliability</h5>
            <p>
              Our AI services are designed with reliability in mind, ensuring consistent, high-quality performance
              across applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
