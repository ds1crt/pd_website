import React from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <RouterNavLink 
      to={to} 
      onClick={onClick} 
      className="relative px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors"
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500"
          layoutId="underline" // This key enables the animation between links
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </RouterNavLink>
  );
};

export default NavLink;
