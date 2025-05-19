import React from 'react';


const CommunitySection = () => {
  return (
    <section className="community-container">
      <div className="community-content">
        <div className="community-text">
          <p className="community-label">Community</p>
          <h2 className="community-title">You’re Not Alone on This Journey</h2>
          <p className="community-description">
            Connect with others, share experiences, and find encouragement in a safe, supportive space.
          </p>
          <button className="community-button">Join The Community</button>
        </div>

        <div className="community-image">
          <img src="/images/art2.png" alt="Community Support Illustration" />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
