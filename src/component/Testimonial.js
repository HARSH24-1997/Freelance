import React from 'react';
import Slider from "react-slick";
import Best from '../content/Best.js'
import { AiFillRightCircle } from 'react-icons/ai';
import {AiFillLeftCircle} from 'react-icons/ai';


function Testimonial() {

    return (
         <div  class="p-5">
         <div className="container text-center py-2">
             <h3 class="py-2">Testimonials</h3>
             <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</p>
             </div>
         <Slider
          dots={true}
          arrows={true}
          infinite={true}
          slidesToShow={3}
          slidesToScroll={1}
          autoplaySpeed={3000}
         >

        {Best.map((props,index)=>(
             <div class="col p-3">
             <div class="card">
               <div class="card-body p-4" >
              <p class="mb-3">{props.Msg}</p>
                 <div class="row">
                   <div class="col-lg-2 col-3"> <img class="img-fluid d-block rounded-circle" src="https://static.pingendo.com/img-placeholder-2.svg"/> </div>
                   <div class="col-lg-10 col-9 d-flex align-items-center">
                     <p class="my-2">{props.Name}<i>{props.Job}</i> </p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        ))}

        </Slider>
        </div>
    )
}

export default Testimonial