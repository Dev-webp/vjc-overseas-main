"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const sliderData = [
    {
      services: [
        { text: "Apply For Canada Permanent Residency", link: "/canada-pr-visa" },
        { text: "Apply For Canada Study Visa", link: "/canada-study-visa" },
      ],
      backgroundImage: "/canada.webp",
      title: "Canada",
      gradient: "bg-gradient-to-r from-red-300 to-white", // Canada color gradient
    },
    {
      services: [
        { text: "Apply For Australia Permanent Residency Visa", link: "/australia-pr-visa" },
        { text: "Apply For Australia Study Visa", link: "/australia-study-visa" },
      ],
      backgroundImage: "/australia.jpg",
      title: "Australia",
      gradient: "bg-gradient-to-r from-green-500 to-yellow-500", // Australia color gradient
    },
    {
      services: [
        { text: "Apply For Germany Opportunity Card Visa", link: "/germany-opportunity-card-visa" },
        { text: "Apply For Germany Study Visa", link: "/germany-study-visa" },
      ],
      backgroundImage: "/germany.jpg",
      title: "Germany",
      gradient: "bg-gradient-to-r from-white to-yellow-500", // Germany color gradient
    },
    {
      services: [{ text: "Apply For UK Study Visa", link: "/uk-study-visa" }],
      backgroundImage: "/uk-flag.png",
      title: "United Kingdom",
      gradient: "bg-gradient-to-r from-blue-500 to-white", // UK color gradient
    },
    {
      services: [{ text: "Apply For Malta Study Visa", link: "/malta-study-visa" }],
      backgroundImage: "/malta.png",
      title: "Malta",
      gradient: "bg-gradient-to-r from-red-700 to-white", // Malta color gradient
    },
  ];
  

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);

  return (
    <div
      className="relative w-[20rem] lg:w-[28rem] h-[8rem] max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ x: "50%" }}  // Start from right
          animate={{ x: 0 }}       // Slide in
          exit={{ x: "-50%" }}    // Slide out to the left
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${sliderData[currentSlide].backgroundImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Content */}
      <div className="relative z-10 text-center px-4 py-0 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={sliderData[currentSlide].title}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h2
  className={`text-xl lg:text-3xl font-extrabold uppercase text-transparent bg-clip-text ${sliderData[currentSlide].gradient}`}
>
  {sliderData[currentSlide].title}
</h2>

            <ul className="space-y-2">
              {sliderData[currentSlide].services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.link}
                    className="text-sm lg:text-base text-white hover:text-orange-500 underline transition"
                  >
                    {service.text}
                  </Link>
                </li>
              ))}
            </ul>
            {/* <button className="mt-4 px-4 py-2 bg-orange-500 text-white font-bold uppercase rounded-full shadow-md hover:bg-orange-600 transition">
              Learn More
            </button> */}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition z-10"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition z-10"
      >
        &gt;
      </button>

      {/* Progress Indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {sliderData.map((_, index) => (
          <motion.span
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition ${
              index === currentSlide ? "bg-orange-500 scale-110" : "bg-gray-400"
            }`}
            animate={{ scale: index === currentSlide ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
