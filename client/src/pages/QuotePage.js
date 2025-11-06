import React from 'react';
import QuoteGenerator from '../components/QuoteGenerator';
import './QuotePage.css';

const QuotePage = () => {
  return (
    <div className="quote-page">
      <div className="page-container">
        <div className="page-header-section">
          <h1 className="page-title">💭 Motivational Quotes</h1>
          <p className="page-description">
            Get inspired with random motivational quotes from famous personalities
          </p>
          <div className="page-content-text">
            <p>
              Discover inspiring quotes from influential figures worldwide. Get 
              carefully curated motivational quotes to spark creativity and boost morale.
            </p>
            <p>
              Our collection features wisdom from thought leaders, entrepreneurs, and 
              philosophers. Click "Get New Quote" for fresh inspiration whenever you need it.
            </p>
          </div>
        </div>
        <div className="page-card-section">
          <QuoteGenerator />
        </div>
      </div>
    </div>
  );
};

export default QuotePage;

