import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './components/Hero';
import TermsContent from './components/TermsContent';
import Footer from '../Home/components/Footer';
import { Header } from '../Home/components/Header';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms and Conditions - Kudajadri Drizzle Homestay</title>
        <meta
          name="description"
          content="Read our Terms and Conditions for Kudajadri Drizzle Homestay. Understand our policies regarding reservations, cancellations, and guest responsibilities."
        />
      </Helmet>
      
      <main className="flex-grow">
        <Header />
        <Hero />
        <TermsContent />
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
