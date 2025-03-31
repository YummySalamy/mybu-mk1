import React, {useEffect, useState} from 'react';
import Card from '../../components/cards/Card';
import './assets/Home.css';

const HomePage = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  return (
    <div className="homepage">
      <main className="topics-section">
        <div className="topics-grid">
        <Card
          title="Explosive Growth"
          description="Perfect for your next content, leave to us and enjoy the result!"
          buttonLabel="Book a Call"
          onButtonClick={() => alert("¡Llamada reservada!")}
        />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
