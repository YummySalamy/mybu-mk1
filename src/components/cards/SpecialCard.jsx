import React from 'react';
import './assets/Cards.css';

const SpecialCard = ({ title, description }) => {
    return (
      <div className="special-card">
        <p className="special-card-title">{title}</p>
        <p className="special-small-desc">{description}</p>
        <div className="special-go-corner">
          <div className="special-go-arrow">→</div>
        </div>
      </div>
    );
  };
  
  export default SpecialCard;