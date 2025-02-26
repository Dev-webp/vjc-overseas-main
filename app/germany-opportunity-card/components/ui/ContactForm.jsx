"use client";

import React, { useState, useCallback, useEffect } from "react";
import TextInput from "./TextInput";
import Button from "./Button";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdXavQXlwKjP9dYvkYpHOg6-QLWHeI2J2tLNDhYYAsQpw7ofw/formResponse";

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

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-hide success message after 3 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 3000);
      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [isSubmitted]);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const formBody = new URLSearchParams({
        "entry.1510645988": encodeURIComponent(formData.name),
        "entry.938203700": encodeURIComponent(formData.email),
        "entry.1549808739": encodeURIComponent(formData.phone),
        "entry.1578212786": encodeURIComponent(formData.city),
        "entry.505635382": encodeURIComponent(formData.qualification),
        "entry.17107752": encodeURIComponent(formData.maritalStatus),
        "entry.1610243820": encodeURIComponent(formData.message),
      });

      try {
        await fetch(GOOGLE_FORM_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          qualification: "",
          maritalStatus: "",
          message: "",
        });

        setIsSubmitted(true);
      } catch (error) {
        console.error("Form submission error:", error);
        setIsSubmitted(false);
      }
    },
    [formData]
  );

  return (
    <form
      className="isolate space-y-8 rounded-2xl bg-gradient-to-b from-n-8/15 to-n-8/5 border border-n-0 p-12 max-w-[50rem] mb-24"
      onSubmit={handleSubmit}
    >
      {/* Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border-r border-neutral-400 pr-4">
          <TextInput
            label="Name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <TextInput
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Phone and City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border-r border-neutral-400 pr-4">
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9\s\-\(\)]*"
            inputMode="numeric"
            required
            maxLength={10}
            minLength={10}
          />
        </div>
        <TextInput
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>

      {/* Message */}
      <TextInput
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      {/* Submit Button */}
      <Button type="submit" className="mt-4 ml-64 w-36 p-2 text-white hover:text-orange-400 rounded-lg mx-auto bg-black">
        Submit
      </Button>

      {/* Success Message (Disappears after 3 seconds) */}
      {isSubmitted && (
        <p className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-3 rounded">
          Form successfully submitted!
        </p>
      )}
    </form>
  );
};

export default ContactForm;

        
      
         
            
     
  
