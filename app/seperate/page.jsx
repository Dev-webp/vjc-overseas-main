import React from 'react';
import HeroSection from '../components/Hero';
import ServiceDec from "./ServicesDec";
import About from "../components/About";
import CountrySlider from './Countries';
import ScrollChangeImage from './ScrollTriggeer';
import Swap from "../components/Swap";
const page = () => {
  return (
    <>
        <HeroSection/>
        <ServiceDec/>
        <About />
        <ScrollChangeImage/>
        {/* <Scroll/> */}
        
        <Swap/>
        <CountrySlider/>
        
    </>
  )
}

export default page