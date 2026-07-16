const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
    getUsers,
} = require("../controllers/UserController");

router.get(
    "/",
    auth,
    getUsers
);

module.exports = router;