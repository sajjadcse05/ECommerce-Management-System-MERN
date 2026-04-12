import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registering user:", formData);
    // Future: Add MERN registration API call here
  };

  return (
    <div style={pageContainer}>
      <div style={registerCard}>
        <h2 style={titleStyle}>Create Account</h2>
        <p style={subtitleStyle}>Join Zulexia for a premium shopping experience.</p>

        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroup}>
            <label style={labelStyle}>Full Name</label>
            <input 
              type="text" 
              name="fullName"
              placeholder="John Doe" 
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Email Address</label>
            <input 
              type="email" 
              name="email"
              placeholder="name@example.com" 
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Password</label>
            <input 
              type="password" 
              name="password"
              placeholder="••••••••" 
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroup}>
            <label style={labelStyle}>Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword"
              placeholder="••••••••" 
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <button type="submit" style={registerButtonStyle}>
            Create Account
          </button>
        </form>

        <p style={footerTextStyle}>
          Already have an account? <a href="/login" style={boldLinkStyle}>Sign In</a>
        </p>
      </div>
    </div>
  );
};

// --- Styles (Matching Login & Navbar Theme) ---

const pageContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '90vh',
  backgroundColor: '#f9f8f3', // Luxury Cream
  padding: '40px 20px'
};

const registerCard = {
  width: '100%',
  maxWidth: '450px',
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
  marginBottom: '18px'
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

const registerButtonStyle = {
  width: '100%',
  padding: '14px',
  borderRadius: '12px',
  border: 'none',
  backgroundColor: '#2d4a3e', // Deep Emerald
  color: '#ffffff',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '10px'
};

const footerTextStyle = {
  marginTop: '25px',
  fontSize: '0.9rem',
  color: '#666'
};

const boldLinkStyle = {
  color: '#2d4a3e',
  fontWeight: 'bold',
  textDecoration: 'underline'
};

export default Register;