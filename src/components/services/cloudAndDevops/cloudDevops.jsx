import "../services.css";
import { useEffect } from "react";
import cloudDevopsImage from "../../../assets/cloud2.jpg"; // Updated image for Cloud & DevOps
import cloudAutomation from "../../../assets/Automation-Self-service.avif";
import cloudMonitoring from "../../../assets/Cloud&DevOps.avif";
import ciCd from "../../../assets/CI_CD.avif";
import cloudMigration from "../../../assets/Cloud-Migration.avif";
import cloudSecurity from "../../../assets/Security-Integration-DevSecOps.avif";
import cloudInfrastructure from "../../../assets/Cloud-Infrastructure-Management.avif";
import delivery from "../../../assets/Unified-Cloud-Security-Framework.avif";
import analytic from "../../../assets/UnifiedDevOpsAutomationHub.avif";
import marketautomation from "../../../assets/marketingautomation.avif";
import creativemaver from "../../../assets/creative.png";
import technology from "../../../assets/insurance.png";
import reliability from "../../../assets/prediction.png";
import { useLocation } from "react-router-dom";

export default function CloudDevops() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="cloud-devops-page">
      {/* Cloud & DevOps Section */}
      <section className="cloud-devops-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${cloudDevopsImage})` }}
        >
          <div className="heading1">
            <h1>Cloud & DevOps Services</h1>
            <p style={{ color: "white" }}>
              Our Cloud and DevOps services help businesses achieve agility,
              scalability, and seamless collaboration. We leverage cloud
              infrastructure, automation, and continuous integration to deliver
              robust, secure, and efficient solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Cloud & DevOps</h2>
        <ul>
          <li>
            <strong>Automation:</strong> Automated infrastructure management and
            deployment processes.
          </li>
          <li>
            <strong>Scalability:</strong> Easily scale your cloud resources
            based on business demands.
          </li>
          <li>
            <strong>Security:</strong> Implement industry-leading cloud security
            measures for robust protection.
          </li>
          <li>
            <strong>Continuous Delivery:</strong> Achieve fast and reliable
            application delivery through CI/CD pipelines.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our Cloud & DevOps services are designed to transform your business by
          enhancing operational efficiency, accelerating development cycles, and
          ensuring security across your infrastructure.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Cloud & DevOps Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={cloudAutomation} alt="Cloud Automation" />
            <h5>Cloud Automation</h5>
            <p>
              Automate your cloud infrastructure provisioning and application
              deployments for faster, more reliable results.
            </p>
          </div>

          <div className="service-item">
            <img src={cloudMonitoring} alt="Cloud Monitoring" />
            <h5>Cloud Monitoring</h5>
            <p>
              Real-time monitoring and alerting to ensure your cloud services
              are always available and performing optimally.
            </p>
          </div>

          <div className="service-item">
            <img src={ciCd} alt="CI/CD Pipelines" />
            <h5>CI/CD Pipelines</h5>
            <p>
              Continuous integration and continuous delivery pipelines for
              seamless code deployments and updates.
            </p>
          </div>

          <div className="service-item">
            <img src={cloudMigration} alt="Cloud Migration" />
            <h5>Cloud Migration</h5>
            <p>
              Efficiently migrate your on-premise infrastructure and
              applications to the cloud with minimal disruption.
            </p>
          </div>

          <div className="service-item">
            <img src={cloudSecurity} alt="Cloud Security" />
            <h5>Cloud Security</h5>
            <p>
              Implement multi-layered security strategies to protect your cloud
              infrastructure and data from cyber threats.
            </p>
          </div>

          <div className="service-item">
            <img src={cloudInfrastructure} alt="Cloud Infrastructure" />
            <h5>Cloud Infrastructure Management</h5>
            <p>
              Manage and optimize your cloud infrastructure for performance,
              cost-efficiency, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Cloud & DevOps Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Cloud & DevOps Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={delivery} alt="Delivery Model" />
            <h5>Delivery Model</h5>
            <p>
              We provide tailored delivery models for Cloud & DevOps services,
              ensuring flexibility and scalability to meet business needs.
            </p>
          </div>

          <div className="dna-item">
            <img src={analytic} alt="Cloud Analytics" />
            <h5>Cloud Analytics</h5>
            <p>
              Leverage data-driven insights using advanced cloud analytics to
              optimize your operations and decision-making processes.
            </p>
          </div>

          <div className="dna-item">
            <img src={marketautomation} alt="Automation" />
            <h5>Infrastructure Automation</h5>
            <p>
              Automate infrastructure provisioning and application deployment to
              reduce manual errors and speed up operations.
            </p>
          </div>

          <div className="dna-item">
            <img src={creativemaver} alt="Innovative Solutions" />
            <h5>Innovative Solutions</h5>
            <p>
              We deliver cutting-edge solutions that push the boundaries of
              cloud and DevOps technologies to enhance business agility.
            </p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Advanced Technology" />
            <h5>Advanced Technology</h5>
            <p>
              We integrate the latest cloud and DevOps technologies to ensure
              your business stays ahead of the curve.
            </p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>
              Our solutions are designed for reliability with continuous
              monitoring, high availability, and disaster recovery strategies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
