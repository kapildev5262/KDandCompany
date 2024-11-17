import React, { useState, useEffect } from "react";
import "./JD.css";
import blockchain from "../../assets/blockchainwallet.jpg";
import { useLocation } from "react-router-dom";

const Careers = () => {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  // State for form submission
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you'd send formData to your backend for processing.
    console.log("Form Data: ", formData);
    setFormSubmitted(true);
  };

  return (
    <div>
      {/* Blockchain Section */}
      <section className="blockchain-section">
        <div
          className="background1"
          style={{ backgroundImage: `url(${blockchain})` }}
        >
          <div className="heading1">
            <h1>UI/UX Designer</h1>
            <p style={{ color: "white" }}>
              Blockchain is a distributed ledger technology that ensures secure,
              transparent, and immutable transactions. It utilizes cryptography
              to maintain data integrity and decentralization, making it highly
              secure and reliable.
            </p>
          </div>
        </div>
      </section>

      {/* Job description and Application Form */}
      <div className="job-application-container">
        {/* Job Description */}
        <div className="job-description">
          <section className="job-summary">
            <h2>Job Summary</h2>
            <p>
              We are looking for an experienced Senior Software Engineer
              specializing in JVM technologies. You will be responsible for
              designing and implementing high-quality software solutions that
              are scalable, efficient, and secure.
            </p>
          </section>

          <section className="job-responsibilities">
            <h2>Responsibilities</h2>
            <ul>
              <li>Design, develop, and maintain JVM-based applications.</li>
              <li>
                Collaborate with cross-functional teams to define and implement
                new features.
              </li>
              <li>Ensure high performance and availability of applications.</li>
              <li>
                Write well-tested, high-quality code and conduct code reviews.
              </li>
              <li>Troubleshoot production issues and implement fixes.</li>
            </ul>
          </section>

          <section className="job-requirements">
            <h2>Requirements</h2>
            <ul>
              <li>Strong experience with Java, Kotlin, or Scala.</li>
              <li>
                Deep understanding of JVM internals and performance tuning.
              </li>
              <li>
                Familiarity with microservices architecture and cloud platforms.
              </li>
              <li>
                Experience with RESTful APIs, databases, and distributed
                systems.
              </li>
              <li>
                Excellent problem-solving skills and ability to work
                independently.
              </li>
            </ul>
          </section>
        </div>

        {/* Application Form */}
        <div className="application-form-container">
          <header className="job-header">
            <h2>UI/UX Designer</h2>
            <p>Location: Remote | Full-time</p>
          </header>
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="application-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="resume">Upload Resume</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="coverLetter">Cover Letter (Optional)</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="apply-button">
                Submit Application
              </button>
            </form>
          ) : (
            <p>
              Thank you for applying! We will review your application and get
              back to you.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;
