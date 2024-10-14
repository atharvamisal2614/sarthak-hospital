import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and About */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <Image src="/hospital-logo-og.png" alt="Hospital Logo" width={150} height={50} />
            <p className="mt-4 text-gray-900">
              Our hospital is committed to providing world-class healthcare services with a compassionate touch.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold text-gray-900">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-900 hover:text-gray-500 ">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-900 hover:text-gray-500">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-900 hover:text-gray-500">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-900 hover:text-gray-500">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact and Social Media */}
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold mb-4 text-gray-900">Contact Us</h4>
            <p className="text-gray-900 mb-2">123 Hospital Lane, City, Country</p>
            <p className="text-gray-900 mb-2">Email: contact@hospital.com</p>
            <p className="text-gray-900 mb-4">Phone: +123 456 7890</p>

            {/* Social Icons */}
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-900 hover:text-gray-500">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-500">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-900 hover:text-gray-500">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-900">
          <p>&copy; {new Date().getFullYear()} Sarthak Hospital. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
