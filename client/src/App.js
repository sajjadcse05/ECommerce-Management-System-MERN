import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Categories from './components/Categories';
import Newsletter from './components/Newsletter';
import Login from './components/Login';
import Register from './components/Register'; // Added Register import

function App() {
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
            
            {/* The Bestselling Products Section with the 3-item Slider */}
            <ProductSection />

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