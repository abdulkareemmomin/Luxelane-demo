import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null); // Product details state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1); // For tracking quantity

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError("Failed to load product details.");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  const addToCartHandler = () => {
    console.log("Added to cart:", product, "Quantity:", quantity);
  };

  const buyHandler = () => {
    console.log("Buying product:", product, "Quantity:", quantity);
  };

  const incrementQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
  };
  const resetQuantity = () => setQuantity(1);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4 mt-20 mb-10">
      {product && (
        <div className="flex flex-col md:flex-row justify-start items-stretch">
          {/* Left side: Product Image */}
          <div className="w-full md:w-1/2 pr-6 mb-6 md:mb-0 flex-shrink-0">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover rounded-md border border-black shadow-md"
            />
          </div>

          {/* Right side: Product Info */}
          <div className="bg-white shadow-md p-6 rounded-lg w-full md:w-1/2 flex flex-col justify-between border border-black">
            <h2 className="text-2xl font-semibold">{product.title}</h2>
            <p className="text-lg text-red-500 mt-2 font-semibold">
              Price: ${product.price}
            </p>
            {product.stock <= 25 && (
              <p className="text-lg text-red-500 mt-2 font-semibold">
                Stock: {product.stock}
              </p>
            )}

            <p className="mt-4 text-gray-700 font-semibold">{product.description}</p>
            <p className="mt-4 text-black font-semibold badge badge-warning">
              Category: {product.category}
            </p>

            {/* Quantity Control */}
            <p className="text-black font-semibold -mb-8">Quantity</p>
            <div className="mt-4 flex items-center">
              <button
                onClick={decrementQuantity}
                className="bg-transparent border border-black text-black hover:bg-black hover:text-white duration-100 px-3 py-1"
              >
                -
              </button>
              <span className="mx-4 text-lg bg-transparent text-black">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="bg-transparent border border-black text-black hover:bg-black hover:text-white duration-100 px-3 py-1"
              >
                +
              </button>
            </div>
            <div className="flex justify-start mt-4 mx-4">
              <button
                onClick={resetQuantity}
                className="bg-transparent border border-black text-black hover:bg-black hover:text-white duration-100 px-5 py-2 -mt-8"
              >
                Reset
              </button>
            </div>

            <div className="flex justify-around mt-6">
              <button
                onClick={addToCartHandler}
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
              >
                Add to Cart
              </button>
              <button
                onClick={buyHandler}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
