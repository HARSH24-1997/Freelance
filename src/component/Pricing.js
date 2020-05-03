import React from 'react'

function Pricing() {
    return (
        <div class="py-5 bg-light" style={{borderTop:"solid",borderColor:"#ccc"}} >
    <div class="container">
      <div class="row">
        <div class="text-center mx-auto col-md-12">
          <h1 style={{color:"#627680"}}>Pricing</h1>
          <p class="lead text-center"><b>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</b></p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 p-3">
          <div class="card bg-light text-center" style={{border:"solid",borderColor:"#ccc"}}>
            <div class="card-body p-4 py-5" style={{backgroundColor:"white"}}>
              <h3>Free</h3>
              <h2><sup>$</sup>0<span> / month</span></h2>
              <ul class="list-unstyled my-5">
                <li class="mb-1">Aida dere</li>
                <li class="mb-1">Nec feugiat nisl</li>
                <li class="mb-1">Nulla at volutpat dola</li>
                <li class="mb-1"><del class="text-muted">Pharetra massa</del></li>
                <li class="mb-1"><del class="text-muted">Massa ultricies mi</del></li>
              </ul>
              <a class="btn btn-secondary" style={{backgroundColor:"#4f70ce"}} href="#">Buy Now</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 p-3">
          <div class="card bg-light text-center" style={{border:"solid",borderColor:"#ccc"}}>
            <div class="card-body p-4 py-5" style={{backgroundColor:"#4f70ce"}}>
              <h3 style={{color:"white"}}>Business</h3>
              <h2 style={{color:"white"}}><sup>$</sup>19<span> / month</span></h2>
              <ul class="list-unstyled my-5">
                <li class="mb-1" style={{color:"white"}}>Aida dere</li>
                <li class="mb-1" style={{color:"white"}}>Nec feugiat nisl</li>
                <li class="mb-1" style={{color:"white"}}>Nulla at volutpat dola</li>
                <li class="mb-1" style={{color:"white"}}>Pharetra massa</li>
                <li class="mb-1" style={{color:"white"}}><del class="">Massa ultricies mi</del></li>
              </ul>
              <a class="btn btn-secondary" style={{backgroundColor:"white",color:"#4f70ce"}} href="#">Buy Now</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 p-3">
          <div class="card bg-light text-center" style={{border:"solid",borderColor:"#ccc"}}>
            <div class="card-body p-4 py-5" style={{backgroundColor:"white"}}>
              <h3>Developer</h3>
              <h2><sup>$</sup>29<span> / month</span></h2>
              <ul class="list-unstyled my-5">
                <li class="mb-1">Aida dere</li>
                <li class="mb-1">Nec feugiat nisl</li>
                <li class="mb-1">Nulla at volutpat dola</li>
                <li class="mb-1">Pharetra massa</li>
                <li class="mb-1">Massa ultricies mi</li>
              </ul>
              <a class="btn btn-secondary" style={{backgroundColor:"#4f70ce"}} href="#">Buy Now</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 p-3">
          <div class="card bg-light text-center" style={{border:"solid",borderColor:"#ccc"}}>
            <div class="card-body p-4 py-5" style={{backgroundColor:"white"}}>
              <h3>Ultimate</h3>
              <h2 class="text-nowrap"><sup>$</sup>49&nbsp;<span>/ month</span></h2>
              <ul class="list-unstyled my-5">
                <li class="mb-1">Aida dere</li>
                <li class="mb-1">Nec feugiat nisl</li>
                <li class="mb-1">Nulla at volutpat dola</li>
                <li class="mb-1">Pharetra massa</li>
                <li class="mb-1">Massa ultricies mi</li>
              </ul>
              <a class="btn btn-secondary" style={{backgroundColor:"#4f70ce"}} href="#">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Pricing
