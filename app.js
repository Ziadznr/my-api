const express = require("express");
const router = require("./src/routes/api");
const app = new express()

// Security middleware Import
const mongoSanitize = require("express-mongo-sanitize")
const rateLimit = require("express-rate-limit")
const helmet = require("helmet")
const cors = require("cors")
const xss = require("xss-clean")
const hpp = require("hpp")

//  Security middleware Implement
app.use(cors())
app.use(hpp())
app.use(xss())
app.use(helmet())
app.use(mongoSanitize())

// Request rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(limiter)



app.use("/api/v1", router)

// undefined route
app.use("*", (req, res) => {
    res.status(404).json({ status: "fail", data: "Not found" })
})

module.exports = app