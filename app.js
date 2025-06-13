const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS as the templating engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    res.render('index');
});

// About route
app.get('/about', (req, res) => {
    res.render('about');
});

// Newborn photography route
app.get('/newborn', (req, res) => {
    res.render('newborn');
});

// Smash Cake photography route
app.get('/smash-cake', (req, res) => {
    res.render('smash-cake');
});

// Family Portraits photography route
app.get('/family-portraits', (req, res) => {
    res.render('family-portraits');
});

// Maternity photography route
app.get('/maternity', (req, res) => {
    res.render('maternity');
});

// Test route to check static image serving
app.get('/test-image', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/images/Smash-Cake/1-IMG_5001.jpg'));
});

// 404 Error handling for undefined routes
app.use((req, res) => {
    res.status(404).render('404');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
