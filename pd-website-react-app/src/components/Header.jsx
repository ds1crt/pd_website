import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const AppNavLink = ({ to, children }) => (
    <RouterNavLink to={to} className="relative text-lg font-medium text-primary hover:text-secondary transition-colors">
        {children}
    </RouterNavLink>
);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <RouterNavLink to="/" className="text-2xl font-bold text-primary">
                            Psk. Dan. Berra Ozcakal Shahin
                        </RouterNavLink>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <AppNavLink to="/">Home</AppNavLink>
                            <AppNavLink to="/about">About</AppNavLink>
                            <AppNavLink to="/services">Services</AppNavLink>
                            <AppNavLink to="/projects">Projects</AppNavLink>
                            <AppNavLink to="/blog">Blog</AppNavLink>
                            <AppNavLink to="/reviews">Reviews</AppNavLink>
                            <AppNavLink to="/contact">Contact</AppNavLink>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-secondary focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <AppNavLink to="/">Home</AppNavLink>
                            <AppNavLink to="/about">About</AppNavLink>
                            <AppNavLink to="/services">Services</AppNavLink>
                            <AppNavLink to="/projects">Projects</AppNavLink>
                            <AppNavLink to="/blog">Blog</AppNavLink>
                            <AppNavLink to="/reviews">Reviews</AppNavLink>
                            <AppNavLink to="/contact">Contact</AppNavLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;