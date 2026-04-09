import React from 'react';

const ProductSection = () => {
  const products = [
    { id: 1, name: 'Premium smart watch for modern life.', price: '$43.85', tag: 'Promotion', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop' },
    { id: 2, name: 'Noise-canceling headphones for focus.', price: '$78.35', tag: 'New', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop' },
    { id: 3, name: 'Durable performance sneakers.', price: '$143.65', tag: 'Customer favorite', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop' },
    { id: 4, name: 'Minimalist leather everyday carry.', price: '$26.27', tag: 'New', img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=400&auto=format&fit=crop' }
  ];

  return (
    <div style={{ padding: '60px 50px', backgroundColor: '#f9f8f3' }}>
      {/* Section Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px' }}>
        <div>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '5px' }}>Zulexia Essentials High-Quality</p>
          <h2 style={{ fontSize: '2rem', fontFamily: 'serif', color: '#2d4a3e', margin: 0 }}>
            Bestselling <span style={{ fontWeight: 'normal' }}>✧ Products</span>
          </h2>
        </div>
        <a href="/shop" style={{ color: '#2d4a3e', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.9rem' }}>
          More products →
        </a>
      </div>

      {/* Grid Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={cardStyle}>
            {/* Tag Overlay */}
            <span style={tagStyle}>{product.tag}</span>
            
            {/* Product Image */}
            <div style={imageContainerStyle}>
              <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Product Info */}
            <div style={{ padding: '15px 0' }}>
              <p style={{ color: '#444', fontSize: '0.95rem', marginBottom: '10px', height: '40px', overflow: 'hidden' }}>
                {product.name}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: '900', fontSize: '1.1rem', color: '#1a1a1a' }}>{product.price}</span>
                <button style={cartButtonStyle}>+ Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Styles to match Luxury Theme ---

const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '15px',
  position: 'relative',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
};

const imageContainerStyle = {
  width: '100%',
  height: '280px',
  backgroundColor: '#f2f0e6',
  borderRadius: '12px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const tagStyle = {
  position: 'absolute',
  top: '25px',
  left: '25px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: '4px 12px',
  borderRadius: '20px',
  fontSize: '0.75rem',
  color: '#666',
  border: '1px solid #eee',
  zIndex: 2
};

const cartButtonStyle = {
  backgroundColor: '#2d4a3e', // Matching Emerald Nav
  color: 'white',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '0.85rem'
};

export default ProductSection;