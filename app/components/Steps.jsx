import Image from 'next/image'
import { FaClipboardCheck, FaFileAlt, FaPaperPlane, FaMicrophone, FaPlaneDeparture, FaHeadset } from 'react-icons/fa';
import { useState } from 'react';
import { MdOutlineDoubleArrow } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export default function CompFour() {
    // State to hold the current image based on the selected service
    const [selectedImage, setSelectedImage] = useState('/default-image.jpg');
    const [selectedService, setSelectedService] = useState(null);

    // Handle image change when a service is clicked
    const handleImageChange = (imageSrc, service) => {
        setSelectedImage(imageSrc);
        setSelectedService(service);
    };

    return (
        <>
            <section className="py-8 bg-cover bg-center" style={{ backgroundImage: "url('/comp-21.webp')" }}>
                <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
                    <div className="mx-auto text-center max-w-xl">
                        <h1 className="relative font-semibold max-w-max mx-auto pb-2 font-display text-3xl sm:text-4xl md:text-5xl text-orange-500 dark:text-white uppercase">
                            Easy Visa Process
                        </h1>
                        <h4 className='text-lg text-center'>Your Roadmap to Getting a Visa Successfully</h4>
                    </div>
                    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-14 gap-y-8 md:items-end">
                        <div className="space-y-3 lg:space-y-4 mb-10">
                            <div
                                className={`flex items-start gap-x-2 p-2 md:p-3 lg:p-3 bg-orange-200 dark:bg-gray-900 border border-gray-100/80 dark:border-gray-900/80 rounded-lg min-h-[120px] ${selectedService === 1 ? 'relative' : ''}`}
                                onClick={() => handleImageChange('/2.webp', 1)}
                            >
                                {selectedService === 1 && (
                                    <MdOutlineDoubleArrow className="absolute right-2 ml-16 mt-10 top-1/2 transform -translate-y-1/2 text-orange-500 w-6 h-6" />
                                )}
                                <span className="min-w-max text-orange-500 p-2 md:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-100/70 dark:border-gray-900/70 dark:text-gray-200">
                                    <FaHeadset className="w-6 h-6" />
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg ">1. Counselling & Consultation</span>
                                    
                                </div>
                            </div>
                            <div
                                className={`flex items-start gap-x-2 p-2 md:p-3 lg:p-4 bg-orange-200 dark:bg-gray-900 border border-gray-100/80 dark:border-gray-900/80 rounded-lg min-h-[120px] ${selectedService === 2 ? 'relative' : ''}`}
                                onClick={() => handleImageChange('/22.jpg', 2)}
                            >
                                {selectedService === 2 && (
                                    <MdOutlineDoubleArrow className="absolute right-2 ml-16 mt-12 top-1/2 transform -translate-y-1/2 text-orange-500 w-6 h-6" />
                                )}
                                <span className="min-w-max text-orange-500 p-2 md:p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-100/70 dark:border-gray-900/70 dark:text-gray-200">
                                    <FaClipboardCheck className="w-6 h-6" />
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-800 dark:text-orange-200 text-lg">2. Eligibility Check</span>
                                    <p className="text-gray-700 dark:text-gray-300 text-justify">
                                        We evaluate your profile and qualifications to check if it meets the requirement for the visa.
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`flex items-start gap-x-2 p-2 md:p-3 lg:p-4 bg-orange-200 dark:bg-gray-900 border border-gray-100/80 dark:border-gray-900/80 rounded-lg min-h-[120px] ${selectedService === 3 ? 'relative' : ''}`}
                                onClick={() => handleImageChange('/25.jpg', 3)}
                            >
                                {selectedService === 3 && (
                                    <MdOutlineDoubleArrow className="absolute right-2 ml-16 mt-14 top-1/2 transform -translate-y-1/2 text-orange-500 w-6 h-6" />
                                )}
                                <span className="min-w-max text-orange-500 p-2 md:p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-100/70 dark:border-gray-900/70 dark:text-gray-200">
                                    <FaFileAlt className="w-6 h-6" />
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-800  dark:text-gray-200 text-lg">3. Documents Preparation</span>
                                    <p className="text-gray-700 dark:text-gray-300 text-justify">
                                        We can assist you in collecting, authenticating, and preparing all documents for an error-free application.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mb-10">
                            <div className="max-w-full relative">
                                <span className="absolute inset-x-0 top-0 bottom-0 rounded-lg scale-[1.04] bg-gradient-to-b from-gray-200 dark:from-gray-900" />
                                <span className="absolute inset-x-0 bottom-0 top-16 rounded-lg bg-gray-100 dark:bg-gray-900" />
                                <Image src={selectedImage} width={1240} height={1376} alt="Service Image" className="relative w-full h-auto max-h-96 lg:max-h-[26rem] rounded-lg" />
                            </div>
                        </div>

                        <div className="space-y-3 lg:space-y-4 mb-12">
                            <div
                                className={`flex items-start gap-x-2 p-2 md:p-3 lg:p-3 bg-orange-50 dark:bg-gray-900 border border-gray-100/80 dark:border-gray-900/80 rounded-lg min-h-[120px] ${selectedService === 4 ? 'relative' : ''}`}
                                onClick={() => handleImageChange('/23.jpg', 4)}
                            >
                                {selectedService === 4 && (
                                    <MdKeyboardDoubleArrowLeft  className="absolute left-2 mt-10 top-1/2 transform -translate-y-1/2 text-orange-500 w-6 h-6" />
                                )}
                                <span className="min-w-max text-orange-500 p-2 md:p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-100/70 dark:border-gray-900/70 dark:text-gray-200">
                                    <FaPaperPlane className="w-6 h-6" />
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg ">4. Submission of Application</span>
                                    <p className="text-gray-700 dark:text-gray-300 text-justify">
                                        We ensure that your application is submitted to be processed as soon as possible.
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`flex items-start gap-x-2 p-2 md:p-3 lg:p-4 bg-orange-50 dark:bg-gray-900 border border-gray-100/80 dark:border-gray-900/80 rounded-lg min-h-[120px] ${selectedService === 5 ? 'relative' : ''}`}
                                onClick={() => handleImageChange('/24.jpg', 5)}
                            >
                                {selectedService === 5 && (
                                    <MdKeyboardDoubleArrowLeft  className="absolute left-2 mt-10 top-1/2 transform -translate-y-1/2 text-orange-500 w-6 h-6" />
                                )}
                                <span className="min-w-max text-orange-500 p-2 md:p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-100/70 dark:border-gray-900/70 dark:text-gray-200">
                                    <FaMicrophone className="w-6 h-6" />
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-800 dark:text-orange-200 text-lg">5. Interview Preparation</span>
                                    <p className="text-gray-700 dark:text-gray-300 text-justify">
                                        We provide training on how to ace the interview to ensure the best chance of approval.
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`flex items-start gap-x-2 p-2 md:p-3 lg:p-4 bg-orange-50 dark:bg-gray-900 border border-gray-100/80 dark:border-gray-900/80 rounded-lg min-h-[120px] ${selectedService === 6 ? 'relative' : ''}`}
                                onClick={() => handleImageChange('/21.webp', 6)}
                            >
                                {selectedService === 6 && (
                                    <MdKeyboardDoubleArrowLeft  className="absolute left-2 mt-12 top-1/2 transform -translate-y-1/2 text-orange-500 w-6 h-6" />
                                )}
                                <span className="min-w-max text-orange-500 p-2 md:p-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-100/70 dark:border-gray-900/70 dark:text-gray-200">
                                    <FaPlaneDeparture className="w-6 h-6" />
                                </span>
                                <div>
                                    <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg">6. Visa Approval & Departure</span>
                                    <p className="text-gray-700 dark:text-gray-300 text-justify">
                                        Once the visa is approved, we help you prepare for your journey abroad.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
