import React from 'react'

function Portfolio() {
    return (
        <div clas="container py-5">
            <div class="container py-5">
            <div class="row">
            <div class="text-center col-md-12">
              <h1 style={{color:"#627680"}} >Team</h1>
              <p class="mb-4 lead">agnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            </div>
            </div>
            <ul class="nav nav-pills d-flex flex-row justify-content-center" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">All</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">APP</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Web</a>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="container">
                    <div class="row">
        <div class="col-md-4 p-3" data-pingendo-transient=""> <img class="img-fluid d-block" src="https://static.pingendo.com/cover-bubble-light.svg"/> </div>
        <div class="col-md-4 p-3"> <img class="img-fluid d-block" src="https://static.pingendo.com/cover-moon.svg"/> </div>
        <div class="col-md-4 p-3"> <img class="img-fluid d-block" src="https://static.pingendo.com/cover-bubble-dark.svg"/> </div>
        </div>
        <div class="row">
        <div class="col-md-4 p-3" data-pingendo-transient=""> <img class="img-fluid d-block" src="https://static.pingendo.com/cover-bubble-light.svg"/> </div>
        <div class="col-md-4 p-3"> <img class="img-fluid d-block" src="https://static.pingendo.com/cover-moon.svg"/> </div>
        <div class="col-md-4 p-3"> <img class="img-fluid d-block" src="https://static.pingendo.com/cover-bubble-dark.svg"/> </div>
        </div>
        <div class="row">
        <div class="col-md-4 p-3" data-pingendo-transient=""> <img class="img-fluid d-block" src="https://static.pingendo.com/cover-bubble-light.svg"/> </div>
        <div class="col-md-4 p-3"> <img class="img-fluid d-block" src="https://static.pingendo.com/cover-moon.svg"/> </div>
        <div class="col-md-4 p-3"> <img class="img-fluid d-block" src="https://static.pingendo.com/cover-bubble-dark.svg"/> </div>
        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div class="container">
                    <div class="row">
        <div class="col-md-4 p-3" data-pingendo-transient=""> <img class="img-fluid d-block" src="https://static.pingendo.com/cover-bubble-light.svg"/> </div>
        <div class="col-md-4 p-3"> <img class="img-fluid d-block" src="https://static.pingendo.com/cover-moon.svg"/> </div>
        <div class="col-md-4 p-3"> <img class="img-fluid d-block" src="https://static.pingendo.com/cover-bubble-dark.svg"/> </div>
        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div class="container">
                    <div class="row">
        <div class="col-md-4 p-3" data-pingendo-transient=""> <img class="img-fluid d-block" src="https://static.pingendo.com/cover-bubble-light.svg"/> </div>
        <div class="col-md-4 p-3"> <img class="img-fluid d-block" src="https://static.pingendo.com/cover-moon.svg"/> </div>
        <div class="col-md-4 p-3"> <img class="img-fluid d-block" src="https://static.pingendo.com/cover-bubble-dark.svg"/> </div>
        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
