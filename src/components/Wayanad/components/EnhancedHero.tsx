import React from "react";
import { Header } from "../../Home/components/Header";

interface EnhancedHeroProps {
  heroTitle: string;
}

export const EnhancedHero: React.FC<EnhancedHeroProps> = ({ heroTitle }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with subtle zoom effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-100 transition-transform duration-[20000ms] ease-linear hover:scale-105"
        style={{ backgroundImage: `url('/Muthanga.jpg')` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col h-full">
        <Header />

        {/* Hero Text: Center-Bottom */}
        <div className="flex-1 flex items-end justify-center pb-20 px-6 text-center">
          <h1 className="font-staylista text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug text-white drop-shadow-lg max-w-4xl">
            {heroTitle}
          </h1>
        </div>
      </div>
    </section>
  );
};
