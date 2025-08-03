import React from 'react';
import FaqList from '../../FaqComponent/FaqList';

interface WayanadFaqsCMSProps {
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const WayanadFaqsCMS: React.FC<WayanadFaqsCMSProps> = ({ title, faqs }) => {
  if (!faqs || faqs.length === 0) {
    return null; // Don't render anything if FAQs are not available
  }

  return <FaqList title={title} faqs={faqs} />;
}; 