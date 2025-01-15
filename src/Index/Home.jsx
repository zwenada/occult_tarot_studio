import React from 'react'

const backgroundImage = "/src/assets/tarot-card-reading.jpg"

const Home = () => {
  return (
    <div 
    className="hero-section" 
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="overlay">
      <h1 className="hero-title">Unlock the Secrets of the Universe</h1>
      <p className="hero-subtitle">Let the cards reveal your path to clarity and purpose.</p>
      <button className="cta-button">Draw Your Cards</button>
    </div>
  </div>
);
}

export default Home;
