"use client";

import { useState } from "react";
import Form from "./components/Form";

const ContactPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="contact-page">
      {/* Background Image Section */}
      <div
        className={`relative bg-cover bg-center min-h-screen ${
          isImageLoaded ? "bg-loaded" : "bg-loading"
        }`}
        style={{ backgroundImage: "url('/form-bg.jpg')" }}
        onLoad={handleImageLoad}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 animate-fadeIn"></div>

        {/* Content Container */}
        <div className="relative max-w-screen-lg mx-auto px-6 py-2">
          <div className="mt-20 max-w-[40rem] mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-7">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img
                src="/logo-1.webp"
                alt="Logo"
                className="h-16 w-16"
              />
              <img
                src="/logo-2.webp"
                alt="Logo"
                className="h-16 w-28"
              />
            </div>

            <h1 className="uppercase text-2xl text-center font-semibold font-serif animate-slideInDown">
              Sign up & Get Free Assistance
            </h1>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
