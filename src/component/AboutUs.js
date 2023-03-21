import React from 'react'
import Back from '../Images/about.jpg'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io';
import Fade from 'react-reveal/Fade';

function AboutUs() {
    return (
        <div class="py-5" >
        <div class="container bg-light py-5" >
          <div class="row">
            <div class="col-md-6 d-flex flex-column align-items-end justify-content-around"> <img class="img-fluid d-block" src={Back}/> </div>
            <div class="px-md-5 p-3 col-md-6 d-flex flex-column justify-content-center">
              <h2 class="text-body">Why Discover ?</h2>
              <p class="font-italic text-body lead"> 
                                Many startups as well as established companies lose millions of dollars every year because a candidate who graciously accepted the job offer declined it a few days after acceptance or 24 hours before joining.
                                </p>
              {/* <ul class="list-unstyled">
                <li><IoIosCheckmarkCircleOutline size="1.5rem" color="green"/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><IoIosCheckmarkCircleOutline size="1.5rem" color="green"/> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li class=""><IoIosCheckmarkCircleOutline size="1.5rem" color="green"/> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperd</li>
              </ul> */}
              <p class="lead"> 
                                Plan, find, assess, select, appoint, and hire are all essential parts of a typical recruitment cycle. Joining is the final step, comprising a mere 5% of the time and effort. The remaining 95%+ of effort is wasted after just a quick phone call from the offered candidate few hours before joining - <i style={{color:"black"}}>‘Sorry I cannot join your company’</i>
 </p>
            <p class="lead">
                                For all recruiters, we have developed an OfferDecline.com platform where they can share information about candidates who declined an offer/s so that they could run a check before they make an offer to them and prevent them from taking Recruiters for a ride.
                                
                            </p>
            </div>

          </div>
        </div>
      </div>
    )
}

export default AboutUs
