import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

function Faq() {
    return (
      <div style={{borderTop:"solid",borderColor:"#ccc"}}>
        <div class="container p-5" >
    <div class="text-center">
      <h3 class="my-3 pb-4" style={{color:"#627680"}}>Frequently Asked Questions</h3>
    </div>
    <div class="accordion" id="faq-list">
      <ul class="list-unstyled">
        <li class="py-1">
          <a data-toggle="collapse" class="text-muted display" href="#faq1" aria-expanded="true" style={{fontSize: '2.5vh'}}><IoIosArrowForward color="#4f70ce" size=".7rem"/><b>Non consectetur a erat nam at lectus urna duis?</b>
          </a>
          <div id="faq1" class="multi-collapse collapse show" data-parent="#faq-list">
            <p class="lead">Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. </p>
          </div>
        </li>
        <li class="py-1">
          <a data-toggle="collapse" href="#faq2" class="text-decoration-none text-muted" style={{fontSize: '2.5vh'}} aria-expanded="true"><IoIosArrowForward color="#4f70ce" size=".7rem"/> <b>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</b>
          </a>
          <div id="faq2" class="multi-collapse collapse" data-parent="#faq-list">
            <p class="lead"> Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui. </p>
          </div>
        </li>
        <li class="py-1">
          <a data-toggle="collapse" href="#faq3" class="text-muted collapsed" aria-expanded="false" style={{fontSize: '2.5vh'}}><IoIosArrowForward color="#4f70ce" size=".7rem"/><b>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</b> <i class="icofont-simple-up"></i></a>
          <div id="faq3" class="multi-collapse collapse" data-parent="#faq-list">
            <p class="lead"> Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis </p>
          </div>
        </li>
        <li class="py-1">
          <a data-toggle="collapse" href="#faq4" class="text-muted text-decoration-none collapsed" aria-expanded="false" style={{fontSize: '2.5vh'}}><IoIosArrowForward color="#4f70ce" size=".7rem"/><b>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</b></a>
          <div id="faq4" class="multi-collapse collapse" data-parent="#faq-list" >
            <p class="lead"> Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui. </p>
          </div>
        </li>
        <li class="py-1">
          <a data-toggle="collapse" href="#faq5" class="text-decoration-none text-muted collapsed" aria-expanded="false" style={{fontSize: '2.5vh'}}><IoIosArrowForward color="#4f70ce" size=".7rem"/><b>Tempus quam pellentesque nec nam aliquam sem et tortor consequat? </b></a>
          <div id="faq5" class="multi-collapse collapse" data-parent="#faq-list">
            <p class="lead"> Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  </div>
    )
}

export default Faq
