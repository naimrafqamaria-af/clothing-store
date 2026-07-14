import React from 'react';
import './Features.css';

const features = [
  { icon: '🚚', title: 'Free Shipping', desc: 'On all orders over $50' },
  { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' },
  { icon: '🔒', title: 'Secure Payment', desc: '100% secure transactions' },
  { icon: '🎁', title: 'Special Offers', desc: 'Exclusive deals every week' },
];

const Features = () => {
  return (
    <div className="features">
      {features.map((f, i) => (
        <div className="feature-card" key={i}>
          <span className="feature-icon">{f.icon}</span>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;