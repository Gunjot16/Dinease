const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// GET route for testing the login route
app.get('/login', (req, res) => {
    res.send('Login route is working!');
});

// POST route for login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log("in login page");

    // Authentication logic here
    if (username === 'admin' && password === 'password') {
        res.json({ message: 'Login successful', redirectTo: 'http://localhost:3000/workspace' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
