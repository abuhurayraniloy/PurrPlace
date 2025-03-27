function Filter() {
    return (
      <div className="flex flex-col gap-3 p-4 bg-white shadow-md rounded-lg">
        {/* Heading */}
        <h1 className="text-xl font-light">
          Search results for <b>Dhaka</b>
        </h1>
  
        {/* Top Section */}
        <div className="w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="city" className="text-xs text-gray-600">Location</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City Location"
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none"
            />
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="flex flex-wrap gap-5 justify-between">
          {/* Filter Options */}
          <div className="flex flex-col gap-1">
            <label htmlFor="type" className="text-xs text-gray-600">Type</label>
            <select
              name="type"
              id="type"
              className="w-24 p-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="">Any</option>
              <option value="ac">AC</option>
              <option value="non-ac">Non AC</option>
            </select>
          </div>
  
          <div className="flex flex-col gap-1">
            <label htmlFor="property" className="text-xs text-gray-600">Property</label>
            <select
              name="property"
              id="property"
              className="w-26 p-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="">Any</option>
              <option value="domestic">Domestic</option>
              <option value="persian">persian</option>
              <option value="mixed">mixed</option> 
              <option value="external">Others breed</option>
            </select>
          </div>
  
          <div className="flex flex-col gap-1">
            <label htmlFor="minPrice" className="text-xs text-gray-600">Min Price</label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="Any"
              className="w-24 p-2 border border-gray-300 rounded-md text-sm focus:outline-none"
            />
          </div>
  
          <div className="flex flex-col gap-1">
            <label htmlFor="maxPrice" className="text-xs text-gray-600">Max Price</label>
            <input
              type="text"
              id="maxPrice"
              name="maxPrice"
              placeholder="Any"
              className="w-24 p-2 border border-gray-300 rounded-md text-sm focus:outline-none"
            />
          </div>
  
          <div className="flex flex-col gap-1">
            <label htmlFor="available" className="text-xs text-gray-600">Vacancy</label>
            <input
              type="text"
              id="available"
              name="available"
              placeholder="Any"
              className="w-24 p-2 border border-gray-300 rounded-md text-sm focus:outline-none"
            />
          </div>
  
          {/* Search Button */}
          <button className="w-24 p-2 flex items-center justify-center bg-blue-400 hover:bg-blue-500 transition-all rounded-md">
            <img src="/search.png" alt="Search" className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }
  
  export default Filter;
  