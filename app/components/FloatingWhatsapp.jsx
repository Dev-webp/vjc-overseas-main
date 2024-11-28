"use client";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/+919160449000"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-5 bg-[#25d366] p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 z-50 animate-bounce"
  >
    <FaWhatsapp size={30} color="white" />
  </a>
);

export default FloatingWhatsApp;
