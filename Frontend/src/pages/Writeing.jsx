import React, { useState } from "react";

const Writeing = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("😊");

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-28 px-6 md:px-16">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-md p-8">

        {/* TITLE */}
        <input
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-3xl font-semibold outline-none mb-6 placeholder-gray-300"
        />

        {/* MOOD SELECT */}
        <div className="flex gap-3 mb-6">
          {["😊", "😢", "😡", "😍", "😴"].map((m) => (
            <button
              key={m}
              onClick={() => setMood(m)}
              className={`text-xl px-3 py-1 rounded-full transition ${
                mood === m
                  ? "bg-[#FDECEC] scale-110"
                  : "hover:bg-gray-100"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* TOOLBAR */}
        <div className="flex gap-4 mb-4 text-sm text-gray-500">
          <button className="hover:text-black font-bold">B</button>
          <button className="hover:text-black italic">I</button>
        </div>

        {/* CONTENT */}
        <textarea
          placeholder="Start writing your thoughts..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-64 resize-none outline-none text-gray-700 leading-relaxed"
        />

        {/* IMAGE UPLOAD */}
        <div className="mt-6">
          <input type="file" className="text-sm text-gray-500" />
        </div>

        {/* SAVE BUTTON */}
        <div className="mt-8 text-right">
          <button className="bg-[#F08787] text-white px-6 py-2 rounded-full hover:bg-[#e06f6f] transition">
            Save Entry
          </button>
        </div>

      </div>
    </div>
  );
};

export default Writeing;