import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Rakson OPC",
    period: "Jan 2025 - May 2025",
    description: [
      "Developed Web3 wallet browser extensions using React/TypeScript",
      "Built AI chatbot (Python/OpenAI) reducing support response times by 25%",
      "Optimized cryptocurrency transaction workflows with API integrations"
    ]
  }
];

const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Engineering",
    institution: "Southern Leyte State University",
    period: "2021-2025"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left text-gray-800 dark:text-white">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-l-4 border-purple-500"
                >
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">{exp.role}</h4>
                  <p className="text-pink-600 dark:text-pink-400 font-medium">{exp.company} • {exp.period}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                        <span className="mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left text-gray-800 dark:text-white">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-l-4 border-pink-500"
                >
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h4>
                  <p className="text-pink-600 dark:text-pink-400 font-medium">{edu.institution} • {edu.period}</p>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold mt-12 mb-6 text-center lg:text-left text-gray-800 dark:text-white">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Google Analytics Certification (Google, 2025)",
                "Introduction to IoT (Cisco, 2025)",
                "Networking Basics (Cisco, 2025)",
                "CS101: Introduction to Computer Science (Saylor Academy)"
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"
                >
                  <p className="text-gray-600 dark:text-gray-300">{cert}</p>
                </motion.div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}