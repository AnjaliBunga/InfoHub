# InfoHub - Full Stack Web Application

A full-stack web application built with React (frontend) and Node.js/Express (backend) that integrates three utilities:

1. **Real-time Weather Display** - Get weather information for any city
2. **Currency Converter** - Convert INR to USD and EUR
3. **Motivational Quote Generator** - Get random inspirational quotes

## Features

- 🌤️ Real-time weather data from OpenWeatherMap API
- 💱 Currency conversion using ExchangeRate-API
- 💭 Random motivational quotes from Quotable API
- 🎨 Modern, responsive UI with gradient backgrounds
- ⚡ Fast and efficient API calls

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- OpenWeatherMap API key (free tier available at https://openweathermap.org/api)

## Installation

### 1. Clone or navigate to the project directory

```bash
cd wcq
```

### 2. Install dependencies

Install all dependencies (both server and client):

```bash
npm run install-all
```

Or install separately:

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the `server` directory:

```bash
cd server
touch .env
```

Add your OpenWeatherMap API key to the `.env` file:

```
WEATHER_KEY=your_openweathermap_api_key_here
```

**To get your API key:**
1. Go to https://openweathermap.org/api
2. Sign up for a free account
3. Navigate to API keys section
4. Copy your API key and paste it in the `.env` file

## Running the Application

### Option 1: Run both server and client together (Recommended)

From the root directory:

```bash
npm run dev
```

This will start both the backend server (port 5000) and React frontend (port 3000) concurrently.

### Option 2: Run separately

**Terminal 1 - Start the backend server:**
```bash
cd server
npm start
# or for development with auto-reload:
npm run dev
```

**Terminal 2 - Start the React frontend:**
```bash
cd client
npm start
```

## Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## API Endpoints

### Weather API
```
GET /api/weather/:input
```
Example: `http://localhost:5000/api/weather/London`

Response:
```json
{
  "city": "London",
  "temperature": 15.5,
  "condition": "clear sky"
}
```

### Currency Converter API
```
GET /api/currency/:amount
```
Example: `http://localhost:5000/api/currency/100`

Response:
```json
{
  "inr": 100,
  "usd": "1.20",
  "eur": "1.10"
}
```

### Quote API
```
GET /api/quote
```
Example: `http://localhost:5000/api/quote`

Response:
```json
{
  "quote": "The only way to do great work is to love what you do.",
  "author": "Steve Jobs"
}
```

## Project Structure

```
wcq/
├── server/
│   ├── server.js          # Express server with API routes
│   ├── package.json       # Server dependencies
│   └── .env              # Environment variables (create this)
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── WeatherDisplay.js
│   │   │   ├── CurrencyConverter.js
│   │   │   └── QuoteGenerator.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── package.json          # Root package.json for running both
└── README.md
```

## Technologies Used

### Backend
- Node.js
- Express.js
- Axios (for HTTP requests)
- CORS
- dotenv

### Frontend
- React
- Axios
- CSS3 (with gradients and animations)

## Troubleshooting

### Port Already in Use
If port 5000 or 3000 is already in use:
- Change the PORT in `server/server.js` (default: 5000)
- Change the React port by setting `PORT=3001` in `client/.env` or edit `package.json`

### Weather API Not Working
- Verify your OpenWeatherMap API key is correct in `server/.env`
- Check if the API key has proper permissions
- Ensure you're using the free tier API endpoint

### CORS Errors
- The server is configured with CORS enabled
- If you still see CORS errors, check that the backend is running on port 5000

## License

ISC

## Author

Created as part of ByteXL Assignment

