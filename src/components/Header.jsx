import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import avatarImg from "../assets/avatar.jpg";
import logoImg from "../assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Providers", path: "/providers" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">

        {/* Logo + Title side by side */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="BuildLink Logo"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/40 shadow-sm"
          />
          <span className="text-xl sm:text-2xl font-extrabold text-blue-600 tracking-tight hover:text-blue-700 transition">
            BuildLink
          </span>
        </Link>

        {/* Desktop Nav Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-2 lg:space-x-4 font-medium">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className="px-3 lg:px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm text-gray-800 hover:bg-blue-600 hover:text-white transition shadow-sm text-sm lg:text-base"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side (Actions) - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition text-sm">
            Register
          </button>

          {/* Avatar */}
          <img
            src={avatarImg}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-white/40 shadow-md object-cover"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 hover:text-blue-600 transition p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-white/20">
          <nav className="px-4 py-4">
            <ul className="space-y-2">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg bg-gray-50 text-gray-800 hover:bg-blue-600 hover:text-white transition font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition text-sm font-medium">
                  Register
                </button>
                <img
                  src={avatarImg}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-white/40 shadow-md object-cover"
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
