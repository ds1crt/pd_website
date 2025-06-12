import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = ({ userId }) => (
    <footer className="bg-primary text-background mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
                <p className="text-lg">&copy; 2024 Psk. Dan. Berra Ozcakal Shahin. All Rights Reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="/about" className="hover:text-accent transition-colors">About</a>
                    <a href="/services" className="hover:text-accent transition-colors">Services</a>
                    <a href="/projects" className="hover:text-accent transition-colors">Projects</a>
                    <a href="/blog" className="hover:text-accent transition-colors">Blog</a>
                    <a href="/reviews" className="hover:text-accent transition-colors">Reviews</a>
                    <a href="/contact" className="hover:text-accent transition-colors">Contact</a>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                    <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors"><FaTwitter size={20} /></a>
                    <a href="#" aria-label="GitHub" className="hover:text-accent transition-colors"><FaGithub size={20} /></a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors"><FaLinkedin size={20} /></a>
                </div>
                <div className="mt-6 text-sm text-accent">
                    <p>User ID: {userId}</p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;