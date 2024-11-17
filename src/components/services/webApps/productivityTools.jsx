import "../services.css";
import { useEffect } from "react";
import productivity from "../../../assets/PT.jpeg"; // Productivity tools image
import collaboration from "../../../assets/personalization.avif";
import projectManagement from "../../../assets/project-management.avif";
import taskAutomation from "../../../assets/ml-automation.avif";
import timeTracking from "../../../assets/time-tracking.avif";
import teamCommunication from "../../../assets/community.avif";
import analytics from "../../../assets/analytics.png";
import reporting from "../../../assets/repoting.avif";
import { useLocation } from "react-router-dom";

export default function ProductivityTools() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="productivity-page">
      {/* Productivity Tools Section */}
      <section className="productivity-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${productivity})` }}
        >
          <div className="heading1">
            <h1>Productivity Tools (Collaboration & Project Management)</h1>
            <p style={{ color: "white" }}>
              Explore the best productivity tools that help teams collaborate
              efficiently, manage projects seamlessly, and automate workflows
              for increased productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Productivity Tools</h2>
        <ul>
          <li>
            <strong>Collaboration:</strong> Empower teams to work together
            seamlessly with real-time collaboration features.
          </li>
          <li>
            <strong>Project Management:</strong> Manage tasks, deadlines, and
            milestones effectively.
          </li>
          <li>
            <strong>Task Automation:</strong> Automate repetitive tasks to save
            time and increase efficiency.
          </li>
          <li>
            <strong>Analytics & Reporting:</strong> Gain insights into
            productivity with comprehensive analytics and reporting tools.
          </li>
        </ul>
      </section>

      {/* Our Tools Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our suite of productivity tools enhances teamwork, project execution,
          and process automation, helping businesses to achieve their goals
          faster and more efficiently.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={collaboration} alt="Collaboration Tools" />
            <h5>Collaboration Tools</h5>
            <p>
              Tools that enable seamless communication and collaboration across
              teams, enhancing overall productivity.
            </p>
          </div>

          <div className="service-item">
            <img src={projectManagement} alt="Project Management" />
            <h5>Project Management</h5>
            <p>
              Manage projects from start to finish with intuitive tools that
              ensure timely delivery.
            </p>
          </div>

          <div className="service-item">
            <img src={taskAutomation} alt="Task Automation" />
            <h5>Task Automation</h5>
            <p>
              Streamline your workflows by automating recurring tasks, improving
              efficiency and reducing errors.
            </p>
          </div>

          <div className="service-item">
            <img src={timeTracking} alt="Time Tracking" />
            <h5>Time Tracking</h5>
            <p>
              Keep track of how time is spent on different tasks and projects
              with robust time-tracking tools.
            </p>
          </div>

          <div className="service-item">
            <img src={teamCommunication} alt="Team Communication" />
            <h5>Team Communication</h5>
            <p>
              Ensure clear and effective communication with team members using
              integrated communication platforms.
            </p>
          </div>

          <div className="service-item">
            <img src={analytics} alt="Analytics" />
            <h5>Analytics</h5>
            <p>
              Measure team performance and project success with powerful
              analytics tools.
            </p>
          </div>

          <div className="service-item">
            <img src={reporting} alt="Reporting" />
            <h5>Reporting</h5>
            <p>
              Generate detailed reports to analyze productivity and improve
              decision-making processes.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Tools Section */}
      <section className="dna-section">
        <h2>DNA of Our Productivity Tools</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={teamCommunication} alt="Team Communication" />
            <h5>Team Communication</h5>
            <p>
              Real-time communication features to keep everyone on the same
              page, promoting a collaborative work environment.
            </p>
          </div>

          <div className="dna-item">
            <img src={projectManagement} alt="Project Planning" />
            <h5>Project Planning</h5>
            <p>
              Comprehensive project planning tools to ensure timely project
              execution.
            </p>
          </div>

          <div className="dna-item">
            <img src={taskAutomation} alt="Automation" />
            <h5>Automation</h5>
            <p>
              Automate routine tasks to free up time for more important work,
              boosting overall productivity.
            </p>
          </div>

          <div className="dna-item">
            <img src={analytics} alt="Data Analytics" />
            <h5>Data Analytics</h5>
            <p>
              Get actionable insights from your data to make better-informed
              business decisions.
            </p>
          </div>

          <div className="dna-item">
            <img src={reporting} alt="Reporting" />
            <h5>Reporting</h5>
            <p>
              Create customized reports to track performance and identify
              bottlenecks in your workflows.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}