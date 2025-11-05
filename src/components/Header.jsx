import React from "react";
import { Link } from "react-router-dom";
import avatarImg from "../assets/avatar.jpg"; 
import logoImg from "../assets/logo.jpg";   

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo + Title side by side */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="BuildLink Logo"
            className="w-9 h-9 rounded-full border border-white/40 shadow-sm"
          />
          <span className="text-2xl font-extrabold text-blue-600 tracking-tight hover:text-blue-700 transition">
            BuildLink
          </span>
        </Link>

        {/* Nav Menu */}
        <nav>
          <ul className="hidden md:flex space-x-4 font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "Providers", path: "/providers" },
              { name: "Services", path: "/services" },
              { name: "About Us", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Contact Us", path: "/contact" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className="px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm text-gray-800 hover:bg-blue-600 hover:text-white transition shadow-sm"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side (Actions) */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition">
            Register
          </button>

          {/* Avatar */}
          <img
            src={avatarImg}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-white/40 shadow-md object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
