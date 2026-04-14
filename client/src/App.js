import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Categories from './components/Categories';
import Newsletter from './components/Newsletter';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  // 1. Create state to hold your backend products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Fetch data from backend on mount
  useEffect(() => {
    // Note: This uses the proxy defined in your client/package.json
    fetch('/api/products') 
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Backend connection error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      {/* Zulexia Premium Navbar */}
      <Navbar />
      
      <Routes>
        {/* Main Home Route */}
        <Route path="/" element={
          <main style={{ backgroundColor: '#f9f8f3' }}>
            {/* Auto-sliding Hero Section */}
            <Hero />
            
            {/* Pass the fetched products to your ProductSection */}
            {loading ? (
              <div style={{ textAlign: 'center', padding: '50px' }}>Loading Collection...</div>
            ) : (
              <ProductSection products={products} />
            )}

            {/* Category Grid */}
            <Categories />

            {/* Newsletter Subscription Footer */}
            <Newsletter />
          </main>
        } />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Register Route */}
        <Route path="/register" element={<Register />} />

        {/* Cart Route */}
        <Route path="/cart" element={
          <div style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: '#f9f8f3', minHeight: '60vh' }}>
            <h2 style={{ fontFamily: 'serif', fontSize: '2rem', color: '#2d4a3e' }}>Your Cart is Empty! 🛒</h2>
            <p style={{ color: '#666' }}>Looking for inspiration? Check out our Bestsellers.</p>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;