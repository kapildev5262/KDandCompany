import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Brand from "../../assets/about/logo.png";
import "../../css/bootstrap.min.css";
import "../../index.css";
import "../../css/all.min.css";
import "../../css/responsive.css";
import "../../css/aos.css";
import "../../utils/all.min.js";
import "../../utils/bootstrap.bundle.min.js";
import "../../utils/popper.min.js";
import "./header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Track active submenu
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown
  const [subMenuVisible, setSubMenuVisible] = useState({}); // For toggling submenus
  const navigate = useNavigate();
  const location = useLocation(); // Track current location

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowHeader(false);
    } else {
      // Scrolling up
      setShowHeader(true);
    }

    setLastScrollY(window.scrollY);

    // Check if the user is at the top of the page
    if (window.scrollY === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  // Collapse the navbar when navigating to a new page
  // Close the navbar on navigation
  useEffect(() => {
    const navCollapse = document.getElementById("navbarCollapse");
    const bsCollapse = new window.bootstrap.Collapse(navCollapse, {
      toggle: false,
    });
    bsCollapse.hide(); // Close the navbar
  }, [location]);

  // Handle arrow clicks to toggle submenus
  const handleArrowClick = (menu) => {
    setActiveDropdown(menu === activeDropdown ? null : menu); // Toggle dropdown
  };

  const handleSubMenuClick = (submenu) => {
    setSubMenuVisible((prev) => ({
      ...prev,
      [submenu]: !prev[submenu], // Toggle visibility of the submenu
    }));
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Functions to handle mouse enter and leave events
  // Handle mouse events for activating dropdown menus
  let dropdownTimer;
  let submenuTimer;

  const handleMouseEnter = (dropdown) => {
    if (dropdownTimer) clearTimeout(dropdownTimer); // Clear any existing timer
    setActiveDropdown(dropdown);
  };

  const handleMouseEnter2 = (submenu) => {
    if (submenuTimer) clearTimeout(submenuTimer); // Clear any existing timer
    setActiveSubMenu(submenu);
  };

  const handleMouseLeave = () => {
    dropdownTimer = setTimeout(() => {
      setActiveDropdown(null);
    }, 500); // Delay of 500ms
  };

  const handleMouseLeave2 = () => {
    submenuTimer = setTimeout(() => {
      setActiveSubMenu(null);
    }, 500); // Delay of 500ms
  };

  // Style to change link color based on the active dropdown
  const linkStyle = (dropdown) => ({
    color: activeDropdown === dropdown ? "blue" : "white",
  });

  const linkStyle2 = (submenu) => ({
    color: subMenuVisible[submenu] ? "blue" : "black",
  });

  return (
    <div className="wrapper">
      <header
        className={`header homePage ${showHeader ? "visible" : "hidden"} ${isTop ? "light-black" : "light-black"}`}
        id="one"
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="logoCover">
              <Link to={"/"} className="navbar-brand">
                <img src={Brand} className="logo"></img>
              </Link>
            </div>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <i className="fa-solid fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse mx-auto" id="navbarCollapse">
              <div className="navbar-nav1 ms-auto">
                <div
                  className="navbar-nav align-items-center nav-item dropdown"
                  onMouseEnter={() => handleMouseEnter("service")}
                  onMouseLeave={handleMouseLeave}
                  style={linkStyle("service")}
                >
                  <Link
                    to={"/services/"}
                    className="nav-item nav-link"
                    id="service"
                    style={{ color: activeDropdown === "service" ? "Blue" : "white" }}
                  >
                    Services
                  </Link>
                  <FontAwesomeIcon icon={faAngleDown} color="#5849ff" onClick={() => handleArrowClick("service")} />
                  <div
                    className="dropdown-menu"
                    id="menu-2"
                    style={{
                      display: activeDropdown === "service" ? "block" : "none",
                    }}
                  >
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("AI")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/services/emerging-tech/"}>
                            Emerging Tech
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("AI")}
                            style={{
                              marginLeft: "126px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "AI" ? "#ff6e9e" : "black", // Change icon color on hover or click
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "AI" && (
                            <div className="sub-dropdown-menu">
                              <ul className="dropdown-submenu">
                                <li>
                                  <Link to={"/services/ai-development"}>Artificial intelligence (AI)</Link>
                                </li>
                                <li>
                                  <Link to={"/services/emerging-tech/machine-learning/"}>
                                    Machine Learning (ML) Services
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/services/emerging-tech/robotic-process-automation/"}>RPA</Link>
                                </li>
                                <li>
                                  <Link to={"/services/emerging-tech/natural-language-processing/"}>
                                    Natural Language Processing (NLP) Services
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/services/blockchain-development/"}>Blockchain Development</Link>
                                </li>
                                <li>
                                  <Link to={"/services/emerging-tech/computer-vision-services/"}>
                                    Computer Vision Services
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("Web")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/services/web-apps-development/"}>
                            Web Apps Development{" "}
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("Web")}
                            style={{
                              marginLeft: "64px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "Web" ? "#ff6e9e" : "black", // Change icon color on hover or click
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "Web" && (
                            <div className="sub-dropdown-menu2">
                              <ul className="dropdown-submenu">
                                <li>
                                  <Link to={"/services/web-apps/social-networking/"}>Social Networking</Link>
                                </li>
                                <li>
                                  <Link to={"/services/web-apps/content-management/"}>Content Management</Link>
                                </li>

                                <li>
                                  <Link to={"/services/web-apps/productivity-tools/"}>Productivity Tools</Link>
                                </li>
                                <li>
                                  <Link to={"/services/web-apps/financial-services/"}>Financial Services</Link>
                                </li>
                                <li>
                                  <Link to={"/services/web-apps/educational-platforms/"}>Educational Platforms</Link>
                                </li>
                                <li>
                                  <Link to={"/services/web-apps/booking-&-reservations/"}>Booking & Reservations</Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("Mobile")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/services/mobile-apps-development/"}>
                            Mobile Apps Development{" "}
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("Mobile")}
                            style={{
                              marginLeft: "51px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "Mobile" ? "#ff6e9e" : "black", // Change icon color on hover or click
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "Mobile" && (
                            <div className="sub-dropdown-menu3">
                              <ul className="dropdown-submenu">
                                <li>
                                  <Link to={"/services/mobile-apps-development/android/"}>Android</Link>
                                </li>
                                <li>
                                  <Link to={"/services/mobile-apps-development/ios/"}>iOS</Link>
                                </li>
                                <li>
                                  <Link to={"/services/mobile-apps-development/hybrid/"}>Hybrid</Link>
                                </li>
                                <li>
                                  <Link to={"/services/mobile-apps-development/paws/"}>PAWS</Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("Salesforce")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/services/salesforce-development/"}>
                            Salesforce Development{" "}
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("Salesforce")}
                            style={{
                              marginLeft: "61px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "Salesforce" ? "#ff6e9e" : "black", // Change icon color on hover or click
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "Salesforce" && (
                            <div className="sub-dropdown-menu4">
                              <ul className="dropdown-submenu">
                                <li>
                                  <Link to={"/services/salesforce/salesforce-managed-services/"}>
                                    Salesforce Managed Services
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/services/salesforce/salesforce-implementation/"}>
                                    Salesforce Implementation
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/services/salesforce/salesforce-integration/"}>
                                    Salesforce Integration
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/services/salesforce/salesforce-service-cloud/"}>
                                    Salesforce Service Cloud
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/services/salesforce/salesforce-automation/"}>Salesforce Automation</Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("Blockchain")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/services/blockchain-development/"}>
                            Blockchain Development{" "}
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("Blockchain")}
                            style={{
                              marginLeft: "60px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "Blockchain" ? "#ff6e9e" : "black", // Change icon color on hover or click
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "Blockchain" && (
                            <div className="sub-dropdown-menu5">
                              <ul className="dropdown-submenu">
                                <li>
                                  <Link to={"/services/blockchain/ico-solutions/"}>ICO Solutions</Link>
                                </li>
                                <li>
                                  <Link to={"/services/blockchain/ieo-solutions/"}>IEO Solutions</Link>
                                </li>
                                <li>
                                  <Link to={"/services/blockchain/sto-solutions/"}>STO Solutions</Link>
                                </li>
                                <li>
                                  <Link to={"/services/blockchain/dapp-development/"}>DApp Development</Link>
                                </li>
                                <li>
                                  <Link to={"/services/blockchain/crypto-currency-exchange/"}>
                                    Crypto Currency Exchange
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("prototyping")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/services/prototyping-&-ui-ux/"}>
                            Prototyping & UI/UX
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("prototyping")}
                            style={{
                              marginLeft: "92px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "prototyping" ? "#ff6e9e" : "black", // Change icon color on hover or click
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "prototyping" && (
                            <div className="sub-dropdown-menu6">
                              <ul className="dropdown-submenu">
                                <li>
                                  <Link to={"/services/prototyping-&-ui-ux/low-fidelity-prototypes/"}>
                                    Low Fidelity Prototypes
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/services/prototyping-&-ui-ux/high-fidelity-prototypes/"}>
                                    High Fidelity Prototypes
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/services/prototyping-&-ui-ux/rapid-prototypes/"}>Rapid Prototypes</Link>
                                </li>
                                <li>
                                  <Link to={"/services/prototyping-&-ui-ux/mvps/"}>MVPs</Link>
                                </li>
                                <li>
                                  <Link to={"/services/prototyping-&-ui-ux/ui-ux/"}>UI/UX Design</Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("Dashboard")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/solutions/dashboard/"}>
                            Dashboard Development{" "}
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("Dashboard")}
                            style={{
                              marginLeft: "58px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "Dashboard" ? "#ff6e9e" : "black", // Change icon color on hover or click
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "Dashboard" && (
                            <div className="sub-dropdown-menu7">
                              <ul className="dropdown-submenu">
                                <li>
                                  <Link to={"/solutions/dashboard/finance-dashboard/"}>Finance Dashboard</Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/dashboard/hr-dashboard/"}>HR Dashboard</Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/dashboard/marketing-dashboard/"}>Marketing Dashboard</Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/dashboard/operational-dashboard/"}>Operational Dashboard</Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/dashboard/project-management-dashboard/"}>
                                    Project Management Dashboard
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/dashboard/sales-dashboard/"}>Sales Dashboard</Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("product")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/services/product-engineering/"}>
                            Product Engineering
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("product")}
                            style={{
                              marginLeft: "89px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "product" ? "#ff6e9e" : "black", // Change icon color on hover or click
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "product" && (
                            <div className="sub-dropdown-menu8">
                              <ul className="dropdown-submenu">
                                <li>
                                  <Link to={"/services/product-engineering/product-design/"}>Product Design</Link>
                                </li>
                                <li>
                                  <Link to={"/services/product-engineering/product-development/"}>
                                    Product Development
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/services/product-engineering/solution-architecture/"}>
                                    Solution Architecture
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/services/product-engineering/tech-support/"}>Tech Support</Link>
                                </li>
                                <li>
                                  <Link to={"/services/product-engineering/product-application-catalogue/"}>
                                    Product Application Catalogue
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("automation")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/services/automation/"}>
                            Automation
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("automation")}
                            style={{
                              marginLeft: "145px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "automation" ? "#ff6e9e" : "black", // Change icon color on hover or click
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "automation" && (
                            <div className="sub-dropdown-menu9">
                              <ul className="dropdown-submenu">
                                <li>
                                  <Link to={"/services/automation/intelligent-automation/"}>
                                    Intelligent Automation
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/services/automation/process-automation/"}>Process Automation</Link>
                                </li>
                                <li>
                                  <li>
                                    <Link to={"/services/automation/hr-automation/"}>HR Automation</Link>
                                  </li>

                                  <Link to={"/services/automation/sales-marketing-automation/"}>
                                    Sales Marketing Automation
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("framework")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/services/custom-framework/"}>
                            Custom Framework
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("framework")}
                            style={{
                              marginLeft: "93px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "framework" ? "#ff6e9e" : "black", // Change icon color on hover or click
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "framework" && (
                            <div className="sub-dropdown-menu10">
                              <ul className="dropdown-submenu">
                                <li>
                                  <Link to={"/services/custom-framework/java/"}>Java</Link>
                                </li>
                                <li>
                                  <Link to={"/services/custom-framework/php/"}>PHP</Link>
                                </li>
                                <li>
                                  <Link to={"/services/custom-framework/dotnet/"}>Dotnet</Link>
                                </li>
                                <li>
                                  <Link to={"/services/custom-framework/nodejs/"}>Node.js</Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("digital-marketing")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/services/digital-marketing/"}>
                            Digital Marketing
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("digital-marketing")}
                            style={{
                              marginLeft: "110px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "digital-marketing" ? "#ff6e9e" : "black", // Change icon color on hover or click
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "digital-marketing" && (
                            <div className="sub-dropdown-menu11">
                              <ul className="dropdown-submenu">
                                <li>
                                  <Link to={"/services/digital-marketing/content-marketing/"}>Content Marketing</Link>
                                </li>
                                <li>
                                  <Link to={"/services/digital-marketing/orm/"}>ORM</Link>
                                </li>
                                <li>
                                  <Link to={"/services/digital-marketing/seo/"}>SEO</Link>
                                </li>
                                <li>
                                  <Link to={"/services/digital-marketing/smo/"}>SMO</Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("digital-transformation")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/services/enterprise-digital-transformation/"}>
                            Enterprise Digital Transformation
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("digital-transformation")}
                            style={{
                              marginLeft: "10px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "digital-transformation" ? "#ff6e9e" : "black", // Change icon color on hover or click
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "digital-transformation" && (
                            <div className="sub-dropdown-menu12">
                              <ul className="dropdown-submenu">
                                <li>
                                  <Link
                                    to={"/services/enterprise-digital-transformation/enterprise-software-solutions/"}
                                  >
                                    Enterprise Software Solutions
                                  </Link>
                                </li>

                                <li>
                                  <Link to={"/services/enterprise-digital-transformation/process-harmonization/"}>
                                    Process Harmonization
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/services/enterprise-digital-transformation/workflow-solutions/"}>
                                    Workflow Solutions
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/services/enterprise-digital-transformation/metaverse-development/"}>
                                    Metaverse Development
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="navbar-nav align-items-center nav-item dropdown"
                  onMouseEnter={() => handleMouseEnter("industries")}
                  onMouseLeave={handleMouseLeave}
                  style={linkStyle("industries")}
                >
                  <Link
                    to="/"
                    className="nav-item nav-link "
                    id="industries"
                    style={{ color: activeDropdown === "industries" ? "Blue" : "white" }}
                  >
                    Industries
                  </Link>
                  <FontAwesomeIcon icon={faAngleDown} color="#5849ff" onClick={() => handleArrowClick("industries")} />
                  <div
                    className="dropdown-menu"
                    id="menu-4"
                    style={{
                      display: activeDropdown === "industries" ? "block" : "none",
                    }}
                  >
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                      }}
                    >
                      <li>
                        <Link className="dropdown-item" to={"/industries/financial-services/"}>
                          Financial Services{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/industries/education/"}>
                          Education{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/industries/health-care/"}>
                          Health Care{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/industries/hospitality/"}>
                          Hospitality{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/industries/tour&travel/"}>
                          Tour & Travel{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/industries/retail/"}>
                          Retail{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/industries/transpotation/"}>
                          Transpotation{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/industries/food&beverages/"}>
                          Food & Beverages{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/industries/energy-mining/"}>
                          Energy & Mining{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/industries/media-&-entertainment/"}>
                          Media & Entertainment
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/industries/manufacturing/"}>
                          Manufacturing{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/industries/automotive/"}>
                          Automotive
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/industries/real-estate/"}>
                          Real-Estate
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/industries/bfsi/"}>
                          BFSI
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/industries/technology/"}>
                          Technology
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="navbar-nav align-items-center nav-item dropdown"
                  onMouseEnter={() => handleMouseEnter("solution")}
                  onMouseLeave={handleMouseLeave}
                  style={linkStyle("solution")}
                >
                  <Link
                    to="/solutions/"
                    className="nav-item nav-link"
                    id="solution"
                    style={{ color: activeDropdown === "solution" ? "Blue" : "white" }}
                  >
                    Solutions
                  </Link>
                  <FontAwesomeIcon icon={faAngleDown} color="#5849ff" onClick={() => handleArrowClick("solution")} />
                  <div
                    className="dropdown-menu"
                    id="menu-3"
                    style={{
                      display: activeDropdown === "solution" ? "block" : "none",
                    }}
                  >
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("Cloud&Devops2")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/services/cloud&devops/"}>
                            Cloud & Devops
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("Cloud&Devops2")}
                            style={{
                              marginLeft: "69px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "Cloud&Devops2" ? "#ff6e9e" : "black", // Change icon color on hover or click
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "Cloud&Devops2" && (
                            <div className="sub-dropdown-menu1a">
                              <ul className="dropdown-submenu">
                                <li>
                                  <Link to={"/services/cloud&devops/devops-implementation-service/"}>
                                    DevOps Implementation Service
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/services/cloud&devops/devops-assessment-services/"}>
                                    DevOps Assessment Service
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/services/cloud&devops/devos-automation/"}>DevOps Automation</Link>
                                </li>
                                <li>
                                  <Link to={"/services/cloud&devops/devopsMonitoring/"}>DevOps Monitoring</Link>
                                </li>
                                <li>
                                  <Link to={"/services/cloud&devops/devsecops/"}>DevSecOps</Link>
                                </li>
                                <li>
                                  <Link to={"/services/cloud&devops/cloud-devops-services/"}>
                                    Clouds DevOps Service
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/services/cloud&devops/devops-support-services/"}>
                                    DevOps Support Service
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/services/cloud&devops/cybersecurity/"}>Cybersecurity</Link>
                                </li>
                                <li>
                                  <Link to={"/services/cloud&devops/site-reliability-engineering/"}>
                                    Site Reliability Engineering
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/services/ai-development/"}>
                          AI, Deep Tech
                        </Link>
                      </li>
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("IOt")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/solutions/iot/"}>
                            IOT Smart Solutions
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("IOt")}
                            style={{
                              marginLeft: "49px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "IOt" ? "#ff6e9e" : "black",
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "IOt" && (
                            <div className="sub-dropdown-menu1b">
                              <ul className="dropdown-submenu">
                                <li>
                                  <Link to={"/solutions/iot/iot-powered-asset-management/"}>
                                    IOT Powered Asset Management
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/iot/iot-powered-asset-monitoring/"}>
                                    IOT Powered Asset Monitoring
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/iot/iot-powered-factory-automation/"}>
                                    IOT Powered Factory Automation
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/iot/iot-powered-fleet-management/"}>
                                    IOT Powered Fleet Management
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/iot/iot-powered-healthcare/"}>IOT Powered Healthcare</Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/iot/iot-powered-parking/"}>IOT Powered Parking</Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/iot/iot-powered-retail/"}>IOT Powered Retail</Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/iot/iot-powered-school-solutions/"}>
                                    IOT Powered School Solutions
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/iot/iot-powered-warehouse/"}>IOT Powered Warehouse</Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/services/product-engineering/"}>
                          Product Engineering
                        </Link>
                      </li>
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("e-Commerce2")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/services/ecommerce/"}>
                            E-Commerce
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("e-Commerce2")}
                            style={{
                              marginLeft: "93px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "e-Commerce2" ? "#ff6e9e" : "black",
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "e-Commerce2" && (
                            <div className="sub-dropdown-menu1c">
                              <ul className="dropdown-submenu">
                                <li>
                                  <Link to={"/services/ecommerce/b2b-commerce/"}>B2B Commerce</Link>
                                </li>
                                <li>
                                  <Link to={"/services/ecommerce/b2c-commerce/"}>B2C-Commerce</Link>
                                </li>
                                <li>
                                  <Link to={"/services/ecommerce/chatgpt-integration/"}>chatgpt-integration</Link>
                                </li>
                                <li>
                                  <Link to={"/services/ecommerce/customization/"}>customization</Link>
                                </li>
                                <li>
                                  <Link to={"/services/ecommerce/omnichannel/"}>Omnichannel</Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/solutions/web-&-cms/"}>
                          Web & CMS
                        </Link>
                      </li>
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("Blockchain Solutions")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/services/blockchain-development/"}>
                            Blockchain Solutions
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("Blockchain Solutions")}
                            style={{
                              marginLeft: "47px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "Blockchain Solutions" ? "#ff6e9e" : "black",
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "Blockchain Solutions" && (
                            <div className="sub-dropdown-menu1d">
                              <ul className="dropdown-submenu">
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
                                  <Link to={"/solutions/blockchain/enterprise-blockchain/"}>
                                    Enterprise-Blockchain{" "}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/solutions/process-transformation/"}>
                          Process Transformation
                        </Link>
                      </li>
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("wireframing")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/solutions/prototyping-poc-&-wireframing/"}>
                            Prototyping & Wireframing
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("wireframing")}
                            style={{
                              marginLeft: "12px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "wireframing" ? "#ff6e9e" : "black",
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "wireframing" && (
                            <div className="sub-dropdown-menu1e">
                              <ul className="dropdown-submenu">
                                <li>
                                  <Link to={"/services/product-engineering/product-design/"}>Product Design</Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/prototyping-poc-&-wireframing/prototype-dashboard/"}>
                                    Prototype Dashboard
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/prototyping-poc-&-wireframing/prototype-mobile-apps/"}>
                                    Prototype Mobile Apps
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/prototyping-poc-&-wireframing/prototypes-website/"}>
                                    Prototypes Website
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/services/mobile-apps-development/"}>
                          Mobile Apps
                        </Link>
                      </li>
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("testing")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/solutions/testing/"}>
                            Testing & QA
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("testing")}
                            style={{
                              marginLeft: "94px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "testing" ? "#ff6e9e" : "black",
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "testing" && (
                            <div className="sub-dropdown-menu1f">
                              <ul className="dropdown-submenu">
                                <li>
                                  <Link to={"/solutions/testing/automation-testing/"}>Automation Testing</Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/testing/functional-testing/"}>Functional Testing</Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/testing/manual-teasting/"}>Manual Teasting</Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/testing/vapt/"}>VAPT</Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/solutions/workforce-assignment/"}>
                          Workforce Assignment{" "}
                        </Link>
                      </li>
                      <li>
                        <div
                          onMouseEnter={() => handleMouseEnter2("Dashboard")}
                          onMouseLeave={handleMouseLeave2}
                          style={linkStyle2("submenu")}
                          className="m1"
                        >
                          <Link className="dropdown-item" to={"/solutions/dashboard/"}>
                            Dashboard Development{" "}
                          </Link>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            onClick={() => handleSubMenuClick("Dashboard")}
                            style={{
                              marginLeft: "17px",
                              marginRight: "15px",
                              cursor: "pointer",
                              color: activeSubMenu === "Dashboard" ? "#ff6e9e" : "black",
                            }}
                          />

                          {/* Submenu items - New Submenu on the right */}

                          {activeSubMenu === "Dashboard" && (
                            <div className="sub-dropdown-menu1e">
                              <ul className="dropdown-submenu">
                                <li>
                                  <Link to={"/solutions/dashboard/finance-dashboard/"}>Finance Dashboard</Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/dashboard/hr-dashboard/"}>HR Dashboard</Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/dashboard/marketing-dashboard/"}>Marketing Dashboard</Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/dashboard/operational-dashboard/"}>Operational Dashboard</Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/dashboard/project-management-dashboard/"}>
                                    Project Management Dashboard
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/solutions/dashboard/sales-dashboard/"}>Sales Dashboard</Link>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="navbar-nav align-items-center nav-item dropdown"
                  onMouseEnter={() => handleMouseEnter("insight")}
                  onMouseLeave={handleMouseLeave}
                  style={linkStyle("insight")}
                >
                  <Link
                    to={"/"}
                    className="nav-item nav-link"
                    id="insight"
                    style={{ color: activeDropdown === "insight" ? "Blue" : "white" }}
                  >
                    Insights
                  </Link>
                  <FontAwesomeIcon icon={faAngleDown} color="#5849ff" onClick={() => handleArrowClick("insight")} />
                  <div
                    className="dropdown-menu"
                    id="menu-5"
                    style={{
                      display: activeDropdown === "insight" ? "block" : "none",
                    }}
                  >
                    <Link className="dropdown-item styles" to={"/insights/casestudy/"}>
                      Case Study
                    </Link>
                    <hr />
                    <Link className="dropdown-item" to={"/insights/blogs/"}>
                      Blogs
                    </Link>
                    <hr />
                    <Link className="dropdown-item" to={"/insights/whitepapers/"}>
                      White Papers
                    </Link>
                  </div>
                </div>

                <Link
                  to={"/careers/"}
                  className="nav-item nav-link"
                  style={{ color: activeDropdown === "careers" ? "Blue" : "white" }}
                  onMouseEnter={() => handleMouseEnter("careers")}
                  onMouseLeave={handleMouseLeave}
                >
                  Careers
                </Link>

                <Link
                  to={"/about-us/"}
                  className="nav-item nav-link"
                  style={{ color: activeDropdown === "about" ? "Blue" : "white" }}
                  onMouseEnter={() => handleMouseEnter("about")}
                  onMouseLeave={handleMouseLeave}
                >
                  About us
                </Link>

                <button className="btn-primary" onClick={() => navigate("/contact/")}>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
