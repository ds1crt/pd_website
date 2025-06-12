import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const blogPosts = [
    { id: 1, title: 'Understanding Anxiety', summary: 'A deep dive into the causes and treatments of anxiety disorders.', date: 'June 1, 2024' },
    { id: 2, title: 'The Importance of Self-Care', summary: 'Practical tips for incorporating self-care into your daily routine.', date: 'May 15, 2024' },
];

const BlogPage = () => (
    <PageWrapper>
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Blog</h1>
            <p className="text-lg text-secondary mb-12">Thoughts and insights on mental health and well-being.</p>
        </div>
        <div className="space-y-8">
            {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-primary mb-2">{post.title}</h2>
                        <p className="text-sm text-accent mb-4">{post.date}</p>
                        <p className="text-secondary mb-4">{post.summary}</p>
                        <Link to={`/blog/${post.id}`} className="font-semibold text-primary hover:text-secondary transition-colors">Read more</Link>
                    </div>
                </div>
            ))}
        </div>
    </PageWrapper>
);

export default BlogPage;