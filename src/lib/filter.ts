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

interface FilterState {
  minPrice: string;
  maxPrice: string;
  location: string;
  minSize: string;
  maxSize: string;
  rooms: string;
  bathrooms: string;
}

export const filterProperties = (properties: Property[], filters: FilterState): Property[] => {
  return properties.filter((property) => {
    // Price filter
    if (filters.minPrice && property.price_eur < Number(filters.minPrice)) {
      return false;
    }
    if (filters.maxPrice && property.price_eur > Number(filters.maxPrice)) {
      return false;
    }

    // Location filter (case-insensitive substring match)
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }

    // Size filter
    if (filters.minSize && property.size_sqm < Number(filters.minSize)) {
      return false;
    }
    if (filters.maxSize && property.size_sqm > Number(filters.maxSize)) {
      return false;
    }

    // Rooms filter (minimum)
    if (filters.rooms && property.rooms < Number(filters.rooms)) {
      return false;
    }

    // Bathrooms filter (minimum)
    if (filters.bathrooms && property.bathrooms < Number(filters.bathrooms)) {
      return false;
    }

    return true;
  });
};