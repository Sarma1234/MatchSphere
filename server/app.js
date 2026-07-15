// const express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");

// const authRoutes = require("./routes/authRoutes");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));

// // Test Route
// // Health Check Route
// app.get("/", (req, res) => {
//     res.json({
//         success: true,
//         message: "MatchSphere API is running 🚀",
//     });
// });

// // API Routes
// app.use("/api/auth", authRoutes);

// module.exports = app;

const express = require("express");
const ApiError = require("./utils/ApiError");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
    next(new ApiError(400, "Testing Global Error Handler"));
});

// Always keep this LAST
app.use(errorHandler);

module.exports = app;