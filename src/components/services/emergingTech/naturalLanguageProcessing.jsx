import "../services.css";
import { useEffect } from "react";
import nlpBanner from "../../../assets/NLP2.avif"; // NLP image import
import textAnalysis from "../../../assets/anaytics.avif";
import sentimentAnalysis from "../../../assets/digitalanalytic.png";
import speechRecognition from "../../../assets/ml-automation.avif";
import machineTranslation from "../../../assets/ai2.avif";
import chatbot from "../../../assets/Ai2.png";
import textSummarization from "../../../assets/all-good-img1.avif";
import { useLocation } from "react-router-dom";

export default function NLP() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="nlp-page">
      {/* NLP Section */}
      <section className="nlp-section">
        <div className="background1" style={{ backgroundImage: `url(${nlpBanner})` }}>
          <div className="heading1">
            <h1>Natural Language Processing (NLP) Services</h1>
            <p style={{ color: "white" }}>
              NLP enables machines to understand and interpret human language in a valuable way. Our NLP services help
              organizations enhance communication, automate processes, and make better decisions based on unstructured
              data.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of NLP</h2>
        <ul>
          <li>
            <strong>Text Analysis:</strong> Extract valuable insights from vast amounts of textual data.
          </li>
          <li>
            <strong>Speech Recognition:</strong> Convert speech into text with high accuracy.
          </li>
          <li>
            <strong>Sentiment Analysis:</strong> Determine the sentiment behind customer reviews or social media posts.
          </li>
          <li>
            <strong>Machine Translation:</strong> Translate languages seamlessly using advanced machine translation
            algorithms.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our NLP services can help your organization transform customer interactions, automate tasks, and gain insights
          from unstructured data through our end-to-end NLP solutions, tailored to meet your specific needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={textAnalysis} alt="Text Analysis" />
            <h5>Text Analysis</h5>
            <p>
              Extract key insights from large volumes of unstructured text using our cutting-edge text analysis
              solutions.
            </p>
          </div>

          <div className="service-item">
            <img src={sentimentAnalysis} alt="Sentiment Analysis" />
            <h5>Sentiment Analysis</h5>
            <p>Analyze customer feedback and determine the emotional tone behind text data.</p>
          </div>

          <div className="service-item">
            <img src={speechRecognition} alt="Speech Recognition" />
            <h5>Speech Recognition</h5>
            <p>Convert spoken language into text with our advanced speech recognition services.</p>
          </div>

          <div className="service-item">
            <img src={machineTranslation} alt="Machine Translation" />
            <h5>Machine Translation</h5>
            <p>Translate content across multiple languages using our powerful machine translation engines.</p>
          </div>

          <div className="service-item">
            <img src={chatbot} alt="Chatbots" />
            <h5>Chatbots</h5>
            <p>Develop intelligent chatbots that can understand and respond to user inputs using NLP.</p>
          </div>

          <div className="service-item">
            <img src={textSummarization} alt="Text Summarization" />
            <h5>Text Summarization</h5>
            <p>Automatically summarize lengthy texts into concise summaries with our summarization tools.</p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our NLP Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={textAnalysis} alt="Text Analysis" />
            <h5>Text Analysis</h5>
            <p>We provide robust text analysis services to help businesses gain insights from unstructured data.</p>
          </div>

          <div className="dna-item">
            <img src={sentimentAnalysis} alt="Sentiment Analysis" />
            <h5>Sentiment Analysis</h5>
            <p>Analyze opinions and sentiments in customer reviews or social media posts with accuracy.</p>
          </div>

          <div className="dna-item">
            <img src={chatbot} alt="Chatbot Development" />
            <h5>Chatbot Development</h5>
            <p>
              Build custom chatbots capable of understanding human language and engaging in meaningful conversations.
            </p>
          </div>

          <div className="dna-item">
            <img src={machineTranslation} alt="Machine Translation" />
            <h5>Machine Translation</h5>
            <p>Translate documents, websites, and more using our advanced NLP-driven translation solutions.</p>
          </div>

          <div className="dna-item">
            <img src={speechRecognition} alt="Speech Recognition" />
            <h5>Speech Recognition</h5>
            <p>Implement accurate speech-to-text systems that convert voice inputs into actionable text data.</p>
          </div>

          <div className="dna-item">
            <img src={textSummarization} alt="Text Summarization" />
            <h5>Text Summarization</h5>
            <p>Automatically summarize long documents into shorter, more digestible formats.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
