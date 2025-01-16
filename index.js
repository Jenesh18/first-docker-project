const express = require('express');
const app = express();

// Use environment variable for port or fallback to 5000
const PORT = process.env.PORT || 5000;

// Sample route
app.get("/", (req, res) => {
    res.json([
        { name: 'jenesh', age: 20 },
        { name: 'test1', age: 25 },
        { name: 'test2', age: 28 }
    ]);
});

// Basic error handling middleware
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
