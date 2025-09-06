import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#7B2CBF] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-white font-bold text-xl tracking-wide">
            ManKeVichar✨
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-white hover:text-[#F8C8DC] transition">Home</a>
            <a href="/login" className="text-white hover:text-[#F8C8DC] transition">Login</a>
            <a href="/signup" className="text-white hover:text-[#F8C8DC] transition">Sign Up</a>
            <a href="/support" className="text-white hover:text-[#F8C8DC] transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white focus:outline-none"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#6A1B9A] px-4 pb-4 space-y-2">
          <a href="#" className="block text-white hover:text-[#F8C8DC] transition">Home</a>
          <a href="#" className="block text-white hover:text-[#F8C8DC] transition">About</a>
          <a href="#" className="block text-white hover:text-[#F8C8DC] transition">Projects</a>
          <a href="#" className="block text-white hover:text-[#F8C8DC] transition">Contact</a>
        </div>
      )}
    </nav>
  );
}
