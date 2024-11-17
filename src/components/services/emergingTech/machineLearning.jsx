import "../services.css";
import { useEffect } from "react";
import machineLearning from "../../../assets/ML.jpg"; // Machine Learning image import
import dataAnalysis from "../../../assets/Performance.avif";
import deepLearning from "../../../assets/ai2.avif";
import automation from "../../../assets/ml-automation.avif";
import prediction from "../../../assets/prediction.png";
import optimization from "../../../assets/optimization2.avif";
import analytics from "../../../assets/analytics.png";
import technology from "../../../assets/ai3.avif";
import reliability from "../../../assets/reliable1.avif";
import { useLocation } from "react-router-dom";

export default function ML() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="ml-page">
      {/* ML Section */}
      <section className="ml-section">
        <div className="background1" style={{ backgroundImage: `url(${machineLearning})` }}>
          <div className="heading1">
            <h1>Machine Learning (ML) Services</h1>
            <p style={{ color: "white" }}>
              Machine Learning drives innovation by enabling systems to learn from data, make predictions, and improve
              performance over time without being explicitly programmed.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Machine Learning</h2>
        <ul>
          <li>
            <strong>Data-Driven Insights:</strong> Extract actionable insights from vast datasets for better
            decision-making.
          </li>
          <li>
            <strong>Automation:</strong> Automate complex tasks and processes using intelligent algorithms.
          </li>
          <li>
            <strong>Predictive Modeling:</strong> Use historical data to predict future trends and outcomes.
          </li>
          <li>
            <strong>Continuous Improvement:</strong> ML models get better over time by learning from new data.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our Machine Learning services focus on providing customized solutions that enhance operational efficiency,
          automate decision-making, and generate valuable insights from data.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={dataAnalysis} alt="Data Analysis" />
            <h5>Data Analysis</h5>
            <p>Leverage ML algorithms to analyze vast datasets and generate actionable insights for your business.</p>
          </div>

          <div className="service-item">
            <img src={deepLearning} alt="Deep Learning" />
            <h5>Deep Learning</h5>
            <p>
              Harness the power of neural networks to develop sophisticated AI models that understand complex patterns.
            </p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Process Automation" />
            <h5>Process Automation</h5>
            <p>
              Automate repetitive and complex tasks using machine learning to increase efficiency and reduce human
              error.
            </p>
          </div>

          <div className="service-item">
            <img src={prediction} alt="Predictive Analytics" />
            <h5>Predictive Analytics</h5>
            <p>Use machine learning models to forecast future trends and behaviors based on historical data.</p>
          </div>

          <div className="service-item">
            <img src={optimization} alt="Optimization Solutions" />
            <h5>Optimization Solutions</h5>
            <p>
              Improve performance and resource allocation by optimizing systems and processes with ML-driven insights.
            </p>
          </div>

          <div className="service-item">
            <img src={analytics} alt="Business Analytics" />
            <h5>Business Analytics</h5>
            <p>Utilize machine learning to drive data-driven decision-making for improved business outcomes.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Machine Learning Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={automation} alt="Automation" />
            <h5>Automation</h5>
            <p>Advanced automation solutions that reduce manual intervention and improve operational efficiency.</p>
          </div>

          <div className="dna-item">
            <img src={analytics} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Extract deep insights from data using ML-powered analytics solutions.</p>
          </div>

          <div className="dna-item">
            <img src={technology} alt="Advanced Technology" />
            <h5>Advanced Technology</h5>
            <p>Cutting-edge machine learning technologies to drive innovation in various sectors.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>
              Ensure the reliability and accuracy of your ML models with real-time monitoring and continuous
              improvement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
