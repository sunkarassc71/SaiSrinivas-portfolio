import React from "react";
import profilePic from "../assets/Image.jpg";

function AboutMe() {
  return (
    <div id="aboutme" className="py-16 bg-gradient-to-b text-white px-4">
      <div className="text-black">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side - Details */}
          <div className="md:w-3/4 space-y-4">
            <h2 className="text-3xl font-bold text-violet-500">About Me</h2>
            <p className="text-white">
              From the quiet fields of a small village near Vijayawada to the
              bustling tech scene of Hyderabad, my journey has been rooted in
              curiosity and growth. By day, I craft full-stack solutions as a
              developer; by night, I dive into personal projects that push the
              boundaries of technology. When I’m not coding, you’ll find me
              swinging a cricket bat or reconnecting with nature through farming
              — a perfect balance of innovation and tradition.
            </p>
            <ul className="space-y-2">
              <li className="text-white">
                <strong className="text-blue-500">📍 Location:</strong>{" "}
                Hyderabad, India
              </li>
              <li className="text-white">
                <strong className="text-blue-500">🎂 DOB:</strong> July 1st,
                1997
              </li>
              <li className="text-white">
                <strong className="text-blue-500">💼 Employment:</strong> System
                Soft Technologies
              </li>
            </ul>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/4 flex justify-center">
            <div className="relative w-64 h-54 group overflow-hidden rounded-lg shadow-md">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover border-4 border-white group-hover:border-violet-500 group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gray-100 opacity-70 group-hover:opacity-0 transition duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
