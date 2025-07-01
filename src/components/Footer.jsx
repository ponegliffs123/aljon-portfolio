import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-gray-800 text-gray-300">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} Aljon Sabalo. All rights reserved.
        </p>
        <p className="text-sm">
          Built with React, Tailwind CSS, and Framer Motion.
        </p>        
        </div>
    </footer>
  );
}