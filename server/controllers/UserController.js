const userService = require("../services/UserService");

/* -------------------------------------------------------------------------- */
/*                              Get My Profile                                */
/* -------------------------------------------------------------------------- */

exports.getMyProfile = async (req, res, next) => {

    try {

        const user = await userService.getMyProfile(
            req.user.id
        );

        res.status(200).json({

            success: true,

            message: "Profile fetched successfully.",

            data: user,

        });

    }

    catch (error) {

        next(error);

    }

};

/* -------------------------------------------------------------------------- */
/*                              Update Profile                                */
/* -------------------------------------------------------------------------- */

exports.updateProfile = async (req, res, next) => {

    try {

        const updatedUser =
            await userService.updateProfile(

                req.user.id,

                req.body

            );

        res.status(200).json({

            success: true,

            message: "Profile updated successfully.",

            data: updatedUser,

        });

    }

    catch (error) {

        next(error);

    }

};

/* -------------------------------------------------------------------------- */
/*                          Switch Active Purpose                             */
/* -------------------------------------------------------------------------- */

exports.switchActivePurpose = async (req, res, next) => {

    try {

        const user =
            await userService.switchActivePurpose(

                req.user.id,

                req.body.activePurpose

            );

        res.status(200).json({

            success: true,

            message: "Active purpose updated successfully.",

            data: user,

        });

    }

    catch (error) {

        next(error);

    }

};