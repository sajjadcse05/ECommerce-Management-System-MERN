const dns = require('node:dns')
dns.setServers(['8.8.8.8', '8.8.4.4'])
dns.setDefaultResultOrder('ipv4first')

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import the Product model
const Product = require('./models/Product');

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware ---
app.use(cors());
app.use(express.json()); // Essential for parsing JSON bodies in POST requests

// --- MongoDB Connection ---
// Fallback to local MongoDB if .env is missing to prevent 'Invalid Scheme' errors
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/zulexia';

mongoose.set('strictQuery', false);
mongoose.connect(mongoURI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Error Details:");
    console.error(err.message);
    console.log("TIP: Check your .env file for a valid MONGO_URI string starting with mongodb://");
  });

// --- API ROUTES ---

// 1. Create a Product (POST) - Used by your Admin/Form logic
app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, product });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// 2. Get All Products (GET) - Used by your App.js home page
app.get('/api/products', async (req, res) => {
  try {
    // find() fetches everything from your 'products' collection
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 3. Basic Test Route
app.get('/', (req, res) => {
  res.send("Welcome to the Zulexia E-commerce API!");
});

// --- Error Handling Middleware ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke on the server!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});


