import "../services.css";
import { useEffect } from "react";
import cmsImage from "../../../assets/CM2.jpeg"; // Replace with relevant CMS image
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

export default function CMSPage() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="cms-page">
      {/* CMS Section */}
      <section className="cms-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${cmsImage})` }}
        >
          <div className="heading1">
            <h1>Content Management (CMS, blogs, news sites)</h1>
            <p style={{ color: "white" }}>
              Our CMS solutions allow you to easily manage and publish content
              across your blogs, news sites, and other digital platforms. We
              provide tools for seamless content creation, management, and
              delivery, tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our CMS Services</h2>
        <ul>
          <li>
            <strong>Ease of Use:</strong> User-friendly interfaces for managing
            content without technical expertise.
          </li>
          <li>
            <strong>Customization:</strong> Flexible designs and structures
            tailored to your brand.
          </li>
          <li>
            <strong>SEO-Friendly:</strong> Integrated tools to improve your
            website's search engine visibility.
          </li>
          <li>
            <strong>Scalability:</strong> Grow your content with ease, whether
            you manage a small blog or a large-scale news site.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our CMS services are designed to simplify content creation and
          management, allowing you to focus on delivering engaging content to
          your audience. From design to implementation, we offer comprehensive
          solutions for your digital presence.
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
              We combine creativity and functionality to build CMS platforms
              that offer both visual appeal and ease of use.
            </p>
          </div>

          <div className="service-item">
            <img src={social} alt="Social Media Marketing" />
            <h5>Social Media Integration</h5>
            <p>
              Seamless integration with social media platforms for easy sharing
              and content distribution.
            </p>
          </div>

          <div className="service-item">
            <img src={listening} alt="Social Listening" />
            <h5>Content Analytics</h5>
            <p>
              Track content performance and audience engagement through detailed
              analytics and insights.
            </p>
          </div>

          <div className="service-item">
            <img src={media} alt="Media Planning and Buying" />
            <h5>Media Planning and Management</h5>
            <p>
              Plan and manage your content strategy with a clear focus on your
              audience and goals.
            </p>
          </div>

          <div className="service-item">
            <img src={engine} alt="Search Engine Optimization" />
            <h5>Search Engine Optimization</h5>
            <p>
              Optimize your content for search engines to improve visibility and
              reach a wider audience.
            </p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>
              Automate your content distribution and marketing campaigns for
              efficient audience engagement.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our CMS Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>
              Tailored CMS solutions designed to deliver engaging content across
              multiple platforms.
            </p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Analytics" />
            <h5>Analytics</h5>
            <p>
              Use comprehensive data analytics to improve your content strategy
              and audience targeting.
            </p>
          </div>

          <div className="dna-item">
            <img src={marketautomation} alt="Marketing Automation" />
            <h5>Marketing Automation</h5>
            <p>
              Automate your content marketing for increased efficiency and
              better results.
            </p>
          </div>

          <div className="dna-item">
            <img src={creativemaver} alt="Creative Mavericks" />
            <h5>Creative Mavericks</h5>
            <p>
              Our expert designers ensure that your content management system is
              both functional and visually compelling.
            </p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Technology</h5>
            <p>
              We leverage the latest technology to build scalable and secure CMS
              platforms.
            </p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>
              Robust and reliable CMS solutions that ensure your content is
              always available and secure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}