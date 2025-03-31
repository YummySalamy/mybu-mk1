import React from 'react';
import MyBuLogo from '../../assets/MyBu_logo.png';
import './assets/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <img src={MyBuLogo} alt="MyBu Logo" className="hero-logo-text" />
        </h1>
        <p className="hero-description">
          Your all-in-one business administrator powered by AI to automate everything.
        </p>
        <button className="hero-button" onClick={() => console.log('Get started')}>Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;