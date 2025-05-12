import React, { useState } from 'react';

const FAQSection = () => {

  const [expandedItems, setExpandedItems] = useState({});
  

  const faqItems = [
  {
    id: 1,
    question: "How does your emergency dispatch system integrate with existing infrastructure in Kenya?",
    answer: "Our system integrates seamlessly with Kenya’s existing emergency response infrastructure. It supports industry-standard APIs and has connectors for commonly used systems in police, fire, and ambulance services. Our team customizes the integration process to work with your current setup, ensuring minimal disruption."
  },
  {
    id: 2,
    question: "What training is provided for dispatchers using the system?",
    answer: "We offer localized, hands-on training for dispatchers and system users. This includes a 3-day foundational course, refresher modules, and a 'train-the-trainer' program ideal for county-wide rollouts. The system is user-friendly and most operators become proficient within a week."
  },
  {
    id: 3,
    question: "How does the system prioritize emergency calls?",
    answer: "The dispatch system uses smart algorithms to prioritize calls based on urgency, resource availability, proximity, and response history. It’s customizable to follow Kenya-specific emergency protocols and allows manual overrides by senior dispatchers if necessary."
  },
  {
    id: 4,
    question: "What kind of support and maintenance do you offer in Kenya?",
    answer: "We provide round-the-clock technical support, both locally and remotely. Clients benefit from quarterly health checks, security updates, and a dedicated account manager to handle any operational or technical concerns throughout the year."
  },
  {
    id: 5,
    question: "Is the system resilient to network outages or power failures?",
    answer: "Yes, the system includes offline operation capability, local data caching, and automatic syncing when connectivity returns. It’s built with redundancies and can be backed up using solar or generator power in remote or underserved regions."
  },
  {
    id: 6,
    question: "Does the system work with Kenya’s existing emergency numbers like 999 and 112?",
    answer: "Absolutely. The system is configured to support national emergency numbers like 999, 112, and even county-level shortcodes. It can automatically route and log calls from these numbers into the dispatch dashboard."
  },
  {
    id: 7,
    question: "Can the system integrate with SMS and mobile alert systems widely used in Kenya?",
    answer: "Yes. The system supports integration with SMS gateways, USSD codes, and mobile alert systems used by counties and agencies like the Kenya Red Cross. Citizens can report incidents via mobile platforms, which are fed directly into the dispatcher interface."
  },
  {
    id: 8,
    question: "Is your system suitable for use in rural counties with limited infrastructure?",
    answer: "Definitely. Our solution is optimized for both urban and rural use. It supports offline dispatching, lightweight deployment on low-power devices, and is scalable to work even in areas with limited internet or electricity infrastructure."
  }
];

  

  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="heading">Frequently<br />Asked Questions</h2>
          <p className="description">
            Find answers to common questions about our emergency dispatch system, implementation process, and ongoing support.
          </p>
          
         
          <div className="faq-image-card">
            <div className="image-container">
              <img 
                src="src/assets/images/dipatch-support.jpg" 
                alt="Emergency dispatch support team" 
                className="faq-image"
              />
            </div>
            <div className="image-caption">
              <p>Our 24/7 support team is always ready to assist with any questions</p>
            </div>
          </div>
        </div>
        
        <div className="faq-items">
          {faqItems.map((item) => (
            <div 
              key={item.id} 
              className={`faq-item ${expandedItems[item.id] ? 'expanded' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => toggleItem(item.id)}
              >
                <h3>{item.question}</h3>
                <button 
                  className="toggle-button"
                  aria-expanded={expandedItems[item.id]}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="plus-icon"></span>
                  <span className="sr-only">
                    {expandedItems[item.id] ? 'Collapse answer' : 'Expand answer'}
                  </span>
                </button>
              </div>
              
              <div 
                id={`faq-answer-${item.id}`}
                className="faq-answer"
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;