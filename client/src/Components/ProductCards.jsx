import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Card from '../CardsComponent/Card';

const ProductCards = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setProducts(response.data.products);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="px-4 mt-20 max-w-screen-xl mx-auto">
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id}>
                            <Card
                                name={product.title}
                                cost={`$${product.price}`}
                                imageUrl={product.thumbnail}
                                stock={product.stock}
                                rating={product.rating}
                                category={product.category}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCards;

// {
//     products.map((product) => {
//         <div key={product.id} className='w-full sm:w-1/2 lg:w-1/4 p-2'>
//             <Card name={product.title}
//                 cost={`$ ${product.cost}`}
//                 imageurl={product.thumbnail}
//                 stock={product.stock}
//                 category={product.category}

//             />

//         </div>
//     })
// }

// const [cnt, setCnt] = useState(10); // Number of cards

// return (
//     <div className="container mx-auto p-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {Array.from({ length: cnt }).map((_, index) => (
//                 <div key={index} className="flex justify-center">
//                     <Card name="product" cost="$98" />
//                 </div>
//             ))}
//         </div>
//     </div>