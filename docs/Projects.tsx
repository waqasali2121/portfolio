// src/components/Projects.tsx
import React from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Project One Title',
    description: 'A brief but compelling description of your project. Talk about the problem it solves and the value it provides.',
    image: '/project-placeholder-1.svg', // Recommended size: 1200x800
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Two Title',
    description: 'Showcase another great project. Highlight the key technologies and your specific role in its development.',
    image: '/project-placeholder-2.svg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Three Title',
    description: 'This could be a cybersecurity tool, a mobile app, or a complex web application. Make it interesting.',
    image: '/project-placeholder-3.svg',
    tags: ['Python', 'Django', 'Docker', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-300 flex flex-col">
              <div className="relative h-56 w-full">
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-gray-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                <div className="mt-auto flex justify-end space-x-4">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <FaGithub size={24} />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <FaExternalLinkAlt size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
