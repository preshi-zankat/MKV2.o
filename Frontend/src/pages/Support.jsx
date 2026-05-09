import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF6F6] to-[#FAFAFA] pt-32 px-6">

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl md:text-6xl font-light text-[#333333] mb-6">
          A Space for Your <br />
          <span className="text-[#F08787] font-medium">Thoughts & Stories ✨</span>
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed">
          DearDiary is more than just a journal — it’s your personal sanctuary
          where memories, emotions, and dreams come to life.
        </p>
      </div>

      {/* MISSION + IMAGE STYLE CARD */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">

        {/* LEFT */}
        <div className="bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-md">
          <h2 className="text-3xl font-semibold text-[#F08787] mb-4">
            Our Mission 💖
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            In a fast-moving world, we believe everyone deserves a calm place to
            pause and reflect.
          </p>

          <p className="text-gray-600 leading-relaxed">
            DearDiary helps you capture your journey — from everyday thoughts to
            life-changing moments.
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="flex justify-center">
          <div className="w-full h-72 bg-[#FDECEC] rounded-3xl flex items-center justify-center text-4xl shadow-inner">
            📖✨
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why You'll Love It 💕
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h4 className="font-semibold mb-2">📝 Simple Writing</h4>
            <p className="text-gray-500 text-sm">
              Clean and distraction-free experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h4 className="font-semibold mb-2">🔒 Private</h4>
            <p className="text-gray-500 text-sm">
              Your thoughts stay completely secure.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h4 className="font-semibold mb-2">🌙 Mood Tracking</h4>
            <p className="text-gray-500 text-sm">
              Understand your emotions over time.
            </p>
          </div>

        </div>
      </div>

      {/* FINAL SECTION */}
      <div className="max-w-3xl mx-auto text-center bg-white/80 backdrop-blur-md rounded-3xl shadow-md p-12 mb-20">
        <h2 className="text-3xl font-semibold text-[#F08787] mb-4">
          Built with Care 🌸
        </h2>

        <p className="text-gray-600 leading-relaxed">
          DearDiary was created to make technology feel warm and human — a place
          where your thoughts are valued, not just stored.
        </p>
      </div>

    </div>
  );
};

export default About;