import { useState } from "react";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    location: "",
    minRent: 0,
    maxRent: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

return (
    <div className="w-full h-full  flex flex-wrap bg-gradient-to-b from-slate-200 to-slate-300 self-center p-2 ">
        <form className="flex flex-col sm:flex-row md:flex-wrap lg:flex-nowrap gap-4 items-center justify-center w-full">
            
            {/* Location Input */}
            <input
                type="text"
                name="location"
                placeholder="City Location"
                className="p-2 w-full sm:w-48 md:w-36 lg:w-48 border-none bg-white focus:outline-none 
                    sm:border sm:border-gray-500 sm:p-3 rounded-md"
            />
            {/* Min Rent Input */}
            <input
                type="number"
                name="minRent"
                min={0}
                max={99999}
                placeholder="Min Price"
                className="p-2 w-full sm:w-48 md:w-36 lg:w-48 border-none bg-white focus:outline-none 
                    sm:border sm:border-gray-500 sm:p-3 rounded-md"
            />

            {/* Max Price Input */}
            <input
                type="number"
                name="maxRent"
                min={0}
                max={10000000}
                placeholder="Max Price"
                className="p-2 w-full sm:w-48 md:w-36 lg:w-48 border-none bg-white focus:outline-none 
                    sm:border sm:border-gray-500 sm:p-3 rounded-md"
            />

            {/* Search Button */}
            <button className="flex items-center justify-center bg-blue-500 p-2 hover:bg-blue-700 transition-all w-full sm:w-14 md:w-20 lg:w-14 rounded-md">
                <img src="/search.png" alt="Search" className="w-6 h-6" />
            </button>
        </form>
    </div>
);
}

export default SearchBar;
