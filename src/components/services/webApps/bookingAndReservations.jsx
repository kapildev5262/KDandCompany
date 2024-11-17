import "../services.css";
import { useEffect } from "react";
import bookingImage from "../../../assets/B&R.jpeg"; // Booking image import
import travel from "../../../assets/travel.jpg"; // New images relevant to booking services
import hotel from "../../../assets/hotel-booking.jpg";
import event from "../../../assets/events.jpg";
import technology from "../../../assets/optimization.avif";
import reliability from "../../../assets/reliable1.avif";
import { useLocation } from "react-router-dom";

export default function WebApps() {
  const path = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="webapps-page">
      {/* Booking & Reservations Section */}
      <section className="booking-section">
        <div className="background1" style={{ backgroundImage: `url(${bookingImage})` }}>
          <div className="heading1">
            <h1>Booking & Reservations (Travel, Hotels, Events)</h1>
            <p style={{ color: "white" }}>
              We provide comprehensive web applications for booking and reservations, tailored for the travel,
              hospitality, and event management industries. Our solutions ensure seamless, secure, and user-friendly
              experiences for both businesses and their customers.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2>Key Features of Our Booking & Reservations Solutions</h2>
        <ul>
          <li>
            <strong>Real-Time Availability:</strong> Live updates on booking availability for travel, hotels, and
            events.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> Easy navigation and booking processes designed for all devices.
          </li>
          <li>
            <strong>Secure Payments:</strong> Integrated secure payment gateways to process bookings safely.
          </li>
          <li>
            <strong>Customization:</strong> Tailored solutions to meet specific business needs, with flexible booking
            and scheduling features.
          </li>
        </ul>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <p>
          Our web application development services focus on creating seamless booking systems. From travel reservations
          to event ticketing, we ensure your customers experience smooth transactions, real-time availability, and
          secure payment options.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-item">
            <img src={travel} alt="Travel Bookings" />
            <h5>Travel Bookings</h5>
            <p>
              Complete solutions for booking flights, trains, and other transportation services, integrated with
              real-time availability and ticketing.
            </p>
          </div>

          <div className="service-item">
            <img src={hotel} alt="Hotel Reservations" />
            <h5>Hotel Reservations</h5>
            <p>
              Enable your customers to book rooms seamlessly with features like room availability, pricing comparisons,
              and secure payment options.
            </p>
          </div>

          <div className="service-item">
            <img src={event} alt="Event Ticketing" />
            <h5>Event Ticketing</h5>
            <p>
              Facilitate easy ticket booking for concerts, conferences, and other events with features like seat
              selection and QR code-based tickets.
            </p>
          </div>
        </div>
      </section>

      {/* DNA of Our Services Section */}
      <section className="dna-section">
        <h2>DNA of Our Booking Services</h2>
        <div className="dna-container">
          <div className="dna-item">
            <img src={technology} alt="Technology" />
            <h5>Advanced Technology</h5>
            <p>
              We use the latest technologies to build fast, scalable, and secure booking systems, ensuring reliability
              even at high traffic.
            </p>
          </div>

          <div className="dna-item">
            <img src={reliability} alt="Reliability" />
            <h5>Reliability</h5>
            <p>
              Our systems are designed for 24/7 uptime, ensuring smooth operation and support for your customers at all
              times.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
