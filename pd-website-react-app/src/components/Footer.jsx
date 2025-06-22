// src/components/Footer.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

// The { userId } prop has been removed from the function signature
const Footer = () => (
    <footer className="bg-primary text-background mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
                <p className="text-lg">&copy; 2025 Psikolojik Danışman Berra Shahin. Tüm hakları saklıdır.</p>
                <div className="mt-4 grid grid-cols-3 gap-y-2 gap-x-4 md:flex md:justify-center md:space-x-4">
                    <NavLink to="/about" className="hover:text-accent transition-colors">Hakkımda</NavLink>
                    <NavLink to="/services" className="hover:text-accent transition-colors">Hizmetler</NavLink>
                    <NavLink to="/projects" className="hover:text-accent transition-colors">Projeler</NavLink>
                    <NavLink to="/blog" className="hover:text-accent transition-colors">Blog</NavLink>
                    <NavLink to="/reviews" className="hover:text-accent transition-colors">Görüşler</NavLink>
                    <NavLink to="/contact" className="hover:text-accent transition-colors">İletişim</NavLink>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                    <a href="https://www.linkedin.com/in/berraozcakal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors"><FaLinkedin size={20} /></a>
                    <a href="https://www.instagram.com/pd.berraozcakal/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors"><FaInstagram size={20} /></a>
                </div>
                {/* The div for displaying the User ID has been removed */}
            </div>
        </div>
    </footer>
);

export default Footer;