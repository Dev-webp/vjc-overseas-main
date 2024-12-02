import React from 'react'
import Hero from "@/app/about/files/hero";
import Two from "@/app/about/files/two";
import CTA from "@/app/about/files/cta";
import Three from "@/app/about/files/three";
import Four from "@/app/about/files/four";
import Price from "@/app/components/Price";
import Footer from "@/app/about/files/Footer";

const page = () => {
  return (
    <>
    <Hero/>
    <Two/>
    <CTA/>
    <Four/>
    <Price/>
    <Three/>
    
    <Footer />
    </>
  )
}

export default page