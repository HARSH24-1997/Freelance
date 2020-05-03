import React from 'react'
import Fade from 'react-reveal/Fade';

function Contact() {
    return (
        <div class="py-5 bg-light" style={{borderTop:"solid",borderColor:"#ccc"}}>
        <div class="container-fluid">
          <div class="row">
            <div class="mx-auto text-center col-lg-5">
              <h2 class="pb-5" style={{color:"#627680"}}>Contact Us</h2>
            </div>
          </div>
          <div class="row d-flex justify-content-around">
            <div class="col-lg-5 d-flex align-items-stretch border " style={{backgroundColor:'white'}}>
              <div class="container mx-auto py-3">
                <div class="address">
                  <h5><b>Location:</b></h5>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
                <div class="email">
                  <h5><b>Email:</b></h5>
                  <p>info@example.com</p>
                </div>
                <div class="phone">
                  <h5><b>Call:</b></h5>
                  <p>+1 5589 55488 55s</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{border:'0', width: '100%', height: '290px'}}></iframe>
              </div>
            </div>
            <div class="order-1 order-md-2 col-lg-6 border px-4 py-5" style={{backgroundColor:'white'}}>
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
