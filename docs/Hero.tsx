// src/components/Hero.tsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Waqas Ali</h1>
        <p className="text-2xl md:text-3xl text-cyan-400 mb-8">
          Software Engineer | Full-Stack Developer
        </p>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-12">
          I build efficient, scalable, and user-friendly web applications. Passionate about problem-solving and creating high-quality code.
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <FaGithub size={32} />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:your-email@example.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <FaEnvelope size={32} />
          </a>
        </div>
        <a
          href="#projects"
          className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-105"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
