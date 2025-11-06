import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to InfoHub</h1>
        <p className="hero-subtitle">Your one-stop information hub</p>
        <p className="hero-description">
          Access real-time weather data, currency conversion, and inspiring quotes all in one place
        </p>
      </div>

      <div className="features-grid">
        <Link to="/weather" className="feature-card weather-feature">
          <div className="feature-icon">🌤️</div>
          <h2>Weather Display</h2>
          <p>Get real-time weather information for any city around the world</p>
          <div className="feature-link">Explore Weather →</div>
        </Link>

        <Link to="/currency" className="feature-card currency-feature">
          <div className="feature-icon">💱</div>
          <h2>Currency Converter</h2>
          <p>Convert Indian Rupees (INR) to USD and EUR with live exchange rates</p>
          <div className="feature-link">Convert Currency →</div>
        </Link>

        <Link to="/quotes" className="feature-card quote-feature">
          <div className="feature-icon">💭</div>
          <h2>Motivational Quotes</h2>
          <p>Get inspired with random motivational quotes from famous personalities</p>
          <div className="feature-link">Get Quotes →</div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

