import React from 'react';
import CurrencyConverter from '../components/CurrencyConverter';
import './CurrencyPage.css';

const CurrencyPage = () => {
  return (
    <div className="currency-page">
      <div className="page-container">
        <div className="page-header-section">
          <h1 className="page-title">💱 Currency Converter</h1>
          <p className="page-description">
            Convert Indian Rupees (INR) to USD and EUR with live exchange rates
          </p>
          <div className="page-content-text">
            <p>
              Convert Indian Rupees (INR) to US Dollars (USD) and Euros (EUR) with 
              real-time exchange rates. Simply enter the amount in INR to get instant 
              conversions.
            </p>
            <p>
              Ideal for travelers, international transactions, or quick currency 
              checks. Rates are updated in real-time from reliable financial data sources.
            </p>
          </div>
        </div>
        <div className="page-card-section">
          <CurrencyConverter />
        </div>
      </div>
    </div>
  );
};

export default CurrencyPage;

