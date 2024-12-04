"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Grouping services by country
const sliderData = [
  {
    services: [
      { text: "Apply For Canada Permanent Residency ", link: "/canada-pr-visa" },
      { text: "Apply For Canada Study Visa", link: "/canada-study-visa" }
    ],
    backgroundImage: "/canada.webp", // Canada background
  },
  {
    services: [
      { text: "Apply For Australia Permanent Residency Visa", link: "/australia-pr-visa" },
      { text: "Apply For Australia Study Visa", link: "/australia-study-visa" }
    ],
    backgroundImage: "/australia.jpg", // Australia background
  },
  {
    services: [
      { text: "Apply For Germany Opportunity Card Visa", link: "/germany-opportunity-card-visa" },
      { text: "Apply For Germany Study Visa", link: "/germany-study-visa" }
    ],
    backgroundImage: "/germany.jpg", // Germany background
  },
  {
    services: [
      { text: "Apply For UK Study Visa", link: "/uk-study-visa" }
    ],
    backgroundImage: "/uk-flag.png", // UK background
  },
  {
    services: [
      { text: "Apply For Malta Study Visa", link: "/malta-study-visa" }
    ],
    backgroundImage: "/malta.png", // Malta background
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide functionality with hover pause
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length); // Ensure it loops infinitely
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [isHovered]);

  return (
    <div
      className="mt-0 text-center"
      onMouseEnter={() => setIsHovered(true)} // Pause on hover
      onMouseLeave={() => setIsHovered(false)} // Resume on leave
    >
      <div
        className="relative text-black py-3 px-6 rounded-xl shadow-lg overflow-hidden w-[28rem] h-[auto] mx-auto"
      >

        {/* Background image and services container with same animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide} // Ensures the content changes with animation
            initial={{ opacity: 0, x: 50 }} // Initial state for both background and content
            animate={{ opacity: 1, x: 0 }} // Final state (smooth transition for both)
            exit={{ opacity: 0, x: -50 }} // Exit state for smooth transition out
            transition={{ duration: 0.5 }} // Smooth transition duration
            className="relative"
          >
            {/* Background image container */}
            <motion.div
              className="absolute inset-0 bg-black duration-1000 rounded-lg w-[30rem]"
              style={{
                backgroundImage: `url(${sliderData[currentSlide].backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.3, // Slight opacity for a subtle background fade effect
              }}
              key={`bg-${currentSlide}`} // Ensure the background changes with each slide
            ></motion.div>

            {/* Sliding Content with smooth transition */}
            <div className="relative z-10 flex justify-center items-center">
              <div className="text-lg font-semibold tracking-wide italic bg-none text-white px-8 py-2 rounded-lg shadow-md hover:bg-orange-100 hover:scale-105 transition-transform duration-300 text-center w-[28rem] h-[5rem] truncate">
                {/* Render all services in one block */}
                {sliderData[currentSlide].services.map((service, index) => (
                  <div key={index}>
                    <Link
                      href={service.link}
                      className="block py-1 underline hover:text-orange-500" // Added underline and hover effect
                    >
                      {service.text}
                    </Link>
                    {index === sliderData[currentSlide].services.length - 1 && (
                      <br /> // Add a line break after the last service
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slider;
