import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./careers.css";
import blockchain from "../../assets/blockchainwallet.jpg";
import Popup from "./popup"; // Import the Popup component
import { useLocation } from "react-router-dom";

const Careers = () => {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const careers = [
    {
      title: "Fullstack Blockchain Developer",
      location: "Remote",
      experience: "3 years",
      path: "/careers/blockchain-developer/",
    },
    {
      title: "Data Analyst",
      location: "Ghaziabad",
      experience: "2 years",
      path: "/careers/data-analyst/",
    },
    {
      title: "Frontend Developer",
      location: "Noida",
      experience: "2-4 years",
      path: "/careers/frontend-developer/",
    },
    {
      title: "Software Developer",
      location: "Noida",
      experience: "1-3 years",
      path: "/careers/software-developer/",
    },
    {
      title: "Cloud Engineer",
      location: "Noida",
      experience: "4 years",
      path: "/careers/cloud-engineer/",
    },
    {
      title: "UX/UI Designer",
      location: "Noida",
      experience: "3 years",
      path: "/careers/ux-ui-designer/",
    },
    {
      title: "DevOps Engineer",
      location: "Noida",
      experience: "2-5 years",
      path: "/careers/devops-engineer/",
    },
    {
      title: "Blockchain Team Lead",
      location: "Noida",
      experience: "5 years",
      path: "/careers/blockchain-teamLead/",
    },
    {
      title: "Software Testing",
      location: "Noida",
      experience: "2 years",
      path: "/careers/software-testing/",
    },
  ];

  const filteredCareers = careers.filter((career) => career.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFormSubmit = (applicantData) => {
    console.log("Applicant Data: ", applicantData);
    // You can add form submission logic here (e.g., send the data to your backend)
  };

  return (
    <div>
      {/* Blockchain Section */}
      <section className="blockchain-section">
        <div className="background1" style={{ backgroundImage: `url(${blockchain})` }}>
          <div className="heading1">
            <h1>Careers</h1>
            <p style={{ color: "white" }}>
              Blockchain is a distributed ledger technology that ensures secure, transparent, and immutable
              transactions. It utilizes cryptography to maintain data integrity and decentralization, making it highly
              secure and reliable.
            </p>
          </div>
        </div>
      </section>

      {/* Careers List */}
      <div className="careers-container">
        <h1>Careers at Our Company</h1>
        <p>Join us and be a part of our journey towards innovation and excellence.</p>

        {/* Search Filter */}
        <input
          type="text"
          placeholder="Search for careers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="careers-list">
          {filteredCareers.map((career, index) => (
            <Link to={career.path} key={index}>
              <div className="career-card">
                <div className="card-content">
                  <h5>{career.title}</h5>
                  <div className="location">
                    <p>{career.location}</p>
                    <p>Experience: {career.experience}</p>
                  </div>
                </div>
                <h4 className="apply-for-job">Apply Now</h4>
              </div>
            </Link>
          ))}
        </div>

        <section className="job-apply">
          <h2>Apply Now</h2>
          <p>
            Interested candidates can send their resume to <a href="mailto:hr@KDandCompany.com">hr@KDandCompany.com</a>.
          </p>
          <button className="btn-primary" onClick={openPopup}>
            Send Your Resume
          </button>
        </section>

        <section className="insights-section">
          {/* Left Section: Subscribe Form */}
          <div className="subscribe-form">
            <h2>Subscribe to Our Insights</h2>
            <button className="btn-primary">Subscribe Now</button>
          </div>

          {/* Right Section: Latest Blog Posts */}
          <div className="latest-blog-posts">
            <h2>Latest from Our Blog</h2>
            <ul>
              <li>
                <h3>Empowering Businesses with AWS: Practical Ways to Cut Cloud Costs</h3>
                <p>
                  Introduction Amazon Web Services (AWS) has become one of the leading cloud computing platforms that...
                </p>
                <button className="btn-primary">View All Blogs</button>
              </li>
              {/* Add more blog post items here */}
            </ul>
          </div>
        </section>
      </div>

      {/* Popup for collecting applicant information */}
      <Popup isOpen={isPopupOpen} closePopup={closePopup} handleSubmit={handleFormSubmit} />
    </div>
  );
};

export default Careers;
