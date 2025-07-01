import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample project data
const projects = [
  {
    id: 1,
    title: "AI Vending Machine",
    description: "Currency validation with 92% accuracy using OpenCV",
    tags: ["Python", "OpenCV"],
    category: "AI",
    metric: "92% accuracy",
  },
  {
    id: 2,
    title: "Web3 Wallet",
    description: "Browser extension for crypto transactions",
    tags: ["React", "TypeScript", "Web3"],
    category: "Web3",
    metric: "25% faster TXs",
  },
  {
    id: 3,
    title: "Embedded Sensor",
    description: "IoT sensor node with ultra-low power consumption",
    tags: ["C", "STM32", "IoT"],
    category: "Embedded",
    metric: "6 months battery",
  },
  // Add more projects as needed
];

const categories = ["All", "Web3", "AI", "Embedded"];

const badgeColors = {
  Python: "bg-yellow-200 text-yellow-800",
  OpenCV: "bg-blue-200 text-blue-800",
  React: "bg-blue-100 text-blue-700",
  TypeScript: "bg-blue-300 text-blue-900",
  Web3: "bg-purple-200 text-purple-800",
  C: "bg-green-200 text-green-800",
  STM32: "bg-gray-200 text-gray-800",
  IoT: "bg-teal-200 text-teal-800",
};

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-medium transition 
              ${
                active === cat
                  ? "bg-indigo-500 text-white shadow"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              }
              focus:outline-none focus:ring-2 focus:ring-pink-400`}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              tabIndex={0}
              className="relative bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-800
                hover:shadow-pink-500/30 hover:-translate-y-2 hover:border-pink-400 transition
                focus-within:ring-2 focus-within:ring-indigo-400"
              aria-label={project.title}
            >
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 rounded text-xs font-semibold ${badgeColors[tag] || "bg-gray-200 text-gray-800"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 rounded-full bg-pink-500 text-white text-xs font-bold shadow">
                  {project.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;