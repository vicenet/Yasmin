import React from 'react';

const ServiceSection = () => {
  return (
    <section className="service-section">
      <div className="service-container">
        <div className="service-header">
          <h1 className="service-title">Our Emergency Services</h1>
          <div className="title-underline"></div>
        </div>
        
        <div className="service-cards-row">
          <div className="service-card">
            <div className="card-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="card-title">Dispatch Coordination</h3>
            <p className="card-description">
              Centralized command and control for all emergency response units. Our system coordinates police, fire, and medical services from a single interface, reducing response times and improving outcomes.
            </p>
            <ul className="feature-list">
              <li>Real-time unit tracking</li>
              <li>Automated priority assignment</li>
              <li>Cross-department coordination</li>
            </ul>
            <button className="cta-button animate-slide-up-delay-2">Learn More</button>
          </div>
          
          <div className="service-card">
            <div className="card-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="card-title">Medical Response</h3>
            <p className="card-description">
              Advanced medical dispatch protocols ensure the right resources are sent to every emergency. Our AI-powered triage system helps dispatchers provide life-saving instructions while help is on the way.
            </p>
            <ul className="feature-list">
              <li>Medically approved protocols</li>
              <li>Real-time vital sign monitoring</li>
              <li>Hospital capacity integration</li>
            </ul>
            <button className="cta-button animate-slide-up-delay-2">Learn More</button>
          </div>
        </div>
        
        <div className="full-width-card with-image">
  <div className="full-card-content">
    <div className="card-text-section">
      <div className="card-icon-large">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="full-card-text">
        <h3 className="full-card-title">24/7 Emergency Management</h3>
        <p className="full-card-description">
          Our comprehensive emergency management system operates around the clock, providing uninterrupted service to communities in need. With 99.99% uptime and redundant systems, you can trust our platform when lives are on the line.
        </p>
      </div>
      <div className="service-stats">
        <div className="stat-item">
          <span className="stat-value">99.99%</span>
          <span className="stat-label">Uptime</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">24/7</span>
          <span className="stat-label">Support</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">45+</span>
          <span className="stat-label">Integrations</span>
        </div>
      </div>
      <button className="cta-button animate-slide-up-delay-2">Learn More</button>
    </div>

    <div className="card-image-section">
      <img src="/images/art2.png" alt="Emergency Dispatch Illustration" />
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default ServiceSection;