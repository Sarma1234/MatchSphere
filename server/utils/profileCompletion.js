const calculateProfileCompletion = (user) => {

    let score = 0;


    // Basic Information

    if (user.fullName)
        score += 10;


    if (user.username)
        score += 5;


    if (user.headline)
        score += 5;


    if (user.bio)
        score += 10;



    // Profile Photo

    if (
        user.photos &&
        user.photos.length > 0
    )
        score += 10;



    // Professional

    if (
        user.professional?.title
    )
        score += 5;


    if (
        user.professional?.company
    )
        score += 5;



    // Education

    if (
        user.education?.college
    )
        score += 5;


    if (
        user.education?.degree
    )
        score += 5;


    if (
        user.education?.graduationYear
    )
        score += 5;



    // Location

    if (
        user.location?.city &&
        user.location?.country
    )
        score += 10;



    // Skills

    if (
        user.skills &&
        user.skills.length >= 3
    )
        score += 10;



    // Interests

    if (
        user.interests &&
        user.interests.length >= 3
    )
        score += 10;



    return score;

};


module.exports = calculateProfileCompletion;