"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ServicesDec = () => {
  const boxData = [
    { icon: '/1.png', title: 'Title 1', content: 'Small description 1' },
    { icon: '/2.png', title: 'Title 2', content: 'Small description 2' },
    { icon: '/3.png', title: 'Title 3', content: 'Small description 3' },
    { icon: '/4.png', title: 'Title 4', content: 'Small description 4' },
    { icon: '/5.png', title: 'Title 5', content: 'Small description 5' },
    { icon: '/6.png', title: 'Title 6', content: 'Small description 6' },
    { icon: '/path/to/icon7.png', title: 'Title 7', content: 'Small description 7' },
    { icon: '/path/to/icon8.png', title: 'Title 8', content: 'Small description 8' },
  ];

  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  return (
    <motion.div
      className="flex items-center justify-center w-screen h-screen relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/comp-21.webp')`, // Replace with your actual image path
      }}
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      {/* Central Button */}
      
  <img
    src="/service.png"  // Replace with your image path
    alt="Services"
    className="w-60 h-60 object-cover rounded-full"
  />
  {/* <div className="absolute inset-0 flex items-center justify-center text-center">
    <span className="text-sm font-medium">Explore Our Expert Solutions</span>
  </div> */}


      {/* Boxes - Circular Layout */}
      <div className="absolute w-full h-full flex justify-center items-center">
        {/* Box 1 (Top Left) */}
        <motion.div
  className="absolute w-60 h-28 bg-white border border-gray-300 shadow-lg flex items-center justify-between p-4 rounded-lg top-8 left-16 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-black hover:bg-orange-400"
  initial="hidden"
  animate="visible"
  variants={fadeInVariants}
  transition={{ delay: 0.3 }}
>
  <img src={boxData[0].icon} alt={boxData[0].title} className="w-16 h-16 object-contain" />
  <div className="w-0.5 h-12 bg-gray-300" />
  <div className="flex flex-col items-start justify-between text-center">
    <p className="text-base font-semibold">{boxData[0].title}</p>
    <p className="text-sm text-gray-600">{boxData[0].content}</p>
    <motion.span
      className="absolute bottom-2 right-2 text-xl font-extrabold hover:text-white cursor-pointer"
      whileHover={{ rotate: -10 }}
      transition={{ duration: 0.2 }}
    >
      →
    </motion.span>
  </div>
