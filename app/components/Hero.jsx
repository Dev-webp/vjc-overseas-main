"use client"
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import { containerVariants, desVariants } from "../animation";  // titleVariants
import Form from "@/app/components/Form";

export default function HeroSection() {
  return (
    <>
     <section className="py-4 lg:py-0 mt-2 md:mt-0 lg:mt-0 bg-gradient-to-bl from-white to-white">

      <motion.div
        variants={""}
        initial="offscreen"
        animate="onscreen"
        className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10"
      >
      {/* Parallax Background with Overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(/airplane.png)',
        }}
        animate={{
          y: ['0%', '5%'],  
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 10,
            ease: "easeInOut",
          },
        }}
        variants={containerVariants(0.4)}
      >
        
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      </motion.div>

      {/* Left Section (Text) */}
      <motion.div
        variants={containerVariants(0.4)}
        className="flex flex-col space-y-8 lg:space-y-6 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto mb-0 lg:mb-0 relative z-10 ml-0 lg:ml-10 mt-20"
      >
        <img
            src="/1.gif" // Change to your image path
            alt="Work in Germany"
            className="w-[28rem] lg:w-[70rem] h-auto mt-0" // Adjust margin to align with curved text
          />
  

          <img
            src="/award.png" // Change to your image path
            alt="Work in Germany"
            className="w-[27rem] h-[7rem]" // Adjust margin to align with curved text
          />

        {/* <motion.h1
          variants={titleVariants}
          className="font-semibold uppercase leading-tight text-center text-teal-950 text-4xl sm:text-5xl lg:text-[3.50rem]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-orange-700 to-orange-300">
          Your Dreams Are Our Blueprint for Success!
          </span>
        </motion.h1> */}
         
        <motion.p
          variants={desVariants}
          className="flex text-gray-200 tracking-tight text-center text-xs lg:text-base md:font-medium max-w-xs mx-auto lg:max-w-none"
        >
          Being India&apos;s Most Trusted Brand (2022 & 2024) and the Global Icon Award (2023), we do not just walk on the success trails; we make them. Your international aspirations are guided and managed at VJC Overseas with our track record and absolute commitment.
        </motion.p>
        {/* <Text/> */}
        <motion.div
          variants={containerVariants(0.6)}
          className="hidden sm:flex flex-col sm:flex-row items-center justify-center lg:justify-center gap-4 w-full"
        >
          <Link
            href="#"
            className="px-6 items-center h-12 rounded-lg bg-orange-600 text-white duration-300 ease-linear flex justify-center w-[15rem] lg:w-full transform hover:scale-105 transition-transform"
          >
            Get started
          </Link>
          <Link
            href="#"
            className="px-6 items-center h-12 rounded-lg text-orange-700 border border-gray-100 bg-gray-100 duration-300 ease-linear flex justify-center w-[15rem] lg:w-full transform hover:scale-105 transition-transform"
          >
            Book a call
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Section (Image and Form) */}
      <motion.div
        variants={containerVariants(0.8)}
        initial="offscreen"
        animate="onscreen"
        className="flex aspect-square lg:aspect-auto w-auto h-[20rem] md:h-[40rem] lg:h-[40rem] relative mt-0 tablet:mt-0 md:mt-0 lg:mt-0 z-10 ml-0 md:ml-0 lg:ml-0 tablet:ml-20"
      >

        <div className='mt-0 lg:mt-24 ml-6 lg:ml-24'>
        <Form/>
        </div>


      </motion.div>
    </motion.div>
  </section>
    </>
  );
}