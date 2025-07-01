import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "Python", level: 90 },
  { name: "VB.NET", level: 85 },
  { name: "React", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "SQL", level: 85 },
  { name: "OpenCV", level: 70 },
  { name: "PHP", level: 75 },
  { name: "C++", level: 70 },
  { name: "Arduino", level: 65 }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-100 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Measured by project complexity and hands-on experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                <span className="text-pink-600 dark:text-pink-400">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-600 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-600" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}