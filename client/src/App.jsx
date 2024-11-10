import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ProductCards from './Components/ProductCards';
import FlipkartSearch from './Search/FlipKartSearch';
import About from './Components/ABout';
import Contact from './Components/Contact';
import ProductDetail from './Shop/ProductDetail';


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        {/* Navbar */}
        <Navbar />

        {/* Main content area, expanding to fill space between Navbar and Footer */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductCards />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<FlipkartSearch />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;

// <Router>
//   <Routes>
//     {/* Define the route for Comp */}
//     <Route path="/data" element={<Comp />} />
//   </Routes>
// </Router>