import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 100 },
    { id: 2, name: "Item 2", price: 200 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <div className="navbar bg-black text-white h-16 fixed z-50 ">
        {/* Left Side: Menu Items (Hidden on smaller screens) */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52"
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Product</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <ul className="menu menu-horizontal px-1 hidden lg:flex mx-8 text-xl font-semibold">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Product</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        {/* Center: Title */}
        <div className="navbar-center flex-1 lg:flex-none">
          <a className="text-3xl lg:text-5xl font-extralight">LUXELANE</a>
        </div>

        {/* Right Side: Search and Cart */}
        <div className="navbar-end flex space-x-2 mr-6">
          <Link to='/search' className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 lg:h-7 lg:w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Link>

          {/* Cart Dropdown */}
          <div className="dropdown dropdown-end">
            <button onClick={toggleCart} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 lg:h-7 lg:w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{cartItems.length}</span>
              </div>
            </button>
            {isCartOpen && (
              <div
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-60 shadow-lg"
              >
                <div className="card-body text-black">
                  <h3 className="font-bold text-lg">Cart Items</h3>
                  {cartItems.length > 0 ? (
                    <ul className="space-y-2">
                      {cartItems.map((item) => (
                        <li key={item.id} className="flex justify-between items-center">
                          <span>{item.name}</span>
                          <span>${item.price}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No items in cart</p>
                  )}
                  <div className="divider"></div>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
