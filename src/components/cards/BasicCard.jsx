import React from 'react';
import './assets/Cards.css';

const BasicCard = ({ title, description, children }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
        {children}
    </div>
  );
};

export default BasicCard;