import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Description() {
    const [activeBox, setActiveBox] = useState(null);

    const handleHover = (index) => {
        setActiveBox(index);
    };

    const handleMouseLeave = () => {
        setActiveBox(null);
    };

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

            <div className="relative flex justify-center gap-8 mt-0 mx-auto lg:max-w-[80%]">
                {/* Box 1 - UK */}
                <div
                    className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all"
                    style={{
                        backgroundImage: "url('/uk.png')",
                        width: "250px",
                        height: "500px",
                    }}
                    onMouseEnter={() => handleHover(1)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 flex flex-col justify-between text-center mb-[7.20rem]">
                        <h3 className="text-2xl font-bold text-black uppercase ">UK</h3>
                        <button className="px-6 py-2 text-md font-semibold text-white uppercase whitespace-nowrap ml-6 mb-1">
                            Calculate Now
                        </button>
                        <p className="text-sm text-black max-w-44">Know your chances and estimated expenses to study in UK.</p>
                    </div>
                </div>

                {/* Box 2 - Germany */}
                <div
                    className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all"
                    style={{
                        backgroundImage: "url('/germany.png')",
                        width: "250px",
                        height: "500px",
                    }}
                    onMouseEnter={() => handleHover(2)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 flex flex-col justify-between text-center mb-28">
                        <h3 className="text-2xl font-bold text-black uppercase mb-0">Germany</h3>
                        <button className="px-6 py-2 text-md font-semibold text-white uppercase whitespace-nowrap ml-6 mb-2">
                            Calculate Now
                        </button>
                        <p className="text-sm text-black max-w-72 mr-6">Check your needs and <br />expense for studying in <br /> Germany.</p>
                    </div>
                </div>

                {/* Box 3 - Canada */}
                <div
                    className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all"
                    style={{
                        backgroundImage: "url('/canada.png')",
                        width: "250px",
                        height: "500px",
                    }}
                    onMouseEnter={() => handleHover(3)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 flex flex-col justify-between text-center mb-28">
                        <h3 className="text-2xl font-bold text-black uppercase mb-0">Canada</h3>
                        <button className="px-6 py-2 text-md font-semibold text-white uppercase whitespace-nowrap ml-6 mb-2">
                            Calculate Now
                        </button>
                        <p className="text-sm text-black max-w-44 ml-1">Check your possibilities and planning of expenses to study in Canada.</p>
                    </div>
                </div>

                {/* Box 4 - Australia */}
                <div
                    className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all"
                    style={{
                        backgroundImage: "url('/australia.png')",
                        width: "250px",
                        height: "500px",
                    }}
                    onMouseEnter={() => handleHover(4)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 flex flex-col justify-between text-center mb-[6.80rem]">
                        <h3 className="text-2xl font-bold text-black uppercase mb-0">Australia</h3>
                        <button className="px-6 py-2 text-md font-semibold text-white uppercase whitespace-nowrap ml-6 mb-3">
                            Calculate Now
                        </button>
                        <p className="text-sm text-black max-w-64 mr-8">Know your visa probability<br /> and cost to study in<br /> Australia</p>
                    </div>
                </div>
            </div>

{/* Line and Animated Round */}
<div className="absolute -bottom-4 ml-[11.50rem] transform -translate-x-1/2">
  <img
    src="/ba.png" 
    alt="Decorative Line"
    className="w-[70rem] h-40 object-contain" 
  />
   
    {activeBox && (
        <motion.div
            className="absolute flex justify-center items-center"
            style={{
                width: '42px',
                height: '42px',
                left: `${(activeBox - 1) * 270 + 115}px`, 
            }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            
            <img
                src="/favicon.png"  
                alt="Logo"
                className="w-full h-full object-contain"
            />
        </motion.div>
    )}
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
