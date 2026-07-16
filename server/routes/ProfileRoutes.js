const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const upload = require("../middleware/upload");

const {
    getMyProfile,
    updateProfile,
    uploadProfilePhoto,
    deletePhoto,
    setPrimaryPhoto,
} = require("../controllers/ProfileController");


// Get My Profile
router.get(
    "/me",
    auth,
    getMyProfile
);

// Update Profile
router.put(
    "/",
    auth,
    updateProfile
);

router.post(
    "/photo",
    auth,
    upload.single("photo"),
    uploadProfilePhoto
);
router.delete(
    "/photo/:publicId",
    auth,
    deletePhoto
);
router.patch(
    "/photo/:publicId/primary",
    auth,
    setPrimaryPhoto
);


module.exports = router;