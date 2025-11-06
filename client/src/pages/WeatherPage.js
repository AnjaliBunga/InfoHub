import React from 'react';
import WeatherDisplay from '../components/WeatherDisplay';
import './WeatherPage.css';

const WeatherPage = () => {
  return (
    <div className="weather-page">
      <div className="page-container">
        <div className="page-header-section">
          <h1 className="page-title">🌤️ Weather Display</h1>
          <p className="page-description">
            Get real-time weather information for any city around the world
          </p>
          <div className="page-content-text">
            <p>
              Get accurate, real-time weather information for any city worldwide. 
              Enter a city name to instantly receive current temperature and weather conditions.
            </p>
            <p>
              Perfect for trip planning, outdoor activities, or checking weather 
              conditions anywhere in the world. Data is updated in real-time from 
              reliable meteorological services.
            </p>
          </div>
        </div>
        <div className="page-card-section">
          <WeatherDisplay />
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;

