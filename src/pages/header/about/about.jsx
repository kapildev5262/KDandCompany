import React, { useEffect } from "react";
import banner from "../../../assets/about/banner.png";
import outStory from "../../../assets/about/outStory.png";
import mission from "../../../assets/about/mission1.png";
import mission2 from "../../../assets/about/misison2.png";
import review from "../../../assets/reviewImge.png";
import { useLocation } from "react-router-dom";

const About = () => {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return (
    <>
      <section className="aboutBanner pt-175">
        <div className="container">
          <div className="row g-4">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="bannLeftText">
                <h1>Discover Our Journey, Shape the Future</h1>

                <div className="btbImg d-flex align-items-end">
                  <button className="btn-primary">Get Started Now</button>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="bannerImg">
                <img src={banner} alt="About Men Image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="abt_ourStory padd80">
        <div className="container">
          <div className="row g-4">
            <div className="stryText col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pe-xxl-5 pe-xl-5">
              <h3 className="text-uppercase pageTitle1">Our Story</h3>
              <h4 className="text-uppercase my-4">Empowering Innovation</h4>
              <p>
                In our journey of empowering innovation, KDandCompany has embraced every challenge as an opportunity to
                grow and evolve. As a startup, we understand the importance of resilience and adaptability in the face
                of uncertainty. Our commitment to innovation drives us forward, propelling us to explore new horizons
                and push the boundaries of what's possible. Join us as we continue to pave the way for a future where
                technology transforms industries and empowers businesses to thrive.
              </p>
              <img src={outStory} alt="Our Story" />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ps-xxl-5 ps-xl-5 ps-lg-5">
              <div className="storyCounts mb-4">
                <div className="stryNum text-uppercase">01.</div>
                <div className="stryDet">
                  <div>Inception</div>
                  <p>
                    From a shared vision to revolutionize technology, KDandCompany emerged as a beacon of innovation,
                    founded on principles of excellence and integrity.
                  </p>
                </div>
              </div>
              <div className="storyCounts mb-4">
                <div className="stryNum text-uppercase">02.</div>
                <div className="stryDet">
                  <div>Nurturing Roots</div>
                  <p>
                    What began as a small team with big dreams has taken root, steadily growing and establishing our
                    presence in the industry. We embrace our startup spirit, fueling our ambition to make a meaningful
                    impact.
                  </p>
                </div>
              </div>
              <div className="storyCounts">
                <div className="stryNum text-uppercase">03.</div>
                <div className="stryDet">
                  <div>Unwavering Commitment</div>
                  <p>
                    Throughout our journey, we have remained steadfast in our commitment to delivering unparalleled
                    value to our clients. Our team of skilled professionals continues to push the boundaries of
                    innovation, ensuring that we always exceed expectations and drive positive change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="abtMainBg">
        <section className="abt_mission padd40">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pe-xxl-5 pe-xl-5 pe-lg-5">
                <h3 className="pageTitle2 text-uppercase">Our Mission</h3>
                <p>
                  At KDandCompany, our mission is to revolutionize the way businesses approach technology. We are
                  committed to delivering exceptional quality and service in everything we do. Through cutting-edge
                  technology and continuous learning and improvement, we strive to drive positive change in our
                  industry. With dedication and passion, we are building a brighter future for our clients and
                  communities.
                </p>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="missionImg">
                  <img src={mission} alt="Mission" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="abt_mission padd80">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="missionImg">
                  <img src={mission2} alt="Mission" />
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ps-xxl-5 ps-xl-5 ps-lg-5">
                <h3 className="pageTitle2 text-uppercase">Who We Are</h3>
                <p>
                  KDandCompany is a forward-thinking technology company dedicated to pushing the boundaries of
                  innovation. Founded on the principles of excellence and integrity, we strive to redefine the way
                  businesses leverage technology to achieve their goals. With a team of talented professionals and a
                  passion for solving complex challenges, we deliver tailored solutions that drive growth and success.
                  Our commitment to excellence, combined with our relentless pursuit of innovation, sets us apart as a
                  trusted partner for businesses seeking to thrive in today's dynamic landscape.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="abt_testi padd50">
        <div className="container">
          <div className="heading text-center">
            <label className="subTitle">Testimonials</label>
            <h4>We let our customer do the talking</h4>
          </div>
          <div className="col-xxl-9 col-xl-9 col-lg-10 col-md-12 col-sm-12 col-12 mx-auto">
            <div className="innerTesti mt-5 section-padding owl-carousel" style={{ display: "block" }}>
              <div className="reviewItems">
                <div className="reviewImg">
                  <img src={review} className="img-fluid" alt="Reviews" />
                </div>
                <div className="reviewText">
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
              <div className="reviewItems">
                <div className="reviewImg">
                  <img src={review} className="img-fluid" alt="Reviews" />
                </div>
                <div className="reviewText">
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
              <div className="reviewItems">
                <div className="reviewImg">
                  <img src={review} className="img-fluid" alt="Reviews" />
                </div>
                <div className="reviewText">
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
            </div>
          </div>
        </div>
      </section>
      <section className="ctaForm padd100 pb-0">
        <div className="container">
          <div className="innerCTAForm">
            <div className="row align-items-center g-4">
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                <h3 className="pageTitle2 mb-4">What Makes us Different?</h3>
                <p className="mb-0 text-white">
                  At KDandCompany, we differentiate ourselves from other companies through our unwavering commitment to
                  innovation, quality, and customer satisfaction. Unlike our competitors, we prioritize understanding
                  our clients' unique needs and challenges, allowing us to deliver personalized solutions that truly
                  make a difference. Our team of experts goes above and beyond to stay ahead of industry trends and
                  technology advancements, ensuring that our clients receive cutting-edge solutions that drive tangible
                  results. With KDandCompany, you can trust that you're partnering with a company that is dedicated to
                  your success and invested in your future.
                </p>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                <div className="formCTA">
                  <form action="" method="">
                    <ul>
                      <li>
                        <label>Name:</label>
                        <input type="text" name="" placeholder="Full" />
                      </li>
                      <li>
                        <label>Contact:</label>
                        <input type="text" name="" placeholder="Contact Number" />
                      </li>
                      <li>
                        <label>Email:</label>
                        <input type="text" name="" placeholder="Your Email Address" />
                      </li>
                      <li>
                        <button className="btn btn-primary">Submit</button>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
