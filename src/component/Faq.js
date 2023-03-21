import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

function Faq() {
    return (
      <div style={{borderTop:"solid",borderColor:"#ccc"}}>
        <div class="container p-5" >
    <div class="text-center">
      <h3 class="my-3 pb-4">Frequently Asked Questions</h3>
    </div>
    <div class="accordion" id="faq-list">
      <ul class="list-unstyled">
        <li class="py-1">
          <a data-toggle="collapse" class="text-muted display" href="#faq1" aria-expanded="false" style={{fontSize: '2.5vh'}}><IoIosArrowForward color="#4f70ce" size=".7rem"/><b>Is Discover A Social Media Platform ?</b>
          </a>
          <div id="faq1" class="multi-collapse collapse" data-parent="#faq-list">
            <p class="lead"> No. Discover is an enterprise SAAS platform, its a  consent based, private and verified recruiters' network</p>
          </div>
        </li>
        <li class="py-1">
          <a data-toggle="collapse" href="#faq2" class="text-decoration-none text-muted" style={{fontSize: '2.5vh'}} aria-expanded="false"><IoIosArrowForward color="#4f70ce" size=".7rem"/> <b>Is the information shared on Discover kept private and confidential?</b>
          </a>
          <div id="faq2" class="multi-collapse collapse" data-parent="#faq-list">
            <p class="lead"> Yes. Discover doesn’t store any personally identifiable information in plain
text format. PII data always remains in a one-way-hash format.
										</p>
          </div>
        </li>
        <li class="py-1">
          <a data-toggle="collapse" href="#faq3" class="text-muted collapsed" aria-expanded="false" style={{fontSize: '2.5vh'}}><IoIosArrowForward color="#4f70ce" size=".7rem"/><b>How ethical is it to collaborate and track candidate commitments on Discover?</b> <i class="icofont-simple-up"></i></a>
          <div id="faq3" class="multi-collapse collapse" data-parent="#faq-list">
            <p class="lead">
											Every recruiter tracks candidate’s commitment independently, Discover is a way to collaborate on this tracking anonymously, so that it benefits everyone including candidates to make decisions with clarity.Glassdoor collates data from employees and ex-employees on salaries, culture etc. on the companies they work(ed) with. Discover works on the other side.
										 </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  </div>
    )
}

export default Faq
