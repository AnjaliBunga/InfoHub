import React, { useState } from 'react';
import axios from 'axios';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [currencyData, setCurrencyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const convertCurrency = async (e) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);

    if (!amount || isNaN(numAmount) || numAmount < 0) {
      setError('Please enter a valid amount');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `http://localhost:5000/api/currency/${numAmount}`
      );
      setCurrencyData(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to convert currency');
      setCurrencyData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card currency-card">
      <form onSubmit={convertCurrency} className="currency-form">
        <input
          type="number"
          placeholder="Enter amount in INR..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="currency-input"
          step="0.01"
          min="0"
        />
        <button type="submit" disabled={loading} className="currency-button">
          {loading ? 'Converting...' : 'Convert'}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {currencyData && (
        <div className="currency-results">
          <div className="currency-item">
            <span className="currency-label">INR:</span>
            <span className="currency-value">₹{currencyData.inr}</span>
          </div>
          <div className="currency-item">
            <span className="currency-label">USD:</span>
            <span className="currency-value">${currencyData.usd}</span>
          </div>
          <div className="currency-item">
            <span className="currency-label">EUR:</span>
            <span className="currency-value">€{currencyData.eur}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;

