import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FlipkartSearch = () => {
  const [query, setQuery] = useState(""); // For search query
  const [results, setResults] = useState([]); // For storing search results
  const [loading, setLoading] = useState(false); // For showing loading state
  const [error, setError] = useState(""); // For error messages
  const [noResults, setNoResults] = useState(false); // Track if no results were found

  const navigate = useNavigate(); // For navigating to product details page

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) {
      setError("Please enter a search query.");
      return;
    }

    setLoading(true);
    setError('');
    setNoResults(false);

    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${query}`
      );
      if (response.data.products.length === 0) {
        setNoResults(true);
      } else {
        setResults(response.data.products);
      }
    } catch (err) {
      setError("Failed to fetch results. Please try again later.");
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleProductClick = (productId) => {
    // Navigate to product detail page with the product's ID
    navigate(`/product/${productId}`);
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      {/* Search Bar Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-x-4 mb-6">
        <input
          type="text"
          className="w-full sm:w-2/3 p-2 border border-gray-300 rounded-lg"
          placeholder="Search for products... (try 'smartphones' or 'mens-clothing')"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4 sm:mt-0 sm:ml-4 hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      {/* Loading and Error Handling */}
      {loading && (
        <div className="flex justify-center items-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      )}
      {error && <div className="text-center text-red-500">{error}</div>}

      {/* No Results Found Message */}
      {noResults && !loading && (
        <div className="text-center text-red-500">No results found for "{query}".</div>
      )}

      {/* Displaying Search Results */}
      {results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition cursor-pointer"
              onClick={() => handleProductClick(product.id)} // Navigate to product detail
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-64 object-cover rounded-md"
              />
              <h2 className="mt-4 text-xl font-semibold">{product.title}</h2>
              <p className="text-lg text-red-500 mt-2 font-semibold">
                Price : ${product.price}
              </p>
              <div className="flex items-center mt-2 font-mono text-black">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐{product.rating}</span>
                <span className="ml-2 text-sm text-gray-500">
                  {product.stock < 10 ? `Stock: (${product.stock})` : null}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlipkartSearch;
