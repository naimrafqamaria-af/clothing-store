import React from 'react';
import './Hero.css';
import hero from '../Assets/hero.jpg';

export const Hero = () => {
  const handleViewCollection = () => {
    alert("You must choose a category");
  };

  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-text">
          <div className="hand-icon">
            <p>NEW</p>
          </div>
          <p>COLLECTION</p>
          <p>FOR EVERYONE</p>
        </div>
        <div className="hero-latest-btn" onClick={handleViewCollection}>
          <div>Latest Collection</div>
          <span>→</span>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} alt="Hero Banner" />
      </div>
    </div>
  );
};

export default Hero;