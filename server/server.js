// require("dotenv").config();

// const app = require("./app");

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on port ${PORT}`);
// });

// require("dotenv").config();

// const app = require("./app");
// const connectDB = require("./config/db");

// const PORT = process.env.PORT || 5000;
// console.log("MONGO_URI:", process.env.MONGO_URI);

// // Connect to Database
// connectDB();

// // Start Server
// app.listen(PORT, () => {
//     console.log(`🚀 Server is running on port ${PORT}`);
// });
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});