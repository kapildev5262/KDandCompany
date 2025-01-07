import React from "react";
import Slider from "react-slick"; // Import Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import btc from "../assets/home/btc.png";
import laptop from "../assets/home/laptop.png";
import c1 from "../assets/home/c1.png";
import c2 from "../assets/home/c2.png";
import c3 from "../assets/home/c3.png";
import c4 from "../assets/home/c4.png";
import c5 from "../assets/home/c5.png";
import c6 from "../assets/home/c6.png";
import about from "../assets/home/aboutImg.png";
import tag from "../assets/home/tagImg.png";
import review from "../assets/home/reviewImge.png";
import phone from "../assets/home/phonesvg.svg";
import email from "../assets/home/emailsvg.svg";
import Blockhome from "../assets/blockchain.jpg";
import AIhome from "../assets/AI.jpg";
import DThome from "../assets/DT.webp";
import Leadershiphome from "../assets/Leader.jpg";
import "./home.css";

const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <>
      {/* Banner Section */}
      <section className="home">
        <div className="slider-section">
          <Slider {...settings}>
            {/** Slide 1 **/}
            <div className="slider">
              <div className="customerImg2">
                <img src={AIhome} className="img-fluid2" alt="AI Home" />
                <div className="cText2">
                  <h4>AI Innovations</h4>
                  <p>
                    Leverage cutting-edge AI innovations to drive business growth and efficiency. Discover smart
                    solutions for automation, data analysis, and customer engagement, empowering your organization to
                    make faster, data-driven decisions and stay ahead of the competition
                  </p>
                </div>
              </div>
            </div>
            {/** Slide 2 **/}
            <div className="slider">
              <div className="customerImg2">
                <img src={Blockhome} className="img-fluid2" alt="Block Home" />
                <div className="cText2">
                  <h4>Blockchain</h4>
                  <p>
                    Blockchain is revolutionizing industries by providing secure, transparent, and decentralized
                    solutions. From financial services to supply chain management, blockchain technology ensures
                    reliability and trust in digital transactions.
                  </p>
                </div>
              </div>
            </div>
            {/** Slide 3 **/}
            <div className="slider">
              <div className="customerImg2">
                <img src={DThome} className="img-fluid2" alt="Cloud Home" />
                <div className="cText2">
                  <h4>
                    Cloud Transformation Services <br />
                  </h4>
                  <p>
                    Unlock business potential with cloud transformation services. Modernize your IT infrastructure,
                    enhance scalability, and cut costs while improving agility and performance. Stay competitive with
                    secure, cloud-native solutions tailored to accelerate your digital journey.
                  </p>
                </div>
              </div>
            </div>
            {/** Slide 4 **/}
            <div className="slider">
              <div className="customerImg2">
                <img src={Leadershiphome} className="img-fluid2" alt="Leadership Home" />
                <div className="cText2">
                  <h4>Leadership Inshights</h4>
                  <p>
                    Gain valuable leadership insights to enhance your decision-making and management skills. Explore
                    strategies, best practices, and expert advice to inspire teams, drive growth, and navigate
                    challenges effectively.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* Zigzag Section */}
      <section className="zigzack " id="four">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="blockImg">
                <img src={laptop} className="img-fluid" alt="Laptop" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="blockText">
                <h3 className="mainHead text-white">Elevating Businesses with Tailored Web Application Solutions</h3>
                <p className="subHead text-white my-4">
                  Crafting Seamless Experiences for Your Digital Journey with Innovative Web Solutions Built for Success
                </p>
                <button className="btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zigzag Section 1 */}
      <section className="zigzack1">
        <div className="container">
          <div className="row flex-column-reverse flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column-reverse align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="blockText">
                <h3 className="mainHead text-white">Revolutionizing Industries with Blockchain Solutions</h3>
                <p className="subHead text-white my-4">
                  Unlocking Potential with Secure and Transparent Blockchain Services
                </p>
                <button className="btn-primary">Learn More</button>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="blockImg">
                <img src={btc} className="img-fluid" alt="Blockchain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Section */}
      <section className="customer" id="five">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 p-0">
            <div className="customerImg">
              <img src={c1} className="img-fluid" />
              <div className="cText">
                <h4>
                  Delivering <br />
                  Excellence in Customer Satisfaction
                </h4>
                <p>
                  KDandCompany: Your Partner in Achieving <br /> Exceptional Customer Service Standards.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 p-0">
            <div className="customerImg">
              <img src={c2} className="img-fluid" />
              <div className="cText">
                <h4 className="text-white">Collaborate, Grow, Thrive</h4>
                <p className="text-white">
                  Uniting Strengths, Creating Impact: Together,
                  <br /> We Can Achieve Greatness
                  <br />
                  wonderful.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 p-0">
            <div className="customerImg">
              <img src={c3} className="img-fluid" />
              <div className="cText">
                <h4>
                  Preserving <br />
                  Customer Trust
                </h4>
                <p>
                  Building Strong Foundations: Together,
                  <br /> We Ensure Trust and Excellence.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 p-0">
            <div className="customerImg">
              <img src={c4} className="img-fluid" />
              <div className="cText">
                <h4>Embark on Ambitious Journeys</h4>
                <p>
                  Setting the Stage for Success: <br />
                  KDandCompany's Commitment to Elevating <br />
                  Customer Service Standards.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 p-0">
            <div className="customerImg">
              <img src={c5} className="img-fluid" />
              <div className="cText">
                <h4 className="text-white">Experience Cryptocurrency in Action</h4>
                <p className="text-white">
                  Empowering Excellence: <br />
                  KDandCompany's Support in Elevating
                  <br /> Customer Service Standards.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 p-0">
            <div className="customerImg">
              <img src={c6} className="img-fluid" />
              <div className="cText">
                <h4 className="text-white">Unleashing the Power of Artificial Intelligence</h4>
                <p className="text-white">
                  Driving Excellence: KDandCompany's Role in <br />
                  Elevating Customer Service Standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="aboutUs" id="six">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-11 col-sm-12 col-12">
              <div className="aboutImg text-end">
                <img src={about} className="img-fluid" />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 ps-xxl-5 ps-xl-5">
              <div className="aboutText">
                <h2>Why choose us?</h2>
                <p>
                  Innovative Technology, Creative Passion, Exceptional Service: Your Trusted Partner in IT Solutions. At
                  KDandCompany, we're committed to delivering cutting-edge IT products and services tailored to your
                  needs. With a focus on the latest and most innovative technologies, we strive to exceed expectations
                  and drive success for our clients. Backed by a team of skilled professionals, we combine modern
                  technology with creative thinking to provide innovative solutions that propel businesses forward..
                </p>
                <div className="aboutTags">
                  <ul>
                    <li>
                      <span>
                        <img src={tag} className="img-fluid" />
                      </span>
                      <label>Blockchain</label>
                    </li>
                    <li>
                      <span>
                        <img src={tag} className="img-fluid" />
                      </span>
                      <label>Smart Contract</label>
                    </li>
                    <li>
                      <span>
                        <img src={tag} className="img-fluid" />
                      </span>
                      <label>AI</label>
                    </li>
                    <li>
                      <span>
                        <img src={tag} className="img-fluid" />
                      </span>
                      <label>Web Apps</label>
                    </li>
                    <li>
                      <span>
                        <img src={tag} className="img-fluid" />
                      </span>
                      <label>Mobile Apps</label>
                    </li>
                    <li>
                      <span>
                        <img src={tag} className="img-fluid" />
                      </span>
                      <label>Salesforce</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="Testimonials">
        <div className="container">
          <div className="heading text-center">
            <label className="subTitle">Testimonials</label>
            <h2>We let our customer do the talking</h2>
          </div>
          <div className="col-xxl-9 col-xl-9 col-lg-10 col-md-12 col-sm-12 col-12 mx-auto">
            <Slider {...settings} className="innerTesti mt-5 section-padding">
              <div className="reviewItemshome">
                <div className="reviewImghome">
                  <img src={review} className="img-fluid" alt="Reviews" />
                </div>
                <div className="reviewTexthome">
                  <div>
                    <div className="brandLogo"></div>
                    <p>
                      KDandCompany has exceeded our expectations with their innovative solutions and exceptional
                      service. Their team truly understands our needs and consistently delivers results that drive our
                      business forward.
                    </p>
                    <div className="nameCmpny">
                      <div className="clientImg"></div>
                      <div className="clientName">
                        <h5>- Sarah</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reviewItemshome">
                <div className="reviewImghome">
                  <img src={review} className="img-fluid" alt="Reviews" />
                </div>
                <div className="reviewTexthome">
                  <div>
                    <div className="brandLogo"></div>
                    <p>
                      Working with KDandCompany has been a game-changer for our organization. Their dedication to
                      customer satisfaction and their ability to adapt to our evolving needs have made them a trusted
                      partner in our success.
                    </p>
                    <div className="nameCmpny">
                      <div className="clientImg"></div>
                      <div className="clientName">
                        <h5>- John</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reviewItemshome">
                <div className="reviewImghome">
                  <img src={review} className="img-fluid" alt="Reviews" />
                </div>
                <div className="reviewTexthome">
                  <div>
                    <div className="brandLogo"></div>
                    <p>
                      KDandCompany's expertise and professionalism have been invaluable to our business. They have
                      helped us streamline our processes and implement technology solutions that have improved
                      efficiency and productivity across the board.
                    </p>
                    <div className="nameCmpny">
                      <div className="clientImg"></div>
                      <div className="clientName">
                        <h5>- Emily</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="casestudy1">
        <div className="container">
          <div className="headLink">
            <h2 className="text-center w-100 mb-4">Success Stories</h2>
          </div>
          <div className="row g-4">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="caseItem">
                <div className="icon">
                  <img src="https://cdn-icons-png.flaticon.com/128/4547/4547543.png" />
                </div>
                <h4>Coinbaazar</h4>
                <p>
                  A Web 3.0 unified P2P Marketplace for buying/selling Bitcoins with 500+ payments, 385+ altcoins,
                  products and services.
                </p>
                <div className="hoverText">
                  <div>
                    <h4>Coinbaazar</h4>
                    <a href="#/">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="caseItem">
                <div className="icon">
                  <img src="https://cdn-icons-png.flaticon.com/128/4547/4547543.png" />
                </div>
                <h4>Fitelo</h4>
                <p>
                  Achieve long-term wellness through simple, powerful, and holistic changes in your nutrition and eating
                  habits
                </p>
                <div className="hoverText">
                  <div>
                    <h4>Fitelo</h4>
                    <a href="#/">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="caseItem">
                <div className="icon">
                  <img src="https://cdn-icons-png.flaticon.com/128/4547/4547543.png" />
                </div>
                <h4>MultiPad</h4>
                <p>
                  MultiPad is the only multi-chain launchpad that's committed to community, offering reasonable and
                  guaranteed IDO allocations.
                </p>
                <div className="hoverText">
                  <div>
                    <h4>MultiPad</h4>
                    <a href="#/">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5 text-center">
            <button className="btn-primary">Read All Stories</button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="inquiry">
        <div className="container">
          <h2>Have any inquiry?</h2>

          <div className="custom-colMain">
            <div className="custom-col">
              <div className="meLink">
                <a href="tel:+919509504256">
                  <img src={phone} className="img-fluid" />
                  +91-9509504256
                </a>
              </div>
            </div>

            <div className="custom-col">
              <div className="meLink">
                <a href="mailto:kapildev5262@gmail.com">
                  <img src={email} className="img-fluid" />
                  kapildev5262@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
