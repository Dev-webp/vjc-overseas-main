"use client";

import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // Form submission state
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup visibility state

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission (replace with actual logic)
    setIsSubmitted(true);
    setIsPopupVisible(true); // Show the popup
  };

  // Auto-hide the popup after 3 seconds
  useEffect(() => {
    if (isPopupVisible) {
      const timer = setTimeout(() => {
        setIsPopupVisible(false); // Hide the popup
      }, 3000); // 3 seconds

      // Cleanup the timer
      return () => clearTimeout(timer);
    }
  }, [isPopupVisible]);

  return (
    <div className="relative">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form fields go here */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>

      {/* Success Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <p className="text-xl font-semibold">
              Submission received, we'll get back to you shortly!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
 
          
           
       
        
