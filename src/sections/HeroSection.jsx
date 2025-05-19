import React from 'react';
import artImage from '/images/art.png';
import artImage2 from '/images/art2.png';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-card animate-fade-in">
          <div className="pulse-line"></div>

          {/* Art images positioned absolutely in corners */}
          

          <div className="hero-card-content">
            <img src={artImage2} alt="Art Bottom Left" className="hero-art hero-art-left" />
          
            <h1 className="hero-heading animate-slide-up">Yasmin Emergency Dispatch System</h1>
            <p className="hero-paragraph animate-slide-up-delay-1">
              Respond faster. Save lives. Coordinate emergency services with speed and precision.
            </p>
            <button className="cta-button animate-slide-up-delay-2">Request a Demo</button>
            <img src={artImage} alt="Art Bottom Right" className="hero-art hero-art-right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
