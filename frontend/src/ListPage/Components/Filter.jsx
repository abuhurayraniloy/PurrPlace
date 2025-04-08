import { useState } from "react";

function Filter() {
  const [filters, setFilters] = useState({
    city: "",
    type: "",
    breed: "",
    minRent: "",
    maxRent: "",
    available: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    console.log(filters);
  };

  return (
    <div className="flex flex-col gap-3 p-4 bg-white shadow-md rounded-lg">
      {/* Heading */}
      <h1 className="text-xl font-light">
        Search results for <b>Dhaka</b>
      </h1>

      {/* Top Section */}
      <div className="w-full">
        <div className="flex flex-col gap-1">
          <label htmlFor="city" className="text-xs text-gray-600">
            Location
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none"
            value={filters.city}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-wrap gap-5 justify-between">
        {/* Filter Options */}
        <div className="flex flex-col gap-1">
          <label htmlFor="type" className="text-xs text-gray-600">
            Type
          </label>
          <select
            name="type"
            id="type"
            className="w-24 p-2 border border-gray-300 rounded-md text-sm"
            value={filters.type}
            onChange={handleInputChange}
          >
            <option value="">Any</option>
            <option value="ac">AC</option>
            <option value="non-ac">Non AC</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="breed" className="text-xs text-gray-600">
            Breed Type
          </label>
          <select
            name="breed"
            id="breed"
            className="w-26 p-2 border border-gray-300 rounded-md text-sm"
            value={filters.breed}
            onChange={handleInputChange}
          >
            <option value="">Any</option>
            <option value="domestic">Domestic</option>
            <option value="persian">persian</option>
            <option value="mixed">mixed</option>
            <option value="external">Others breed</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="minRent" className="text-xs text-gray-600">
            Min Price
          </label>
          <input
            type="number"
            id="minRent"
            name="minRent"
            placeholder="Any"
            className="w-24 p-2 border border-gray-300 rounded-md text-sm focus:outline-none"
            value={filters.minRent}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="maxRent" className="text-xs text-gray-600">
            Max Price
          </label>
          <input
            type="text"
            id="maxRent"
            name="maxRent"
            placeholder="Any"
            className="w-24 p-2 border border-gray-300 rounded-md text-sm focus:outline-none"
            value={filters.maxRent}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="available" className="text-xs text-gray-600">
            Vacancy
          </label>
          <input
            type="text"
            id="available"
            name="available"
            placeholder="Any"
            className="w-24 p-2 border border-gray-300 rounded-md text-sm focus:outline-none"
            value={filters.available}
            onChange={handleInputChange}
          />
        </div>

        {/* Search Button */}
        <button
          className="w-24 p-2 flex items-center justify-center bg-blue-400 hover:bg-blue-500 transition-all rounded-md"
          onClick={handleSearch}
        >
          <img src="/search.png" alt="Search" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
