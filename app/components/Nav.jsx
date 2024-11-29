import React from "react";
import Link from "next/link"; 
import { FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Assessment", path: "/about" },
    { name: "Study Abroad", path: "/study-abroad" },
    { name: "Work Abroad", path: "/work-abroad" },
    { name: "Investor Visas", path: "/investor-visas" },
    { name: "Visit Visas", path: "/visit-visas" },
    { name: "Services", path: "/services" },
    { name: "Coaching/Training", path: "/coaching-training" },
    { name: "Countries Visas", path: "/countries-visas" },
  ];

  return (
    <header>
    {/* White background section with logo, contact information, and marquee */}
    <div className="bg-white py-0 px-4 shadow-md z-50 fixed top-0 w-full">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-0">
          <Link href="/" className="text-lg font-bold">
            <img src="/logo-1.webp" alt="Logo" className="h-14" /> {/* First logo */}
          </Link>
          <Link href="/" className="text-lg font-bold">
            <img src="/logo-2.webp" alt="Logo" className="h-14" /> {/* Second logo */}
          </Link>
        </div>

        <div className="flex items-center ml-4">
            <img src="/promote.gif" alt="News" className="h-6 w-6" /> {/* News Icon */}
          </div>
        {/* Marquee Section placed between Logo and Location */}
        <div className="marquee-container flex-1 mx-4">
          <p className="whitespace-nowrap animate-marquee uppercase text-sm text-gray-800">
            Your Study and Work Abroad Opportunities Await! Explore the world with us. Learn more about visa programs and opportunities today!
          </p>
        </div>
  
        <div className="flex items-center space-x-4">
  {/* Location Info */}
  <div className="flex items-center space-x-2 text-sm text-black uppercase font-semibold italic">
    <div className="flex items-center animate-pulse text-orange-500">
      <img src="/loc.png" alt="Bangalore" className="mr-1 w-5 h-5" />
      <p>Bangalore</p>
    </div>
    <div className="flex items-center animate-pulse text-orange-500">
      <img src="/loc.png" alt="Hyderabad" className="mr-1 w-5 h-5" />
      <p>Hyderabad</p>
    </div>
    <div className="flex items-center animate-pulse text-orange-500">
      <img src="/loc.png" alt="USA" className="mr-1 w-5 h-5" />
      <p>USA</p>
    </div>
  </div>

  {/* Mail Address with Icon */}
  <div className="flex items-center space-x-2 text-sm text-black uppercase font-semibold italic">
  <div className="flex items-center animate-pulse text-orange-500">
  <a href="mailto:info@vjcoverseas.com" className="flex items-center">
    <FaEnvelope className="mr-1 w-5 h-5 text-orange-500" />
    <p>info@vjcoverseas.com</p>
  </a>
</div>

  </div>

  {/* Phone Number with Icon */}
  <div>
    <a
      href="tel:+919160449000"
      className="flex items-center text-white py-1 px-0 rounded-lg text-sm font-bold uppercase"
    >
      {/* Phone Icon */}
      <img src="/phone.gif" alt="Phone" className="h-6 w-6 mr-1" />
      {/* Phone Number */}
      <span className="text-orange-500">+91 9160449000</span>
    </a>
  </div>
</div>
      </div>
    </div>
  
    {/* Orange background section with navigation items */}
    <div className="bg-orange-500 fixed top-12 w-full z-50">
      <nav className="flex justify-center items-center py-2">
        {menuItems.map((item, index) => (
          <React.Fragment key={item.name}>
            <Link
              href={item.path}
              className="text-white text-sm lg:text-sm font-semibold px-4 hover:bg-white hover:bg-opacity-20 uppercase"
            >
              {item.name}
            </Link>
            {index < menuItems.length - 1 && (
              <span className="text-white hidden lg:inline-block">|</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  
    {/* Add margin to ensure content below is not hidden */}
    <div className="mt-0"></div> {/* Adjust the margin if necessary */}
  </header>
  
  
  );
};

export default Navbar;








{/* <header className="sticky left-0 top-0 w-full flex items-center h-16 border-b border-b-gray-100 dark:border-b-gray-900 z-40 bg-white dark:bg-gray-950 bg-opacity-80 backdrop-filter backdrop-blur-xl">
            
            </header> */}

{/* <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
                <div className="flex items-center min-w-max">
                    <Link href="#" className="text-xl font-semibold flex items-center gap-x-2">
                        <span className="flex">
                            <Image
                                src="/logo-1.webp"
                                alt="Logo 1"
                                width={64}   // Equivalent to 16 * 4 for the desired size
                                height={20} // You can adjust this depending on the aspect ratio
                                className="object-contain"
                            />
                            <Image
                                src="/logo-2.webp"
                                alt="Logo 2"
                                width={100}   // Equivalent to 24 * 4 for the desired size
                                height={20} // Same here for aspect ratio
                                className="object-contain"
                            />
                        </span>
                    </Link>
                </div>
                <div className={`absolute top-full left-0 bg-white dark:bg-gray-950 lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:flex lg:justify-between duration-300 ease-linear
                    ${navIsOpened ? "translate-y-0 opacity-100 visible" : "translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"}`}
                >
                    <ul className="flex flex-col lg:flex-row gap-8 lg:items-center text-sm text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center uppercase">
                        <li>
                            <Link href="/" className="relative py-2.5 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="relative py-2.5 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">About</Link>
                        </li>
                        <li>
                            <Link href="/" className="relative py-2.5 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Migrate</Link>
                        </li>
                        <li>
                            <Link href="/" className="relative py-2.5 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Work Abroad</Link>
                        </li>
                        <li>
                            <Link href="/" className="relative py-2.5 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Services</Link>
                        </li>
                        <li>
                            <Link href="/" className="relative py-2.5 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Study Abroad</Link>
                        </li>
                        <li>
                            <Link href="/" className="relative py-2.5 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Work</Link>
                        </li>
                        <li>
                            <Link href="/" className="relative py-2.5 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Pricing</Link>
                        </li>
                    </ul>
                    <div className="flex sm:items-center lg:min-w-max mt-10 lg:mt-0">
                        <Link href="/" className="px-6 items-center h-12 rounded-3xl text-orange-500 border border-gray-100 dark:border-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 duration-300 ease-linear flex justify-center w-full sm:w-auto">
                            Book a call
                        </Link>
                    </div>
                </div>
                <div aria-hidden="true" className="flex items-center lg:hidden">
                    <button onClick={toggleNavbar} aria-label='toggle navbar' className="outline-none border-l border-l-indigo-100 dark:border-l-gray-800 pl-3 relative py-3">
                        <span aria-hidden={true} className={`flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300 ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}`} />
                        <span aria-hidden={true} className={`mt-2 flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300 ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}`} />
                    </button>
                </div>
            </nav> */}

    //         const [navIsOpened, setNavIsOpened] = useState(false);

    // const toggleNavbar = () => {
    //     setNavIsOpened(prevState => !prevState);
    // };
