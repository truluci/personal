const express = require('express');
const router = express.Router();

// Define your routes
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;
