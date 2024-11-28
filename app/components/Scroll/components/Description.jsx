import React from 'react';
import { motion } from 'framer-motion';
import Flag from 'react-world-flags'; // Import the Flag component

export default function Description() {
    return (
        <div className="relative flex flex-col justify-center items-center py-24 md:py-32 lg:py-14 bg-gradient-to-br from-orange-500 to-red-600 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-30">
                <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 800 600"
                    fill="none"
                >
                    <path
                        d="M400 200C550 250 650 150 700 300C750 450 600 500 400 500C200 500 50 450 100 300C150 150 250 150 400 200Z"
                        fill="rgba(255,255,255,0.3)"
                    />
                </svg>
            </div>
            {/* Content */}
            <div className="relative text-center mb-6">
                <motion.h1
                    className="text-[6vw] lg:text-[4vw] font-bold uppercase leading-tight"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    Turn Dreams Into Destinations
                </motion.h1>

                <motion.p
                    className="mt-6 text-lg md:text-xl font-medium max-w-[80%] mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                >
                    Empowering your journey with trusted visa and immigration solutions
                    for a brighter future.
                </motion.p>
            </div>

            <div className="relative flex justify-center gap-8 mt-12 mx-auto lg:max-w-[80%]">
  {/* Box 1 - Australia */}
  <div className="relative w-60 h-96 bg-cover bg-center group hover:translate-y-[-10px] transition-all" style={{ backgroundImage: "url('/uk.png')" }}>
    {/* Content Over the Image */}
    {/* <div className="absolute top-4 left-4 p-2 bg-orange-100 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
     
    </div> */}

    {/* Box Content */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 flex flex-col justify-between text-center">
      <h3 className="text-2xl font-bold text-black uppercase">Australia</h3>
      <p className="text-sm text-black">Know your visa probability and cost to study in Australia</p>

      {/* Small button */}
      <button className="mt-6 mb-4 px-6 py-2 text-sm font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-400 transition duration-200 uppercase whitespace-nowrap">
  Calculate Now
</button>

    </div>

    {/* Bottom Line on Hover */}
    <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-all"></div>
  </div>

  {/* Box 2 - Germany */}
  <div className="relative w-60 h-64 bg-cover bg-center rounded-lg shadow-lg overflow-hidden group hover:translate-y-[-10px] transition-all" style={{ backgroundImage: "url('/path-to-your-image-2.jpg')" }}>
    {/* Content Over the Image */}
    <div className="absolute top-4 left-4 p-2 bg-orange-100 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
      <Flag code="DE" className="text-4xl group-hover:text-white" />
    </div>

    {/* Box Content */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 flex flex-col justify-between text-center bg-black bg-opacity-50 rounded-lg">
      <h3 className="text-2xl font-bold text-white">Germany</h3>
      <p className="text-sm text-white">Check your needs and expense for studying in Germany.</p>
      <button className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-400 transition duration-200">
        Calculate Now
      </button>
    </div>

    {/* Bottom Line on Hover */}
    <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-all"></div>
  </div>

  {/* Box 3 - Canada */}
  <div className="relative w-60 h-64 bg-cover bg-center rounded-lg shadow-lg overflow-hidden group hover:translate-y-[-10px] transition-all" style={{ backgroundImage: "url('/path-to-your-image-3.jpg')" }}>
    {/* Content Over the Image */}
    <div className="absolute top-4 left-4 p-2 bg-orange-100 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
      <Flag code="CA" className="text-4xl group-hover:text-white" />
    </div>

    {/* Box Content */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 flex flex-col justify-between text-center bg-black bg-opacity-50 rounded-lg">
      <h3 className="text-2xl font-bold text-white">Canada</h3>
      <p className="text-sm text-white">Check your possibilities and planning of expenses to study in Canada</p>
      <button className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-400 transition duration-200">
        Calculate Now
      </button>
    </div>

    {/* Bottom Line on Hover */}
    <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-all"></div>
  </div>

  {/* Box 4 - UK */}
  <div className="relative w-60 h-64 bg-cover bg-center rounded-lg shadow-lg overflow-hidden group hover:translate-y-[-10px] transition-all" style={{ backgroundImage: "url('/path-to-your-image-4.jpg')" }}>
    {/* Content Over the Image */}
    <div className="absolute top-4 left-4 p-2 bg-orange-100 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all">
      <Flag code="GB" className="text-4xl group-hover:text-white" />
    </div>

    {/* Box Content */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 flex flex-col justify-between text-center bg-black bg-opacity-50 rounded-lg">
      <h3 className="text-2xl font-bold text-white">UK</h3>
      <p className="text-sm text-white">Know your chances and estimated expenses to study in UK.</p>
      <button className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-400 transition duration-200">
        Calculate Now
      </button>
    </div>

    {/* Bottom Line on Hover */}
    <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-all"></div>
  </div>
</div>


            {/* Decorative Elements */}
            <motion.div
                className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full opacity-20"
                animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-300 rounded-full opacity-20"
                animate={{ y: [0, -30, 0], x: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
        </div>
    );
}
