const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 5000 || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Route: Weather API
app.get("/api/weather/:input", async (req, res) => {
  const city = req.params.input;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_KEY}&units=metric`
    );

    res.json({
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      condition: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      windSpeed: response.data.wind.speed,
      windDirection: response.data.wind.deg,
      visibility: response.data.visibility ? (response.data.visibility / 1000).toFixed(1) : null,
      cloudiness: response.data.clouds.all,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      icon: response.data.weather[0].icon,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

// Route: Currency Converter API
app.get("/api/currency/:amount", async (req, res) => {
  const amount = parseFloat(req.params.amount);

  if (isNaN(amount) || amount < 0) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  try {
    // Using ExchangeRate-API (free tier)
    const response = await axios.get(
      `https://api.exchangerate-api.com/v4/latest/INR`
    );

    const usdRate = response.data.rates.USD;
    const eurRate = response.data.rates.EUR;

    res.json({
      inr: amount,
      usd: (amount * usdRate).toFixed(2),
      eur: (amount * eurRate).toFixed(2),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch currency data" });
  }
});

// Route: Quote API
app.get("/api/quote", async (req, res) => {
  try {
    const response = await axios.get("https://api.quotable.io/random");

    res.json({
      quote: response.data.content,
      author: response.data.author,
    });
  } catch (error) {
    // Fallback to mock quotes if API fails
    const mockQuotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "The best way to predict your future is to create it.",
    author: "Abraham Lincoln",
  },
  {
    quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "We become what we think about.",
    author: "Earl Nightingale",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },
  {
    quote: "Happiness depends upon ourselves.",
    author: "Aristotle",
  },
  {
    quote: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    quote: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey",
  },
  {
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "If you cannot do great things, do small things in a great way.",
    author: "Napoleon Hill",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
    author: "James Baldwin",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    quote: "Don’t count the days, make the days count.",
    author: "Muhammad Ali",
  },
  {
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    quote: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
];


    const randomQuote =
      mockQuotes[Math.floor(Math.random() * mockQuotes.length)];

    res.json({
      quote: randomQuote.quote,
      author: randomQuote.author,
    });
  }
});

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

