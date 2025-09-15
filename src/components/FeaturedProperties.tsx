import React from 'react';
import PropertyCard from './PropertyCard';
import catalogData from '../data/catalog.json';

const FeaturedProperties = () => {
  // Show first 3 properties as featured
  const featuredProperties = catalogData.slice(0, 3);

  return (
    <section className="pt-12 pb-16">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="font-heading font-semibold text-3xl md:text-4xl text-primary mb-4">
            Featured Properties
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;