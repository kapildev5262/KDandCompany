import React, { useEffect } from 'react'
import laptop from '../../../assets/work/laptop.png'
import multipad from '../../../assets/multipad.jpeg'
import fitelo from '../../../assets/fitelo.jpeg'
import bitgit from '../../../assets/bitgit.jpeg'
import bestServ from '../../../assets/work/bestServ.png'
import arrowSingle from '../../../assets/work/arrowSingle.svg'
import { useLocation } from 'react-router-dom'
const Work = () => {
    const path=useLocation()
    useEffect (()=>{
        window.scrollTo(0,0)
    },[path])
  return (
    <>
    <section className="aboutBanner workBanner padd80 pt-175">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="bannLeftText">
                            <h1>
                                Delve Into Our Cutting-Edge Solutions
                            </h1>
                            
                            <div className="btbImg d-flex align-items-end">
                                <button className="btn-primary">Get Started Now</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="bannerImg">
                            <img src={laptop} alt="Laptop Pic" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="abt_insights workProject padd80">
        <div className="container">
            <div className="insightHead d-flex align-items-center justify-content-between">
                <h3 className="pageTitle2">Best Project <sub>Explore more of our best projects.</sub></h3>
                <button className="btn-primary">View More</button>
            </div>
            <div className="workProjects  mt-3 section-padding owl-carousel">
                <div className="insightItem">
                    <div className="insightImg">
                        <img src={multipad} alt="Insight 1" />
                        <div className="arrowLink">
                            <a href="#/">
                                <i className="fa-solid fa-arrow-up-long"></i>
                            </a>
                        </div>
                    </div>
                    <div className="teamDesc projectDescSM text-start">
                        <h4 className="text-capitalize">MultiPad</h4>
                        <p className="mb-0 text-unset">MultiPad is the only multi-chain launchpad that's committed to community, offering reasonable
                            and guaranteed IDO allocations.
                            Buy $MPAD</p>
                    </div>
                </div>
                <div className="insightItem">
                    <div className="insightImg">
                        <img src={fitelo} alt="Insight 1" />
                        <div className="arrowLink">
                            <a href="#/">
                                <i className="fa-solid fa-arrow-up-long"></i>
                            </a>
                        </div>
                    </div>
                    <div className="teamDesc projectDescSM text-start">
                        <h4 className="text-capitalize">Fitelo</h4>
                        <p className="mb-0 text-unset">Achieve long-term wellness through simple, powerful, and holistic changes in your nutrition and eating habits</p>
                    </div>
                </div>
                <div className="insightItem">
                    <div className="insightImg">
                        <img src={bitgit} alt="Insight 1" />
                        <div className="arrowLink">
                            <a href="#/">
                                <i className="fa-solid fa-arrow-up-long"></i>
                            </a>
                        </div>
                    </div>
               <div className="teamDesc projectDescSM text-start">
                        <h4 className="text-capitalize">BitGift</h4>
                        <p className="mb-0 text-unset">GIFT/PURCHASE CRYPTO INSTANTLY
                            BitGift® is a simple, secure platform to
                            send Bitcoin and other cryptocurrencies
                            as a gift.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <section className="abtMainBg">
            <section className="abt_insights padd80">
                <div className="container">
                    <div className="insightHead d-flex align-items-center justify-content-between">
                        <h3 className="pageTitle2">Best Services <sub>This is part of our services that can give you satisfaction.</sub></h3>
                        <button className="btn-primary">View More</button>
                    </div>
                    <div className="row g-4 mt-3 align-items-center">
                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                            <div className="bestServImg">
                                <img src={bestServ} className="img-fluid" alt="Best Services" />
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                            <div className="servLists">
                                <div className="item item1">
                                    <div className="ltext">
                                        <div className="smalltext">01</div>
                                        <div className="sTitleText">
                                            <h2>Tailored Solutions</h2>
                                            <p className="mb-0">Our services are not one-size-fits-all. We understand that every client has unique challenges and objectives. That's why we take the time to listen, learn, and craft customized solutions that address your specific needs and drive tangible results.</p>
                                        </div>
                                    </div>
                                    <div className="rBtn">
                                        <a href="#/">
                                            <img src={arrowSingle} className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item item2">
                                    <div className="ltext">
                                        <div className="smalltext">02</div>
                                        <div className="sTitleText">
                                            <h2>Expert Guidance</h2>
                                            <p className="mb-0">With a team of seasoned professionals by your side, you can trust that you're in good hands. Our experts bring years of experience and deep industry knowledge to the table, providing you with personalized guidance and support every step of the way.</p>
                                        </div>
                                    </div>
                                    <div className="rBtn">
                                        <a href="#/">
                                            <img src={arrowSingle} className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item item3">
                                    <div className="ltext">
                                        <div className="smalltext">03</div>
                                        <div className="sTitleText">
                                            <h2>Cutting-edge Technology</h2>
                                            <p className="mb-0">Stay ahead of the curve with our cutting-edge technology solutions. We leverage the latest tools and innovations to deliver superior results for our clients, ensuring that you always have access to the most advanced solutions available.</p>
                                        </div>
                                    </div>
                                    <div className="rBtn">
                                        <a href="#/">
                                            <img src={arrowSingle} className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                                <div className="item item4">
                                    <div className="ltext">
                                        <div className="smalltext">04</div>
                                        <div className="sTitleText">
                                            <h2>Proven Results</h2>
                                            <p className="mb-0">Don't just take our word for it – see the results for yourself. We have a proven track record of success, with countless satisfied clients who have achieved their goals with our help. Check out our case studies to learn more about how we've helped businesses like yours succeed.</p>
                                        </div>
                                    </div>
                                    <div className="rBtn">
                                        <a href="#/">
                                            <img src={arrowSingle} className="img-fluid" />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
                
            
            
        </section>
    </>
  )
}

export default Work