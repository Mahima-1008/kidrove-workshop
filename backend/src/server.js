require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const enquiryRoutes = require('./routes/enquiry');

const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:5173,http://127.0.0.1:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);
const allowLocalDevOrigins = !process.env.CORS_ORIGIN;

function isOriginAllowed(origin) {
  if (allowedOrigins.includes(origin)) {
    return true;
  }

  return allowLocalDevOrigins && /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin);
}

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (!origin || isOriginAllowed(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }

  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  return next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/enquiry', enquiryRoutes);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();
