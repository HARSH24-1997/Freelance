import React from 'react'
import Back from '../Images/AboutUS.jpg'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import Fade from 'react-reveal/Fade';

function AboutUs2() {
  return (
    <div class="py-5" >
      <div class="container bg-light py-5" >
        <div class="row">
          <div class="col-md-6 d-flex flex-column align-items-end justify-content-around"> <img class="img-fluid d-block" src={Back} /> </div>
          <div class="px-md-5 p-3 col-md-6 d-flex flex-column justify-content-center">
            <h2 class="text-body">About Us</h2>
            <p class="font-italic text-body lead">
              The People Order aims to be at the forefront in bringing transformational
              change in HR service industry by providing distinct services, technology
              enabled product, data driven insights & collaborative platform.
            </p>
            <p class="lead">
              Our philosophy is to forge partnership models amongst plethora of
              stakeholders to dwell on HR challenges, co-create solutions and provide
              customized services. </p>
            <p class="lead">
              Our team is driven by enthusiasm, empathy and earnestness to serve our
              clients, candidates, consultants and community.
            </p>
            <p class="lead">
            <b> Our Services :</b>
            </p>
                <ul >
                <li class="lead"> Recruitment & Executive Search.</li>
                <li class="lead"> Discovered - Improvising Offer to Join Ratio.</li>
                <li class="lead"> HR Market Place - On Demand HR Services</li>
                <li class="lead"> Ek Maidaan - Mobilize equitable job opportunities</li>

              </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutUs2
