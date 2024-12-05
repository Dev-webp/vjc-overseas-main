import Image from "next/image";

const FeatureItem = ({ id, title, description, advantages, icon, image }) => {
    return (
        <div className={`flex flex-col md:items-center gap-10 lg:gap-14 ${id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
            <div className="md:w-[48%] xl:w-[45%] md:py-6 xl:py-4 space-y-8">
                <div className="space-y-6">
                    <span className="p-2 rounded-md bg-gray-100 text-orange-500 flex w-max">
                        {icon}
                    </span>
                    <h2 className="text-2xl font-semibold text-gray-900 uppercase">
                        {title}
                    </h2>
                    <p className="text-gray-700">
                        {description}
                    </p>
                </div>
                <ul role="list" className="space-y-5 children:flex children:items-center children:gap-4 children:text-gray-600">
                    {
                        advantages.map(advantage => (
                            <li key={advantage.id} className="flex items-center text-base">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 fill-orange-600 mr-2">
                                    <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg> */}
                                {advantage.text}
                            </li>
                        ))
                    }
                </ul>

            </div>
            <div className="flex-1 relative bg-gradient-to-tr from-orange-100 to-orange-300 
                  p-6 rounded-lg aspect-[4/2.4] overflow-hidden">
                <Image src={image} alt="illustration" width={1800} height={1000} className="w-full h-auto rounded-lg" />
            </div>
        </div>
    )
}
import { FaGlobe, FaFileAlt, FaHandsHelping } from 'react-icons/fa';

const features = [
    {
        id: 1,
        title: "Continuous Improvement",
        icon: <FaGlobe className="h-10 w-10" />,
        description: "We specialize in visa and immigration services for a wide range of countries, offering expert advice on the best immigration options based on your goals.",
        advantages: [
            { id: 1, text: "We believe in the power of learning and evolving. " },
            { id: 2, text: "Our team is committed to staying updated with the latest trends, policies, and opportunities in the field  " },
            { id: 3, text: "This dedication helps us provide our clients with the most current and effective solutions." }
        ],
        image: "/b1.webp"
    },
    {
        id: 2,
        title: "Client Satisfaction",
        icon: <FaFileAlt className="h-10 w-10" />,
        description: "We handle all the documentation, ensuring all forms are correctly filled out and submitted on time to avoid delays in your visa processing.",
        advantages: [
            { id: 1, text: "Over the years, we have built a reputation for delivering exceptional service." },
            { id: 2, text: "we are proud of the positive feedback we receive from our clients. " },
            { id: 3, text: "Our focus on client satisfaction has earned us the trust of hundreds of students and professionals who have successfully achieved their goals abroad." }
        ],
        image: "/b2.webp"
    },
    {
        id: 3,
        title: "Recognised Excellence",
        icon: <FaHandsHelping className="h-10 w-10" />,
        description: "Our services don’t stop once your visa is approved. We provide assistance with your relocation and settlement, ensuring a smooth transition to your new country.",
        advantages: [
            { id: 1, text: "Our commitment to excellence has been recognised through numerous awards. " },
            { id: 2, text: "These accolades reflect our unwavering dedication to providing the best service to our clients." },
            { id: 3, text: "In 2022, 2023, and 2024, we were honoured with the title of India’s Most Trusted Brand of the Year, awarded to us consecutively in Delhi and Bengaluru. " }
        ],
        image: "/b3.webp"
    }
];

const Features = () => {
    return (
        <section className="py-12 relative mt-48 md:mt-0 lg:mt-0">
            {/* Background image using Next.js Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/comp-1.webp" // Replace with the actual path to your image
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={75} // Adjust quality for performance
                    priority // Ensures the image loads quickly
                />
            </div>
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
                <div className="flex flex-col  space-y-16">
                    <div className="flex flex-col justify-center text-center  mx-auto md:max-w-4xl space-y-5">
                        <h1 className="text-3xl font-semibold text-orange-500 md:text-4xl xl:text-5xl leading-tight uppercase">
                         Why Choose VJC Overseas?
                        </h1>

                        <p className="text-gray-700 max-w-xl mx-auto">
                            At VJC Overseas, we offer more than just services; we provide tailored solutions that streamline your international journey. Whether you&apos;re seeking educational opportunities, career advancements, or immigration advice, our expertise and tools will help you achieve your goals with confidence and ease.
                        </p>

                    </div>
                    <div className="grid divide-y divide-gray-300/60 gap-12 children:py-5 first:pt-0 last:pb-0">
                        {
                            features.map(feature => (
                                <FeatureItem key={feature.id} {...feature} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;
