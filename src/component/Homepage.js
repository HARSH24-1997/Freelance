import React from 'react'
import back from '../Images/hero-img.png';
import "../css/Hero.css"


function Homepage() {
    return (
        <div class="py-2" id="hero">
           <div class="container p-5">
      <div class="row">
        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
          <div>
            <h1>We design digital products that help grow businesses</h1>
            <h2>We are team of talanted designers making websites with Bootstrap</h2>
            <a href="#about" class="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
          <img src={back} class="img-fluid" alt=""/>
        </div>
      </div>
    </div> 
        </div>
    )
}

export default Homepage
