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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

        setIsSubmitted(true); // Show success message
      } catch (error) {
        console.error("Form submission error:", error);
        setIsSubmitted(false);
      }
    },
    [formData]
  );

  return (
    <div className="relative">
      <form
        className="isolate space-y-8 rounded-2xl bg-gradient-to-b from-n-8/15 to-n-8/5 border border-n-0 p-12 max-w-[50rem] mb-24"
        onSubmit={handleSubmit}
      >
        {/* Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextInput
            label="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Phone and City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextInput
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        {/* Qualification and Marital Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            label="Qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          />
          <TextInput
            label="Marital Status"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
          />
        </div>

        {/* Message */}
        <TextInput
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          textarea
        />

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>

      {/* Success Message */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold">Submission received, we'll get back to you shortly!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
