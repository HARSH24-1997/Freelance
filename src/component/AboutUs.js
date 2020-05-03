import React from 'react'
import Back from '../Images/about.jpg'


function AboutUs() {
    return (
        <div class="py-5" >
        <div class="container bg-light py-5" >
          <div class="row">
            <div class="col-md-6 d-flex flex-column align-items-end justify-content-around"> <img class="img-fluid d-block" src={Back}/> </div>
            <div class="px-md-5 p-3 col-md-6 d-flex flex-column justify-content-center">
              <h2 class="text-body">Learn more about us</h2>
              <p class="font-italic text-body lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <ul>
                <li><i class="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i class="icofont-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li class=""><i class="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperd</li>
              </ul>
              <p class="lead"> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate tera noden carma palorp mades tera. </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AboutUs
