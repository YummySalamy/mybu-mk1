import React from 'react'
import './assets/Hero.css'

const TwoColumnsHero = ({ title, description, buttonLabel, onButtonClick }) => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description">{description}</p>
        <button className="hero-button" onClick={onButtonClick}>{buttonLabel}</button>
      </div>
    </div>
  )
}

export default TwoColumnsHero