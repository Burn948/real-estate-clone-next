import React from 'react';
import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="bg-brand-gray-bg pt-24 pb-20 md:pt-28 md:pb-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="font-heading font-semibold text-4xl md:text-5xl xl:text-6xl leading-tight text-primary">
              Where Dreams Become Views: Discover Your Perfect Property!
            </h1>
            
            <p className="font-body text-lg md:text-xl text-primary/80 max-w-[820px] leading-relaxed">
              Check our luxury properties of distinguished style, location and charm in different regions of Montenegro
            </p>
          </div>
          
          {/* Hero Image - Hidden on mobile, shown on lg+ */}
          <div className="hidden lg:block">
            <img 
              src={heroImage} 
              alt="Luxury property in Montenegro with mountain views"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;