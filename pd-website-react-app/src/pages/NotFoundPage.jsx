import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';

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

const NotFoundPage = () => (
    <PageWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
                <div className="inline-block bg-red-100 text-red-500 p-4 rounded-full">
                    <FiAlertTriangle size={48} />
                </div>
                <h1 className="mt-8 text-4xl md:text-5xl font-extrabold text-slate-800">
                    404 - Page Not Found
                </h1>
                <p className="mt-4 text-lg text-slate-600">
                    Sorry, the page you are looking for does not exist.
                </p>
                <div className="mt-8">
                    <Link to="/" className="inline-flex items-center px-6 py-3 font-semibold bg-sky-500 text-white rounded-lg shadow-lg hover:bg-sky-600">
                        Go back to the homepage
                    </Link>
                </div>
            </div>
        </div>
    </PageWrapper>
);

export default NotFoundPage;