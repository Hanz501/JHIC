const express = require('express');
const router = express.Router();

// Test route
router.get('/ping', (req, res) => {
    res.json({ message: 'pong', timestamp: new Date() });
});

// Basic routes
router.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ]);
});

module.exports = router;