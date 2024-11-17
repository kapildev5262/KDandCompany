import React, { useEffect, useState } from "react";
import blogs from "../../../assets/Blogs.jpg";
import blogsimg from "../../../assets/Whitepaper1.png";
import { API_BLOG } from "../../../services/development";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import parse, { domToReact } from "html-react-parser";
const Blogs = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const navigate = useNavigate();

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };
  const [blog, setBlog] = useState([]);
  const blogsData = async () => {
    try {
      let res = await axios.get(`${API_BLOG.BASE_URL}${API_BLOG.GET}`);

      setBlog(res?.data);
    } catch (err) {
      console.log("Error while fetching api", err);
    }
  };
  useEffect(() => {
    blogsData();
  }, [blog]);

  const options = {
    replace: (domNode) => {
      if (domNode.name === "p") {
        // Custom rendering for <p> tag
        return <p style={{ color: "" }}>{domToReact(domNode.children)}</p>;
      }
      if (domNode.name === "strong") {
        // Custom rendering for <strong> tag
        return <h2 style={{ fontWeight: "bold", color: "" }}>{domToReact(domNode.children)}</h2>;
      }
    },
  };
  return (
    <section>
      <div className="background" style={{ backgroundImage: `url(${blogs})` }}>
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
            <Link to={"/contact"}>
              <button className="subscribe-btn">Subscribe Blogs</button>
            </Link>
          </div>
        </div>

        <div className="containers_3">
          {blog?.slice(0, visibleCount).map((e, i) => (
            <div className="items_3" key={i} onClick={() => navigate(`/blogscontent/${e?._id}`)}>
              <div className="blog_img">
                <img src={e?.thumbnail} className="thumbnail" alt="" />
              </div>
              <a>{e?.category}</a>
              <div className="h5_2">
                <h5>
                  {e?.heading?.split(" ").slice(0, 10).join(" ") + (e?.heading?.split(" ").length > 10 ? "..." : "")}
                </h5>
              </div>
              <div className="h5-para_2">
                <p>
                  {parse(
                    e?.content?.split(" ").slice(0, 15).join(" ") + (e?.content?.split(" ").length > 15 ? "..." : ""),
                    options
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < blog.length && (
          <div className="load-btn">
            <Link className="loadmore-btn" to="" onClick={handleLoadMore}>
              Load more
            </Link>
          </div>
        )}
      </div>
      <div className="third_div">
        <div className="expert_talks">
          <h3>We work on the latest technologies for all our Digital Engineering services</h3>
          <Link className="our_expert" to={"/contact"}>
            Talk To Our Experts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
