import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // This applies your Eco-Minimalist styles globally
import App from './App'; // This is where your backend fetch logic lives
import reportWebVitals from './reportWebVitals';

/**
 * Zulexia Entry Point
 * This file is the bridge between your React code and the browser.
 * It renders the entire application into the 'root' div of your HTML.
 */

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* The App component is now the heart of your site. 
      It handles the Routing and the connection to your Node.js server. 
    */}
    <App />
  </React.StrictMode>
);

// Performance monitoring
reportWebVitals();
