import React from 'react';
import FaqList from '../../FaqComponent/FaqList';

interface FaqItem {
  question: string;
  answer: string;
}

interface WayanadFaqsProps {
  faqs: FaqItem[];
}

export const WayanadFaqs: React.FC<WayanadFaqsProps> = ({ faqs }) => {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return <FaqList title="Frequently Asked Questions about Wayanad" faqs={faqs} />;
}; 