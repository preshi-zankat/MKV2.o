import React, { useState } from "react";
import { Eye, EyeOff, User, Mail, Lock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen flex">
      
      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src="https://images.pexels.com/photos/8528253/pexels-photo-8528253.jpeg"
          alt="journal"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-12 text-white">
          <h1 className="text-4xl font-light mb-4">
            Capture Your Moments
          </h1>
          <p className="text-sm opacity-80 max-w-sm">
            A peaceful space for your thoughts, reflections, and memories.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-md">

          {/* HOME BUTTON */}
<Link
  to="/"
  className="inline-flex items-center gap-2 text-gray-600 hover:text-[#F08787] mb-6 transition"
>
  <ArrowLeft size={18} />
  <span className="text-sm font-medium">Back to Home</span>
</Link>
          
          <h2 className="text-2xl font-semibold mb-2">Create Account</h2>
          <p className="text-gray-500 text-sm mb-6">
            Start your journaling journey today
          </p>

          {/* NAME */}
          <div className="mb-4">
            <label className="text-xs text-gray-500">FULL NAME</label>
            <div className="flex items-center border-b py-2">
              <User size={16} className="mr-2 text-gray-400" />
              <input
                type="text"
                placeholder="John Doe"
                className="w-full outline-none bg-transparent text-sm"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="text-xs text-gray-500">EMAIL</label>
            <div className="flex items-center border-b py-2">
              <Mail size={16} className="mr-2 text-gray-400" />
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full outline-none bg-transparent text-sm"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="text-xs text-gray-500">PASSWORD</label>
            <div className="flex items-center border-b py-2">
              <Lock size={16} className="mr-2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full outline-none bg-transparent text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={18} className="text-gray-400" />
                ) : (
                  <Eye size={18} className="text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* BUTTON */}
          <button className="w-full bg-[#F08787] text-white py-3 rounded-md hover:bg-[#e06f6f] hover:shadow-lg transition">
            Create Account
          </button>

          {/* LOGIN LINK */}
         <p className="text-sm text-center text-gray-500 mt-4">
  Already have an account?{" "}
  <Link
    to="/login"
    className="text-[#F08787] font-semibold hover:underline"
  >
    Sign in
  </Link>
</p>

        </div>
      </div>
    </div>
  );
};

export default Signup;