import React from 'react';

const Card = ({ name, cost, imageUrl, stock, category, rating }) => {
    return (
        <div className="w-72 m-6 bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden mt-10">
            {/* Product Image */}
            <img
                src={imageUrl}
                alt={name}
                className="w-full h-40 object-cover"
            />

            <div className="p-4">
                {/* Product Title */}
                <h2 className="text-xl font-semibold text-gray-800 truncate">{name}</h2>

                {/* Product Price */}
                <div className="flex mt-2 justify-between">
                    <span className="text-lg font-semibold text-red-600 mt-2">{cost}</span>
                    <span className="text-lg text-white mt-2 bg-pink-500 badge badge-success"> Left : {stock} </span>
                </div>
                {/* Product Rating */}
                <div className="flex items-center mt-2">
                    <span className="text-yellow-400">⭐⭐⭐⭐⭐{rating}</span>
                    <span className="text-sm text-gray-950 ml-2 font-bold">{category}</span>
                </div>

                {/* Action Buttons */}
                {/* <div className="mt-4 flex justify-between items-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                        Add to Cart
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                        Buy Now
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default Card;
