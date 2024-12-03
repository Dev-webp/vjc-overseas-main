import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Description() {
    const controls = useAnimation(); // Controls animation
    const { ref, inView } = useInView({
        triggerOnce: false, // Animation triggers every time it's in view
        threshold: 0.3, // Starts animation when 30% of the component is in view
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible'); // Start animation when in view
        } else {
            controls.start('hidden'); // Reset animation when out of view
        }
    }, [inView, controls]); // Re-run whenever inView changes

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay between each box's animation
            },
        },
    };

    const boxVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div
            ref={ref} // Attach the ref to detect visibility
            className="relative flex flex-col justify-center items-center mt-60 md:mt-0 lg:mt-0 py-8 md:py-32 lg:py-14 bg-gradient-to-br from-orange-500 to-red-600 text-white overflow-hidden"
        >
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
            <div className="relative text-center mb-6">
                <motion.h1
                    className="text-[6vw] lg:text-[4vw] font-bold uppercase leading-tight"
                    initial="hidden"
                    animate={controls}
                    variants={boxVariants}
                >
                    Turn Dreams Into Destinations
                </motion.h1>

                <motion.p
                    className="mt-6 text-lg md:text-xl font-medium max-w-[80%] mx-auto"
                    initial="hidden"
                    animate={controls}
                    variants={boxVariants}
                >
                    Empowering your journey with trusted visa and immigration solutions
                    for a brighter future.
                </motion.p>
            </div>

            <motion.div
                className="relative grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-5 mt-0 mx-auto lg:max-w-[95%]" // Updated to grid-cols-5 for large screens
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                {/* Box 1 - UK */}
                <motion.div
                    className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all"
                    style={{
                        backgroundImage: "url('/uk.png')",
                        width: '250px',
                        height: '500px',
                    }}
                    variants={boxVariants}
                >
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 flex flex-col justify-between text-center mb-[7.20rem]">
                        <h3 className="text-2xl font-bold text-black uppercase ">UK</h3>
                        <button className="px-6 py-2 text-md font-semibold text-white uppercase whitespace-nowrap ml-6 mb-1">
                            Calculate Now
                        </button>
                        <p className="text-sm text-black max-w-44">Know your chances and estimated expenses to study in UK.</p>
                    </div>
                </motion.div>

                {/* Box 2 - Germany */}
                <motion.div
                    className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all"
                    style={{
                        backgroundImage: "url('/germany.png')",
                        width: '250px',
                        height: '500px',
                    }}
                    variants={boxVariants}
                >
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 flex flex-col justify-between text-center mb-28">
                        <h3 className="text-2xl font-bold text-black uppercase mb-0">Germany</h3>
                        <button className="px-6 py-2 text-md font-semibold text-white uppercase whitespace-nowrap ml-6 mb-2">
                            Calculate Now
                        </button>
                        <p className="text-sm text-black max-w-72 mr-6">Check your needs and <br />expense for studying in <br /> Germany.</p>
                    </div>
                </motion.div>

                {/* Box 3 - Canada */}
                <motion.div
                    className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all"
                    style={{
                        backgroundImage: "url('/canada.png')",
                        width: '250px',
                        height: '500px',
                    }}
                    variants={boxVariants}
                >
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 flex flex-col justify-between text-center mb-28">
                        <h3 className="text-2xl font-bold text-black uppercase mb-0">Canada</h3>
                        <button className="px-6 py-2 text-md font-semibold text-white uppercase whitespace-nowrap ml-6 mb-2">
                            Calculate Now
                        </button>
                        <p className="text-sm text-black max-w-44 ml-1">Check your possibilities and planning of expenses to study in Canada.</p>
                    </div>
                </motion.div>

                {/* Box 4 - Australia */}
                <motion.div
                    className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all"
                    style={{
                        backgroundImage: "url('/australia.png')",
                        width: '250px',
                        height: '500px',
                    }}
                    variants={boxVariants}
                >
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 flex flex-col justify-between text-center mb-[6.80rem]">
                        <h3 className="text-2xl font-bold text-black uppercase mb-0">Australia</h3>
                        <button className="px-6 py-2 text-md font-semibold text-white uppercase whitespace-nowrap ml-6 mb-3">
                            Calculate Now
                        </button>
                        <p className="text-sm text-black max-w-64 mr-8">Know your visa probability<br /> and cost to study in<br /> Australia</p>
                    </div>
                </motion.div>

                {/* Box 5 - Canada */}
                <motion.div
                    className="relative bg-cover bg-center group hover:translate-y-[-10px] transition-all ml-32 md:ml-0 lg:ml-0"
                    style={{
                        backgroundImage: "url('/canada.png')",
                        width: '250px',
                        height: '500px',
                    }}
                    variants={boxVariants}
                >
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-4 flex flex-col justify-between text-center mb-28">
                        <h3 className="text-2xl font-bold text-black uppercase mb-0">Canada</h3>
                        <button className="px-6 py-2 text-md font-semibold text-white uppercase whitespace-nowrap ml-6 mb-2">
                            Calculate Now
                        </button>
                        <p className="text-sm text-black max-w-44 ml-1">Check your possibilities and planning of expenses to study in Canada.</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
