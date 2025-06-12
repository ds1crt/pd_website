import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { MessageProvider } from './contexts/MessageContext';
import { ensureAuth } from './firebase/firebaseConfig';

import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ClientReviewsPage from './pages/ClientReviewsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/reviews" element={<ClientReviewsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [userIdForFooter, setUserIdForFooter] = useState('Loading...');

  useEffect(() => {
    ensureAuth()
      .then(user => {
        setUserIdForFooter(user ? user.uid : 'N/A (Anonymous)');
      })
      .catch(error => {
        console.error("Auth failed:", error);
        setUserIdForFooter('Auth Error');
      });
  }, []);

  return (
    <Router>
      <MessageProvider>
        <div className="flex flex-col min-h-screen bg-background font-inter">
          <Header />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <AnimatedRoutes />
          </main>
          <Footer userId={userIdForFooter} />
        </div>
      </MessageProvider>
    </Router>
  );
}

export default App;