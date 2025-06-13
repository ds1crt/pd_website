import React from 'react';
import { motion } from 'framer-motion';

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

const services = [
    { title: 'Individual Therapy', description: 'One-on-one sessions to address your personal challenges.' },
    { title: 'Couples Counseling', description: 'Helping couples navigate their relationship challenges.' },
    { title: 'Family Therapy', description: 'Working with families to improve communication and resolve conflicts.' },
];

const ServicesPage = () => (
    <PageWrapper>
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Hizmetler</h1>
            <p className="text-lg text-secondary mb-12">How I can help you on your journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300">
                    <h2 className="text-2xl font-bold text-primary mb-2">{service.title}</h2>
                    <p className="text-secondary">{service.description}</p>
                </div>
            ))}
        </div>
    </PageWrapper>
);

export default ServicesPage;