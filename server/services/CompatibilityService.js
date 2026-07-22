class CompatibilityService {

    calculate(
        currentUser,
        candidate,
        currentPurpose,
        candidatePurpose
    ) {

        let score = 0;

        /* ------------------------------------------------------------------ */
        /*                         Purpose Answers (40)                       */
        /* ------------------------------------------------------------------ */

        if (currentPurpose && candidatePurpose) {

            const currentAnswers = currentPurpose.answers || {};
            const candidateAnswers = candidatePurpose.answers || {};

            let matched = 0;
            let total = 0;

            for (const key of Object.keys(currentAnswers)) {

                total++;

                if (
                    candidateAnswers[key] !== undefined &&
                    candidateAnswers[key] === currentAnswers[key]
                ) {

                    matched++;

                }

            }

            if (total > 0) {

                score += Math.round((matched / total) * 40);

            }

        }

        /* ------------------------------------------------------------------ */
        /*                             Skills (25)                            */
        /* ------------------------------------------------------------------ */

        const currentSkills = new Set(
            currentUser.skills.map(skill =>
                skill.name.toLowerCase()
            )
        );

        let commonSkills = 0;

        candidate.skills.forEach(skill => {

            if (
                currentSkills.has(skill.name.toLowerCase())
            ) {

                commonSkills++;

            }

        });

        score += Math.min(commonSkills * 5, 25);

        /* ------------------------------------------------------------------ */
        /*                           Interests (15)                           */
        /* ------------------------------------------------------------------ */

        const currentInterests = new Set(
            currentUser.interests.map(i =>
                i.toLowerCase()
            )
        );

        let commonInterests = 0;

        candidate.interests.forEach(interest => {

            if (
                currentInterests.has(
                    interest.toLowerCase()
                )
            ) {

                commonInterests++;

            }

        });

        score += Math.min(commonInterests * 3, 15);

        /* ------------------------------------------------------------------ */
        /*                           Location (10)                            */
        /* ------------------------------------------------------------------ */

        if (

            currentUser.location?.city &&
            candidate.location?.city &&
            currentUser.location.city === candidate.location.city

        ) {

            score += 10;

        }

        /* ------------------------------------------------------------------ */
        /*                          Languages (5)                             */
        /* ------------------------------------------------------------------ */

        const currentLanguages = new Set(

            currentUser.languages.map(language =>
                language.name.toLowerCase()
            )

        );

        let commonLanguages = 0;

        candidate.languages.forEach(language => {

            if (
                currentLanguages.has(
                    language.name.toLowerCase()
                )
            ) {

                commonLanguages++;

            }

        });

        score += Math.min(commonLanguages * 2, 5);

        /* ------------------------------------------------------------------ */
        /*                    Profile Completion (5)                          */
        /* ------------------------------------------------------------------ */

        if (candidate.isProfileCompleted) {

            score += 5;

        }

        return Math.min(score, 100);

    }

}

module.exports = new CompatibilityService();