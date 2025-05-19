import React from 'react';
import dipatchImage from '/images/dispatch-center.jpg'
import artImage from '/images/art.png';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">About Our Emergency Dispatch System</h1>
          <div className="title-underline"></div>
          <p className="about-description">
            Our advanced emergency dispatch system is designed to revolutionize how first responders coordinate and execute life-saving operations. Built with cutting-edge technology and informed by decades of emergency response expertise, our platform reduces response times, improves resource allocation, and ultimately helps save more lives.
          </p>
          <p className="about-description">
            Trusted by leading emergency service departments across the country, our system integrates seamlessly with existing infrastructure while providing powerful new capabilities for mission-critical situations.
          </p>
          <button className="cta-button">View Case Studies</button>
        </div>
        <div className="about-image-card">
          <div className="image-container">
            <img src={artImage} alt="Emergency Dispatch Center" className="about-image" />
          </div>
          <div className="image-caption">
            <h3 className="caption-title">State-of-the-Art Command Center</h3>
            <p className="caption-text">Our system powers emergency response centers across the nation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;