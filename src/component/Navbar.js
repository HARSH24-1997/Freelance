import React from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { AiFillSkype } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import "../css/Navbar.css"

function Navbar() {
    return (
        <>
          <nav class="shadow-sm navbar navbar-expand-md fixed-top" style={{backgroundColor:"white",boxShadow:"0 8px 6px -6px #999"}} id="main_navbar" >
    <div class="container" style={{color:"black"}}> 
        <b>Discover</b>
      <ul class="navbar-nav d-flex flex-row ml-auto order-xs-11 order-md-12">
        <li class="nav-item ml-2"> <a class="nav-link" href="#">
           <FaFacebook color="black"/>
          </a> </li>
        <li class="nav-item ml-2"> <a class="nav-link" href="#">
            <FaInstagram color="black"/>
          </a> </li>
        <li class="nav-item ml-2"> <a class="nav-link" href="#">
            <FaLinkedinIn color="black"/>
          </a> </li>
      </ul>
      <button style={{color:"black"}} class="navbar-toggler navbar-toggler-right border-0 order-xs-12"  type="button" data-toggle="collapse" data-target="#navbar4" >
      <MdMenu color="black"/>
      </button>
      <div class="collapse navbar-collapse" id="navbar4">
        <ul class="navbar-nav ml-auto order-md-11">
          {/* <li class="nav-item"><Link activeClass="active" className="nav-link" to="HomePage" spy={true} smooth={true} duration={500} >Home</Link> </li> */}
          <li class="nav-item"><Link activeClass="active" className="nav-link" to="Services" spy={true} smooth={true} duration={500} >Services</Link> </li>
          <li class="nav-item"><Link activeClass="active" className="nav-link" to="Faq" spy={true} smooth={true} duration={500} >Faq</Link> </li>
          <li class="nav-item"><Link activeClass="active" className="nav-link" to="Contact" spy={true} smooth={true} duration={500} >Contact</Link> </li>
        </ul>
      </div>
    </div>
  </nav>  
        </>
    )
}

export default Navbar
