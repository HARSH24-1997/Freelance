import React from 'react'
import {RiBasketballLine} from 'react-icons/ri';
import {IoIosSpeedometer} from 'react-icons/io';
import {GiEarthAmerica} from 'react-icons/gi';


function Services() {
    return (
        <div class="py-5 bg-light" >
        <div class="container">
          <div class="row">
            <div class="text-center col-md-12">
              <h1>How It Works?</h1>
              <p class="lead">It's As Simple As 4 Steps</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 p-3">
              <div class="card bg-light">
                <div class="card-body p-4 text-center" style={{backgroundColor:"white"}}>
                  <IoIosSpeedometer size="3rem" color="green"/>
                  <h4 class="title"><a href="" class="text-dark">Sign Up</a></h4>
                  <p class="description">To sign up for Discover, please verify your corporate email account and activate your account</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 p-3">
              <div class="card bg-light">
                <div class="card-body p-4 text-center" style={{backgroundColor:'white'}}>
                  <GiEarthAmerica size="3rem" color="lightblue"/>
                  <h4 class="title"><a href="" class="text-dark">Add Candidate</a></h4>
                  <p class="description">To register your newly offered candidate, sign in to Discover and navigate to 'Add Offer'.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 p-3">
              <div class="card bg-light">
                <div class="card-body p-4 text-center" style={{backgroundColor:'white'}}>
                <RiBasketballLine size="3rem" color="pink"/>
                  <h4 class="title"><a href="" class="text-dark">Scanning</a></h4>
                  <p class="description">It scans whether the candidate has commitments to other companies within timeframe as your offer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 p-3">
              <div class="card bg-light">
                <div class="card-body p-4 text-center" style={{backgroundColor:"white"}}>
                  <IoIosSpeedometer size="3rem" color="green"/>
                  <h4 class="title"><a href="" class="text-dark">Alerts</a></h4>
                  <p class="description">Get a notification, on a confirmed event of conflicting commitment made by the candidate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Services
