import React, { useState, useEffect } from 'react';

const Hero = () => {
  // Generic e-commerce production images from Unsplash (Tech, Fashion, Gadgets)
  const slides = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop", // Minimalist Watch
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop", // Headphones
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop", // Sneakers
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop", // Skincare/Lifestyle
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop"  // Shoes/Production
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div style={{
      height: '50vh', // Made the section smaller (reduced from 70vh)
      margin: '15px',
      borderRadius: '20px',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slides[currentIndex]})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      transition: 'background-image 0.8s ease-in-out', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '40px 60px',
      color: 'white',
      position: 'relative'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        maxWidth: '500px', 
        lineHeight: '1.2', 
        fontFamily: 'sans-serif',
        fontWeight: '800'
      }}>
        Premium Quality <br/> Modern Essentials
      </h1>
      
      <p style={{ maxWidth: '400px', margin: '15px 0', fontSize: '1rem', opacity: 0.9 }}>
        Discover our latest collection of high-performance products designed for your lifestyle.
      </p>

      <button style={{
        width: 'fit-content',
        padding: '10px 30px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#1a1a1a', // Darker button for a tech/fashion feel
        color: 'white',
        fontWeight: '600',
        cursor: 'pointer',
        fontSize: '0.9rem'
      }}>
        Shop Collection →
      </button>

      {/* Slide Indicators */}
      <div style={{ 
        position: 'absolute', 
        bottom: '20px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        display: 'flex', 
        gap: '8px' 
      }}>
        {slides.map((_, index) => (
          <div key={index} style={{
            width: currentIndex === index ? '20px' : '8px', // Active dot is wider
            height: '8px',
            borderRadius: '10px',
            backgroundColor: 'white',
            opacity: currentIndex === index ? 1 : 0.4,
            transition: 'all 0.3s ease'
          }} />
        ))}
      </div>
    </div>
  );
};

export default Hero;