import React from 'react'
import Fade from 'react-reveal/Fade';

function Contact() {
    return (
        <div class="py-5 bg-light" style={{borderTop:"solid",borderColor:"#ccc"}}>
        <div class="container-fluid">
          <div class="row">
            <div class="mx-auto text-center col-lg-5">
              <h2 class="pb-5" style={{color:"#627680"}}>Ask Your Queries ?</h2>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
         
            <div class="order-1 order-md-2 col-lg-6 border px-4" style={{backgroundColor:'white'}}>
              <form class="d-flex align-items-stretch flex-column py-5">
                <div class="form-row">
                  <div class="form-group col-md-6"> <input type="text" class="form-control form-control-lg" id="form27" placeholder="Name"/> </div>
                  <div class="form-group col-md-6"> <input type="email" class="form-control form-control-lg" id="form28" placeholder="Email"/> </div>
                </div>
                <div class="form-group"> <input type="text" class="form-control form-control-lg" id="form29" placeholder="Subject"/> </div>
                <div class="form-group"> <textarea class="form-control form-control-lg" id="form30" rows="3" placeholder="Your message" style={{marginTop: '0px', marginBottom: '0px', height: "161px"}}></textarea> </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary btn-lg">Send</button></div>
              </form>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Contact
