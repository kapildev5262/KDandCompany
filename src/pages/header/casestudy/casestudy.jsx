import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from '../../../assets/Casestudy.jpg'
import caseimg from '../../../assets/img1.png'

const Casestudy = () => {
    const navigate=useNavigate()
    const [openFilter,setOpenFilter]=useState(false);
    const handleFilter=()=>{
        setOpenFilter(pre=>!pre)
    }

    const [openService,setOpenService]=useState(false);
    const handleService=()=>{
        setOpenService(pre=>!pre)
    };

    const [openIndustries,setOpenIndustries]=useState(false);
    const handleIndustries=()=>{
        setOpenIndustries(pre=>!pre)
    };
    const [openGeo,setOpenGeo]=useState(false);
    const handleGeo=()=>{
        setOpenGeo(pre=>!pre)
    }

  
  return (
    <section>
            <div className="background" style={{backgroundImage:`url(${image})`}}>
                <h1 className="newheading heading_query">Accelerated digital transformation journey for Merck</h1>
                <p className="para_2 para_query"> The Impact of Personalized Marketing on Sales</p>
            </div>
            <div className="sec-div" id="sec-div2">
                <div className="offer"><h1>Case Studies</h1></div>
                <div className="filter_box">
                    <div className='filter-1' style={{width:'100%'}}>

                <div className="search-bar">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search" className="search_input" id="input-box" autocomplete="off"/>
                    <span className="close-icon">×</span>
                    <div className="result"></div>
                    
                </div>
                </div>

                <div className='filter-2'>

                <div className="filter_bar">
                    <p>Filter by:</p>
                </div>
                <div  className="filter_dropdown" onMouseEnter={()=>setOpenService(true)}
                        onMouseLeave={()=>setOpenService(false)}>
                    <span className="Services">Services</span>
                    <i className="fa-solid fa-caret-down"></i>
             
                {
                    openService &&
                    <ul className="list">
                        <li  data-target="blockchain">Blockchain</li>
                        <li  data-target="digital-marketing">Digital Marketing</li>
                        <li  data-target="ai-development">AI Development</li>
                        <li  data-target="web-apps-development">Web Apps Development</li>
                        <li  data-target="mobile-apps-development">Mobile Apps Development</li>
                        <li  data-target="salesforce-development">Salesforce Development</li>
                        <li  data-target="cloud-devops">Cloud & DevOps</li>
                        <li  data-target="services">Services</li>
                    </ul>
                }
                </div>
                
                <div className="filter_dropdown"onMouseEnter={()=>setOpenIndustries(true)}
                    onMouseLeave={()=>setOpenIndustries(false)}>
                
                    <span className="Services">Industries</span>
                    <i className="fa-solid fa-caret-down"></i>
                    {
                    openIndustries &&
                    <ul className="list">
                        <li  data-target="financial-services">Financial Services</li>
                        <li  data-target="education">Education</li>
                        <li  data-target="health-care">Health Care</li>
                        <li  data-target="hospitality">Hospitality</li>
                        <li  data-target="tour-travel">Tour & Travel</li>
                        <li  data-target="retail">Retail</li>
                        <li  data-target="industries">Industries</li>
                    </ul>
                    }
                </div>
            
                <div className="filter_dropdown" onMouseEnter={()=>setOpenGeo(true)}
                    onMouseLeave={()=>setOpenGeo(false)}>
                
                    <span className="Services">Geo</span>
                    <i className="fa-solid fa-caret-down"></i>
                    
                    {openGeo &&
                    <ul className="list">
                        <li  data-target="all">All</li>
                        <li  data-target="americas">Americas</li>
                        <li  data-target="asia">Asia Pacific and Middke East</li>
                        <li  data-target="europe">Europe and Africa</li>
                        <li  data-target="geo">Geo</li>
                    </ul>
                    }
                </div> 
                </div>                  
                </div>

                <div className="filter_box2">
                <div className='filter-3'>

                
                <div onClick={handleFilter}className="filter_dropdown2">
                    <span className="Services">Filter Case Studies</span>
                    <i className="fa-solid fa-caret-down"></i>
                    </div>  
                </div>
                </div>
                    {
                        openFilter &&
                        <>
                            <div className="filter_box2">
                <div className='filter-3'>

                <div onClick={handleService} className="filter_dropdown2">
                    <span className="Services">Services</span>
                    <i className="fa-solid fa-caret-down"></i>
            
                    {openService && 
                    <>
                    <ul className='list'>
                        <li  data-target="blockchain">Blockchain</li>
                        <li  data-target="digital-marketing">Digital Marketing</li>
                        <li  data-target="ai-development">AI Development</li>
                        <li  data-target="web-apps-development">Web Apps Development</li>
                        <li  data-target="mobile-apps-development">Mobile Apps Development</li>
                        <li  data-target="salesforce-development">Salesforce Development</li>
                        <li  data-target="cloud-devops">Cloud & DevOps</li>
                        <li  data-target="services">Services</li>
                    </ul>
                    </>}
                    </div>  
                    </div>
                </div>

                <div className="filter_box2">
                <div className='filter-3'>

                
                <div onClick={handleIndustries} className="filter_dropdown2">
                    <span className="Services">Industries</span>
                    <i className="fa-solid fa-caret-down"></i>
                    {
                    openIndustries &&
                    <ul className="list">
                        <li  data-target="financial-services">Financial Services</li>
                        <li  data-target="education">Education</li>
                        <li  data-target="health-care">Health Care</li>
                        <li  data-target="hospitality">Hospitality</li>
                        <li  data-target="tour-travel">Tour & Travel</li>
                        <li  data-target="retail">Retail</li>
                        <li  data-target="industries">Industries</li>
                    </ul>
                    }
                    </div>  
            
                </div>
                </div>

                <div className="filter_box2">
                <div className='filter-3'>

                
                <div onClick={handleGeo} className="filter_dropdown2">
                    <span className="Services">Geo</span>
                    <i className="fa-solid fa-caret-down"></i>
                    {openGeo &&
                    <ul className="list">
                        <li  data-target="all">All</li>
                        <li  data-target="americas">Americas</li>
                        <li  data-target="asia">Asia Pacific and Middke East</li>
                        <li  data-target="europe">Europe and Africa</li>
                        <li  data-target="geo">Geo</li>
                    </ul>
                    }
                    </div>  
                </div>
            
                </div>
                        </>
                    }
            
         

          <div className="containers_2" >
          <div class="items_2" onClick={()=>navigate(`/streamline`)}>
                        <div className="icons_3" style= {{backgroundImage:`url(${caseimg})`}} ></div>
                        <div className="h5_1"><h5>Modernizing business operations for a major South American bank</h5></div>
                        <div className="h5-para_1"><p>Accelerating performance and enhancing customer-centricity with experience transformation</p></div>
                    </div>
          
          </div>
          {/* <div className="pagination">
            <a href="#" className="prev">&laquo; Previous</a>
            <span className="page-number" data-page="1">1</span>
            <span className="page-number" data-page="2">2</span>
            <span className="page-number" data-page="3">3</span>
            <span className="page-number" data-page="4">4</span>
            <span className="page-number" data-page="5">5</span>
            <span className="page-number" data-page="6">6</span>
            <span className="page-number" data-page="7">7</span>
            <span className="page-number" data-page="8">8</span>
            <span className="page-number" data-page="9">9</span>
            <span className="page-number" data-page="">...</span>
            <a href="#" className="next">Next &raquo;</a>
        </div> */}
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

export default Casestudy