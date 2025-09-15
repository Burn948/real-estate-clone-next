import React from 'react';

interface FilterState {
  minPrice: string;
  maxPrice: string;
  location: string;
  minSize: string;
  maxSize: string;
  rooms: string;
  bathrooms: string;
}

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange }) => {
  const handleInputChange = (field: keyof FilterState, value: string) => {
    onFilterChange({
      ...filters,
      [field]: value
    });
  };

  const resetFilters = () => {
    onFilterChange({
      minPrice: '',
      maxPrice: '',
      location: '',
      minSize: '',
      maxSize: '',
      rooms: '',
      bathrooms: ''
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading font-semibold text-xl text-primary">
          Filters
        </h3>
        <button
          onClick={resetFilters}
          className="font-body text-sm text-primary hover:text-primary/80 transition-colors"
        >
          Reset filters
        </button>
      </div>
      
      <div className="space-y-6">
        {/* Price Range */}
        <div>
          <h4 className="font-heading font-medium text-primary mb-3">Price (EUR)</h4>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice}
              onChange={(e) => handleInputChange('minPrice', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={(e) => handleInputChange('maxPrice', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <h4 className="font-heading font-medium text-primary mb-3">Location</h4>
          <input
            type="text"
            placeholder="Search by location..."
            value={filters.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Size Range */}
        <div>
          <h4 className="font-heading font-medium text-primary mb-3">Size (m²)</h4>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Min"
              value={filters.minSize}
              onChange={(e) => handleInputChange('minSize', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.maxSize}
              onChange={(e) => handleInputChange('maxSize', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Rooms */}
        <div>
          <h4 className="font-heading font-medium text-primary mb-3">Rooms (min)</h4>
          <input
            type="number"
            placeholder="Number of rooms"
            value={filters.rooms}
            onChange={(e) => handleInputChange('rooms', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Bathrooms */}
        <div>
          <h4 className="font-heading font-medium text-primary mb-3">Bathrooms (min)</h4>
          <input
            type="number"
            placeholder="Number of bathrooms"
            value={filters.bathrooms}
            onChange={(e) => handleInputChange('bathrooms', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Amenities (UI only) */}
        <div>
          <h4 className="font-heading font-medium text-primary mb-3">Amenities</h4>
          <div className="space-y-2">
            {['Pool', 'Gym', 'Parking', 'Sea View', 'Garden'].map((amenity) => (
              <label key={amenity} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="font-body text-sm text-foreground">{amenity}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;