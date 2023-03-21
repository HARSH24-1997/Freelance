import React from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Contact from './component/Contact';
import Faq from './component/Faq';
import Services from './component/Services';
// import Action from './component/Action';
import Testimonial from './component/Testimonial';
import Tab from './component/Tab';
import AboutUs from './component/AboutUs';
import HomePage from './component/Homepage';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function App() {
  return (
    <>
      <Navbar />
      <Element name="HomePage" className="element" >
        <HomePage />
      </Element>
      <Element name="AboutUs" className="element" >
        <AboutUs />
      </Element>
      {/* <Tab /> */}
      <Element name="Services" className="element" >
        <Services />
      </Element>
      <Element name="Faq" className="element" >
        <Faq />
      </Element>
      {/* <Testimonial/> */}
      {/* <Action /> */}
      <Team />
      <Clients />
      <Element name="Contact" className="element" >
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default App;
