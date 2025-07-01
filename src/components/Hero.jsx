import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 to-gray-900/80"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-mono mb-2 text-sm md:text-base text-pink-400">
            <span>&gt;_ Hello World! I'm Aljon</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Aljon Sabalo
          </h1>
          
          <TypeAnimation
            sequence={[
              'Computer Engineer',
              1000,
              'Web3 Developer',
              1000,
              'AI Solutions Builder',
              1000,
              'Full-Stack Tinkerer',
              1000
            ]}
            wrapper="div"
            speed={50}
            className="text-xl md:text-3xl text-gray-300 mb-8"
            repeat={Infinity}
          />
          
          <div className="flex gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf" 
              download 
              className="px-6 py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-medium hover:bg-purple-400/10 transition"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}