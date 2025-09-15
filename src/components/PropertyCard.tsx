import React from 'react';
import { Bed, Bath, Square } from 'lucide-react';

interface Property {
  title: string;
  location: string;
  description: string;
  price_eur: number;
  size_sqm: number;
  bathrooms: number;
  rooms: number;
  image: string;
  slug: string;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="font-heading text-xl text-primary text-center">
          {property.title}
        </h3>
        
        {/* Location */}
        <p className="font-body text-sm text-primary/70 text-center border-b border-gray-200 pb-2">
          {property.location}
        </p>
        
        {/* Price */}
        <div className="text-center py-2">
          <span className="font-heading text-2xl text-primary">
            {formatPrice(property.price_eur)}
          </span>
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <button className="px-8 py-2 border border-primary text-primary font-body hover:bg-primary hover:text-white transition-colors">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;