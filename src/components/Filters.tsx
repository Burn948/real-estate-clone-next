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
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {/* Type of Deal */}
        <div>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Type of Deal</option>
            <option>For Sale</option>
            <option>For Rent</option>
          </select>
        </div>
        
        {/* Location */}
        <div>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Location</option>
            <option>Lustica Bay</option>
            <option>Dukley Gardens</option>
            <option>Porto Novi</option>
            <option>Porto Montenegro</option>
          </select>
        </div>
        
        {/* Property Type */}
        <div>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Property Type</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>House</option>
          </select>
        </div>
        
        {/* Additional filters */}
        <div>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-md font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Additional filters</option>
            <option>Sea View</option>
            <option>Pool</option>
            <option>Garden</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Filter by Price */}
        <div>
          <label className="block font-body text-primary text-sm mb-2">Filter by Price</label>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="100000"
              max="2000000"
              value={filters.minPrice || "100000"}
              onChange={(e) => handleInputChange('minPrice', e.target.value)}
              className="flex-1"
            />
            <span className="text-xs text-primary">€{filters.minPrice || "100K"} - €2M</span>
          </div>
        </div>
        
        {/* Filter by Property Size */}
        <div>
          <label className="block font-body text-primary text-sm mb-2">Filter by Property Size</label>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="50"
              max="500"
              value={filters.minSize || "50"}
              onChange={(e) => handleInputChange('minSize', e.target.value)}
              className="flex-1"
            />
            <span className="text-xs text-primary">{filters.minSize || "50"}m² - 500m²</span>
          </div>
        </div>
        
        {/* Filter by Rooms */}
        <div>
          <label className="block font-body text-primary text-sm mb-2">Filter by Rooms</label>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="1"
              max="8"
              value={filters.rooms || "1"}
              onChange={(e) => handleInputChange('rooms', e.target.value)}
              className="flex-1"
            />
            <span className="text-xs text-primary">{filters.rooms || "1"} - 8 rooms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;