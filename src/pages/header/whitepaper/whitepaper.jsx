import React from 'react'
import { Link } from 'react-router-dom'
import white from '../../../assets/whitepapers.jpg'
import white1 from '../../../assets/Whitepaper1.png'
import white2 from '../../../assets/Whitepaper2.png'
import white3 from '../../../assets/Whitepaper3.png'
import white4 from '../../../assets/Whitepaper4.png'
import white5 from '../../../assets/Whitepaper5.png'
import white6 from '../../../assets/Whitepaper6.png'
import white7 from '../../../assets/Whitepaper7.png'
import white8 from '../../../assets/Whitepaper8.png'

const Whitepaper = () => {
  return (
    <section>
            <div className="background" style={{backgroundImage:`url(${white})`}}>
                <h1 className="newheading heading_query">Insights</h1>
                <p className="para para_query">The only limit to our realization of tomorrow is our doubts of today</p>
            </div>
            <div className="sec-div">
                    <div className="offer"><h1>White Papers</h1></div>
             
              <div className="containers_4">
                <div className="items_4">
                    <div className="icons_4" style={{backgroundImage:`url(${white1})`}}></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                <div className="items_4">
                    <div className="icons_4" style={{backgroundImage:`url(${white2})`}}></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                <div className="items_4">
                    <div className="icons_4" style={{backgroundImage:`url(${white3})`}}></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                <div className="items_4">
                    <div className="icons_4" style={{backgroundImage:`url(${white4})`}}></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                <div className="items_4">
                    <div className="icons_4" style={{backgroundImage:`url(${white5})`}}></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                <div className="items_4">
                    <div className="icons_4" style={{backgroundImage:`url(${white6})`}}></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                <div className="items_4">
                    <div className="icons_4" style={{backgroundImage:`url(${white7})`}}></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                <div className="items_4">
                    <div className="icons_4" style={{backgroundImage:`url(${white8})`}}></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                {/* <div className="items_4">
                    <div className="icons_4" style="background-image: url(assets/images/Whitepaper4.png);"></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                <div className="items_4">
                    <div className="icons_4" style="background-image: url(assets/images/Whitepaper1.png);"></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                <div className="items_4">
                    <div className="icons_4" style="background-image: url(assets/images/Whitepaper5.png);"></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                <div className="items_4">
                    <div className="icons_4" style="background-image: url(assets/images/Whitepaper6.png);"></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                <div className="items_4">
                    <div className="icons_4" style="background-image: url(assets/images/Whitepaper7.png);"></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                <div className="items_4">
                    <div className="icons_4" style="background-image: url(assets/images/Whitepaper8.png);"></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                <div className="items_4">
                    <div className="icons_4" style="background-image: url(assets/images/Whitepaper2.png);"></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                <div className="items_4">
                    <div className="icons_4" style="background-image: url(assets/images/Whitepaper3.png);"></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                <div className="items_4">
                    <div className="icons_4" style="background-image: url(assets/images/Whitepaper4.png);"></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                <div className="items_4">
                    <div className="icons_4" style="background-image: url(assets/images/Whitepaper2.png);"></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                <div className="items_4">
                    <div className="icons_4" style="background-image: url(assets/images/Whitepaper3.png);"></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div>
                <div className="items_4">
                    <div className="icons_4" style="background-image: url(assets/images/Whitepaper4.png);"></div>
                    <div className="anchor"><a>Whitepaper</a></div>                   
                    <div className="h5-para_4"><p>Best Practices for Making Remote Development Successful</p></div>
                </div> */}
            </div>
            <div className="load-btn">
                <a className="loadmore-btn" href="#">Load more</a>
            </div>
            </div>
            <div className="third_div">
                <div className="expert_talks">
                    <h3>We work on the latest technologies for all our Digital Engineering services</h3>
                    <Link className="our_expert" to={"/contact"}>Talk To Our Experts</Link>
                </div>
                
            </div>
            

        </section>
  )
}

export default Whitepaper