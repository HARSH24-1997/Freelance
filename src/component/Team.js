import React from 'react'
import '../css/Team.css'
import Mk from '../Images/MK.png'
import SM from '../Images/SM.png'


function Team() {
    return (
        <div class="py-5 team" style={{borderTop:"solid",borderColor:"#ccc"}} >
        <div class="container">
          <div class="row">
            <div class="text-center col-md-12">
              <h1 style={{color:"#627680"}} >Team</h1>
              {/* <p class="mb-4 lead">agnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 p-3 col-12">
              {/* <img class="card-img-top  rounded-circle"  src="https://static.pingendo.com/img-placeholder-1.svg" alt="Card image cap"/> */}
              <img class="img-fluid d-block mb-3 mx-auto  rounded-circle " src={Mk} alt="Card image cap" width="200"/>
              <div class="card-body " style={{backgroundColor:'white',textAlign: 'center'}}>
                <h4> <b>Mukesh Tiwary</b> </h4>
                <p class="mb-0">Co-Founder</p>
              </div>
            </div>
            <div class="col-lg-6 p-3 col-12">
              {/* <img class="card-img-top  rounded-circle"  src="https://static.pingendo.com/img-placeholder-1.svg" alt="Card image cap"/> */}
              <img class="img-fluid d-block mb-3 mx-auto  rounded-circle " src={SM} alt="Card image cap" width="200"/>
              <div class="card-body " style={{backgroundColor:'white',textAlign: 'center'}}>
                <h4> <b>Samir Hudda</b> </h4>
                <p class="mb-0">Co-Founder</p>
              </div>
            </div>
          </div>
          {/* <div class="col-lg-6 col-md-6 p-4"> 
          <img class="img-fluid d-block mb-3 mx-auto " src="https://static.pingendo.com/img-placeholder-1.svg" alt="Card image cap" width="200"/>
          <h4> <b>J. W. Goethe</b> </h4>
          <p class="mb-0">CEO and founder</p>
        </div>
        <div class="col-lg-6 col-md-6 p-4"> <img class="img-fluid d-block mb-3 mx-auto rounded-circle" src="https://static.pingendo.com/img-placeholder-2.svg" alt="Card image cap" width="200"/>
          <h4> <b>G. W. John</b> </h4>
          <p class="mb-0">Co-founder</p>
        </div> */}
        </div>
      </div>
    )
}

export default Team
