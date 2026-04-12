import React, { useState } from 'react';

const ProductSection = () => {
  // Your full list of products
  const allProducts = [
    { id: 1, name: 'Premium smart watch for modern life.', price: '$43.85', tag: 'Promotion', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400' },
    { id: 2, name: 'Noise-canceling headphones for focus.', price: '$78.35', tag: 'New', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400' },
    { id: 3, name: 'Durable performance sneakers.', price: '$143.65', tag: 'Customer favorite', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400' },
    { id: 4, name: 'Minimalist leather everyday carry.', price: '$26.27', tag: 'New', img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=400' },
    { id: 5, name: 'High-performance mechanical keyboard.', price: '$89.99', tag: 'Limited', img: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400' }
  ];

  // State to track the first product being displayed
  const [startIndex, setStartIndex] = useState(0);

  // Logic to show exactly 3 products at a time
  const visibleProducts = allProducts.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    // Only slide if there are more products to show
    if (startIndex + 3 < allProducts.length) {
      setStartIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  return (
    <div style={{ padding: '60px 50px', backgroundColor: '#f9f8f3', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px' }}>
        <div>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '5px' }}>Zulexia Essentials</p>
          <h2 style={{ fontSize: '2rem', fontFamily: 'serif', color: '#2d4a3e', margin: 0 }}>
            Bestselling <span style={{ fontWeight: 'normal' }}>✧ Products</span>
          </h2>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {/* Left Arrow Button */}
        <button 
          onClick={handlePrev} 
          disabled={startIndex === 0}
          style={arrowButtonStyle}
        >
          ←
        </button>

        {/* The Grid displaying only 3 products */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '20px', 
          flex: 1 
        }}>
          {visibleProducts.map((product) => (
            <div key={product.id} style={cardStyle}>
              <span style={tagStyle}>{product.tag}</span>
              <div style={imageContainerStyle}>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '15px 0' }}>
                <p style={productNameStyle}>{product.name}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '900', fontSize: '1.1rem' }}>{product.price}</span>
                  <button style={cartButtonStyle}>+ Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button 
          onClick={handleNext} 
          disabled={startIndex + 3 >= allProducts.length}
          style={arrowButtonStyle}
        >
          →
        </button>
      </div>
    </div>
  );
};

// --- Styles ---

const arrowButtonStyle = {
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  border: '1px solid #ddd',
  backgroundColor: 'white',
  cursor: 'pointer',
  fontSize: '1.2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  opacity: 1,
  transition: '0.3s'
};

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '15px',
  position: 'relative',
  boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
};

const imageContainerStyle = {
  width: '100%',
  height: '280px',
  backgroundColor: '#f2f0e6',
  borderRadius: '12px',
  overflow: 'hidden'
};

const productNameStyle = {
  color: '#444',
  fontSize: '0.95rem',
  marginBottom: '10px',
  height: '40px',
  lineHeight: '1.2',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden'
};

const tagStyle = {
  position: 'absolute',
  top: '25px',
  left: '25px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: '4px 12px',
  borderRadius: '20px',
  fontSize: '0.75rem',
  zIndex: 2
};

const cartButtonStyle = {
  backgroundColor: '#2d4a3e', // Emerald Nav Theme
  color: 'white',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

export default ProductSection;