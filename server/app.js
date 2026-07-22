const express = require("express");
const cors = require("cors");

const errorHandler = require("./middleware/errorHandler");

const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/ChatRoutes");
const userPurposeRoutes = require("./routes/userPurposeRoutes");
const matchRoutes = require("./routes/matchRoutes");
const discoverRoutes = require("./routes/discoverRoutes");


const app = express();


/* -------------------------------------------------------------------------- */
/*                              Middleware                                    */
/* -------------------------------------------------------------------------- */

app.use(
    cors()
);

app.use(
    express.json()
);


/* -------------------------------------------------------------------------- */
/*                               Health Check                                 */
/* -------------------------------------------------------------------------- */

app.get(
    "/",
    (req,res)=>{

        res.json({

            success:true,

            message:
            "MatchSphere API is running 🚀"

        });

    }
);



/* -------------------------------------------------------------------------- */
/*                                Routes                                      */
/* -------------------------------------------------------------------------- */


app.use(
    "/api/v1/auth",
    authRoutes
);


app.use(
    "/api/v1/profile",
    profileRoutes
);


app.use(
    "/api/v1/users",
    userRoutes
);


app.use(
    "/api/v1/user-purposes",
    userPurposeRoutes
);
app.use(
    "/api/v1/discover",
    discoverRoutes
);

app.use(
    "/api/v1/chat",
    chatRoutes
);


/* ------------------------------- Match ----------------------------------- */


app.use(
    "/api/v1/matches",
    matchRoutes
);



/* -------------------------------------------------------------------------- */
/*                           Error Handler                                   */
/* -------------------------------------------------------------------------- */


app.use(
    errorHandler
);


module.exports = app;