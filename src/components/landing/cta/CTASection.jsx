import React from 'react';
import './assets/styles/CTA.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <h2>Start automating your business today</h2>
      <p>Sign up and get your first 14 days free – no credit card required.</p>
      <button className="cta-button" onClick={() => console.log('Register')}>Create your account</button>
    </section>
  );
};

export default CTASection;