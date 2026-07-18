const asyncHandler = require("../utils/asyncHandler");

const ApiResponse = require("../utils/ApiResponse");

const userPurposeService = require("../services/UserPurposeService");


/* -------------------------------------------------------------------------- */
/*                         Get One Purpose Answers                            */
/* -------------------------------------------------------------------------- */

const getPurpose = asyncHandler(async (req, res) => {

    const userPurpose = await userPurposeService.getPurpose(

        req.user._id,

        req.params.purpose

    );

    return res.status(200).json(

        new ApiResponse(

            200,

            userPurpose,

            "Purpose fetched successfully"

        )

    );

});


/* -------------------------------------------------------------------------- */
/*                      Save / Update Purpose Answers                         */
/* -------------------------------------------------------------------------- */

const updatePurpose = asyncHandler(async (req, res) => {

    const updatedPurpose = await userPurposeService.updatePurpose(

        req.user._id,

        req.params.purpose,

        req.body.answers

    );

    return res.status(200).json(

        new ApiResponse(

            200,

            updatedPurpose,

            "Purpose updated successfully"

        )

    );

});


/* -------------------------------------------------------------------------- */
/*                       Get All User Purposes                                */
/* -------------------------------------------------------------------------- */

const getAllPurposes = asyncHandler(async (req, res) => {

    const purposes = await userPurposeService.getAllPurposes(

        req.user._id

    );

    return res.status(200).json(

        new ApiResponse(

            200,

            purposes,

            "Purposes fetched successfully"

        )

    );

});


module.exports = {

    getPurpose,

    updatePurpose,

    getAllPurposes,

};