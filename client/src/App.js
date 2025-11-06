import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';
import CurrencyPage from './pages/CurrencyPage';
import QuotePage from './pages/QuotePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/currency" element={<CurrencyPage />} />
            <Route path="/quotes" element={<QuotePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