</motion.div>


        {/* Box 2 (Top Center) */}
        <motion.div
          className="absolute w-60 h-28 bg-white border border-gray-300 shadow-lg flex items-center justify-between p-4 rounded-lg top-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-black hover:bg-orange-400"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.6 }}
        >
          <img src={boxData[1].icon} alt={boxData[1].title} className="w-16 h-16 object-contain" />
           {/* <div className="flex-1 pl-4 pr-2">
            <hr className="border-l-2 border-gray-400 h-full" />
          </div> */}
          <div className="w-0.5 h-12 bg-gray-300" />
          <div className="flex flex-col items-start justify-between text-center">
            <p className="text-base font-semibold">{boxData[1].title}</p>
            <p className="text-sm text-gray-600">{boxData[1].content}</p>
            <motion.span
              className="absolute bottom-2 right-2 text-xl font-extrabold hover:text-orange-500"
              whileHover={{ rotate: -10 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </div>
        </motion.div>

        {/* Box 3 (Top Right) */}
        <motion.div
          className="absolute w-60 h-28 bg-white border border-gray-300 shadow-lg flex items-center justify-between p-4 rounded-lg top-8 right-16 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-black hover:bg-orange-400"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 0.9 }}
        >
          <img src={boxData[2].icon} alt={boxData[2].title} className="w-16 h-16 object-contain" />
           {/* <div className="flex-1 pl-4 pr-2">
            <hr className="border-l-2 border-gray-400 h-full" />
          </div> */}
          <div className="w-0.5 h-12 bg-gray-300" />
          <div className="flex flex-col items-start justify-between text-center">
            <p className="text-base font-semibold">{boxData[2].title}</p>
            <p className="text-sm text-gray-600">{boxData[2].content}</p>
            <motion.span
              className="absolute bottom-2 right-2 text-xl font-extrabold hover:text-orange-500"
              whileHover={{ rotate: -10 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </div>
        </motion.div>

        {/* Box 4 (Left) */}
        <motion.div
          className="absolute w-60 h-28 bg-white border border-gray-300 shadow-lg flex items-center justify-between p-4 rounded-lg left-16 mt-8 top-1/3 transform -translate-y-1/2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-black hover:bg-orange-400"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 1.2 }}
        >
          <img src={boxData[3].icon} alt={boxData[3].title} className="w-16 h-16 object-contain" />
           {/* <div className="flex-1 pl-4 pr-2">
            <hr className="border-l-2 border-gray-400 h-full" />
          </div> */}
          <div className="w-0.5 h-12 bg-gray-300" />
          <div className="flex flex-col items-start justify-between text-center">
            <p className="text-base font-semibold">{boxData[3].title}</p>
            <p className="text-sm text-gray-600">{boxData[3].content}</p>
            <motion.span
              className="absolute bottom-2 right-2 text-xl font-extrabold hover:text-orange-500"
              whileHover={{ rotate: -10 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </div>
        </motion.div>

        {/* Box 5 (Right) */}
        <motion.div
          className="absolute w-60 h-28 bg-white border border-gray-300 shadow-lg flex items-center justify-between p-4 rounded-lg right-16 mt-8 top-1/3 transform -translate-y-1/2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-black hover:bg-orange-400"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 1.5 }}
        >
          <img src={boxData[4].icon} alt={boxData[4].title} className="w-16 h-16 object-contain" />
           {/* <div className="flex-1 pl-4 pr-2">
            <hr className="border-l-2 border-gray-400 h-full" />
          </div> */}
          <div className="w-0.5 h-12 bg-gray-300" />
          <div className="flex flex-col items-start justify-between text-center">
            <p className="text-base font-semibold">{boxData[4].title}</p>
            <p className="text-sm text-gray-600">{boxData[4].content}</p>
            <motion.span
              className="absolute bottom-2 right-2 text-xl font-extrabold hover:text-orange-500"
              whileHover={{ rotate: -10 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </div>
        </motion.div>

        {/* Box 6 (Bottom Left) */}
        <motion.div
          className="absolute w-60 h-28 bg-white border border-gray-300 shadow-lg flex items-center justify-between p-4 rounded-lg bottom-8 left-16 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-black hover:bg-orange-400"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 1.8 }}
        >
          <img src={boxData[5].icon} alt={boxData[5].title} className="w-16 h-16 object-contain" />
           {/* <div className="flex-1 pl-4 pr-2">
            <hr className="border-l-2 border-gray-400 h-full" />
          </div> */}
          <div className="w-0.5 h-12 bg-gray-300" />
          <div className="flex flex-col items-start justify-between text-center">
            <p className="text-base font-semibold">{boxData[5].title}</p>
            <p className="text-sm text-gray-600">{boxData[5].content}</p>
            <motion.span
              className="absolute bottom-2 right-2 text-xl font-extrabold hover:text-orange-500"
              whileHover={{ rotate: -10 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </div>
        </motion.div>

        {/* Box 7 (Bottom Center) */}
        <motion.div
          className="absolute w-60 h-28 bg-white border border-gray-300 shadow-lg flex items-center justify-between p-4 rounded-lg bottom-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-black hover:bg-orange-400"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 2.1 }}
        >
          <img src={boxData[6].icon} alt={boxData[6].title} className="w-16 h-16 object-contain" />
           {/* <div className="flex-1 pl-4 pr-2">
            <hr className="border-l-2 border-gray-400 h-full" />
          </div> */}
          <div className="w-0.5 h-12 bg-gray-300" />
          <div className="flex flex-col items-start justify-between text-center">
            <p className="text-base font-semibold">{boxData[6].title}</p>
            <p className="text-sm text-gray-600">{boxData[6].content}</p>
            <motion.span
              className="absolute bottom-2 right-2 text-xl font-extrabold hover:text-orange-500"
              whileHover={{ rotate: -10 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </div>
        </motion.div>

        {/* Box 8 (Bottom Right) */}
        <motion.div
          className="absolute w-60 h-28 bg-white border border-gray-300 shadow-lg flex items-center justify-between p-4 rounded-lg bottom-8 right-16 transition-transform duration-300 ease-in-out hover:scale-105  hover:shadow-xl hover:border-black hover:bg-orange-400"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ delay: 2.4 }}
        >
          <img src={boxData[7].icon} alt={boxData[7].title} className="w-16 h-16 object-contain" />
          {/* <div className="flex-1 pl-4 pr-2">
            <hr className="border-l-2 border-gray-400 h-full" />
          </div> */}
          <div className="w-0.5 h-12 bg-gray-300" />
          <div className="flex flex-col items-start justify-between text-center">
            <p className="text-base font-semibold">{boxData[7].title}</p>
            <p className="text-sm text-gray-600">{boxData[7].content}</p>
            <motion.span
              className="absolute bottom-2 right-2 text-xl font-extrabold hover:text-orange-500"
              whileHover={{ rotate: -10 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicesDec;
