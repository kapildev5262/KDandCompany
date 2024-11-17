import "../services.css";
import { useEffect } from "react";
import socialNetworking from "../../../assets/Social-Networking.jpeg"; // Updated image for Social Networking
import creative from "../../../assets/creative.png";
import social from "../../../assets/MediaPlanning.png";
import listening from "../../../assets/SocialListening.png";
import media from "../../../assets/MediaPlanning.png";
import automation from "../../../assets/marketingautomation.png";
import delivery from "../../../assets/deliverymodel.png";
import analytic from "../../../assets/analytics.png";
import community from "../../../assets/community.avif"; // New image for community management
import engagement from "../../../assets/MobDesign.avif"; // New image for user engagement
import technology from "../../../assets/ml-automation3.avif";
import reliability from "../../../assets/reliable1.avif";
import { useLocation } from "react-router-dom";

export default function SocialNetworking() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="social-networking-page">
      {/* Social Networking Section */}
      <section className="social-networking-section">
        <div className="background1" style={{ backgroundImage: `url(${socialNetworking})` }}>
          <div className="heading1">
            <h1>Social Networking (Social Media Platforms & Forums)</h1>
            <p style={{ color: "white" }}>
              Our social networking services are designed to create engaging, interactive, and vibrant communities on
              various social media platforms and forums. Enhance your brand's online presence and foster meaningful
              connections with your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Social Networking Services</h2>
        <ul>
          <li>
            <strong>Community Building:</strong> Establish thriving online communities with custom social media
            strategies.
          </li>
          <li>
            <strong>User Engagement:</strong> Boost engagement with creative campaigns and interactive content.
          </li>
          <li>
            <strong>Brand Awareness:</strong> Elevate your brand's visibility across platforms with targeted strategies.
          </li>
          <li>
            <strong>Influencer Collaboration:</strong> Partner with influencers to expand your reach and authenticity.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          From social media strategy development to campaign execution, we offer end-to-end solutions to help you
          connect with your audience, promote your brand, and grow your community. Our services include platform
          management, content creation, and data-driven social media strategies.
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
              Craft visually appealing and creative content to keep your social media profiles engaging and
              professional.
            </p>
          </div>

          <div className="service-item">
            <img src={social} alt="Social Media Management" />
            <h5>Social Media Management</h5>
            <p>Manage your social media platforms efficiently and grow your audience with tailored strategies.</p>
          </div>

          <div className="service-item">
            <img src={listening} alt="Social Listening" />
            <h5>Social Listening</h5>
            <p>
              Monitor online conversations and trends to understand user sentiment and improve engagement strategies.
            </p>
          </div>

          <div className="service-item">
            <img src={community} alt="Community Management" />
            <h5>Community Management</h5>
            <p>Build and manage vibrant online communities that foster interaction and brand loyalty.</p>
          </div>

          <div className="service-item">
            <img src={engagement} alt="User Engagement Campaigns" />
            <h5>User Engagement Campaigns</h5>
            <p>Create targeted campaigns to boost user interaction, shares, and conversations across platforms.</p>
          </div>

          <div className="service-item">
            <img src={media} alt="Influencer Marketing" />
            <h5>Influencer Marketing</h5>
            <p>Collaborate with influencers to amplify your brand’s message and drive authentic engagement.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Social Networking Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Customized Delivery Model" />
            <h5>Customized Delivery Model</h5>
            <p>Tailor-made social media strategies that align with your brand's goals and objectives.</p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Analytics & Reporting" />
            <h5>Analytics & Reporting</h5>
            <p>Detailed performance analytics to help optimize your social media campaigns for maximum ROI.</p>
          </div>

          <div className="dna-item">
            <img src={automation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>Automate your social media postings and campaigns for seamless execution and greater efficiency.</p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Latest Technology" />
            <h5>Latest Technology</h5>
            <p>
              Utilize the latest tools and technologies to enhance your social media presence and streamline operations.
            </p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Rely on our team for consistent performance, transparent communication, and reliable results.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
