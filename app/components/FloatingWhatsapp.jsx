"use client";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => (
  <div className="fixed bottom-0 right-5 z-50 flex items-center space-x-0 animate-bounce">
    {/* WhatsApp Icon */}
    <a
      href="https://wa.me/+919160449000"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#25d366] p-4 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl   "
    >
      <FaWhatsapp size={30} color="white" />
    </a>

    {/* Text next to the icon */}
    <span className="text-white bg-[#25d366] rounded-md px-4 py-2 text-sm font-semibold shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      Send Message
    </span>
  </div>
);

export default FloatingWhatsApp;

