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
    <div className="property-card bg-white">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title and Location */}
        <div className="space-y-1">
          <h3 className="font-heading font-semibold text-xl text-primary">
            {property.title}
          </h3>
          <p className="font-body text-sm text-muted-foreground">
            {property.location}
          </p>
        </div>
        
        {/* Description */}
        <p className="font-body text-foreground line-clamp-2 text-sm leading-relaxed">
          {property.description}
        </p>
        
        {/* Price */}
        <div className="pt-2">
          <span className="font-heading font-semibold text-2xl text-primary">
            {formatPrice(property.price_eur)}
          </span>
        </div>
        
        {/* Meta Information */}
        <div className="flex items-center space-x-4 pt-2 border-t border-gray-100">
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Square className="w-4 h-4" />
            <span className="font-body text-sm">{property.size_sqm} m²</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Bed className="w-4 h-4" />
            <span className="font-body text-sm">{property.rooms}</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Bath className="w-4 h-4" />
            <span className="font-body text-sm">{property.bathrooms}</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <button className="w-full bg-primary text-primary-foreground font-body font-medium py-3 px-6 rounded-md hover:opacity-90 transition-opacity">
          Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;