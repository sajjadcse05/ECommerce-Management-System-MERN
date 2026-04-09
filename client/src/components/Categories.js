import React from 'react';

const Categories = () => {
  // These names match the "Explore our Categories" section in your design
  const cats = [
    { name: 'CupEco', img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400&auto=format&fit=crop' },
    { name: 'EcoSpoonery', img: 'https://images.unsplash.com/photo-1594914141274-783045140e35?q=80&w=400&auto=format&fit=crop' },
    { name: 'NatureSip', img: 'https://images.unsplash.com/photo-1576158113928-4c240eaaf360?q=80&w=400&auto=format&fit=crop' },
    { name: 'FreshPitcher', img: 'https://images.unsplash.com/photo-1613336026275-d6d473084e85?q=80&w=400&auto=format&fit=crop' }
  ];

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <p style={{ color: '#666', marginBottom: '5px' }}>Explore our thoughtful and planet-first</p>
      <h2 style={{ marginBottom: '30px', fontFamily: 'serif', fontSize: '2.5rem' }}>
        <i>Categories</i>
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px' 
      }}>
        {cats.map((cat) => (
          <div key={cat.name} style={{
            height: '400px',
            borderRadius: '24px',
            // This creates the dark overlay so the white text is readable
            background: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%), url(${cat.img}) center/cover`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: '30px',
            color: 'white',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }} className="category-card">
            <h3 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '15px' }}>
              Explore <br/> <i style={{ fontWeight: 'normal' }}>{cat.name}</i>
            </h3>
            <button style={{
              backgroundColor: 'var(--accent-yellow)', // Soft cream color
              border: 'none',
              borderRadius: '25px',
              padding: '10px 25px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              Shop <span style={{ fontSize: '1.2rem' }}>→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;