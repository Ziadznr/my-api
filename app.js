const express = require("express");
const router = require("./src/routes/api");
const app = express();

// Use JSON middleware
app.use(express.json()); // Ensure this comes before routes

// Security middleware
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const hpp = require("hpp");

app.use(cors());
app.use(hpp());
app.use(xss());
app.use(helmet());
app.use(mongoSanitize());

// Request rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(limiter);

// Database connection
const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/schools';
async function connectDB() {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}
connectDB();

app.use("/api/v1", router);

// Undefined route
app.use("*", (req, res) => {
    res.status(404).json({ status: "fail", data: "Not found" });
});

module.exports = app;