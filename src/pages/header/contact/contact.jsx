import React, { useEffect, useRef, useState } from "react";
import office from "../../../assets/contact/office.png";
import map from "../../../assets/contact/map.svg";
import phone from "../../../assets/contact/phone.svg";
import { API_CONTACT } from "../../../services/development";
import axios from "axios";

const Contact = () => {
  const ref = useRef(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState(""); // Consistent lowercase variable name
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(""); // For error handling
  const [success, setSuccess] = useState(""); // For success message

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Post data function
  const postData = async () => {
    setLoading(true); // Start loading when submitting
    setError(""); // Reset error before each request
    setSuccess(""); // Reset success before each request

    try {
      let response = await axios.post(API_CONTACT.BASE_URL, {
        firstName, // Ensure these match the server-side naming conventions
        lastName,
        email,
        companyName,
        phoneNumber,
        message,
      });

      // Clear form fields after successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setCompanyName("");
      setPhoneNumber("");
      setMessage("");

      setLoading(false); // Stop loading
      setSuccess("Your message has been sent successfully!"); // Show success message
      setTimeout(() => {
        setSuccess("");
      }, 3000);
      console.log("Response:", response?.data);
    } catch (err) {
      setLoading(false); // Stop loading in case of error
      setError("There was an error submitting your request. Please try again."); // Show error message
      console.log("Error:", err);
    }
  };

  return (
    <section className="cnt_details padd80 pt-175" ref={ref}>
      <div className="container">
        <div className="row g-4">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pe-xxl-5 pe-xl-5 pe-lg-5 pe-md-4">
            <div className="contactText">
              <div className="heading">
                <h3 className="pageTitle2 mb-3">Unlock Growth with Our Product Analytics Services</h3>
                <p>
                  Explore data-driven insights to drive growth. Our expert-led analytics services optimize performance
                  and enhance decision-making. Schedule a consultation today!
                </p>
              </div>
              <div className="infra mt-4">
                <h4 className="pageTitle3 mb-3">Our Office</h4>
                <div className="officeImg mb-3">
                  <img src={office} alt="Office" />
                </div>
              </div>
              <div className="ourLocation mt-4">
                <div className="row g-4">
                  <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-6 col-sm-6 col-12">
                    <h4 className="pageTitle3 mb-3">Noida</h4>
                    <div className="dteLayout w-100 mb-3">
                      <div className="icon">
                        <img src={map} alt="Map" />
                      </div>
                      <p className="mb-0 minH f14 pe-xxl-4">
                        Suite-B04, D-60,
                        <br /> Sector-63, <br />
                        Noida-201301
                      </p>
                    </div>
                    <div className="dteLayout w-100">
                      <div className="icon">
                        <img src={phone} alt="Map" />
                      </div>
                      <p className="mb-0 f14">
                        <a href="tel:+918920691481">+91 8920691481</a>
                      </p>
                    </div>
                  </div>

                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="getInTouch">
              <div className="row g-4">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      className="form-control"
                      name=""
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      className="form-control"
                      name=""
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      className="form-control"
                      name=""
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="form-group">
                    <label>Company Name</label>
                    <input
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      type="text"
                      className="form-control"
                      name=""
                      placeholder="Company Name"
                    />
                  </div>
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      type="text"
                      className="form-control"
                      name=""
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="form-control"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>
                <div onClick={postData} className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="form-group">
                    <button className="btn-primary w-100">Send</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Success and Error Message Handling */}
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
