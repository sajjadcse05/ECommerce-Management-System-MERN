import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      width: '220px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      margin: '15px'
    }}>
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} 
      />
      <h3>{product.name}</h3>
      <p style={{ color: '#2ecc71', fontWeight: 'bold' }}>${product.price}</p>
      <button style={{
        backgroundColor: '#f0c14b',
        border: '1px solid #a88734',
        padding: '8px 15px',
        borderRadius: '3px',
        cursor: 'pointer'
      }}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;