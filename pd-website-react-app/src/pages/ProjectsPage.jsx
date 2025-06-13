import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const PageWrapper = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
    >
        {children}
    </motion.div>
);

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of the project, its purpose, and the technologies used.',
        imageUrl: 'https://via.placeholder.com/400x250',
        liveUrl: '#',
        repoUrl: '#',
    },
    {
        title: 'Project Two',
        description: 'A brief description of the project, its purpose, and the technologies used.',
        imageUrl: 'https://via.placeholder.com/400x250',
        liveUrl: '#',
        repoUrl: '#',
    },
];

const ProjectsPage = () => (
    <PageWrapper>
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Projelerim</h1>
            <p className="text-lg text-secondary mb-12">A collection of my work.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                        <p className="text-secondary mb-4">{project.description}</p>
                        <div className="flex justify-end space-x-4">
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                                <FiGithub size={24} />
                            </a>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                                <FiExternalLink size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </PageWrapper>
);

export default ProjectsPage;