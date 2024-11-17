import React, { useEffect, useState } from "react";
import blogs from "../../../assets/Blogs.jpg";
import { API_BLOG } from "../../../services/development";
import { Link, useLocation, useParams } from "react-router-dom";
import facebookicon from "../../../assets/facebook-icon.png";
import xicon from "../../../assets/x-icon.png";
import linkedin from "../../../assets/linkedin-icon.png";
import email from "../../../assets/email-icon.png";
import glassdoor from "../../../assets/glassdoor-icon.png";
import axios from "axios";

const blogscontent = () => {
  const path = useLocation();
  const { id } = useParams();
  console.log("id:", id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let resp = await axios.get(`${API_BLOG.BASE_URL}/blog/${id}`);
      console.log("resp___", resp?.data);
      setData(resp?.data?.blogData);
    } catch (err) {
      console.log(`error in get by id api ${err.message}`);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section>
        <div className="background" style={{ backgroundImage: `url(${data?.imageUrl})` }}>
          <h1 className="newheading heading_query">Blogs</h1>
          <p className="para para_query">The Internet lets you express and create</p>
        </div>
        <div className="sec-div" id="sec-div3">
          <div className="filter-div">
            <div className="filter-box">
              <div className="dropdown">
                <button className="dropdown-toggle" id="dropdown_blog">
                  Category <span className="arrow"></span>
                </button>
                <div className="dropdown-menu-2">
                  <a href="#" data-filter="Adobe">
                    Adobe
                  </a>
                  <a href="#" data-filter="Android">
                    Android
                  </a>
                  <a href="#" data-filter="DevOps">
                    DevOps
                  </a>
                  <a href="#" data-filter="Wagering">
                    Wagering
                  </a>
                  <a href="#" data-filter="Msp">
                    Msp
                  </a>
                  <a href="#" data-filter="Drupal">
                    Drupal
                  </a>
                  <a href="#" data-filter="IOS">
                    IOS
                  </a>
                  <a href="#" data-filter="Project Management">
                    Project Management
                  </a>
                </div>
              </div>

              <div className="dropdown">
                <button className="dropdown-toggle" id="dropdown_blog2">
                  Sort By <span className="arrow2"></span>
                </button>
                <div className="dropdown-menu-2">
                  <a href="#" data-sort="newest">
                    Newest
                  </a>
                  <a href="#" data-sort="oldest">
                    Oldest
                  </a>
                  <a href="#" data-sort="popular">
                    Popular
                  </a>
                </div>
              </div>

              <div className="search-box">
                <input type="text" placeholder="Search blog" id="searchInput" />
                <button className="search-btn">
                  <i className="fa fa-search"></i>
                </button>
              </div>

              <button className="refresh-btn">
                <i className="fa fa-refresh"></i>
              </button>
              <a href="contact.html">
                <button className="subscribe-btn">Subscribe Blogs</button>
              </a>
            </div>
          </div>

          <div className="container9">
            <div className="content-9">
              <h1>{data?.heading}</h1>
              <span className="category9">{data?.category}</span>

              <div className="meta">
                <span className="date">08 / AUG / 2024</span>
                <span className="author">
                  BY <a href="#">PRIYA ROY CHOWDHURY</a>
                </span>
                <span className="comments">
                  <a href="#">0 COMMENTS</a>
                </span>
              </div>

              <div className="share-this">Share this blog</div>
              <div className="share">
                <a href="#">
                  <img src={facebookicon} alt="Facebook" />
                </a>
                <a href="#">
                  <img src={xicon} alt="X (formerly Twitter)" />
                </a>
                <a href="#">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
                <a href="#">
                  <img src={email} alt="Email" />
                </a>
              </div>

              <div className="article6">
                <h4>Introduction</h4>
                <p>{data?.content}</p>

                {/* <h4>Overview</h4>
                        <p>Drupal’s routing system is based on Symfony’s routing system. It has all abilities that Symfony routing system have and can have extended functionality as well. Drupal routing uses same syntax as Symfony’s.</p>
                        <h4>What is a Route</h4>
                        <p>A Route in Drupal is not a URL but a configuration that have it’s own set of instructions to display content for a mentioned URL. You can apply access checking and parameter upcasting with custom routes. In Drupal, you can define a route via .routing.yml file, which should be kept in the root folder of the respective module.</p>
                        <h4>What is route_callbacks?</h4>
                        <p>Dynamic routing in Drupal allows developers to define their own routes dynamically. These dynamic routes are implemented through a method, which is then added as a ‘route_callbacks‘ entry in the modulename.routing.yml file.</p> */}
              </div>
            </div>

            <aside className="sidebar">
              <div className="author-info">
                <img src="author-image.png" alt="Author" />
                <p className="author-name">Priya Roy Chowdhury</p>
              </div>

              <div className="related-posts">
                <h3>YOU MAY ALSO LIKE</h3>
                <ul>
                  <li>
                    <a href="#">1. Advantages of Drupal 8 over Other CMS</a>
                  </li>
                  <li>
                    <a href="#">2. How to Give Back to Drupal Community</a>
                  </li>
                  <li>
                    <a href="#">3. How to change theme by Role in Drupal 8.x</a>
                  </li>
                </ul>
              </div>

              <div className="social-links">
                <h3>FOLLOW US ON</h3>
                <a href="#">
                  <img src={facebookicon} alt="Facebook" />
                </a>
                <a href="#">
                  <img src={xicon} alt="X (formerly Twitter)" />
                </a>
                <a href="#">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
                <a href="#">
                  <img src={glassdoor} alt="Glassdoor" />
                </a>
              </div>
            </aside>
          </div>
          <div className="third_div">
            <div className="expert_talks">
              <h3>We work on the latest technologies for all our Digital Engineering services</h3>
              <Link className="our_expert" to={"/contact"}>
                Talk To Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default blogscontent;
