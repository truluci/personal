const express = require('express');
const router = express.Router();

// Define your routes
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/projects', (req, res) => {
    res.render('projects');
});

router.get('/pictures', (req, res) => {
    res.render('pictures');
});

module.exports = router;
