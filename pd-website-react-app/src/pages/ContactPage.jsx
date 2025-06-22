import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiMessageSquare, FiPhone } from 'react-icons/fi';
import { MessageContext } from '../contexts/MessageContext';

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
  const { showMessage } = useContext(MessageContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- Replace this with your actual Cloud Function URL ---
    const functionUrl = 'https://sendcontactemail-unwfir7x4q-nw.a.run.app'; 

    try {
        const response = await fetch(functionUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            // If the server response is not OK, throw an error
            throw new Error('Something went wrong. Please try again.');
        }
        
        // Show success message and reset form
        showMessage('Thank you for your message!', 'success');
        setFormData({ name: '', email: '', message: '' });

    } catch (error) {
        // Show error message
        showMessage(error.message, 'error');
    } finally {
        // Re-enable the submit button
        setIsSubmitting(false);
    }
  };
  return (
    <PageWrapper>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-2xl mx-auto"><h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">İletişime Geçin</h1><p className="text-lg text-slate-600">Have a project in mind? I'd love to hear from you.</p></div>
            
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

            <div className="mt-8 max-w-xl mx-auto">
                <motion.form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
                    <div className="relative"><FiUser className="absolute top-1/2 -translate-y-1/2 left-3 text-slate-400" /><input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500" /></div>
                    <div className="relative"><FiMail className="absolute top-1/2 -translate-y-1/2 left-3 text-slate-400" /><input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500" /></div>
                    <div className="relative"><FiMessageSquare className="absolute top-6 -translate-y-1/2 left-3 text-slate-400" /><textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg resize-none focus:ring-2 focus:ring-sky-500"></textarea></div>
                    <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold bg-sky-500 text-white rounded-lg shadow-lg hover:bg-sky-600 disabled:bg-slate-400"><FiSend />{isSubmitting ? 'Sending...' : 'Send Message'}</button>
                </motion.form>
            </div>
        </div>
    </PageWrapper>
  );
};

export default ContactPage;