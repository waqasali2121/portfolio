// src/components/Experience.tsx
import React from 'react';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Tech Solutions Inc.',
    period: 'Jan 2022 - Present',
    description: 'Led the development of a new client-facing dashboard using React and TypeScript, improving user engagement by 25%. Collaborated with a team of 5 to build and maintain a scalable microservices architecture.',
  },
  {
    role: 'Junior Developer',
    company: 'Web Innovators',
    period: 'Jun 2020 - Dec 2021',
    description: 'Assisted in developing and testing new features for a large-scale e-commerce platform. Wrote clean, maintainable code and contributed to a 15% reduction in page load times.',
  },
  {
    role: 'Cybersecurity Intern',
    company: 'SecureNet',
    period: 'Summer 2019',
    description: 'Conducted vulnerability assessments and penetration testing on web applications. Developed a security awareness training module for company employees.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Professional Experience</h2>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8 md:text-right' : 'pl-8'}`}>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <p className="text-cyan-400 font-semibold mb-1">{exp.period}</p>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-lg text-gray-400 mb-4">{exp.company}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-gray-900"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
