import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-card animate-fade-in">

          <div className="pulse-line"></div>
          
          <div className="hero-card-content">
            <h1 className="hero-heading animate-slide-up">Yasmin Emergency Dispatch System</h1>
            <p className="hero-paragraph animate-slide-up-delay-1">Respond faster. Save lives. Coordinate emergency services with speed and precision.</p>
            <button className="cta-button animate-slide-up-delay-2">Request a Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;