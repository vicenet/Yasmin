import React from 'react';

const PartnerSection = () => {
  const partners = [
  { name: 'Nairobi Fire Brigade', id: 'nairobi-fire' },
  { name: 'Kenya Police Service', id: 'kenya-police' },
  { name: 'County Emergency Services - Nairobi', id: 'nairobi-county-emergency' },
  { name: 'Kenyatta National Hospital', id: 'knh' },
  { name: 'National Disaster Management Unit (NDMU)', id: 'ndmu' },
  { name: 'St. John Ambulance Kenya', id: 'st-john-ambulance' },
  { name: 'Nairobi City County Services', id: 'nairobi-city-county' },
  { name: 'Mbagathi Hospital', id: 'mbagathi-hospital' }
];


  return (
    <section className="partner-section">
      <div className="partner-container">
        <div className="partner-header">
          <span className="subheading">TRUSTED PARTNERSHIPS</span>
          <h2 className="heading">Collaborating with Leading Emergency Services</h2>
        </div>
        
        <div className="partner-logo-card">
          <div className="logo-scroll-container">
            <div className="logo-track">
          
              {partners.map(partner => (
                <div className="logo-item" key={partner.id}>
                  <div className="logo-placeholder">
                    <svg className="logo-svg" viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100%" height="100%" fill="none" />
                      <path d="M30,20 L50,20 L50,60 L30,60 Z" fill="currentColor" />
                      <circle cx="120" cy="40" r="20" fill="currentColor" />
                      <path d="M180,20 L210,40 L180,60 Z" fill="currentColor" />
                    </svg>
                    <span className="logo-name">{partner.name}</span>
                  </div>
                </div>
              ))}
              
           
              {partners.map(partner => (
                <div className="logo-item" key={`${partner.id}-dup`}>
                  <div className="logo-placeholder">
                    <svg className="logo-svg" viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100%" height="100%" fill="none" />
                      <path d="M30,20 L50,20 L50,60 L30,60 Z" fill="currentColor" />
                      <circle cx="120" cy="40" r="20" fill="currentColor" />
                      <path d="M180,20 L210,40 L180,60 Z" fill="currentColor" />
                    </svg>
                    <span className="logo-name">{partner.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;