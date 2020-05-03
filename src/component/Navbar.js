import React from 'react'

function Navbar() {
    return (
        <>
          <nav class="navbar navbar-expand-md navbar-light fixed-top" id="main_navbar" >
    <div class="container"> <a class="navbar-brand text-body" href="#">
        <b> Logo</b>
      </a>
      <ul class="navbar-nav d-flex flex-row ml-auto order-xs-11 order-md-12">
        <li class="nav-item"> <a class="nav-link" href="#">
            <i class="fa fa-twitter fa-fw"></i>
          </a> </li>
        <li class="nav-item"> <a class="nav-link" href="#">
            <i class="fa fa-facebook fa-fw"></i>
          </a> </li>
        <li class="nav-item"> <a class="nav-link" href="#">
            <i class="fa fa-slack fa-fw"></i>
          </a> </li>
      </ul>
      <button class="navbar-toggler navbar-toggler-right border-0 order-xs-12" type="button" data-toggle="collapse" data-target="#navbar4" >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar4">
        <ul class="navbar-nav ml-auto order-md-11">
          <li class="nav-item"> <a class="nav-link" href="#">Home</a> </li>
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
          <li class="nav-item"> <a class="nav-link" href="#">Services</a> </li>
          <li class="nav-item"> <a class="nav-link" href="#">Portfolio</a> </li>
          <li class="nav-item"> <a class="nav-link" href="#">Pricing</a> </li>
          <li class="nav-item"> <a class="nav-link" href="#">Contact</a> </li>
        </ul>
      </div>
    </div>
  </nav>  
        </>
    )
}

export default Navbar
