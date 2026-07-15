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
const { promisify } = require("util");
const dotenv = require("dotenv");

dotenv.config();

// Use Google's DNS servers
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const resolveSrv = promisify(dns.resolveSrv);

const connectDB = require("./config/db");
const app = require("./app");

const PORT = process.env.PORT || 5000;
const MONGO_HOST = "_mongodb._tcp.matchspherecluster.qpv21da.mongodb.net";

const verifyMongoDNS = async () => {
    try {
        const records = await resolveSrv(MONGO_HOST);

        console.log("✅ MongoDB DNS Verified");
        // Uncomment for debugging if needed
        // console.table(records);

        return records;
    } catch (error) {
        throw new Error(`MongoDB DNS lookup failed: ${error.message}`);
    }
};

const startServer = async () => {
    try {
        await verifyMongoDNS();
        await connectDB();

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("❌ Server Startup Failed");
        console.error(error.message);
        process.exit(1);
    }
};

startServer();;