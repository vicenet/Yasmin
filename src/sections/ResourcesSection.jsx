import React from 'react';

const ResourcesSection = () => {
  return (
    <section className="resources-section">
      <div className="resources-container">
        <div className="resources-header">
          <span className="subheading">EXPLORE & LEARN</span>
          <h2 className="heading">Resources for<br />Emergency Response</h2>
          <p className="description">
            Explore expert insights, training guides, and tools to enhance 
            your emergency response capabilities and save more lives.
          </p>
        </div>
        
        <div className="resources-cards">
          <div className="resource-card">
            <h3 className="card-title">Articles &<br />Guides</h3>
            <p className="card-description">
              Practical tips on emergency protocols, dispatch coordination, and response optimization strategies.
            </p>
            <button className="explore-button gold">Explore</button>
          </div>
          
          <div className="resource-card">
            <h3 className="card-title">Training &<br />Certification</h3>
            <p className="card-description">
              Comprehensive training modules for dispatch personnel and emergency response team certification.
            </p>
            <button className="explore-button teal">Explore</button>
          </div>
          
          <div className="resource-card">
            <h3 className="card-title">Webinars &<br />Workshops</h3>
            <p className="card-description">
              Live and recorded sessions with emergency management professionals and industry experts.
            </p>
            <button className="explore-button pink">Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;