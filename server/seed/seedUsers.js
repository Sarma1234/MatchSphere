// const mongoose = require("mongoose");
const dns = require("dns");
const { promisify } = require("util");
const dotenv = require("dotenv");

dotenv.config();

// Use Google's DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const resolveSrv = promisify(dns.resolveSrv);

const connectDB = require("../config/db");
const User = require("../models/User");
const users = require("./usersData");
const MONGO_HOST = "_mongodb._tcp.matchspherecluster.qpv21da.mongodb.net";

const verifyMongoDNS = async () => {
    try {
        await resolveSrv(MONGO_HOST);
        console.log("✅ MongoDB DNS Verified");
    } catch (error) {
        throw new Error(`MongoDB DNS lookup failed: ${error.message}`);
    }
};




// const users = [
//     {
//         fullName: "Rahul Sharma",
//         username: "rahul123",
//         email: "rahul@gmail.com",
//         password: "12345678",
//         bio: "Full Stack Developer",
//         gender: "Male",
//         activePurpose: "Project Partner",
//         location: {
//             city: "Delhi",
//             state: "Delhi",
//             country: "India"
//         },
//         interests: ["Coding", "Travel"],
//         skills: [
//             {
//                 name: "React",
//                 level: "Advanced"
//             },
//             {
//                 name: "Node.js",
//                 level: "Intermediate"
//             }
//         ]
//     },

//     {
//         fullName: "Priya Das",
//         username: "priyadas",
//         email: "priya@gmail.com",
//         password: "12345678",
//         bio: "UI UX Designer",
//         gender: "Female",
//         activePurpose: "Networking",
//         location: {
//             city: "Bangalore",
//             state: "Karnataka",
//             country: "India"
//         },
//         interests: ["Design", "Photography"],
//         skills: [
//             {
//                 name: "Figma",
//                 level: "Expert"
//             }
//         ]
//     },

//     {
//         fullName: "Aman Gupta",
//         username: "amangupta",
//         email: "aman@gmail.com",
//         password: "12345678",
//         bio: "MERN Stack Developer",
//         gender: "Male",
//         activePurpose: "Startup",
//         location: {
//             city: "Mumbai",
//             state: "Maharashtra",
//             country: "India"
//         },
//         interests: ["Cricket", "Coding"],
//         skills: [
//             {
//                 name: "MongoDB",
//                 level: "Advanced"
//             }
//         ]
//     }
// ];

const seedDatabase = async () => {

    try {

        await verifyMongoDNS();

        await connectDB();

        console.log("Deleting users...");
        await User.deleteMany();

        console.log("Creating users...");

        for (const user of users) {
            await User.create(user);
        }

        console.log("✅ Dummy users inserted successfully");

        process.exit(0);

    } catch (error) {

        console.error(error);

        process.exit(1);

    }

};



seedDatabase();