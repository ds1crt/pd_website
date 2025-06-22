import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getReviews } from '../firebase/firebaseConfig';
import ReviewCard from '../components/ReviewCard';
// REMOVED: No longer importing ReviewForm

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

const ClientReviewsPage = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const unsubscribe = getReviews(setReviews);
        return () => unsubscribe();
    }, []);

    return (
        <PageWrapper>
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Danışanların Görüşleri</h1>
                <p className="text-lg text-secondary mb-12">Danışanlarımın aldıkları hizmet hakkındaki değerlendirmeleri.</p>
            </div>
            
            {/* REMOVED: The div containing the ReviewForm has been deleted from here. */}
            
            <div className="space-y-8">
                {reviews.map((review, index) => ( // Added index for key prop
                    <ReviewCard key={review.id || index} review={review} /> // Used index as a fallback key
                ))}
            </div>
        </PageWrapper>
    );
};

export default ClientReviewsPage;