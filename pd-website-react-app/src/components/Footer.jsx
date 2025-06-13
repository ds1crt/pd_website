import React from 'react';
import {FaLinkedin } from 'react-icons/fa';

const Footer = ({ userId }) => (
    <footer className="bg-primary text-background mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
                <p className="text-lg">&copy; 2025 Psk. Dan. Berra Shahin. Tüm hakları saklıdır.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="/about" className="hover:text-accent transition-colors">Hakkımda</a>
                    <a href="/services" className="hover:text-accent transition-colors">Hizmetler</a>
                    <a href="/projects" className="hover:text-accent transition-colors">Projeler</a>
                    <a href="/blog" className="hover:text-accent transition-colors">Blog</a>
                    <a href="/reviews" className="hover:text-accent transition-colors">Görüşler</a>
                    <a href="/contact" className="hover:text-accent transition-colors">İletişim</a>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                    <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors"><FaLinkedin size={20} /></a>
                </div>
                <div className="mt-6 text-sm text-accent">
                    <p>Kullanıcı ID: {userId}</p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;