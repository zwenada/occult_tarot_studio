import React from 'react'

const backgroundImage = "/src/assets/background.png"

const Home = () => {
  return (
    <div 
    className="hero-section" 
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="overlay">
      <h1 className="hero-title">Unlock the Secrets of the Universe</h1>
    </div>
  </div>
);
}

export default Home;
