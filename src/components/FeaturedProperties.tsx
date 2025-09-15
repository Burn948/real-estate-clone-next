import React from 'react';
import PropertyCard from './PropertyCard';
import catalogData from '../data/catalog.json';

const FeaturedProperties = () => {
  // Show first 3 properties as featured
  const featuredProperties = catalogData.slice(0, 3);

  return (
    <section className="pt-16 pb-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading font-normal text-3xl md:text-4xl text-primary mb-4">
            Featured Properties
          </h2>
          <p className="font-body text-lg text-primary/80 max-w-2xl mx-auto">
            Check our luxury properties of distinguished style, location and charm in different regions of Montenegro
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
        
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-3 border border-primary text-primary font-body hover:bg-primary hover:text-white transition-colors rounded-md">
            <span className="mr-2">☰</span>
            VIEW PROPERTIES LIST
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;