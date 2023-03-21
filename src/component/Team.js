import React from 'react'
import '../css/Team.css'


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
            <div class="col-lg-4 p-3 col-12">
              <img class="card-img-top" src="https://static.pingendo.com/img-placeholder-1.svg" alt="Card image cap"/>
              <div class="card-body mx-2" style={{position:'relative',bottom:'1.5vh',backgroundColor:'white'}}>
                <h5 class="card-title"> <b>Johann Goethe</b> </h5>
                <p class="card-text">CEO &amp; Founder</p>
              </div>
            </div>
            <div class="col-lg-4 p-3 col-12">
              <img class="card-img-top" src="https://static.pingendo.com/img-placeholder-1.svg" alt="Card image cap"/>
              <div class="card-body mx-2"  style={{position:'relative',bottom:'1.5vh',backgroundColor:'white'}}>
                <h5 class="card-title"> <b>Johann Goethe</b> </h5>
                <p class="card-text">CEO &amp; Founder</p>
              </div>
            </div>
            <div class="col-lg-4 p-3 col-12">
              <img class="card-img-top" src="https://static.pingendo.com/img-placeholder-1.svg" alt="Card image cap"/>
              <div class="card-body mx-2" style={{position:'relative',bottom:'1.5vh',backgroundColor:'white'}}>
                <h5 class="card-title"> <b>Johann Goethe</b> </h5>
                <p class="card-text">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Team
