import "../services.css";
import { useEffect } from "react";
import solutionArch from "../../../assets/SolutionA.jpeg"; // Main image for Solution Architecture
import consulting from "../../../assets/ux-research.avif";
import design from "../../../assets/ui-ux.avif";
import deployment from "../../../assets/mobile-app-deployment.avif";
import optimization from "../../../assets/optimization2.avif";
import monitoring from "../../../assets/monitor-logging.avif";
import scalability from "../../../assets/scalable.avif";
import { useLocation } from "react-router-dom";

export default function SolutionArchitecture() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="solution-architecture-page">
      {/* Solution Architecture Section */}
      <section className="solution-architecture-section">
        <div className="background1" style={{ backgroundImage: `url(${solutionArch})` }}>
          <div className="heading1">
            <h1>Solution Architecture Services</h1>
            <p style={{ color: "white" }}>
              Our Solution Architecture services help transform your business vision into an effective, scalable, and
              secure technical solution. From initial consultation to implementation, we ensure that your solutions are
              built for efficiency and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Solution Architecture</h2>
        <ul>
          <li>
            <strong>Scalability:</strong> Designing solutions that grow with your business and handle increased demand.
          </li>
          <li>
            <strong>Security:</strong> Implementing robust security practices to protect data and maintain integrity.
          </li>
          <li>
            <strong>Efficiency:</strong> Optimizing performance to enhance user experience and streamline processes.
          </li>
          <li>
            <strong>Innovation:</strong> Leveraging the latest technology advancements to provide forward-looking
            solutions.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our team specializes in translating complex business needs into technical solutions. With a focus on
          performance, scalability, and adaptability, our solution architecture services ensure seamless integration
          across your systems and teams.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={consulting} alt="Consulting" />
            <h5>Consulting</h5>
            <p>Strategic guidance on solution design and development to ensure alignment with business objectives.</p>
          </div>

          <div className="service-item">
            <img src={design} alt="System Design" />
            <h5>System Design</h5>
            <p>Creating architectures tailored to your requirements, with a focus on modularity and integration.</p>
          </div>

          <div className="service-item">
            <img src={deployment} alt="Deployment" />
            <h5>Deployment</h5>
            <p>Comprehensive deployment services, ensuring that your solutions are operational and fully integrated.</p>
          </div>

          <div className="service-item">
            <img src={optimization} alt="Optimization" />
            <h5>Optimization</h5>
            <p>Analyzing and enhancing existing solutions to improve performance and cost-effectiveness.</p>
          </div>

          <div className="service-item">
            <img src={monitoring} alt="Monitoring" />
            <h5>Monitoring</h5>
            <p>Providing ongoing monitoring and support to maintain solution performance and reliability.</p>
          </div>

          <div className="service-item">
            <img src={scalability} alt="Scalability" />
            <h5>Scalability</h5>
            <p>
              Ensuring that your systems can grow in tandem with your business needs without compromising performance.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Solution Architecture Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={consulting} alt="Consulting" />
            <h5>Consulting Expertise</h5>
            <p>Experienced consultants guide you through each step, ensuring strategic alignment.</p>
          </div>

          <div className="dna-item">
            <img src={design} alt="Innovative Design" />
            <h5>Innovative Design</h5>
            <p>Utilizing modern design practices for adaptable and future-ready architectures.</p>
          </div>

          <div className="dna-item">
            <img src={optimization} alt="Continuous Optimization" />
            <h5>Continuous Optimization</h5>
            <p>Regular assessments to identify and apply improvements as your business evolves.</p>
          </div>

          <div className="dna-item">
            <img src={monitoring} alt="Reliable Monitoring" />
            <h5>Reliable Monitoring</h5>
            <p>Proactive monitoring services to address issues and ensure uninterrupted service.</p>
          </div>

          <div className="dna-item">
            <img src={scalability} alt="Built for Scale" />
            <h5>Built for Scale</h5>
            <p>Architectures designed to scale efficiently, accommodating growth without disrupting operations.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
