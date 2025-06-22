import React from 'react'; // REMOVED: { useState, useContext }
import { motion } from 'framer-motion';
// REMOVED: FiSend, FiUser, FiMail, FiMessageSquare
import { FiPhone, FiMail } from 'react-icons/fi'; 

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

const ContactPage = () => {
  // REMOVED: All state and context hooks are no longer needed.

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">İletişime Geçin</h1>
          <p className="text-lg text-slate-600">Have a project in mind? I'd love to hear from you.</p>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 text-lg text-slate-600">
            <div className="flex items-center gap-2">
              <FiPhone />
              <span>+90 542 325 2652</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail />
              <span>pd.berraozcakal@gmail.com</span>
            </div>
          </div>
        </div>

        {/* This entire div containing the form has been removed. */}
      </div>
    </PageWrapper>
  );
};

export default ContactPage;