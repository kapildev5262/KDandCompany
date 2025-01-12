import React, { useState } from "react";
import "./popup.css"; // Make sure to create or update Popup.css for styling

const Popup = ({ isOpen, closePopup, handleSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ name, email, resume });
    closePopup();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Submit Your Resume</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              placeholder="Enter Your full Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              placeholder="Enter Your full Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Resume</label>
            <input type="file" onChange={handleFileChange} required />
          </div>
          <button className="btn-primary" type="submit">
            Submit
          </button>
          <button className="btn2" type="button" onClick={closePopup}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
