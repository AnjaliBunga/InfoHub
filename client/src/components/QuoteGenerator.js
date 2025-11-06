import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuoteGenerator.css';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://infohub-ldqu.onrender.com/api/quote');
      setQuote(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch quote');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="card quote-card">
      <button onClick={fetchQuote} disabled={loading} className="quote-button">
        {loading ? 'Loading...' : 'Get New Quote'}
      </button>

      {error && <div className="error-message">{error}</div>}

      {quote && (
        <div className="quote-content">
          <div className="quote-text">"{quote.quote}"</div>
          <div className="quote-author">— {quote.author}</div>
        </div>
      )}
    </div>
  );
};

export default QuoteGenerator;

