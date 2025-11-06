# Quick Setup Guide

## Step 1: Install Dependencies

```bash
# Install root dependencies (for running both server and client)
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
cd ..
```

## Step 2: Configure Environment Variables

1. Create a `.env` file in the `server` directory:
   ```bash
   cd server
   touch .env
   ```

2. Add your OpenWeatherMap API key:
   ```
   WEATHER_KEY=your_api_key_here
   ```

   Get your free API key from: https://openweathermap.org/api

## Step 3: Run the Application

### Option A: Run both together (Recommended)
```bash
npm run dev
```

### Option B: Run separately

**Terminal 1:**
```bash
cd server
npm start
```

**Terminal 2:**
```bash
cd client
npm start
```

## Step 4: Access the App

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Troubleshooting

- **Port conflicts**: Change PORT in `server/server.js` or set PORT in client
- **Weather API errors**: Check your API key in `server/.env`
- **Module not found**: Run `npm install` in both server and client directories

