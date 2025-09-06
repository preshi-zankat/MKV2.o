import React from "react";

const Home = () => {
  const features = [
    {
      title: "📝 Easy Journaling",
      desc: "Write and organize your daily entries with a clean, distraction-free interface.",
    },
    {
      title: "📸 Add Images",
      desc: "Attach images and create a more vivid, memorable journal experience.",
    },
    {
      title: "🔒 Private & Secure",
      desc: "Your thoughts are safe with enterprise-grade security and encryption.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-blue-100 flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
        Because Memories Deserve to Stay✨
      </h1>
      <p className="text-lg text-gray-600 max-w-xl text-center mb-8">
        Capture your thoughts, feelings, and daily experiences in one secure place.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-6 py-3 rounded-xl bg-pink-500 text-white font-semibold hover:bg-pink-600 transition">
          Get Started
        </button>
        <button className="px-6 py-3 rounded-xl bg-white border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>

      {/* Features - Professional Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-6xl">
        {features.map((card, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-gradient-to-br from-white via-purple-50 to-pink-50 
                       border border-gray-200 shadow-sm hover:shadow-md 
                       transition-transform duration-300 hover:-translate-y-1"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">{card.title}</h2>
            <p className="text-gray-600 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
