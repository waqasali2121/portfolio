// src/components/Skills.tsx
import React from 'react';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const skills = {
  'Languages & Frameworks': [
    { name: 'JavaScript (ES6+)', level: '90%' },
    { name: 'TypeScript', level: '85%' },
    { name: 'React / Next.js', level: '90%' },
    { name: 'Python', level: '80%' },
    { name: 'HTML5 & CSS3', level: '95%' },
  ],
  'Backend & Databases': [
    { name: 'Node.js / Express', level: '85%' },
    { name: 'PostgreSQL', level: '75%' },
    { name: 'MongoDB', level: '80%' },
    { name: 'Firebase', level: '70%' },
  ],
  'Cybersecurity': [
    { name: 'Network Security', level: '80%' },
    { name: 'Ethical Hacking', level: '75%' },
    { name: 'Security Auditing', level: '70%' },
  ],
  'Tools & Platforms': [
    { name: 'Git & GitHub', level: '95%' },
    { name: 'Docker', level: '70%' },
    { name: 'Vercel / AWS', level: '75%' },
    { name: 'Linux', level: '85%' },
  ],
};

const SkillBar = ({ name, level }: { name: string; level: string }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-gray-300">{name}</span>
      <span className="text-sm font-medium text-gray-400">{level}</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: level }}></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-3"><FaCode /> Languages & Frameworks</h3>
            {skills['Languages & Frameworks'].map(skill => <SkillBar key={skill.name} {...skill} />)}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-3"><FaServer /> Backend & Databases</h3>
            {skills['Backend & Databases'].map(skill => <SkillBar key={skill.name} {...skill} />)}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-3"><FaCode /> Cybersecurity</h3>
            {skills['Cybersecurity'].map(skill => <SkillBar key={skill.name} {...skill} />)}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-3"><FaTools /> Tools & Platforms</h3>
            {skills['Tools & Platforms'].map(skill => <SkillBar key={skill.name} {...skill} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
