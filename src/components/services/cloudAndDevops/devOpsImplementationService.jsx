import "../services.css";
import { useEffect } from "react";
import devopsImage from "../../../assets/Devops_implement_service.avif"; // Replace with your DevOps image
import agile from "../../../assets/cloud-agile.jpg"; // Add relevant images for DevOps services
import ciCd from "../../../assets/CI_CD.avif";
import monitoring from "../../../assets/Cloud-monitering.avif";
import containerization from "../../../assets/cloud_containerization.avif";
import security from "../../../assets/cloud-security.avif";
import automation from "../../../assets/cloud1.jpg";
import cloud from "../../../assets/cloud-img2.avif";
import { useLocation } from "react-router-dom";

export default function CloudDevops() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="devops-page">
      {/* DevOps Section */}
      <section className="devops-section">
        <div className="background1" style={{ backgroundImage: `url(${devopsImage})` }}>
          <div className="heading1">
            <h1>DevOps Implementation Services</h1>
            <p style={{ color: "white" }}>
              Our DevOps services aim to streamline your development and operations processes, enhancing collaboration,
              automation, and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of DevOps</h2>
        <ul>
          <li>
            <strong>Continuous Integration:</strong> Automate code integration and testing to ensure software quality.
          </li>
          <li>
            <strong>Continuous Deployment:</strong> Automatically deploy code changes to production, minimizing
            downtime.
          </li>
          <li>
            <strong>Collaboration:</strong> Foster communication and collaboration between development and operations
            teams.
          </li>
          <li>
            <strong>Monitoring:</strong> Implement real-time monitoring for applications to improve performance and
            reliability.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our DevOps services provide a comprehensive approach to improve your software development lifecycle, ensuring
          faster delivery and higher quality through automation and best practices.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={agile} alt="Agile Development" />
            <h5>Agile Development</h5>
            <p>Implement Agile methodologies to enhance project management and team collaboration.</p>
          </div>

          <div className="service-item">
            <img src={ciCd} alt="CI/CD Pipelines" />
            <h5>CI/CD Pipelines</h5>
            <p>Establish Continuous Integration and Continuous Deployment pipelines for rapid delivery.</p>
          </div>

          <div className="service-item">
            <img src={monitoring} alt="Monitoring and Logging" />
            <h5>Monitoring and Logging</h5>
            <p>Utilize monitoring tools to track application performance and detect issues in real-time.</p>
          </div>

          <div className="service-item">
            <img src={containerization} alt="Containerization" />
            <h5>Containerization</h5>
            <p>Leverage Docker and Kubernetes for efficient application deployment and scalability.</p>
          </div>

          <div className="service-item">
            <img src={security} alt="Security" />
            <h5>DevSecOps</h5>
            <p>Integrate security practices into the DevOps process to protect applications and data.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Automation" />
            <h5>Automation</h5>
            <p>Automate repetitive tasks to reduce manual intervention and increase productivity.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our DevOps Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={cloud} alt="Cloud Services" />
            <h5>Cloud Services</h5>
            <p>Implement cloud solutions to enhance scalability and flexibility in your infrastructure.</p>
          </div>

          <div className="dna-item">
            <img src={monitoring} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Gain insights through analytics to drive continuous improvement in processes.</p>
          </div>

          <div className="dna-item">
            <img src={automation} alt="Automation" />
            <h5>Automation</h5>
            <p>Automate and optimize your operations for increased efficiency and cost savings.</p>
          </div>

          <div className="dna-item">
            <img src={agile} alt="Agile Framework" />
            <h5>Agile Framework</h5>
            <p>Adopt Agile practices for enhanced responsiveness to change and faster delivery.</p>
          </div>

          <div className="dna-item">
            <img src={security} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Ensure reliable and consistent operations through robust DevOps practices.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
