"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Form from "@/app/components/Form";
import { FaSpinner } from "react-icons/fa";

const ContactPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(true); // Track popup state
  const popupRef = useRef(null);

  // Function to preload the background image and set the state when it's loaded
  useEffect(() => {
    const img = new Image();
    img.src = "/form-bg.jpg";
    img.onload = () => setIsImageLoaded(true);
  }, []);

  // Close popup when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupVisible(false); // Hide popup
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="contact-page">
      {/* Background Image Section with Framer Motion */}
      <motion.div
        className={`relative bg-cover bg-center min-h-screen`}
        style={{ backgroundImage: "url('/form-bg.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isImageLoaded ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Container */}
        <div className="relative max-w-screen-lg mx-auto px-4 py-2">
          <div className="mt-[4.70rem] max-w-[40rem] mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-4">
            <Form />
          </div>
        </div>
      </motion.div>

      {/* Popup (Only show when isPopupVisible is true) */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div ref={popupRef} className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold">Submission received, we’ll get back to you shortly!</p>
          </div>
        </div>
      )}

      {/* Loading Spinner Before Image Loads */}
      {!isImageLoaded && (
        <div className="absolute inset-0 bg-white flex items-center justify-center">
          <FaSpinner className="animate-spin text-blue-600" size={40} />
        </div>
      )}
    </div>
  );
};

export default ContactPage;

  
        
     
