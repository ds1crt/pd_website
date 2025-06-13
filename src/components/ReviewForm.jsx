import React, { useState, useContext } from 'react';
import { addReview } from '../firebase/firebaseConfig';
import { MessageContext } from '../contexts/MessageContext';
import { FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

const ReviewForm = () => {
  const { showMessage } = useContext(MessageContext);
  const [clientName, setClientName] = useState('');
  const [clientComment, setClientComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!clientName.trim() || !clientComment.trim()) return showMessage("Lütfen tüm alanları doldurunuz.", "error");
    setIsSubmitting(true);
    try {
      await addReview(clientName, clientComment);
      showMessage("Yorumunuz için teşekkürler!", "success");
      setClientName('');
      setClientComment('');
    } catch (error) {
      showMessage("Yorumunuzu eklerken bir hata oluştu.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
      <div className="relative">
        <FiUser className="absolute top-1/2 -translate-y-1/2 left-3 text-slate-400" />
        <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="İsminiz" required disabled={isSubmitting} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500" />
      </div>
      <div className="relative">
        <FiMessageSquare className="absolute top-6 -translate-y-1/2 left-3 text-slate-400" />
        <textarea rows="5" value={clientComment} onChange={(e) => setClientComment(e.target.value)} placeholder="Deneyiminizi paylaşınız..." required disabled={isSubmitting} className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg resize-none focus:ring-2 focus:ring-sky-500"></textarea>
      </div>
      <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold bg-sky-500 text-white rounded-lg shadow-lg hover:bg-sky-600 disabled:bg-slate-400">
        <FiSend />{isSubmitting ? 'Ekleniyor...' : 'Submit Review'}
      </button>
    </form>
  );
};

export default ReviewForm;
