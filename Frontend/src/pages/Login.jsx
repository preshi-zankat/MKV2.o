import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen flex">
      
      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src="https://images.pexels.com/photos/4217466/pexels-photo-4217466.jpeg"
          alt="journal"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-12 text-white">
          <h1 className="text-4xl font-light mb-4">
            Welcome Back
          </h1>
          <p className="text-sm opacity-80 max-w-sm">
            Continue your journey and capture your thoughts again.
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
          
          <h2 className="text-2xl font-semibold mb-2">Sign In</h2>
          <p className="text-gray-500 text-sm mb-6">
            Welcome back! Please enter your details
          </p>

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
          <div className="mb-2">
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

          {/* FORGOT PASSWORD */}
          <div className="text-right mb-6">
            <span className="text-xs text-gray-500 cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          {/* BUTTON */}
          <button className="w-full bg-[#F08787] text-white py-3 rounded-md hover:bg-[#e06f6f] hover:shadow-lg transition">
            Sign In
          </button>

          {/* SIGNUP LINK */}
          <p className="text-sm text-center text-gray-500 mt-4">
  Don’t have an account?{" "}
  <Link
    to="/signup"
    className="text-[#F08787] font-semibold hover:underline"
  >
    Create account
  </Link>
</p>

        </div>
      </div>
    </div>
  );
};


export default Login;