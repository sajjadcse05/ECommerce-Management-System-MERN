import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      background: '#232f3e', 
      color: 'white'
    }}>
      <h1 style={{ fontSize: '1.5rem', margin: 0 }}>MERN Shop</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>Cart 🛒</Link>
      </div>
    </nav>
  );
};

export default Navbar;