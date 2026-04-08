import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
  const dummyProducts = [
    { id: 1, name: 'Premium Watch', price: 120, image: 'https://via.placeholder.com/180' },
    { id: 2, name: 'Wireless Headphones', price: 85, image: 'https://via.placeholder.com/180' },
    { id: 3, name: 'Leather Wallet', price: 40, image: 'https://via.placeholder.com/180' },
  ];

  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {dummyProducts.map(item => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          } />
          <Route path="/cart" element={<h2 style={{ textAlign: 'center' }}>Your Cart is Empty! 🛒</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;