import React from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { AiFillSkype } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Navbar() {
    return (
        <>
          <nav class="shadow-sm navbar navbar-expand-md fixed-top" style={{backgroundColor:"white",boxShadow:"0 8px 6px -6px #999"}} id="main_navbar" >
    <div class="container"> <a class="navbar-brand text-body" href="#">
        <b> Logo</b>
      </a>
      <ul class="navbar-nav d-flex flex-row ml-auto order-xs-11 order-md-12">
        <li class="nav-item"> <a class="nav-link" href="#">
           <FaFacebook color="black"/>
          </a> </li>
        <li class="nav-item"> <a class="nav-link" href="#">
            <FaInstagram color="black"/>
          </a> </li>
        <li class="nav-item"> <a class="nav-link" href="#">
            <FaLinkedinIn color="black"/>
          </a> </li>
      </ul>
      <button class="navbar-toggler navbar-toggler-right border-0 order-xs-12" type="button" data-toggle="collapse" data-target="#navbar4" >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar4">
        <ul class="navbar-nav ml-auto order-md-11">
          <li class="nav-item"><Link activeClass="active" className="nav-link" to="HomePage" spy={true} smooth={true} duration={500} >Home</Link> </li>
          <li class="dropdown"> <a class="nav-link dropdown-toggle" href="#" aria-expanded="false" aria-haspopup="true" data-toggle="dropdown" id="navbarDropdownMenuLink" role="button" data-offset="10,20" > About</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Action 1</a></li>
              <li><a class="dropdown-item" href="#">Action 2</a></li>
              {/* <li class="dropright">
                <a class="dropdown-item dropdown-toggle" href="#" aria-expanded="false" aria-haspopup="true" data-toggle="dropdown" id="navbarDropdown2" tabindex="-1">Next level</a>
                <ul class="dropdown-menu show" aria-labelledby="navbarDropdown2">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Action 1</a></li>
                  <li><a class="dropdown-item" href="#">Action 2</a></li>
                </ul>
              </li> */}
            </ul>
          </li>
          <li class="nav-item"><Link activeClass="active" className="nav-link" to="Services" spy={true} smooth={true} duration={500} >Services</Link> </li>
          <li class="nav-item"><Link activeClass="active" className="nav-link" to="Portfolio" spy={true} smooth={true} duration={500} >Portfolio</Link> </li>
          <li class="nav-item"><Link activeClass="active" className="nav-link" to="Pricing" spy={true} smooth={true} duration={500} >Pricing</Link> </li>
          <li class="nav-item"><Link activeClass="active" className="nav-link" to="Contact" spy={true} smooth={true} duration={500} >Contact</Link> </li>
        </ul>
      </div>
    </div>
  </nav>  
        </>
    )
}

export default Navbar
