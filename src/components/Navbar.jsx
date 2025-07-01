import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md border-b border-purple-500/30 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          AljonSabalo
        </a>
        
        <div className="flex gap-6 items-center">
          <a href="#projects" className="text-gray-300 hover:text-pink-400 transition">Work</a>
          <a href="#skills" className="text-gray-300 hover:text-pink-400 transition">Skills</a>
          <a href="#contact" className="text-gray-300 hover:text-pink-400 transition">Contact</a>
          
          <div className="flex gap-4">
            <a href="https://github.com/ponegliffs123" target="_blank" rel="noreferrer">
              <FiGithub className="text-xl text-gray-300 hover:text-pink-400 transition" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
              <FiLinkedin className="text-xl text-gray-300 hover:text-pink-400 transition" />
            </a>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-700 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}