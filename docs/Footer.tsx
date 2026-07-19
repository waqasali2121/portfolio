// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <p>&copy; {currentYear} Waqas Ali. All Rights Reserved.</p>
        <p className="text-sm mt-2">
          Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Next.js</a> & <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Tailwind CSS</a>. Deployed on Vercel.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
