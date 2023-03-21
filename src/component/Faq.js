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
        <li class="py-1">
          <a data-toggle="collapse" href="#faq4" class="text-muted collapsed" aria-expanded="false" style={{fontSize: '2.5vh'}}><IoIosArrowForward color="#4f70ce" size=".7rem"/><b>What information is a recruiter expected to provide while posting an offer in Discover?</b> <i class="icofont-simple-up"></i></a>
          <div id="faq4" class="multi-collapse collapse" data-parent="#faq-list">
            <p class="lead">
            Recruiters are expected to provide 3 data points: PAN Card number of the candidate, Date of
Acceptance of the Offer, Agreed Date of Joining, Final Joining Outcome. Additionally, the recruiter may
provide notes for their internal reference.
										 </p>
          </div>
        </li>
        <li class="py-1">
          <a data-toggle="collapse" href="#faq5" class="text-muted collapsed" aria-expanded="false" style={{fontSize: '2.5vh'}}><IoIosArrowForward color="#4f70ce" size=".7rem"/><b>What information can we see about other companies that have made an offer to the candidate?</b> <i class="icofont-simple-up"></i></a>
          <div id="faq5" class="multi-collapse collapse" data-parent="#faq-list">
            <p class="lead">
            You can see if the candidate has accepted offers from other companies or not. You won’t see the name
of the companies that made the candidate an offer. You can see other offers’ acceptance date, and
agreed date of joining										 </p>
          </div>
        </li>
        <li class="py-1">
          <a data-toggle="collapse" href="#faq6" class="text-muted collapsed" aria-expanded="false" style={{fontSize: '2.5vh'}}><IoIosArrowForward color="#4f70ce" size=".7rem"/><b>How will we know if the candidate who has accepted our offer, also picked up another offer from
another company?</b> <i class="icofont-simple-up"></i></a>
          <div id="faq6" class="multi-collapse collapse" data-parent="#faq-list">
            <p class="lead">
            You will get an email notification from Discover, as soon as another company’s recruiter adds
an offer to the same candidate PAN number										 </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  </div>
    )
}

export default Faq
