import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const MessageBox = ({ text, type }) => {
  const icon = type === 'success' ? <FiCheckCircle size={20} /> : <FiAlertCircle size={20} />;
  return (
    <motion.div
      className={`fixed top-20 right-5 p-4 rounded-lg shadow-xl text-white text-sm z-50 flex items-center gap-3 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
      initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}
    >
      {icon}<span>{text}</span>
    </motion.div>
  );
};

export default MessageBox;
