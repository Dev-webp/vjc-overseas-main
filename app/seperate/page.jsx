import React from 'react';
import HeroSection from '../components/Hero';
import ServiceDec from "./ServicesDec";
import About from "../components/About";
import CountrySlider from './Countries';
import Scroll from "@/app/components/Scroll";
import ScrollChangeImage from './ScrollTriggeer';
import ScrollPerRev from "@/app/components/ScrollPerRev/Index";
import Swap from "../components/Swap";
import Steps from "@/app/components/NewSteps";
const page = () => {
  return (
    <>
        <HeroSection/>
        {/* <ServiceDec/>
        <ScrollChangeImage/>
        <About /> */}
        <Steps/>
        {/* <Scroll/> */}
       
        {/* <ScrollPerRev/> */}
        
        {/* <Swap/> */}
        {/* <CountrySlider/> */}
        
    </>
  )
}

export default page