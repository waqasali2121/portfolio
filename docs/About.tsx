// src/components/About.tsx
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-cyan-400">
              <Image
                src="/placeholder-profile.jpg" // Replace with your professional headshot
                alt="Waqas Ali"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-lg text-gray-300 mb-4">
              Hello! I'm Waqas Ali, a dedicated Software Engineer with a strong foundation in cybersecurity and software development. My journey in tech is driven by a passion for solving complex problems and building applications that make a difference.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              With experience in both front-end and back-end technologies, I specialize in creating seamless and robust digital experiences. I thrive in collaborative environments and am always eager to learn new technologies and methodologies.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not coding, I enjoy exploring the latest trends in cybersecurity and contributing to open-source projects. I'm currently seeking opportunities where I can apply my skills to build innovative and secure software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
