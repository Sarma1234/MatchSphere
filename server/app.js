const express = require("express");
const cors = require("cors");

const errorHandler = require("./middleware/errorHandler");

const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const userRoutes = require("./routes/userRoutes");
const swipeRoutes = require("./routes/swipeRoutes");
const userPurposeRoutes = require("./routes/userPurposeRoutes");

const discoverRoutes = require("./routes/discoverRoutes");


const app = express();

// Middleware
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/swipes", swipeRoutes);
app.use("/api/v1/user-purposes", userPurposeRoutes);
app.use("/api/v1/discover", discoverRoutes);    

// Health Check
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running",
    });
});

// Error Handler (Always Last)
app.use(errorHandler);

module.exports = app;