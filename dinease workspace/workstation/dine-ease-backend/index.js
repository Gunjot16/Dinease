// dine-ease-backend/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const PORT = 5001; // Choose a port for backend

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Example route to check backend workspace
app.get('/workspace', (req, res) => {
    res.json({ message: 'Welcome to the DineEase Workspace!' });
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple validation for example
  if (username === 'admin' && password === 'password') {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Example workspace route
app.get('/workspace', (req, res) => {
  res.send('Welcome to the DineEase Workspace!');
});
// Other routes for managing orders, bills, etc.
// e.g., app.post('/order', (req, res) => { /* handle orders */ });

// Start the server
app.listen(PORT, () => {
    console.log(`DineEase Workspace Server running on port ${PORT}`);
});
