import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">BuildLink</h3>
            <p className="text-gray-400">
              Connecting you to a network of trusted and skilled professionals for all your construction and maintenance needs in Zimbabwe.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Services</a></li>
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Working Hours Section */}
          <div>
            <h4 className="font-bold text-lg mb-4">Working Hours</h4>
            <p className="text-gray-400">Mon - Fri: 8:00 AM - 5:00 PM</p>
            <p className="text-gray-400">Sat: 9:00 AM - 1:00 PM</p>
            <p className="text-gray-400">Sun: Closed</p>
          </div>

          {/* Get in Touch Section */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get in Touch</h4>
            <p className="text-gray-400">123 Construction Ave, Harare</p>
            <p className="text-gray-400">info@buildlink.com</p>
            <p className="text-gray-400">(+263) 77 123 4567</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} BuildLink. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
