import React, { useEffect } from "react";
import banner from "../../../assets/services/bannerImg.png";
import pic1 from "../../../assets/services/1.png";
import pic2 from "../../../assets/services/2.png";
import pic3 from "../../../assets/services/3.png";
import pic4 from "../../../assets/services/4.png";
import pic5 from "../../../assets/services/5.png";
import pic6 from "../../../assets/services/6.png";
import arrow from "../../../assets/services/arrowforBtn.png";
import arrow2 from "../../../assets/services/arrowforBtn.png";
import arrow3 from "../../../assets/services/arrowforBtn.png";
import arrow4 from "../../../assets/services/arrowforBtn.png";
import arrow5 from "../../../assets/services/arrowforBtn.png";
import arrow6 from "../../../assets/services/arrowforBtn.png";
import about from "../../../assets/aboutImg.png";
import tag from "../../../assets/tagImg.png";
import { useLocation } from "react-router-dom";
const Service = () => {
  const path = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return (
    <>
      <section className="serviceBannSec padd80 pt-125">
        <div className="container">
          <div className="row g-4">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center">
              <div className="servBanText">
                <h1>
                  Discover a Range of <br /> Solutions Tailored to <br /> Your Needs
                </h1>
                <p>
                  Explore a diverse array of services meticulously crafted to address your unique requirements. From
                  innovative technology solutions to expert consultation, we offer a comprehensive suite of services
                  designed to propel your success. Whether you're seeking to optimize operations, enhance customer
                  experiences, or drive growth, we're here to guide you every step of the way.
                </p>
                <div className="reqCallback">
                  <h4 className="mb-0">Request Callback</h4>
                  <p className="mb-0">Fill in the form below and Get a free estimate.</p>
                  <form className="callbackFrom mt-3">
                    <div className="row g-3">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <input type="text" name="" placeholder="Your full name" />
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <input type="text" name="" placeholder="Contact Number" />
                        </div>
                      </div>
                      <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="emailIdBlock">
                          <input type="email" name="" placeholder="Enter your email" />
                          <button className="btn-primary">Enquiry Now</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="servBanImg">
                <img src={banner} alt="Service Laptop" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ourServices padd80">
        <div className="container">
          <div className="row g-4">
            <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center">
              <div className="servicesHeading">
                <div>
                  <h4 className="text-uppercase text-white fw-bold">Discover Our Best Services</h4>
                  <p className="text-white fw-normal mt-3">
                    Unlock unparalleled solutions tailored to your needs, guided by experts, and powered by cutting-edge
                    technology.
                  </p>
                </div>
                <button className="btn-primary mt-3">Get Started</button>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="servItem">
                <div className="icon">
                  <img src={pic1} alt="" className="img-fluid" />
                </div>
                <h4>Tailored Solutions </h4>
                <p>
                  Our services are not one-size-fits-all. We understand that every client has unique challenges and
                  objectives. That's why we take the time to listen, learn, and craft customized solutions that address
                  your specific needs and drive tangible results.
                </p>
                <a href="#/">
                  Learn More &nbsp;&nbsp;
                  <img src={arrow} className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="servItem">
                <div className="icon">
                  <img src={pic2} alt="" className="img-fluid" />
                </div>
                <h4>Expert Guidance</h4>
                <p>
                  With a team of seasoned professionals by your side, you can trust that you're in good hands. Our
                  experts bring years of experience and deep industry knowledge to the table, providing you with
                  personalized guidance and support every step of the way..
                </p>
                <a href="#/">
                  Learn More &nbsp;&nbsp;
                  <img src={arrow2} className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="servItem">
                <div className="icon">
                  <img src={pic3} alt="" className="img-fluid" />
                </div>
                <h4>Cutting-edge Technology</h4>
                <p>
                  Stay ahead of the curve with our cutting-edge technology solutions. We leverage the latest tools and
                  innovations to deliver superior results for our clients, ensuring that you always have access to the
                  most advanced solutions available..
                </p>
                <a href="#/">
                  Learn More &nbsp;&nbsp;
                  <img src={arrow3} className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="servItem">
                <div className="icon">
                  <img src={pic4} alt="" className="img-fluid" />
                </div>
                <h4>Proven Results</h4>
                <p>
                  Don't just take our word for it – see the results for yourself. We have a proven track record of
                  success, with countless satisfied clients who have achieved their goals with our help. Check out our
                  case studies to learn more about how we've helped businesses like yours succeed..
                </p>
                <a href="#/">
                  Learn More &nbsp;&nbsp;
                  <img src={arrow4} className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="servItem">
                <div className="icon">
                  <img src={pic5} alt="" className="img-fluid" />
                </div>
                <h4>Exceptional Customer Supportr</h4>
                <p>
                  Your satisfaction is our top priority. From the initial consultation to ongoing support, we're here to
                  ensure that your experience with us is nothing short of exceptional. Our dedicated customer support
                  team is always available to address any questions or concerns you may have, providing you with the
                  peace of mind you deserve..
                </p>
                <a href="#/">
                  Learn More &nbsp;&nbsp;
                  <img src={arrow5} className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="servItem">
                <div className="icon">
                  <img src={pic6} alt="" className="img-fluid" />
                </div>
                <h4>Continuous Improvement</h4>
                <p>
                  Our commitment to excellence doesn't end with the completion of a project. We believe in continuous
                  improvement, constantly striving to refine our processes, enhance our skills, and stay at the
                  forefront of industry trends. With us, you can trust that you're always getting the best of the best..
                </p>
                <a href="#/">
                  Learn More &nbsp;&nbsp;
                  <img src={arrow6} className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
          <div className="onMobile text-center">
            <button className="btn-primary mt-5">Get Started</button>
          </div>
        </div>
      </section>
      <section className="aboutUs padd80" id="six">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-9 col-md-11 col-sm-12 col-12">
              <div className="aboutImg text-end">
                <img src={about} className="img-fluid" />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 ps-xxl-5 ps-xl-5 ">
              <div className="aboutText">
                <h2>Why choose us</h2>
                <p>
                  KDandCompany is an information technology services-based Company that aims to deliver and develop IT
                  products and services on the newest and most innovative technology in the market. We combine modern
                  technology with a creative passion, We combine state-of-the. Lorem Ipsum is simply dummy text of the
                  printing and typesetting ndustry. Lorem Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
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
    </>
  );
};

export default Service;
