
export default function SkillsSection({ skills = [] }) {

    return (

        <section className="discover-section glass">

            <h2>Skills</h2>

            <div className="skills-grid">

                {skills.length > 0 ? (

                    skills.map((skill, index) => {

                        const skillName =
                            typeof skill === "string"
                                ? skill
                                : skill?.name;

                        return (

                            <span

                                key={`${skillName}-${index}`}

                                className="skill-chip"

                            >

                                {skillName}

                            </span>

                        );

                    })

                ) : (

                    <p className="empty-text">

                        No skills added yet.

                    </p>

                )}

            </div>

        </section>

    );

}

