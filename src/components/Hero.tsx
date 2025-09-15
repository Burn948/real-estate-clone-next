import React from 'react';
import { Search } from 'lucide-react';
import heroImage from '../images/pexels-kate-holovacheva-1824230-9743746.jpg';

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Stunning panoramic view of Montenegro with mountains and bay"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Enter an address or City"
              className="w-full pl-12 pr-4 py-4 rounded-md text-gray-900 font-body text-lg focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>
        
        {/* Main Heading */}
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-normal text-4xl md:text-5xl xl:text-6xl leading-tight mb-6 text-shadow-lg">
            Where Dreams Become Views: Discover Your Perfect Property!
          </h1>
          
          <p className="font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-shadow-lg">
            Check our luxury properties of distinguished style, location and charm in different regions of Montenegro
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
