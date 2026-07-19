// src/components/Contact.tsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to connect, feel free to reach out. Let's build something amazing together!
        </p>
        <a
          href="mailto:your-email@example.com"
          className="inline-block bg-cyan-500 text-white font-bold text-lg py-3 px-8 rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-105 mb-12"
        >
          Say Hello
        </a>
        <div className="flex justify-center space-x-8">
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
      </div>
    </section>
  );
};

export default Contact;
