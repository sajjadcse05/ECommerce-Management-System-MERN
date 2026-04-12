import React from 'react';

const Newsletter = () => {
  return (
    <footer style={footerContainerStyle}>
      <div style={contentWrapperStyle}>
        <p style={labelStyle}>GET RECIPES & UPDATES</p>
        <h2 style={titleStyle}>10% Off Your First Order</h2>
        <p style={descriptionStyle}>
          Join the Zulexia community for eco-friendly tips, sustainable living guides, 
          and exclusive early access to our newest collections.
        </p>
        
        <div style={inputGroupStyle}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            style={inputStyle}
          />
          <button style={buttonStyle}>Subscribe</button>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div style={bottomBarStyle}>
        <p style={{ margin: 0, opacity: 0.7 }}>© 2026 ZULEXIA. All rights reserved.(Made By Sajjad Hossain)</p>
      </div>
    </footer>
  );
};

// --- Styles Matched to Navbar ---

const footerContainerStyle = {
  backgroundColor: '#f9f8f3', // Matches Luxury Cream Navbar bg
  borderTop: '1px solid #e5e2d9',
  paddingTop: '80px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
};

const contentWrapperStyle = {
  textAlign: 'center',
  maxWidth: '600px',
  padding: '0 20px 80px 20px'
};

const labelStyle = {
  fontSize: '0.75rem',
  letterSpacing: '2px',
  color: '#888',
  fontWeight: '700',
  marginBottom: '15px'
};

const titleStyle = {
  fontSize: '3.5rem',
  fontFamily: 'serif',
  color: '#2d4a3e', // Matches Deep Emerald Brand Color
  margin: '0 0 20px 0',
  lineHeight: '1.1'
};

const descriptionStyle = {
  color: '#555',
  fontSize: '1rem',
  lineHeight: '1.6',
  marginBottom: '35px'
};

const inputGroupStyle = {
  display: 'flex',
  gap: '10px',
  width: '100%',
  backgroundColor: '#ffffff',
  padding: '8px',
  borderRadius: '12px',
  border: '1px solid #dcd9ce',
  boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
};

const inputStyle = {
  flex: 1,
  padding: '12px 15px',
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: '1rem',
  outline: 'none',
  color: '#2d4a3e'
};

const buttonStyle = {
  padding: '12px 30px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#2d4a3e', // Matches Primary Nav Button
  color: '#ffffff',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background 0.3s ease'
};

const bottomBarStyle = {
  width: '100%',
  padding: '25px 50px',
  backgroundColor: '#ffffff',
  borderTop: '1px solid #eee',
  textAlign: 'center',
  fontSize: '0.8rem',
  color: '#2d4a3e'
};

export default Newsletter;