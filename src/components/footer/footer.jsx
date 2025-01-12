import React from "react";
import "./footer.css";

import brand from "../../assets/about/logo.png";
import skype from "../../assets/skype.svg";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mil.svg";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook-icon.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin-icon.png";
import pinterest from "../../assets/pinterest.png";
import medium from "../../assets/medium.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="fAddress">
              <Link to={"/"} className="mb-4">
                <img src={brand} className="logo" alt="Logo Missing" />
              </Link>
              <h4>Quick Contact</h4>
              <ul>
                <li>
                  <span>
                    <img src={skype} />
                  </span>
                  <a href="#/">KDcomapany.Skype</a>
                </li>
                <li>
                  <span>
                    <img src={phone} />
                  </span>{" "}
                  <a href="tel:+919509504256">+91-9509504256</a>
                </li>
                <li>
                  <span>
                    <img src={mail} />
                  </span>
                  <a href="#">kapildev5262@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="socialMedia">
              <a href="#" aria-label="Facebook">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src={twitter} alt="Twitter" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="#" aria-label="Pinterest">
                <img src={pinterest} alt="Pinterest" />
              </a>
              <a href="#" aria-label="Medium">
                <img src={medium} alt="Medium" />
              </a>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-3 col-sm-6 col-6">
            <div className="fLinks">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <Link to={"/services/web-apps-development/"}>Web Apps Development</Link>
                </li>
                <li>
                  <Link to={"/services/mobile-apps-development/"}>Mobile Apps Development</Link>
                </li>
                <li>
                  <Link to={"/services/blockchain-development/"}>Blockchain Development</Link>
                </li>
                <li>
                  <Link to={"/services/emerging-tech/"}>Emerging Tech</Link>
                </li>
                <li>
                  <Link to={"/services/custom-framework/"}>Custom Framework</Link>
                </li>
                <li>
                  <Link to={"/services/digital-marketing/"}>Digital Marketing</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
            <div className="fLinks">
              <h4>Industries</h4>
              <ul>
                <li>
                  <Link to={"/industries/financial-services/"}>Financial Services </Link>
                </li>
                <li>
                  <Link to={"/industries/education/"}>Education </Link>
                </li>
                <li>
                  <Link to={"/industries/health-care/"}>Health Care </Link>
                </li>
                <li>
                  <Link to={"/industries/hospitality/"}>Hospitality </Link>
                </li>
                <li>
                  <Link to={"/industries/tour&travel/"}>Tour & Travel </Link>
                </li>
                <li>
                  <Link to={"/industries/retail/"}>Retail </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
            <div className="fLinks">
              <h4>Our Solutions</h4>
              <ul>
                <li>
                  <Link to={"/solutions/blockchain/decentralised-finance/"}>Decentralised Finance</Link>
                </li>
                <li>
                  <Link to={"/solutions/blockchain/nft-marketplace/"}>Nft Marketplace</Link>
                </li>
                <li>
                  <Link to={"/solutions/blockchain/blockchain-wallet/"}>Blockchain Wallet</Link>
                </li>
                <li>
                  <Link to={"/solutions/blockchain/p2p-c2c-exchange/"}>P2P/C2C Exchange</Link>
                </li>
                <li>
                  <Link to={"/solutions/blockchain/enterprise-blockchain/"}>Enterprice Blockchain</Link>
                </li>
                <li>
                  <Link to={"/solutions/iot/"}>IOT</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
            <div className="fLinks">
              <h4>COMPANY</h4>
              <ul>
                <li>
                  <Link to={"/about-us/"}>About us</Link>
                </li>
                <li>
                  <Link to={"/contact/"}>Contact Us</Link>
                </li>
                <li>
                  <Link to={"/careers/"}>Careers</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="locations">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
              <h4>Locations </h4>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
              <ul className="lLinks">
                <li>
                  <a href="#/">Noida</a>
                </li>
                <li>
                  <a href="#/">Ghaziabad</a>
                </li>
                <li>
                  <a href="#/">Chandigarh</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <div className="container">
          <p className="m-0 text-center">© 2024 | KD&Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
