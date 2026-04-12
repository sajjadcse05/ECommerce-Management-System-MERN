import React, { useState } from 'react';

const ProductSection = () => {
  const allProducts = [
    { id: 1, name: 'Premium smart watch for modern life.', price: '$43.85', tag: 'Promotion', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400' },
    { id: 2, name: 'Noise-canceling headphones for focus.', price: '$78.35', tag: 'New', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400' },
    { id: 3, name: 'Durable performance sneakers.', price: '$143.65', tag: 'Customer favorite', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400' },
    { id: 4, name: 'Minimalist leather everyday carry.', price: '$26.27', tag: 'New', img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=400' },
    { id: 5, name: 'High-performance mechanical keyboard.', price: '$89.99', tag: 'Limited', img: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400' }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleProducts = allProducts.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < allProducts.length) setStartIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(prev => prev - 1);
  };

  return (
    <div style={{ padding: '60px 50px', backgroundColor: '#f9f8f3' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px' }}>
        <div>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '5px' }}>Zulexia Essentials</p>
          <h2 style={{ fontSize: '2rem', fontFamily: 'serif', color: '#2d4a3e', margin: 0 }}>
            Bestselling <span style={{ fontWeight: 'normal' }}>✧ Products</span>
          </h2>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        
        {/* Modern Left Arrow */}
        <button onClick={handlePrev} disabled={startIndex === 0} style={arrowButtonStyle(startIndex === 0)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', flex: 1 }}>
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

        {/* Modern Right Arrow */}
        <button onClick={handleNext} disabled={startIndex + 3 >= allProducts.length} style={arrowButtonStyle(startIndex + 3 >= allProducts.length)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

// --- Modernized Styles ---

const arrowButtonStyle = (disabled) => ({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  border: '1px solid #e5e2d9',
  backgroundColor: disabled ? '#f0f0f0' : '#ffffff',
  color: disabled ? '#ccc' : '#2d4a3e',
  cursor: disabled ? 'not-allowed' : 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.3s ease',
  boxShadow: disabled ? 'none' : '0 4px 10px rgba(0,0,0,0.05)',
  outline: 'none'
});

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '20px', // More rounded for modern feel
  padding: '12px',
  position: 'relative',
  border: '1px solid #f0f0f0'
};

const imageContainerStyle = {
  width: '100%',
  height: '280px',
  backgroundColor: '#f2f0e6',
  borderRadius: '16px',
  overflow: 'hidden'
};

const productNameStyle = {
  color: '#222',
  fontSize: '0.95rem',
  fontWeight: '500',
  marginBottom: '10px',
  height: '40px',
  overflow: 'hidden'
};

const tagStyle = {
  position: 'absolute',
  top: '20px',
  left: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  padding: '4px 12px',
  borderRadius: '20px',
  fontSize: '0.7rem',
  fontWeight: 'bold',
  color: '#2d4a3e',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  zIndex: 2
};

const cartButtonStyle = {
  backgroundColor: '#2d4a3e', // Emerald Nav Theme
  color: 'white',
  border: 'none',
  padding: '8px 18px',
  borderRadius: '10px',
  fontWeight: '600',
  cursor: 'pointer',
  fontSize: '0.85rem',
  transition: 'background 0.3s'
};

export default ProductSection;