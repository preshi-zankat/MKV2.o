import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Journal", path: "/Writeing" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      
      <div className="flex justify-between items-center px-6 py-3 rounded-full 
      bg-white/70 backdrop-blur-lg shadow-md border border-gray-100">

        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-semibold text-[#F08787]"
        >
          DearDiary ✨
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative transition ${
                location.pathname === item.path
                  ? "text-[#F08787]"
                  : "text-gray-600 hover:text-[#F08787]"
              }`}
            >
              {item.name}

              {/* underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#F08787] transition-all duration-300 ${
                  location.pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          
          <Link
            to="/login"
            className="text-sm text-gray-600 hover:text-[#F08787] transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-[#F08787] text-white px-4 py-2 rounded-full text-sm 
            shadow-sm hover:scale-105 hover:bg-[#e06f6f] transition"
          >
            Get Started
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;