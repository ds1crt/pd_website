import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getReviews } from '../firebase/firebaseConfig';
import ReviewCard from '../components/ReviewCard';
import ReviewForm from '../components/ReviewForm';

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
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Client Reviews</h1>
                <p className="text-lg text-secondary mb-12">What my clients are saying about their experience.</p>
            </div>
            <div className="mb-12">
                <ReviewForm />
            </div>
            <div className="space-y-8">
                {reviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
        </PageWrapper>
    );
};

export default ClientReviewsPage;