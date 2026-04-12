import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    // Future: Add your MERN backend login logic here
  };

  return (
    <div style={pageContainer}>
      <div style={loginCard}>
        <h2 style={titleStyle}>Welcome Back</h2>
        <p style={subtitleStyle}>Please enter your details to sign in to Zulexia.</p>

        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroup}>
            <label style={labelStyle}>Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div style={forgotPasswordContainer}>
            <a href="/reset" style={linkStyle}>Forgot password?</a>
          </div>

          <button type="submit" style={loginButtonStyle}>
            Sign In
          </button>
        </form>

        <p style={footerTextStyle}>
  Don't have an account? <Link to="/register" style={boldLinkStyle}>Create one</Link>
</p>
      </div>
    </div>
  );
};

// --- Styles ---

const pageContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '80vh',
  backgroundColor: '#f9f8f3', // Luxury Cream
  padding: '20px'
};

const loginCard = {
  width: '100%',
  maxWidth: '400px',
  backgroundColor: '#ffffff',
  padding: '40px',
  borderRadius: '24px',
  boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
  textAlign: 'center'
};

const titleStyle = {
  fontFamily: 'serif',
  fontSize: '2rem',
  color: '#2d4a3e', // Deep Emerald
  margin: '0 0 10px 0'
};

const subtitleStyle = {
  color: '#666',
  fontSize: '0.9rem',
  marginBottom: '30px'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left'
};

const inputGroup = {
  marginBottom: '20px'
};

const labelStyle = {
  fontSize: '0.85rem',
  fontWeight: '600',
  color: '#2d4a3e',
  marginBottom: '8px',
  display: 'block'
};

const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  borderRadius: '10px',
  border: '1px solid #e5e2d9',
  fontSize: '1rem',
  outline: 'none',
  backgroundColor: '#fafafa'
};

const forgotPasswordContainer = {
  textAlign: 'right',
  marginBottom: '25px'
};

const loginButtonStyle = {
  width: '100%',
  padding: '14px',
  borderRadius: '12px',
  border: 'none',
  backgroundColor: '#2d4a3e', // Deep Emerald
  color: '#ffffff',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'opacity 0.2s'
};

const footerTextStyle = {
  marginTop: '25px',
  fontSize: '0.9rem',
  color: '#666'
};

const linkStyle = {
  color: '#2d4a3e',
  textDecoration: 'none',
  fontSize: '0.85rem'
};

const boldLinkStyle = {
  ...linkStyle,
  fontWeight: 'bold',
  textDecoration: 'underline'
};

export default Login;