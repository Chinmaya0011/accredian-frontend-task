import React from 'react';
import './HeroSection.css'; // Assuming you have a separate CSS file for styling

const HeroSection = ({ onReferClick }) => {
  return (
    <div className="hero-section">
    
        <div className="text-overlay">
          <h1 className="title">Let's Learn & Earn</h1>
          <p className="description">Get a chance to win up to ₹15,000</p>
          <button className="cta-button" onClick={onReferClick}>
            Refer Now
          </button>
        </div>
        <div className="image-container">
          <img src="/banner.png" alt="Banner" className="banner-image" />
        </div>

    </div>
  );
};

export default HeroSection;
