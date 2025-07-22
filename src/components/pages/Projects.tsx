import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Header from '../shared/Header';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Business Website',
    description:
      'A personal portfolio site to showcase my skills, projects, and contact information.',
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Postman'],
    liveLink: 'https://ddinfotech.com/',
    githubLink: 'https://github.com/ddInfotech01/dd_Website_frontend/tree/main/dd_site_full_frontend',
    image: 'src/assets/website1.png',
  },
  {
    title: 'E-commerce Platform',
    description:
      'A real-time food ordering platform with categories, cart, billing and combo menus.',
    techStack: ['React', 'Redux Toolkit', 'MongoDB'],
    liveLink: 'https://ddtechods.com/',
    githubLink: 'https://github.com/ddInfotech01/ddtechods-frontend',
    image: 'src/assets/website2.png',
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio site to showcase my skills, projects, and contact information.',
    techStack: ['React', 'TypeScript',  'Tailwind CSS', 'Vite'],
    liveLink: 'https://your-portfolio-link.netlify.app',
    githubLink: 'https://github.com/BALAJI-BALAJI/myPortfolio',
    image: 'src/assets/portfolio_img.png',
  },
  {
    title: 'Food Ordering App',
    description:
      'A food ordering web application featuring dynamic menu categories, individual and combo items, cart functionality, and order management pages.',
    techStack: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Bootstrap', 'MongoDB'],
    liveLink: 'http://52.65.172.238:3041/',
    githubLink: 'https://github.com/ddInfotech01/dd-billingapp-frontend',
    image: 'src/assets/foodApp.png',
  },
  {
    title: 'Photography Website',
    description:
      'A photography website designed to showcase portfolios, client galleries, and contact information for booking sessions and inquiries.',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
    liveLink: 'https://vrphotography.studio/portfolio/',
    githubLink: 'https://github.com/ddInfotech01/vrPhotography-site',
    image: 'src/assets/website3.png',
  }, 
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
  <>
    <Header />
    <section id="projects" className="bg-[#0f111a] text-white py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-500 mb-12">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-2 border-purple-500/20 rounded-lg overflow-hidden shadow-md hover:shadow-purple-500/30 transition duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <h3 className="text-center text-xl font-bold mt-2 mb-2">{project.title}</h3>
            <div className="flex justify-center gap-4 mb-4">
              <a
                href={project.liveLink}
                target="_blank"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded flex items-center gap-1"
              >
                <FaExternalLinkAlt /> Live
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                className="bg-black hover:bg-gray-800 text-white px-4 py-1 rounded flex items-center gap-1"
              >
                <FaGithub /> Code
              </a>
              <button
                onClick={() => setSelectedProject(project)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-[#1a1d2b] p-6 rounded-xl max-w-md w-full border border-purple-600 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-4 text-white text-xl hover:font-bold hover:text-red-600"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">{selectedProject.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2">
              {selectedProject.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-purple-700/30 border border-purple-500/30 text-sm px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
    </>
  );
};

export default Projects;