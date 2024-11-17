import "../services.css";
import { useEffect } from "react";
import computerVision from "../../../assets/CV.jpg";
import detection from "../../../assets/security.avif";
import facialRecognition from "../../../assets/ai2.avif";
import segmentation from "../../../assets/img-segmentation.avif";
import analytics from "../../../assets/analytics.png";
import reliability from "../../../assets/reliable1.avif";
import automation from "../../../assets/Automation.avif"; // Added import for 'automation'
import realtime from "../../../assets/img-1.avif"; // Added import for 'realtime'
import { useLocation } from "react-router-dom";

export default function ComputerVision() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="computer-vision-page">
      {/* Computer Vision Section */}
      <section className="computer-vision-section">
        <div className="background1" style={{ backgroundImage: `url(${computerVision})` }}>
          <div className="heading1">
            <h1>Computer Vision Services</h1>
            <p style={{ color: "white" }}>
              Computer Vision enables machines to interpret and understand the visual world using images and videos. It
              provides powerful capabilities for object detection, facial recognition, and image segmentation.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Computer Vision</h2>
        <ul>
          <li>
            <strong>Object Detection:</strong> Identify and classify objects in images or videos with high accuracy.
          </li>
          <li>
            <strong>Facial Recognition:</strong> Detect and recognize faces for security, user identification, and more.
          </li>
          <li>
            <strong>Image Segmentation:</strong> Partition images into different segments to isolate specific elements.
          </li>
          <li>
            <strong>Automation:</strong> Automate visual tasks and processes using advanced machine learning algorithms.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our computer vision services offer advanced visual data processing solutions to enhance your business
          capabilities. From object detection to facial recognition, we provide end-to-end solutions tailored to your
          needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={detection} alt="Object Detection" />
            <h5>Object Detection</h5>
            <p>
              Leverage state-of-the-art algorithms to detect and classify objects in real-time for enhanced automation.
            </p>
          </div>

          <div className="service-item">
            <img src={facialRecognition} alt="Facial Recognition" />
            <h5>Facial Recognition</h5>
            <p>Implement facial recognition for authentication, surveillance, and personalized user experiences.</p>
          </div>

          <div className="service-item">
            <img src={segmentation} alt="Image Segmentation" />
            <h5>Image Segmentation</h5>
            <p>Accurately segment images for applications in medical imaging, retail, and automotive industries.</p>
          </div>

          <div className="service-item">
            <img src={automation} alt="Automation" />
            <h5>Automation</h5>
            <p>
              Automate processes and workflows using computer vision, improving efficiency and reducing manual tasks.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Computer Vision Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={analytics} alt="Analytics" />
            <h5>Analytics</h5>
            <p>Gain deep insights using advanced analytics powered by computer vision technology.</p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>Ensure consistent and reliable performance in all computer vision applications.</p>
          </div>

          <div className="dna-item">
            <img src={automation} alt="Automation" />
            <h5>Automation</h5>
            <p>Automate visual tasks and streamline workflows with computer vision technology for efficiency.</p>
          </div>

          <div className="dna-item">
            <img src={realtime} alt="Real-Time Processing" />
            <h5>Real-Time Processing</h5>
            <p>
              Enable real-time image and video processing for applications like surveillance, autonomous vehicles, and
              live event monitoring.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
