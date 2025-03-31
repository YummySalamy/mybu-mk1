import React from 'react';
import BasicHeader from '../../components/header/LandingBasicHeader';
import HeroSection from '../../components/hero/HeroSection';
import FeaturesSection from '../../components/landing/features/FeaturesSection';
import CTASection from '../../components/landing/cta/CTASection';
import Footer from '../../components/landing/footer/Footer';
import './assets/LandingPage.css';

const LandingPage = ({ toggleTheme }) => {
  return (
    <div className="landing-page">
      <BasicHeader toggleTheme={toggleTheme} />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;