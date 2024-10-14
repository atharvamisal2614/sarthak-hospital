import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showEmergencyDropdown, setShowEmergencyDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleEmergencyDropdown = () => {
    setShowEmergencyDropdown(!showEmergencyDropdown);
  };

  return (
    <nav className="relative z-20">
      <div className="px-4 sm:px-6 lg:px-8 lg:mt-5 md:mb-5 mb-4 mt-5">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/hospital-logo-og.png" // Ensure this path is correct
              alt="Hospital Logo"
              width={80}
              height={80}
            />
          </div>

          {/* Center - Links (desktop) */}
          <div className="hidden md:flex items-center space-x-7 mx-10">
            <Link href="/dashboard" className="text-gray-700 no-underline hover:text-blue-500 hover:underline font-bold text-lg">Home</Link>
            <Link href="/patients" className="text-gray-700 no-underline hover:text-blue-500 hover:underline font-bold text-lg">About</Link>
            <Link href="/doctors" className="text-gray-700 no-underline hover:text-blue-500 hover:underline font-bold text-lg">Services</Link>
            <Link href="/appointments" className="text-gray-700 no-underline hover:text-blue-500 hover:underline font-bold text-lg">Doctors</Link>
            <Link href="/billing" className="text-gray-700 no-underline hover:text-blue-500 hover:underline font-bold text-lg">Emergency Services</Link>
            <Link href="/staff" className="text-gray-700 no-underline hover:text-blue-500 hover:underline font-bold text-lg">News & Events</Link>
            <Link href="/reports" className="text-gray-700 no-underline hover:text-blue-500 hover:underline font-bold text-lg">Careers</Link>
            <Link href="/inventory" className="text-gray-700 no-underline hover:text-blue-500 hover:underline font-bold text-lg">Contact Us</Link>
            <Link href="/pharmacy" className="text-gray-700 no-underline hover:text-blue-500 hover:underline font-bold text-lg">Blog</Link>
            <Link href="/settings" className="text-gray-700 no-underline hover:text-blue-500 hover:underline font-bold text-lg">Legal Notice</Link>
          </div>

          {/* Emergency Contact Button (Desktop View) */}
          <div className="hidden md:flex items-center">
            <button
              onClick={toggleEmergencyDropdown}
              className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg focus:outline-none hover:bg-red-700 transition duration-200 z-40"
            >
              Emergency Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 z-50"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) :
                
                 (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (fullscreen) */}
      {isOpen && (
        <div className=" inset-0 z-30 bg-white flex flex-col items-center justify-center space-y-4 h-screen w-full sticky top-0">
          {/* Cross icon to close menu */}
          <button
            onClick={toggleMenu}
            // className="absolute top-5 right-5 text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            {/* <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg> */}
          </button>

          {/* Menu items */}
          <Link href="/dashboard" className="text-gray-700 no-underline hover:text-blue-500 text-2xl">Home</Link>
          <Link href="/patients" className="text-gray-700 no-underline hover:text-blue-500 text-2xl">About</Link>
          <Link href="/doctors" className="text-gray-700 no-underline hover:text-blue-500 text-2xl">Services</Link>
          <Link href="/appointments" className="text-gray-700 no-underline hover:text-blue-500 text-2xl">Doctors</Link>
          <Link href="/billing" className="text-gray-700 no-underline hover:text-blue-500 text-2xl">Emergency Services</Link>
          <Link href="/staff" className="text-gray-700 no-underline hover:text-blue-500 text-2xl">News & Events</Link>
          <Link href="/reports" className="text-gray-700 no-underline hover:text-blue-500 text-2xl">Careers</Link>
          <Link href="/inventory" className="text-gray-700 no-underline hover:text-blue-500 text-2xl">Contact Us</Link>
          <Link href="/pharmacy" className="text-gray-700 no-underline hover:text-blue-500 text-2xl">Blog</Link>
          <Link href="/settings" className="text-gray-700 no-underline hover:text-blue-500 text-2xl">Legal Notice</Link>
        </div>
      )}

      {/* Emergency Contact Button (Mobile View) */}
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 md:hidden w-full flex justify-center z-40 mb-10">
        <button
          onClick={toggleEmergencyDropdown}
          className="bg-red-600 text-white px-2 py-2 rounded-full shadow-lg focus:outline-none hover:bg-red-700 transition duration-200"
        >
          Emergency Contact
        </button>
      </div>

      {/* Emergency Dropdown */}
      {showEmergencyDropdown && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-4 z-50">
            <h3 className="text-lg font-semibold mb-4 text-center text-red-600">Emergency Contacts</h3>
            <ul className="space-y-2">
              <li>Dr. John Doe - +1234567890</li>
              <li>Dr. Jane Smith - +1234567891</li>
              <li>Dr. Albert Wilson - +1234567892</li>
              <li>Dr. Emily Brown - +1234567893</li>
              <li>Dr. Michael Johnson - +1234567894</li>
            </ul>
            {/* Close Button */}
            <div className="mt-4 text-center">
              <button
                onClick={toggleEmergencyDropdown}
                className="text-red-600 hover:underline focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;








