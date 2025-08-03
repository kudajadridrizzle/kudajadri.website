import React, { useEffect, useState } from 'react';
import fm from 'front-matter';
import wayanadFaqRaw from '../../../File/wayanadfaqs.md?raw';
import FaqList from '../../FaqComponent/FaqList';

interface FaqFrontMatterAttributes {
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const WayanadFaqs: React.FC = () => {
  const [faqData, setFaqData] = useState<FaqFrontMatterAttributes | null>(null);

  useEffect(() => {
    try {
      const parsedFaq = fm<FaqFrontMatterAttributes>(wayanadFaqRaw);
      setFaqData(parsedFaq.attributes);
    } catch (error) {
      console.error('Error loading Wayanad FAQs:', error);
    }
  }, []);

  if (!faqData) {
    return null; // Don't render anything if FAQs are not available
  }

  return <FaqList {...faqData} />;
}; 