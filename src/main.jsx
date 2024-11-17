import App from './app.jsx';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./css/all.min.css";
import "./css/aos.css";
import "./css/bootstrap.min.css";
import "./css/flaticon.css";
import "./css/owl.carousel.min.css";
import "./css/responsive.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
