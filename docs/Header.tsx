// src/components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-cyan-400">
            <a href="#hero">Waqas Ali</a>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="text-gray-300 hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
