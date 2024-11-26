import Image from 'next/image';
import Background from '../../../../public/banner-2.png';
// import country1 from '../../../../public/c1.png';
// import country2 from '../../../../public/c2.png';
// import country3 from '../../../../public/c3.png';
// import country4 from '../../../../public/c4.png';
// import country5 from '../../../../public/c5.png';
// import country6 from '../../../../public/c6.png';
// import country7 from '../../../../public/c7.png';
// import country8 from '../../../../public/c8.png';
// import country9 from '../../../../public/c9.png';
// import country10 from '../../../../public/c10.png';
// import country11 from '../../../../public/c11.png';
// import country12 from '../../../../public/c12.png';
// import country13 from '../../../../public/c13.png';
// import country14 from '../../../../public/c14.png';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Section() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    // Array of 14 image URLs
    // const images = [
    //     country1, country2, country3, country4, country5, country6, country7,
    //     country8, country9, country10, country11, country12, country13, country14,
    // ];

    return (
        <div
            ref={container}
            className='relative flex items-center justify-center h-screen overflow-hidden'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            {/* Fixed background image with scrolling effect */}
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                <motion.div style={{ y }} className='relative w-full h-full'>
                    <Image
                        src={Background}
                        alt="Background Image"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                </motion.div>
            </div>

            {/* Two rows of 14 images with enhanced styling */}
            {/* <div className="absolute z-20 w-full bottom-28">
                <div className="flex justify-center gap-8 mb-6">
                    {images.slice(0, 7).map((img, index) => (
                        <motion.div
                            key={index}
                            className="w-40 h-40 relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-110"
                            whileHover={{ scale: 1.1 }}
                        >
                            <Image
                                src={img}
                                alt={`Image ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-center gap-8">
                    {images.slice(7, 14).map((img, index) => (
                        <motion.div
                            key={index}
                            className="w-40 h-40 relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-110"
                            whileHover={{ scale: 1.1 }}
                        >
                            <Image
                                src={img}
                                alt={`Image ${index + 8}`}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </div> */}

            {/* Centered call-to-action */}
            <div className='absolute z-20 text-center top-40'>
                <div className="relative bg-white bg-opacity-80 p-8 rounded-xl shadow-xl max-w-xl mx-auto mt-10">
                    <p className="text-2xl font-bold text-gray-900 italic mb-4 uppercase tracking-wider">
                        Join us in your journey to success. We provide expert consultancy to guide you every step of the way.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full uppercase text-base font-bold transition-all duration-300 hover:bg-orange-700 shadow-lg"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
}



            