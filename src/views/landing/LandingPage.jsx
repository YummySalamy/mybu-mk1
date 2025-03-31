import React from 'react';
import BasicHeader from '../../components/header/LandingBasicHeader';
import TwoColumnsHero from '../../components/hero/TwoColumnsHero';
import './assets/LandingPage.css';

const LandingPage = ({toggleTheme}) => {
  return (
    <div className="landing-page">
      <BasicHeader toggleTheme={toggleTheme} />
      <TwoColumnsHero
        title="Welcome to Maibu"
        description="Your all in one business administrator, use all the power of AI to automate your business."
        buttonLabel="Get started"
        onButtonClick={() => console.log('Button clicked')}
        />
    </div>
  );
};

export default LandingPage;