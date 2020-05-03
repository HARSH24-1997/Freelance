import React from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Contact from './component/Contact';
import Faq from './component/Faq';
import Pricing from './component/Pricing';
import Clients from './component/Clients';
import Team from './component/Team';
import Services from './component/Services';
import Action from './component/Action';
import Testimonial from './component/Testimonial';
import Tab from './component/Tab';
import AboutUs from './component/AboutUs';
import HomePage from './component/Homepage';
import Portfolio from './component/Portfolio';

function App() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <AboutUs/>
    {/* <Tab/>
    <Services/>
    {/* <Portfolio/> */}
    {/* <Action/> */}
    {/* <Testimonial/> */}
    <Team/>
    <Clients/>
    <Pricing/>
    <Faq/>
    <Contact/>
     <Footer/> 
    </>
  );
}

export default App;
