import React from 'react';
import { motion } from 'framer-motion';

const ReviewCard = ({ review, index }) => {
  const formatDate = (timestamp) => {
    if (!timestamp || typeof timestamp.toDate !== 'function') {
      return 'Date not available';
    }
    return timestamp.toDate().toLocaleDateString();
  };
  
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md border border-slate-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 font-bold text-xl">
          {review.name ? review.name.charAt(0).toUpperCase() : '?'}
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-bold text-slate-800">{review.name}</h4>
          <p className="text-xs text-slate-400 mt-1">{formatDate(review.timestamp)}</p>
        </div>
      </div>
      <p className="text-slate-600 mt-4">"{review.comment}"</p>
    </motion.div>
  );
};

export default ReviewCard;
