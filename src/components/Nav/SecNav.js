import React, { useState } from 'react'

const SecNav = ({ setPropertiesState, setFilters }) => {
  const [filters, setLocalFilters] = useState({
    roomNumber: '',
    bedNumber: '',
    bathroomNumber: '',
    propType: '',
    amenities: '',
    maxPrice: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the filters to the parent component to trigger the filtering process
    setFilters(filters);
  };

  const handleClearFilters = () => {
    setLocalFilters({
      roomNumber: '',
      bedNumber: '',
      bathroomNumber: '',
      propType: '',
      amenities: '',
      maxPrice: '',
    });
    setPropertiesState(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="roomNumber">Room Number:</label>
        <input
          type="text"
          id="roomNumber"
          name="roomNumber"
          value={filters.roomNumber}
          onChange={handleInputChange}
        />

        <label htmlFor="bedNumber">Bed Number:</label>
        <input
          type="text"
          id="bedNumber"
          name="bedNumber"
          value={filters.bedNumber}
          onChange={handleInputChange}
        />

        <label htmlFor="bathroomNumber">Bathroom Number:</label>
        <input
          type="text"
          id="bathroomNumber"
          name="bathroomNumber"
          value={filters.bathroomNumber}
          onChange={handleInputChange}
        />

        <label htmlFor="propType">Property Type:</label>
        <input
          type="text"
          id="propType"
          name="propType"
          value={filters.propType}
          onChange={handleInputChange}
        />

        <label htmlFor="amenities">Amenities:</label>
        <input
          type="text"
          id="amenities"
          name="amenities"
          value={filters.amenities}
          onChange={handleInputChange}
        />

        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="text"
          id="maxPrice"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleInputChange}
        />

        <button type="submit">Apply Filters</button>
      </form>
      <button onClick={handleClearFilters}>Clear Filters</button>
    </div>
  );
};

export default SecNav;