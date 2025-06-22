import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

// Updated AppNavLink to accept and pass an onClick event handler
const AppNavLink = ({ to, children, className = "", onClick }) => (
  <RouterNavLink
    to={to}
    onClick={onClick}
    className={`relative text-lg font-medium text-primary hover:text-secondary transition-colors ${className}`}
  >
    {children}
  </RouterNavLink>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // New function to explicitly close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <RouterNavLink
              to="/"
              className="text-2xl font-bold text-primary leading-tight"
            >
              <span className="block">Psikolojik Danışman</span>
              <span className="block">Berra Shahin</span>
            </RouterNavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <AppNavLink to="/">Ana Sayfa</AppNavLink>
              <AppNavLink to="/about">Hakkımda</AppNavLink>
              <AppNavLink to="/services">Hizmetler</AppNavLink>
              <AppNavLink to="/projects">Projeler</AppNavLink>
              <AppNavLink to="/blog">Blog</AppNavLink>
              <AppNavLink to="/reviews">Görüşler</AppNavLink>
              <AppNavLink to="/contact">İletişim</AppNavLink>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-secondary focus:outline-none"
            >
              <span className="sr-only">Ana Menü</span>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* The closeMenu function is now passed to each mobile link */}
              <AppNavLink
                to="/"
                className="block px-3 py-2 rounded-md"
                onClick={closeMenu}
              >
                Ana Sayfa
              </AppNavLink>
              <AppNavLink
                to="/about"
                className="block px-3 py-2 rounded-md"
                onClick={closeMenu}
              >
                Hakkımda
              </AppNavLink>
              <AppNavLink
                to="/services"
                className="block px-3 py-2 rounded-md"
                onClick={closeMenu}
              >
                Hizmetler
              </AppNavLink>
              <AppNavLink
                to="/projects"
                className="block px-3 py-2 rounded-md"
                onClick={closeMenu}
              >
                Projeler
              </AppNavLink>
              <AppNavLink
                to="/blog"
                className="block px-3 py-2 rounded-md"
                onClick={closeMenu}
              >
                Blog
              </AppNavLink>
              <AppNavLink
                to="/reviews"
                className="block px-3 py-2 rounded-md"
                onClick={closeMenu}
              >
                Görüşler
              </AppNavLink>
              <AppNavLink
                to="/contact"
                className="block px-3 py-2 rounded-md"
                onClick={closeMenu}
              >
                İletişim
              </AppNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
