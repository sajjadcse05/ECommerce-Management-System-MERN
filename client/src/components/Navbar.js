import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={navContainerStyle}>
      {/* Top Section: Brand, Search, and Utilities */}
      <div style={topSectionStyle}>
        
        {/* Brand Name */}
        <Link to="/" style={brandStyle}>
          ZULEXIA
        </Link>

        {/* Central Search Box */}
        <div style={searchContainerStyle}>
          <input 
            type="text" 
            placeholder="Search for premium products..." 
            style={searchInputStyle}
          />
          <span style={searchIconStyle}>🔍</span>
        </div>

        {/* User Actions */}
        <div style={actionGroupStyle}>
  {/* Update this line to use Link and to="/login" */}
  <Link to="/login" style={navLinkStyle}>Login</Link>
  
  <Link to="/about" style={navLinkStyle}>About</Link>
  <Link to="/contact" style={navLinkStyle}>Contact</Link>
  
  <Link to="/cart" style={cartIconStyle}>
    🛒
    <span style={cartBadgeStyle}>0</span>
  </Link>
</div>
      </div>

      {/* Bottom Section: Category Navigation */}
      <div style={bottomSectionStyle}>
        <Link to="/" style={categoryLinkStyle}>Home</Link>
        <Link to="/shop" style={categoryLinkStyle}>New Arrivals</Link>
        <Link to="/shop" style={categoryLinkStyle}>Best Sellers</Link>
        <Link to="/shop" style={categoryLinkStyle}>Collections</Link>
      </div>
    </nav>
  );
};

// --- Styles ---

const navContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(26, 26, 26, 0.9)', // Midnight Glass
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  width: '100%',
  transition: 'all 0.3s ease'
};

const topSectionStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 50px',
  gap: '30px'
};

const brandStyle = {
  textDecoration: 'none',
  fontSize: '2rem',
  fontWeight: '900',
  color: '#ffffff',
  letterSpacing: '-1.5px',
  flexShrink: 0
};

const searchContainerStyle = {
  flex: 1,
  maxWidth: '600px',
  position: 'relative',
};

const searchInputStyle = {
  width: '100%',
  padding: '12px 25px',
  borderRadius: '30px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: '#ffffff',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'background-color 0.3s'
};

const searchIconStyle = {
  position: 'absolute',
  right: '20px',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  fontSize: '1.1rem'
};

const actionGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '25px',
  flexShrink: 0
};

const navLinkStyle = {
  textDecoration: 'none',
  color: '#ffffff',
  fontSize: '0.95rem',
  fontWeight: '500',
  opacity: 0.85,
  transition: 'opacity 0.2s'
};

const cartIconStyle = {
  textDecoration: 'none',
  fontSize: '1.4rem',
  position: 'relative',
  display: 'flex',
  alignItems: 'center'
};

const cartBadgeStyle = {
  position: 'absolute',
  top: '-10px',
  right: '-12px',
  backgroundColor: '#ffffff',
  color: '#1a1a1a',
  fontSize: '0.7rem',
  fontWeight: 'bold',
  padding: '2px 6px',
  borderRadius: '50%',
  minWidth: '18px',
  textAlign: 'center'
};

const bottomSectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '50px',
  padding: '12px 0',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  borderTop: '1px solid rgba(255, 255, 255, 0.05)'
};

const categoryLinkStyle = {
  textDecoration: 'none',
  color: '#ffffff',
  fontSize: '0.8rem',
  fontWeight: '700',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  opacity: 0.7,
  transition: 'opacity 0.2s'
};

export default Navbar;