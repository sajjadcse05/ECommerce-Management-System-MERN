import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Newsletter from './components/Newsletter';

function App() {
  // Updated dummy data to match your Eco-Friendly Kitchenware theme
  const dummyProducts = [
    { id: 1, name: 'Reusable Drinkware', price: 43.85, category: 'Planet-Friendly', image: 'https://placehold.co/400x500?text=Bottle' },
    { id: 2, name: 'Non-toxic Cookware', price: 78.35, category: 'Sustainable Cooking', image: 'https://placehold.co/400x500?text=Pots' },
    { id: 3, name: 'Kettle & Toaster Set', price: 143.65, category: 'Eco-friendly Meals', image: 'https://placehold.co/400x500?text=Kettle' },
    { id: 4, name: 'Bamboo Utensil Holder', price: 26.27, category: 'Natural Wood', image: 'https://placehold.co/400x500?text=Utensils' },
  ];

  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* Main Home Route */}
        <Route path="/" element={
          <main>
            <Hero />
            
            <Categories />

            <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px' }}>
                <div>
                  <p style={{ color: '#666', marginBottom: '5px' }}>Eco Essentials Planet-Friendly</p>
                  <h2 style={{ fontSize: '2.5rem', margin: 0, fontFamily: 'serif' }}>
                    Bestselling <i style={{ fontWeight: 'normal' }}>Products</i>
                  </h2>
                </div>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600', textDecoration: 'underline' }}>
                  More products →
                </button>
              </div>

              {/* Product Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '30px',
                justifyItems: 'center' 
              }}>
                {dummyProducts.map(item => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </div>

            <Newsletter />
          </main>
        } />

        {/* Other Routes */}
        <Route path="/cart" element={
          <div style={{ padding: '100px 20px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'serif', fontSize: '2rem' }}>Your Cart is Empty! 🛒</h2>
            <p>Looking for inspiration? Check out our Bestsellers.</p>
          </div>
        } />
      </Routes>

      {/* Footer can be added here later */}
    </Router>
  );
}

export default App;