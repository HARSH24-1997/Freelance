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
              <h2 class="text-body">Why ThePeopleOrder ?</h2>
              <p class=" text-body lead"> 
                <b>Low Interview Turnout ? </b><br></br>
                    According to a report 28% of
                job applicants had ghosted a
                prospective employer over
                the past year. That’s up from
                18% in 2019, despite a global
                pandemic wreaking havoc on
                the job market.
              </p>
              {/* <ul class="list-unstyled">
                <li><IoIosCheckmarkCircleOutline size="1.5rem" color="green"/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><IoIosCheckmarkCircleOutline size="1.5rem" color="green"/> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li class=""><IoIosCheckmarkCircleOutline size="1.5rem" color="green"/> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperd</li>
              </ul> */}
              <p class="lead"> 
              <b>Offer Shopping - A New Norm? </b><br></br>

              Offer trading’ is rampant as
candidates hold multiple offers
and have parallel
conversations with several
employers at the same time to
move the offer value
incrementally. </p>
            <p class="lead">
            <b>Offer to Join Ratio - Declining? </b><br></br>

            Offer drop ratio across six
sectors — automotive,
consulting, consumer
business, healthcare, IT and
pharmaceuticals has risen to
nearly 35% in the financial
year ended March 31, 2022, as
against 27.06% in FY21
                                
                            </p>
            </div>

          </div>
        </div>
      </div>
    )
}

export default AboutUs
