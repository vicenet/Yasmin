import React, { useState } from 'react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "The emergency dispatch system has dramatically reduced our response times by 45%. The user interface is intuitive, and the training process was smooth and efficient.",
      name: "Chief Robert M.",
      position: "Fire Department",
      background: "var(--powder-blue)"
    },
    {
      quote: "As a 911 operator, this system has transformed how we manage emergency calls. The AI-assisted protocols help us provide better guidance while emergency services are en route.",
      name: "Sarah T.",
      position: "Emergency Services",
      background: "var(--royal-blue)"
    },
    {
      quote: "The data analytics from this system have helped us optimize resource allocation across our county. We've seen a 28% improvement in critical response situations.",
      name: "Director James W.",
      position: "County Emergency Management",
      background: "var(--azure)"
    }
  ];
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="subheading">TESTIMONIALS</span>
          <h2 className="heading">What Our Clients Are Saying</h2>
          <p className="description">
            Real experiences from emergency services professionals who have implemented our dispatch system
          </p>
          
          <div className="testimonials-controls">
            <button 
              className="control-button prev" 
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="control-button next" 
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="testimonials-carousel">
          <div 
            className="testimonials-track" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card" 
                style={{ backgroundColor: testimonial.background === 'var(--powder-blue)' ? '#D6E8F2' : 
                                        testimonial.background === 'var(--royal-blue)' ? '#0A2463' : '#247BA0',
                        color: testimonial.background === 'var(--powder-blue)' ? '#0A2463' : '#FFFFFF' }}
              >
                <div className="quote-marks">"</div>
                <p className="quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <span className="name">— {testimonial.name}</span>
                  <span className="position">{testimonial.position}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;