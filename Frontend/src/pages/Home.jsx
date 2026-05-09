import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">

      {/* NAVBAR */}
      {/* <nav className="w-full fixed top-0 left-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100 px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-[#F08787]">
          DearDiary ✨
        </h1>
        <div className="flex gap-4">
          <button className="text-gray-600 hover:text-[#F08787] transition">
            Login
          </button>
          <button className="bg-[#F08787] text-white px-5 py-2 rounded-full shadow-sm hover:bg-[#e06f6f] transition">
            Get Started
          </button>
        </div>
      </nav> */}

      {/* HERO */}
      <section className="pt-28 px-6 md:px-16 flex flex-col md:flex-row items-center">

        {/* LEFT */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-light leading-tight mb-6">
            Write Your Story, <br />
            <span className="text-[#F08787] font-medium">
              One Page at a Time
            </span>
          </h2>

          <p className="text-gray-500 mb-8 max-w-md text-lg">
            A calm and beautiful space to express your thoughts, track your mood,
            and keep your memories forever.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#F08787] text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition">
              Start Writing
            </button>
            <button className="px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition">
              Explore
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img
            src="https://images.pexels.com/photos/1930381/pexels-photo-1930381.jpeg"
            alt="journal"
            className="rounded-2xl shadow-xl w-[92%]"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-16 py-20">
        <h3 className="text-3xl font-semibold text-center mb-12">
          Why You’ll Love It 💖
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition">
            <h4 className="text-lg font-semibold mb-2">📝 Easy Writing</h4>
            <p className="text-gray-500 text-sm">
              Distraction-free journaling with a clean editor.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition">
            <h4 className="text-lg font-semibold mb-2">🔒 Private & Secure</h4>
            <p className="text-gray-500 text-sm">
              Your thoughts are safe and only yours.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition">
            <h4 className="text-lg font-semibold mb-2">🌙 Mood Tracking</h4>
            <p className="text-gray-500 text-sm">
              Understand your emotions over time.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-[#FDECEC] to-[#FFF5F5]">
        <h3 className="text-3xl font-semibold mb-4">
          Start Your Journey Today ✨
        </h3>
        <p className="text-gray-500 mb-6">
          Join thousands writing their stories daily
        </p>
        <button className="bg-[#F08787] text-white px-8 py-3 rounded-full shadow-md hover:scale-105 transition">
          Create Account
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-400 text-sm">
        © 2026 DearDiary. Made with 💖
      </footer>
    </div>
  );
};

export default Home;