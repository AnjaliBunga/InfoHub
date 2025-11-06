import React, { useState } from 'react';
import axios from 'axios';
import './WeatherDisplay.css';

const WeatherDisplay = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://infohub-ldqu.onrender.com/api/weather/${encodeURIComponent(city)}`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch weather data');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card weather-card">
      <form onSubmit={fetchWeather} className="weather-form">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="weather-input"
        />
        <button type="submit" disabled={loading} className="weather-button">
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {weatherData && (
        <div className="weather-info">
          <div className="weather-header">
            <div className="weather-city">
              {weatherData.city}
              {weatherData.country && <span className="weather-country">, {weatherData.country}</span>}
            </div>
            <div className="weather-main">
              <div className="weather-temp-main">
                <span className="weather-temp">{Math.round(weatherData.temperature)}°C</span>
                <span className="weather-feels-like">
                  Feels like {Math.round(weatherData.feelsLike)}°C
                </span>
              </div>
              {weatherData.icon && (
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                  alt={weatherData.condition}
                  className="weather-icon"
                />
              )}
            </div>
            <div className="weather-condition">
              {weatherData.condition.charAt(0).toUpperCase() +
                weatherData.condition.slice(1)}
            </div>
          </div>
          
          <div className="weather-details">
            <div className="weather-detail-item">
              <span className="weather-detail-label">Min / Max</span>
              <span className="weather-detail-value">
                {Math.round(weatherData.minTemp)}°C / {Math.round(weatherData.maxTemp)}°C
              </span>
            </div>
            <div className="weather-detail-item">
              <span className="weather-detail-label">Humidity</span>
              <span className="weather-detail-value">{weatherData.humidity}%</span>
            </div>
            <div className="weather-detail-item">
              <span className="weather-detail-label">Wind Speed</span>
              <span className="weather-detail-value">{weatherData.windSpeed} m/s</span>
            </div>
            <div className="weather-detail-item">
              <span className="weather-detail-label">Pressure</span>
              <span className="weather-detail-value">{weatherData.pressure} hPa</span>
            </div>
            {weatherData.visibility && (
              <div className="weather-detail-item">
                <span className="weather-detail-label">Visibility</span>
                <span className="weather-detail-value">{weatherData.visibility} km</span>
              </div>
            )}
            <div className="weather-detail-item">
              <span className="weather-detail-label">Cloudiness</span>
              <span className="weather-detail-value">{weatherData.cloudiness}%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;

