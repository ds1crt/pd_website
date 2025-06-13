import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FiSend } from 'react-icons/fi';

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

const AboutPage = () => (
  <PageWrapper>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <section className="text-center min-h-[70vh] flex flex-col items-center justify-center">
        <motion.h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Online <span className="text-sky-500">Psikolojik Danışmanlık</span>
        </motion.h1>
        <motion.p className="max-w-2xl mx-auto text-lg text-slate-600 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          Çocuk, Ergen ve Ebeveyn
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <NavLink to="/contact" className="inline-flex items-center gap-2 px-8 py-3 font-semibold bg-sky-500 text-white rounded-lg shadow-lg hover:bg-sky-600"><FiSend /> İletişime Geçin</NavLink>
        </motion.div>
      </section>
    </div>
  </PageWrapper>
);

export default AboutPage;
