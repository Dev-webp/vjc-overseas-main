"use client";

import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    qualification: "",
    maritalStatus: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Form submission state
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup visibility state

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission (replace with actual logic)
    setIsSubmitted(true);
    setIsPopupVisible(true); // Show the popup

    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      qualification: "",
      maritalStatus: "",
      message: "",
    });
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
        {/* Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Phone and City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Qualification and Marital Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="qualification"
            placeholder="Qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="maritalStatus"
            placeholder="Marital Status"
            value={formData.maritalStatus}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
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
 
          
           
       
        
