import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="col-span-1">
            <Image src="/hospital-logo-og.png" alt="Hospital Logo" width={150} height={50} />
            <p className="mt-4 text-gray-400">
              Our hospital is committed to providing world-class healthcare services with a compassionate touch.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-800">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-800">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-800">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-800">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact and Social Media */}
          <div className="col-span-1">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">123 Hospital Lane, City, Country</p>
            <p className="text-gray-400 mb-2">Email: contact@hospital.com</p>
            <p className="text-gray-400 mb-4">Phone: +123 456 7890</p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hospital Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
