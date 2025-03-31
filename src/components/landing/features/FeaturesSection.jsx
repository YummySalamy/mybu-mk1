import React from 'react';
import './assets/styles/Features.css';
import { FaRobot, FaDatabase, FaChartLine } from 'react-icons/fa';

const features = [
  { icon: <FaRobot />, title: 'AI Automation', text: 'Let MyBu handle repetitive tasks using advanced AI models.' },
  { icon: <FaDatabase />, title: 'Inventory & Leads', text: 'Track, filter, and manage all your data in one place.' },
  { icon: <FaChartLine />, title: 'Insightful Reports', text: 'Visual dashboards and metrics to guide decisions.' },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Why Choose MyBu?</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;