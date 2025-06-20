// src/components/Footer.jsx
import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = ({ userId }) => (
    <footer className="bg-primary text-background mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
                <p className="text-lg">&copy; 2025 Psk. Dan. Berra Shahin. Tüm hakları saklıdır.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    {/* Use NavLink instead of <a> */}
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
                <div className="mt-6 text-sm text-accent">
                    <p>Kullanıcı ID: {userId}</p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;