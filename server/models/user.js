const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const MATCH_PURPOSES = require("../constants/matchPurpose");


/* -------------------------------------------------------------------------- */
/*                               Sub Schemas                                  */
/* -------------------------------------------------------------------------- */


const photoSchema = new mongoose.Schema(

    {
        url: {

            type: String,

            required: true,

            trim: true,

        },


        publicId: {

            type: String,

            default: "",

        },


        caption: {

            type: String,

            default: "",

            trim: true,

        },


        isPrimary: {

            type: Boolean,

            default: false,

        },


        uploadedAt: {

            type: Date,

            default: Date.now,

        },

    },

    {
        _id: false
    }

);



const skillSchema = new mongoose.Schema(

    {

        name: {

            type: String,

            required: true,

            trim: true,

        },


        level: {

            type: String,

            enum: [
                "Beginner",
                "Intermediate",
                "Advanced",
                "Expert"
            ],

            default: "Beginner",

        },

    },

    {
        _id: false
    }

);



const languageSchema = new mongoose.Schema(

    {

        name: {

            type: String,

            required: true,

            trim: true,

        },


        proficiency: {

            type: String,

            enum: [
                "Basic",
                "Intermediate",
                "Fluent",
                "Native"
            ],

            default: "Basic",

        },

    },

    {
        _id: false
    }

);


/* -------------------------------------------------------------------------- */
/*                               User Schema                                  */
/* -------------------------------------------------------------------------- */


const userSchema = new mongoose.Schema(

{

/* -------------------------------------------------------------------------- */
/*                              Authentication                                */
/* -------------------------------------------------------------------------- */


fullName: {

    type: String,

    required: true,

    trim: true,

},


username: {

    type: String,

    required: true,

    unique: true,

    lowercase: true,

    trim: true,

},


email: {

    type: String,

    required: true,

    unique: true,

    lowercase: true,

    trim: true,

    validate: [
        validator.isEmail,
        "Please enter valid email"
    ],

},


password: {

    type: String,

    required: true,

    minlength: 6,

    select: false,

},


role: {

    type: String,

    enum: [
        "user",
        "admin"
    ],

    default: "user",

},


accountStatus: {

    type: String,

    enum: [
        "active",
        "suspended",
        "blocked"
    ],

    default: "active",

},


isEmailVerified: {

    type: Boolean,

    default: false,

},


lastLogin: Date,



/* -------------------------------------------------------------------------- */
/*                              Profile Info                                  */
/* -------------------------------------------------------------------------- */


headline: {

    type: String,

    default: "",

    maxlength: 120,

    trim: true,

},


bio: {

    type: String,

    default: "",

    maxlength: 500,

},


dateOfBirth: Date,


gender: {

    type: String,

    enum: [
        "Male",
        "Female",
        "Other",
        "Prefer not to say"
    ],

},



professional: {


    title: {

        type: String,

        default: "",

        trim: true,

    },


    company: {

        type: String,

        default: "",

        trim: true,

    },


},



education: {


    college: {

        type: String,

        default: "",

        trim: true,

    },


    degree: {

        type: String,

        default: "",

        trim: true,

    },


    graduationYear: Number,


},




location: {


    city: {

        type: String,

        default: "",

        trim: true,

    },


    state: {

        type: String,

        default: "",

        trim: true,

    },


    country: {

        type: String,

        default: "",

        trim: true,

    },


},



/* -------------------------------------------------------------------------- */
/*                                  Media                                     */
/* -------------------------------------------------------------------------- */


coverPhoto: {


    url: {

        type: String,

        default: "",

    },


    publicId: {

        type: String,

        default: "",

    },


},



photos: {

    type: [photoSchema],

    validate: {

        validator: function(photos){

            return photos.length <= 6;

        },

        message:
        "Maximum 6 photos allowed."

    }

},



/* -------------------------------------------------------------------------- */
/*                              Skills / Interests                             */
/* -------------------------------------------------------------------------- */


skills: [

    skillSchema

],



interests: [

    {

        type: String,

        trim: true,

    }

],



languages: [

    languageSchema

],



/* -------------------------------------------------------------------------- */
/*                              Social Links                                  */
/* -------------------------------------------------------------------------- */


socialLinks: {


    github: {

        type: String,

        default: "",

    },


    linkedin: {

        type: String,

        default: "",

    },


    portfolio: {

        type: String,

        default: "",

    },


    instagram: {

        type: String,

        default: "",

    },


    twitter: {

        type: String,

        default: "",

    },


},



/* -------------------------------------------------------------------------- */
/*                                Privacy                                     */
/* -------------------------------------------------------------------------- */


privacy: {


    publicProfile: {

        type: Boolean,

        default: true,

    },


    showEmail: {

        type: Boolean,

        default: false,

    },


    showSocialLinks: {

        type: Boolean,

        default: true,

    },


    allowMessages: {

        type: Boolean,

        default: true,

    },


},



/* -------------------------------------------------------------------------- */
/*                                Purpose                                     */
/* -------------------------------------------------------------------------- */


activePurpose: {

    type: String,

    enum: Object.values(MATCH_PURPOSES),

    default: MATCH_PURPOSES.STUDY_PARTNER,

},



enabledPurposes: [

    {

        type: String,

        enum: Object.values(MATCH_PURPOSES),

    }

],



/* -------------------------------------------------------------------------- */
/*                              Profile Status                                */
/* -------------------------------------------------------------------------- */


profileCompletion: {

    type: Number,

    default: 0,

    min: 0,

    max: 100,

},



isProfileCompleted: {

    type: Boolean,

    default: false,

},



/* -------------------------------------------------------------------------- */
/*                              Online Status                                 */
/* -------------------------------------------------------------------------- */


isOnline: {

    type: Boolean,

    default: false,

},


lastSeen: Date,



/* -------------------------------------------------------------------------- */
/*                              Verification                                 */
/* -------------------------------------------------------------------------- */


isVerified: {

    type: Boolean,

    default: false,

},


},

{

timestamps:true

}

);



/* -------------------------------------------------------------------------- */
/*                                  Indexes                                   */
/* -------------------------------------------------------------------------- */


userSchema.index({

    email:1

});


userSchema.index({

    username:1

});


userSchema.index({

    "location.city":1

});


userSchema.index({

    activePurpose:1

});



/* -------------------------------------------------------------------------- */
/*                           Password Hashing                                 */
/* -------------------------------------------------------------------------- */


userSchema.pre(

"save",

async function(next){


    if(!this.isModified("password"))

        return next();



    this.password = await bcrypt.hash(

        this.password,

        12

    );



    next();


}

);



/* -------------------------------------------------------------------------- */
/*                         Compare Password                                  */
/* -------------------------------------------------------------------------- */


userSchema.methods.comparePassword = async function(password){


    return bcrypt.compare(

        password,

        this.password

    );


};



module.exports = mongoose.model(

    "User",

    userSchema

);