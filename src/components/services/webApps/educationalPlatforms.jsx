import "../services.css";
import { useEffect } from "react";
import elearning from "../../../assets/EP.jpeg"; // e-learning image import
import course from "../../../assets/online-course.jpg";
import interaction from "../../../assets/online-intrection.jpg";
import community from "../../../assets/community.avif";
import analytics from "../../../assets/analytics.png";
import mobileLearning from "../../../assets/mobile-learning.avif";
import ai from "../../../assets/Ai.png";
import contentManagement from "../../../assets/content-managemant.jpg";
import gamification from "../../../assets/gamification.jpg";
import { useLocation } from "react-router-dom";

export default function EducationalPlatforms() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="educational-page">
      {/* Educational Platforms Section */}
      <section className="educational-section">
        <div className="background1" style={{ backgroundImage: `url(${elearning})` }}>
          <div className="heading1">
            <h1>Educational Platforms (e-learning, online courses)</h1>
            <p style={{ color: "white" }}>
              We specialize in building comprehensive e-learning platforms that empower educational institutions and
              businesses to deliver online courses, interactive learning, and personalized experiences. Our solutions
              are designed to enhance engagement, improve accessibility, and streamline the learning process.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Educational Platforms</h2>
        <ul>
          <li>
            <strong>Interactive Learning:</strong> Engage learners through interactive multimedia content, quizzes, and
            discussions.
          </li>
          <li>
            <strong>Mobile-Friendly:</strong> Access learning materials anytime, anywhere on mobile devices.
          </li>
          <li>
            <strong>AI-Powered Personalization:</strong> Tailor courses and materials based on user progress and
            preferences.
          </li>
          <li>
            <strong>Analytics and Reporting:</strong> Track learner progress and performance with real-time analytics.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          We offer a range of educational platform services, including custom e-learning development, content
          management, gamification features, and seamless integrations with other educational tools. Whether you need a
          platform for corporate training or online schools, we provide scalable, flexible, and user-friendly solutions.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={course} alt="Online Course Creation" />
            <h5>Online Course Creation</h5>
            <p>Build and deliver engaging courses with multimedia support, quizzes, and certificate generation.</p>
          </div>

          <div className="service-item">
            <img src={interaction} alt="Interactive Learning" />
            <h5>Interactive Learning</h5>
            <p>
              Develop interactive learning modules with real-time collaboration tools, discussions, and assessments.
            </p>
          </div>

          <div className="service-item">
            <img src={community} alt="Learning Communities" />
            <h5>Learning Communities</h5>
            <p>
              Create social learning experiences with community features like forums, group discussions, and
              peer-to-peer support.
            </p>
          </div>

          <div className="service-item">
            <img src={analytics} alt="Analytics & Reporting" />
            <h5>Analytics & Reporting</h5>
            <p>Monitor learner performance, track progress, and make data-driven decisions with in-depth analytics.</p>
          </div>

          <div className="service-item">
            <img src={mobileLearning} alt="Mobile Learning" />
            <h5>Mobile Learning</h5>
            <p>Ensure seamless access to learning materials on mobile devices for convenient learning anywhere.</p>
          </div>

          <div className="service-item">
            <img src={ai} alt="AI-Powered Learning" />
            <h5>AI-Powered Learning</h5>
            <p>Integrate AI to personalize learning experiences, recommend courses, and improve learner engagement.</p>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="features-section">
        <h2>Additional Features</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={contentManagement} alt="Content Management" />
            <h5>Content Management</h5>
            <p>Easily manage and update course content with a user-friendly content management system.</p>
          </div>

          <div className="dna-item">
            <img src={gamification} alt="Gamification" />
            <h5>Gamification</h5>
            <p>Boost engagement with gamification features like badges, leaderboards, and challenges.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
