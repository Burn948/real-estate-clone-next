import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Filters from '../components/Filters';
import PropertyCard from '../components/PropertyCard';
import { filterProperties } from '../lib/filter';
import catalogData from '../data/catalog.json';

interface FilterState {
  minPrice: string;
  maxPrice: string;
  location: string;
  minSize: string;
  maxSize: string;
  rooms: string;
  bathrooms: string;
}

const Catalog = () => {
  const [filters, setFilters] = useState<FilterState>({
    minPrice: '',
    maxPrice: '',
    location: '',
    minSize: '',
    maxSize: '',
    rooms: '',
    bathrooms: ''
  });

  const [filteredProperties, setFilteredProperties] = useState(catalogData);

  // Apply filters whenever filters change
  useEffect(() => {
    const filtered = filterProperties(catalogData, filters);
    setFilteredProperties(filtered);
  }, [filters]);

  // Handle URL parameters for location filtering
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const locationParam = urlParams.get('location');
    if (locationParam) {
      setFilters(prev => ({ ...prev, location: locationParam }));
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Property Catalog - Find New Home</title>
        <meta name="description" content="Browse our complete catalog of luxury properties in Montenegro. Filter by price, location, size, and amenities to find your perfect home." />
        <meta property="og:title" content="Property Catalog - Find New Home" />
        <meta property="og:description" content="Browse our complete catalog of luxury properties in Montenegro. Filter by price, location, size, and amenities to find your perfect home." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20 pb-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h1 className="font-heading font-normal text-4xl md:text-5xl text-primary uppercase tracking-wider">
                FIND PROPERTY
              </h1>
            </div>
            
            <Filters 
              filters={filters} 
              onFilterChange={setFilters}
            />
            
            {filteredProperties.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property, index) => (
                  <PropertyCard key={index} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="font-heading text-xl text-primary mb-2">
                  No properties match the filters
                </h3>
                <p className="font-body text-muted-foreground">
                  Try adjusting your search criteria to see more results.
                </p>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Catalog;