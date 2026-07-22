
export default function PurposeSection({ profile }) {

    const purpose =
        profile?.activePurpose
            ?.replace(/_/g, " ")
            ?.replace(/\b\w/g, char => char.toUpperCase());

    const purposeAnswers =
        profile?.purposeAnswers || {};

    return (

        <section className="discover-section glass">

            <h2>

                {purpose || "Purpose"}

            </h2>

            <div className="purpose-grid">

                {Object.keys(purposeAnswers).length > 0 ? (

                    Object.entries(purposeAnswers).map(

                        ([key, value]) => (

                            <div

                                key={key}

                                className="purpose-card"

                            >

                                <h4>

                                    {key

                                        .replace(/_/g, " ")

                                        .replace(

                                            /\b\w/g,

                                            char => char.toUpperCase()

                                        )}

                                </h4>

                                <p>

                                    {Array.isArray(value)

                                        ? value.join(", ")

                                        : value === null ||

                                          value === undefined ||

                                          value === ""

                                        ? "Not specified"

                                        : String(value)}

                                </p>

                            </div>

                        )

                    )

                ) : (

                    <p className="empty-text">

                        No purpose details available.

                    </p>

                )}

            </div>

        </section>

    );

}

