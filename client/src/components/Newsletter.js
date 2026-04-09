import React from 'react';

const Newsletter = () => {
  return (
    <div style={{
      backgroundColor: 'var(--primary-green)', // Uses the forest green from your CSS
      color: 'white',
      padding: '80px 20px',
      textAlign: 'center',
      borderRadius: '24px',
      margin: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Get Recipes</p>
      <h2 style={{ fontSize: '4rem', margin: '10px 0', fontFamily: 'serif' }}>10% Off</h2>
      
      <p style={{ maxWidth: '500px', marginBottom: '30px', opacity: '0.9' }}>
        Eco-friendly recipes, cooking tips, and a 10% discount on sustainable kitchenware for a greener lifestyle.
      </p>

      <div style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
        <input 
          type="email" 
          placeholder="Your Email" 
          style={{ 
            padding: '15px 20px', 
            borderRadius: '12px', 
            border: 'none', 
            width: '300px',
            fontSize: '1rem' 
          }} 
        />
        <button style={{ 
          backgroundColor: 'var(--accent-yellow)', 
          color: 'black', 
          padding: '15px 30px', 
          borderRadius: '12px', 
          border: 'none', 
          fontWeight: 'bold',
          cursor: 'pointer' 
        }}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;