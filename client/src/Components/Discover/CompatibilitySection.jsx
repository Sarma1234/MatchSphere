
export default function CompatibilitySection({

    compatibility = 0,

}) {

    const getTitle = () => {

        if (compatibility >= 90)
            return "Excellent Match";

        if (compatibility >= 75)
            return "Great Match";

        if (compatibility >= 60)
            return "Good Match";

        return "Potential Match";

    };

    return (

        <section className="discover-section glass">

            <h2>

                Compatibility

            </h2>

            <div className="compatibility-card">

                <div className="compatibility-circle">

                    {compatibility}%

                </div>

                <div className="compatibility-info">

                    <h3>

                        {getTitle()}

                    </h3>

                    <p>

                        This compatibility score is calculated using your
                        shared skills, interests, location, active purpose,
                        and purpose-specific preferences.

                    </p>

                    <div className="compatibility-tags">

                        <span className="compatibility-tag">

                            Skills

                        </span>

                        <span className="compatibility-tag">

                            Interests

                        </span>

                        <span className="compatibility-tag">

                            Purpose

                        </span>

                        <span className="compatibility-tag">

                            Location

                        </span>

                    </div>

                </div>

            </div>

        </section>

    );

}

