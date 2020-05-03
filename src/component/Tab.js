import React from 'react'
import F1 from '../Images/features-1.png';
import F2 from '../Images/features-2.png';
import F3 from '../Images/features-3.png';
import F4 from '../Images/features-4.png';



function Tab() {
    return (
      <div class="container">
        <div class="row d-flex justify-content-around">
          <div class="col-lg-6 mt-2 mb-tg-0 order-2 order-lg-1">
        <div class="nav flex-column nav-tabs" id="v-tabs-tab" role="tablist" aria-orientation="vertical">
          <a class="nav-link active text-muted border" id="v-tabs-home-tab" data-toggle="pill" href="#v-tabs-home" role="tab" aria-controls="v-tabs-home" aria-selected="true"><h4>Modi sit est</h4>
                  <p class="text-muted">Quis excepturi porro totam sint earum quo nulla perspiciatis eius.</p></a>
          <a class="nav-link text-muted border" id="v-tabs-profile-tab" data-toggle="pill" href="#v-tabs-profile" role="tab" aria-controls="v-tabs-profile" aria-selected="false"> <h4>Unde praesentium sed</h4>
                  <p class="text-muted">Voluptas vel esse repudiandae quo excepturi.</p></a>
          <a class="nav-link text-muted border" id="v-tabs-messages-tab" data-toggle="pill" href="#v-tabs-messages" role="tab" aria-controls="v-tabs-messages" aria-selected="false"><h4>Pariatur explicabo vel</h4>
                  <p class="text-muted">Velit veniam ipsa sit nihil blanditiis mollitia natus.</p></a>
          <a class="nav-link text-muted border" id="v-tabs-settings-tab" data-toggle="pill" href="#v-tabs-settings" role="tab" aria-controls="v-tabs-settings" aria-selected="false"><h4>Nostrum qui quasi</h4>
                  <p class="text-muted">Ratione hic sapiente nostrum doloremque illum nulla praesentium id</p></a>
        </div>
        </div>
        
        <div class="col-lg-6 order-1 order-lg-2 d-flex justify-content-center">
        <div class="tab-content" id="v-tabs-tabContent">
          <div class="tab-pane fade show active" id="v-tabs-home" role="tabpanel" aria-labelledby="v-tabs-home-tab"><img src={F1} alt="" class="img-fluid"/></div>
          <div class="tab-pane fade" id="v-tabs-profile" role="tabpanel" aria-labelledby="v-tabs-profile-tab"><img src={F2} alt="" class="img-fluid"/></div>
          <div class="tab-pane fade" id="v-tabs-messages" role="tabpanel" aria-labelledby="v-tabs-messages-tab"><img src={F3} alt="" class="img-fluid"/></div>
          <div class="tab-pane fade" id="v-tabs-settings" role="tabpanel" aria-labelledby="v-tabs-settings-tab"><img src={F4} alt="" class="img-fluid"/></div>
        </div>
        </div>
      </div>
      </div>
    )
}

export default Tab
